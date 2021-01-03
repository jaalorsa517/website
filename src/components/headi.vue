<template lang="pug">
  header.header
    img(:src="logo" alt='logo' class="logo")
    .title
      h2 Desarrollador
      h1 Jaime Alberto Ortiz Saldarriaga
    img(:src="photo" alt='photo' class="photo") 
</template>

<script>
import logo from "../assets/images/logo.png";
import photo from "../assets/images/perfil.jpg";

export default {
  name: "headi",
  data: function() {
    return {
      logo,
      photo,
    };
  },
};
</script>

<style lang="stylus" scoped>
shadow-text()
  text-shadow 5px 5px 10px rgba(51, 63, 56, 0.5)

shadow-box()
  box-shadow 5px 5px 10px rgba(51, 63, 56, 0.5)

avatar(size, radius)
  width size
  height size
  border-radius radius
  shadow-box()

.header
  height 200px
  min-height 200px
  width 100%
  display flex
  justify-content space-around
  align-items center
  background #79D70F
  box-shadow-box()
.title
  height 100%
  display flex
  flex-direction column
  justify-content center
  align-items center
  & h2
    font-size 3.5rem
    shadow-text()
  & h1
    font-size 4rem
    shadow-text()
.logo
  avatar(100px, 5px)

.photo
  avatar(200px,50%)

@media screen and  (max-width: 767px)
  .header
    flex-direction column
  .title
    & h2
      font-size 1rem
    & h1
      font-size 1.5rem
  .logo
    display absoulte
    position absolute
    left 0
    top 0
    avatar(50px, 5px)
  .photo
    avatar(100px, 50%)

@media screen and (min-width: 768px) and (max-width: 1280px)
  .title
    & h2
      font-size 1.5rem
    & h1
      font-size 2rem
  .logo
    display absoulte
    position absolute
    left 0
    top 0
    avatar(75px, 5px)
  .photo
    avatar(150px, 50%)
</style>
