<template>
	<v-card
		v-if="card"
		style="min-height: 100vh; max-width: 450px; background-color: rgba(0, 0, 0, 0)"
	>
		<RessourcesBar />

		<div class="mx-5 mb-2">
			{{ card.event }}
		</div>
		<CardImage :name="card.name" />
		<v-container style="display: flex; flex-direction: column">
			<ChoiceButton class="mb-2" :choice-text="card.left.answer" @click="handleLeftClick" />
			<ChoiceButton :choice-text="card.right.answer" @click="handleRightClick" />
		</v-container>
	</v-card>
	<div v-else>
		<v-btn text="Erreur: retourner à l'Accueil" to="/home" />
	</div>

	<v-snackbar v-model="snackbar" timeout="3000" color="success">
		{{ gameStore.currentCard?.alert }}
	</v-snackbar>
</template>

<script setup lang="ts">
import { useGameStore } from "@/modules/game/store/gameStore";
import ChoiceButton from "@/modules/game/component/ChoiceButton.vue";
import CardImage from "@/modules/game/component/card/CardImage.vue";
import { computed, ref } from "vue";
import RessourcesBar from "@/modules/game/component/RessourcesBar.vue";

const snackbar = ref<boolean>(false);
const gameStore = useGameStore();
const card = computed(() => gameStore.currentCard);

function handleRightClick() {
	gameStore.ecology += card.value!.right.ecology;
	gameStore.social += card.value!.right.social;
	gameStore.economy += card.value!.right.economy;

	if (card.value?.right.addBundle) gameStore.addBundle(card.value?.right.addBundle);

	if (gameStore.currentCard!.alert) snackbar.value = true;
	gameStore.nextCard();
}

function handleLeftClick() {
	gameStore.ecology += card.value!.left.ecology;
	gameStore.social += card.value!.left.social;
	gameStore.economy += card.value!.left.economy;

	if (card.value?.left.addBundle) gameStore.addBundle(card.value?.left.addBundle);

	if (gameStore.currentCard!.alert) snackbar.value = true;
	gameStore.nextCard();
}
</script>
