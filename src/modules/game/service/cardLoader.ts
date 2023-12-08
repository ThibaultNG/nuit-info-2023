import type { Card } from "../model/Card";

export function getCards(): Card[] {
	const cards: Card[] = [
		{
			id: 0,
			name: "Conseiller",
			event: "Félicitations Messire, vous avez officiellement été élu suprême leader ! Vous disposez de l'intégralité des ressources de la planète, tout le peuple est sous votre contrôle, l'avenir de cette planète dépend de vous et vos décisions",
			left: {
				answer: "Euhhh...",
				social: 0,
				ecology: 0,
				economy: 0
			},
			right: {
				answer: "D’accord.",
				social: 0,
				ecology: 0,
				economy: 0
			}
		},
		{
			id: 1,
			name: "sheep",
			event: "Des propositions arriveront sur votre bureau et ce sera à vous de prendre la décision optimale. Pour ce faire, vous pourrez glisser la proposition vers la gauche ou vers la droite en pour voir les choix qui s'offrent à vous.",
			left: {
				answer: "Ok...",
				social: 0,
				ecology: 0,
				economy: 0
			},
			right: {
				answer: "J'ai compris.",
				social: 0,
				ecology: 0,
				economy: 0
			}
		},
		{
			id: 2,
			name: "teacher",
			event: "De plus, il est possible de retourner la carte pour obtenir des informations supplémentaires.",
			alert: "Bon j'ai rien à dire de plus mais ça illustre bien.",
			left: {
				answer: "Thanks Captain Obvious....",
				social: 0,
				ecology: 0,
				economy: 0
			},
			right: {
				answer: "Ça marche !",
				social: 0,
				ecology: 0,
				economy: 0
			}
		}
	];

	return cards;
}