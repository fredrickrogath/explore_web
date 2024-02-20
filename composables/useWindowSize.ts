export const useWindowSize = () => {
        const windowHeight = ref<number>(0);
        const windowWidth = ref<number>(0);
      
        const updateWindowDimensions = () => {
          windowHeight.value = window.innerHeight;
          windowWidth.value = window.innerWidth;
        };
      
        onMounted(() => {
          updateWindowDimensions();
          window.addEventListener('resize', updateWindowDimensions);
        });
      
        onUnmounted(() => {console.log('hel')
          window.removeEventListener('resize', updateWindowDimensions);
        });
      
        return { windowHeight, windowWidth };
}