<template>
  <div>
    <TinyMceEditor v-model="content" language="zh_CN"/>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const content = ref('');
</script>

<style scoped>
</style>