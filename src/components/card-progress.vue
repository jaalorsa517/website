<template lang="pug">
  div
    h1 Esto es una prueba
    v-progress-linear(color="indigo" rounded value=75 height=10)
    //- v-progress-linear(color="red" value=100)
    v-progress-linear(
      color="cyan darken-2"
      rounded
      value="100")
</template>
