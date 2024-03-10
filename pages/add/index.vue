<template>
  <div>
    <!-- <div class="flex">
      <IconsArrowLeft
        :width="16"
        :height="16"
        class="border border-white rounded-full"
      />
      <div>New Post</div>
    </div> -->

    <div class="flex justify-start items-center px-1 my-1 text-md uppercase">
      <span
        @click="animateAndNavigate('/AccountRegistration')"
        id="animate-icon-2"
        v-if="true"
        class="pr-1 relative hover:cursor-pointer"
      >
        <IconsArrowLeft
          :width="'16'"
          :height="'16'"
          class="border border-white rounded-full"
        />
      </span>
      <span
        @click="animateAndNavigate('/AccountRegistration')"
        id="animate-icon-1"
        v-if="true"
        class="relative hover:cursor-pointer"
      >
        New post
      </span>

      <span v-if="false">
        <LoadersSpin />
      </span>
    </div>

    <ClientOnly>
      <div class="flex justify-center flex-wrap">
        <el-tabs
        v-model="activeName"
        class=""
        :stretch="true"
        @tab-click=""
        >
          <el-tab-pane label="Mix" name="">
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
  </div>
</template>

<script setup>
import { ref } from "vue";
const isDark = useDark();
const activeName = ref("first");
</script>
