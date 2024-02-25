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
): T | null {
	if (!data?.length) return null;

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
): ExtractedCount | null {
	let info = {};
	const entries = Object.entries(dataGroup);

	if (!entries.length) {
		return null;
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
	if (!dataArray?.length) return null;

	const dataGroup = groupBy(dataArray, key);

	if (!dataGroup) return null;

	const stringAgeArray = Object.keys(dataGroup);
	const ageArray = stringAgeArray.map(age => parseInt(age));

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

export function formResponseRecordForDepartment<T extends Record<string, any>>(
	departmentData: T[]
): GroupResult | null {
	const genderGroup = groupBy(departmentData, 'gender');

	if (!genderGroup) return null;

	const hairColorGroup = groupBy(departmentData, 'hair', 'color');

	if (!hairColorGroup) return null;

	const genderCount = extractCountOfDataGroup(genderGroup);
	const hairColorCount = extractCountOfDataGroup(hairColorGroup);

	const minMax = findMinMax(departmentData, 'age');

	if (!minMax) return null;

	const { max: maxAge, min: minAge } = minMax;
	const isSameAgeMinMax = minAge === maxAge;
	const formattedRangedAge = isSameAgeMinMax
		? `${maxAge}`
		: `${minAge}-${maxAge}`;

	const addressUser = transformToNameAndPostalCode(departmentData);

	if (!addressUser) return null;

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
