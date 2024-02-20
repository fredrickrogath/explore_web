<template>
  <!-- Second sample 02 -->

  <div>
    <div
      class="w-screen text-sm max-w-2xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto"
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
      <div class="main-tool-bar">

        <div class="flex justify-between mx-1 pt-1">
          <ClientOnly>
            <button class="hover:bg-gray-300 hover:rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
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
            <template #fallback>
              <div class="h-[4vh] flex items-center justify-center text-center">
                <el-button loading round></el-button>
              </div>
            </template>
          </ClientOnly>
          <span class="italic font-semibold text-lg"> Explore Larosa </span>
  
          <ClientOnly>
            <button class="hover:bg-gray-300 hover:rounded-full p-1">
              <!-- <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M8 16c3.314 0 6-2 6-5.5c0-1.5-.5-4-2.5-6c.25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6c-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75c0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5c-.179 1-.25 2 1 3c.625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"
                  />
                </svg> -->
  
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
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
                width="30"
                height="30"
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
            <div class="mx-auto w-16 h-16 relative rounded-full overflow-hidden">
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
                width="28"
                height="28"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M200 224h-49.46A266.56 266.56 0 0 0 174 200.25c27.45-31.57 42-64.85 42-96.25a88 88 0 0 0-176 0c0 31.4 14.51 64.68 42 96.25A266.56 266.56 0 0 0 105.46 224H56a8 8 0 0 0 0 16h144a8 8 0 0 0 0-16M56 104a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118c-16.53-13-72-60.77-72-118m112 0a40 40 0 1 0-40 40a40 40 0 0 0 40-40m-64 0a24 24 0 1 1 24 24a24 24 0 0 1-24-24"
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
      </div>


      <!-- <div class="flex justify-center flex-wrap bg-red-200">
          <el-tabs
            v-model="activeName"
            class="demo-tabs"
            @tab-click="handleClick"
          >
            <el-tab-pane label="Mix" name="first">Mix</el-tab-pane>
            <el-tab-pane label="Mix 01" name="second">Mix 01</el-tab-pane>
            <el-tab-pane label="Mix 02" name="third">Role</el-tab-pane>
            <el-tab-pane label="Mix 03" name="fourth">Task</el-tab-pane>
          </el-tabs>
        </div> -->

      <!-- Start of posts -->
      <el-scrollbar height="100vh">
        <div class="grid grid-cols-1 gap-1">
          <div v-for="(item, index) in 10" :key="index" class="scroll-body">
            <div class="group relative overflow-hidden">
              <div
                class="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute z-10"
              ></div>

              <!-- <div class="overflow-hidden">
                  <img
                    class="object-cover object-top w-full"
                    src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    alt="Mountain"
                  />

                  <div class="flex items-center">
                    <div
                      class="w-12 h-12 relative border-4 border-white rounded-full overflow-hidden"
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
                        />
                      </svg>
                    </div>
                  </div>
                </div> -->

              <div class="relative overflow-hidden glow-on-hover hover:p-[2px]">
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
                <img
                  class="object-cover object-top w-full"
                  src="/food.jpg"
                  alt="Mountain"
                />

                <!-- Image with gradient background -->
                <div class="absolute top-0 left-0 w-full h-full">
                  <div
                    class="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-b from-transparent to-red-700"
                  ></div>
                </div>
                <!-- End of Image with gradient background -->
              </div>

              <div>
                <div class="w-full">
                  <div class="flex justify-between my-1 mx-1">
                    <!-- <svg
                        class="hover:cursor-pointer gsap-like-red"
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
                      </svg> -->

                    <ClientOnly>
                      <svg
                        class="text-red-600 gsap-like-empty"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="4"
                          d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"
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

                    <ClientOnly>
                      <!-- <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"
                        />
                      </svg> -->
                      <svg class="-mt-2" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><path fill="currentColor" d="m8.85 17.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm-1.525 2.098l1.24-5.313l-4.123-3.572l5.431-.47L12 5.557l2.127 5.01l5.43.47l-4.122 3.572l1.24 5.313L12 17.102zM12 13.25"/></svg>
                      <template #fallback>
                        <div
                          class="h-[4vh] flex items-center justify-center text-center my-2"
                        >
                          <el-button loading round></el-button>
                        </div>
                      </template>
                    </ClientOnly>

                    <ClientOnly>
                      <div class="flex">
                        <svg
                          class="hover:cursor-pointer"
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
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

                        <div class="text-xs">
                          <span class="text-red-600 font-bold"> 256 </span>
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

                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.812 11l2.178 2.168a1.1 1.1 0 0 0 1.05.3a1.119 1.119 0 0 0 .809-.74l3.576-10.72A1.118 1.118 0 0 0 11.987.57L1.267 4.147a1.119 1.119 0 0 0-.74.859a1.099 1.099 0 0 0 .3 1l2.737 2.737l-.09 3.466zM13.106.79L3.564 8.742"/></svg>

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
                    class="flex mx-1 border-t my-1"
                    :class="isDark ? 'border-gray-700' : 'border-gray-200'"
                  >
                    <ClientOnly>
                      <div class="font-semibold mr-1">Post Details</div>
                      <div>$12 per day only !</div>
                      <template #fallback>
                        <div
                          class="h-[1vh] flex items-center justify-center text-center my-1 mr-1"
                        >
                          <div
                            class="animate-pulse w-[35vh] h-4 mt-2 -ml-1 bg-gray-300 rounded col-span-2"
                          ></div>
                        </div>
                      </template>
                    </ClientOnly>
                  </div>

                  <div
                    class="rounded-lg py-1 mb-1 border-b"
                    :class="isDark ? 'border-gray-700' : 'border-gray-200'"
                  >
                    <div
                      class="flex items-center border-b pb-1"
                      :class="isDark ? 'border-gray-700' : 'border-gray-200'"
                    >
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
  
                          <span class="ml-2">4.8</span>
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
                      <span> Tsh 265,200 </span>
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
                </div>
              </div>

              <!-- <img
                  src="https://picsum.photos/300/300"
                  class="transition-all group-hover:scale-125 duration-700 mr-4 h-60 w-auto"
                  alt=""
                /> -->
              <!-- <div
                  class="absolute z-10 bottom-0 left-0 w-full h-7 bg-gray-800 bg-opacity-50"
                >

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
                </div> -->
            </div>
          </div>
        </div>
      </el-scrollbar>

      <div
        class="flex justify-between py-1 bg-white bg-opacity-25 fixed bottom-0 z-20 w-full sm:hidden"
      >
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
</template>

<script lang="ts" setup>
// const route = useRoute();
// console.log(route.path === '/')
const isDark = useDark();
isDark.value = false
// import { ref, watch, onMounted } from "vue";
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

onMounted(() => {
  const showAnim = gsap.from('.main-tool-bar', {
    yPercent: -100,
    paused: true,
    duration: 0.2
  });

  ScrollTrigger.create({
    // trigger: ".scroll-body",
    start: "top top",
    end: "max",
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });
});



// const { sayHello } = useUtils();
// sayHello("RickGath fredro");

// onMounted(() => {
//   const t1 = gsap.timeline();
//   const t2 = gsap.timeline();
//   const t3 = gsap.timeline();
//   const t4 = gsap.timeline();
//   const t5 = gsap.timeline();
//   t1.fromTo(
//     "#animate-1",
//     {
//       marginTop: "-100%",
//     },
//     {
//       duration: 0.5,
//       marginTop: "0px",
//       ease: "power2.inOut",
//     }
//   );
//   t1.fromTo(
//     "#animate-2",
//     {
//       marginTop: "-100%",
//     },
//     {
//       duration: 0.6,
//       marginTop: "0px",
//       ease: "power2.inOut",
//     }
//   );
//   t1.fromTo(
//     "#animate-3",
//     {
//       marginTop: "-100%",
//     },
//     {
//       duration: 0.6,
//       marginTop: "0px",
//       ease: "elastic.inOut",
//     }
//   );
// });
</script>
<!-- animate-3 -->
