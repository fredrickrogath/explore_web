<template>
  <div>
    <!-- First sample 01 -->
    <div>
      <div
        class="w-screen text-sm max-w-2xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto"
      >
        <div class="relative overflow-hidden">
          <!-- Profile info -->
          <div class="absolute bottom-0 left-0 z-10 p-1 text-white">
            <div class="flex items-center">
              <div class="font-semibold text-lg">Angie Snack's Bar</div>

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
          <!-- Image -->
          <v-img
            class="object-cover bg-grey-lighten-2"
            :src="'/food.jpg'"
            :lazy-src="'/food.jpg'"
            cover
            height="30vh"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
              </v-row>
            </template>
          </v-img>

          <!-- Image with gradient background -->
          <div class="absolute top-0 left-0 w-full h-full">
            <div
              class="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-b from-transparent to-gray-800/70 bg-opacity-30"
            ></div>
          </div>
          <!-- End of Image with gradient background -->
        </div>

        <div class="flex justify-between">
          <div class="px-1">
            <p class="font-semibold">Verified Artist</p>
            <p>CEO @WasafiTV @WasafiFM</p>
            <p>I believe in God</p>
          </div>

          <div class="w-32 h-32 relative -mt-16 bg-blue-600 rounded-lg">
            <img
              class="object-cover object-center h-32 p-[3px] rounded-lg"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Woman looking front"
            />
          </div>
        </div>

        <div
          class="flex justify-between mx-2 mt-2 pb-3 border-t border-b"
          :class="isDark ? 'border-gray-700' : 'border-gray-200'"
        >
          <div class="flex flex-col items-center text-blue-600">
            <p>Powersize</p>
            <p class="font-semibold">1.02 M</p>
          </div>

          <div class="flex flex-col items-center">
            <p>String</p>
            <p class="font-semibold">250</p>
          </div>

          <div class="flex flex-col items-center">
            <p>Following</p>
            <p class="font-semibold">25</p>
          </div>

          <div class="flex flex-col items-center">
            <p>Followers</p>
            <p class="font-semibold">19.5 M</p>
          </div>
        </div>

        <div
          class="flex justify-evenly my-2 pb-2 border-b"
          :class="isDark ? 'border-gray-700' : 'border-gray-200'"
        >
          <div
            class="flex justify-between items-center bg-gradient-to-r from-blue-900 to-blue-400 text-white rounded px-3 py-1"
          >
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 256 256"
              >
                <g fill="currentColor">
                  <path
                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64Z"
                    opacity=".2"
                  ></path>
                  <path
                    d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56Z"
                  ></path>
                </g>
              </svg>
            </span>
            <span class="font-semibold"> Follow </span>
          </div>
          <div
            class="flex justify-between items-center element-with-gradient-border rounded px-3 py-1"
          >
            <span class="mr-2">
              <IconsChatEmpty :height="'20'" :width="'20'" />
            </span>
            <span class="font-semibold"> Text </span>
          </div>

          <div
            class="flex justify-between element-with-gradient-border rounded px-3 py-1"
          >
            <span class="mr-2 flex ">
              <svg
                        class="mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
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

              <span class="font-semibold"> Share </span>
            </span>
          </div>
        </div>

        <!-- @tab-click="handleClick" -->
        <ClientOnly>
          <div class="flex justify-center flex-wrap">
            <el-tabs
              v-model="activeName"
              class="demo-tabs"
              :stretch="true"
            >
              <el-tab-pane label="Mix" name="first">
                <template #label class="">
                  <i class="" :class="isDark ? 'text-white' : ''">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="4" />
                        <path d="m15 12l-5-3v6z" />
                      </g>
                    </svg>
                  </i>
                </template>
                <PostsBusinessVideos />
              </el-tab-pane>
              <el-tab-pane label="Mix 01" name="second">
                <template #label>
                  <i class="" :class="isDark ? 'text-white' : ''">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4.86 8.86l-3 3.87L9 13.14L6 17h12z"
                      />
                    </svg>
                  </i>
                </template>
                <PostsBusinessImages />
              </el-tab-pane>
              <el-tab-pane label="Mix 02" name="third">
                <template #label>
                  <i class="" :class="isDark ? 'text-white' : ''">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 256 256"
                    >
                      <g fill="currentColor">
                        <path
                          d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64Z"
                          opacity=".2"
                        ></path>
                        <path
                          d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56Z"
                        ></path>
                      </g>
                    </svg>
                  </i>
                </template>
                <PostsBusinessImages />
              </el-tab-pane>
            </el-tabs>
          </div>
          <template #fallback>
            <div class="">
              <div class="h-[70vh] flex items-center justify-center ml-2 mr-1">
                <el-button loading></el-button>
              </div>
            </div>
          </template>
        </ClientOnly>

        <Navigations />

        <!-- <div class="p-4 border-t mx-8 mt-2">
        <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
    </div> -->
      </div>
    </div>
    <!-- End of Sanmple 01 -->
  </div>
</template>

<script lang="ts" setup>
const isDark = useDark();
isDark.value = false;
const activeName = ref('first');
</script>


