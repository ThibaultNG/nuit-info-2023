<template>
	<v-slider
		:model-value="val"
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
	val: number;
}>();

const color = computed(() => {
	if (props.val < 30) return "red";
	else if (props.val < 60) return "orange";
	return "green";
});
</script>
