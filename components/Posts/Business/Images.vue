<template>
  <div class="">
    <div>
      <el-scrollbar height="70vh">
        <div class="grid grid-cols-3">
          <div v-for="(item, index) in 90" :key="index">
            <div class="group relative overflow-hidden">
              <div
                class="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute z-10"
              ></div>
              <img
                src="https://picsum.photos/300/300"
                class="mr-4 w-auto"
                alt=""
              />
              <!-- <div
                  class="absolute z-10 bottom-0 left-0 w-full h-7 bg-gray-800 bg-opacity-50"
                > -->
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

              <!-- <div class="flex justify-between text-white my-1 mx-1">
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
                  </div> -->
              <!-- </div> -->
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>
