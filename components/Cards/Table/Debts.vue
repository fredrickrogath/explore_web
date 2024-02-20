<template>
    <div>
      <section id="table" class="pt-1 border border-gray-200 rounded-xl mx-1">
        <div class="w-full xl:mb-0 mx-auto">
          <div class="relative flex flex-col min-w-0 break-words w-full rounded">
            <ClientOnly>
              <div class="rounded-t mb-0 border-0">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full px-1 max-w-full flex-grow flex-1">
                    <h3 class="font-semibold text-base">Debts</h3>
                  </div>
                  <div
                    class="relative w-full px-1 max-w-full flex-grow flex-1 text-right"
                  >
                    <button
                      class="hover:bg-gray-300 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
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
                        Avatar
                      </th>
                      <th
                        class="align-middle py-1 uppercase whitespace-nowrap font-semibold text-left"
                      >
                        Details
                      </th>
                    </tr>
                  </thead>
  
                  <tbody>
                      <tr id="table" class="border border-solid border-blueGray-100 border-r-0 border-l-0">
                        <td class="px-1 align-middle whitespace-nowrap text-left">
                          <el-avatar :size="35" src="ozula.jpg" style="margin-bottom: 8px" />
                        </td>
                        <td class="align-middle whitespace-nowrap">
                          <p>Coral Paint</p>
                          <p class="italic">10 Days, Amount : Tsh 150,000</p>
                        </td>
                      </tr>
                    <tr id="table" class="border border-solid border-blueGray-100 border-r-0 border-l-0">
                      <td class="px-1 align-middle whitespace-nowrap text-left">
                        <el-avatar :size="35" src="ozula.jpg" style="margin-bottom: 8px" />
                      </td>
                      <td class="align-middle whitespace-nowrap">
                        <p>Mangi Trans</p>
                        <p class="italic">3 Days, Amount : Tsh 4,500,000</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-1 align-middle whitespace-nowrap text-left">
                        <el-avatar :size="35" src="ozula.jpg" style="margin-bottom: 8px" />
                      </td>
                      <td class="align-middle whitespace-nowrap">
                        <p>Scania Tanzania</p>
                        <p class="italic">5 Days, Amount : Tsh 15,000,000</p>
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