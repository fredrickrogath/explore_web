export function useAnimation() {
  const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
  
  function animate(selector: string, duration: number, left: string, display: string) {
    // const animation = gsap.fromTo(
    //   selector,
    //   { left: "100", display },
    //   {
    //     duration,
    //     left,
    //     ease: "elastic.out(4, 0.4)"
    //   }
    // );

    // return animation;
  }

  return { animate };
}
