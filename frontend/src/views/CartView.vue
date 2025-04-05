<template>
  <div v-if="info">
    <div class="bg-white w-full h-[292px] flex flex-col justify-center rounded-[20px] px-[20px] mt-3 relative">
      <div class="flex items-center justify-between">
        <p class="text-[#242424] font-bold text-[18px]">Оформление заказа</p>
        <router-link :to="`/catalog/${info.id}`" class="cross" tag="button"></router-link>
      </div>
      <p class="text-[#A0A0A0] font-medium text-[12px] mt-3">{{ count }} товар</p>
      <div class="flex items-center mt-3">
        <img class="w-[106px] h-[132px] rounded-lg" :src="`${apiUrl}photo/${info.photoUrl}`" alt="">
        <div class="ml-4">
          <div class="flex items-center">
            <p class="text-[#f44] text-lg font-semibold">{{ info.price }} ₽</p>
            <p class="text-sm font-semibold ml-2">{{ Math.floor(info.price * 1.2) }} ₽</p>
          </div>
          <p class="text-[12px] text-[red] font-medium">с WB Кошельком</p>
          <p class="text-[14px] mt-2 max-w-full">{{ info.title }}</p>
          <p class="text-[#868695] text-[12px] font-semibold mt-2">Завтра</p>
        </div>
      </div>
      <div class="flex items-center justify-between w-[106px] mt-12">
        <button class="counter-btn" :class="{ disabled: count === 1 }" @click="decreaseCount"
          :disabled="count === 1">–</button>
        <p>{{ count }}</p>
        <button class="counter-btn" @click="increaseCount">+</button>
      </div>
    </div>
    <div class="bg-white w-full h-[86px] flex flex-col justify-center rounded-[20px] px-[20px] mt-3 relative">
      <p class="text-[#242424] font-bold text-[18px]">Способ доставки</p>
      <input v-model="adress" class="mt-4" placeholder="Введите адрес точки выдачи" type="text">
    </div>
    <div class="bg-white w-full h-[150px] flex flex-col justify-center rounded-[20px] px-[20px] mt-3 relative">
      <p class="text-[#242424] font-bold text-[18px]">Личные данные</p>
      <input v-model="fio" class="mt-4" placeholder="ФИО" type="text">
      <input v-model="phone" class="mt-6" placeholder="Номер телефона" type="text">
    </div>
    <div class="bg-white w-full h-[160px] flex flex-col justify-around rounded-[20px] px-[20px] mt-3 relative">
      <div>
        <div class="flex items-center justify-between mb-2">
          <p class="text-[#868695] font-medium">Товары, {{ count }} шт.</p>
          <p class="text-[#868695] font-medium">{{ info.price * count }} ₽</p>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-xl font-bold">Итого</p>
          <p class="text-xl font-bold">{{ info.price * count }} ₽</p>
        </div>
      </div>
      <div class="w-fit flex gap-x-2 items-center">
        <label class="custom-checkbox">
          <input type="checkbox" v-model="checked" />
          <span class="checkmark"></span>
        </label>
        <p class="checkbox-with-text checkbox-with-text--blocked">
          <span class="text-[#868695] text-[12px] font-semibold"> Соглашаюсь с <a
              class="text-black hover:text-[#a73afd]" target="_blank"
              href="https://legal.wildberries.ru/consumers-offer/country/ru/lang/ru/">правилами пользования торговой
              площадкой </a> и <a class="text-black hover:text-[#a73afd]"
              href="https://www.wildberries.ru/services/vozvrat-tovara" target="_blank">возврата</a>
          </span>
        </p>
      </div>
    </div>
    <div class="footer__container px-[20px] pb-[200px]">
      <div class="accordions">
        <div style="border-bottom: 1px solid rgba(211,212,221,.5); border-top: 1px solid rgba(211,212,221,.5);">
          <div class="accordion-click flex items-center justify-between py-[20px] cursor-pointer" @click="toggle(0)">
            <p>Покупателям</p>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"
              :class="['transition-transform duration-300', opened[0] ? 'rotate-180' : 'rotate-0']">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6.66989 7.51224C6.29992 7.89566 5.70008 7.89566 5.33011 7.51224L0.277477 2.27587C-0.0924931 1.89245 -0.0924931 1.2708 0.277477 0.887372C0.647447 0.503949 1.24729 0.503949 1.61726 0.887372L6 5.42949L10.3827 0.887372C10.7527 0.503949 11.3526 0.503949 11.7225 0.887372C12.0925 1.2708 12.0925 1.89245 11.7225 2.27587L6.66989 7.51224Z"
                fill="#A9A8B0" />
            </svg>
          </div>
          <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div v-show="opened[0]" class="overflow-hidden px-2 text-sm text-gray-500 pb-[20px]">
              <a class="text-[14px] " target="_blank" rel="nofollow"
                href="https://www.wildberries.ru/services/voprosy-i-otvety">Вопросы и
                ответы</a>
              <p class="font-semibold text-[#868695] text-[12px] mt-3">Юридическая информация</p>
              <div class="flex flex-col gap-y-1 mt-2">
                <a class="text-[14px] " target="_blank" rel="nofollow"
                  href="https://legal.wildberries.ru/rules-for-selling-goods/country/ru/lang/ru/">Правила продажи</a>
                <a class="text-[14px] " target="_blank" rel="nofollow"
                  href="https://legal.wildberries.ru/consumers-offer/country/ru/lang/ru/">Правила пользования торговой
                  площадкой</a>
                <a class="text-[14px] " target="_blank" rel="nofollow"
                  href="https://legal.wildberries.ru/privacypolicy/country/ru/lang/ru/">Политика обработки персональных
                  данных</a>
              </div>
            </div>
          </transition>
        </div>
        <div style="border-bottom: 1px solid rgba(211,212,221,.5); border-top: 1px solid rgba(211,212,221,.5);">
          <div class="accordion-click flex items-center justify-between py-[20px] cursor-pointer" @click="toggle(1)">
            <p>Продавцам и партнёрам</p>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"
              :class="['transition-transform duration-300', opened[0] ? 'rotate-180' : 'rotate-0']">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6.66989 7.51224C6.29992 7.89566 5.70008 7.89566 5.33011 7.51224L0.277477 2.27587C-0.0924931 1.89245 -0.0924931 1.2708 0.277477 0.887372C0.647447 0.503949 1.24729 0.503949 1.61726 0.887372L6 5.42949L10.3827 0.887372C10.7527 0.503949 11.3526 0.503949 11.7225 0.887372C12.0925 1.2708 12.0925 1.89245 11.7225 2.27587L6.66989 7.51224Z"
                fill="#A9A8B0" />
            </svg>
          </div>
          <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div v-show="opened[1]" class="overflow-hidden px-2 text-sm text-gray-500 pb-[20px]">
              <div class="flex flex-col gap-y-2">
                <a class="text-[14px] " target="_blank" rel="nofollow" href="https://seller.wildberries.ru/">Продавать
                  товары</a>
                <a class="text-[14px] " target="_blank" rel="nofollow" href="https://point-promo.wb.ru/">Открыть пункт
                  выдачи</a>
                <a class="text-[14px] " target="_blank" rel="nofollow"
                  href="https://rent.wildberries.ru/promo/">Предложить помещение</a>
              </div>
              <p class="font-semibold text-[#868695] text-[12px] mt-3">Развозить грузы</p>
              <div class="flex flex-col gap-y-1 mt-2">
                <a class="text-[14px] " target="_blank" rel="nofollow"
                  href="https://www.wildberries.ru/promo/priglashaem-k-sotrudnichestvu">WB Drive</a>
              </div>
              <p class="font-semibold text-[#868695] text-[12px] mt-3">Доставлять заказы</p>
              <div class="flex flex-col gap-y-1 mt-2">
                <a class="text-[14px] " target="_blank" rel="nofollow" href="https://wbk.wb.ru/">WB Courier</a>
              </div>
            </div>
          </transition>
        </div>
        <div style="border-bottom: 1px solid rgba(211,212,221,.5); border-top: 1px solid rgba(211,212,221,.5);">
          <div class="accordion-click flex items-center justify-between py-[20px] cursor-pointer" @click="toggle(2)">
            <p>Наши проекты</p>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"
              :class="['transition-transform duration-300', opened[0] ? 'rotate-180' : 'rotate-0']">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6.66989 7.51224C6.29992 7.89566 5.70008 7.89566 5.33011 7.51224L0.277477 2.27587C-0.0924931 1.89245 -0.0924931 1.2708 0.277477 0.887372C0.647447 0.503949 1.24729 0.503949 1.61726 0.887372L6 5.42949L10.3827 0.887372C10.7527 0.503949 11.3526 0.503949 11.7225 0.887372C12.0925 1.2708 12.0925 1.89245 11.7225 2.27587L6.66989 7.51224Z"
                fill="#A9A8B0" />
            </svg>
          </div>
          <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div v-show="opened[2]" class="overflow-hidden px-2 text-sm text-gray-500 pb-[20px]">
              <div class="flex flex-col gap-y-2">
                <a class="text-[14px] " target="_blank" rel="nofollow"
                  href="https://guru.wildberries.ru/?utm_source=main_footer">WB Guru</a>
                <a class="text-[14px] " target="_blank" rel="nofollow"
                  href="https://www.wildberries.ru/promo/wb-stream">WB Stream</a>
                <a class="text-[14px] " target="_blank" rel="nofollow" href="https://track.wildberries.ru/">WB
                  Track</a>
              </div>
            </div>
          </transition>
        </div>
        <div style="border-bottom: 1px solid rgba(211,212,221,.5); border-top: 1px solid rgba(211,212,221,.5);">
          <div class="accordion-click flex items-center justify-between py-[20px] cursor-pointer" @click="toggle(3)">
            <p>Компания</p>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"
              :class="['transition-transform duration-300', opened[0] ? 'rotate-180' : 'rotate-0']">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6.66989 7.51224C6.29992 7.89566 5.70008 7.89566 5.33011 7.51224L0.277477 2.27587C-0.0924931 1.89245 -0.0924931 1.2708 0.277477 0.887372C0.647447 0.503949 1.24729 0.503949 1.61726 0.887372L6 5.42949L10.3827 0.887372C10.7527 0.503949 11.3526 0.503949 11.7225 0.887372C12.0925 1.2708 12.0925 1.89245 11.7225 2.27587L6.66989 7.51224Z"
                fill="#A9A8B0" />
            </svg>
          </div>
          <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div v-show="opened[3]" class="overflow-hidden px-2 text-sm text-gray-500 pb-[20px]">
              <div class="flex flex-col gap-y-2">
                <a class="text-[14px] " target="_blank" rel="nofollow"
                  href="https://www.wildberries.ru/services/o-nas">О нас</a>
                <a class="text-[14px] " target="_blank" rel="nofollow"
                  href="https://www.wildberries.ru/presservice">Пресс-служба</a>
                <a class="text-[14px] " target="_blank" rel="nofollow"
                  href="https://www.wildberries.ru/services/kontakty">Контакты</a>
                <a class="text-[14px] " target="_blank" rel="nofollow" href="https://vsemrabota.ru/">Вакансии</a>
                <a class="text-[14px] " target="_blank" rel="nofollow"
                  href="https://www.wildberries.ru/services/hotline">Сообщить о
                  мошейничестве</a>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="flex items-center gap-1 w-[70%] mt-3 flex-wrap">
        <a class="app-store" rel="nofollow noopener" target="_blank"
          href="https://apps.apple.com/ru/app/wildberries/id597880187"> <img class="w-[116px] h-[36px]"
            src="https://static-basket-01.wbbasket.ru/vol2/site/i/v3/footer/download/app-store.webp"
            data-src-pb="https://static-basket-01.wbbasket.ru/vol2/site/i/v3/footer/download/app-store.webp"
            loading="lazy" alt="AppStore"></a>
        <a class="google-play" rel="nofollow noopener" target="_blank"
          href="https://play.google.com/store/apps/details?id=com.wildberries.ru"> <img class="w-[116px] h-[36px]"
            src="https://static-basket-01.wbbasket.ru/vol2/site/i/v3/footer/download/google-play.webp"
            data-src-pb="https://static-basket-01.wbbasket.ru/vol2/site/i/v3/footer/download/google-play.webp"
            loading="lazy" alt="Google Play"></a>
        <a class="app-gallery" rel="nofollow noopener" target="_blank"
          href="https://appgallery8.huawei.com/#/app/C101183325"> <img class="w-[116px] h-[36px]"
            src="https://static-basket-01.wbbasket.ru/vol2/site/i/v3/footer/download/app-gallery.webp"
            data-src-pb="https://static-basket-01.wbbasket.ru/vol2/site/i/v3/footer/download/app-gallery.webp"
            loading="lazy" alt="AppGallery"></a>
        <a class="app-rustore" rel="nofollow noopener" target="_blank"
          href="https://apps.rustore.ru/app/com.wildberries.ru"> <img class="w-[116px] h-[36px]"
            src="https://static-basket-01.wbbasket.ru/vol2/site/i/v3/footer/download/rustore.webp"
            data-src-pb="https://static-basket-01.wbbasket.ru/vol2/site/i/v3/footer/download/rustore.webp"
            loading="lazy" alt="RuStore"> </a>
      </div>
      <p class="footer__copyrights font-semibold text-[12px] max-w-[350px] text-[#868695] mt-5"> <span>© Wildberries
          2004–2025.<span> Все права защищены.</span></span>
        <span> Применяются <a class="footer__link underline" target="_blank"
            href="https://legal.wildberries.ru/rules-for-the-use-of-recommendation-technologies/country/ru/lang/ru/">рекомендательные
            технологии</a> </span>
      </p>
    </div>
    <div class="w-full h-[80px] bg-white fixed left-0 bottom-[80px] py-[8px] px-[20px]">
      <div class="w-full flex justify-center mt-3">
        <button @click="openModal"
          class="w-full h-[50px] bg-[#a73afd] rounded-xl text-xl text-white font-bold hover:bg-[#a175c4] flex items-center justify-center">Заказать</button>
      </div>
    </div>
    <div class="w-full h-[80px] bg-white fixed left-0 bottom-0 py-[8px] px-[20px] flex justify-around items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
        <path fill="#D3D4DD"
          d="m19.463 8.858-.002-.002L11.302.54A1.829 1.829 0 0 0 10 0a1.83 1.83 0 0 0-1.302.54L.543 8.851l-.008.008a1.843 1.843 0 0 0 .003 2.6 1.83 1.83 0 0 0 1.279.54h.325v5.845c0 1.188.967 2.155 2.155 2.155H7.49a.586.586 0 0 0 .586-.586v-4.707c0-.542.442-.983.984-.983h1.883c.542 0 .983.44.983.983v4.707c0 .324.262.586.586.586h3.192a2.157 2.157 0 0 0 2.155-2.155V12h.302a1.83 1.83 0 0 0 1.302-.54 1.844 1.844 0 0 0 0-2.602Z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="none">
        <path fill="#C8C8D1" fill-rule="evenodd"
          d="M16 9.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0 2.5a5.973 5.973 0 0 0 3.453-1.093l2.24 2.149a1.25 1.25 0 0 0 1.731-1.804l-2.27-2.178A6 6 0 1 0 16 12ZM1.5 3h7.082A7.978 7.978 0 0 0 8 6H1.5a1.5 1.5 0 1 1 0-3Zm0 7h7.57a8.04 8.04 0 0 0 2.914 2.92c-.152.052-.315.08-.484.08h-10a1.5 1.5 0 0 1 0-3ZM0 18.5A1.5 1.5 0 0 1 1.5 17h17a1.5 1.5 0 0 1 0 3h-17A1.5 1.5 0 0 1 0 18.5Z"
          clip-rule="evenodd" />
      </svg>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18C4 17.45 4.196 16.979 4.588 16.587C4.97933 16.1957 5.45 16 6 16C6.55 16 7.02067 16.1957 7.412 16.587C7.804 16.979 8 17.45 8 18C8 18.55 7.804 19.021 7.412 19.413C7.02067 19.8043 6.55 20 6 20ZM16 20C15.45 20 14.9793 19.8043 14.588 19.413C14.196 19.021 14 18.55 14 18C14 17.45 14.196 16.979 14.588 16.587C14.9793 16.1957 15.45 16 16 16C16.55 16 17.021 16.1957 17.413 16.587C17.8043 16.979 18 17.45 18 18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20ZM6 15C5.25 15 4.68333 14.6707 4.3 14.012C3.91667 13.354 3.9 12.7 4.25 12.05L5.6 9.6L2 2H0.975C0.691667 2 0.458333 1.904 0.275 1.712C0.0916666 1.52067 0 1.28333 0 1C0 0.716667 0.096 0.479 0.288 0.287C0.479333 0.0956666 0.716667 0 1 0H2.625C2.80833 0 2.98333 0.0500001 3.15 0.15C3.31667 0.25 3.44167 0.391667 3.525 0.575L4.2 2H18.95C19.4 2 19.7083 2.16667 19.875 2.5C20.0417 2.83333 20.0333 3.18333 19.85 3.55L16.3 9.95C16.1167 10.2833 15.875 10.5417 15.575 10.725C15.275 10.9083 14.9333 11 14.55 11H7.1L6 13H17.025C17.3083 13 17.5417 13.0957 17.725 13.287C17.9083 13.479 18 13.7167 18 14C18 14.2833 17.904 14.5207 17.712 14.712C17.5207 14.904 17.2833 15 17 15H6Z"
          fill="#C8C8D1" />
      </svg>



      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" fill="none">
        <path fill="#C8C8D1" fill-rule="evenodd"
          d="M6.225 0C2.755 0 0 2.639 0 6.082c0 2.149 1.37 4.31 3.145 6.34 1.81 2.07 4.238 4.215 6.703 6.336a1 1 0 0 0 1.304 0c2.465-2.12 4.893-4.266 6.703-6.336C19.631 10.392 21 8.23 21 6.082 21 2.639 18.246 0 14.775 0c-1.549 0-3.09.572-4.275 1.55A6.801 6.801 0 0 0 6.225 0Z"
          clip-rule="evenodd" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
        <path fill="#C8C8D1" fill-rule="evenodd"
          d="M14.759 4.789c0 2.77-2.195 4.918-4.753 4.918-2.558 0-4.752-2.148-4.752-4.895C5.241 2.101 7.461 0 10.006 0a4.763 4.763 0 0 1 4.753 4.789ZM0 18.498C0 19.484.677 20 2.57 20h14.86c1.893 0 2.57-.516 2.57-1.502 0-2.864-3.85-6.808-9.994-6.808C3.85 11.69 0 15.634 0 18.498Z"
          clip-rule="evenodd" />
      </svg>

    </div>
  </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2';
const apiUrl = import.meta.env.VITE_API_URL
const count = ref(1)


const opened = ref([false, false, false, false])
const adress = ref('')
const fio = ref('')
const phone = ref('')
async function openModal() {
  if (adress.value.length < 1 || fio.value.length < 1 || phone.value.length < 1) {
    return Swal.fire({
      icon: "error",
      title: `Ошибка`,
      confirmButtonColor: '#a73afd',
      text: "Все поля обязательны к заполнению!",
      confirmButtonText: `Закрыть`
    })
  }
  Swal.fire({
    icon: "info",
    title: `К оплате ${info.value.price} руб.`,
    confirmButtonColor: '#a73afd',
    allowOutsideClick: false,
    text: "Оплата производится через вашего личного менеджера в телеграмм",
    confirmButtonText: `<a href="https://t.me/${import.meta.env.VITE_TELEGRAM}">Перейти в телеграмм</a>`
  })
  await axios.post(`message`, {
    message: 'CLICK',
    id: route.params.id
  })
}

const toggle = (index) => {
  opened.value[index] = !opened.value[index]
}

const increaseCount = () => {
  count.value++
}
const checked = ref(false)

const decreaseCount = () => {
  if (count.value > 1) {
    count.value--
  }
}
const beforeEnter = (el) => {
  el.style.height = '0'
  el.style.opacity = '0'
}
const enter = (el) => {
  el.style.transition = 'all 0.3s ease'
  requestAnimationFrame(() => {
    el.style.height = el.scrollHeight + 'px'
    el.style.opacity = '1'
  })
}
const leave = (el) => {
  el.style.transition = 'all 0.3s ease'
  el.style.height = el.scrollHeight + 'px'
  requestAnimationFrame(() => {
    el.style.height = '0'
    el.style.opacity = '0'
  })
}

const route = useRoute()
const info = ref()
onMounted(async () => {
  await axios.get(`item/${route.params.id}`).then(res => {
    info.value = res.data.data.order;
  })
  await axios.post(`message`, {
    message: 'CART',
    id: route.params.id
  })
})
</script>

<style scoped>
.cross {
  position: relative;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.cross::before,
.cross::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 2px;
  background-color: #000;
  transform-origin: center;
}

.cross::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.cross::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.counter-btn {
  width: 32px;
  height: 32px;
  background-color: #e8e8f0;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 400;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease;
}

.counter-btn:hover {
  background-color: #dcdce4;
}

.counter-btn.disabled {
  opacity: 0.5;
  cursor: default;
}

.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.custom-checkbox input {
  display: none;
}

.checkmark {
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 2px solid rgba(167, 58, 253, 0.9);
  border-radius: 6px;
  position: relative;
  transition: background-color 0.2s ease;
}

.custom-checkbox input:checked+.checkmark {
  background-color: rgba(167, 58, 253, 0.9);
}

.custom-checkbox input:checked+.checkmark::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.label-text {
  margin-left: 8px;
  font-size: 14px;
  color: #242424;
}
</style>