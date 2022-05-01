<script setup>
import { ref } from 'vue'
import { projectMetaData } from "@/components/projects/projectMeta";
const data = ref(projectMetaData)

const props = defineProps({
  projectTitle: String,
  coverImg: String,
  projectComponent: Object,
  themeColor: String,
  id: String,
})

const currentProjectIndex = projectMetaData.findIndex( project => project.id === props.id)
// console.log(projectMetaData.length)
// console.log(data.value.length)
const prevProjectId = (currentProjectIndex > 0 ) ? data.value[currentProjectIndex-1].id : 'null'
const nextProjectId = (currentProjectIndex < data.value.length - 1 ) ? data.value[currentProjectIndex+1].id : 'null'
// console.log(prevProjectId, nextProjectId)

const items = ref([
  {
    text: 'Home',
    disabled: false,
    href: '../',
  },
  {
    text: 'Projects',
    disabled: false,
    href: '../',
  },
  {
    text: props.projectTitle,
    disabled: true,
    href: '#',
  },
])

</script>

<template>

  <v-card
  :color=" themeColor||'#E5ECF7'"
  rounded="0"
  elevation="0"
  >
    <v-container>
      <v-parallax 
      :src="coverImg || 'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
      height="400"
      scale="1"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-parallax>

    </v-container>
  </v-card>

  <v-card
  class="mx-auto"
  rounded="0"
  flat
  >
    <v-container class="pa-md-10 pa-sm-2 text-grey-darken-3">
      <v-row>
        <v-col cols="12" class="pa-10">
          <div>
            <v-breadcrumbs
              :items="items"
              large
            ></v-breadcrumbs>
          </div>

          <v-card-title class="text-h5">
            {{ projectTitle || 'Project Title'}}
          </v-card-title>
          
            <component :is="projectComponent" />
          
        </v-col>
      </v-row>
    </v-container>
  </v-card>


  <!-- <div>
    <h1>{{ projectTitle }}</h1>
    <component :is="projectComponent" />
  </div> -->

  <v-card
  class="mx-auto"
  rounded="0"
  flat
  >
    <v-card-actions class="justify-center">
      <router-link v-if="prevProjectId !== 'null'" :to="`/project/${prevProjectId}`" class="text-decoration-none">
        <v-btn
        :disabled=" prevProjectId == 'null' " 
        class="text-grey-darken-4"
        >
          <v-icon
            large
          >
            mdi-chevron-left
          </v-icon>
          prev - {{prevProjectId}}
        </v-btn>
      </router-link>
      <v-icon
        large
        class="ml-1"
      >
        mdi-circle-small
      </v-icon>
      <router-link v-if="nextProjectId !== 'null'" :to="`/project/${nextProjectId}`" class="text-decoration-none">
        <v-btn 
        :disabled=" nextProjectId == 'null' "
        class="text-grey-darken-4"
        >
          {{nextProjectId}} - next
          <v-icon
            large
          >
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>

</template>

<style lang="scss" scoped>

</style>