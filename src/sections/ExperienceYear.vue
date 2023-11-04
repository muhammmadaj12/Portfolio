<template style="background-color: wheat;">
   <v-container>
    <v-row>
        <v-col class="order-lg-0 order-md-1 order-sm-1" cols="12" lg="6" md="12" sm="12">
            <div style="position: relative;">

                <div style="padding: 5% 2%;">
                   <div class="card-width">
                    <v-row class="custom-timeline-row">
                        <v-col v-for="(item, index) in timelineItems" :key="index" cols="12" lg="3" md="4" sm="6">
                            <div class="card-container">
                                <div id="inner-card">
                                    <v-card id="skill-card" style="background-position: left; background-repeat: no-repeat;"
                                    :style="{ backgroundImage: 'url(' + item.icon + ')', backgroundSize: '36%' }"
                                    class="rounded-xl">
                                    <v-list-item style="padding: 4px 0 !important; ">
                                        <v-list-item-content>
                                            <h4 class="custom-list-content">{{ item.title }}</h4>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-card>
                                <div class="custom-tooltip">{{ item.tooltipText }}</div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                   </div>
                </div>
            </div>
        </v-col>
        <v-col class="order-lg-1 order-md-0 order-sm-0" cols="12" lg="6" md="12" sm="12">
            <div style="padding: 6% 0;" class="text-box-inline">
                <span id="skills-tools" class="text-capitalize">experience</span>
                <h2
                    style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1; visibility: inherit;">
                    1+ Year of Experience
                </h2>
                <p
                    style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1; visibility: inherit;">
                    I have been developing sites and apps for 1 year and i know for sure the main trends and directions of
                    modern design, I have been a visionary and a reliable front-end developer. You will get a decent result as you expect.</p>
            </div>
        </v-col>

    </v-row>
   </v-container>
</template>
  
<script>
import date1 from '@/assets/numbers/1.png';
import date2 from '@/assets/numbers/2.png';
import date3 from '@/assets/numbers/3.png';
import date4 from '@/assets/numbers/4.png';
import date5 from '@/assets/numbers/5.png';
import date6 from '@/assets/numbers/6.png';
import date7 from '@/assets/numbers/7.png';
import date8 from '@/assets/numbers/8.png';
import date9 from '@/assets/numbers/9.png';
export default {
    data() {
        return {
            timelineItems: [
                { title: 'Feb', icon: date1, tooltipText: "Wordpress" },
                { title: 'Mar', icon: date2, tooltipText: "Psd's Converts" },
                { title: 'April', icon: date3, tooltipText: "Wp-Custom Work" },
                { title: 'May', icon: date4, tooltipText: "Hubspot" },
                { title: 'June', icon: date5, tooltipText: "React JS" },
                { title: 'July', icon: date6, tooltipText: "Shopify Stores" },
                { title: 'Aug', icon: date7, tooltipText: "Start Work with VueJS" },
                { title: 'Sept', icon: date8, tooltipText: "Vue JS" },
                { title: 'Oct', icon: date9, tooltipText: "Vue JS" }
            ]
        };
    }
};
</script>
  
<style scoped>
.custom-list-content {
    padding-left: 42%;
}

.text-box-inline {
    position: relative;
}

.custom-timeline-row {
    display: flex;
    justify-content: center;
}

#skills-tools {
    text-transform: uppercase;
}

.custom-timeline-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    position: relative;
}

.custom-timeline-info {
    text-align: center;
    width: 120px;
}

.experience__timePath {
    position: absolute;
    top: 0;
    height: 100%;
    display: grid;
    align-content: center;
}

.experience__timePath .line {
    display: block;
    width: 100%;
    margin: auto;
    border-top: 1px solid whitesmoke;
}

.experience__timePath .semicircle {
    display: block;
    height: 82px;
    width: 531px;
    margin-top: -13px;
    margin-left: 23px;
    background-color: whitesmoke;
}

#icon-img {
    position: absolute;
    left: -2px;
    top: -3px;
    width: 60px;
    height: 60px;
}

.icon-column {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.description-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#exp-cards-img {
    flex-basis: 20%;
}

#exp-cards-decrip {
    flex-basis: 80%;
}

.card-container {
    position: relative;
}

#skill-card{
    cursor: pointer;
}

.card-container:hover #skill-card {
    border: none;
}

.custom-tooltip {
    visibility: hidden;
    width: 170px;
    background-color: #f37c49;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 3;
    top: -48px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
}

.custom-tooltip::after {
    content: "";
    position: absolute;
    bottom: -71%;
    left: 50%;
    margin-left: -5px;
    border-width: 12px;
    border-style: solid;
    border-color: #f37c49 transparent transparent transparent;
}

.card-container:hover .custom-tooltip {
    visibility: visible;
    opacity: 1;
}

</style>
  
  