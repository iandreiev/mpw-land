<template>
  <div id="app" class="page">
      <header-regular />
      <main class="main">
          <nuxt />
      </main>
      <footer-regular />
  </div>
</template>

<script>
// import  "~/plugins/initAnimations.client.js"

export default {
  components: { 
      headerRegular: async () => import('~/components/header/header-regular'),
      footerRegular: async () => import('~/components/footer/footer-regular'),
       },
    name: 'main-layout',
    head(){
        return{
            titleTemplate: '%s | Monopoly Life',
        }
    },
    data(){
        return{
        }
    },
    async mounted(){
        await this.$store.dispatch('projects/GET_PROJECTS')
        await this.$store.dispatch('categories/GET_CATEGORIES')
    }

}
</script>

<style>

</style>