<template>
  <div class="my-0 mx-1 flex justify-between">
    <!-- <div class="flex row gap-3 w-[33%]"> -->
      <!-- <div class="flex flex-col pt-1">
        <ClientOnly>
          <div>
            <HeaderMenuLeft />
          </div>
          <div class="mx-auto">
            <el-switch
            
            @click="toggleCollapse"
            v-model="isCollapse"
              
              :active-action-icon="ArrowRight"
              :inactive-action-icon="ArrowLeft"
            />
          </div>
          <template #fallback>
            <div
              class="h-[9vh] flex items-center justify-center ml-2 mr-1"
            >
              <el-button loading></el-button>
            </div>
          </template>
        </ClientOnly>
      </div> -->

      <!-- <div class="w-full">
        <ClientOnly>
          <HeaderBreadCrumb />
          <div class="">hello world</div>
          <div>hello world</div>
          <template #fallback>
            <div
              class="h-[9vh] flex items-center justify-center text-center my-1 mr-1"
            >
              <el-button loading></el-button>
            </div>
          </template>
        </ClientOnly>
      </div> -->
    <!-- </div> -->

    <!-- <DividerVertical class="w-[1px]"/> -->

    <!-- <div class="w-[33%]">
      <ClientOnly fallback-tag="span">
        <ClockDigital />
        <template #fallback>
          <div class="h-[9vh] flex items-center justify-center">
            <el-button loading></el-button>
          </div>
        </template>
      </ClientOnly>
    </div> -->

    <!-- <DividerVertical class="w-[1px]"/> -->

    <!-- <div class="w-[33.3%]">
      <ClientOnly fallback-tag="span">
        <HeaderMenuRight />

        <template #fallback>
          <div class="h-[9vh] mt-1 flex items-center justify-center">
            <el-button loading></el-button>
          </div>
        </template>
      </ClientOnly>
    </div> -->
  </div>

  <!-- <DividerHorizontal /> -->

  <div class="flex overflow-hidden">
    <!-- <div class="sidebarWidth" :style="{ width: sidebarWidth }">
      <ClientOnly fallback-tag="span">
        <SideBar :isCollapse="isCollapse" />
        <template #fallback>
          <div class="h-[70vh] mx-2 flex items-center justify-center">
            <el-button loading></el-button>
          </div>
        </template>
      </ClientOnly>
    </div> -->

    <!-- <DividerVertical /> -->
    
    <div class="ml-[0px] w-full background-image">
      <!-- <div style="height: 100%"> -->
      <el-scrollbar height="" class="">
      <slot />
      <!-- <el-backtop :right="20" :bottom="20" /> -->
      </el-scrollbar>
      <!-- </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
import { useLayoutStore } from "@/stores/layout";
const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp();
import { ArrowRight, ArrowLeft } from "@element-plus/icons-vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const isDark = useDark();
const isCollapse = ref(false);
const layoutStore = useLayoutStore();
isCollapse.value = layoutStore.getIsCollapse;
const sidebarWidth = ref(layoutStore.getSidebarWidth);
// const sidebarWidth = ref(isCollapse.value ? '17%' : '5%');
import { useDark, useToggle } from "@vueuse/core";

const errorHandler = () => true;
const handleOpen = (key: string, keyPath: string[]) => {};
const handleClose = (key: string, keyPath: string[]) => {};

const toggleCollapse = () => {
  layoutStore.toggleCollapse();
};

watch(isCollapse, (newValue) => {
  const t1 = gsap.timeline({ paused: false, reversed: false });
  if (newValue) {
    t1.fromTo(
      ".sidebarWidth",
      {
        width: "5%",
      },
      {
        duration: 0.5,
        width: "17%",
        ease: "power2.inOut",
      }
    );
  } else {
    t1.fromTo(
      ".sidebarWidth",
      {
        width: "17%",
      },
      {
        duration: 0.5,
        width: "5%",
        ease: "power2.inOut",
      }
    );
  }
});

onMounted(() => {
  if (isCollapse.value) {
    const initialAnimation = gsap.timeline();
    initialAnimation.fromTo(
      ".sidebarWidth",
      {
        width: "5%",
      },
      {
        duration: 0.5,
        width: "17%",
        ease: "power2.inOut",
      }
    );
  }

  const initialClassName = isDark.value ? "dark-background" : "light-background";
  const element = document.querySelector(".background-image");
  element.classList.add(initialClassName);
});

watch(isDark, (newValue) => {
  const element = document.querySelector(".background-image");
  const className = !newValue ? "light-background" : "dark-background";
  element.classList.remove("light-background", "dark-background");
  element.classList.add(className);
});
</script>

<style scoped>
.light-background {
  background-image: url("assets/images/light.png");
  background-size: cover;
}

.dark-background {
  background-image: url("assets/images/dark.png");
  background-size: cover;
}
</style>
