export interface Choice {
	answer: string;
    addBundle?: string;
	social: number;
	ecology: number;
	economy: number;
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
	cards: Card[];
}
