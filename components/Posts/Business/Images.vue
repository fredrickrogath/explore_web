<template>
  <div class="w-screen">
    <div>
      <div>
        <!-- Image -->
        <v-img
          class="object-cover bg-grey-lighten-2"
          :src="selectedImage || 'https://picsum.photos/500/300?image=1'"
          :lazy-src="selectedImage || 'https://picsum.photos/500/300?image=1'"
          cover
          height="30vh"
          id="animate-1"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
            </v-row>
          </template>
        </v-img>
      </div>

      <el-scrollbar height="85vh">
        <v-row no-gutters>
          <v-col
            v-for="n in 100"
            :key="n"
            class="w-full d-flex child-flex"
            cols="4"
          >
            <!-- <v-img
              src="/food.jpg"
              lazy-src="/food.jpg"
              cover
              class="bg-grey-lighten-2 flex flex-grow"
            > -->

            <v-img
              v-if="`https://picsum.photos/500/300?image=${n}`"
              :src="`https://picsum.photos/500/300?image=${n}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n}`"
              cover
              class="bg-grey-lighten-2"
              @click="
                selectedImage = `https://picsum.photos/500/300?image=${n}`
              "
            >
              <!-- <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0 h-[20vh]"
            align="center"
            justify="center"
          >
          <div class="h-[20vh] flex items-center justify-center text-center">
                <el-button loading round></el-button>
              </div>
          </v-row>
        </template> -->

              <template v-slot:error>
                <v-img
                  aspect-ratio="2"
                  cover
                  class="bg-grey-lighten-2"
                  src="https://picsum.photos/500/300?image=232"
                ></v-img>
              </template>
            </v-img>

            <v-img
              v-else
              aspect-ratio="2"
              cover
              class="bg-grey-lighten-2"
              src="/food.jpg"
            ></v-img>
          </v-col>
        </v-row>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  mounted() {
    // this.importAll(
    //   require.context("../assets/images/clients/", true, /\.png$/)
    // );
  },

  data() {
    return {
      selectedImage: null,
    };
  },

  methods: {
    animateImage(imageUrl) {
      // Animate the selected image using GSAP
      gsap.fromTo(
        `#${this.$options._componentTag}-1`, // Use the component's tag to select the image
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.5 }
      );

      // Set the selected image
      this.selectedImage = imageUrl;
    },
  },
};
</script>
