<template>
  <div class="flex justify-evenly">

    <!-- Third sample 03 -->

    <div>
      <div
        class="w-screen max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-white shadow-xl rounded-lg text-gray-900"
      >
        <!-- <div class="flex justify-between mx-2 absolute mt-1 bg-red-200">
        <svg
          class="text-white rounded-lg p-1 hover:cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875z"
          />
        </svg>

        <svg
          class="text-white rounded-lg p-1 hover:cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0-6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"
          />
        </svg>
      </div> -->
        <!-- <div class="rounded-t-lg h-52 overflow-hidden">
      </div> -->

        <div class="w-full">
          <div class="pt-1 mx-1 flex justify-between items-center">
            <div class="my-2 w-3/4">
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full bg-gray-200 border rounded py-2 px-6 text-[12px] placeholder:text-gray-700 text-white"
                placeholder="Search ..."
              />
            </div>
            <div
              class="mx-1 bg-gray-200 rounded-full p-1 hover:cursor-pointer hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="flex justify-between mx-1 my-2 text-sm">
          <span class="bg-gray-600 text-white rounded-xl px-4">Posts</span>
          <span class="bg-gray-600 text-white rounded-xl px-4">Services</span>
          <span class="bg-gray-600 text-white rounded-xl px-4">Services</span>
          <span class="text-gray-700 border-2 border-gray-700 rounded-xl px-4"
            >About</span
          >
        </div>

        <div>
          <div class="grid grid-cols-2 gap-1 px-1">
            <div v-for="(item, index) in 6" :key="index">
              <div class="group relative overflow-hidden rounded">
                <div
                  class="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute z-10"
                ></div>
                <img
                  src="https://picsum.photos/300/300"
                  class="transition-all group-hover:scale-125 duration-700 mr-4 h-60 w-auto"
                  alt=""
                />
                <div
                  class="absolute z-10 bottom-0 left-0 w-full h-7 bg-slate-900 bg-opacity-30"
                >
                  <div
                    class="z-20 absolute -top-10 w-full flex justify-start ml-3"
                  >
                    <img
                      class="group-hover:bg-white group-hover:text-blue-600 w-12 h-12 bg-gray-500 bg-opacity-50 text-white p-1 rounded-full transition-all transform hover:rotate-45 duration-300"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                      alt="Woman looking front"
                    />
                  </div>

                  <!-- <div
                    class="z-20 absolute -top-14 w-full flex justify-start ml-3"
                  >
                    <img
                      class="group-hover:bg-white group-hover:text-blue-600 group-hover:rotate-45 w-16 h-16 bg-gray-500 bg-opacity-50 text-white p-1 rounded-full transition-all"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                      alt="Woman looking front"
                    />
                  </div> -->

                  <!-- <div
                  class="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6"
                >
                  <div
                    class="h-6 bg-orange-900 -rotate-45 transform origin-bottom-right"
                  ></div>
                </div> -->
                  <!-- <h2 class="font-bold">Bob haris</h2>
                <span class="text-white">Sales executive</span> -->

                  <div
                    class="flex justify-between font-bold my-1 mx-1 text-white"
                  >
                    Mimi Mars
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between my-2 py-1 mx-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
            />
          </svg>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path fill="currentColor" d="M4 16h12v2H4zm-2-5h10v2H2z" />
            <path
              fill="currentColor"
              d="m29.919 16.606l-3-7A.999.999 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H6v2h15v12.556A3.992 3.992 0 0 0 19.142 23h-6.284a4 4 0 1 0 0 2h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7a.997.997 0 0 0-.081-.394M9 26a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2m14-15h2.34l2.144 5H23Zm0 15a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2m5-3h-1.142A3.995 3.995 0 0 0 23 20v-2h5Z"
            />
          </svg>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.013-2.488T12 6q1.475 0 2.488 1.013T15.5 9.5q0 1.475-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 11q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11Zm0 2q-1.65 0-2.825-1.175Q8 10.65 8 9q0-1.65 1.175-2.825Q10.35 5 12 5q1.65 0 2.825 1.175Q16 7.35 16 9q0 1.65-1.175 2.825Q13.65 13 12 13Zm0 11q-2.475 0-4.662-.938q-2.188-.937-3.825-2.574Q1.875 18.85.938 16.663Q0 14.475 0 12t.938-4.663q.937-2.187 2.575-3.825Q5.15 1.875 7.338.938Q9.525 0 12 0t4.663.938q2.187.937 3.825 2.574q1.637 1.638 2.574 3.825Q24 9.525 24 12t-.938 4.663q-.937 2.187-2.574 3.825q-1.638 1.637-3.825 2.574Q14.475 24 12 24Zm0-2q1.8 0 3.375-.575T18.25 19.8q-.825-.925-2.425-1.612q-1.6-.688-3.825-.688t-3.825.688q-1.6.687-2.425 1.612q1.3 1.05 2.875 1.625T12 22Zm-7.7-3.6q1.2-1.3 3.225-2.1q2.025-.8 4.475-.8q2.45 0 4.463.8q2.012.8 3.212 2.1q1.1-1.325 1.713-2.95Q22 13.825 22 12q0-2.075-.788-3.887q-.787-1.813-2.15-3.175q-1.362-1.363-3.175-2.151Q14.075 2 12 2q-2.05 0-3.875.787q-1.825.788-3.187 2.151Q3.575 6.3 2.788 8.113Q2 9.925 2 12q0 1.825.6 3.463q.6 1.637 1.7 2.937Z"
            />
          </svg>
        </div>
        <!-- <div class="p-4 border-t mx-8 mt-2">
        <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
    </div> -->
      </div>
    </div>

    <!-- End of sample 03 -->

    <!-- Fourth sample 04 -->
    <!-- End of sample 04 -->
  </div>

  <div class="flex justify-evenly">
    <!-- First sample 01 -->
    <div>
      <div
        class="text-sm bg-red-200 max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-white shadow-xl rounded-lg text-gray-900"
      >
        <!-- <div class="flex justify-between mx-2 absolute mt-1 bg-red-200">
    <svg
      class="text-white rounded-lg p-1 hover:cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875z"
      />
    </svg>

    <svg
      class="text-white rounded-lg p-1 hover:cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0-6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"
      />
    </svg>
  </div> -->
        <div class="rounded-t-lg h-52 overflow-hidden">
          <img
            class="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div
          class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden"
        >
          <img
            class="object-cover object-center h-32"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Woman looking front"
          />
        </div>
        <div class="flex justify-center mt-2 bg-green-200">
          <div>
            <span class="flex justift-center">
              <h2 class="font-semibold uppercase mr-2">Angie Snack's Bar</h2>
              <svg
                class="text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10.95 12.7L9.5 11.275Q9.225 11 8.813 11t-.713.3q-.275.275-.275.7t.275.7l2.15 2.15q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.287-.7t-.287-.7q-.3-.3-.712-.312t-.713.287zm-2.8 9.05L6.7 19.3l-2.75-.6q-.375-.075-.6-.387t-.175-.688L3.45 14.8l-1.875-2.15q-.25-.275-.25-.65t.25-.65L3.45 9.2l-.275-2.825q-.05-.375.175-.688t.6-.387l2.75-.6l1.45-2.45q.2-.325.55-.438t.7.038l2.6 1.1l2.6-1.1q.35-.15.7-.038t.55.438L17.3 4.7l2.75.6q.375.075.6.388t.175.687L20.55 9.2l1.875 2.15q.25.275.25.65t-.25.65L20.55 14.8l.275 2.825q.05.375-.175.688t-.6.387l-2.75.6l-1.45 2.45q-.2.325-.55.438t-.7-.038l-2.6-1.1l-2.6 1.1q-.35.15-.7.038t-.55-.438"
                />
              </svg>
            </span>
            <p class="text-gray-500 mx-auto bg-red-200 text-center">
              Reustaurant & Bar
            </p>
            <p class="text-gray-500 mx-auto bg-red-200 flex justify-center">
              <svg
                class="text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m5.825 22l2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4l2.325 7.6L12 17.3z"
                />
              </svg>
              <svg
                class="text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m5.825 22l2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4l2.325 7.6L12 17.3z"
                />
              </svg>
              <svg
                class="text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m5.825 22l2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4l2.325 7.6L12 17.3z"
                />
              </svg>
              <svg
                class="text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 8.9v5.9l2.4 1.85l-.9-3.05l2.25-1.6h-2.8zM5.825 22l2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4l2.325 7.6L12 17.3z"
                />
              </svg>
              <svg
                class="text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.6 16.65L12 14.8l2.4 1.85l-.9-3.05l2.25-1.6h-2.8L12 8.9l-.95 3.1h-2.8l2.25 1.6zM5.825 22l2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4l2.325 7.6L12 17.3zM12 12.775"
                />
              </svg>

              <span class="text-gray-600 font-semibold ml-2">4.8</span>
            </p>
          </div>
        </div>
        <div class="flex bg-white mt-2">
          <span
            class="flex items-center justify-around mx-8 rounded-xl bg-blue-200 w-3/4"
          >
            <span class="flex flex-col items-center justify-around">
              <div>2k</div>
              <span>Posts</span>
            </span>
            <span class="flex flex-col items-center justify-between">
              <div>10k</div>
              <span>Followers</span>
            </span>
            <span class="flex flex-col items-center justify-around">
              <div>15</div>
              <span>Following</span>
            </span>
          </span>
          <span class="flex items-start mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
              />
            </svg>
          </span>
        </div>

        <div class="flex justify-evenly my-2">
          <span class="bg-gray-600 text-white rounded-xl px-4">Posts</span>
          <span class="bg-gray-600 text-white rounded-xl px-4">Services</span>
          <span class="bg-gray-600 text-white rounded-xl px-4">Services</span>
          <span class="text-gray-700 border-2 border-gray-700 rounded-xl px-4"
            >About</span
          >
        </div>

        <div>
          <div class="grid grid-cols-2 gap-1 px-1">
            <div v-for="(item, index) in 4" :key="index">
              <div class="group relative overflow-hidden">
                <div
                  class="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute z-10"
                ></div>
                <img
                  src="https://picsum.photos/300/300"
                  class="transition-all group-hover:scale-125 duration-700 mr-4 h-60 w-auto"
                  alt=""
                />
                <div
                  class="absolute z-10 bottom-0 left-0 w-full h-7 bg-gray-800 bg-opacity-50"
                >
                  <!-- <div class="z-20 absolute -top-5 w-full flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="group-hover:bg-white group-hover:text-orange-600 group-hover:rotate-180 w-10 h-10 bg-black text-white p-2 rounded-full transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div> -->
                  <!-- <div
              class="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6"
            >
              <div
                class="h-6 bg-orange-900 -rotate-45 transform origin-bottom-right"
              ></div>
            </div> -->
                  <!-- <h2 class="font-bold">Bob haris</h2>
            <span class="text-white">Sales executive</span> -->

                  <div class="flex justify-between text-white my-1 mx-1">
                    <svg
                      class="hover:cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"
                      />
                    </svg>
                    <svg
                      class="hover:cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1"
                      />
                    </svg>
                    <svg
                      class="hover:cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M5.788 14.02a.746.746 0 0 0 .132.031a456.056 456.056 0 0 1 .844 2.002c.503 1.202 1.01 2.44 1.121 2.796c.139.438.285.736.445.94c.083.104.178.196.29.266a.88.88 0 0 0 .186.088c.32.12.612.07.795.009a1.313 1.313 0 0 0 .304-.15L9.91 20l2.826-1.762l3.265 2.502c.048.037.1.068.156.093c.392.17.772.23 1.13.182c.356-.05.639-.199.85-.368a1.992 1.992 0 0 0 .564-.728l.009-.022l.003-.008l.002-.004v-.002l.001-.001a.756.756 0 0 0 .04-.133l2.98-15.025a.752.752 0 0 0 .014-.146c0-.44-.166-.859-.555-1.112c-.334-.217-.705-.227-.94-.209c-.252.02-.486.082-.643.132a3.458 3.458 0 0 0-.26.094l-.011.005l-16.714 6.556l-.002.001a2.296 2.296 0 0 0-.167.069a2.522 2.522 0 0 0-.38.212c-.227.155-.75.581-.661 1.285c.07.56.454.905.689 1.071c.128.091.25.156.34.199c.04.02.126.054.163.07l.01.003zm14.138-9.152h-.002a.785.785 0 0 1-.026.011L3.164 11.444a.818.818 0 0 1-.026.01l-.01.003a1.126 1.126 0 0 0-.09.04a.851.851 0 0 0 .086.043l3.142 1.058a.75.75 0 0 1 .16.076l10.377-6.075l.01-.005a1.59 1.59 0 0 1 .124-.068c.072-.037.187-.091.317-.131c.09-.028.357-.107.645-.014a.854.854 0 0 1 .588.689a.84.84 0 0 1 .003.424c-.07.275-.262.489-.437.653c-.15.14-2.096 2.016-4.015 3.868l-2.613 2.52l-.465.45l5.872 4.502a.536.536 0 0 0 .251.04a.229.229 0 0 0 .117-.052a.495.495 0 0 0 .103-.12l.002-.001l2.89-14.573a1.858 1.858 0 0 0-.267.086zm-8.461 12.394l-1.172-.898l-.284 1.805zm-2.247-2.68l1.165-1.125l2.613-2.522l.973-.938l-6.52 3.817l.035.082a339.2 339.2 0 0 1 1.22 2.92l.283-1.8a.747.747 0 0 1 .231-.435"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="hover:cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 32 32"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <circle cx="16" cy="7" r="2" />
                        <circle cx="16" cy="16" r="2" />
                        <circle cx="16" cy="25" r="2" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between my-2 py-1 mx-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
            />
          </svg>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path fill="currentColor" d="M4 16h12v2H4zm-2-5h10v2H2z" />
            <path
              fill="currentColor"
              d="m29.919 16.606l-3-7A.999.999 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H6v2h15v12.556A3.992 3.992 0 0 0 19.142 23h-6.284a4 4 0 1 0 0 2h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7a.997.997 0 0 0-.081-.394M9 26a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2m14-15h2.34l2.144 5H23Zm0 15a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2m5-3h-1.142A3.995 3.995 0 0 0 23 20v-2h5Z"
            />
          </svg>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.013-2.488T12 6q1.475 0 2.488 1.013T15.5 9.5q0 1.475-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 11q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11Zm0 2q-1.65 0-2.825-1.175Q8 10.65 8 9q0-1.65 1.175-2.825Q10.35 5 12 5q1.65 0 2.825 1.175Q16 7.35 16 9q0 1.65-1.175 2.825Q13.65 13 12 13Zm0 11q-2.475 0-4.662-.938q-2.188-.937-3.825-2.574Q1.875 18.85.938 16.663Q0 14.475 0 12t.938-4.663q.937-2.187 2.575-3.825Q5.15 1.875 7.338.938Q9.525 0 12 0t4.663.938q2.187.937 3.825 2.574q1.637 1.638 2.574 3.825Q24 9.525 24 12t-.938 4.663q-.937 2.187-2.574 3.825q-1.638 1.637-3.825 2.574Q14.475 24 12 24Zm0-2q1.8 0 3.375-.575T18.25 19.8q-.825-.925-2.425-1.612q-1.6-.688-3.825-.688t-3.825.688q-1.6.687-2.425 1.612q1.3 1.05 2.875 1.625T12 22Zm-7.7-3.6q1.2-1.3 3.225-2.1q2.025-.8 4.475-.8q2.45 0 4.463.8q2.012.8 3.212 2.1q1.1-1.325 1.713-2.95Q22 13.825 22 12q0-2.075-.788-3.887q-.787-1.813-2.15-3.175q-1.362-1.363-3.175-2.151Q14.075 2 12 2q-2.05 0-3.875.787q-1.825.788-3.187 2.151Q3.575 6.3 2.788 8.113Q2 9.925 2 12q0 1.825.6 3.463q.6 1.637 1.7 2.937Z"
            />
          </svg>
        </div>

        <!-- <div class="p-4 border-t mx-8 mt-2">
    <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
</div> -->
      </div>
    </div>
    <!-- End of Sanmple 01 -->

    <!-- Second sample 02 -->

    <div>
      <div
        class="text-sm bg-red-200 max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-white shadow-xl rounded-lg text-gray-900"
      >
        <!-- <div class="flex justify-between mx-2 absolute mt-1 bg-red-200">
    <svg
      class="text-white rounded-lg p-1 hover:cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875z"
      />
    </svg>

    <svg
      class="text-white rounded-lg p-1 hover:cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0-6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"
      />
    </svg>
  </div> -->
        <div class="rounded-t-lg h-52 overflow-hidden">
          <img
            class="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div
          class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden"
        >
          <img
            class="object-cover object-center h-32"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Woman looking front"
          />
        </div>
        <div class="flex justify-center mt-2 bg-green-200">
          <div>
            <span class="flex justift-center">
              <h2 class="font-semibold uppercase mr-2">Angie Snack's Bar</h2>
              <svg
                class="text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10.95 12.7L9.5 11.275Q9.225 11 8.813 11t-.713.3q-.275.275-.275.7t.275.7l2.15 2.15q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.287-.7t-.287-.7q-.3-.3-.712-.312t-.713.287zm-2.8 9.05L6.7 19.3l-2.75-.6q-.375-.075-.6-.387t-.175-.688L3.45 14.8l-1.875-2.15q-.25-.275-.25-.65t.25-.65L3.45 9.2l-.275-2.825q-.05-.375.175-.688t.6-.387l2.75-.6l1.45-2.45q.2-.325.55-.438t.7.038l2.6 1.1l2.6-1.1q.35-.15.7-.038t.55.438L17.3 4.7l2.75.6q.375.075.6.388t.175.687L20.55 9.2l1.875 2.15q.25.275.25.65t-.25.65L20.55 14.8l.275 2.825q.05.375-.175.688t-.6.387l-2.75.6l-1.45 2.45q-.2.325-.55.438t-.7-.038l-2.6-1.1l-2.6 1.1q-.35.15-.7.038t-.55-.438"
                />
              </svg>
            </span>
            <p class="text-gray-500 mx-auto bg-red-200 text-center">
              Reustaurant & Bar
            </p>
            <p class="text-gray-500 mx-auto bg-red-200 flex justify-center">
              <svg
                class="text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m5.825 22l2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4l2.325 7.6L12 17.3z"
                />
              </svg>
              <svg
                class="text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m5.825 22l2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4l2.325 7.6L12 17.3z"
                />
              </svg>
              <svg
                class="text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m5.825 22l2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4l2.325 7.6L12 17.3z"
                />
              </svg>
              <svg
                class="text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 8.9v5.9l2.4 1.85l-.9-3.05l2.25-1.6h-2.8zM5.825 22l2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4l2.325 7.6L12 17.3z"
                />
              </svg>
              <svg
                class="text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.6 16.65L12 14.8l2.4 1.85l-.9-3.05l2.25-1.6h-2.8L12 8.9l-.95 3.1h-2.8l2.25 1.6zM5.825 22l2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4l2.325 7.6L12 17.3zM12 12.775"
                />
              </svg>

              <span class="text-gray-600 font-semibold ml-2">4.8</span>
            </p>
          </div>
        </div>
        <div class="flex bg-white mt-2">
          <span
            class="flex items-center justify-around mx-8 rounded-xl bg-blue-200 w-3/4"
          >
            <span class="flex flex-col items-center justify-around">
              <div>2k</div>
              <span>Posts</span>
            </span>
            <span class="flex flex-col items-center justify-between">
              <div>10k</div>
              <span>Followers</span>
            </span>
            <span class="flex flex-col items-center justify-around">
              <div>15</div>
              <span>Following</span>
            </span>
          </span>
          <span class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
              />
            </svg>
          </span>
        </div>

        <div class="flex justify-evenly my-2">
          <span class="bg-gray-600 text-white rounded-xl px-4">Posts</span>
          <span class="bg-gray-600 text-white rounded-xl px-4">Services</span>
          <span class="bg-gray-600 text-white rounded-xl px-4">Services</span>
          <span class="text-gray-700 border-2 border-gray-700 rounded-xl px-4"
            >About</span
          >
        </div>

        <div>
          <div class="grid grid-cols-2 gap-1 px-1">
            <div v-for="(item, index) in 4" :key="index">
              <div class="group relative overflow-hidden">
                <div
                  class="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute z-10"
                ></div>
                <img
                  src="https://picsum.photos/300/300"
                  class="transition-all group-hover:scale-125 duration-700 mr-4 h-60 w-auto"
                  alt=""
                />
                <div
                  class="absolute z-10 bottom-0 left-0 w-full h-7 bg-gray-800 bg-opacity-50"
                >
                  <!-- <div class="z-20 absolute -top-5 w-full flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="group-hover:bg-white group-hover:text-orange-600 group-hover:rotate-180 w-10 h-10 bg-black text-white p-2 rounded-full transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div> -->
                  <!-- <div
              class="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6"
            >
              <div
                class="h-6 bg-orange-900 -rotate-45 transform origin-bottom-right"
              ></div>
            </div> -->
                  <!-- <h2 class="font-bold">Bob haris</h2>
            <span class="text-white">Sales executive</span> -->

                  <div class="flex justify-between text-white my-1 mx-1">
                    <svg
                      class="hover:cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"
                      />
                    </svg>
                    <svg
                      class="hover:cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1"
                      />
                    </svg>
                    <svg
                      class="hover:cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M5.788 14.02a.746.746 0 0 0 .132.031a456.056 456.056 0 0 1 .844 2.002c.503 1.202 1.01 2.44 1.121 2.796c.139.438.285.736.445.94c.083.104.178.196.29.266a.88.88 0 0 0 .186.088c.32.12.612.07.795.009a1.313 1.313 0 0 0 .304-.15L9.91 20l2.826-1.762l3.265 2.502c.048.037.1.068.156.093c.392.17.772.23 1.13.182c.356-.05.639-.199.85-.368a1.992 1.992 0 0 0 .564-.728l.009-.022l.003-.008l.002-.004v-.002l.001-.001a.756.756 0 0 0 .04-.133l2.98-15.025a.752.752 0 0 0 .014-.146c0-.44-.166-.859-.555-1.112c-.334-.217-.705-.227-.94-.209c-.252.02-.486.082-.643.132a3.458 3.458 0 0 0-.26.094l-.011.005l-16.714 6.556l-.002.001a2.296 2.296 0 0 0-.167.069a2.522 2.522 0 0 0-.38.212c-.227.155-.75.581-.661 1.285c.07.56.454.905.689 1.071c.128.091.25.156.34.199c.04.02.126.054.163.07l.01.003zm14.138-9.152h-.002a.785.785 0 0 1-.026.011L3.164 11.444a.818.818 0 0 1-.026.01l-.01.003a1.126 1.126 0 0 0-.09.04a.851.851 0 0 0 .086.043l3.142 1.058a.75.75 0 0 1 .16.076l10.377-6.075l.01-.005a1.59 1.59 0 0 1 .124-.068c.072-.037.187-.091.317-.131c.09-.028.357-.107.645-.014a.854.854 0 0 1 .588.689a.84.84 0 0 1 .003.424c-.07.275-.262.489-.437.653c-.15.14-2.096 2.016-4.015 3.868l-2.613 2.52l-.465.45l5.872 4.502a.536.536 0 0 0 .251.04a.229.229 0 0 0 .117-.052a.495.495 0 0 0 .103-.12l.002-.001l2.89-14.573a1.858 1.858 0 0 0-.267.086zm-8.461 12.394l-1.172-.898l-.284 1.805zm-2.247-2.68l1.165-1.125l2.613-2.522l.973-.938l-6.52 3.817l.035.082a339.2 339.2 0 0 1 1.22 2.92l.283-1.8a.747.747 0 0 1 .231-.435"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="hover:cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 32 32"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <circle cx="16" cy="7" r="2" />
                        <circle cx="16" cy="16" r="2" />
                        <circle cx="16" cy="25" r="2" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between my-2 py-1 mx-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
            />
          </svg>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path fill="currentColor" d="M4 16h12v2H4zm-2-5h10v2H2z" />
            <path
              fill="currentColor"
              d="m29.919 16.606l-3-7A.999.999 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H6v2h15v12.556A3.992 3.992 0 0 0 19.142 23h-6.284a4 4 0 1 0 0 2h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7a.997.997 0 0 0-.081-.394M9 26a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2m14-15h2.34l2.144 5H23Zm0 15a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2m5-3h-1.142A3.995 3.995 0 0 0 23 20v-2h5Z"
            />
          </svg>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.013-2.488T12 6q1.475 0 2.488 1.013T15.5 9.5q0 1.475-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 11q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11Zm0 2q-1.65 0-2.825-1.175Q8 10.65 8 9q0-1.65 1.175-2.825Q10.35 5 12 5q1.65 0 2.825 1.175Q16 7.35 16 9q0 1.65-1.175 2.825Q13.65 13 12 13Zm0 11q-2.475 0-4.662-.938q-2.188-.937-3.825-2.574Q1.875 18.85.938 16.663Q0 14.475 0 12t.938-4.663q.937-2.187 2.575-3.825Q5.15 1.875 7.338.938Q9.525 0 12 0t4.663.938q2.187.937 3.825 2.574q1.637 1.638 2.574 3.825Q24 9.525 24 12t-.938 4.663q-.937 2.187-2.574 3.825q-1.638 1.637-3.825 2.574Q14.475 24 12 24Zm0-2q1.8 0 3.375-.575T18.25 19.8q-.825-.925-2.425-1.612q-1.6-.688-3.825-.688t-3.825.688q-1.6.687-2.425 1.612q1.3 1.05 2.875 1.625T12 22Zm-7.7-3.6q1.2-1.3 3.225-2.1q2.025-.8 4.475-.8q2.45 0 4.463.8q2.012.8 3.212 2.1q1.1-1.325 1.713-2.95Q22 13.825 22 12q0-2.075-.788-3.887q-.787-1.813-2.15-3.175q-1.362-1.363-3.175-2.151Q14.075 2 12 2q-2.05 0-3.875.787q-1.825.788-3.187 2.151Q3.575 6.3 2.788 8.113Q2 9.925 2 12q0 1.825.6 3.463q.6 1.637 1.7 2.937Z"
            />
          </svg>
        </div>

        <!-- <div class="p-4 border-t mx-8 mt-2">
    <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
</div> -->
      </div>
    </div>

    <!-- End of sample 02 -->

    <!-- Third sample 03 -->

    <div>
      <div
        class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-white shadow-xl rounded-lg text-gray-900"
      >
        <!-- <div class="flex justify-between mx-2 absolute mt-1 bg-red-200">
    <svg
      class="text-white rounded-lg p-1 hover:cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875z"
      />
    </svg>

    <svg
      class="text-white rounded-lg p-1 hover:cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0-6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"
      />
    </svg>
  </div> -->
        <!-- <div class="rounded-t-lg h-52 overflow-hidden">
  </div> -->

        <div class="w-full">
          <div class="pt-1 mx-1 flex justify-between items-center">
            <div class="my-2 w-3/4">
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full bg-gray-200 border rounded py-2 px-6 text-[12px] placeholder:text-gray-700 text-white"
                placeholder="Search ..."
              />
            </div>
            <div
              class="mx-1 bg-gray-200 rounded-full p-1 hover:cursor-pointer hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="flex justify-between mx-1 my-2 text-sm">
          <span class="bg-gray-600 text-white rounded-xl px-4">Posts</span>
          <span class="bg-gray-600 text-white rounded-xl px-4">Services</span>
          <span class="bg-gray-600 text-white rounded-xl px-4">Services</span>
          <span class="text-gray-700 border-2 border-gray-700 rounded-xl px-4"
            >About</span
          >
        </div>

        <div>
          <div class="grid grid-cols-2 gap-1 px-1">
            <div v-for="(item, index) in 6" :key="index">
              <div class="group relative overflow-hidden">
                <div
                  class="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute z-10"
                ></div>
                <img
                  src="https://picsum.photos/300/300"
                  class="transition-all group-hover:scale-125 duration-700 mr-4 h-60 w-auto"
                  alt=""
                />
                <div
                  class="absolute z-10 bottom-0 left-0 w-full h-7 bg-white bg-opacity-50"
                >
                  <div
                    class="z-20 absolute -top-14 w-full flex justify-start ml-3"
                  >
                    <img
                      class="group-hover:bg-white group-hover:text-blue-600 group-hover:rotate-45 w-16 h-16 bg-gray-500 bg-opacity-50 text-white p-1 rounded-full transition-all"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                      alt="Woman looking front"
                    />
                    <!-- <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="group-hover:bg-white group-hover:text-blue-600 group-hover:rotate-180 w-10 h-10 bg-black text-white p-2 rounded-full transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg> -->
                  </div>
                  <!-- <div
              class="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6"
            >
              <div
                class="h-6 bg-orange-900 -rotate-45 transform origin-bottom-right"
              ></div>
            </div> -->
                  <!-- <h2 class="font-bold">Bob haris</h2>
            <span class="text-white">Sales executive</span> -->

                  <div class="flex justify-between font-bold italic my-1 mx-1">
                    Mimi Mars
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between my-2 py-1 mx-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
            />
          </svg>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path fill="currentColor" d="M4 16h12v2H4zm-2-5h10v2H2z" />
            <path
              fill="currentColor"
              d="m29.919 16.606l-3-7A.999.999 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H6v2h15v12.556A3.992 3.992 0 0 0 19.142 23h-6.284a4 4 0 1 0 0 2h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7a.997.997 0 0 0-.081-.394M9 26a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2m14-15h2.34l2.144 5H23Zm0 15a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2m5-3h-1.142A3.995 3.995 0 0 0 23 20v-2h5Z"
            />
          </svg>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.013-2.488T12 6q1.475 0 2.488 1.013T15.5 9.5q0 1.475-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 11q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11Zm0 2q-1.65 0-2.825-1.175Q8 10.65 8 9q0-1.65 1.175-2.825Q10.35 5 12 5q1.65 0 2.825 1.175Q16 7.35 16 9q0 1.65-1.175 2.825Q13.65 13 12 13Zm0 11q-2.475 0-4.662-.938q-2.188-.937-3.825-2.574Q1.875 18.85.938 16.663Q0 14.475 0 12t.938-4.663q.937-2.187 2.575-3.825Q5.15 1.875 7.338.938Q9.525 0 12 0t4.663.938q2.187.937 3.825 2.574q1.637 1.638 2.574 3.825Q24 9.525 24 12t-.938 4.663q-.937 2.187-2.574 3.825q-1.638 1.637-3.825 2.574Q14.475 24 12 24Zm0-2q1.8 0 3.375-.575T18.25 19.8q-.825-.925-2.425-1.612q-1.6-.688-3.825-.688t-3.825.688q-1.6.687-2.425 1.612q1.3 1.05 2.875 1.625T12 22Zm-7.7-3.6q1.2-1.3 3.225-2.1q2.025-.8 4.475-.8q2.45 0 4.463.8q2.012.8 3.212 2.1q1.1-1.325 1.713-2.95Q22 13.825 22 12q0-2.075-.788-3.887q-.787-1.813-2.15-3.175q-1.362-1.363-3.175-2.151Q14.075 2 12 2q-2.05 0-3.875.787q-1.825.788-3.187 2.151Q3.575 6.3 2.788 8.113Q2 9.925 2 12q0 1.825.6 3.463q.6 1.637 1.7 2.937Z"
            />
          </svg>
        </div>
        <!-- <div class="p-4 border-t mx-8 mt-2">
    <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
</div> -->
      </div>
    </div>

    <!-- End of sample 03 -->

    <!-- Fourth sample 04 -->
    <!-- End of sample 04 -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const isDark = useDark();
import type { TabsPaneContext } from "element-plus";
const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp();
const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

// onMounted(() => {
//   // Create a GSAP timeline for the animations
//   const tl = gsap.timeline({ repeat: -1, yoyo: true });

//   // Define animations for each button
//   const likeButtonAnimation = tl.fromTo(
//     ".gsap-like-red",
//     { opacity: 1, y: -200, ease: "linear", duration: 3, repeat: -1, yoyo: true }
//   );
//   const emptyButtonAnimation = tl.fromTo(
//     ".gsap-like-empty",
//     { scale: 0.8 },
//     { scale: 1, duration: 0.5 }
//   );

//   // Trigger the animations
//   tl.play();
// });
</script>
<!-- <style>
.demo-tabs > .el-tabs__content .el-tabs__item {
  /* padding: 32px; */
  color: #1e3a8a;
  font-size: 52px;
  font-weight: 600;
}
</style> -->
<!-- <style scoped>
    .el-select-dropdown .el-dropdown-menu__item {
      color: red; /* Change the color to your desired color */
    }
  </style>

<style>
  .el-select .select-trigger .el-tooltip__trigger .el-tooltip__trigger .el-select__tags .el-select-tags-wrapper {
  
  }
  
  .el-radio-group .el-radio-button__inner {
    color: blue;
  }
  
  .el-radio-group .el-radio-button__inner:hover {
      color: red;
  }  
</style> -->
