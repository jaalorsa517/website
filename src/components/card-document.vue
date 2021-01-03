<template lang="pug">
	.card-document
		.card-tittle {{title}}
		.card-text  {{text}}
</template>

<script>
export default {
  name: "card-document",
  props: ["title", "text"],
};
</script>

<style lang="stylus" scoped>
// .card-document
// 	max-width 400px
</style>
