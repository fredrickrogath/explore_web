<template>
  <div
    class="w-screen text-sm max-w-2xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto"
  >
    <div>
      <div class="flex justify-center">
        <div class="w-100 relative z-0">
          <!-- Image -->
          <img src="/food.jpg" alt="" class="min-h-screen" />
        </div>

        <div
          id="animate-1"
          class="absolute top-0 hidden text-white border-2 border-gray-100/50 rounded-xl bg-gray-900/30 h-full w-[100%]"
        >
          <div
            class="flex justify-end items-center px-2 my-1 text-md uppercase"
          >
            <span @click="animateAndNavigate('/')" id="animate-icon-1" v-if="true" class="pr-2 relative hover:cursor-pointer"> Skip to home </span>

            <span @click="animateAndNavigate('/')" id="animate-icon-2" v-if="true" class="relative hover:cursor-pointer">
              <!-- <IconsArrowRight/> -->
              <IconsArrowRight :width="'16'" :height="'16'" class="border border-white rounded-full"/>
            </span>

            <span v-if="false">
                <LoadersSpin/>
            </span>
          </div>
          <div class="absolute bottom-0 w-full px-2">
            <div id="animate-form-1" class="relative y-1 font-bold text-lg capitalize">
              Evaluate every moment
            </div>

            <div id="animate-form-2" class="relative my-1 font-bold text-lg capitalize">
              Social meets culinary discovery
            </div>

            <div class="my-4 mb-1 flex justify-evenly">
              <div class="bg-white/60 w-full mt-1 h-1"></div>
            </div>

            <div class="my-4 text-start">
              <div class="">
                <form @submit.prevent="animateAndNavigate('/AccountRegistration/Business')" class="pb-2">
                  <div id="animate-form-3" class="relative hidden">
                    <button
                      v-if="!loginLoading"
                      :disabled="loginLoading"
                      class="w-full uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      {{ "Business account" }}
                    </button>

                    <button
                      v-else
                      :disabled="loginLoading"
                      class="w-full uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-[6px] px-4 rounded-xl focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      <el-button loading round size="small"></el-button>
                    </button>
                  </div>
                </form>
              </div>

              <div class="">
                <form @submit.prevent="animateAndNavigate('/AccountRegistration/Personal')" class="">
                  <div id="animate-form-4" class="relative hidden">
                    <button
                      v-if="!loginLoading"
                      :disabled="loginLoading"
                      class="w-full uppercase bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      {{ "Personal account" }}
                    </button>

                    <button
                      v-else
                      :disabled="loginLoading"
                      class="w-full uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-[6px] px-4 rounded-xl focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      <el-button loading round size="small"></el-button>
                    </button>
                  </div>
                </form>
              </div>
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
// const t4 = gsap.timeline({ delay: 1 });
// const t5 = gsap.timeline({ delay: 1 });

const t6 = gsap.timeline({ delay: 2 });
const t7 = gsap.timeline({ delay: 2 });
const t8 = gsap.timeline({ delay: 3 });
const t9 = gsap.timeline({ delay: 3 });

function animateAndNavigate(url) {
  // console.log(url)

  t1.to("#animate-1", {
    duration: 0.9,
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

//   t4.fromTo(
//     "#animate-icon-3",
//     {
//       left: "500",
//       display: "block",
//     },
//     {
//       duration: 1.6,
//       left: "0",
//       ease: "elastic.out(1, .8)",
//     }
//   );

//   t5.fromTo(
//     "#animate-icon-4",
//     {
//       left: "500",
//       display: "block",
//     },
//     {
//       duration: 1.4,
//       left: "0",
//       ease: "elastic.out(1, .8)",
//     }
//   );

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
