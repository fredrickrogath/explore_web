<template>
    <div>
      <section v-for="(section, index) in 12" :key="index" ref="sections">
        <div class="bg" :style="{ backgroundImage: `url('https://picsum.photos/1600/800?random=${index}')` }"></div>
        <h1>Section {{ index + 1 }}</h1>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      this.setupScrollTrigger();
    },
    methods: {
      setupScrollTrigger() {
        this.$nextTick(() => {
          const { $gsap: gsap } = this.$nuxt;
  
          gsap.utils.toArray(this.$refs.sections).forEach((section, index) => {
            section.bg = section.querySelector('.bg');
  
            gsap.fromTo(
              section.bg,
              {
                backgroundPosition: () => (index ? `50% ${-window.innerHeight * this.getRatio(section)}px` : '50% 0px'),
              },
              {
                backgroundPosition: () => `50% ${window.innerHeight * (1 - this.getRatio(section))}px`,
                ease: 'none',
                scrollTrigger: {
                  trigger: section,
                  start: () => (index ? 'top bottom' : 'top top'),
                  end: 'bottom top',
                  scrub: true,
                  invalidateOnRefresh: true, // to make it responsive
                },
              }
            );
          });
        });
      },
      getRatio(el) {
        return window.innerHeight / (window.innerHeight + el.offsetHeight);
      },
    },
  };
  </script>
  
  <style scoped>
  section {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  h1 {
    color: white;
    text-shadow: 1px 1px 3px black;
    z-index: 1;
    font-size: 3em;
    font-weight: 400;
  }
  </style>
  