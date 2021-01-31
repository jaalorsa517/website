<template lang="pug">
	.card-document
		h3.card-title {{title}}
		.card-text  {{text}}
</template>

<script>
export default {
  name: "card-document",
  props: ["title", "text"],
};
</script>

<style lang="stylus" scoped>
.card-document
	min-width 350px
	padding 15px
	font-size 1.1rem
	background-color #EDF4F2
	border-top 5px solid #D32626
	border-radius 5px
	border-bottom-left-radius 15px
	border-bottom-right-radius 15px
	box-shadow 5px 5px 10px rgba(51, 63, 56, 0.5)
.card-title
	margin 10px
	font-size 2rem
	text-shadow 5px 5px 10px rgba(51, 63, 56, 0.3)
.card-text
	font-family inherit
	white-space pre-wrap
@media screen and  (max-width: 767px)
	.card-document
		margin 0 20px
		min-width 40vh
		font-size 0.7rem
	.card-title
		font-size 1rem
@media screen and (min-width: 768px) and (max-width: 1440px)
	.card-document
		font-size 1rem
</style>
