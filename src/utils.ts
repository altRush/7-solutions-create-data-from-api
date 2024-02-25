import {
	ExtractedCount,
	GroupResult,
	MinMax,
	NameAndPostalCode
} from './types';

export function groupBy<T extends Record<string, any>>(
	data: Array<T>,
	key: string,
	nestedKey?: string
): T {
	return data.reduce((storage: any, item: T) => {
		let group;

		if (nestedKey) {
			group = item[key][nestedKey];
		} else {
			group = item[key];
		}

		// set `storage` for this instance of group to the outer scope (if not empty) or initialize it
		storage[group] = storage[group] || [];

		storage[group].push(item);

		return storage;
	}, {});
}

export function extractCountOfDataGroup(
	dataGroup: Record<string, any>
): ExtractedCount {
	let info = {};
	const entries = Object.entries(dataGroup);

	if (!entries.length) {
		return {};
	}

	for (const [key, value] of Object.entries(dataGroup)) {
		info = { ...info, [key]: (value as any).length };
	}

	return info;
}

export function findMinMax<T extends Record<string, any>>(
	dataArray: T[],
	key: string
): MinMax | null {
	const dataGroup = groupBy(dataArray, key);
	const stringAgeArray = Object.keys(dataGroup);
	const ageArray = stringAgeArray.map(age => parseInt(age));

	if (!ageArray.length) return null;

	const max = Math.max(...ageArray);
	const min = Math.min(...ageArray);

	return { min, max };
}

export function transformToNameAndPostalCode<T>(
	dataArray: T[]
): NameAndPostalCode | null {
	if (!dataArray.length) return null;

	const transformed = dataArray.reduce(
		(obj: any, item: any) =>
			Object.assign(obj, {
				[`${item.firstName}${item.lastName}`]: item.address.postalCode
			}),
		{}
	);

	return transformed;
}

export function formResponseRecordForDepartment(
	departmentData: any
): GroupResult | void {
	const genderGroup = groupBy(departmentData, 'gender');
	const hairColorGroup = groupBy(departmentData, 'hair', 'color');

	const genderCount: ExtractedCount = extractCountOfDataGroup(genderGroup);
	const hairColorCount: ExtractedCount =
		extractCountOfDataGroup(hairColorGroup);

	const minMax = findMinMax(departmentData, 'age');

	if (!minMax) return;

	const { max: maxAge, min: minAge } = minMax;
	const isSameAgeMinMax = minAge === maxAge;
	const formattedRangedAge = isSameAgeMinMax
		? `${maxAge}`
		: `${minAge}-${maxAge}`;

	const addressUser = transformToNameAndPostalCode(departmentData);

	if (!addressUser) return;

	return {
		...genderCount,
		hair: hairColorCount,
		ageRange: formattedRangedAge,
		addressUser
	} as unknown as GroupResult;
}

export function formResponse(dataCollection: any): Record<string, GroupResult> {
	let response = {};

	for (const department in dataCollection) {
		response = {
			...response,
			[department]: formResponseRecordForDepartment(dataCollection[department])
		};
	}

	return response;
}
