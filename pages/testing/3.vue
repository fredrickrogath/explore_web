<template>
    <div class="wrap">
      <div class="slider"></div>
      <svg id="impactBurst" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
        <g id="burst" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="4">
          <line x1="0" y1="15" x2="40" y2="0" />
          <line x1="0" y1="25" x2="40" y2="25" />
          <line x1="0" y1="35" x2="40" y2="50" />
        </g>
      </svg>
      <ul class="">
        <li v-for="(tab, index) in tabs" :key="index" @click="doCoolStuff(index)" :style="{ color: activeTab === index ? '#fff' : activeColor }">{{ tab }}</li>
      </ul>
    </div>
    <div class="article-block">
      <div class="article" v-for="(article, index) in articles" :key="index">
        <h1>{{ article.title }}</h1>
        <p>{{ article.content }}</p>
      </div>
    </div>
    <div class="colors">
      <div class="colorBubble" v-for="(color, index) in colorArray" :key="index" :style="{ backgroundColor: color }" @click="colorChange(color)"></div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const { $gsap: gsap } = useNuxtApp();
  
  const tabs = ref(['Alpha', 'Bravo', 'Charlie', 'Delta']);
  const articles = ref([
    { title: 'Alpha Title', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...' },
    { title: 'Bravo Title', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit...' },
    { title: 'Charlie Title', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...' },
    { title: 'Delta Title', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...' }
  ]);
  const colorArray = ref(["#1bb1a5", "#94c356", "#e3aa59", "#777", "#a63ba0", "#cf5b21", "#46a4cc", "#000"]);
  const activeTab = ref(0);
  const activeColor = ref(colorArray.value[0]);
  
  function doCoolStuff(index) {
    if (index !== activeTab.value) {
      activeTab.value = index;
      animateStuff();
    }
  }
  
  function animateStuff() {
    // Implement your animation logic here
    // console.log('Animation logic goes here');

    console.clear();
    gsap.defaultEase = "Elastic";
gsap.set(".wrap, .article-block, .colors", {autoAlpha:1});
var targets = document.querySelectorAll("li");
var articles = document.querySelectorAll(".article");
var colorArray = ["#1bb1a5", "#94c356", "#e3aa59", "#777", "#a63ba0", "#cf5b21", "#46a4cc", "#000"];
var colorSwatches = document.querySelectorAll(".colorBubble");
var activeTab = 0;
var old = 0;
var heights = [];
var widths = [];
var dur = 0.4;
var burstDur = 0.2;
var animation;
var loopStart = 0;
var loopEnd = 0;
var activeColor = colorArray[0];

for (let i = 0; i < targets.length; i++) {
  targets[i].index = i;
  heights.push(articles[i].offsetHeight); // get height of each article
  widths.push(targets[i].offsetWidth); // get width of each tab
  gsap.set(articles[i], {top: 0, y:-heights[i]}); // push all articles up out of view
  targets[i].addEventListener("click", doCoolStuff);
}

// set initial article and position stretchy bubble slider on first tab 
gsap.set(articles[0], {y:0});
gsap.set(".slider", {x:targets[0].offsetLeft, width:targets[0].offsetWidth});
gsap.set(targets[0], {color:"#fff"});
gsap.set(".article-block", {height:heights[0]});
gsap.set("#burst", {stroke:activeColor});
gsap.set("line", {drawSVG:0});

function doCoolStuff() {
  // check if clicked target is new and if the timeline is currently active
  if(this.index != activeTab) {
    //if there's an animation in-progress, jump to the end immediately so there aren't weird overlaps. 
    if (animation && animation.isActive()) {
      animation.progress(1);
    }
    animation = new TimelineMax();
    old = activeTab;
    activeTab = this.index;
    stretch = 0;
    
    if (activeTab > old) {
      loopStart = old;
      loopEnd = activeTab;
      // moving left to right position the impact burst on the right side of target
      animation.set("#impactBurst", {x:targets[activeTab].offsetLeft + widths[activeTab], scaleX:1}); 
    } else {
      loopStart = activeTab;
      loopEnd = old;
      // moving right to left position the impact burst on the left side of target and scaleX:-1
      animation.set("#impactBurst", {x:targets[activeTab].offsetLeft, scaleX:-1, transformOrigin:"left center"});
      // if moving slider bubble right to left, also animate new x position while stretching
      animation.to(".slider", dur, {x:targets[activeTab].offsetLeft, ease:Power2.easeIn}, 0);
    }
    // get total width of all tabs between new and old (inclusive)
     for (let i = loopStart; i < loopEnd + 1; i++) {
      stretch += widths[i];
    }   
    // stretch the slider bubble to the start of the new target
    gsap.to(".slider", dur, {width:stretch, ease:Power2.easeIn}, 0);
    // animate the lines of the impact burst
    gsap.fromTo("line", burstDur/3, {drawSVG:"0% 0%"}, {drawSVG:"0% 40%"}, "springBack");
    gsap.to("line", burstDur/3, {drawSVG:"70% 100%"});
    gsap.to("line", burstDur/3, {drawSVG:"100% 100%", ease:Sine.easeOut});
    // animate bubble slider to clicked target
    gsap.to(".slider", dur, {x:targets[activeTab].offsetLeft, width:widths[activeTab], ease:Power2.easeOut}, "springBack");
    // change text color on old and new tab targets
    gsap.to(targets[old], dur, {color:activeColor}, "springBack");
    gsap.to(targets[activeTab], dur, {color:"#fff"}, "springBack");
    // slide current article down out of view and then set it to starting position at top
    gsap.to(articles[old], dur, {y:heights[old], ease:Back.easeIn }, "springBack");
    gsap.set(articles[old], {y:-heights[old]});
    // resize article block to accommodate new content
    gsap.to(".article-block", dur, {height:heights[activeTab], ease:Power2.easeOut});
    // slide in new article
    gsap.to(articles[activeTab], 1, {y:0, ease: Elastic.easeOut}, "-=0.25");
  }
}

// just stuff related to the color change swatches down here
for (let i = 0; i < colorSwatches.length; i++) {
  gsap.set(colorSwatches[i], { backgroundColor: colorArray[i] });
  colorSwatches[i].index = i;
  colorSwatches[i].addEventListener("click", colorChange);
}

function colorChange() {
  activeColor = colorArray[this.index];
  gsap.to(".slider", dur, { backgroundColor: activeColor });
  gsap.to("h1, li", dur, { color: activeColor });
  gsap.to(targets[activeTab], dur, { color: "#fff" });
  gsap.to(".article-block", dur, {borderBottom: "1px solid " + activeColor});
  gsap.to("#burst", dur, {stroke:activeColor});
}

  }
  
  function colorChange(color) {
    activeColor.value = color;
  }
  </script>
  
  <!-- <style>
  * {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  /* overflow: hidden; */
}

.wrap {
  position: relative;
  width: 700px;
  margin: auto;
  /* visibility: hidden; */
}

.slider {
  position: absolute;
  left: 0;
  top: 0;
  background: #1bb1a5;
  box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.3);
  border-radius: 100px;
  height: 100%;
}

.tabs-block {
  display: flex;
  padding: 0;
  flex-direction: row;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  width: 700px;
  height: auto;
  margin: 50px auto;
  position: relative;
}

li {
  text-align: center;
  margin: 0;
  padding: 10px;
  flex: auto;
  font-size: 18px;
  font-weight: 700;
  color: #1bb1a5;
  position: relative;
  cursor: pointer;
  list-style: none;
  user-select: none;
}

h1 {
  margin: 0;
  padding: 0;
  color: #1bb1a5;
}

.article-block {
  width: 700px;
  margin: auto;
  overflow: hidden;
  box-shadow: 0 10px 12px -12px rgba(0, 0, 0, 0.4) inset;
  background: #fff;
  border-bottom: 1px solid #1bb1a5;
  position: relative;
  border-radius: 24px;
  visibility: hidden;
}

.article {
  position: absolute;
  padding: 20px;
  left: 0;
  top: 0;
  line-height: 1.5;
}

.colorBubble {
  width: 24px;
  height: 24px;
  background-color: black;
  border-radius: 100%;
  margin: 0 2px;
  cursor: pointer;
}

.colors {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  width: 700px;
  visibility: hidden;
}

#impactBurst {
  position: absolute;
  height: 100%;
  width: auto;
}
  </style>
   -->