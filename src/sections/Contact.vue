<template>
  <transition name="fade">
    <v-container id="contact" v-if="showComponent" class="fade-container">
   <div class="contact__text">
     <div class="text-box-inline">
       <span class="subtitle" style="top: 5px; opacity: 1; visibility: inherit">contact</span>
       <h2 style="transform: none; opacity: 1; visibility: inherit">
         Have You Any Project?
         <br />
         Please Drop a Message
       </h2>
       <p style="transform: none; opacity: 1; visibility: inherit">
         Get in touch and let me know how I can help. Fill out the form and
         I'll be in touch as soon as possible.
       </p>
     </div>

     <!-- contact info -->
     <v-list class="contact__info" style="margin-top: 3.125rem">
       <v-list-item-group v-for="(item, index) in contactInfo" :key="index">
         <v-list-item class="mb-5">
           <v-list-item-content>
             <div class="d-flex">
               <v-icon>{{ item.icon }}</v-icon>
               <v-list-item-title class="ml-3">
                 <strong>{{ item.title }}</strong> <br />
                 {{ item.content }}
               </v-list-item-title>
             </div>
           </v-list-item-content>
         </v-list-item>
       </v-list-item-group>
     </v-list>

     <!-- social links -->
     <div id="social-icons">
       <div v-for="(socialItem, socialIndex) in socialLinks" :key="socialIndex">
         <v-list-item>
           <v-list-item-content class="d-flex">
             <div class="custom-tooltip" style="position: relative; overflow: visible;">
               <a id="socails" :href="socialItem.link" target="_blank" rel="noreferrer">
                 <div class="social-bg">
                   <v-icon style="font-size: 2rem; color: #fff !important; margin-left: 8px;" class="mr-2">{{
                     socialItem.icon }}</v-icon>
                 </div>
               </a>
               <span class="tooltip-text">{{ socialItem.text }}</span>
             </div>
           </v-list-item-content>
         </v-list-item>
       </div>

     </div>
   </div>
 </v-container>
</transition>
</template>

<script>
export default {
 data() {
   return {
     contactInfo: [
       {
         title: "Address:",
         content: "PGECHS phase-1, near Township, Lahore",
         icon: "mdi-map-marker",
       },
       {
         title: "Phone:",
         content: "(+92) 311-0405246",
         icon: "mdi-phone",
       },
       {
         title: "Email:",
         content: "buttgreat543@gmail.com",
         icon: "mdi-email",
       },
     ],
     socialLinks: [
       { link: "https://www.google.com/", icon: "mdi-facebook" },
       { link: "#", icon: "mdi-twitter" },
       { link: "#", icon: "mdi-linkedin" },
       { link: "#", icon: "mdi-youtube" },
     ],
     showComponent: false,
   };
 },
 mounted() {
    this.showComponent = true;
    // You can add more logic here for when the component is mounted
    console.log('Component is mounted');
  },
  beforeDestroy() {
    this.showComponent = false;
    // You can add more logic here for before the component is destroyed
    console.log('Component is about to be destroyed');
  },
  methods: {
    // Example method to handle user interactions
    handleUserInteraction(action) {
      if (action === 'enter') {
        console.log('User entered the contact component');
        // Add your logic for when the user enters the component
      } else if (action === 'leave') {
        console.log('User left the contact component');
        // Add your logic for when the user leaves the component
      }
    },
  },
};
</script>

<style scoped>
#socails {
 text-decoration: none !important;
}

#social-icons {
 display: flex !important;
}


.social-bg {
 background-color: black;
 width: 40px;
 height: 40px;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
}

.social-bg:hover {
 background-color: orange;
}

.custom-tooltip:hover .tooltip-text {
 visibility: visible;
 opacity: 1;
}

.fade-container {
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s; /* Adjust the duration as needed */
}

.fade-enter,
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.contact__info{
  background-color: transparent !important;
}
</style>
