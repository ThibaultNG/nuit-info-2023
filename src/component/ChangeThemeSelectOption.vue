<template>
	<v-list-item :prepend-icon="icon" :title="displayedName" variant="text" @click="clicked">
	</v-list-item>
</template>

<script setup lang="ts">
const props = defineProps({
	id: {
		type: String,
		default: ""
	},
	displayedName: {
		type: String,
		default: ""
	},
	icon: {
		type: String,
		default: ""
	}
});
const emits = defineEmits(["clicked"]);

function clicked() {
	emits("clicked", props.id);
}
</script>
