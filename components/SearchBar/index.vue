<template>
  <div>
    <div class="w-full">
    <form @submit.prevent="login" class="shadow rounded pb-1 mb-1">
      <div class="relative">
        <div
          class="absolute inset-y-0 right-1 bottom-5 flex items-center pointer-events-none"
        >
          <!-- Icon -->
          <IconsSearchEmpty :margin="'mt-2'" :height="'26'" :width="'26'" class="text-red-500" />
        </div>
        <input
          v-model="search"
          @input="validatePassword"
          :class="{ 'border-red-500': searchError }"
          class="bg-white/50 placeholder:text-gray-700 appearance-none border-[1px] border-gray-300 rounded w-full py-2 px-3 pl-1 leading-tight focus:outline-none focus:shadow-outline"
          id="search"
          type="text"
          placeholder="Search ..."
        />
        <div v-if="!searchError" class="text-red-600/80 font-bold text-center text-xs pt-1">
          No search results found ...
        </div>
      </div>
    </form>
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchError = ref(false);
const search = ref('');
</script>
