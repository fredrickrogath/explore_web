<template>
    <div>
        <section class="hero-text">
            <h1>
                <span>
                    GSAP rounded text
                </span>
                <br>
                Cursor animation
            </h1>
        </section>

        <div class="cursor">
            <div class="cursor-line">
                <div class="cursor-text">
                    Rounded-Gsap-Cursor-Animation
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp();

let cursor = document.querySelector('cursor');
cursorText = cursor?.querySelectorAll('.char')

const rounded = () => {
    for (let i = 0; i < cursorText.length; i++) {
        let rotation = i * ( 360 / cursorText.length )

        gspa.set(cursorText[i], {
            TransformOrigin: `0px ${radius}px`,
            x: radius,
            rotation: rotation
        });

        gsap.set(cursor, {transformOrigin: "center center", rotation: 0});
    }
}

</script>

<style scoped>
/* .cursor {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    color: #fff;
} */
</style>