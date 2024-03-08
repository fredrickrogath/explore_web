<template>
  <div class="">
    <div>
      <el-scrollbar height="70vh">
        <div class="grid grid-cols-2 gap-[1px]">
          <div v-for="(item, index) in 20" :key="index">
            <div class="group relative overflow-hidden bg-blue-500">
              <div
                class="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute z-10"
              ></div>
              <video
              id="my-video"
              class="video-js js-default-skin vjs-4-3"
              poster="https://pixabay.com/get/g338e388417853fe286f5344604628609d4237fb21e6287df501dd2ae3227d63480c998d77ce64282f51352a927b364369fbf182d9408b18264437e85f27a4976_1280.jpg"
              controls
              preload="auto"
              data-setup="{}"
            >
              <source src="/videos/explore.mp4" type="video/mp4" />
              <!-- <source src="/videos/explore.webm" type="video/webm" /> -->
              <p class="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        // Add the CSS link for Video.js in the head section
        // link: [
        //   {
        //     rel: 'stylesheet',
        //     href: 'https://vjs.zencdn.net/8.10.0/video-js.css'
        //   }
        // ]
      };
    },
    // mounted() {
    //   // Load the Video.js script when the component is mounted
    //   const script = document.createElement('script');
    //   script.src = 'https://vjs.zencdn.net/8.10.0/video.min.js';
    //   script.async = true;
    //   document.body.appendChild(script);
    // }
  };
  </script>

  <style scoped>
  .video-js {
    width: 800px ;
  }

  
  </style>