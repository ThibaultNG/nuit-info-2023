import { defineStore } from "pinia";
import { ref } from "vue";
import type { Card } from "../model/Card";
import { getCards } from "../service/cardLoader";

export const useGameStore = defineStore("game", () => {
	const economy = ref<number>(50);
	const ecology = ref<number>(50);
	const social = ref<number>(50);
	const cards = ref<Card[]>(getCards());
	const currentCard = ref<Card>(cards.value[0]);
	const currentId = ref<number>(0);

	function updateCard(): void {
		currentId.value += 1;
		currentCard.value = cards.value[currentId.value];
	}

	return { ecology, economy, social, cards, currentCard, updateCard };
});
