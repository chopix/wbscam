<template>
  <div v-if="info" class="wrapper">
    <div class="image w-full flex justify-center">
      <img class="w-[95%] h-[650px] rounded-3xl" :src="`${apiUrl}photo/${info.photoUrl}`" alt="">
    </div>
    <div class="bg-white w-full h-[72px] flex items-center justify-between rounded-[20px] px-[20px] mt-3">
      <div>
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
            <path fill="#F44" fill-rule="evenodd"
              d="m1.522 9.147-.74-.477a1.71 1.71 0 0 1-.53-2.33l.48-.785c.197-.322.282-.7.24-1.076L.875 3.57a1.71 1.71 0 0 1 1.501-1.883l.816-.095a1.71 1.71 0 0 0 1.022-.502L4.78.513a1.71 1.71 0 0 1 2.442 0l.566.577a1.71 1.71 0 0 0 1.022.502l.816.095a1.71 1.71 0 0 1 1.5 1.883l-.098.909c-.04.375.044.754.241 1.076l.48.786a1.71 1.71 0 0 1-.53 2.329l-.74.477a1.71 1.71 0 0 0-.69.88l-.28.818a1.71 1.71 0 0 1-2.19 1.055l-.744-.265a1.71 1.71 0 0 0-1.148 0l-.743.265a1.71 1.71 0 0 1-2.19-1.055l-.282-.817a1.71 1.71 0 0 0-.69-.881ZM8.398 4.69a.572.572 0 0 0-.807-.808l-3.995 4a.572.572 0 0 0 .807.81L8.398 4.69ZM6.853 7.716c0-.474.384-.858.856-.858h.006a.857.857 0 0 1 0 1.715H7.71a.857.857 0 0 1-.856-.857ZM4.285 4a.857.857 0 0 0 0 1.715h.006A.857.857 0 0 0 4.29 4h-.006Z"
              clip-rule="evenodd" />
          </svg>
          <p class="text-[#f44] text-lg font-semibold ml-1">{{ info.price }} ₽</p>
          <p class="text-sm font-semibold ml-2">{{ info.price * 1.2 }} ₽</p>
        </div>
        <p class="text-[12px] text-[red] font-medium">с WB Кошельком</p>
      </div>
      <div class="flex items-center gap-x-1">
        <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.83203 0.597656L9.53125 9H0.132812L4.83203 0.597656Z" fill="#605f65" />
        </svg>
        <p class="text-[12px] text-[#605f65] font-semibold">45 ₽</p>
        <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="m4.25 9.5 3.39-3.39c.04-.04.06-.06.06-.08a.1.1 0 0 0 0-.06c0-.02-.02-.04-.06-.08L4.25 2.5"
            stroke="#A9A8B0" stroke-width="1.3" stroke-linecap="round" />
        </svg>
      </div>
    </div>
    <div class="bg-white w-full h-[136px] flex flex-col justify-center rounded-[20px] px-[20px] mt-3">
      <p class="text-[#868695] font-medium mb-2">Количество: <span class="font-medium text-black">1</span></p>
      <img style="border: 2px solid #A344FA" class="w-[57px] h-[76px] rounded-xl"
        :src="`${apiUrl}photo/${info.photoUrl}`" alt="">
    </div>
    <div class="flex gap-x-3 sm:flex-col sm:items-center">
      <div
        class="bg-white w-[70%] h-[64px] flex flex-col justify-center rounded-[20px] px-[20px] mt-3 relative sm:w-full">
        <div class="flex items-center gap-x-1">
          <svg width="16" height="16" viewBox="0 0 26 26" fill="#FCA95D" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd"
              d="m13.568 1.395 3.052 7.577 7.816.704c.542.05.762.758.35 1.132l-5.927 5.386 1.776 8.012c.123.557-.452.995-.918.699l-6.716-4.248-6.717 4.248c-.467.294-1.04-.144-.918-.7l1.777-8.011-5.93-5.387c-.411-.374-.192-1.083.352-1.132L9.38 8.97l3.053-7.576a.605.605 0 0 1 1.135 0Z"
              stroke="#FCA95D" />
          </svg>

          <p class="font-bold text-lg">4,8</p>
        </div>
        <p class="text-[#868695] font-medium">{{ info.feedbackCount }} оценок</p>
        <svg style="transform: translateY(-50%)" class="absolute top-1/2 right-3" width="12" height="12" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="m4.25 9.5 3.39-3.39c.04-.04.06-.06.06-.08a.1.1 0 0 0 0-.06c0-.02-.02-.04-.06-.08L4.25 2.5"
            stroke="#A9A8B0" stroke-width="1.3" stroke-linecap="round" />
        </svg>
      </div>

      <div
        class="bg-white w-[28%] h-[64px] flex justify-between items-center rounded-[20px] pl-[20px] pr-[10px] mt-3 sm:w-full">
        <div>
          <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M.66 4.83C.55 3.62.5 3.01.7 2.54a2 2 0 0 1 .88-.96c.45-.25 1.06-.25 2.28-.25h8.3c1.22 0 1.83 0 2.28.25.4.21.7.55.88.96.2.47.14 1.08.03 2.3l-.4 4.26c-.1 1.02-.15 1.54-.38 1.92a2 2 0 0 1-.86.79c-.4.19-.92.19-1.95.19H10l-.02.02-4.47 2.87c-.06.04-.08.06-.1.05a.07.07 0 0 1-.05-.02c-.02-.02-.02-.05-.02-.12V12.04A.07.07 0 0 0 5.3 12L5.23 12h-.98c-1.03 0-1.55 0-1.95-.2a2 2 0 0 1-.86-.78c-.23-.38-.28-.9-.38-1.92l-.4-4.27Zm5.03.32a2.4 2.4 0 0 1 2.33-1.82h.16a2.2 2.2 0 0 1 .98 4.17l-.86.43a.67.67 0 1 1-.6-1.2l.86-.42a.87.87 0 0 0-.38-1.64h-.16c-.49 0-.92.33-1.04.8v.02a.67.67 0 1 1-1.3-.32l.01-.02ZM8 8.67a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
              fill="#B9B9C1" />
          </svg>
          <p class="text-[#868695] font-semibold">спросить</p>
        </div>
        <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="m4.25 9.5 3.39-3.39c.04-.04.06-.06.06-.08a.1.1 0 0 0 0-.06c0-.02-.02-.04-.06-.08L4.25 2.5"
            stroke="#A9A8B0" stroke-width="1.3" stroke-linecap="round" />
        </svg>
      </div>
    </div>
    <div class="bg-white w-full h-fit flex flex-col gap-y-2 justify-center rounded-[20px] px-[20px] mt-3 py-[10px]">
      <div
        class="bg-[#f6f6f9] text-[#242424] py-[2px] pl-[4px] pr-[8px] rounded-lg w-fit font-medium flex items-center">

        {{ info.brand }}
        <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="m4.25 9.5 3.39-3.39c.04-.04.06-.06.06-.08a.1.1 0 0 0 0-.06c0-.02-.02-.04-.06-.08L4.25 2.5"
            stroke="#A9A8B0" stroke-width="1.3" stroke-linecap="round" />
        </svg>
      </div>
      <p class="text-[#242424] font-bold text-[18px]">{{ info.title }}</p>
      <div class="px-1 py-[2px] text-sm font-bold text-white bg-primary rounded-lg w-fit">ВЫГОДКА</div>
    </div>
    <div class="bg-white w-full h-[150px] flex flex-col gap-y-2 justify-center rounded-[20px] px-[20px] mt-3">
      <div class="flex items-center justify-between">
        <p class="text-[#242424] font-bold text-[18px]">Характеристики и описание</p>
        <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="m4.25 9.5 3.39-3.39c.04-.04.06-.06.06-.08a.1.1 0 0 0 0-.06c0-.02-.02-.04-.06-.08L4.25 2.5"
            stroke="#A9A8B0" stroke-width="1.3" stroke-linecap="round" />
        </svg>
      </div>
      <div class="flex flex-col gap-y-2 mt-5">
        <div class="flex items-center justify-between">
          <p class="text-[#868695] font-medium text-base">Артикул</p>
          <p>{{ info.id }}</p>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-[#868695] font-medium text-base">Количество</p>
          <p>1</p>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-[#868695] font-medium text-base">Страна производства</p>
          <p>Китай</p>
        </div>
      </div>
    </div>
    <div
      class="bg-white w-full h-fit flex flex-col gap-y-2 justify-center rounded-[20px] px-[20px] mt-3 mb-[200px] py-4">
      <p class="text-[#242424] font-bold text-[18px] mb-12">Смотрите также</p>
      <div class="flex flex-wrap gap-x-6 gap-y-6 justify-center">
        <div class="w-[161px]">
          <img class="w-[161px] h-[215px] rounded-xl"
            src="https://basket-20.wbbasket.ru/vol3303/part330378/330378807/images/c516x688/1.webp" alt="">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
              <path fill="#F44" fill-rule="evenodd"
                d="m1.522 9.147-.74-.477a1.71 1.71 0 0 1-.53-2.33l.48-.785c.197-.322.282-.7.24-1.076L.875 3.57a1.71 1.71 0 0 1 1.501-1.883l.816-.095a1.71 1.71 0 0 0 1.022-.502L4.78.513a1.71 1.71 0 0 1 2.442 0l.566.577a1.71 1.71 0 0 0 1.022.502l.816.095a1.71 1.71 0 0 1 1.5 1.883l-.098.909c-.04.375.044.754.241 1.076l.48.786a1.71 1.71 0 0 1-.53 2.329l-.74.477a1.71 1.71 0 0 0-.69.88l-.28.818a1.71 1.71 0 0 1-2.19 1.055l-.744-.265a1.71 1.71 0 0 0-1.148 0l-.743.265a1.71 1.71 0 0 1-2.19-1.055l-.282-.817a1.71 1.71 0 0 0-.69-.881ZM8.398 4.69a.572.572 0 0 0-.807-.808l-3.995 4a.572.572 0 0 0 .807.81L8.398 4.69ZM6.853 7.716c0-.474.384-.858.856-.858h.006a.857.857 0 0 1 0 1.715H7.71a.857.857 0 0 1-.856-.857ZM4.285 4a.857.857 0 0 0 0 1.715h.006A.857.857 0 0 0 4.29 4h-.006Z"
                clip-rule="evenodd" />
            </svg>
            <p class="text-[#f44] text-lg font-semibold ml-1">{{ info.price }} ₽</p>
            <p class="text-sm font-semibold ml-2 text-[#868695] line-through">{{ info.price * 1.2 }} ₽</p>
          </div>
          <p class="text-[12px] text-[red] font-medium">с WB Кошельком</p>
          <p class="text-[#868695] font-medium whitespace-nowrap overflow-hidden text-ellipsis mt-1">Щетка для уборки с
            дозатором</p>
          <div class="flex items-center gap-x-2">
            <div class="flex items-center gap-x-1">
              <svg width="12" height="12" viewBox="0 0 26 26" fill="#FCA95D" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                  d="m13.568 1.395 3.052 7.577 7.816.704c.542.05.762.758.35 1.132l-5.927 5.386 1.776 8.012c.123.557-.452.995-.918.699l-6.716-4.248-6.717 4.248c-.467.294-1.04-.144-.918-.7l1.777-8.011-5.93-5.387c-.411-.374-.192-1.083.352-1.132L9.38 8.97l3.053-7.576a.605.605 0 0 1 1.135 0Z"
                  stroke="#FCA95D" />
              </svg>

              <p class="font-medium text-base">4,8</p>
            </div>
            <div class="w-[4px] h-[4px] rounded-full bg-[#9d9da5]"></div>
            <p class="text-[#868695] font-medium">{{ info.feedbackCount }} оценок</p>
            <svg style="transform: translateY(-50%)" class="absolute top-1/2 right-3" width="12" height="12" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="m4.25 9.5 3.39-3.39c.04-.04.06-.06.06-.08a.1.1 0 0 0 0-.06c0-.02-.02-.04-.06-.08L4.25 2.5"
                stroke="#A9A8B0" stroke-width="1.3" stroke-linecap="round" />
            </svg>
          </div>
          <button
            class="w-full h-[32px] rounded-xl bg-[#a73afd] text-base text-white font-bold hover:bg-[#a175c4] flex items-center justify-center gap-x-2 mt-1">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18C4 17.45 4.196 16.979 4.588 16.587C4.97933 16.1957 5.45 16 6 16C6.55 16 7.02067 16.1957 7.412 16.587C7.804 16.979 8 17.45 8 18C8 18.55 7.804 19.021 7.412 19.413C7.02067 19.8043 6.55 20 6 20ZM16 20C15.45 20 14.9793 19.8043 14.588 19.413C14.196 19.021 14 18.55 14 18C14 17.45 14.196 16.979 14.588 16.587C14.9793 16.1957 15.45 16 16 16C16.55 16 17.021 16.1957 17.413 16.587C17.8043 16.979 18 17.45 18 18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20ZM6 15C5.25 15 4.68333 14.6707 4.3 14.012C3.91667 13.354 3.9 12.7 4.25 12.05L5.6 9.6L2 2H0.975C0.691667 2 0.458333 1.904 0.275 1.712C0.0916666 1.52067 0 1.28333 0 1C0 0.716667 0.096 0.479 0.288 0.287C0.479333 0.0956666 0.716667 0 1 0H2.625C2.80833 0 2.98333 0.0500001 3.15 0.15C3.31667 0.25 3.44167 0.391667 3.525 0.575L4.2 2H18.95C19.4 2 19.7083 2.16667 19.875 2.5C20.0417 2.83333 20.0333 3.18333 19.85 3.55L16.3 9.95C16.1167 10.2833 15.875 10.5417 15.575 10.725C15.275 10.9083 14.9333 11 14.55 11H7.1L6 13H17.025C17.3083 13 17.5417 13.0957 17.725 13.287C17.9083 13.479 18 13.7167 18 14C18 14.2833 17.904 14.5207 17.712 14.712C17.5207 14.904 17.2833 15 17 15H6Z"
                fill="white" />
            </svg>
            Завтра
          </button>
        </div>
        <div class="w-[161px]">
          <img class="w-[161px] h-[215px] rounded-xl"
            src="https://basket-15.wbbasket.ru/vol2377/part237782/237782980/images/c516x688/1.webp" alt="">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
              <path fill="#F44" fill-rule="evenodd"
                d="m1.522 9.147-.74-.477a1.71 1.71 0 0 1-.53-2.33l.48-.785c.197-.322.282-.7.240-1.076L.875 3.57a1.71 1.71 0 0 1 1.501-1.883l.816-.095a1.71 1.71 0 0 0 1.022-.502L4.78.513a1.71 1.71 0 0 1 2.442 0l.566.577a1.71 1.71 0 0 0 1.022.502l.816.095a1.71 1.71 0 0 1 1.5 1.883l-.098.909c-.04.375.044.754.241 1.076l.48.786a1.71 1.71 0 0 1-.53 2.329l-.74.477a1.71 1.71 0 0 0-.69.88l-.28.818a1.71 1.71 0 0 1-2.19 1.055l-.744-.265a1.71 1.71 0 0 0-1.148 0l-.743.265a1.71 1.71 0 0 1-2.19-1.055l-.282-.817a1.71 1.71 0 0 0-.69-.881ZM8.398 4.69a.572.572 0 0 0-.807-.808l-3.995 4a.572.572 0 0 0 .807.81L8.398 4.69ZM6.853 7.716c0-.474.384-.858.856-.858h.006a.857.857 0 0 1 0 1.715H7.71a.857.857 0 0 1-.856-.857ZM4.285 4a.857.857 0 0 0 0 1.715h.006A.857.857 0 0 0 4.29 4h-.006Z"
                clip-rule="evenodd" />
            </svg>
            <p class="text-[#f44] text-lg font-semibold ml-1">1 299 ₽</p>
            <p class="text-sm font-semibold ml-2 text-[#868695] line-through">1 559 ₽</p>
          </div>
          <p class="text-[12px] text-[red] font-medium">с WB Кошельком</p>
          <p class="text-[#868695] font-medium whitespace-nowrap overflow-hidden text-ellipsis mt-1">Беспроводные
            наушники TWS</p>
          <div class="flex items-center gap-x-2">
            <div class="flex items-center gap-x-1">
              <svg width="12" height="12" viewBox="0 0 26 26" fill="#FCA95D" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                  d="m13.568 1.395 3.052 7.577 7.816.704c.542.05.762.758.35 1.132l-5.927 5.386 1.776 8.012c.123.557-.452.995-.918.699l-6.716-4.248-6.717 4.248c-.467.294-1.04-.144-.918-.7l1.777-8.011-5.93-5.387c-.411-.374-.192-1.083.352-1.132L9.38 8.97l3.053-7.576a.605.605 0 0 1 1.135 0Z"
                  stroke="#FCA95D" />
              </svg>
              <p class="font-medium text-base">4,9</p>
            </div>
            <div class="w-[4px] h-[4px] rounded-full bg-[#9d9da5]"></div>
            <p class="text-[#868695] font-medium">1 245 оценок</p>
          </div>
          <button
            class="w-full h-[32px] rounded-xl bg-[#a73afd] text-base text-white font-bold hover:bg-[#a175c4] flex items-center justify-center gap-x-2 mt-1">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18C4 17.45 4.196 16.979 4.588 16.587C4.97933 16.1957 5.45 16 6 16C6.55 16 7.02067 16.1957 7.412 16.587C7.804 16.979 8 17.45 8 18C8 18.55 7.804 19.021 7.412 19.413C7.02067 19.8043 6.55 20 6 20ZM16 20C15.45 20 14.9793 19.8043 14.588 19.413C14.196 19.021 14 18.55 14 18C14 17.45 14.196 16.979 14.588 16.587C14.9793 16.1957 15.45 16 16 16C16.55 16 17.021 16.1957 17.413 16.587C17.8043 16.979 18 17.45 18 18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20ZM6 15C5.25 15 4.68333 14.6707 4.3 14.012C3.91667 13.354 3.9 12.7 4.25 12.05L5.6 9.6L2 2H0.975C0.691667 2 0.458333 1.904 0.275 1.712C0.0916666 1.52067 0 1.28333 0 1C0 0.716667 0.096 0.479 0.288 0.287C0.479333 0.0956666 0.716667 0 1 0H2.625C2.80833 0 2.98333 0.0500001 3.15 0.15C3.31667 0.25 3.44167 0.391667 3.525 0.575L4.2 2H18.95C19.4 2 19.7083 2.16667 19.875 2.5C20.0417 2.83333 20.0333 3.18333 19.85 3.55L16.3 9.95C16.1167 10.2833 15.875 10.5417 15.575 10.725C15.275 10.9083 14.9333 11 14.55 11H7.1L6 13H17.025C17.3083 13 17.5417 13.0957 17.725 13.287C17.9083 13.479 18 13.7167 18 14C18 14.2833 17.904 14.5207 17.712 14.712C17.5207 14.904 17.2833 15 17 15H6Z"
                fill="white" />
            </svg>
            Завтра
          </button>
        </div>
        <div class="w-[161px]">
          <img class="w-[161px] h-[215px] rounded-xl"
            src="https://basket-01.wbbasket.ru/vol120/part12011/12011340/images/c516x688/1.webp" alt="">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
              <path fill="#F44" fill-rule="evenodd"
                d="m1.522 9.147-.74-.477a1.71 1.71 0 0 1-.53-2.33l.48-.785c.197-.322.282-.7.240-1.076L.875 3.57a1.71 1.71 0 0 1 1.501-1.883l.816-.095a1.71 1.71 0 0 0 1.022-.502L4.78.513a1.71 1.71 0 0 1 2.442 0l.566.577a1.71 1.71 0 0 0 1.022.502l.816.095a1.71 1.71 0 0 1 1.5 1.883l-.098.909c-.04.375.044.754.241 1.076l.48.786a1.71 1.71 0 0 1-.53 2.329l-.74.477a1.71 1.71 0 0 0-.69.88l-.28.818a1.71 1.71 0 0 1-2.19 1.055l-.744-.265a1.71 1.71 0 0 0-1.148 0l-.743.265a1.71 1.71 0 0 1-2.19-1.055l-.282-.817a1.71 1.71 0 0 0-.69-.881ZM8.398 4.69a.572.572 0 0 0-.807-.808l-3.995 4a.572.572 0 0 0 .807.81L8.398 4.69ZM6.853 7.716c0-.474.384-.858.856-.858h.006a.857.857 0 0 1 0 1.715H7.71a.857.857 0 0 1-.856-.857ZM4.285 4a.857.857 0 0 0 0 1.715h.006A.857.857 0 0 0 4.29 4h-.006Z"
                clip-rule="evenodd" />
            </svg>
            <p class="text-[#f44] text-lg font-semibold ml-1">599 ₽</p>
            <p class="text-sm font-semibold ml-2 text-[#868695] line-through">719 ₽</p>
          </div>
          <p class="text-[12px] text-[red] font-medium">с WB Кошельком</p>
          <p class="text-[#868695] font-medium whitespace-nowrap overflow-hidden text-ellipsis mt-1">Термокружка 500 мл
          </p>
          <div class="flex items-center gap-x-2">
            <div class="flex items-center gap-x-1">
              <svg width="12" height="12" viewBox="0 0 26 26" fill="#FCA95D" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                  d="m13.568 1.395 3.052 7.577 7.816.704c.542.05.762.758.35 1.132l-5.927 5.386 1.776 8.012c.123.557-.452.995-.918.699l-6.716-4.248-6.717 4.248c-.467.294-1.04-.144-.918-.7l1.777-8.011-5.93-5.387c-.411-.374-.192-1.083.352-1.132L9.38 8.97l3.053-7.576a.605.605 0 0 1 1.135 0Z"
                  stroke="#FCA95D" />
              </svg>
              <p class="font-medium text-base">4,7</p>
            </div>
            <div class="w-[4px] h-[4px] rounded-full bg-[#9d9da5]"></div>
            <p class="text-[#868695] font-medium">876 оценок</p>
          </div>
          <button
            class="w-full h-[32px] rounded-xl bg-[#a73afd] text-base text-white font-bold hover:bg-[#a175c4] flex items-center justify-center gap-x-2 mt-1">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18C4 17.45 4.196 16.979 4.588 16.587C4.97933 16.1957 5.45 16 6 16C6.55 16 7.02067 16.1957 7.412 16.587C7.804 16.979 8 17.45 8 18C8 18.55 7.804 19.021 7.412 19.413C7.02067 19.8043 6.55 20 6 20ZM16 20C15.45 20 14.9793 19.8043 14.588 19.413C14.196 19.021 14 18.55 14 18C14 17.45 14.196 16.979 14.588 16.587C14.9793 16.1957 15.45 16 16 16C16.55 16 17.021 16.1957 17.413 16.587C17.8043 16.979 18 17.45 18 18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20ZM6 15C5.25 15 4.68333 14.6707 4.3 14.012C3.91667 13.354 3.9 12.7 4.25 12.05L5.6 9.6L2 2H0.975C0.691667 2 0.458333 1.904 0.275 1.712C0.0916666 1.52067 0 1.28333 0 1C0 0.716667 0.096 0.479 0.288 0.287C0.479333 0.0956666 0.716667 0 1 0H2.625C2.80833 0 2.98333 0.0500001 3.15 0.15C3.31667 0.25 3.44167 0.391667 3.525 0.575L4.2 2H18.95C19.4 2 19.7083 2.16667 19.875 2.5C20.0417 2.83333 20.0333 3.18333 19.85 3.55L16.3 9.95C16.1167 10.2833 15.875 10.5417 15.575 10.725C15.275 10.9083 14.9333 11 14.55 11H7.1L6 13H17.025C17.3083 13 17.5417 13.0957 17.725 13.287C17.9083 13.479 18 13.7167 18 14C18 14.2833 17.904 14.5207 17.712 14.712C17.5207 14.904 17.2833 15 17 15H6Z"
                fill="white" />
            </svg>
            Завтра
          </button>
        </div>
        <div class="w-[161px]">
          <img class="w-[161px] h-[215px] rounded-xl"
            src="https://basket-15.wbbasket.ru/vol2289/part228968/228968113/images/c516x688/1.webp" alt="">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
              <path fill="#F44" fill-rule="evenodd"
                d="m1.522 9.147-.74-.477a1.71 1.71 0 0 1-.53-2.33l.48-.785c.197-.322.282-.7.240-1.076L.875 3.57a1.71 1.71 0 0 1 1.501-1.883l.816-.095a1.71 1.71 0 0 0 1.022-.502L4.78.513a1.71 1.71 0 0 1 2.442 0l.566.577a1.71 1.71 0 0 0 1.022.502l.816.095a1.71 1.71 0 0 1 1.5 1.883l-.098.909c-.04.375.044.754.241 1.076l.48.786a1.71 1.71 0 0 1-.53 2.329l-.74.477a1.71 1.71 0 0 0-.69.88l-.28.818a1.71 1.71 0 0 1-2.19 1.055l-.744-.265a1.71 1.71 0 0 0-1.148 0l-.743.265a1.71 1.71 0 0 1-2.19-1.055l-.282-.817a1.71 1.71 0 0 0-.69-.881ZM8.398 4.69a.572.572 0 0 0-.807-.808l-3.995 4a.572.572 0 0 0 .807.81L8.398 4.69ZM6.853 7.716c0-.474.384-.858.856-.858h.006a.857.857 0 0 1 0 1.715H7.71a.857.857 0 0 1-.856-.857ZM4.285 4a.857.857 0 0 0 0 1.715h.006A.857.857 0 0 0 4.29 4h-.006Z"
                clip-rule="evenodd" />
            </svg>
            <p class="text-[#f44] text-lg font-semibold ml-1">2 499 ₽</p>
            <p class="text-sm font-semibold ml-2 text-[#868695] line-through">2 999 ₽</p>
          </div>
          <p class="text-[12px] text-[red] font-medium">с WB Кошельком</p>
          <p class="text-[#868695] font-medium whitespace-nowrap overflow-hidden text-ellipsis mt-1">Умная колонка с
            голосовым ассистентом</p>
          <div class="flex items-center gap-x-2">
            <div class="flex items-center gap-x-1">
              <svg width="12" height="12" viewBox="0 0 26 26" fill="#FCA95D" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                  d="m13.568 1.395 3.052 7.577 7.816.704c.542.05.762.758.35 1.132l-5.927 5.386 1.776 8.012c.123.557-.452.995-.918.699l-6.716-4.248-6.717 4.248c-.467.294-1.04-.144-.918-.7l1.777-8.011-5.93-5.387c-.411-.374-.192-1.083.352-1.132L9.38 8.97l3.053-7.576a.605.605 0 0 1 1.135 0Z"
                  stroke="#FCA95D" />
              </svg>
              <p class="font-medium text-base">4,6</p>
            </div>
            <div class="w-[4px] h-[4px] rounded-full bg-[#9d9da5]"></div>
            <p class="text-[#868695] font-medium">543 оценки</p>
          </div>
          <button
            class="w-full h-[32px] rounded-xl bg-[#a73afd] text-base text-white font-bold hover:bg-[#a175c4] flex items-center justify-center gap-x-2 mt-1">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18C4 17.45 4.196 16.979 4.588 16.587C4.97933 16.1957 5.45 16 6 16C6.55 16 7.02067 16.1957 7.412 16.587C7.804 16.979 8 17.45 8 18C8 18.55 7.804 19.021 7.412 19.413C7.02067 19.8043 6.55 20 6 20ZM16 20C15.45 20 14.9793 19.8043 14.588 19.413C14.196 19.021 14 18.55 14 18C14 17.45 14.196 16.979 14.588 16.587C14.9793 16.1957 15.45 16 16 16C16.55 16 17.021 16.1957 17.413 16.587C17.8043 16.979 18 17.45 18 18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20ZM6 15C5.25 15 4.68333 14.6707 4.3 14.012C3.91667 13.354 3.9 12.7 4.25 12.05L5.6 9.6L2 2H0.975C0.691667 2 0.458333 1.904 0.275 1.712C0.0916666 1.52067 0 1.28333 0 1C0 0.716667 0.096 0.479 0.288 0.287C0.479333 0.0956666 0.716667 0 1 0H2.625C2.80833 0 2.98333 0.0500001 3.15 0.15C3.31667 0.25 3.44167 0.391667 3.525 0.575L4.2 2H18.95C19.4 2 19.7083 2.16667 19.875 2.5C20.0417 2.83333 20.0333 3.18333 19.85 3.55L16.3 9.95C16.1167 10.2833 15.875 10.5417 15.575 10.725C15.275 10.9083 14.9333 11 14.55 11H7.1L6 13H17.025C17.3083 13 17.5417 13.0957 17.725 13.287C17.9083 13.479 18 13.7167 18 14C18 14.2833 17.904 14.5207 17.712 14.712C17.5207 14.904 17.2833 15 17 15H6Z"
                fill="white" />
            </svg>
            Послезавтра
          </button>
        </div>
        <div class="w-[161px]">
          <img class="w-[161px] h-[215px] rounded-xl"
            src="https://basket-12.wbbasket.ru/vol1866/part186667/186667682/images/c516x688/1.webp" alt="">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
              <path fill="#F44" fill-rule="evenodd"
                d="m1.522 9.147-.74-.477a1.71 1.71 0 0 1-.53-2.33l.48-.785c.197-.322.282-.7.240-1.076L.875 3.57a1.71 1.71 0 0 1 1.501-1.883l.816-.095a1.71 1.71 0 0 0 1.022-.502L4.78.513a1.71 1.71 0 0 1 2.442 0l.566.577a1.71 1.71 0 0 0 1.022.502l.816.095a1.71 1.71 0 0 1 1.5 1.883l-.098.909c-.04.375.044.754.241 1.076l.48.786a1.71 1.71 0 0 1-.53 2.329l-.74.477a1.71 1.71 0 0 0-.69.88l-.28.818a1.71 1.71 0 0 1-2.19 1.055l-.744-.265a1.71 1.71 0 0 0-1.148 0l-.743.265a1.71 1.71 0 0 1-2.19-1.055l-.282-.817a1.71 1.71 0 0 0-.69-.881ZM8.398 4.69a.572.572 0 0 0-.807-.808l-3.995 4a.572.572 0 0 0 .807.81L8.398 4.69ZM6.853 7.716c0-.474.384-.858.856-.858h.006a.857.857 0 0 1 0 1.715H7.71a.857.857 0 0 1-.856-.857ZM4.285 4a.857.857 0 0 0 0 1.715h.006A.857.857 0 0 0 4.29 4h-.006Z"
                clip-rule="evenodd" />
            </svg>
            <p class="text-[#f44] text-lg font-semibold ml-1">899 ₽</p>
            <p class="text-sm font-semibold ml-2 text-[#868695] line-through">1 079 ₽</p>
          </div>
          <p class="text-[12px] text-[red] font-medium">с WB Кошельком</p>
          <p class="text-[#868695] font-medium whitespace-nowrap overflow-hidden text-ellipsis mt-1">Набор кухонных
            ножей 3 шт.</p>
          <div class="flex items-center gap-x-2">
            <div class="flex items-center gap-x-1">
              <svg width="12" height="12" viewBox="0 0 26 26" fill="#FCA95D" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                  d="m13.568 1.395 3.052 7.577 7.816.704c.542.05.762.758.35 1.132l-5.927 5.386 1.776 8.012c.123.557-.452.995-.918.699l-6.716-4.248-6.717 4.248c-.467.294-1.04-.144-.918-.7l1.777-8.011-5.93-5.387c-.411-.374-.192-1.083.352-1.132L9.38 8.97l3.053-7.576a.605.605 0 0 1 1.135 0Z"
                  stroke="#FCA95D" />
              </svg>
              <p class="font-medium text-base">4,8</p>
            </div>
            <div class="w-[4px] h-[4px] rounded-full bg-[#9d9da5]"></div>
            <p class="text-[#868695] font-medium">1 102 оценки</p>
          </div>
          <button
            class="w-full h-[32px] rounded-xl bg-[#a73afd] text-base text-white font-bold hover:bg-[#a175c4] flex items-center justify-center gap-x-2 mt-1">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18C4 17.45 4.196 16.979 4.588 16.587C4.97933 16.1957 5.45 16 6 16C6.55 16 7.02067 16.1957 7.412 16.587C7.804 16.979 8 17.45 8 18C8 18.55 7.804 19.021 7.412 19.413C7.02067 19.8043 6.55 20 6 20ZM16 20C15.45 20 14.9793 19.8043 14.588 19.413C14.196 19.021 14 18.55 14 18C14 17.45 14.196 16.979 14.588 16.587C14.9793 16.1957 15.45 16 16 16C16.55 16 17.021 16.1957 17.413 16.587C17.8043 16.979 18 17.45 18 18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20ZM6 15C5.25 15 4.68333 14.6707 4.3 14.012C3.91667 13.354 3.9 12.7 4.25 12.05L5.6 9.6L2 2H0.975C0.691667 2 0.458333 1.904 0.275 1.712C0.0916666 1.52067 0 1.28333 0 1C0 0.716667 0.096 0.479 0.288 0.287C0.479333 0.0956666 0.716667 0 1 0H2.625C2.80833 0 2.98333 0.0500001 3.15 0.15C3.31667 0.25 3.44167 0.391667 3.525 0.575L4.2 2H18.95C19.4 2 19.7083 2.16667 19.875 2.5C20.0417 2.83333 20.0333 3.18333 19.85 3.55L16.3 9.95C16.1167 10.2833 15.875 10.5417 15.575 10.725C15.275 10.9083 14.9333 11 14.55 11H7.1L6 13H17.025C17.3083 13 17.5417 13.0957 17.725 13.287C17.9083 13.479 18 13.7167 18 14C18 14.2833 17.904 14.5207 17.712 14.712C17.5207 14.904 17.2833 15 17 15H6Z"
                fill="white" />
            </svg>
            Завтра
          </button>
        </div>
        <div class="w-[161px]">
          <img class="w-[161px] h-[215px] rounded-xl"
            src="https://basket-10.wbbasket.ru/vol1373/part137342/137342117/images/c516x688/1.webp" alt="">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
              <path fill="#F44" fill-rule="evenodd"
                d="m1.522 9.147-.74-.477a1.71 1.71 0 0 1-.53-2.33l.48-.785c.197-.322.282-.7.240-1.076L.875 3.57a1.71 1.71 0 0 1 1.501-1.883l.816-.095a1.71 1.71 0 0 0 1.022-.502L4.78.513a1.71 1.71 0 0 1 2.442 0l.566.577a1.71 1.71 0 0 0 1.022.502l.816.095a1.71 1.71 0 0 1 1.5 1.883l-.098.909c-.04.375.044.754.241 1.076l.48.786a1.71 1.71 0 0 1-.53 2.329l-.74.477a1.71 1.71 0 0 0-.69.88l-.28.818a1.71 1.71 0 0 1-2.19 1.055l-.744-.265a1.71 1.71 0 0 0-1.148 0l-.743.265a1.71 1.71 0 0 1-2.19-1.055l-.282-.817a1.71 1.71 0 0 0-.69-.881ZM8.398 4.69a.572.572 0 0 0-.807-.808l-3.995 4a.572.572 0 0 0 .807.81L8.398 4.69ZM6.853 7.716c0-.474.384-.858.856-.858h.006a.857.857 0 0 1 0 1.715H7.71a.857.857 0 0 1-.856-.857ZM4.285 4a.857.857 0 0 0 0 1.715h.006A.857.857 0 0 0 4.29 4h-.006Z"
                clip-rule="evenodd" />
            </svg>
            <p class="text-[#f44] text-lg font-semibold ml-1">1 799 ₽</p>
            <p class="text-sm font-semibold ml-2 text-[#868695] line-through">2 159 ₽</p>
          </div>
          <p class="text-[12px] text-[red] font-medium">с WB Кошельком</p>
          <p class="text-[#868695] font-medium whitespace-nowrap overflow-hidden text-ellipsis mt-1">Женская куртка
            демисезонная</p>
          <div class="flex items-center gap-x-2">
            <div class="flex items-center gap-x-1">
              <svg width="12" height="12" viewBox="0 0 26 26" fill="#FCA95D" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                  d="m13.568 1.395 3.052 7.577 7.816.704c.542.05.762.758.35 1.132l-5.927 5.386 1.776 8.012c.123.557-.452.995-.918.699l-6.716-4.248-6.717 4.248c-.467.294-1.04-.144-.918-.7l1.777-8.011-5.93-5.387c-.411-.374-.192-1.083.352-1.132L9.38 8.97l3.053-7.576a.605.605 0 0 1 1.135 0Z"
                  stroke="#FCA95D" />
              </svg>
              <p class="font-medium text-base">4,5</p>
            </div>
            <div class="w-[4px] h-[4px] rounded-full bg-[#9d9da5]"></div>
            <p class="text-[#868695] font-medium">321 оценка</p>
          </div>
          <button
            class="w-full h-[32px] rounded-xl bg-[#a73afd] text-base text-white font-bold hover:bg-[#a175c4] flex items-center justify-center gap-x-2 mt-1">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18C4 17.45 4.196 16.979 4.588 16.587C4.97933 16.1957 5.45 16 6 16C6.55 16 7.02067 16.1957 7.412 16.587C7.804 16.979 8 17.45 8 18C8 18.55 7.804 19.021 7.412 19.413C7.02067 19.8043 6.55 20 6 20ZM16 20C15.45 20 14.9793 19.8043 14.588 19.413C14.196 19.021 14 18.55 14 18C14 17.45 14.196 16.979 14.588 16.587C14.9793 16.1957 15.45 16 16 16C16.55 16 17.021 16.1957 17.413 16.587C17.8043 16.979 18 17.45 18 18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20ZM6 15C5.25 15 4.68333 14.6707 4.3 14.012C3.91667 13.354 3.9 12.7 4.25 12.05L5.6 9.6L2 2H0.975C0.691667 2 0.458333 1.904 0.275 1.712C0.0916666 1.52067 0 1.28333 0 1C0 0.716667 0.096 0.479 0.288 0.287C0.479333 0.0956666 0.716667 0 1 0H2.625C2.80833 0 2.98333 0.0500001 3.15 0.15C3.31667 0.25 3.44167 0.391667 3.525 0.575L4.2 2H18.95C19.4 2 19.7083 2.16667 19.875 2.5C20.0417 2.83333 20.0333 3.18333 19.85 3.55L16.3 9.95C16.1167 10.2833 15.875 10.5417 15.575 10.725C15.275 10.9083 14.9333 11 14.55 11H7.1L6 13H17.025C17.3083 13 17.5417 13.0957 17.725 13.287C17.9083 13.479 18 13.7167 18 14C18 14.2833 17.904 14.5207 17.712 14.712C17.5207 14.904 17.2833 15 17 15H6Z"
                fill="white" />
            </svg>
            Завтра
          </button>
        </div>
        <div class="w-[161px]">
          <img class="w-[161px] h-[215px] rounded-xl"
            src="https://basket-12.wbbasket.ru/vol1776/part177680/177680642/images/c516x688/1.webp" alt="">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
              <path fill="#F44" fill-rule="evenodd"
                d="m1.522 9.147-.74-.477a1.71 1.71 0 0 1-.53-2.33l.48-.785c.197-.322.282-.7.240-1.076L.875 3.57a1.71 1.71 0 0 1 1.501-1.883l.816-.095a1.71 1.71 0 0 0 1.022-.502L4.78.513a1.71 1.71 0 0 1 2.442 0l.566.577a1.71 1.71 0 0 0 1.022.502l.816.095a1.71 1.71 0 0 1 1.5 1.883l-.098.909c-.04.375.044.754.241 1.076l.48.786a1.71 1.71 0 0 1-.53 2.329l-.74.477a1.71 1.71 0 0 0-.69.88l-.28.818a1.71 1.71 0 0 1-2.19 1.055l-.744-.265a1.71 1.71 0 0 0-1.148 0l-.743.265a1.71 1.71 0 0 1-2.19-1.055l-.282-.817a1.71 1.71 0 0 0-.69-.881ZM8.398 4.69a.572.572 0 0 0-.807-.808l-3.995 4a.572.572 0 0 0 .807.81L8.398 4.69ZM6.853 7.716c0-.474.384-.858.856-.858h.006a.857.857 0 0 1 0 1.715H7.71a.857.857 0 0 1-.856-.857ZM4.285 4a.857.857 0 0 0 0 1.715h.006A.857.857 0 0 0 4.29 4h-.006Z"
                clip-rule="evenodd" />
            </svg>
            <p class="text-[#f44] text-lg font-semibold ml-1">349 ₽</p>
            <p class="text-sm font-semibold ml-2 text-[#868695] line-through">419 ₽</p>
          </div>
          <p class="text-[12px] text-[red] font-medium">с WB Кошельком</p>
          <p class="text-[#868695] font-medium whitespace-nowrap overflow-hidden text-ellipsis mt-1">Набор носков 5 пар
          </p>
          <div class="flex items-center gap-x-2">
            <div class="flex items-center gap-x-1">
              <svg width="12" height="12" viewBox="0 0 26 26" fill="#FCA95D" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                  d="m13.568 1.395 3.052 7.577 7.816.704c.542.05.762.758.35 1.132l-5.927 5.386 1.776 8.012c.123.557-.452.995-.918.699l-6.716-4.248-6.717 4.248c-.467.294-1.04-.144-.918-.7l1.777-8.011-5.93-5.387c-.411-.374-.192-1.083.352-1.132L9.38 8.97l3.053-7.576a.605.605 0 0 1 1.135 0Z"
                  stroke="#FCA95D" />
              </svg>
              <p class="font-medium text-base">4,9</p>
            </div>
            <div class="w-[4px] h-[4px] rounded-full bg-[#9d9da5]"></div>
            <p class="text-[#868695] font-medium">2 134 оценки</p>
          </div>
          <button
            class="w-full h-[32px] rounded-xl bg-[#a73afd] text-base text-white font-bold hover:bg-[#a175c4] flex items-center justify-center gap-x-2 mt-1">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18C4 17.45 4.196 16.979 4.588 16.587C4.97933 16.1957 5.45 16 6 16C6.55 16 7.02067 16.1957 7.412 16.587C7.804 16.979 8 17.45 8 18C8 18.55 7.804 19.021 7.412 19.413C7.02067 19.8043 6.55 20 6 20ZM16 20C15.45 20 14.9793 19.8043 14.588 19.413C14.196 19.021 14 18.55 14 18C14 17.45 14.196 16.979 14.588 16.587C14.9793 16.1957 15.45 16 16 16C16.55 16 17.021 16.1957 17.413 16.587C17.8043 16.979 18 17.45 18 18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20ZM6 15C5.25 15 4.68333 14.6707 4.3 14.012C3.91667 13.354 3.9 12.7 4.25 12.05L5.6 9.6L2 2H0.975C0.691667 2 0.458333 1.904 0.275 1.712C0.0916666 1.52067 0 1.28333 0 1C0 0.716667 0.096 0.479 0.288 0.287C0.479333 0.0956666 0.716667 0 1 0H2.625C2.80833 0 2.98333 0.0500001 3.15 0.15C3.31667 0.25 3.44167 0.391667 3.525 0.575L4.2 2H18.95C19.4 2 19.7083 2.16667 19.875 2.5C20.0417 2.83333 20.0333 3.18333 19.85 3.55L16.3 9.95C16.1167 10.2833 15.875 10.5417 15.575 10.725C15.275 10.9083 14.9333 11 14.55 11H7.1L6 13H17.025C17.3083 13 17.5417 13.0957 17.725 13.287C17.9083 13.479 18 13.7167 18 14C18 14.2833 17.904 14.5207 17.712 14.712C17.5207 14.904 17.2833 15 17 15H6Z"
                fill="white" />
            </svg>
            Завтра
          </button>
        </div>
        <div class="w-[161px]">
          <img class="w-[161px] h-[215px] rounded-xl"
            src="https://basket-13.wbbasket.ru/vol1930/part193022/193022016/images/c516x688/1.webp" alt="">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
              <path fill="#F44" fill-rule="evenodd"
                d="m1.522 9.147-.74-.477a1.71 1.71 0 0 1-.53-2.33l.48-.785c.197-.322.282-.7.240-1.076L.875 3.57a1.71 1.71 0 0 1 1.501-1.883l.816-.095a1.71 1.71 0 0 0 1.022-.502L4.78.513a1.71 1.71 0 0 1 2.442 0l.566.577a1.71 1.71 0 0 0 1.022.502l.816.095a1.71 1.71 0 0 1 1.5 1.883l-.098.909c-.04.375.044.754.241 1.076l.48.786a1.71 1.71 0 0 1-.53 2.329l-.74.477a1.71 1.71 0 0 0-.69.88l-.28.818a1.71 1.71 0 0 1-2.19 1.055l-.744-.265a1.71 1.71 0 0 0-1.148 0l-.743.265a1.71 1.71 0 0 1-2.19-1.055l-.282-.817a1.71 1.71 0 0 0-.69-.881ZM8.398 4.69a.572.572 0 0 0-.807-.808l-3.995 4a.572.572 0 0 0 .807.81L8.398 4.69ZM6.853 7.716c0-.474.384-.858.856-.858h.006a.857.857 0 0 1 0 1.715H7.71a.857.857 0 0 1-.856-.857ZM4.285 4a.857.857 0 0 0 0 1.715h.006A.857.857 0 0 0 4.29 4h-.006Z"
                clip-rule="evenodd" />
            </svg>
            <p class="text-[#f44] text-lg font-semibold ml-1">3 499 ₽</p>
            <p class="text-sm font-semibold ml-2 text-[#868695] line-through">4 199 ₽</p>
          </div>
          <p class="text-[12px] text-[red] font-medium">с WB Кошельком</p>
          <p class="text-[#868695] font-medium whitespace-nowrap overflow-hidden text-ellipsis mt-1">Робот-пылесос с
            влажной уборкой</p>
          <div class="flex items-center gap-x-2">
            <div class="flex items-center gap-x-1">
              <svg width="12" height="12" viewBox="0 0 26 26" fill="#FCA95D" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                  d="m13.568 1.395 3.052 7.577 7.816.704c.542.05.762.758.35 1.132l-5.927 5.386 1.776 8.012c.123.557-.452.995-.918.699l-6.716-4.248-6.717 4.248c-.467.294-1.04-.144-.918-.7l1.777-8.011-5.93-5.387c-.411-.374-.192-1.083.352-1.132L9.38 8.97l3.053-7.576a.605.605 0 0 1 1.135 0Z"
                  stroke="#FCA95D" />
              </svg>
              <p class="font-medium text-base">4,7</p>
            </div>
            <div class="w-[4px] h-[4px] rounded-full bg-[#9d9da5]"></div>
            <p class="text-[#868695] font-medium">789 оценок</p>
          </div>
          <button
            class="w-full h-[32px] rounded-xl bg-[#a73afd] text-base text-white font-bold hover:bg-[#a175c4] flex items-center justify-center gap-x-2 mt-1">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18C4 17.45 4.196 16.979 4.588 16.587C4.97933 16.1957 5.45 16 6 16C6.55 16 7.02067 16.1957 7.412 16.587C7.804 16.979 8 17.45 8 18C8 18.55 7.804 19.021 7.412 19.413C7.02067 19.8043 6.55 20 6 20ZM16 20C15.45 20 14.9793 19.8043 14.588 19.413C14.196 19.021 14 18.55 14 18C14 17.45 14.196 16.979 14.588 16.587C14.9793 16.1957 15.45 16 16 16C16.55 16 17.021 16.1957 17.413 16.587C17.8043 16.979 18 17.45 18 18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20ZM6 15C5.25 15 4.68333 14.6707 4.3 14.012C3.91667 13.354 3.9 12.7 4.25 12.05L5.6 9.6L2 2H0.975C0.691667 2 0.458333 1.904 0.275 1.712C0.0916666 1.52067 0 1.28333 0 1C0 0.716667 0.096 0.479 0.288 0.287C0.479333 0.0956666 0.716667 0 1 0H2.625C2.80833 0 2.98333 0.0500001 3.15 0.15C3.31667 0.25 3.44167 0.391667 3.525 0.575L4.2 2H18.95C19.4 2 19.7083 2.16667 19.875 2.5C20.0417 2.83333 20.0333 3.18333 19.85 3.55L16.3 9.95C16.1167 10.2833 15.875 10.5417 15.575 10.725C15.275 10.9083 14.9333 11 14.55 11H7.1L6 13H17.025C17.3083 13 17.5417 13.0957 17.725 13.287C17.9083 13.479 18 13.7167 18 14C18 14.2833 17.904 14.5207 17.712 14.712C17.5207 14.904 17.2833 15 17 15H6Z"
                fill="white" />
            </svg>
            Послезавтра
          </button>
        </div>
        <div class="w-[161px]">
          <img class="w-[161px] h-[215px] rounded-xl"
            src="https://basket-11.wbbasket.ru/vol1649/part164986/164986641/images/c516x688/1.webp" alt="">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
              <path fill="#F44" fill-rule="evenodd"
                d="m1.522 9.147-.74-.477a1.71 1.71 0 0 1-.53-2.33l.48-.785c.197-.322.282-.7.240-1.076L.875 3.57a1.71 1.71 0 0 1 1.501-1.883l.816-.095a1.71 1.71 0 0 0 1.022-.502L4.78.513a1.71 1.71 0 0 1 2.442 0l.566.577a1.71 1.71 0 0 0 1.022.502l.816.095a1.71 1.71 0 0 1 1.5 1.883l-.098.909c-.04.375.044.754.241 1.076l.48.786a1.71 1.71 0 0 1-.53 2.329l-.74.477a1.71 1.71 0 0 0-.69.88l-.28.818a1.71 1.71 0 0 1-2.19 1.055l-.744-.265a1.71 1.71 0 0 0-1.148 0l-.743.265a1.71 1.71 0 0 1-2.19-1.055l-.282-.817a1.71 1.71 0 0 0-.69-.881ZM8.398 4.69a.572.572 0 0 0-.807-.808l-3.995 4a.572.572 0 0 0 .807.81L8.398 4.69ZM6.853 7.716c0-.474.384-.858.856-.858h.006a.857.857 0 0 1 0 1.715H7.71a.857.857 0 0 1-.856-.857ZM4.285 4a.857.857 0 0 0 0 1.715h.006A.857.857 0 0 0 4.29 4h-.006Z"
                clip-rule="evenodd" />
            </svg>
            <p class="text-[#f44] text-lg font-semibold ml-1">699 ₽</p>
            <p class="text-sm font-semibold ml-2 text-[#868695] line-through">839 ₽</p>
          </div>
          <p class="text-[12px] text-[red] font-medium">с WB Кошельком</p>
          <p class="text-[#868695] font-medium whitespace-nowrap overflow-hidden text-ellipsis mt-1">Детский конструктор
            200 деталей</p>
          <div class="flex items-center gap-x-2">
            <div class="flex items-center gap-x-1">
              <svg width="12" height="12" viewBox="0 0 26 26" fill="#FCA95D" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                  d="m13.568 1.395 3.052 7.577 7.816.704c.542.05.762.758.35 1.132l-5.927 5.386 1.776 8.012c.123.557-.452.995-.918.699l-6.716-4.248-6.717 4.248c-.467.294-1.04-.144-.918-.7l1.777-8.011-5.93-5.387c-.411-.374-.192-1.083.352-1.132L9.38 8.97l3.053-7.576a.605.605 0 0 1 1.135 0Z"
                  stroke="#FCA95D" />
              </svg>
              <p class="font-medium text-base">4,8</p>
            </div>
            <div class="w-[4px] h-[4px] rounded-full bg-[#9d9da5]"></div>
            <p class="text-[#868695] font-medium">1 567 оценок</p>
          </div>
          <button
            class="w-full h-[32px] rounded-xl bg-[#a73afd] text-base text-white font-bold hover:bg-[#a175c4] flex items-center justify-center gap-x-2 mt-1">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18C4 17.45 4.196 16.979 4.588 16.587C4.97933 16.1957 5.45 16 6 16C6.55 16 7.02067 16.1957 7.412 16.587C7.804 16.979 8 17.45 8 18C8 18.55 7.804 19.021 7.412 19.413C7.02067 19.8043 6.55 20 6 20ZM16 20C15.45 20 14.9793 19.8043 14.588 19.413C14.196 19.021 14 18.55 14 18C14 17.45 14.196 16.979 14.588 16.587C14.9793 16.1957 15.45 16 16 16C16.55 16 17.021 16.1957 17.413 16.587C17.8043 16.979 18 17.45 18 18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20ZM6 15C5.25 15 4.68333 14.6707 4.3 14.012C3.91667 13.354 3.9 12.7 4.25 12.05L5.6 9.6L2 2H0.975C0.691667 2 0.458333 1.904 0.275 1.712C0.0916666 1.52067 0 1.28333 0 1C0 0.716667 0.096 0.479 0.288 0.287C0.479333 0.0956666 0.716667 0 1 0H2.625C2.80833 0 2.98333 0.0500001 3.15 0.15C3.31667 0.25 3.44167 0.391667 3.525 0.575L4.2 2H18.95C19.4 2 19.7083 2.16667 19.875 2.5C20.0417 2.83333 20.0333 3.18333 19.85 3.55L16.3 9.95C16.1167 10.2833 15.875 10.5417 15.575 10.725C15.275 10.9083 14.9333 11 14.55 11H7.1L6 13H17.025C17.3083 13 17.5417 13.0957 17.725 13.287C17.9083 13.479 18 13.7167 18 14C18 14.2833 17.904 14.5207 17.712 14.712C17.5207 14.904 17.2833 15 17 15H6Z"
                fill="white" />
            </svg>
            Послезавтра
          </button>
        </div>
        <div class="w-[161px]">
          <img class="w-[161px] h-[215px] rounded-xl"
            src="https://basket-10.wbbasket.ru/vol1459/part145976/145976152/images/c516x688/1.webp" alt="">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
              <path fill="#F44" fill-rule="evenodd"
                d="m1.522 9.147-.74-.477a1.71 1.71 0 0 1-.53-2.33l.48-.785c.197-.322.282-.7.240-1.076L.875 3.57a1.71 1.71 0 0 1 1.501-1.883l.816-.095a1.71 1.71 0 0 0 1.022-.502L4.78.513a1.71 1.71 0 0 1 2.442 0l.566.577a1.71 1.71 0 0 0 1.022.502l.816.095a1.71 1.71 0 0 1 1.5 1.883l-.098.909c-.04.375.044.754.241 1.076l.48.786a1.71 1.71 0 0 1-.53 2.329l-.74.477a1.71 1.71 0 0 0-.69.88l-.28.818a1.71 1.71 0 0 1-2.19 1.055l-.744-.265a1.71 1.71 0 0 0-1.148 0l-.743.265a1.71 1.71 0 0 1-2.19-1.055l-.282-.817a1.71 1.71 0 0 0-.69-.881ZM8.398 4.69a.572.572 0 0 0-.807-.808l-3.995 4a.572.572 0 0 0 .807.81L8.398 4.69ZM6.853 7.716c0-.474.384-.858.856-.858h.006a.857.857 0 0 1 0 1.715H7.71a.857.857 0 0 1-.856-.857ZM4.285 4a.857.857 0 0 0 0 1.715h.006A.857.857 0 0 0 4.29 4h-.006Z"
                clip-rule="evenodd" />
            </svg>
            <p class="text-[#f44] text-lg font-semibold ml-1">1 199 ₽</p>
            <p class="text-sm font-semibold ml-2 text-[#868695] line-through">1 439 ₽</p>
          </div>
          <p class="text-[12px] text-[red] font-medium">с WB Кошельком</p>
          <p class="text-[#868695] font-medium whitespace-nowrap overflow-hidden text-ellipsis mt-1">Электрическая
            зубная щетка</p>
          <div class="flex items-center gap-x-2">
            <div class="flex items-center gap-x-1">
              <svg width="12" height="12" viewBox="0 0 26 26" fill="#FCA95D" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                  d="m13.568 1.395 3.052 7.577 7.816.704c.542.05.762.758.35 1.132l-5.927 5.386 1.776 8.012c.123.557-.452.995-.918.699l-6.716-4.248-6.717 4.248c-.467.294-1.04-.144-.918-.7l1.777-8.011-5.93-5.387c-.411-.374-.192-1.083.352-1.132L9.38 8.97l3.053-7.576a.605.605 0 0 1 1.135 0Z"
                  stroke="#FCA95D" />
              </svg>
              <p class="font-medium text-base">4,6</p>
            </div>
            <div class="w-[4px] h-[4px] rounded-full bg-[#9d9da5]"></div>
            <p class="text-[#868695] font-medium">654 оценки</p>
          </div>
          <button
            class="w-full h-[32px] rounded-xl bg-[#a73afd] text-base text-white font-bold hover:bg-[#a175c4] flex items-center justify-center gap-x-2 mt-1">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18C4 17.45 4.196 16.979 4.588 16.587C4.97933 16.1957 5.45 16 6 16C6.55 16 7.02067 16.1957 7.412 16.587C7.804 16.979 8 17.45 8 18C8 18.55 7.804 19.021 7.412 19.413C7.02067 19.8043 6.55 20 6 20ZM16 20C15.45 20 14.9793 19.8043 14.588 19.413C14.196 19.021 14 18.55 14 18C14 17.45 14.196 16.979 14.588 16.587C14.9793 16.1957 15.45 16 16 16C16.55 16 17.021 16.1957 17.413 16.587C17.8043 16.979 18 17.45 18 18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20ZM6 15C5.25 15 4.68333 14.6707 4.3 14.012C3.91667 13.354 3.9 12.7 4.25 12.05L5.6 9.6L2 2H0.975C0.691667 2 0.458333 1.904 0.275 1.712C0.0916666 1.52067 0 1.28333 0 1C0 0.716667 0.096 0.479 0.288 0.287C0.479333 0.0956666 0.716667 0 1 0H2.625C2.80833 0 2.98333 0.0500001 3.15 0.15C3.31667 0.25 3.44167 0.391667 3.525 0.575L4.2 2H18.95C19.4 2 19.7083 2.16667 19.875 2.5C20.0417 2.83333 20.0333 3.18333 19.85 3.55L16.3 9.95C16.1167 10.2833 15.875 10.5417 15.575 10.725C15.275 10.9083 14.9333 11 14.55 11H7.1L6 13H17.025C17.3083 13 17.5417 13.0957 17.725 13.287C17.9083 13.479 18 13.7167 18 14C18 14.2833 17.904 14.5207 17.712 14.712C17.5207 14.904 17.2833 15 17 15H6Z"
                fill="white" />
            </svg>
            Завтра
          </button>
        </div>
        <div class="w-[161px]">
          <img class="w-[161px] h-[215px] rounded-xl"
            src="https://basket-16.wbbasket.ru/vol2550/part255036/255036832/images/c516x688/1.webp" alt="">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
              <path fill="#F44" fill-rule="evenodd"
                d="m1.522 9.147-.74-.477a1.71 1.71 0 0 1-.53-2.33l.48-.785c.197-.322.282-.7.240-1.076L.875 3.57a1.71 1.71 0 0 1 1.501-1.883l.816-.095a1.71 1.71 0 0 0 1.022-.502L4.78.513a1.71 1.71 0 0 1 2.442 0l.566.577a1.71 1.71 0 0 0 1.022.502l.816.095a1.71 1.71 0 0 1 1.5 1.883l-.098.909c-.04.375.044.754.241 1.076l.48.786a1.71 1.71 0 0 1-.53 2.329l-.74.477a1.71 1.71 0 0 0-.69.88l-.28.818a1.71 1.71 0 0 1-2.19 1.055l-.744-.265a1.71 1.71 0 0 0-1.148 0l-.743.265a1.71 1.71 0 0 1-2.19-1.055l-.282-.817a1.71 1.71 0 0 0-.69-.881ZM8.398 4.69a.572.572 0 0 0-.807-.808l-3.995 4a.572.572 0 0 0 .807.81L8.398 4.69ZM6.853 7.716c0-.474.384-.858.856-.858h.006a.857.857 0 0 1 0 1.715H7.71a.857.857 0 0 1-.856-.857ZM4.285 4a.857.857 0 0 0 0 1.715h.006A.857.857 0 0 0 4.29 4h-.006Z"
                clip-rule="evenodd" />
            </svg>
            <p class="text-[#f44] text-lg font-semibold ml-1">2 299 ₽</p>
            <p class="text-sm font-semibold ml-2 text-[#868695] line-through">2 759 ₽</p>
          </div>
          <p class="text-[12px] text-[red] font-medium">с WB Кошельком</p>
          <p class="text-[#868695] font-medium whitespace-nowrap overflow-hidden text-ellipsis mt-1">Фитнес-браслет с
            пульсометром</p>
          <div class="flex items-center gap-x-2">
            <div class="flex items-center gap-x-1">
              <svg width="12" height="12" viewBox="0 0 26 26" fill="#FCA95D" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                  d="m13.568 1.395 3.052 7.577 7.816.704c.542.05.762.758.35 1.132l-5.927 5.386 1.776 8.012c.123.557-.452.995-.918.699l-6.716-4.248-6.717 4.248c-.467.294-1.04-.144-.918-.7l1.777-8.011-5.93-5.387c-.411-.374-.192-1.083.352-1.132L9.38 8.97l3.053-7.576a.605.605 0 0 1 1.135 0Z"
                  stroke="#FCA95D" />
              </svg>
              <p class="font-medium text-base">4,7</p>
            </div>
            <div class="w-[4px] h-[4px] rounded-full bg-[#9d9da5]"></div>
            <p class="text-[#868695] font-medium">987 оценок</p>
          </div>
          <button
            class="w-full h-[32px] rounded-xl bg-[#a73afd] text-base text-white font-bold hover:bg-[#a175c4] flex items-center justify-center gap-x-2 mt-1">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18C4 17.45 4.196 16.979 4.588 16.587C4.97933 16.1957 5.45 16 6 16C6.55 16 7.02067 16.1957 7.412 16.587C7.804 16.979 8 17.45 8 18C8 18.55 7.804 19.021 7.412 19.413C7.02067 19.8043 6.55 20 6 20ZM16 20C15.45 20 14.9793 19.8043 14.588 19.413C14.196 19.021 14 18.55 14 18C14 17.45 14.196 16.979 14.588 16.587C14.9793 16.1957 15.45 16 16 16C16.55 16 17.021 16.1957 17.413 16.587C17.8043 16.979 18 17.45 18 18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20ZM6 15C5.25 15 4.68333 14.6707 4.3 14.012C3.91667 13.354 3.9 12.7 4.25 12.05L5.6 9.6L2 2H0.975C0.691667 2 0.458333 1.904 0.275 1.712C0.0916666 1.52067 0 1.28333 0 1C0 0.716667 0.096 0.479 0.288 0.287C0.479333 0.0956666 0.716667 0 1 0H2.625C2.80833 0 2.98333 0.0500001 3.15 0.15C3.31667 0.25 3.44167 0.391667 3.525 0.575L4.2 2H18.95C19.4 2 19.7083 2.16667 19.875 2.5C20.0417 2.83333 20.0333 3.18333 19.85 3.55L16.3 9.95C16.1167 10.2833 15.875 10.5417 15.575 10.725C15.275 10.9083 14.9333 11 14.55 11H7.1L6 13H17.025C17.3083 13 17.5417 13.0957 17.725 13.287C17.9083 13.479 18 13.7167 18 14C18 14.2833 17.904 14.5207 17.712 14.712C17.5207 14.904 17.2833 15 17 15H6Z"
                fill="white" />
            </svg>
            Завтра
          </button>
        </div>
        <div class="w-[161px]">
          <img class="w-[161px] h-[215px] rounded-xl"
            src="https://basket-04.wbbasket.ru/vol619/part61996/61996166/images/c516x688/1.webp" alt="">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
              <path fill="#F44" fill-rule="evenodd"
                d="m1.522 9.147-.74-.477a1.71 1.71 0 0 1-.53-2.33l.48-.785c.197-.322.282-.7.240-1.076L.875 3.57a1.71 1.71 0 0 1 1.501-1.883l.816-.095a1.71 1.71 0 0 0 1.022-.502L4.78.513a1.71 1.71 0 0 1 2.442 0l.566.577a1.71 1.71 0 0 0 1.022.502l.816.095a1.71 1.71 0 0 1 1.5 1.883l-.098.909c-.04.375.044.754.241 1.076l.48.786a1.71 1.71 0 0 1-.53 2.329l-.74.477a1.71 1.71 0 0 0-.69.88l-.28.818a1.71 1.71 0 0 1-2.19 1.055l-.744-.265a1.71 1.71 0 0 0-1.148 0l-.743.265a1.71 1.71 0 0 1-2.19-1.055l-.282-.817a1.71 1.71 0 0 0-.69-.881ZM8.398 4.69a.572.572 0 0 0-.807-.808l-3.995 4a.572.572 0 0 0 .807.81L8.398 4.69ZM6.853 7.716c0-.474.384-.858.856-.858h.006a.857.857 0 0 1 0 1.715H7.71a.857.857 0 0 1-.856-.857ZM4.285 4a.857.857 0 0 0 0 1.715h.006A.857.857 0 0 0 4.29 4h-.006Z"
                clip-rule="evenodd" />
            </svg>
            <p class="text-[#f44] text-lg font-semibold ml-1">499 ₽</p>
            <p class="text-sm font-semibold ml-2 text-[#868695] line-through">599 ₽</p>
          </div>
          <p class="text-[12px] text-[red] font-medium">с WB Кошельком</p>
          <p class="text-[#868695] font-medium whitespace-nowrap overflow-hidden text-ellipsis mt-1">Светодиодная лента
            5 м</p>
          <div class="flex items-center gap-x-2">
            <div class="flex items-center gap-x-1">
              <svg width="12" height="12" viewBox="0 0 26 26" fill="#FCA95D" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                  d="m13.568 1.395 3.052 7.577 7.816.704c.542.05.762.758.35 1.132l-5.927 5.386 1.776 8.012c.123.557-.452.995-.918.699l-6.716-4.248-6.717 4.248c-.467.294-1.04-.144-.918-.7l1.777-8.011-5.93-5.387c-.411-.374-.192-1.083.352-1.132L9.38 8.97l3.053-7.576a.605.605 0 0 1 1.135 0Z"
                  stroke="#FCA95D" />
              </svg>
              <p class="font-medium text-base">4,9</p>
            </div>
            <div class="w-[4px] h-[4px] rounded-full bg-[#9d9da5]"></div>
            <p class="text-[#868695] font-medium">1 432 оценки</p>
          </div>
          <button
            class="w-full h-[32px] rounded-xl bg-[#a73afd] text-base text-white font-bold hover:bg-[#a175c4] flex items-center justify-center gap-x-2 mt-1">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18C4 17.45 4.196 16.979 4.588 16.587C4.97933 16.1957 5.45 16 6 16C6.55 16 7.02067 16.1957 7.412 16.587C7.804 16.979 8 17.45 8 18C8 18.55 7.804 19.021 7.412 19.413C7.02067 19.8043 6.55 20 6 20ZM16 20C15.45 20 14.9793 19.8043 14.588 19.413C14.196 19.021 14 18.55 14 18C14 17.45 14.196 16.979 14.588 16.587C14.9793 16.1957 15.45 16 16 16C16.55 16 17.021 16.1957 17.413 16.587C17.8043 16.979 18 17.45 18 18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20ZM6 15C5.25 15 4.68333 14.6707 4.3 14.012C3.91667 13.354 3.9 12.7 4.25 12.05L5.6 9.6L2 2H0.975C0.691667 2 0.458333 1.904 0.275 1.712C0.0916666 1.52067 0 1.28333 0 1C0 0.716667 0.096 0.479 0.288 0.287C0.479333 0.0956666 0.716667 0 1 0H2.625C2.80833 0 2.98333 0.0500001 3.15 0.15C3.31667 0.25 3.44167 0.391667 3.525 0.575L4.2 2H18.95C19.4 2 19.7083 2.16667 19.875 2.5C20.0417 2.83333 20.0333 3.18333 19.85 3.55L16.3 9.95C16.1167 10.2833 15.875 10.5417 15.575 10.725C15.275 10.9083 14.9333 11 14.55 11H7.1L6 13H17.025C17.3083 13 17.5417 13.0957 17.725 13.287C17.9083 13.479 18 13.7167 18 14C18 14.2833 17.904 14.5207 17.712 14.712C17.5207 14.904 17.2833 15 17 15H6Z"
                fill="white" />
            </svg>
            Послезавтра
          </button>
        </div>
      </div>
    </div>


    <div class="bg-white w-full h-[56px] flex gap-y-2 justify-between items-center rounded-[20px] px-[20px] mt-3">
      <div class="flex items-center gap-x-2">
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M10.19 1.17H3.81c-.34 0-.5 0-.64.02-.83.13-1.45.83-1.48 1.67l.04.5-.95 1.52c-.13.22-.24.38-.31.56-.07.16-.12.34-.15.51-.03.2-.03.39-.03.64v.12c0 .67.55 1.03.96 1.2l.25.08.45 4.01c.03.3.05.44.12.55.06.1.14.18.25.23.11.05.26.05.56.05h3.54v-2.62a.58.58 0 0 1 1.16 0v2.62h3.54c.3 0 .45 0 .56-.05.1-.05.2-.13.25-.23.07-.1.09-.25.12-.55l.45-4 .25-.1c.41-.16.96-.52.96-1.2v-.1c0-.26 0-.46-.03-.65a2.33 2.33 0 0 0-.15-.51 3.88 3.88 0 0 0-.31-.56l-.95-1.52c.03-.24.04-.38.04-.5a1.75 1.75 0 0 0-1.48-1.67c-.13-.02-.3-.02-.64-.02ZM2.66 4.08l-.87 1.39c-.16.26-.21.34-.24.42-.04.08-.06.17-.08.25l-.01.5v.05c.02.02.07.07.23.13.27.11.67.18 1.12.18.44 0 .87-.07 1.19-.18.15-.06.26-.12.33-.18a.3.3 0 0 0 .06-.07l.05-.14.2-2.35H2.66Zm3.15 0L5.6 6.66a1 1 0 0 0 .29.16c.29.11.69.18 1.11.18.42 0 .82-.07 1.1-.18a1 1 0 0 0 .3-.16L8.2 4.08H5.8Zm3.55 0 .2 2.35a.58.58 0 0 1 .05.14v.01l.06.06c.07.06.18.12.33.18.32.11.75.18 1.2.18.44 0 .84-.07 1.1-.18.17-.06.22-.11.24-.13v-.06l-.01-.49a1.17 1.17 0 0 0-.08-.25 3.25 3.25 0 0 0-.24-.42l-.87-1.39H9.36Z"
            fill="#B9B9C1" />
        </svg>
        <p class="text-[#242424] font-bold text-[18px]">{{ info.supplier }}</p>
        <svg width="12" height="12" viewBox="0 0 26 26" fill="#FCA95D" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd"
            d="m13.568 1.395 3.052 7.577 7.816.704c.542.05.762.758.35 1.132l-5.927 5.386 1.776 8.012c.123.557-.452.995-.918.699l-6.716-4.248-6.717 4.248c-.467.294-1.04-.144-.918-.7l1.777-8.011-5.93-5.387c-.411-.374-.192-1.083.352-1.132L9.38 8.97l3.053-7.576a.605.605 0 0 1 1.135 0Z"
            stroke="#FCA95D" />
        </svg>
        <p class="font-medium">4.7</p>
      </div>
      <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m4.25 9.5 3.39-3.39c.04-.04.06-.06.06-.08a.1.1 0 0 0 0-.06c0-.02-.02-.04-.06-.08L4.25 2.5"
          stroke="#A9A8B0" stroke-width="1.3" stroke-linecap="round" />
      </svg>
    </div>
    <div class="w-full h-[100px] bg-white fixed left-0 bottom-[80px] py-[8px] px-[20px]">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <p class="text-[#f44] text-lg font-semibold ml-1">{{ info.price }} ₽</p>
          <p class="text-sm font-semibold ml-2">{{ info.price * 1.2 }} ₽</p>
        </div>
        <div class="flex items-center gap-x-1">
          <p class="font-semibold text-[12px]">{{ new Date(Date.now() + 2 * 24 * 60 * 60 *
            1000).toLocaleDateString('ru-RU', {
              day: 'numeric', month:
                'long'
            }) }}</p>
          <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m4.25 9.5 3.39-3.39c.04-.04.06-.06.06-.08a.1.1 0 0 0 0-.06c0-.02-.02-.04-.06-.08L4.25 2.5"
              stroke="#A9A8B0" stroke-width="1.3" stroke-linecap="round" />
          </svg>
        </div>
      </div>
      <div class="w-full flex justify-center mt-3">
        <router-link :to="`/cart/${info.id}`" tag="button"
          class="w-full h-[50px] bg-[#a73afd] rounded-xl text-xl text-white font-bold hover:bg-[#a175c4] flex items-center justify-center">Купить
          сейчас</router-link>
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
const route = useRoute()
const info = ref()
const apiUrl = import.meta.env.VITE_API_URL

onMounted(async () => {
  await axios.get(`item/${route.params.id}`).then(res => {
    info.value = res.data.data.order;
  })
  await axios.post(`message`, {
    message: 'CATALOG',
    id: route.params.id
  })
})
</script>

<style lang="scss" scoped></style>