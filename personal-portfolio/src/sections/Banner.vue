<template>
        <v-container fluid id="hero" class="hero-section hide-in-preloading">
            <v-row class="align-center justify-center text-center" style="height: 95vh; position: relative; z-index: 1;">
                <v-col cols="2" class="text-start">
                    <v-icon class="fab fa-facebook-f"></v-icon>
                    <br /><br />
                    <v-icon class="fab fa-twitter"></v-icon>
                    <br /><br />
                    <v-icon class="fab fa-linkedin-in"></v-icon><br>
                </v-col>

                <v-col cols="8" class="text-center">
                    <h2 class="hero__text__title">
                        We Design & Build
                        <br />
                        Creative Products
                    </h2>
                    <v-btn class="hero__text__btn w-btn w-btn--s2 w-btn--outline-light" variant="outlined" :color="darkMode ? 'orange' : 'white'">
                        Get In Touch
                    </v-btn>
                </v-col>

                <v-col cols="2" class="text-end align-end">
                    <button text href="#about"  class="rotate-button ">Scroll Down</button>
                </v-col>

                <!-- Code for the hero image -->
                <div class="hero__imgWrapper" id="imgWrapper">
                    <div class="hero__imgLayer">
                        <img :src="heroImage" alt="profile" class="hero__imgLayer__img" />
                    </div>
                </div>
            </v-row>
        </v-container>
</template>

  
<script>
import splashImage from "@/assets/splash.png";
import heroImage from "@/assets/hero-img.png";

export default {
    data() {
        return {
            splashImage: splashImage,
            heroImage: heroImage,
        };
    },
    created() {
        // preload images
        new Image().src = this.splashImage;
        new Image().src = this.heroImage;

    },
    mounted() {
        const imgWrapper = document.getElementById("imgWrapper");
        const container = document.getElementById("hero");
        container.addEventListener("mousemove", (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = container.offsetWidth / 2;
            const centerY = container.offsetHeight / 2;
            const moveX = (centerX - x) / 10;
            const moveY = (centerY - y) / 10;
            imgWrapper.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        container.addEventListener("mouseleave", () => {
            imgWrapper.style.transform = "translate(0, 0)";
        });
    },
};
</script>

<style scoped>
#banner {
    background-color: transparent !important;
}

.hero__imgLayer {
    position: absolute;
    top: 0;
    left: -4%;
    width: 100%;
    height: 95%;
    background-image: url('@/assets/splash1.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    overflow: hidden !important;
}

.hero__imgLayer__img {
    width: 26.5%;
    top: 1%;
    left: 1%;
    position: relative;
    z-index: 1;
}

.hero__imgWrapper {
    position: absolute;
    top: 0;
    left: 2%;
    width: 100%;
    height: 87%;
    z-index: -999;
}

.dark-mode .text-right button {
    color: white !important;
}

.dark-mode .fab {
    color: white !important;
}
.rotate-button {
    transform: rotate(90deg);
    padding-bottom: 40%;
}
</style>