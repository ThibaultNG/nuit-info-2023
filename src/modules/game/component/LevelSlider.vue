<template>
	<v-slider
		model-value="value"
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
import { computed } from "vue";

const props = defineProps<{
	title: string;
	value: number;
}>();

const color = computed(() => {
	if (props.value < 30) return "red";
	else if (props.value < 60) return "orange";
	return "green";
});
</script>
