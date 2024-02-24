export type GroupResult = {
	[key: string]: {
		male: number;
		female: number;
		ageRange: string;
		hair: {
			Black: number;
			Blond: number;
			Chestnut: number;
			Brown: number;
		};
		userAddress: Record<string, string>;
	};
};

export type MinMax = {
	min: number;
	max: number;
};
