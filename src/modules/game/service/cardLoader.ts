import type { Bundle, Card } from "../model/Card";

export function getBundles(): Promise<Bundle> {
	return fetch("/cards.csv")
		.then((response) => response.text())
		.then((data) => {
			const lines = data.split("\n");
			const bundles: any = {};
			lines.forEach((line) => {
				const args = line.split(";");
				const card: Card = {
					id: parseInt(args[0]),
					name: args[2],
					event: args[3],
					left: {
						answer: args[5],
						social: parseInt(args[7]),
						ecology: parseInt(args[8]),
						economy: parseInt(args[9])
					},
					right: {
						answer: args[10],
						social: parseInt(args[12]),
						ecology: parseInt(args[13]),
						economy: parseInt(args[14])
					}
				};

				if (!bundles[args[1]]) {
					bundles[args[1]] = [card];
				} else {
					bundles[args[1]].push(card);
				}
			});
			return bundles;
		});
}
