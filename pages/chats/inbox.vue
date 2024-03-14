<template>
  <div>
    <!-- component -->
    <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <div
        class="flex sm:items-center justify-between py-1 border-b-2 border-gray-200"
      >
        <div class="relative flex items-center space-x-4">
          <span @click="animateAndNavigate()" class="flex hover:cursor-pointer">
            <IconsArrowLeft class="ml-1" :height="'30'" :width="'30'" />
          </span>

          <div class="relative -left-2">
            <div class="w-10 h-10 relative rounded-full overflow-hidden">
              <img
                class="object-cover object-center h-10"
                :src="avatar"
                alt="Profile"
              />
            </div>
          </div>
          <div class="relative -left-4 flex flex-col leading-tight">
            <div class="flex items-center font-bold">
              <span class="text-gray-700">{{ username }}</span>
            </div>
            <span class="text-gray-600 text-sm font-bold">Online</span>
          </div>
        </div>
      </div>
      <div
        id="messages"
        class="flex flex-col space-y-2 pb-14 p-3 text-sm overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
        <div v-for="(message, index) in messages" :key="index">
          <div :class="messageClass(message)">
            <div>
              <div
                class="flex items-end"
                :class="{
                  'justify-end': true,
                }"
                v-if="message.myMessage"
              >
                <div class="flex flex-col space-y-2 max-w-xs mr-1">
                  <div>
                    <span
                      class="px-2 py-1 rounded-lg inline-block"
                      :class="messageBackgroundColor(message)"
                      style=""
                    >
                      {{ message.content }}
                    </span>
                  </div>
                </div>
                <div class="w-6 h-6 rounded-full">
                  <img
                    :src="avatar"
                    alt="My profile"
                    class="object-cover object-center h-6 rounded-full"
                  />
                </div>
              </div>

              <div
                class="flex items-end"
                :class="{
                  'items-start': false,
                }"
                v-else
              >
                <div class="w-6 h-6 rounded-full order-1">
                  <img
                    :src="avatar"
                    alt="My profile"
                    class="object-cover object-center h-6 rounded-full"
                  />
                </div>
                <div class="flex flex-col space-y-2 max-w-xs ml-1 order-2">
                  <div>
                    <span
                      class="px-2 py-1 rounded-lg inline-block"
                      :class="messageBackgroundColor(message)"
                    >
                      {{ message.content }}
                    </span>
                  </div>
                </div>
              </div>

              <div
                class="flex items-center text-xs"
                :class="{
                  'justify-start': message.myMessage,
                  'justify-end': message.myMessage,
                }"
              >
                {{ message.time }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="fixed w-full bottom-0 border-t-2 border-blue-200/30 sm:mb-0 bg-blue-600/70"
        :class="{ 'bg-blue-600/70': !editorFocused, 'bg-white': editorFocused }"
      >
        <div class="relative flex w-full">
          <span class="absolute z-10 inset-y-0 flex items-center">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
                :class="{
                  'text-white': !editorFocused,
                  'text-black': editorFocused,
                }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                ></path>
              </svg>
            </button>
          </span>
          <input
            @focus="animateMessageEditor(true)"
            @blur="animateMessageEditor(false)"
            type="text"
            id="messageEditor"
            placeholder="Write your message !"
            class="w-full focus:outline-none focus:placeholder-black text-black placeholder-white pl-12 rounded-md bg-transparent"
          />
          <div
            class="relative w-1/2 right-0 flex justify-end items-center inset-y-0 sm:flex"
          >
            <button
              type="button"
              class="inline-flex mr-2 items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
                :class="{
                  'text-white': !editorFocused,
                  'text-black': editorFocused,
                }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
                :class="{
                  'text-white': !editorFocused,
                  'text-black': editorFocused,
                }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </button>
            <!-- <button type="button" class="mx-1 inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
               </svg>
            </button> -->
            <button
              type="button"
              class="relative inline-flex items-center justify-center rounded-lg px-2 py-3 transition duration-500 ease-in-out text-white bg-blue-600/90 hover:bg-blue-400 focus:outline-none"
            >
              <span class="font-bold">Send</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-6 w-6 ml-2 transform rotate-90"
              >
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const { animateAndNavigate } = useNavigate();

const username = "Julius Mihogo";
const avatar =
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ";
const messages = ref([]);

// Array of random sentences
const sentences = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
];

// Function to generate a random time for each message
const generateRandomTime = () => {
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${hours < 12 ? "AM" : "PM"}`;
};

// Generate 30 messages
for (let i = 0; i < 30; i++) {
  const direction = i % 2 === 0 ? "left" : "right";
  const myMessage = direction === "right"; // Assuming every second message is "my message"
  const content = sentences[Math.floor(Math.random() * sentences.length)]; // Pick a random sentence
  const background = myMessage ? "bg-blue-600 text-white" : "bg-gray-300";
  const time = generateRandomTime(); // Generate random time for each message

  messages.value.push({
    content,
    direction,
    background,
    myMessage,
    time,
  });
}

const messageClass = (message) => "chat-message";
const messageBackgroundColor = (message) => message.background;

const editorFocused = ref(false);

// Function to animate the message editor
const animateMessageEditor = (focused) => {
  editorFocused.value = focused;
};
</script>

<style>
/* Add your custom styles here */
</style>
