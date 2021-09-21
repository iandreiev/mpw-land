<template>
  <div class="grid__item">
    <div class="project-card" @click="routerPass">
      <div class="project-card__image">
        <img :src="i.image" alt="" />
      </div>

      <div class="project-card__profile">{{ category[0].title }}</div>

      <div class="project-card__place">
        <span class="icon">
          <svg width="12" height="17">
            <use href="~/assets/img/new/sprite.svg#location"></use>
          </svg>
        </span>
        <span>{{ i.location }}</span>
      </div>

      <div class="project-card__title">{{ i.title }}</div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  props: {
    i: {
      type: Object,
      default: undefined,
    },
  },
  computed: {
      ...mapState('categories', ['categories']),
    category() {
      return this.categories.filter((category) => category.id === this.i.category);
    },
  },
  methods:{
      routerPass(){
          this.$router.push({name: 'ProjectItem', params:{id: this.i.id}})
      }
  },
};
</script>

<style>
</style>