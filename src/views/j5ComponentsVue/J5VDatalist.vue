<script setup lang="ts">
import { computed, reactive, watch, ref, inject } from "vue";
import { J5VDatalist } from "@jaalorsa/j5-components-vue"
import ArrowBack from "@/components/global/ArrowBack.vue";
import { RoutesName } from "@/assets/resources/language";
import { ViewLibComponentsVue } from "@/assets/resources/language/index.js";
import { IConverter } from "@/shared/models/interfaces/IConverter";
import { ConverterServiceInject } from "@/shared/constants/injectsKey";

const convertService = inject<IConverter>(ConverterServiceInject) as IConverter

const ROUTE_INITIAL = RoutesName.componentsIntroVue;
const titles = computed(() => ViewLibComponentsVue.datalist.titles);
const description = computed(() => convertService.convertStringJ5(ViewLibComponentsVue.datalist.description));
const props = computed(() => ViewLibComponentsVue.datalist.props);
const events = computed(() => ViewLibComponentsVue.datalist.events);
const styles = computed(() => ViewLibComponentsVue.datalist.styles);

const inputValue = ref("inicial")
const inputValue3 = ref("")

const options = reactive<string[]>([])
const selecteds = reactive<string[]>([])

const options2 = reactive<string[]>([])
const selecteds2 = reactive<string[]>([])

const options3 = reactive<string[]>(["Option 1", "Option 2", "Option 3"])
const selecteds3 = reactive<string[]>([])

function setOption(value: string) {
  options.push(`Option ${value}`)
}

watch(inputValue, (value) => {
  if (!value) {
    return
  }
  options2.push(`Option ${value}`)
})

watch(inputValue3, (value) => {
  if (!value) {
    return
  }
  options3.push(`Option ${value}`)
})

function onItemSelected(evt: any) {
  const value = evt.textContent
  selecteds2.push(value)
}

</script>

<template>
  <section class="j5v-components-datalist">
    <ArrowBack :route-name="ROUTE_INITIAL" />
    <section class="j5v-components-datalist__section j5v-components-datalist__section--summary section">
      <h1 class="j5v-components-datalist__title title">{{ titles.title }}</h1>
      <div class="j5v-components-datalist__container j5v-components-datalist__container--demo container">
        <div class="datalist__container">
          <h3>Datalist default</h3>
          <J5VDatalist :hasIcon="false" :options="options" @inputValue="setOption"
            @itemSelected="selecteds.push($event)" />
          <div>
            <p>Texto seleccionado {{ selecteds }}</p>
          </div>
        </div>
        <div class="datalist__container">
          <h3>Datalist default y v-model</h3>
          <J5VDatalist :hasIcon="true" :options="options3" v-model="inputValue3"
            @itemSelected="selecteds3.push($event)" />
          <div>
            <p>Texto seleccionado {{ selecteds3 }}</p>
          </div>
        </div>
        <div class="datalist__container">
          <h3>Datalist with slot</h3>
          <J5VDatalist :hasIcon="true" v-model="inputValue" @itemSelected="onItemSelected">
            <li class="datalist__item" v-for="option, index in options2" :key="index">
              <span>{{ index }}</span>
              <span>{{ option }}</span>
            </li>
          </J5VDatalist>
          <div>
            <p>Texto seleccionado {{ selecteds2 }}</p>
          </div>
        </div>
      </div>
    </section>
    <Separate></Separate>
    <section class="j5v-components-datalist__section j5v-components-datalist__section--summary section">
      <h2 class="j5v-components-datalist__title subtitle">{{ titles.description }}</h2>
      <div class="j5v-components-datalist__container j5v-components-datalist__container--description container"
        v-html="description"></div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5v-components-datalist__section j5v-components-datalist__section--summary section">
      <h2 class="j5v-components-datalist__title subtitle">{{ titles.props }}</h2>
      <div class="j5v-components-datalist__container j5v-components-datalist__container--description container"
        v-html="props">
      </div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5v-components-datalist__section j5v-components-datalist__section--summary section">
      <h2 class="j5v-components-datalist__title subtitle">{{ titles.events }}</h2>
      <div class="j5v-components-datalist__container j5v-components-datalist__container--description container"
        v-html="events">
      </div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5v-components-datalist__section j5v-components-datalist__section--summary section">
      <h2 class="j5v-components-datalist__title subtitle">{{ titles.styles }}</h2>
      <div class="j5v-components-datalist__container j5v-components-datalist__container--description container"
        v-html="styles">
      </div>
    </section>
    <Separate></Separate>
  </section>
</template>

<style lang="scss">
.j5v-components-datalist {
  width: 100%;

  & .j5v-datalist .j5v-datalist__list {
    list-style: none;
  }

  &__container {
    & .j5v-datalist {
      --width-input: 300px;
    }

    &--demo {
      @include Flex(column, center, center);
      gap: 1em;
    }
  }

  @include desktopWidth() {
    &__container {
      &--demo {
        @include Flex(row, center, flex-start);
      }
    }
  }
}

.datalist {
  &__container {
    margin: 1em auto;
  }

  &__list {
    background-color: white;
  }

  &__item {
    @include Flex(row, flex-start, center);
    gap: 1em;
    cursor: pointer;
  }
}
</style>
