export interface Choice {
	answer: string;
	description: string;
	social: number;
	economy: number;
	ecology: number;
}

export interface Card {
	id: number;
	path: string;
	characterName: string;
	left: Choice;
	right: Choice;
}
