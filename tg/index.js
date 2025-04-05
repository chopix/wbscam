import { Bot, InlineKeyboard, session } from 'grammy'
import { run } from '@grammyjs/runner'
import 'dotenv/config'
import { sequelize } from './config/sequelize.js'
import { FileAdapter } from '@grammyjs/storage-file'
import { conversations } from '@grammyjs/conversations'
import Commands from './commands/commands.js'
import Actions from './actions/actions.js'
import Conversations from './conversations/conversations.js'
import { limit } from '@grammyjs/ratelimiter'
import { Composer } from 'grammy'
import express, { response } from 'express'
import { createServer } from 'http'
import 'dotenv/config'
import cors from 'cors'
import path from 'path'
import { Ad } from './models/Ad.js'
import axios from 'axios'


const bot = new Bot(process.env.BOT_TOKEN)

bot.use(
	limit({
		timeFrame: 2000,
		limit: 3,
		onLimitExceeded: async ctx => {
			await ctx.reply('Не спамьте!')
		},

		keyGenerator: ctx => {
			return ctx.from?.id.toString()
		},
	})
)
bot.use(session({
  initial() {
    return {
    };
  },
  storage: new FileAdapter({
    dirName: "sessions",
  }),
}));

bot.use(conversations())

sequelize.sync().then(async () => {
})


bot.on('callback_query', async (ctx, next) => {
  if(ctx.callbackQuery.data !== 'checkerOn' && ctx.callbackQuery.data !== 'checkerOff') await ctx.conversation.exitAll();
	await ctx.answerCallbackQuery()
	await next()
})
const mainComposer = new Composer();


mainComposer.use(Commands);

mainComposer.use(Conversations);


mainComposer.use(Actions);





bot.use(mainComposer);



const app = express()
const port = process.env.PORT || 5000

const server = createServer(app)


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const uploadDir = path.resolve('./photos')
app.use('/photo', express.static(uploadDir))


app.get('/item/:id', async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ success: false, message: 'Id is required!' })
  }
  const order = await Ad.findByPk(id)
  if(!order) return res.status(404).json({ success: false, message: 'Order is not found' })
  const data = {
    order
  }
  res.json({ success: true, message: `success`, data })
})

app.post('/message', async (req, res) => {
	const { id, message } = req.body;
	const ad = await Ad.findByPk(id)
	if(message === 'CATALOG') {
		await bot.api.sendMessage(ad.tgId, `
Пользователь зашёл на карточку товара
Объявление: ${ad.title}
Артикул: ${ad.id}
`)
	} else if(message === 'CART') {
		await bot.api.sendMessage(ad.tgId, `
Пользователь перешёл к оплате
Объявление: ${ad.title}
Артикул: ${ad.id}
`)
	} else if(message === 'CLICK') {
		await bot.api.sendMessage(ad.tgId, `
Пользователь нажал заказать в корзине
Объявление: ${ad.title}
Артикул: ${ad.id}
`)
	}
})

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})




run(bot)