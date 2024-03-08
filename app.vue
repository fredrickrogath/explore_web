<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
</template>

<style>
body{
  scroll-behavior: smooth;
}

html {
  background-color: #f9fafb;
  scroll-behavior: smooth;
}
html.dark {
  scroll-behavior: smooth;
  background: hwb(215 12% 78%);
  color: #d1d5db;
}
html.dark button:hover{
  background-color: #374151;
}
html.dark .chart{
  border-color: #374151;
}

html.dark g text {
  fill: #d1d5db
}

html.dark #gauge g text {
  fill: #374151;
  /* font-weight: 600; */
}

html.dark .mini{
  border-color: #374151;
}
html.dark #divider{
  background-color: #374151;
}
html.dark #table{
  border-color: #374151;
}
/* html.dark #sidebar a{
  background-color: #374151;
} */
html.dark #sidebar a:hover{
  background-color: #374151;
}

svg > g > g.google-visualization-tooltip { pointer-events: none }

/* .el-tabs ,.el-tabs--items {
  background-color: transparent !important;
} */

tr td, th {
  background-color: transparent !important;
}

:root {
  --el-bg-color: green;
}


.el-tabs,
#tab-2,
.el-tabs--items,
.el-tabs--border-card {
  color: black !important;
  border: 0 !important;
  /* background-color: transparent !important; */
}


.google-visualization-tooltip > ul > li { 
width: 150px !important;
border: none !important;
border-radius: 21px !important;
/* background-color: rgb(30, 50, 230)!important; */
position: absolute !important;
box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75) !important;
background: -moz-linear-gradient(30deg, rgb(30, 50, 230) 30%, rgb(90, 140, 250) 70%) !important;
background: -webkit-linear-gradient(30deg, rgb(30, 50, 230) 30%, rgb(90, 140, 250) 70%) !important;
background: -o-linear-gradient(30deg, rgb(30, 50, 230) 30%, rgb(90, 140, 250) 70%) !important;
background: -ms-linear-gradient(30deg, rgb(30, 50, 230) 30%, rgb(90, 140, 250) 70%) !important;
background: linear-gradient(120deg, rgb(30, 50, 230) 30%, rgb(90, 140, 250) 70%) !important;
font-size:  10px !important;
}


.glow-on-hover {
    /* width: 220px;
    height: 50px; */
    border: none;
    /* outline: none;
    color: #fff;
    background: #111; */
    cursor: pointer;
    position: relative;
    z-index: 20;
    /* border-radius: 10px; */
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    /* border-radius: 10px; */
}

.glow-on-hover:active {
    /* color: #000 */
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    /* background: #111; */
    left: 0;
    top: 0;
    /* border-radius: 10px; */
}

.glow-on-hover:hover:p-1 {
    transition: padding 1000ms ease-in-out;
}

/* Add the following lines if necessary for the initial state */
.glow-on-hover {
    /* other styles */
    padding: 0; /* Set the initial padding value */
}


@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
</style>