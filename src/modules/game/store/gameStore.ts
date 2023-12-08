import { defineStore } from "pinia";
import { ref } from "vue";
import type { Card } from "../model/Card";
import type { Bundle } from "../model/Card";
import { getCards } from "../service/cardLoader";

export const useGameStore = defineStore("game", () => {
	const economy = ref<number>(50);
	const ecology = ref<number>(50);
	const social = ref<number>(50);
	const cards = ref<Card[]>(getCards());
	const currentCard = ref<Card>(cards.value[0]);
	const bundle = ref<Bundle[]>([]);
	const currentId = ref<number>(0);

	fetch("/cards.csv").then(response => response.text())
		.then(data => {
			const res = ref<Card[]>();
			const lines = data.split('\n');
			lines.forEach((line) => {
				const args = line.split(';');
				const c = <Card> ({
					id: parseInt(line[0]),
					name: line[2],
					event: line[3],
					left: {
						answer: line[5],
						social: parseInt(line[7]),
						ecology: parseInt(line[8]),
						economy: parseInt(line[9])
					},
					right: {
						answer: line[10],
						social: parseInt(line[12]),
						ecology: parseInt(line[13]),
						economy: parseInt(line[14])
					}
				});
				res.push(c);
			})
		});

	function updateCard(): void {
		currentId.value += 1;
		currentCard.value = cards.value[currentId.value];
	}

	return { ecology, economy, social, cards, currentCard, updateCard };
});
