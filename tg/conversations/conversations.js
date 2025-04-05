import { Composer } from 'grammy'
import { createWbAdConversation } from './createWbAdConversation.js'
import { createConversation } from '@grammyjs/conversations'

const composer = new Composer()


composer.use(createConversation(createWbAdConversation))


export default composer