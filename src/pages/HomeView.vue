<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <n-card title="Card with Cover">
      <template #cover>
        <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
      </template>
      Card Content
    </n-card>
    <n-space>
      <n-button>Default</n-button>
      <n-button type="tertiary"> Tertiary </n-button>
      <n-button type="primary"> Primary </n-button>
      <n-button type="info"> Info </n-button>
      <n-button type="success"> Success </n-button>
      <n-button type="warning"> Warning </n-button>
      <n-button type="error"> Error </n-button>
    </n-space>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
  components: {},
});
</script>
<style scoped>
.n-card {
  max-width: 300px;
}
</style>
