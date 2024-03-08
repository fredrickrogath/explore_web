<template>
    <div class="font-serif text-center bg-gray-900/30">
      <h1>
        <span class="box"></span><span class='hi'>
            
        </span><span class="text"></span><span class="cursor"> _</span>
      </h1>
    </div>
  </template>
  
  <script setup>
  
  const { $gsap: gsap } = useNuxtApp();
  
  onMounted(() => {
    const words = [
    "Unlock the gateway to unparalleled growth and success by registering for a business account today.",
  "Elevate your entrepreneurial journey to new heights with the strategic advantage of a meticulously tailored business account.",
  "Experience the transformative power of strategic financial management and seamless transactions with our business account solutions.",
  "Empower your business endeavors with the efficiency and reliability of a meticulously crafted business account, meticulously designed to fuel your growth trajectory.",
  "Join the ranks of industry leaders and visionaries by harnessing the strategic advantages of our meticulously curated business account services.",
  "Embark on a journey of financial empowerment and strategic growth with our comprehensive suite of business account solutions, meticulously designed to meet the diverse needs of entrepreneurs.",
  "Maximize your business potential and streamline your financial operations with the sophisticated capabilities of our cutting-edge business account offerings.",
  "Chart a course for sustainable success and financial stability with our expertly crafted business account services, meticulously engineered to propel your business forward.",
  "Gain a competitive edge in the dynamic business landscape with our innovative business account solutions, strategically designed to optimize efficiency and drive growth.",
  "Invest in your business's future prosperity by harnessing the strategic advantages of our premium business account services, meticulously tailored to meet the demands of modern entrepreneurship."
    ];
  
    let cursor = gsap.to('.cursor', { opacity: 0, ease: "power2.inOut", repeat: -1 });
    let masterTl = gsap.timeline({ repeat: -1 }).pause();
    let boxTl = gsap.timeline();
  
    boxTl.to('.box', { duration: 1, width: "17vw", delay: 0.5, ease: "power4.inOut" })
      .from('.hi', { duration: 1, y: "7vw", ease: "power3.out" })
      .to('.box', { duration: 1, height: "7vw", ease: "elastic.out", onComplete: () => masterTl.play() })
      .to('.box', { duration: 1, autoAlpha: 0.7, yoyo: true, repeat: -1, ease: "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})" });
  
    words.forEach(word => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 3 });
      tl.to('.text', { duration: 3, text: word });
      masterTl.add(tl);
    });
  });
  </script>
  