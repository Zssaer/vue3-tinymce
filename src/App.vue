<script setup lang="ts">
import TEditor from '@/TEditor.vue'
import { ref } from 'vue';
const content =ref('');
</script>

<template>
  <TEditor ref="editor" v-model="content"/>
</template>

<style>

</style>
