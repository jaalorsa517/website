<script setup lang="ts">
import { useRegisterSW } from "virtual:pwa-register/vue";

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();

const close = async () => {
  offlineReady.value = false;
  needRefresh.value = false;
};
</script>

<template>
  <div class="promptSW" v-if="offlineReady || needRefresh">
    <div class="promptSW__message">
      <span v-if="offlineReady">Contenido disponible sin conexión.</span>
      <span v-else>Nuevo contenido disponible.</span>
    </div>
    <div class="promptSW__buttons">
      <button class="promptSW__button" v-if="needRefresh" @click="updateServiceWorker()">Recargar</button>
      <button class="promptSW__button" v-else @click="close">Cerrar</button>
    </div>
  </div>
</template>

<style lang="scss">
.promptSW {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 1;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
  background-color: var(--color-white);
  &__message {
    max-width: 250px;
    margin-bottom: 8px;
    text-align: center;
  }
  &__buttons {
    display: flex;
    justify-content: center;
  }
  &__button {
    border: 1px solid #8885;
    outline: none;
    margin-right: 5px;
    border-radius: 2px;
    padding: 3px 10px;
  }
}
</style>
