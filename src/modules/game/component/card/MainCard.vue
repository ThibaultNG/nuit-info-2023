<template>
	<v-card class="bg-dark" style="width: 500px">
		<v-container class="text-h6">
            {{ card.event }}
        </v-container>
		<CardImage :name="card.name" />
		<v-container style="display: flex; flex-direction: column">
			<ChoiceButton
				class="mb-2"
				:choice-text="card.left.answer"
				:description="card.left.description"
				@click="handleClick"
			/>
			<ChoiceButton
				:choice-text="card.right.answer"
				:description="card.right.description"
				@click="handleClick"
			/>
		</v-container>
	</v-card>
	<v-dialog v-model="dialog" transition="dialog-top-transition" width="auto">
		<v-card>
			<v-toolbar color="primary" :title="card.event"></v-toolbar>
			<v-card-text>
				{{ card.alert }}
			</v-card-text>
			<v-card-actions class="justify-end">
				<v-btn color="error" variant="tonal" @click="dialog = false">Close</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script setup lang="ts">
import { useGameStore } from "../../store/gameStore";
import ChoiceButton from "../ChoiceButton.vue";
import CardImage from "./CardImage.vue";
import { computed, ref } from "vue";

const dialog = ref<boolean>(false);
const gameStore = useGameStore();
const card = computed(() => gameStore.currentCard);

function handleClick() {
	if (card.value.alert) dialog.value = true;
	gameStore.updateCard();
}
</script>
