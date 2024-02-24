import axios from 'axios';
import express, { Express, Request, Response } from 'express';
import { formResponse, groupBy } from './utils';

const app: Express = express();

const port: number = 3000;

app.get('/', async (req: Request, res: Response) => {
	const {
		data: { users }
	} = await axios.get('https://dummyjson.com/users?limit=10');

	const groupedByDepartmentData = groupBy(users, 'company', 'department');

	const formedResponse = formResponse(groupedByDepartmentData);

	res.json(formedResponse);
});

app.listen(port, () => console.log(`Application is running on port ${port}`));
