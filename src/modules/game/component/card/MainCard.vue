<template>
	<v-card class="bg-dark" style="width: 500px">
		<v-card-text>
			{{ gameStore.currentCard.event }}
		</v-card-text>
		<SingleCard :name="gameStore.currentCard.name" />
		<v-container style="display: flex; flex-direction: column">
			<ChoiceButton
				:choice-text="gameStore.currentCard.left.answer"
				:description="gameStore.currentCard.left.description"
				@click="gameStore.updateCard"
			/>
			<ChoiceButton
				:choice-text="gameStore.currentCard.right.answer"
				:description="gameStore.currentCard.right.description"
			/>
		</v-container>
	</v-card>
</template>

<script setup lang="ts">
import { useGameStore } from "../../store/gameStore";
import ChoiceButton from "../ChoiceButton.vue";
import SingleCard from "./SingleCard.vue";

const gameStore = useGameStore();
</script>
