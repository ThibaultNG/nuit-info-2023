<template>
	<v-slider v-model="level" direction="vertical" :label="title" />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

defineProps<{
	title: string;
}>();

const level = ref(50);
</script>
