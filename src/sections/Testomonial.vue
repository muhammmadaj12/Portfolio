<template>
    <v-container>
      <div class="section-title">
      <span class="subtitle" style="top: auto; opacity: 1; visibility: inherit"
        >testimonials</span
      >
      <h2
        class="title"
        style="
          translate: none;
          rotate: none;
          scale: none;
          transform: translate(0px, 0px);
          opacity: 1;
          visibility: inherit;
        "
      >
        Check What's My Clients
        <br />
        Say About Me
      </h2>
    </div>
        <v-carousel hide-delimiters show-arrows="hover" >
          <v-carousel-item v-for="(testimonial, index) in testimonials" :key="index">
            <div style="position: relative; width: 100%; margin-top: -42px;">
              <div id="testomonial-icon">
                <div class="circle">
                  <v-icon class="icon">mdi-format-quote-open</v-icon>
                </div>
              </div>
              <v-card class="snip1533">
                <div class="pt-9 pb-5">
                  <v-card-text>
                    <p style="font-size: 23px; line-height: 1.1em;" class="quote py-3">{{ testimonial.text }}</p>
                    <h3 style="font-size: 22px;" class="py-1">{{ testimonial.name }}</h3>
                    <h4 style="font-size: 21px;">{{ testimonial.company }}</h4>
                  </v-card-text>
                </div>
              </v-card>
            </div>
          </v-carousel-item>
        </v-carousel>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Sample',
    data() {
      return {
        testimonials: [
          {
            text: "Abdullah's frontend development skills are top-notch. He has a keen eye for design and a deep understanding of user experience principles, which reflects in the intuitive and visually appealing interfaces he creates. His clean code and commitment to best practices make him a valuable asset for any project.",
            name: 'Jane Smith',
            company: 'Digital Innovations Inc.'
          },
          {
            text: "Working with Abdullah has been a pleasure. His strong command of HTML, CSS, and JavaScript has allowed our team to create stunning and seamless web experiences. Abdullah's dedication to staying updated with the latest frontend technologies and his collaborative approach make him an indispensable team member.",
            name: 'Michael Johnson',
            company: 'WebTech Solutions'
          },
          {
            text: "Abdullah's ability to transform complex designs into fully functional and responsive websites is remarkable. His proficiency in various frontend frameworks and libraries, coupled with his effective communication skills, makes him an ideal collaborator. Abdullah's passion for creating elegant and efficient user interfaces is evident in every project he undertakes.",
            name: 'Sarah Williams',
            company: 'TechWorks Co.'
          },
          {
            text: "Abdullah's expertise in frontend development is unparalleled. His ability to translate complex ideas into user-friendly interfaces sets him apart. His strong problem-solving skills and dedication to delivering high-quality results make him a valuable asset to any development team. Working with Abdullah is always a seamless and productive experience.",
            name: 'Christopher Lee',
            company: 'Digital Ventures Ltd.'
          },
          {
            text: "I have had the pleasure of collaborating with Abdullah on several frontend projects. His meticulous approach to coding and his passion for creating elegant and functional designs are truly impressive. Abdullah's in-depth understanding of responsive design principles and his proficiency in various frontend technologies make him an excellent choice for any development endeavor.",
            name: 'Emily Brown',
            company: 'Innovative Web Solutions'
          }
  
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .section-title {
  text-align: center;
  margin-bottom: 3.75rem;
}

.section-title .subtitle {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
}
.section .section-title .title {
  font-size: 2rem;
  line-height: 2.6rem;
}
  div#testomonial-icon {
    position: absolute;
    top: 20%;
    left: 47%;
    z-index: 9;
  }
  
  .icon {
    color: #d2652d;
    font-size: 32px;
  }
  
  .circle {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: -30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  }
  
  .snip1533 {
    color: #9e9e9e;
    display: inline-block;
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 16px;
    margin-left: 14%;
    margin-top: 7%;
    max-width: 100%;
    min-width: 226px;
    text-align: center;
    width: 71%;
    height: 364px;
    background-color: #ffffff;
    border-radius: 5px;
    border-top: 5px solid #d2652d;
  }
  </style>
  