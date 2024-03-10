<template>
  <div>
    <div
      class="w-screen text-sm max-w-2xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto"
    >
      <div class="flex justify-between items-center mt-1">
        <span @click="animateAndNavigate()" class="flex hover:cursor-pointer">
          <IconsArrowLeft class="ml-1" :height="'25'" :width="'25'" />
          <span class="text-[20px] mt-[3px] font-bold">Back</span>
        </span>
        <span class="relative -left-6 capitalize font-bold text-[20px]"> Chat space </span>
        <span></span>
      </div>
      <SearchBar class="mx-1" />

      <div class="mb-2">
        <div v-for="(message, index) in messages" :key="index">
          <div
            @click="animateAndNavigate('/chats/inbox')"
            class="flex bg-gray-200/30 py-1 my-1 hover:cursor-pointer"
          >
            <div class="mx-1">
              <div class="w-12 h-12 relative rounded-full overflow-hidden">
                <img
                  class="object-cover object-center h-12"
                  :src="message.image"
                  alt="Profile"
                />
              </div>
            </div>
            <div class="w-full flex flex-col justify-center mx-1">
              <div class="flex justify-between">
                <span class="flex">
                  <span :class="{ 'font-bold': message.new }">{{
                    message.author
                  }}</span>
                  <svg
                    class="text-blue-600 mt-[1px] mx-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M10.95 12.7L9.5 11.275Q9.225 11 8.813 11t-.713.3q-.275.275-.275.7t.275.7l2.15 2.15q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.287-.7t-.287-.7q-.3-.3-.712-.312t-.713.287zm-2.8 9.05L6.7 19.3l-2.75-.6q-.375-.075-.6-.387t-.175-.688L3.45 14.8l-1.875-2.15q-.25-.275-.25-.65t.25-.65L3.45 9.2l-.275-2.825q-.05-.375.175-.688t.6-.387l2.75-.6l1.45-2.45q.2-.325.55-.438t.7.038l2.6 1.1l2.6-1.1q.35-.15.7-.038t.55.438L17.3 4.7l2.75.6q.375.075.6.388t.175.687L20.55 9.2l1.875 2.15q.25.275.25.65t-.25.65L20.55 14.8l.275 2.825q.05.375-.175.688t-.6.387l-2.75.6l-1.45 2.45q-.2.325-.55.438t-.7-.038l-2.6-1.1l-2.6 1.1q-.35.15-.7.038t-.55-.438"
                    ></path>
                  </svg>
                </span>
                <span>{{ message.date }}</span>
              </div>
              <div class="flex justify-between">
                <span :class="{ 'font-bold': message.new }">
                  {{ message.content }}
                </span>
                <span v-if="message.new">
                  <p
                    class="bg-blue-600 text-white py-[1px] px-[7px] rounded-full"
                  >
                    {{ message.count }}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <Navigations /> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const { animateAndNavigate } = useNavigate();
const router = useRouter();

// Define reactive data
const messages = ref([]);

// function animateAndNavigate(url){
//     // console.log(url)
//     // setTimeout(() => {
//         router.go(-1);
//     // router.push({ path: "/chat/inbox" })
// //   }, 1000 )
// }

// Function to generate messages
const generateMessages = () => {
  const images = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    // Add more image URLs as needed
  ];

  const authors = [
    "Halsey",
    // Add more author names as needed
  ];

  const sentences = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ];

  const dates = [
    "05 Jan",
    // Add more dates as needed
  ];

  for (let i = 0; i < 40; i++) {
    const image = images[Math.floor(Math.random() * images.length)];
    const author = authors[Math.floor(Math.random() * authors.length)];
    const content = truncate(
      sentences[Math.floor(Math.random() * sentences.length)]
    );
    const date = dates[Math.floor(Math.random() * dates.length)];
    const newMessage = Math.random() < 0.5; // 50% chance for a message to be new
    const count = Math.floor(Math.random() * 10) + 1; // Generate random count from 1 to 10

    messages.value.push({
      image,
      author,
      content,
      date,
      new: newMessage,
      count,
    });
  }
};

// Function to truncate long sentences
const truncate = (sentence) => {
  const maxLength = 50;
  return sentence.length > maxLength
    ? sentence.substring(0, maxLength - 3) + "..."
    : sentence;
};

// Generate messages on component mount
onMounted(() => {
  generateMessages();
});
</script>

<style scoped></style>
