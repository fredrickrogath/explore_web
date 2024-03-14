<template>
  <div>
    <!-- <div>
      <MapboxMap
        map-id="{ID}"
        style="position: absolute; top: 0; bottom: 0; left: 250px; width: 500px"
        :options="{
          style: 'mapbox://styles/mapbox/light-v11', // style URL
          center: [-68.137343, 45.137451], // starting position
          zoom: 5, // starting zoom
        }"
      />
    </div> -->
    <div>
      <div>
        <div class="flex justify-center items-center">
          <div class="w-100 relative z-0">
            <!-- Image -->
            <img src="/map.jpg" alt="" class="min-h-screen" />
          </div>

          <div
            id="animate-1"
            class="fixed bottom-10 h-10 text-center text-white border-2 border-gray-100/50 rounded-xl backdrop-blur-sm bg-white/30 w-full hover:cursor-pointer"
          >
            <div @click="extendSearchBar" class="flex justify-center">
              <IconsArrowUp
                v-if="extendSearch"
                class="text-black"
                :height="'32'"
                :width="'32'"
              />
              <IconsArrowDown
                v-else
                class="text-black animate-pulse bg-white/30 mt-[3px] mb-[2px] rounded-full"
                :height="'32'"
                :width="'32'"
              />
            </div>
            <div class="my-1">
              <form @submit.prevent="login" class="">
                <div id="animate-form-1" class="relative">
                  <div
                    class="absolute text-white left-0 top-0 flex items-center pointer-events-none"
                  >
                    <div
                      class="bg-gradient-to-r from-blue-700 to-blue-400 p-1 rounded-full"
                    >
                      <IconsSpoonAndFork :height="'30'" :width="'30'" />
                    </div>
                  </div>
                  <!-- @input="validateEmail" -->
                  <input
                    v-model="search"
                    :class="{ 'border-red-500': searchError }"
                    class="bg-white shadow appearance-none border rounded w-full py-2 px-3 pl-11 text-black leading-tight focus:outline-none focus:shadow-outline"
                    id="search"
                    type="text"
                    placeholder="Search service provider"
                  />
                  <div v-if="searchError" class="text-red-500 text-xs mt-1">
                    Invalid search input
                  </div>
                  <div
                    class="absolute text-black right-0 top-1 pl-3 flex items-center pointer-events-none"
                  >
                    <IconsSearchEmpty :margin="'mb-1'" />
                  </div>
                </div>
              </form>

              <el-scrollbar height="100vh">
                <div class="mb-32 text-sm">
                  <div v-for="(message, index) in messages" :key="index">
                    <div
                      @click="animateAndNavigate('/chats/inbox')"
                      class="flex bg-white/60 text-black py-1 my-1 hover:cursor-pointer"
                    >
                      <div class="mx-1">
                        <div
                          class="w-12 h-12 relative rounded-full overflow-hidden"
                        >
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
                            <span class="font-bold">{{ message.author }}</span>
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
                          <span
                            class="bg-blue-600 text-white my-[1px] px-[7px] rounded italic"
                            >{{ message.location.street }}</span
                          >
                        </div>
                        <div class="flex justify-between">
                          <span :class="{ 'font-bold': message.new }">
                            {{ message.businessName }}
                          </span>
                          <span v-if="!message.new">
                            <p
                              class="bg-blue-600 text-white my-[1px] px-[7px] rounded"
                            >
                              {{ message.location.city }},
                              {{ message.location.country }}
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ClientOnly v-for="(message, index) in 20" :key="index">
                    <template #fallback>
                      <div class="h-[7vh] bg-gray-200/30 mx-1 my-1">
                        <div class="flex justify-between">
                          <div>
                            <div class="">
                              <div
                                class="w-12 h-12 relative rounded-full mt-1 overflow-hidden"
                              >
                                <div
                                  class="animate-pulse object-cover object-center bg-gray-200 h-12"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div class="w-full flex flex-col justify-center mx-2">
                            <div class="flex justify-between mt-3 mb-1">
                              <span
                                class="animate-pulse w-[15vh] h-[2vh] bg-gray-200 rounded"
                              >
                              </span>

                              <span
                                class="animate-pulse w-[8vh] h-[2vh] bg-gray-200 rounded"
                              ></span>
                            </div>
                            <div class="flex justify-between">
                              <span
                                class="animate-pulse w-[32vh] h-[2vh] bg-gray-200 rounded"
                              >
                              </span>
                              <span>
                                <p
                                  class="animate-pulse w-[20px] h-[20px] bg-gray-200 rounded-full"
                                ></p>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                  </ClientOnly>
                </div>
                <div class="h-[100px]"></div>
              </el-scrollbar>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Navigations />
  </div>
</template>

<script setup>
import { ref } from "vue";

// const router = useRouter();

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const search = ref("");
const searchError = ref("");

// Define reactive data
const messages = ref([]);

// Function to generate messages
const generateMessages = () => {
  const images = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    // Add more image URLs as needed
  ];

  // Sample business names
  const sampleBusinessNames = [
    "Business A",
    "Business B",
    "Business C",
    // Add more sample business names as needed
  ];

  // Sample author names
  const sampleAuthors = [
    "Halsey",
    "John Doe",
    "Jane Smith",
    // Add more sample author names as needed
  ];

  const locations = [
    { street: "123 Main Street", city: "Dodoma", country: "Tanzania" },
    { street: "456 Elm Street", city: "Arusha", country: "Tanzania" },
    // Add more locations as needed
  ];

  // Sample data for demonstration, you would replace this with actual data
  const sampleLocations = [
    { street: "Oak Avenue", city: "New York", country: "USA" },
    { street: "Maple Drive", city: "London", country: "UK" },
    { street: "Pine Street", city: "Paris", country: "France" },
    // Add more sample locations as needed
  ];

  // Generate additional random locations by combining sample locations
  for (let i = 0; i < 50; i++) {
    const randomLocationIndex = Math.floor(
      Math.random() * sampleLocations.length
    );
    const randomLocation = sampleLocations[randomLocationIndex];
    locations.push(randomLocation);
  }

  for (let i = 0; i < 50; i++) {
    const image = images[Math.floor(Math.random() * images.length)];
    const author =
      sampleAuthors[Math.floor(Math.random() * sampleAuthors.length)];
    const businessName =
      sampleBusinessNames[
        Math.floor(Math.random() * sampleBusinessNames.length)
      ];
    const location = locations[Math.floor(Math.random() * locations.length)];

    messages.value.push({
      image,
      author,
      businessName,
      location,
    });
  }

  return messages;
};

// Generate messages on component mount
onMounted(() => {
  generateMessages();
});

const extendSearch = ref(false);

function extendSearchBar() {
  const t1 = gsap.timeline();

  if (extendSearch.value) {
    t1.to("#animate-1", {
      duration: 0.9,
      bottom: "5.5vh",
      opacity: 1,
      ease: "elastic.out(1.2, 1.2)",
      onComplete: () => {
        // data.value[index].liked = !data.value[index].liked;
      },
    });
  } else {
    t1.to("#animate-1", {
      duration: 0.9,
      bottom: "80vh",
      opacity: 1,
      ease: "elastic.out(1.2, 1.2)",
      onComplete: () => {
        // data.value[index].liked = !data.value[index].liked;
      },
    });
  }
  extendSearch.value = !extendSearch.value;
}
</script>
