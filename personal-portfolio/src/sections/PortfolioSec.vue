<template>
  <v-container id="portfolio">
    <v-list id="portfolio-list" class="overflow-hidden">
      <div class="d-flex justify-space-between">
        <v-list-item id="content-item" style="flex-basis: 45%">
          <v-list-item-content>
            <span
              class="subtitle"
              style="top: 5px; opacity: 1; visibility: inherit"
              >my works</span
            >
            <h2
              style="
                translate: none;
                rotate: none;
                scale: none;
                transform: translate(0px, 0px);
                opacity: 1;
                visibility: inherit;
              "
            >
              See My Works Which
              <br />
              Will Amaze You!
            </h2>
            <p
              style="
                translate: none;
                rotate: none;
                scale: none;
                transform: translate(0px, 0px);
                opacity: 1;
                visibility: inherit;
              "
            >
              We develop the best quality website that serves for the long-term.
              Well-documented, clean, easy and elegant interface helps any
              non-technical clients.
            </p>
            <v-tabs v-model="activeTab">
              <v-tab
                v-for="(item, index) in tabs"
                :key="index"
                @click="changeTabContent(index)"
              >
                {{ item.title }}
              </v-tab>
            </v-tabs>
          </v-list-item-content>
        </v-list-item>
        <v-list-item style="flex-basis: 50%">
          <v-list-item-content>
            <v-row>
              <v-col
                class="text-end"
                v-for="(item, index) in portfolioItems.slice(0, 1)"
                :key="index"
                cols="12"
              >
                <div class="custom-hover">
                  <div class="image-container">
                    <img
                      :src="item.image"
                      alt="Portfolio Image"
                      class="portfolio-image"
                    />
                    <div class="hover-content">
                      <div class="title">{{ item.title }}</div>
                      <div class="date">{{ item.date }}</div>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </div>
      <v-divider class="my-3"></v-divider>
      <div class="py-3">
        <v-row>
          <v-col
            v-for="(item, index) in portfolioItems.slice(1)"
            :key="index"
            cols="6"
          >
            <div class="custom-hover1">
              <div class="image-container1">
                <div id="v-image">
                  <v-img
                    :src="item.image"
                    alt="Portfolio Image"
                    class="portfolio-image1"
                  />
                </div>
                <div class="hover-content1">
                  <div class="title">{{ item.title }}</div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-list>
  </v-container>
</template>

<script>
// HTML 5 Projects
import image1 from "@/assets/portfoliopics/Html/ph1.png";
import image2 from "@/assets/portfoliopics/Html/ph2.png";
import image3 from "@/assets/portfoliopics/Html/ph3.png";
import image4 from "@/assets/portfoliopics/Html/ph4.png";
import image5 from "@/assets/portfoliopics/Html/ph5.png";
// CSS Projects
import imageCss1 from "@/assets/portfoliopics/HTML & CSS/p1.png";
import imageCss2 from "@/assets/portfoliopics/HTML & CSS/p2.png";
import imageCss3 from "@/assets/portfoliopics/HTML & CSS/p3.png";
import imageCss4 from "@/assets/portfoliopics/HTML & CSS/p4.png";
// Javascript Projects
import imageJs1 from "@/assets/portfoliopics/JS/pj1.png";
import imageJs2 from "@/assets/portfoliopics/JS/p2.png";
import imageJs3 from "@/assets/portfoliopics/JS/pj5.png";
// jQuery Projects
import imageJq1 from "@/assets/portfoliopics/Jquery/jq.png";
import imageJq2 from "@/assets/portfoliopics/Jquery/jq1.png";
import imageJq3 from "@/assets/portfoliopics/Jquery/pj3.png";
import imageJq4 from "@/assets/portfoliopics/Jquery/pj4.png";
// Bootstrap Projects
import imagebt1 from "@/assets/portfoliopics/Bootstrap/boots1.png";
import imagebt2 from "@/assets/portfoliopics/Bootstrap/boots2.png";
// Wordpress Projects
import imageWp1 from "@/assets/portfoliopics/Wordpress/site1.png";
import imageWp2 from "@/assets/portfoliopics/Wordpress/site3.png";
import imageWp3 from "@/assets/portfoliopics/Wordpress/site4.png";
import imageWp4 from "@/assets/portfoliopics/Wordpress/site5.png";
import imageWp5 from "@/assets/portfoliopics/Wordpress/sit6.png";
// Vue Projects
import imageVu1 from "@/assets/portfoliopics/Vuejs/pv1.png";
import imageVu2 from "@/assets/portfoliopics/Vuejs/pv2.png";
import imageVu3 from "@/assets/portfoliopics/Vuejs/pv3.png";
import imageVu4 from "@/assets/portfoliopics/Vuejs/pv4.png";
import imageVu5 from "@/assets/portfoliopics/Vuejs/pv5.png";
export default {
  data() {
    return {
      tab: null,
      activeTab: 0,
      tabs: [
        { title: "All" },
        { title: "Html" },
        { title: "CSS" },
        { title: "Javascript" },
        { title: "jQuery" },
        { title: "Bootstrap" },
        { title: "Wordpress" },
        { title: "Vue Js" },
        { title: "React JS" },
      ],
      items: [
        // Tab 1 : All Tabs
        { id: 1, title: "Html Population Table", image: image1 },
        { id: 1, title: "CSS 2Degree", image: imageCss1 },
        { id: 1, title: "JS Puzzle Game", image: imageJs2 },
        { id: 1, title: "JQ Toggle Slider", image: imageJq4 },
        { id: 1, title: "Bootstrap Ecommerce", image: imagebt2 },
        { id: 1, title: "WP The Educationist", image: imageWp1 },
        { id: 1, title: "Vue Ecommerce App1", image: imageVu3 },
        // Tab 2 : HTML
        { id: 2, title: "Html Population Table", image: image1 },
        { id: 2, title: "Html Cars Branding", image: image2 },
        { id: 2, title: "Html Services", image: image3 },
        { id: 2, title: "Html Exciting Website", image: image5 },
        { id: 2, title: "Html Details of Students", image: image4 },
        // Tab 3 : CSS
        { id: 3, title: "CSS 2Degree", image: imageCss1 },
        { id: 3, title: "CSS Italian Brand", image: imageCss2 },
        { id: 3, title: "CSS Online-Shop", image: imageCss3 },
        { id: 3, title: "CSS Meteor Bloggers", image: imageCss4 },
        // Tab 4 : Javascript
        { id: 4, title: "JS Coffee-Shop Calculator", image: imageJs1 },
        { id: 4, title: "JS Puzzle Game", image: imageJs2 },
        { id: 4, title: "JS Addition Calculator", image: imageJs3 },
        // Tab 5 : Jquery
        { id: 5, title: "JQ Toggle Slider", image: imageJq4 },
        { id: 5, title: "JQ E-commerce", image: imageJq2 },
        { id: 5, title: "JQ Automatic Slider", image: imageJq3 },
        { id: 5, title: "JQ Toggler", image: imageJq1 },
        // Tab 6 : Bootstrap
        { id: 6, title: "Bootstrap CV", image: imagebt1 },
        { id: 6, title: "Bootstrap Ecommerce", image: imagebt2 },
        // Tab 7 : Wordpress
        { id: 7, title: "WP The Educationist", image: imageWp1 },
        { id: 7, title: "WP 2 Degree", image: imageWp2 },
        { id: 7, title: "WP Virtua", image: imageWp3 },
        { id: 7, title: "WP Medical Scribe", image: imageWp4 },
        { id: 7, title: "WP Fahrenheit Halal", image: imageWp5 },
        // Tab 8 : Vue JS
        { id: 8, title: "Vue Insight CRM", image: imageVu1 },
        { id: 8, title: "Vue Department CRM", image: imageVu2 },
        { id: 8, title: "Vue Ecommerce App1", image: imageVu3 },
        { id: 8, title: "Vue Form Builder", image: imageVu4 },
        { id: 8, title: "Vue OLX Ecommerce", image: imageVu5 },
        // Tab 9 : React JS
        { id: 9, title: "React Ecommerce", image: imageWp5 },
      ],
      portfolioItems: [],
    };
  },
  created() {
    this.filterPortfolioItems();
  },
  methods: {
    changeTabContent(index) {
      this.activeTab = index;
      this.filterPortfolioItems();
    },
    filterPortfolioItems() {
      // Filter items based on the active tab
      const filteredItems = this.items.filter((item) => {
        // Add condition based on the activeTab to filter the items
        return item.id === this.activeTab + 1; // Adjust the condition based on your data
      });
      this.portfolioItems = filteredItems;
    },
  },
};
</script>

<style scoped>

#portfolio #portfolio-list {
  background: transparent !important;
}

.custom-hover {
  position: relative;
  width: 100%;
}

.custom-hover1 {
  position: relative;
  width: 100%;
}

.image-container {
  position: relative;
}

.image-container1 {
  position: relative;
}

.image-container .portfolio-image {
  width: 100%;
  height: auto;
}

.image-container1 .portfolio-image1 {
  width: 100%;
  height: auto;
}

.hover-content {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 99.3%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  padding: 10px;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 0.3s;
  animation-duration: 0.3s;
}

.hover-content1 {
  position: absolute;
  bottom: 7px;
  left: 0;
  width: 99.2%;
  margin-left: 3px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  padding: 10px;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 0.3s;
  animation-duration: 0.3s;
}

.custom-hover:hover .hover-content,
.custom-hover1:hover .hover-content1 {
  opacity: 1;
  animation: slideUp 0.3s forwards;
}

.custom-hover:not(:hover) .hover-content,
.custom-hover1:not(:hover) .hover-content1 {
  animation: slideDown 0.3s forwards;
}

@keyframes slideUp {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes slideDown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}

.title {
  font-size: 1.2em;
}

.date {
  font-size: 1em;
}
</style>
