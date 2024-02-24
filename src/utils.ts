import { GroupResult } from './types';

export function groupBy(
	data: Record<string, any>,
	key: string,
	nestedKey?: string
): GroupResult {
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

export function countElementsInArray(
	array: any,
	key: string,
	searchValue: string
) {
	let count = 0;
	for (let i = 0; i < array.length; ++i) {
		if (array[i][key] === searchValue) {
			count++;
		}
	}
	return count;
}
