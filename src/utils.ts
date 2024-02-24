import { GroupResult, MinMax } from './types';

export function groupBy(
	data: Record<string, any>,
	key: string,
	nestedKey?: string
) {
	return data.reduce((storage: any, item: any) => {
		// get the first instance of the key by which we're grouping
		let group;

		if (nestedKey) {
			group = item[key][nestedKey];
		} else {
			group = item[key];
		}

		// set `storage` for this instance of group to the outer scope (if not empty) or initialize it
		storage[group] = storage[group] || [];

		// add this item to its group within `storage`
		storage[group].push(item);

		// return the updated storage to the reduce function, which will then loop through the next
		return storage;
	}, {}); // {} is the initial value of the storage
}

export function extractCountOfDataGroup(dataGroup: any) {
	let info: any = [];
	for (const [key, value] of Object.entries(dataGroup)) {
		info = { ...info, [key]: (value as any).length };
	}

	return info;
}

export function findMaxMin(data: any, key: string): MinMax {
	const dataGroup = groupBy(data, key);
	const stringAgeArray = Object.keys(dataGroup);
	const ageArray = stringAgeArray.map(age => parseInt(age));

	const max = Math.max(...ageArray);
	const min = Math.min(...ageArray);

	return { max, min };
}

export function transformToNameAndPostalCode(dataArray: any) {
	var transformed = dataArray.reduce(
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
): GroupResult {
	const genderGroup = groupBy(departmentData, 'gender');
	const hairColorGroup = groupBy(departmentData, 'hair', 'color');

	const genderCount: any = extractCountOfDataGroup(genderGroup);
	const hairColorCount: any = extractCountOfDataGroup(hairColorGroup);
	const { max: maxAge, min: minAge } = findMaxMin(departmentData, 'age');

	const addressUser = transformToNameAndPostalCode(departmentData);

	const isSameAgeMinMax = minAge === maxAge;
	const formattedRangedAge = isSameAgeMinMax
		? `${maxAge}`
		: `${minAge}-${maxAge}`;

	return {
		...genderCount,
		hair: hairColorCount,
		ageRange: formattedRangedAge,
		addressUser
	};
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
