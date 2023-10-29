<template>
  <v-container>
      <v-row>
        <v-col v-for="(item, index) in statsItems" :key="index">
          <v-hover v-slot:default="{ hover }">
            <v-fade-transition>
              <v-card style="padding: 6% 8%;"
                v-if="isComponentVisible"
                class="ma-3 position-relative"
                :class="{ 'elevated': hover || hoveredIndex === index }"
                :style="{ transition: 'transform 0.3s, opacity 0.3s', transform: (hover || hoveredIndex === index) ? 'translateY(-10px)' : 'translateY(0)', opacity: isVisible[index] ? 1 : 0 }"
                @mouseover="handleMouseOver(index)"
                @mouseleave="handleMouseLeave(index)"
              >
                <div class="d-flex align-center">
                  <v-avatar size="40" :color="item.backgroundColor" class="mr-2">
                    <v-icon dark>{{ item.icon }}</v-icon>
                  </v-avatar>
                  <div>
                    <v-card-title class="text-center">{{ item.title }}</v-card-title>
                    <v-card-text class="text-center">
                      <h3>{{ item.number }}</h3>
                    </v-card-text>
                  </div>
                </div>
                <v-card-actions
                  class="position-absolute"
                  style="right: 0; top: 50%; transform: translateY(-50%)"
                >
                  <v-icon class="mr-2" color="grey darken-1">mdi-chevron-right</v-icon>
                </v-card-actions>
              </v-card>
            </v-fade-transition>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onBeforeUnmount, onMounted } from 'vue';
  
  const hoveredIndex = ref(-1);
  const isComponentVisible = ref(false);
  const isVisible = ref([false, false, false]);
  
  const statsItems = [
    {
      icon: 'mdi-account',
      title: 'Years of Experience',
      number: '12+',
      backgroundColor: 'primary',
    },
    {
      icon: 'mdi-check',
      title: 'Completed Projects',
      number: '230+',
      backgroundColor: 'success',
    },
    {
      icon: 'mdi-emoticon-happy',
      title: 'Happy Clients',
      number: '95+',
      backgroundColor: 'info',
    },
  ];
  
  const handleMouseOver = (index) => {
    hoveredIndex.value = index;
  };
  
  const handleMouseLeave = (index) => {
    hoveredIndex.value = -1;
  };
  
  const fadeIn = () => {
    isComponentVisible.value = true;
    isVisible.value = isVisible.value.map((_, index) => false);
    isVisible.value.forEach((_, index) => {
      setTimeout(() => {
        isVisible.value.splice(index, 1, true);
      }, index * 200);
    });
  };
  
  const fadeOut = () => {
    isVisible.value.forEach((_, index) => {
      setTimeout(() => {
        isVisible.value.splice(isVisible.value.length - 1 - index, 1, false);
      }, index * 200);
    });
    setTimeout(() => {
      isComponentVisible.value = false;
    }, isVisible.value.length * 200);
  };
  
  onBeforeUnmount(() => {
    fadeOut();
  });
  
  onMounted(() => {
    fadeIn();
  });
  </script>
  
  <style scoped>
  .elevated {
    transform: translateY(-10px);
    transition: transform 0.3s, opacity 0.3s;
  }
  </style>
  