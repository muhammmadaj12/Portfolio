<template>
    <div style="padding: 8% 0;">
        <v-container id="about" class="about-section section hide-in-preloading" tabindex="-1"
            style="opacity: 1; visibility: inherit;">
            <v-row>
                <v-col cols="12" lg="6" md="12" sm="12">
                    <div style="position: relative;">
                        <div id="about_img">
                            <v-img src="@/assets/about.png" alt="About" class="img-fluid" />
                        </div>
                        <div id="about__img"></div>
                    </div>
                </v-col>
                <!-- about text -->
                <v-col cols="12" lg="6" md="12" sm="12">
                    <div style="position: relative" class="about__text">
                        <div class="text-box-inline">
                            <div id="aboutt">
                                <span class="subtitle" style="top: 5px; opacity: 1; visibility: inherit;">about me</span>
                            </div>
                            <h2>
                                <div>Need a Creative Product?</div>
                                <br />
                                I can Help You!
                            </h2>
                            <p>
                                Hi! I’m Muhammad Abdullah Butt, and I’m a developer who has a passion for building clean web
                                applications with
                                intuitive functionality. I enjoy the process of turning ideas into reality using creative
                                solutions. I’m
                                always curious about learning new skills, tools, and concepts. I have worked with creative teams, 
                                which involves daily stand-ups and
                                communications,
                                source control, and project management.
                            </p>
                            <div class="mt-7 btns-container">
                                <v-btn class="custom-btn mr-5" :class="{ 'hovered': hireMeHover }"
                                    @mouseover="onHover('hireMe')" @mouseleave="onLeave('hireMe')" href="#contact"
                                    @click="handleClick">
                                    Hire Me
                                </v-btn>
                                <v-btn class="custom-outlined-btn mr-5" :class="{ 'hovered-outlined': downloadHover }"
                                    variant="outlined" @mouseover="onHover('download')" @mouseleave="onLeave('download')"
                                    @click="downloadCV">
                                    Download CV
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
  
<script>
import pdfFile from '@/assets/files/MuhammadAbdullahButt.pdf';
export default {
    name: 'AboutComponent',
    data() {
        return {
            hireMeHover: false,
            downloadHover: false
        };
    },
    methods: {
        onHover(button) {
            if (button === 'hireMe') {
                this.hireMeHover = true;
            } else if (button === 'download') {
                this.downloadHover = true;
            }
        },
        onLeave(button) {
            if (button === 'hireMe') {
                this.hireMeHover = false;
            } else if (button === 'download') {
                this.downloadHover = false;
            }
        },
        async downloadCV() {
            console.log('Download CV clicked');
            const response = await fetch(pdfFile);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'MuhammadAbdullahButt.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        }
    },
    created() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  },
  mounted() {
    this.$router.afterEach((to, from) => {
      if (to.hash) {
        const element = document.getElementById(to.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  },
};
</script>
  
<style scoped>
#aboutt {
    text-transform: uppercase;
}

#about_img {
    width: 38%;
    height: 347px;
    margin: auto;
    position: relative;
    z-index: 1;
}

#about__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/blob-shape.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 78%;
    z-index: 0;
}

.btns-container {
    display: flex;
    justify-content: space-between;
    width: 220px;
    /* adjust width as needed */
}

.btns-container v-btn {
    flex: 1;
}

.custom-btn {
    position: relative;
    background-color: #f37c49;
    color: white;
    z-index: 1;
    text-align: center;
    vertical-align: middle;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 1.5rem;
    border-radius: 0.3125rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    overflow: hidden;
    position: relative;
}

.hovered::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    color: #f37c49;
    background-color: black;
    z-index: -1;
    animation: slide 0.5s forwards;
}

@keyframes slide {
    0% {
        width: 0;
        right: 0;
    }

    100% {
        width: 100%;
        right: 0;
    }
}

.custom-btn:not(.hovered):before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    color: #f37c49;
    z-index: -1;
    animation: slide-back 0.5s forwards;
}

@keyframes slide-back {
    0% {
        width: 100%;
        left: 0;
    }

    100% {
        width: 0;
        left: 100%;
    }
}

.hovered {
    color: #f37c49;
}

.custom-outlined-btn {
    position: relative;
    z-index: 1;
    text-align: center;
    vertical-align: middle;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.5rem 1.5rem;
    border-radius: 0.3125rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    color: black;
    border: 2px solid black;
}

.hovered-outlined::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background-color: black;
    z-index: -1;
    animation: slideOutlined 0.5s forwards;
}

@keyframes slideOutlined {
    0% {
        width: 0;
        right: 0;
    }

    100% {
        width: 100%;
        right: 0;
    }
}

.custom-outlined-btn:not(.hovered-outlined):before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: -1;
    animation: slideBackOutlined 0.5s forwards;
}

@keyframes slideBackOutlined {
    0% {
        width: 100%;
        left: 0;
    }

    100% {
        width: 0;
        left: 100%;
    }
}

.hovered-outlined {
    color: white;
    border-color: black;
}

.about__text {
  color: black; /* Default color for the text in the 'About' section */
}

.dark-mode .about__text {
  color: white; /* Color for the text in the 'About' section when dark mode is turned off */
}
.dark-mode .custom-outlined-btn {
  color: white; /* Color for the outline button text when dark mode is turned off */
  border-color: white; /* Color for the outline button border when dark mode is turned off */
}
</style>