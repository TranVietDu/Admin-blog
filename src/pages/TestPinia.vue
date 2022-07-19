<template>
  <n-button @click="counterStore.getTodos" type="primary"> click </n-button>
  <h1>{{ counterStore.todos }}</h1>
</template>

<script lang="ts">
import { useCounterStore } from "@/stores/counter";
import { defineComponent } from "vue";
import { mapActions, mapWritableState } from "pinia";
import { mapState } from "pinia";
export default defineComponent({
  setup() {
    const counterStore = useCounterStore();
    return { counterStore };
  },
  name: "TestPinia",
  computed: {},
  // methods: {
  //   call() {
  //     this.counterStore.increment();
  //   },
  // },
});
</script>
