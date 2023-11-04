<template>
    <div style="padding: 5% 0;">
        <v-container fluid id="hero" class="hero-section hide-in-preloading">

<v-row class="align-center justify-center text-center" style="height: 95vh; position: relative; z-index: 1;">
    <!-- <v-col cols="2" class="text-start ban-icons">
        <a href="https://www.facebook.com/profile.php?id=100010575342962">
            <v-icon class="fab fa-facebook-f"></v-icon>
        </a>
        <br /><br />
        <a href="https://github.com/muhammmadaj12">
            <v-icon class="fab fa-github"></v-icon>
        </a>
        <br /><br />
        <a href="https://twitter.com/buttgreat543">
            <v-icon class="fab fa-twitter"></v-icon>
        </a>
        <br /><br />
        <a href="www.linkedin.com/in/muhammadabdullah-butt-9579591b6">
            <v-icon class="fab fa-linkedin-in"></v-icon>
        </a>
        <br />
    </v-col> -->

    <v-col  cols="12" class="text-center">
        <h2 class="hero__text__title">
            We Design & Build
            <br />
            Creative Products
        </h2>
        <v-btn class="hero__text__btn w-btn w-btn--s2 w-btn--outline-light" variant="outlined" href="#contact" 
        @click="scrollToContact"
            :color="darkMode ? 'orange' : 'white'">
            Get In Touch
        </v-btn>
    </v-col>

    <!-- <v-col  cols="2" class="text-end align-end">
        <button text href="#about" class="rotate-button ">Scroll Down</button>
    </v-col> -->


    <div class="hero__imgWrapper" id="imgWrapper">
        <div class="hero__imgLayer">
            <img src="@/assets/splash1.png" alt="profile" class="hero__imgLayer__img" />
        </div>
    </div>
</v-row>
</v-container>
    </div>
</template>

  
<script>
import heroImage from "@/assets/hero-img.png";

export default {
    data() {
        return {
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

<script setup>
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
#banner {
    background-color: transparent !important;
}

.hero__text__title{
    color: #fff;
    font-size: 3rem;
  font-family: 'Poppins', sans-serif;
}

.hero__imgLayer__img {
    width: 48%;
    top: -38px;
    left: 1%;
    position: relative;
    z-index: 1;
}

.hero__imgWrapper {
    position: absolute;
    top: 0;
    left: 2%;
    width: 98%;
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
.ban-icons a{
    text-decoration: none;
    color: #000 ;
}

@media screen and (min-width: 1180px) and (max-width: 1200px) {
    .hero__text__title{
        font-size: 2.4rem;
    }
}
@media screen and (min-width: 1075px)  and (max-width: 1179px) {
    .hero__text__title{
        font-size: 2.2rem;
    }
    .hero__imgLayer__img{
        width: 80%;
    }
}

@media screen and (min-width: 993px)   and (max-width: 1074px) {
    .hero__text__title{
        font-size: 2rem;
    }
    .hero__imgLayer__img{
        width: 80%;
    }
}
@media screen and (min-width: 860px) and (max-width: 992px) {
    .hero__text__title{
        font-size: 1.9rem;
    }
    .hero__imgLayer__img{
        width: 80%;
    }
}

@media screen and (min-width: 767px)  and (max-width: 859px) {
    .hero__text__title{
        font-size: 2rem;
    }
    .hero__imgLayer__img{
        width: 90%;
    }
}

@media screen and (max-width: 766px) {
    .hero__text__title{
        font-size: 1.8rem;
    }
    .hero__imgLayer__img{
        width: 95%;
    }
}

</style>