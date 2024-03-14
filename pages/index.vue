<template>
  <!-- Second sample 02 -->

  <div>
    <div
      class="w-screen text-sm max-w-2xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto"
    >
      <div class="fixed top-0 z-30 w-full bg-white">
        <div class="flex justify-between mx-1 pt-1">
          <ClientOnly>
            <nuxt-link class="" href="/chats">
              <button class="hover:bg-gray-300 hover:rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 256 256"
                >
                  <g fill="currentColor">
                    <path
                      d="M231.76 216.34a6 6 0 0 1-7.42 7.42l-29.87-8.53a72.05 72.05 0 0 1-102.41-39.34c1.3.07 2.61.11 3.93.11a72 72 0 0 0 67.93-95.88a72 72 0 0 1 59.29 106.36Z"
                      opacity=".2"
                    />
                    <path
                      d="M231.79 187.33a80 80 0 0 0-62.22-114.74a80 80 0 1 0-145.36 66.74l-7.66 26.82a14 14 0 0 0 17.3 17.3l26.82-7.66a80.15 80.15 0 0 0 25.75 7.63a80 80 0 0 0 108.91 40.37l26.82 7.66a14 14 0 0 0 17.3-17.3Zm-170.26-28.1a8.22 8.22 0 0 0-2.2.3l-26.41 7.55l7.55-26.41a8 8 0 0 0-.68-6a63.95 63.95 0 1 1 25.57 25.57a7.94 7.94 0 0 0-3.83-1.01m154 29.44l7.55 26.41l-26.41-7.55a8 8 0 0 0-6 .68a64.06 64.06 0 0 1-86.32-24.64a79.93 79.93 0 0 0 70.35-93.86a64 64 0 0 1 41.51 92.93a8 8 0 0 0-.68 6.03"
                    />
                  </g>
                </svg>
              </button>
            </nuxt-link>
            <template #fallback>
              <div class="h-[4vh] flex items-center justify-center text-center">
                <el-button loading round></el-button>
              </div>
            </template>
          </ClientOnly>
          <span class="italic font-semibold text-lg"> Explore Larosa </span>

          <ClientOnly>
            <button class="hover:bg-gray-300 hover:rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M12 1.25A7.75 7.75 0 0 0 4.25 9v.704a3.53 3.53 0 0 1-.593 1.958L2.51 13.385c-1.334 2-.316 4.718 2.003 5.35c.755.206 1.517.38 2.284.523l.002.005C7.567 21.315 9.622 22.75 12 22.75s4.433-1.435 5.202-3.487l.002-.005a28.472 28.472 0 0 0 2.284-.523c2.319-.632 3.337-3.35 2.003-5.35l-1.148-1.723a3.53 3.53 0 0 1-.593-1.958V9A7.75 7.75 0 0 0 12 1.25m3.376 18.287a28.46 28.46 0 0 1-6.753 0c.711 1.021 1.948 1.713 3.377 1.713c1.429 0 2.665-.692 3.376-1.713M5.75 9a6.25 6.25 0 1 1 12.5 0v.704c0 .993.294 1.964.845 2.79l1.148 1.723a2.02 2.02 0 0 1-1.15 3.071a26.96 26.96 0 0 1-14.187 0a2.021 2.021 0 0 1-1.15-3.07l1.15-1.724a5.03 5.03 0 0 0 .844-2.79z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <template #fallback>
              <div class="h-[4vh] flex items-center justify-center text-center">
                <el-button loading round></el-button>
              </div>
            </template>
          </ClientOnly>
        </div>

        <div class="flex justify-between items-center">
          <ClientOnly>
            <button class="hover:bg-gray-300 hover:rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M24.832 16.969c-.272-.647-.581-1.38-.883-2.285c-.79-2.369 1.734-4.953 1.758-4.977l-1.414-1.414c-.14.14-3.423 3.478-2.242 7.023c.326.978.652 1.75.938 2.43A9.381 9.381 0 0 1 24 22a6.24 6.24 0 0 1-4.19 5.293a8.52 8.52 0 0 0-2.103-8l-1.044-1.044l-.582 1.357c-1.836 4.284-4.021 6.154-5.306 6.934A5.844 5.844 0 0 1 8 22a9.624 9.624 0 0 1 .929-3.629A11.333 11.333 0 0 0 10 14v-1.778c.874.36 2 1.303 2 3.778v2.604l1.743-1.935c3.112-3.454 2.463-7.567 1.206-10.308A4.486 4.486 0 0 1 18 11h2c0-5.537-4.579-7-7-7h-2l1.2 1.599c.137.185 2.862 3.927 1.353 7.688A4.943 4.943 0 0 0 9 10H8v4a9.624 9.624 0 0 1-.929 3.629A11.333 11.333 0 0 0 6 22c0 3.848 3.823 8 10 8s10-4.152 10-8a11.377 11.377 0 0 0-1.168-5.031M12.835 27.526a16.499 16.499 0 0 0 4.367-5.598a6.105 6.105 0 0 1 .257 5.971A11.321 11.321 0 0 1 16 28a10.328 10.328 0 0 1-3.165-.474"
                />
              </svg>
            </button>
            <template #fallback>
              <div class="h-[4vh] flex items-center justify-center text-center">
                <el-button loading round></el-button>
              </div>
            </template>
          </ClientOnly>

          <div class="flex flex-col justify-center">
            <div
              class="mx-auto w-16 h-16 relative rounded-full overflow-hidden"
            >
              <img
                class="object-cover object-center h-20"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Woman looking front"
              />
            </div>

            <div class="flex justify-center -mt-6 ml-16 z-10 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
                />
              </svg>
            </div>
          </div>
          <ClientOnly>
            <button class="hover:bg-gray-300 hover:rounded-full p-1 mr-1">
              <svg
                class=""
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M200 224h-49.46A266.56 266.56 0 0 0 174 200.25c27.45-31.57 42-64.85 42-96.25a88 88 0 0 0-176 0c0 31.4 14.51 64.68 42 96.25A266.56 266.56 0 0 0 105.46 224H56a8 8 0 0 0 0 16h144a8 8 0 0 0 0-16M56 104a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118c-16.53-13-72-60.77-72-118m112 0a40 40 0 1 0-40 40a40 40 0 0 0 40-40m-64 0a24 24 0 1 1 24 24a24 24 0 0 1-24-24"
                />
              </svg>
              <div
                class="bg-gray-200 bg-opacity-50 absolute h-12 mt-4 ml-3 p-2 z-40 animate-pulse rounded"
              ></div>
            </button>
            <template #fallback>
              <div class="h-[4vh] flex items-center justify-center text-center">
                <el-button loading round></el-button>
              </div>
            </template>
          </ClientOnly>
        </div>
      </div>

      <div class="h-[14vh]"></div>

      <!-- Start of posts -->
      <el-scrollbar height="100vh">
        <div class="grid grid-cols-1 gap-1 mb-12">
          <div v-for="(item, index) in data" :key="index">
            <div class="group relative overflow-hidden">
              <!-- <div
                class="bg-red-800 group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 left-0 absolute"
              ></div> -->

              <div class="relative overflow-hidden glow-on-hover hover:p-[2px]">
                <ClientOnly>
                  <!-- Profile info -->
                  <div class="absolute bottom-0 left-0 z-10 p-2 text-white">
                    <div class="flex items-center">
                      <div
                        class="w-12 h-12 relative rounded-full overflow-hidden"
                      >
                        <img
                          class="object-cover object-center h-12"
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                          alt="Woman looking front"
                        />
                      </div>

                      <div class="mx-2 font-semibold">Serena Hotel</div>

                      <div>
                        <svg
                          class="text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M10.95 12.7L9.5 11.275Q9.225 11 8.813 11t-.713.3q-.275.275-.275.7t.275.7l2.15 2.15q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.287-.7t-.287-.7q-.3-.3-.712-.312t-.713.287zm-2.8 9.05L6.7 19.3l-2.75-.6q-.375-.075-.6-.387t-.175-.688L3.45 14.8l-1.875-2.15q-.25-.275-.25-.65t.25-.65L3.45 9.2l-.275-2.825q-.05-.375.175-.688t.6-.387l2.75-.6l1.45-2.45q.2-.325.55-.438t.7.038l2.6 1.1l2.6-1.1q.35-.15.7-.038t.55.438L17.3 4.7l2.75.6q.375.075.6.388t.175.687L20.55 9.2l1.875 2.15q.25.275.25.65t-.25.65L20.55 14.8l.275 2.825q.05.375-.175.688t-.6.387l-2.75.6l-1.45 2.45q-.2.325-.55.438t-.7-.038l-2.6-1.1l-2.6 1.1q-.35.15-.7.038t-.55-.438"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <!-- End of Profile info -->

                  <!-- Image -->
                  <!-- height="50vh" -->
                  <v-img
                    class="object-cover object-top w-full bg-grey-lighten-2"
                    :src="item.image"
                    :lazy-src="item.image"
                    cover
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <!-- <div
                          class="h-[4vh] flex items-center justify-center text-center"
                        >
                          <el-button loading round></el-button>
                        </div> -->
                      </v-row>
                    </template>
                  </v-img>

                  <!-- Image with gradient background -->
                  <div
                    @dblclick="animateIcon(index, true)"
                    class="absolute top-0 left-0 w-full h-full"
                  >
                    <div class="h-[100%]">
                      <div
                        class="relative relative top-[40%] left-[48%] h-[100%]"
                      >
                        <ClientOnly>
                          <IconsHeartFilled
                            class="text-red-600 hover:cursor-pointer hidden"
                            :id="'large_icon_' + index"
                            :width="'30'"
                            :height="'30'"
                            v-if="!item.liked"
                          />

                          <IconsHeartEmpty
                            class="hover:cursor-pointer text-gray-900/70 hidden"
                            :id="'large_icon_' + index"
                            :width="'30'"
                            :height="'30'"
                            v-else
                          />

                          <template #fallback>
                            <div
                              class="h-[4vh] flex items-center justify-center text-center my-2"
                            >
                              <el-button loading round></el-button>
                            </div>
                          </template>
                        </ClientOnly>
                      </div>
                    </div>

                    <div
                      :id="'red_shade_' + index"
                      :class="{
                        'left-[100%]': !item.liked,
                        // 'left-0': !item.liked,
                      }"
                      class="absolute bottom-0 w-full h-1/4 bg-gradient-to-b from-transparent to-red-700/90"
                    ></div>

                    <!-- <div
                      :id="'dark_shade_' + index"
                      :class="{
                        'left-[100%]': item.liked,
                        // 'left-0': !item.liked,
                      }"
                      class="absolute bottom-0 w-full h-1/4 bg-gradient-to-b from-transparent to-gray-700/90"
                    ></div> -->
                  </div>
                  <!-- End of Image with gradient background -->

                  <template #fallback>
                    <div
                      class="animate-pulse h-96 bg-gray-300 rounded col-span-2"
                    ></div>
                  </template>
                </ClientOnly>
              </div>

              <div>
                <div class="w-full">
                  <div class="flex justify-between mx-1 -my-1">
                    <ClientOnly>
                      <div @click="animateIcon(index)" class="flex">
                        <IconsHeartEmpty
                          v-if="!item.liked"
                          class="hover:cursor-pointer"
                          :id="'icon_' + index"
                          :height="'33'"
                          :width="'33'"
                        />

                        <IconsHeartFilled
                          v-else
                          class="text-red-600 hover:cursor-pointer"
                          :id="'icon_' + index"
                          :height="'33'"
                          :width="'33'"
                        />

                        <div class="text-xs relative left-1">
                          <span class="font-bold"> 256 </span>
                        </div>
                      </div>

                      <template #fallback>
                        <div
                          class="h-[4vh] flex items-center justify-center text-center my-2"
                        >
                          <el-button loading round></el-button>
                        </div>
                      </template>
                    </ClientOnly>

                    <ClientOnly>
                      <div @click="animateFavouriteIcon(index)" class="flex">
                        <IconsStarFilled
                          class="text-yellow-600 hover:cursor-pointer"
                          :id="'icon_favourite_' + index"
                          v-if="item.favorite"
                          :height="'32'"
                          :width="'32'"
                        />
                        <IconsStarEmpty
                          v-else
                          class="hover:cursor-pointer"
                          :id="'icon_favourite_' + index"
                          :height="'32'"
                          :width="'32'"
                        />

                        <div class="text-xs relative left-1">
                          <span class="font-bold"> 256 </span>
                        </div>
                      </div>

                      <template #fallback>
                        <div
                          class="h-[4vh] flex items-center justify-center text-center my-2"
                        >
                          <el-button loading round></el-button>
                        </div>
                      </template>
                    </ClientOnly>

                    <ClientOnly>
                      <div class="flex mt-[6px]">
                        <IconsChatEmpty
                          :height="'28'"
                          :width="'28'"
                          class="mt-[2px]"
                        />

                        <div class="text-xs relative left-1 mt-2">
                          <span class="font-bold"> 256 </span>
                        </div>
                      </div>
                      <template #fallback>
                        <div
                          class="h-[4vh] flex items-center justify-center text-center my-2"
                        >
                          <el-button loading round></el-button>
                        </div>
                      </template>
                    </ClientOnly>

                    <ClientOnly>
                      <svg
                        class="mr-1 mt-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m5.812 11l2.178 2.168a1.1 1.1 0 0 0 1.05.3a1.119 1.119 0 0 0 .809-.74l3.576-10.72A1.118 1.118 0 0 0 11.987.57L1.267 4.147a1.119 1.119 0 0 0-.74.859a1.099 1.099 0 0 0 .3 1l2.737 2.737l-.09 3.466zM13.106.79L3.564 8.742"
                        />
                      </svg>

                      <template #fallback>
                        <div
                          class="h-[4vh] flex items-center justify-center text-center my-2"
                        >
                          <el-button loading round></el-button>
                        </div>
                      </template>
                    </ClientOnly>

                    <!-- <svg
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
                      </svg> -->
                  </div>

                  <div
                    class="flex px-1 border-2 border-t border-b pb-1 p-1"
                    :class="isDark ? 'border-gray-700' : 'border-gray-200'"
                  >
                    <ClientOnly>
                      <div class="text-justify">
                        <span class="font-semibold mr-1">Post Detail</span>
                        <span> {{ item.postDetails }} </span>
                      </div>
                      <template #fallback>
                        <div
                          class="h-[1vh] mb-1 flex items-center justify-center text-center my-1 mr-1"
                        >
                          <div
                            class="animate-pulse w-[35vh] h-4 -ml-1 bg-gray-300 rounded col-span-2"
                          ></div>
                        </div>
                      </template>
                    </ClientOnly>
                  </div>

                  <div class="bg-gray-200 w-full h-[2px] my-1 mx-1"></div>

                  <div
                    class="rounded-lg py-1 px-1 mb-1 border-2 border-t border-b"
                  >
                    <div class="flex items-center pb-1">
                      <ClientOnly>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 19.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4Q9.475 4 7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35m0 1.975q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762q-.838-1.338-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575Q17.45 16.475 16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 12q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12"
                          />
                        </svg>
                        <span class="ml-2"
                          >Posta - Dar es Salaam, Tanzania</span
                        >

                        <template #fallback>
                          <div
                            class="h-[1vh] flex items-center justify-center text-center my-1 mr-1"
                          >
                            <div
                              class="animate-pulse w-[35vh] h-4 bg-gray-300 rounded col-span-2"
                            ></div>
                          </div>
                        </template>
                      </ClientOnly>
                    </div>

                    <div class="flex justify-between mt-1">
                      <ClientOnly>
                        <div class="flex">
                          <svg
                            class="text-yellow-600"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
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
                            width="20"
                            height="20"
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
                            width="20"
                            height="20"
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
                            width="20"
                            height="20"
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
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M9.6 16.65L12 14.8l2.4 1.85l-.9-3.05l2.25-1.6h-2.8L12 8.9l-.95 3.1h-2.8l2.25 1.6zM5.825 22l2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4l2.325 7.6L12 17.3zM12 12.775"
                            />
                          </svg>

                          <span class="ml-2 font-medium">4.8</span>
                        </div>
                        <template #fallback>
                          <div
                            class="h-[1vh] flex items-center justify-center text-center my-1 mr-1"
                          >
                            <div
                              class="animate-pulse w-[20vh] h-4 my-1 -ml-1 bg-gray-300 rounded col-span-2"
                            ></div>
                          </div>
                        </template>
                      </ClientOnly>

                      <ClientOnly>
                        <span class="font-medium"> Tsh 265,200 </span>
                        <template #fallback>
                          <div
                            class="h-[1vh] flex items-center justify-center text-center my-1 mr-1"
                          >
                            <div
                              class="animate-pulse w-[20vh] h-4 my-1 -ml-1 bg-gray-300 rounded col-span-2"
                            ></div>
                          </div>
                        </template>
                      </ClientOnly>
                    </div>
                  </div>
                  <div class="bg-gray-200 w-full h-[2px] my-1 mx-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>

      <Navigations />

      <!-- <div class="p-4 border-t mx-8 mt-2">
        <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
    </div> -->
    </div>
  </div>

  <!-- End of sample 02 -->
</template>

<script lang="ts" setup>
// const route = useRoute();
// console.log(route.path === '/')
const isDark = useDark();
isDark.value = false;
// import { ref, watch, onMounted } from "vue";
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const data = ref([]);

// Generate data
// for (let i = 0; i < 50; i++) {
//   const liked = i % 2 === 0;
//   const favorite = i % 3 === 0;
//   data.value.push({ image: "/food.jpg", liked, favorite });
// }

// const data = ref([]);

// Generate data
for (let i = 0; i < 50; i++) {
  const liked = i % 2 === 0;
  const favorite = i % 3 === 0;
  const postDetails = generatePostDetails(); // Function to generate post details
  data.value.push({ image: "/food.jpg", liked, favorite, postDetails });
}

function generatePostDetails() {
  const sentences = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ];

  let postDetails = "";
  for (let i = 0; i < 2; i++) {
    // Adjust the number of sentences as needed
    postDetails +=
      sentences[Math.floor(Math.random() * sentences.length)] + " ";
  }
  return postDetails;
}

// const animateIcon = (index) => {console.log('hello')
//   gsap.to(`#icon_${index}`, { duration: 1, rotate: 360 });
// }

function animateFavouriteIcon(index) {
  const t4 = gsap.timeline();
  // const t5 = gsap.timeline();
  // const t6 = gsap.timeline();

  // t4.fromTo(
  //   `#icon_favourite_${index}`,
  //   {
  //     scale: 1.9,
  //     autoAlpha: 0,
  //     display: "block",
  //     // opacity: largeIcon,
  //     // ease: Linear.easeNone,
  //     ease: "elastic.out(7, 9)",
  //   },
  //   {
  //     duration: 0.3,
  //     scale: 1.1,
  //     autoAlpha: 1,
  //     opacity: 0,
  //     display: "block",
  //     ease: "elastic.out(2, .9)",
  //     // ease: "power2.inOut",
  //     // ease: "elastic.out(2, .7)",
  //     onComplete: () => {},
  //   }
  // );

  // setTimeout(() => {
  data.value[index].favorite = !data.value[index].favorite;
  // }, 300);
}
function animateIcon(index, largeIcon = false) {
  // console.log(index, largeIcon);

  const t1 = gsap.timeline();
  const t2 = gsap.timeline();
  const t3 = gsap.timeline();
  // const t4 = gsap.timeline();
  // const t5 = gsap.timeline();
  // const t6 = gsap.timeline();

  // Determine the ID based on the icon size
  const iconId = largeIcon ? `large_icon_${index}` : `icon_${index}`;
  const iconScale = largeIcon ? 0.05 : 1.9;
  const iconScaleTo = largeIcon ? 3.3 : 1.1;
  // const iconOpacity = largeIcon ? 0 : 1;
  // const iconOpacityTo = largeIcon ? 1 : 1;
  const iconDisplay = largeIcon ? "block" : "block";
  const iconDisplayTo = largeIcon ? "none" : "block";
  const iconDuration = largeIcon ? 1.1 : 0.3;

  t1.fromTo(
    `#${iconId}`,
    {
      scale: iconScale,
      autoAlpha: 0,
      // opacity: largeIcon,
      display: iconDisplay,
      // ease: Linear.easeNone,
      ease: "elastic.out(7, 9)",
    },
    {
      duration: iconDuration,
      scale: iconScaleTo,
      autoAlpha: 1,
      opacity: 0,
      // display:"none",
      display: iconDisplayTo,
      ease: "elastic.out(2, .9)",
      // ease: "power2.inOut",
      // ease: "elastic.out(2, .7)",

      onComplete: () => {
        // Check if data.value[index].liked is true
        // if (data.value[index].liked) {
        //   // Execute t2.fromTo if data.value[index].liked is true

        //   t2.fromTo(
        //     `#red_shade_${index}`,
        //     {
        //       left: 0,
        //     },
        //     {
        //       duration: 1.0,
        //       left: "100%",
        //       ease: "elastic.out(4, 3)",
        //       onComplete: () => {
        //         // data.value[index].liked = !data.value[index].liked;
        //       },
        //     }
        //   );
        // } else {
        //   t2.fromTo(
        //     `#red_shade_${index}`,
        //     {
        //       left: "100%",
        //     },
        //     {
        //       duration: 1.0,
        //       left: 0,
        //       ease: "elastic.out(4, 3)",
        //       onComplete: () => {
        //         // data.value[index].liked = !data.value[index].liked;
        //       },
        //     }
        //   );
        // }

        if (!data.value[index].liked) {
          // Execute t2.fromTo if data.value[index].liked is true
          t3.fromTo(
            `#dark_shade_${index}`,
            {
              left: 0,
            },
            {
              duration: 1.0,
              opacity: 0,
              left: "100%",
              ease: "elastic.out(4, 3)",
              onComplete: () => {
                // data.value[index].liked = !data.value[index].liked;
              },
            }
          );

          t2.fromTo(
            `#red_shade_${index}`,
            {
              left: "100%",
            },
            {
              duration: 1.0,
              left: 0,
              opacity: 1,
              ease: "elastic.out(4, 3)",
              onComplete: () => {
                // data.value[index].liked = !data.value[index].liked;
              },
            }
          );
        } else {
          t2.fromTo(
            `#red_shade_${index}`,
            {
              left: 0,
            },
            {
              duration: 1.0,
              left: "100%",
              opacity: 0,
              ease: "elastic.out(4, 3)",
              onComplete: () => {
                // data.value[index].liked = !data.value[index].liked;
              },
            }
          );
          t3.fromTo(
            `#dark_shade_${index}`,
            {
              left: "100%",
            },
            {
              duration: 1.0,
              opacity: 1,
              left: 0,
              ease: "elastic.out(4, 3)",
              onComplete: () => {
                // data.value[index].liked = !data.value[index].liked;
              },
            }
          );
        }
      },
    }
  );
  // console.log(largeIcon, data.value[index].liked);
  setTimeout(() => {
    data.value[index].liked = !data.value[index].liked;
  }, 500);
}

// const { sayHello } = useUtils();
// sayHello("RickGath fredro");
</script>
<!-- animate-3 -->
