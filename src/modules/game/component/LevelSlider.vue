<template>
	<v-slider
		v-model="level"
		:color="color"
		:label="title"
		density="compact"
		readonly
		thumb-label="always"
        hide-details
		style="{ width: 200px, height: 30px }"
	/>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const { props } = defineProps<{
	title: string;
}>();

const level = ref(50);

const setLevel = (new_level: number): void => {
	level.value = new_level;
};

const color = computed(() => {
	if (level.value < 30) return "red";
	else if (level.value < 60) return "orange";
	return "green";
});
</script>
