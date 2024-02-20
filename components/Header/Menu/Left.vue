<!-- <script lang="ts" setup>
const errorHandler = () => true;
</script>

<template>
    <ClientOnly>
    <el-avatar :size="40" src="ozula.jpg" class="mx-2" @error="errorHandler">
      <img src="ozula.jpg" />
    </el-avatar>

    <template #fallback>
          <div class="flex items-center justify-center mx-1 my-1 mr-1">
            <el-button loading></el-button>
          </div>
        </template>
    </ClientOnly>
</template> -->

<template>
  
    <div style="display: flex; align-items: center" class="mx-2">
      <!-- <el-popover placement="right" :width="400" trigger="click">
      <template #reference>
        <el-button style="margin-right: 16px">Click to activate</el-button>
      </template>
      <el-table :data="gridData">
        <el-table-column width="150" property="date" label="date" />
        <el-table-column width="100" property="name" label="name" />
        <el-table-column width="300" property="address" label="address" />
      </el-table>
    </el-popover> -->

      <el-popover
        :width="300"
        popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 10px;"
      >
        <template #reference>
          <el-avatar src="ozula.jpg" />
        </template>
        <template #default>
          <div
            class="demo-rich-conent"
            style="display: flex; gap: 16px; flex-direction: column"
          >
            <el-avatar :size="60" src="ozula.jpg" style="margin-bottom: 8px" />
            <div>
              <p
                class="demo-rich-content__name"
                style="margin: 0; font-weight: 500"
              >
                Hello world
              </p>
              <p
                class="demo-rich-content__mention"
                style="margin: 0; font-size: 14px; color: var(--el-color-info)"
              >
                @hello world
              </p>
            </div>

            <p class="demo-rich-content__desc" style="margin: 0">Hello world</p>
          </div>
        </template>
      </el-popover>
    </div>
    
</template>

<script lang="ts" setup>
const gridData = [
  {
    date: "2016-05-02",
    name: "Jack",
    address: "New York City",
  },
  {
    date: "2016-05-04",
    name: "Jack",
    address: "New York City",
  },
  {
    date: "2016-05-01",
    name: "Jack",
    address: "New York City",
  },
  {
    date: "2016-05-03",
    name: "Jack",
    address: "New York City",
  },
];
// const isDark = useDark();

// const themeClass = computed(() => {
//   return {
//     'bg-[#6b7280]': isDark.value,
//     // 'bg-black': !isDark.value,
//   };
// });
</script>
