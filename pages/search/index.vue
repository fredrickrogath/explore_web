<template>
  <div>
    <div
      class="w-screen text-sm max-w-2xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto"
    >
      <SearchBar/>

      <div class="flex justify-between mx-1 my-2 text-sm">
        <span class="bg-gray-600 shadow-md text-white rounded-xl py-[3px] px-4 hover:cursor hover:shadow-xl">For You</span>
        <span class="text-black shadow-md rounded-xl py-[3px] px-4 hover:cursor hover:shadow-xl">Accounts</span>
        <span class="text-black shadow-md rounded-xl py-[3px] px-4 hover:cursor hover:shadow-xl">Services</span>
        <span class="text-black shadow-md rounded-xl py-[3px] px-4 hover:cursor hover:shadow-xl"
          >Tags</span
        >
      </div>

      <div class="grid grid-cols-2 gap-1 px-0 mb-10">
        <div v-for="(item, index) in 20" :key="index">
          <div class="group relative overflow-hidden rounded">
            <div
              class="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute z-10"
            ></div>
            <!-- Image -->
            <v-img
              class="object-cover bg-grey-lighten-2"
              src="/food.jpg"
              lazy-src="
                  /food.jpg
                "
              cover
              height="30vh"
              id="animate-1"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                </v-row>
              </template>
            </v-img>
            <div
              class="absolute z-10 bottom-0 left-0 w-full h-7 bg-slate-900 bg-opacity-30"
            >
              <div class="z-20 absolute -top-10 w-full flex justify-start ml-3">
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

              <div class="flex justify-between font-bold my-1 mx-1 text-white">
                Mimi Mars
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navigations />
    </div>
  </div>
</template>


