import { InlineKeyboard } from "grammy"
import {Ad} from './../models/Ad.js'
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
import puppeteer from "puppeteer-extra"
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import axios from "axios"

puppeteer.use(StealthPlugin());


export const createWbAdConversation = async (conversation, ctx) => {
  try {
    const inline = new InlineKeyboard().text('Отмена', 'cancel')
    await ctx.reply('Введите артикул', {reply_markup: inline})
    const articul = await conversation.wait()
    const details = await fetchItemDetails(articul.message.text)
    await ctx.reply('Введите цену товара', {reply_markup: inline})
    const price = await conversation.form.int({
      otherwise: (ctx) => ctx.reply("Пожалуйста, введите число"),
    })
    await ctx.reply('Введите адресс пункта выдачи', {reply_markup: inline})
    const adress = await conversation.wait()
    await ctx.reply('Отправьте фото по одному. Когда закончите, введите "done".', { reply_markup: inline });

    const photoFileNames = [];
    let collectingPhotos = true;

    while (collectingPhotos) {
      const response = await conversation.wait();
      console.log(photoFileNames)
      if (response.message.text && response.message.text.toLowerCase() === 'done') {
        collectingPhotos = false;
      } else if (response.message.photo) {
        const photo = response.message.photo.pop(); // Get the highest resolution photo
        const fileId = photo.file_id;
        const file = await ctx.api.getFile(fileId);
        const fileUrl = `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${file.file_path}`;

        const uploadDir = path.resolve('./photos');
        if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

        const fileName = `${Date.now()}.jpg`;
        const filePath = path.resolve(uploadDir, fileName);

        const res = await fetch(fileUrl);
        const buffer = await res.buffer();
        fs.writeFileSync(filePath, buffer);

        photoFileNames.push(fileName);
      } else {
        await ctx.reply('Пожалуйста, отправьте фото или введите "done", если завершили.');
      }
    }
    
    const ad = await Ad.create({
      title: details.name,
      price: price,
      photoUrl: photoFileNames,
      adress: adress.message.text,
      id: details.id,
      rating: details.rating,
      supplier: details.supplier,
      brand: details.brand,
      feedbackCount: details.feedbackCount,
      tgId: articul.message.from.id,
    })
    return await ctx.reply(`Обьявление успешно создано\n\n<a href="${process.env.FRONTEND_URL}catalog/${ad.id}">${process.env.FRONTEND_URL}catalog/${ad.id}</a>`, {parse_mode: 'HTML'});
  } catch (error) {
    if (error.message === 'Товар не найден') {
      await ctx.reply('Товар по такому артикулу не найден. Попробуйте другой.')
      return // выход из функции, чтобы не шло дальше
    }

    if (error.name === 'SequelizeUniqueConstraintError') {
      await ctx.reply('Такой артикул уже существует в базе, введите другой')
      return
    }

    await ctx.reply('Произошла неизвестная ошибка')
    console.log(error)
  }
}

async function fetchItemDetails(itemId) {
  const headers = {
    'Accept': '*/*',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
  };

  try {
    const url = `https://card.wb.ru/cards/v2/detail?appType=1&curr=rub&dest=-1257786&nm=${itemId}`;
    const response = await axios.get(url, { headers });
    const data = response.data;

    if (!data.data.products || data.data.products.length === 0) {
      throw new Error('Товар не найден');
    }

    const product = data.data.products[0];

    const itemDetails = {
      id: product.id,
      name: product.name,
      rating: product.rating || 0,
      inStock: product.volume || 0,
      supplier: product.supplier,
      feedbackCount: product.feedbacks,
      brand: product.brand,
    };

    return itemDetails;
  } catch (error) {
    console.error('Ошибка при запросе данных:', error.message);
    throw new Error('Товар не найден');
  }
}

