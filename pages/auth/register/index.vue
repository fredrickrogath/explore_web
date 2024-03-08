<template>
  <div
    class="w-screen text-sm max-w-2xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto"
  >
    <div>
      <div class="flex justify-center items-center">
        <div class="w-100 relative z-0">
          <!-- Image -->
          <img src="/food.jpg" alt="" class="min-h-screen" />
        </div>

        <div
          id="animate-1"
          class="absolute -top-40 hidden text-center text-white border-2 border-gray-100/50 rounded-xl backdrop-blur-sm bg-white/30 h-75 w-[85%]"
        >
          <div class="my-4 text-lg">Sign up to Explore Larosa</div>
          <div class="flex justify-evenly relative h-[44px]">
            <div
              id="animate-icon-1"
              class="relative hidden p-2 pb-[52px] bg-white rounded-lg"
            >
              <img
                src="/icons/google.png"
                style="height: 44px; width: 44px"
                alt=""
                srcset=""
              />
            </div>
            <div
              id="animate-icon-2"
              class="relative hidden px-2 pt-1 pb-[55px] bg-white rounded-lg"
            >
              <img
                src="/icons/tiktok.png"
                style="height: 51px; width: 51px"
                alt=""
                srcset=""
              />
            </div>
            <div
              id="animate-icon-3"
              class="relative hidden px-2 pt-1 pb-[55px] bg-white rounded-lg"
            >
              <img
                src="/icons/facebook.png"
                style="height: 50px; width: 50px"
                alt=""
                srcset=""
              />
            </div>

            <div
              id="animate-icon-4"
              class="relative hidden px-2 pt-1 pb-[55px] bg-white rounded-lg"
            >
              <img
                src="/icons/instagram.png"
                style="height: 50px; width: 50px"
                alt=""
                srcset=""
              />
            </div>
          </div>

          <div class="my-4 mt-7 mb-3 flex justify-evenly px-6">
            <div class="bg-white/60 w-1/2 mt-2 h-1"></div>
            <div class="h-1 mx-1">OR</div>
            <div class="bg-white/60 w-1/2 mt-2 h-1"></div>
          </div>

          <div class="my-4">Sign up with Email / Username</div>

          <div class="my-4 text-start">
            <div class="">
              <form
                @submit.prevent="login"
                class="shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <div id="animate-form-1" class="mb-4 relative hidden">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <!-- Icon -->
                    <IconsUser
                      class="text-gray-500"
                      :class="{ 'mb-4': emailError }"
                    />
                  </div>
                  <!-- @input="validateEmail" -->
                  <input
                    v-model="email"
                    :class="{ 'border-red-500': emailError }"
                    class="bg-white shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Email / Username"
                  />
                  <div v-if="emailError" class="text-red-500 text-xs mt-1">
                    Invalid email address
                  </div>
                </div>

                <div id="animate-form-2" class="mb-4 relative hidden">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <!-- Icon -->
                    <IconsKey
                      class="text-gray-500"
                      :class="{ 'mb-4': passwordError }"
                    />
                  </div>
                  <input
                    v-model="password"
                    @input="validatePassword"
                    :class="{ 'border-red-500': passwordError }"
                    class="bg-white shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                  <div v-if="passwordError" class="text-red-500 text-xs pt-1">
                    Password must be at least 6 characters
                  </div>
                </div>

                <div id="animate-form-3" class="relative hidden">
                  <button
                    v-if="!loginLoading"
                    :disabled="loginLoading"
                    class="w-full uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    {{ "Register" }}
                  </button>

                  <button
                    v-else
                    :disabled="loginLoading"
                    class="w-full uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-[6px] px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    <el-button loading round size="small"></el-button>
                  </button>

                  <nuxt-link
                    class="inline-block align-baseline uppercase font-bold text-sm text-white underline hover:text-blue-800"
                    href="/"
                    >Test Home</nuxt-link
                  >
                </div>

                <div
                  id="animate-form-4"
                  class="mt-6 relative hidden text-center"
                >
                  <!-- <nuxt-link class="" href="/AccountRegistration">
                    </nuxt-link> -->
                    <span>Don't have an account? </span>
                  <span
                    @click="animateAndNavigate('/auth/register')"
                    class="hover:cursor-pointer inline-block align-baseline font-bold text-sm text-white underline hover:text-blue-800"
                    >Login</span
                  >
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
const t2 = gsap.timeline({ delay: 1 });
const t3 = gsap.timeline({ delay: 1 });
const t4 = gsap.timeline({ delay: 1 });
const t5 = gsap.timeline({ delay: 1 });

const t6 = gsap.timeline({ delay: 2 });
const t7 = gsap.timeline({ delay: 2 });
const t8 = gsap.timeline({ delay: 3 });
const t9 = gsap.timeline({ delay: 3 });

function animateAndNavigate(url) {
  // console.log(url)

  t1.to("#animate-1", {
    duration: 1.3,
    top: "-100%",
    // ease: "power1.inOut",
    ease: "elastic.in(4, 3)",
  });

  setTimeout(() => {
    router.push({ path: "/auth/login" });
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
      top: "20%",
      // ease: "power2.inOut",
      ease: "elastic.out(2, .7)",
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
      left: "500",
      display: "block",
    },
    {
      duration: 1.8,
      left: "0",
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
      left: "500",
      display: "block",
    },
    {
      duration: 1.4,
      left: "0",
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
