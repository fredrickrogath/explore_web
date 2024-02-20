<template>
    <div>
      <section id="table" class="pt-1 border border-gray-200 rounded-xl mx-1">
        <div class="w-full xl:mb-0 mx-auto">
          <div class="relative flex flex-col min-w-0 break-words w-full rounded">
            <ClientOnly>
              <div class="rounded-t mb-0 border-0">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full px-1 max-w-full flex-grow flex-1">
                    <h3 class="font-semibold text-base">Top selling stock</h3>
                  </div>
                  <div
                    class="relative w-full px-1 max-w-full flex-grow flex-1 text-right"
                  >
                    <button
                      class="hover:bg-gray-300 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      
                      @click="topSelling = true"
                    >
                      See all
                    </button>
                  </div>
                </div>
              </div>
  
              <div class="block overflow-x-hidden my-1">
                <table class="bg-transparent w-full">
                  <thead class="text-xs">
                    <tr id="table"
                      class="border border-solid border-blueGray-100 border-r-0 border-l-0"
                    >
                      <th
                        class="align-middle py-1 pl-1 uppercase whitespace-nowrap font-semibold text-left"
                      >
                        Name
                      </th>
                      <th
                        class="align-middle py-1 uppercase whitespace-nowrap font-semibold text-left"
                      >
                        Sold Quantity
                      </th>
                      <th
                        class="align-middle py-1 uppercase whitespace-nowrap font-semibold text-left"
                      >
                        Remaining Quantity
                      </th>
                      <th
                        class="align-middle py-1 uppercase whitespace-nowrap font-semibold text-left"
                      >
                        Price
                      </th>
                    </tr>
                  </thead>
  
                  <tbody>
                    <tr id="table" class="border border-solid border-blueGray-100 border-r-0 border-l-0">
                      <td class="px-1 align-middle whitespace-nowrap text-left">
                        Nails
                      </td>
                      <td class="px-10 align-middle whitespace-nowrap">30 Kg</td>
                      <td class="px-10 align-center whitespace-nowrap">12 Kg</td>
                      <td class="px-2 align-middle whitespace-nowrap italic">
                        <i class="fas fa-arrow-up text-emerald-500"></i>
                        Tsh 3,500
                      </td>
                    </tr>
                    <tr id="table" class="border border-solid border-blueGray-100 border-r-0 border-l-0">
                      <td class="px-1 align-middle whitespace-nowrap text-left">
                        Nails
                      </td>
                      <td class="px-10 align-middle whitespace-nowrap">30 Kg</td>
                      <td class="px-10 align-center whitespace-nowrap">12 Kg</td>
                      <td class="px-2 align-middle whitespace-nowrap italic">
                        <i class="fas fa-arrow-up text-emerald-500"></i>
                        Tsh 3,500
                      </td>
                    </tr>
                    <tr id="table" class="border border-solid border-blueGray-100 border-r-0 border-l-0">
                      <td
                        class="border-t-0 px-1 align-middle border-l-0 border-r-0 whitespace-nowrap text-left"
                      >
                        Colors
                      </td>
                      <td
                        class="border-t-0 px-10 align-middle border-l-0 border-r-0 whitespace-nowrap"
                      >
                        21 Litres
                      </td>
                      <td
                        class="border-t-0 px-10 align-middle border-l-0 border-r-0 whitespace-nowrap"
                      >
                        150 Litres
                      </td>
                      <td
                        class="border-t-0 px-2 align-middle border-l-0 border-r-0 whitespace-nowrap italic"
                      >
                        <i class="fas fa-arrow-down text-orange-500"></i>
                        Tsh 72,000
                      </td>
                    </tr>
                    <tr id="table" class="border border-solid border-blueGray-100 border-r-0 border-l-0">
                      <td
                        class="border-t-0 px-1 align-middle border-l-0 border-r-0 whitespace-nowrap text-left"
                      >
                        Colors
                      </td>
                      <td
                        class="border-t-0 px-10 align-middle border-l-0 border-r-0 whitespace-nowrap"
                      >
                        21 Litres
                      </td>
                      <td
                        class="border-t-0 px-10 align-middle border-l-0 border-r-0 whitespace-nowrap"
                      >
                        150 Litres
                      </td>
                      <td
                        class="border-t-0 px-2 align-middle border-l-0 border-r-0 whitespace-nowrap italic"
                      >
                        <i class="fas fa-arrow-down text-orange-500"></i>
                        Tsh 72,000
                      </td>
                    </tr>
                    <tr id="table" class="border border-solid border-blueGray-100 border-r-0 border-l-0">
                      <td
                        class="border-t-0 px-1 align-middle border-l-0 border-r-0 whitespace-nowrap text-left text-blueGray-700"
                      >
                        Cements
                      </td>
                      <td
                        class="border-t-0 px-10 align-middle border-l-0 border-r-0 whitespace-nowrap"
                      >
                        41 Packages
                      </td>
                      <td
                        class="border-t-0 px-10 align-middle border-l-0 border-r-0 whitespace-nowrap"
                      >
                        170 Packages
                      </td>
                      <td
                        class="border-t-0 px-2 align-middle border-l-0 border-r-0 whitespace-nowrap italic"
                      >
                        <i class="fas fa-arrow-down text-orange-500"></i>
                        Tsh 150,000
                      </td>
                    </tr>
                    <tr id="table" class="border border-solid border-blueGray-100 border-r-0 border-l-0">
                      <td
                        class="border-t-0 px-1 align-middle border-l-0 border-r-0 whitespace-nowrap text-left text-blueGray-700"
                      >
                        Cements
                      </td>
                      <td
                        class="border-t-0 px-10 align-middle border-l-0 border-r-0 whitespace-nowrap"
                      >
                        41 Packages
                      </td>
                      <td
                        class="border-t-0 px-10 align-middle border-l-0 border-r-0 whitespace-nowrap"
                      >
                        170 Packages
                      </td>
                      <td
                        class="border-t-0 px-2 align-middle border-l-0 border-r-0 whitespace-nowrap italic"
                      >
                        <i class="fas fa-arrow-down text-orange-500"></i>
                        Tsh 150,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <template #fallback>
                <div class="h-[35vh] flex items-center justify-center ml-2 mr-1">
                  <el-button loading></el-button>
                </div>
              </template>
            </ClientOnly>
          </div>
        </div>
      </section>


    </div>
  </template>
  
  <script lang="ts" setup>
  // const isDark = useDark();
  // const themeClass = computed(() => {
  //   return {
  //     'border-[#6b7280]': isDark.value,
  //     // 'bg-black': !isDark.value,
  //   };
  // });

  </script>