import { defineStore } from "pinia";
import { ref } from "vue";
import type { Card } from "../model/Card";
import type { Bundle } from "../model/Card";
import { getBundles } from "../service/cardLoader";

export const useGameStore = defineStore("game", () => {
	const economy = ref<number>(50);
	const ecology = ref<number>(50);
	const social = ref<number>(50);
	const cards = ref<Card[]>([]);
	const currentCard = ref<Card>(cards.value[0]);
	const bundle = ref<Bundle>();
	const currentId = ref<number>(-1);

	getBundles()
		.then((res) => (bundle.value = res))
		.then(() => console.log(bundle.value))
		.then(() => (cards.value = bundle.value!["tutoriel"]))
		.then(() => updateCard());

	function updateCard(): void {
		currentId.value += 1;
		currentCard.value = cards.value[currentId.value];
	}

	return { ecology, economy, social, cards, currentCard, updateCard };
});
