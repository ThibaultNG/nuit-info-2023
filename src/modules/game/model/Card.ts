export interface Choice {
	answer: string;
	description: string;
	alert?: string;
	social: number;
	economy: number;
	ecology: number;
}

export interface Card {
	id: number;
	name: string;
	flipName?: string;
	left: Choice;
	right: Choice;
}

export interface Bundle {
	cards: Card[];
}
