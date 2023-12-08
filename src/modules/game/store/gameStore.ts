import { defineStore } from "pinia";
import { ref } from "vue";
import type { Card } from "../model/Card";
import type { Bundle } from "../model/Card";
import { getBundles } from "../service/cardLoader";
import { useRouter } from "vue-router";

export const useGameStore = defineStore("game", () => {
	const economy = ref<number>(50);
	const ecology = ref<number>(50);
	const social = ref<number>(50);
	const cards = ref<Card[]>([]);
	const currentCard = ref<Card>();
	const bundle = ref<Bundle>();
	const router = useRouter();

	getBundles().then((res) => (bundle.value = res));

	function initGame(bundleName: string): void {
		cards.value = bundle.value![bundleName];
		nextCard();
	}

	function addBundle(name: string): void {
		if (bundle.value && bundle.value[name]) {
			cards.value.push(...bundle.value[name]);
			cards.value = shuffleArray(cards.value);
		}
	}

	function nextCard(): void {
		currentCard.value = cards.value.shift();
		if (!currentCard.value) router.push({ path: "/home" });
	}

	return { ecology, economy, social, cards, currentCard, nextCard, initGame, addBundle };
});

/* Randomize array in-place using Durstenfeld shuffle algorithm */
// TODO : Put this in a helper script
function shuffleArray(originalArray: Card[]): Card[] {
	const array = [...originalArray];
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}
