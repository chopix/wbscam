import { Composer } from 'grammy'
import { InlineKeyboard } from 'grammy'

const composer = new Composer()


composer.command('start', async ctx => {
	try {
    const inline = new InlineKeyboard().text('Создать объявление WB', 'createWbAd')
    await ctx.reply(`Привет, создай объявление`, {reply_markup: inline})
  } catch (error) {
    console.log(error)
    await ctx.reply(`Произошла ошибка`)
  }
})

export default composer