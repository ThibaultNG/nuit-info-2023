<template>
	<v-slider color="green" disabled v-model="level" direction="vertical" :label="title" />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

defineProps<{
	title: string;
}>();





const level = ref(50);

const setLevel = (new_level: number): void => {
  level.value = new_level;
 
};




computed: {
      color () {
        
        if (level.value < 125) return 'teal'
        if (level.value < 140) return 'green'
        if (level.value < 175) return 'orange'
        return 'red'
      },
</script>
