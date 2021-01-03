<template lang="pug">
  div
    h1 Esto es una prueba
    k-progress(percent='75')
</template>

<script>
//https://vuejsexamples.com/a-vue-linear-progress-bar/
import KProgress from "k-progress";

export default {
  name: "card-progress",
  components: {
    "k-progress": KProgress,
  },
};
</script>
