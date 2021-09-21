<template>
  <section id="project" class="scene scene--large project">
       <div class="grid">
          <div class="grid__item">
            <div class="scene__title">
              <h2>Наши проекты</h2>
            </div>
          </div>
        </div>
        
    <div class="grid grid--triple">
        <project-card v-for="(i,index) in sliced" :key="index" :i="i" />
    </div>
  </section>
</template>

<script>
import projectCard from '../card/project-card.vue';
import {mapState} from "vuex"

export default {
  components: { projectCard },
  computed:{
      ...mapState('projects', ['sliced']),
  }
  }
</script>

<style>
</style>