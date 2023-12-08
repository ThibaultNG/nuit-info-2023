export interface Choice {
	answer: string;
	description?: string;
	social: number;
	economy: number;
	ecology: number;
}

export interface Card {
    id: number;
	name: string;
	event: string;
    alert?: string;
	flipName?: string;
	left: Choice;
	right: Choice;
}

export interface Bundle {
	name: string;
	cards: Card[];
}
