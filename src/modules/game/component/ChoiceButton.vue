<template>
	<div style="display: flex; align-items: center">
		<v-btn
			variant="outlined"
			:text="choiceText"
			style="flex-grow: 100; margin-right: 10px"
			@click="emit('click')"
		></v-btn>
		<v-btn variant="text" color="info" icon="mdi-help-circle" @click="dialog = true" />
		<v-dialog v-model="dialog" transition="dialog-top-transition" width="auto">
			<v-card>
				<v-toolbar color="primary" :title="choiceText"></v-toolbar>
				<v-card-text>
					{{ prop.description }}
				</v-card-text>
				<v-card-actions class="justify-end">
					<v-btn color="error" variant="tonal" @click="dialog = false">Close</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const dialog = ref<boolean>(false);

const prop = defineProps<{
	choiceText: string;
	description?: string;
}>();

const emit = defineEmits<{
	(e: "click"): void;
}>();
</script>
