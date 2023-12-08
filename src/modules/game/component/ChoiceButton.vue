<template>
	<div style="display: flex; align-items: center">
		<v-btn
			variant="outlined"
			:text="choiceText"
			style="flex-grow: 100; margin-right: 10px"
			@click="emit('click')"
		></v-btn>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	choiceText: string;
}>();

const emit = defineEmits<{
	(e: "click"): void;
}>();
</script>
