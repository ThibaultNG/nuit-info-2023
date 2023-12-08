<template>
	<v-img :src="path" :alt="name" style="width: 100%; height: auto; object-fit: contain" />
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
	name: string;
}>();

const path = computed(() => {
	return "/cards/" + props.name + ".png";
});
</script>
