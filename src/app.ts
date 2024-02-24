import axios from 'axios';
import express, { Express, Request, Response } from 'express';
import { extractCountOfDataGroup, groupBy } from './utils';
import { GroupResult } from './types';

const app: Express = express();

const port: number = 3000;

app.get('/', async (req: Request, res: Response) => {
	const {
		data: { users }
	} = await axios.get('https://dummyjson.com/users?limit=10');

	const groupedByDepartmentData = groupBy(users, 'company', 'department');

	const genderGroup = groupBy(groupedByDepartmentData['Marketing'], 'gender');
	const hairColorGroup = groupBy(
		groupedByDepartmentData['Marketing'],
		'hair',
		'color'
	);

	const genderInfo: any = extractCountOfDataGroup(genderGroup);
	const hairColorInfo: any = extractCountOfDataGroup(hairColorGroup);

	res.json({ ...genderInfo, hair: hairColorInfo } as GroupResult);
});

app.listen(port, () => console.log(`Application is running on port ${port}`));
