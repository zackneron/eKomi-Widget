<template>
  <v-app>
    <MainWidget />
    <Review />
  </v-app>
</template>

<script>
import MainWidget from '@/components/main-widget'
import Review from '@/components/Review'
export default {
  components: { MainWidget, Review},
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
</style>
