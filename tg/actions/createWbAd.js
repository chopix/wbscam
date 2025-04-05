import { Composer } from 'grammy'


const composer = new Composer()

composer.callbackQuery('createWbAd', async ctx => {
  try {
    await ctx.conversation.enter('createWbAdConversation')
  } catch (error) {
    await ctx.reply(`Произошла ошибка`)
    console.log(error)
  }
})


export default composer