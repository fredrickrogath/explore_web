<template>
  <div
    class="bg-white w-screen text-sm max-w-2xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto"
  >
    <div>
      <div class="h-[50vh]">
        <div
          id="animate-1"
          class="absolute z-10 bg-gray-900 bg-opacity-50 h-[50vh] w-full text-white"
        >
          <div
            class="flex justify-start items-center px-1 my-1 text-md uppercase"
          >
            <span
              @click="animateAndNavigate('/AccountRegistration')"
              id="animate-icon-2"
              v-if="true"
              class="pr-1 hidden relative hover:cursor-pointer"
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
              class="relative hidden hover:cursor-pointer"
            >
              Back
            </span>

            <span v-if="false">
              <LoadersSpin />
            </span>
          </div>
        </div>

        <div class="absolute top-[20%] text-white text-xl z-10">
            <TypeWriter/>
        </div>

        <!-- Image -->
        <v-img
          class="object-cover bg-grey-lighten-2"
          src="/food.jpg"
          lazy-src="/food.jpg"
          cover
          height="50vh"
          id="animate-1"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
            </v-row>
          </template>
        </v-img>
      </div>
      <!-- <div>hello</div> -->

      <div
        id="animate-1"
        class="relative bottom-0 hidden text-white border-2 border-gray-100/50 rounded-xl h-full w-[100%]"
      >
        <div class="relative bottom-0 w-full px-2">
          <div class="text-start">
            <div class="">
              <form @submit.prevent="login" class="rounded pt-6 pb-2">
                <label
                  class="relative block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                  id="animate-icon-1"
                >
                  Select Business Category
                </label>
                <div id="animate-form-1" class="mb-4 relative">
                  <div
                    class="absolute inset-y-0 right-2 pl-3 flex items-center pointer-events-none"
                  >
                    <!-- Icon -->
                    <IconsArrowDown
                      class="text-gray-500"
                      :class="{ 'mb-4': emailError }"
                    />
                  </div>

                  <select
                    name=""
                    id=""
                    class="bg-gray-100 text-gray-500 appearance-none border rounded w-full py-2 pl-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="" class="text-xs uppercase">
                      Select Business Category
                    </option>
                    <option value="" class="text-xs uppercase">Option 1</option>
                    <option value="" class="text-xs uppercase">Option 2</option>
                    <option value="" class="text-xs uppercase">Option 3</option>
                    <option value="" class="text-xs uppercase">Option 4</option>
                  </select>
                  <div v-if="emailError" class="text-red-500 text-xs mt-1">
                    Invalid business category.
                  </div>
                </div>

                <label
                  class="relative block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                  id="animate-icon-2"
                >
                  Business Name
                </label>

                <div id="animate-form-2" class="mb-4 relative">
                  <div
                    class="absolute inset-y-0 right-2 pl-3 flex items-center pointer-events-none"
                  >
                    <!-- Icon -->
                    <IconsBusinessEmpty
                      class="text-gray-500"
                      :class="{ 'mb-4': emailError }"
                    />
                  </div>
                  <!-- @input="validateEmail" -->
                  <input
                    v-model="email"
                    :class="{ 'border-red-500': emailError }"
                    class="bg-gray-100 text-black appearance-none border rounded w-full py-2 px-3 pl-1 leading-tight focus:outline-none focus:shadow-outline"
                    id="businessName"
                    type="text"
                    placeholder="Business Name"
                  />
                  <div v-if="emailError" class="text-red-500 text-xs mt-1">
                    Invalid business name.
                  </div>
                </div>

                <label
                  class="relative block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                  id="animate-icon-3"
                >
                  Business Country of operation
                </label>
                <div id="animate-form-1" class="mb-4 relative">
                  <div
                    class="absolute inset-y-0 right-2 pl-3 flex items-center pointer-events-none"
                  >
                    <!-- Icon -->
                    <IconsArrowDown
                      class="text-gray-500"
                      :class="{ 'mb-4': emailError }"
                    />
                  </div>

                  <select
                    name=""
                    id=""
                    class="bg-gray-100 text-gray-500 appearance-none border rounded w-full py-2 pl-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="" class="text-xs uppercase">
                      Select Country of operation
                    </option>
                    <option value="" class="text-xs uppercase">Option 1</option>
                    <option value="" class="text-xs uppercase">Option 2</option>
                    <option value="" class="text-xs uppercase">Option 3</option>
                    <option value="" class="text-xs uppercase">Option 4</option>
                  </select>
                  <div v-if="emailError" class="text-red-500 text-xs mt-1">
                    Invalid business category.
                  </div>
                </div>

                <label
                  class="relative block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                  id="animate-icon-4"
                >
                  Busines Email
                </label>

                <div id="animate-form-2" class="mb-4 relative">
                  <div
                    class="absolute inset-y-0 right-2 pl-3 flex items-center pointer-events-none"
                  >
                    <!-- Icon -->
                    <IconsEmailEmpty
                      :height="'25'"
                      :width="'25'"
                      class="text-gray-500"
                      :class="{ 'mb-4': emailError }"
                    />
                  </div>
                  <!-- @input="validateEmail" -->
                  <input
                    v-model="email"
                    :class="{ 'border-red-500': emailError }"
                    class="bg-gray-100 text-black appearance-none border rounded w-full py-2 px-3 pl-1 leading-tight focus:outline-none focus:shadow-outline"
                    id="businessName"
                    type="text"
                    placeholder="Business Email"
                  />
                  <div v-if="emailError" class="text-red-500 text-xs mt-1">
                    Invalid business email.
                  </div>
                </div>

                <div id="animate-form-3" class="relative mt-4">
                  <button
                    v-if="!loginLoading"
                    :disabled="loginLoading"
                    class="w-full uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    {{ "Create business account" }}
                  </button>

                  <button
                    v-else
                    :disabled="loginLoading"
                    class="w-full uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-[6px] px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    <el-button loading round size="small"></el-button>
                  </button>

                  <!-- <nuxt-link
                    class="inline-block align-baseline uppercase font-bold text-sm text-white underline hover:text-blue-800"
                    href="/"
                    >Test Home</nuxt-link
                  > -->
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const router = useRouter();

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const email = ref("");
const password = ref("");
const emailError = ref(false);
const passwordError = ref(false);
const loginLoading = ref(false);

// const { sayHello } = useUtils();
// sayHello("RickGath fredro");
const t1 = gsap.timeline();
const t2 = gsap.timeline({ delay: 2 });
const t3 = gsap.timeline({ delay: 2 });
const t4 = gsap.timeline({ delay: 2 });
const t5 = gsap.timeline({ delay: 2 });

const t6 = gsap.timeline({ delay: 1 });
const t7 = gsap.timeline({ delay: 1 });
const t8 = gsap.timeline({ delay: 1 });
const t9 = gsap.timeline({ delay: 2 });

function animateAndNavigate(url) {
  // console.log(url)

  t1.to("#animate-1", {
    duration: 1.3,
    top: "-100%",
    // ease: "power1.inOut",
    ease: "elastic.in(4, 3)",
  });

  setTimeout(() => {
    router.push({ path: url });
  }, 1000);
}

onMounted(() => {
  t1.fromTo(
    "#animate-1",
    {
      top: "-100",
      display: "block",
    },
    {
      duration: 2.0,
      top: "0%",
      // ease: "power2.inOut",
      ease: "elastic.out(4, 1)",
    }
  );

  t2.fromTo(
    "#animate-icon-1",
    {
      left: "500",
      display: "block",
    },
    {
      duration: 2.0,
      left: "0",
      // display: "block",
      // ease: "power2.inOut",

      ease: "elastic.out(1, .8)",
    }
  );

  t3.fromTo(
    "#animate-icon-2",
    {
      right: "500",
      display: "block",
    },
    {
      duration: 1.8,
      right: "0",
      ease: "elastic.out(1, .8)",
    }
  );

  t4.fromTo(
    "#animate-icon-3",
    {
      left: "500",
      display: "block",
    }, 
    {
      duration: 1.6,
      left: "0",
      ease: "elastic.out(1, .8)",
    }
  );

  t5.fromTo(
    "#animate-icon-4",
    {
      right: "500",
      display: "block",
    },
    {
      duration: 1.4,
      right: "0",
      ease: "elastic.out(1, .8)",
    }
  );

  t6.fromTo(
    "#animate-form-1",
    {
      top: "500",
      display: "block",
    },
    {
      duration: 1.4,
      top: "0",
      ease: "elastic.out(1, .8)",
    }
  );

  t7.fromTo(
    "#animate-form-2",
    {
      top: "500",
      display: "block",
    },
    {
      duration: 1.9,
      top: "0",
      ease: "elastic.out(1, .8)",
    }
  );

  t8.fromTo(
    "#animate-form-3",
    {
      right: "500",
      display: "block",
    },
    {
      duration: 1.4,
      right: "0",
      ease: "elastic.out(1, .8 )",
    }
  );

  t9.fromTo(
    "#animate-form-4",
    {
      left: "500",
      display: "block",
    },
    {
      duration: 1.4,
      left: "0",
      ease: "elastic.out(1, .8)",
    }
  );
});

function validateEmail() {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = !emailRegex.test(email.value);
}

function validatePassword() {
  passwordError.value = password.value.length < 6;
}

function login() {
  validatePassword();

  handleLogin();
  //   fetchSomething();
  if (!emailError.value && !passwordError.value) {
    loginLoading.value = true;

    handleLogin();
  }
}

async function handleLogin() {
  try {
    const response = await fetch("http://192.168.1.46:8080/api/v1/auth/login", {
      credentials: "same-origin",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email.value, password: password.value }),
    });

    // Handle response
    if (response.ok) {
      // Login successful
      const jsonData = await response.json();
      console.log("Logged in successfully");
      console.log(jsonData);
    } else {
      // Login failed
      const errorData = await response.text();
      console.error("Login failed:", errorData);
      alert("Login failed. Please check your credentials.");
    }
  } catch (error) {
    console.error("Error during login:", error);
    alert("An error occurred during login.");
  }
}
</script>
