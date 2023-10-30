<template>
  <v-container id="skills">
    <div style="padding: 6% 5%">
            <v-row>
                <v-col col="12" lg="6" md="12" sm="12" class="section-content">
                    <!-- skills text -->
                    <div class="skills__text">
                        <div class="text-box-inline">
                            <div id="skills-tools">
                                <span class="subtitle">my skills</span>
                            </div>
                            <h2>
                                What My Programming
                                <br />
                                Skills Included?
                            </h2>
                            <p>
                                I develop simple, intuitive and responsive user interface that helps users get things done
                                with less effort and time with those technologies.
                            </p>
                            <!-- switcher button -->
                            <v-switch v-model="isSwitchOn" hide-details color="orange-darken-3" inset
                                :label="switchLabel" />
                        </div>
                    </div>
                </v-col>
                <v-col col="12" lg="6" md="12" sm="12">
                    <v-row v-if="isSwitchOn">
                        <v-col cols="2" v-for="(icon, index) in skillsIcons" :key="index">
                            <div class="card-container" @click="showImage(index)" style="position: relative;">
                                <v-card id="skill-card" class="mx-auto" width="81" height="85">
                                    <v-img id="skill-img" :src="icon.image" height=""></v-img>
                                </v-card>
                                <span class="custom-tooltip">{{ icon.tooltip.text }}</span>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row v-else>
                        <v-col cols="2" v-for="(icon, index) in toolsIcons" :key="index">
                            <div class="card-container" @click="showImage(index)" style="position: relative;">
                                <v-card id="skill-card" class="mx-auto" width="81" height="85">
                                    <v-img :src="icon.image" height="60"></v-img>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
    </div>
  </v-container>
</template>

<script>
// All Images related Skills 
import skill1 from '@/assets/skills/html5.png';
import skill2 from '@/assets/skills/css3.png';
import skill3 from '@/assets/skills/js.png';
import skill4 from '@/assets/skills/jquery.png';
import skill5 from '@/assets/skills/bootstrap.png';
import skill6 from '@/assets/skills/wordpress.png';
import skill7 from '@/assets/skills/vue.png';
import skill8 from '@/assets/skills/react.png';
import skill9 from '@/assets/skills/shopify.png';
// All Images related Tools
import tool1 from '@/assets/tools/npm.png';
import tool2 from '@/assets/tools/adobe-xd.png';
import tool3 from '@/assets/tools/clickup.png';
import tool4 from '@/assets/tools/dreamweaver.png';
import tool5 from '@/assets/tools/git.png';
import tool6 from '@/assets/tools/photoshop.png';
import tool7 from '@/assets/tools/slack.png';
import tool8 from '@/assets/tools/vs-code.png';
import tool9 from '@/assets/tools/command.png';

export default {
    data() {
        return {
            isSwitchOn: true,
            selectedOption: 'skills',
            switchWidth: 120,
            toggleWidth: 60,
            skillsIcons: [
                { image: skill1, tooltip: { text: 'HTML 5' } },
                { image: skill2, tooltip: { text: 'CSS 3' } },
                { image: skill3, tooltip: { text: 'JavaScript' } },
                { image: skill4, tooltip: { text: 'jQuery' } },
                { image: skill5, tooltip: { text: 'Bootstrap' } },
                { image: skill6, tooltip: { text: 'Wordpress' } },
                { image: skill7, tooltip: { text: 'Vue JS' } },
                { image: skill8, tooltip: { text: 'React JS' } },
                { image: skill9, tooltip: { text: 'Shopify' } },
            ],

            toolsIcons: [
                { image: tool1, tooltip: { text: 'Npm' } },
                { image: tool2, tooltip: { text: 'Adobe XD' } },
                { image: tool3, tooltip: { text: 'Click UP' } },
                { image: tool4, tooltip: { text: 'Dreamweaver' } },
                { image: tool5, tooltip: { text: 'Git' } },
                { image: tool6, tooltip: { text: 'Photoshop' } },
                { image: tool7, tooltip: { text: 'Slack' } },
                { image: tool8, tooltip: { text: 'VS Code' } },
                { image: tool9, tooltip: { text: 'Command' } },
            ],
        };
    },
    computed: {
        togglePosition() {
            return this.selectedOption === 'skills' ? '0px' : `${this.switchWidth - this.toggleWidth}px`;
        },
        switchLabel() {
            return this.isSwitchOn ? 'My Skills' : 'My Tools';
        },
    },
    methods: {
        onSwitchChange() {
            if (this.selectedOption === 'skills') {
                console.log('Displaying skills');
            } else if (this.selectedOption === 'tools') {
                console.log('Displaying tools');
            }
        },
        showImage(index) {
            if (this.selectedOption === 'skills') {
                console.log('Displaying skill image at index', index);
            } else if (this.selectedOption === 'tools') {
                console.log('Displaying tool image at index', index);
            }
            if (!this.skillsIcons[index].tooltip || !this.skillsIcons[index].tooltip.text) {
                console.log('Tooltip text not available for this item');
            }
        },
    },
};
</script>

<style scoped>
.skills__text{
    position: relative;
}

div#skill-img {
    display: block !important;
    width: auto;
    margin: auto;
    padding-top: 16px;
}

.card-container {
    position: relative;
}

.card-container:hover #skill-card {
    border: none;
}

.custom-tooltip {
    visibility: hidden;
    width: 109px;
    background-color: #f37c49;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: -56px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
}

.custom-tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    /* Half the width of the triangle */
    border-width: 5px;
    border-style: solid;
    border-color: #f37c49 transparent transparent transparent;
}

.card-container:hover .custom-tooltip {
    visibility: visible;
    opacity: 1;
}

#skills-tools {
    position: absolute;
    left: -9%;
    top: 20%;
    transform: rotate(269deg);
    text-transform: uppercase;
    z-index: 2;
}

.custom-switch {
    display: flex;
    align-items: center;
    width: 200px;
    height: 40px;
    background-color: #e0e0e0;
    border-radius: 20px;
    position: relative;
}

.switch-option {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
}

.switch-option.active {
    border: 1px solid;
    color: white;
    background-color: #3f51b5;
}

.switcher-toggle {
    position: absolute;
    top: 2px;
    width: 60px;
    height: calc(100% - 4px);
    background-color: transparent;
    border-radius: 18px;
    transition: left 0.3s;
}
</style>
