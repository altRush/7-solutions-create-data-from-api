import axios from 'axios';
import express, { Express, Request, Response } from 'express';
import { countElementsInArray, groupBy } from './utils';

const app: Express = express();

const port: number = 3000;

app.get('/', async (req: Request, res: Response) => {
	const {
		data: { users }
	} = await axios.get('https://dummyjson.com/users?limit=10');

	const groupedByDepartmentData = groupBy(users, 'company', 'department');

	const male = countElementsInArray(
		groupedByDepartmentData['Marketing'],
		'gender',
		'male'
	);

	res.json({ male });
});

app.listen(port, () => console.log(`Application is running on port ${port}`));
