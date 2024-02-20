<template>
  <!-- component -->
  <aside

id="sidebar"  class="flex flex-col h-full px-4 overflow-hidden"
  >
    <div class="flex flex-col justify-between flex-1">
      <nav class="-mx-3">
        <div class="mx-auto">
          <label class="text-xs px-auto uppercase"
            >home</label
          >

          <NuxtLink
            class="hover:bg-gray-200 flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg"
            to="/"
            ><el-tooltip content="Home" placement="right" effect="dark">
              <IconsHome />
            </el-tooltip>

            <span class="mx-2 text-sm font-medium absolute -left-36" id="word"
              >Home</span
            >
          </NuxtLink>
        </div>

        <div class="">
          <label class="text-xs uppercase"
            >content</label
          >

          <NuxtLink
            class="hover:bg-gray-200 flex items-center px-3 py-2 my-1 transition-colors duration-300 transform rounded-lg"
            to="/sales"
          >
            <el-tooltip content="Sales" placement="right" effect="dark">
              <IconsAnalytic />
            </el-tooltip>

            <span class="mx-2 text-sm fo  nt-medium absolute -left-36" id="word"
              >Sales</span
            >
          </NuxtLink>

          <NuxtLink
            class="hover:bg-gray-200 flex items-center px-3 py-2 my-1 transition-colors duration-300 transform rounded-lg"
            to="expenses"
          >
            <el-tooltip content="Expenses" placement="right" effect="dark">
              <IconsExpense />
            </el-tooltip>

            <span class="mx-2 text-sm font-medium absolute -left-36" id="word"
              >Expenses</span
            >
          </NuxtLink>

          <NuxtLink
            class="hover:bg-gray-200 flex items-center px-3 py-2 my-1 transition-colors duration-300 transform rounded-lg"
            to="/purchases"
          >
            <el-tooltip content="Purchases" placement="right" effect="dark">
              <IconsPurchase />
            </el-tooltip>

            <span class="mx-2 text-sm font-medium absolute -left-36" id="word"
              >Purchases</span
            >
          </NuxtLink>
        </div>

        <div class="">
          <label class="text-xs uppercase"
            >manage</label
          >

          <NuxtLink
            class="hover:bg-gray-200 flex items-center px-3 py-2 my-1 transition-colors duration-300 transform rounded-lg"
            to="/users"
          >
            <el-tooltip content="Users" placement="right" effect="dark">
              <IconsUser />
            </el-tooltip>

            <span class="mx-2 text-sm font-medium absolute -left-36" id="word"
              >Users</span
            >
          </NuxtLink>

          <NuxtLink
            class="hover:bg-gray-200 flex items-center px-3 py-2 my-1 transition-colors duration-300 transform rounded-lg"
            to="/documents"
          >
            <el-tooltip content="Documents" placement="right" effect="dark">
              <IconsDocument />
            </el-tooltip>

            <span class="mx-2 text-sm font-medium absolute -left-36" id="word"
              >Co documents</span
            >
          </NuxtLink>

          <NuxtLink
            class="hover:bg-gray-200 flex items-center px-3 py-2 my-1 transition-colors duration-300 transform rounded-lg"
            to="/reports"
          >
            <el-tooltip content="Reports" placement="right" effect="dark">
              <IconsReport />
            </el-tooltip>

            <span class="mx-2 text-sm font-medium absolute -left-36" id="word"
              >Financial Reports</span
            >
          </NuxtLink>
        </div>

        <!-- <div class="absolute bottom-0">
          <label class="text-xs uppercase"
            >Log out</label
          >

          <a
            class="hover:bg-gray-200 flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg"
            href="#"
          >
            <el-tooltip content="Logout" placement="right" effect="dark">
              <IconsSignOut />
            </el-tooltip>

            <span class="mx-2 text-sm font-medium absolute -left-36" id="word"
              >Logout</span
            >
          </a>
        </div> -->
      </nav>
    </div>
  </aside>
</template>

<script lang="ts" setup>
const isCollapse = ref(false);
import { ref, watch } from "vue";
const layoutStore = useLayoutStore();
isCollapse.value = layoutStore.getIsCollapse;
import { useLayoutStore } from "@/stores/layout";
const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp();
const props = defineProps({
  isCollapse: { type: Boolean, required: true },
});

// const closeSideBar = closeSideBar( () => {
//   console.log("hello")
// });

// const closeSideBar = () => {
//   isCollapse.value = false;
// };


watch(
  () => props.isCollapse,
  (newValue, oldValue) => {
    const t1 = gsap.timeline({ paused: false, reversed: false });
    if (newValue) {
      t1.fromTo(
        "#word",
        {
          left: "-144px",
        },
        {
          duration: 0.5,
          left: "35px",
          ease: "power2.inOut",
        }
      );
    } else {
      t1.fromTo(
        "#word",
        {
          left: "35px",
        },
        {
          duration: 0.5,
          left: "-144px",
          ease: "power2.inOut",
        }
      );
    }
  }
);

onMounted(() => {
  // const sidebarWidth = ref(layoutStore.getSidebarWidth);
  // sidebarWidth.value = isCollapse.value ? "17%" : "5%";

  if (isCollapse.value) {
    const initialAnimation = gsap.timeline();
    initialAnimation.fromTo(
        "#word",
        {
          left: "-144px",
        },
        {
          duration: 0.5,
          left: "35px",
          ease: "power2.inOut",
        }
      );
  }
});
</script>
