<template>
  <div id="main">
    <section-masthead />
    <section-advantages />
    <section-projects />
    <section-other />
  </div>
</template>

<script>
const Initer = require("~/plugins/initAnimations.client.js") 

export default {
  components: {
    sectionMasthead: async () =>
      import("~/components/section/section-masthead"),
    SectionAdvantages: async () =>
      import("~/components/section/section-advantages"),
    SectionOther: async () =>
      import("~/components/section/section-other"),
    SectionProjects: async () =>
      import("~/components/section/section-projects"),
  },
  layout: "main-layout",
  
  data() {
    return {
      Initer
    };
  },
 async mounted(){
  await Initer.initAll()
}
};
</script>

<style>
</style>