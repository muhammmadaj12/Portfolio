<template>
  <v-app :class="{ 'dark-mode': !darkMode }" :style="computedAppStyle" id="inspire">
    <div style="width: 98%;">
      <v-container>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="left-section">
          <h2><a href="#">Abdullah <span style="color: orangered;">.</span></a></h2>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="center-section d-md-flex justify-content-md-center">
            <a href="#home">Home .</a>

            <a href="#about" @click="scrollToAbout">About .</a>

            <a href="#skills" @click="scrollToSkills">Skills .</a>

            <a href="#portfolio" @click="scrollToPortfolio">Portfolio .</a>

            <a href="#contact" @click="scrollToContact">Contact .</a>

          </div>
          <div class="right-section">
            <v-switch v-model="darkMode" hide-details inset :color="switchColor"></v-switch>
          </div>
        </div>
      </nav>

    </v-container>
    </div>

    <router-view />
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue';

const darkMode = ref(true);

const computedAppStyle = computed(() => {
  return {
    backgroundColor: darkMode.value ? '#E6E6E6' : '#000',
  };
});

const scrollToAbout = () => {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToPortfolio = () => {
  const portfolioSection = document.getElementById('portfolio');
  if (portfolioSection) {
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToSkills = () => {
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    skillsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const computedHeaderStyle = computed(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: darkMode.value ? '#E6E6E6' : '#000',
  };
});

const computedMainStyle = computed(() => {
  return {
    backgroundColor: darkMode.value ? '#E6E6E6' : '#000',
    color: darkMode.value ? 'black' : 'white',
    height: '100vh',
  };
});

const switchColor = computed(() => {
  return darkMode.value ? 'orange darken-3' : 'white';
});

</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: white;
  position: sticky;
  /* Make the header sticky */
  top: 0;
  /* Stick it to the top of the viewport */
  z-index: 1000;
  /* This is optional, it ensures that the header is displayed on top of other content */
}

.logo {
  max-height: 40px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: white;
}

.dark-mode .header {
  color: white;
}


.left-section h2 a {
  text-decoration: none;
  color: black;
  font-family: 'Saira Stencil One', sans-serif !important;
  font-weight: 500;
  font-size: 30px;
}

/* .right-section {
  display: flex;
  align-items: center;
} */

.center-section {
  flex: 1;
  display: flex;
  justify-content: center;
}

.center-section a {
  text-decoration: none;
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  margin-right: 41px;
}

.dark-mode .left-section h2 a {
  color: white;
}
.dark-mode .center-section a {
  color: white; /* Change the color to white for dark mode */
}
</style>