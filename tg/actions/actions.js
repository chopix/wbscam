import { Composer } from 'grammy'
import createWbAd from './createWbAd.js'


const composer = new Composer()

composer.use(createWbAd)


export default composer