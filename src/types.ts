export type GroupResult = {
	[key: string]: {
		male: number;
		female: number;
		ageRange: string;
		hair: ExtractedCount;
		userAddress: Record<string, string>;
	};
};

export type MinMax = {
	min: number;
	max: number;
} | null;

export type ExtractedCount = Record<string, number>;

export type NameAndPostalCode = Record<string, string>;
