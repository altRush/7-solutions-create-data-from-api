import axios from 'axios';
import express, { Express, Request, Response } from 'express';
import { formResponse, groupBy } from './utils';

const app: Express = express();

const port: number = 3000;

app.get('/', async (req: Request, res: Response) => {
	const userLimit = req.query.limit;

	let users;

	try {
		({
			data: { users }
		} = await axios.get(
			`https://dummyjson.com/users${userLimit ? `?limit=${userLimit}` : ''}`
		));
	} catch (e: any) {
		console.error('Unexpected error: ', e.code);

		res.status(500).json({
			message: 'Internal server error'
		});
		return;
	}

	if (!users?.length) {
		res.status(400).json({ message: 'Invalid supplied users data' });
		return;
	}

	const groupedByDepartmentData = groupBy(users, 'company', 'department');

	if (!groupedByDepartmentData) {
		res.status(400).json({ message: 'Insufficient grouped department data' });
		return;
	}

	const formedResponse = formResponse(groupedByDepartmentData);

	if (!formedResponse) {
		res.status(400).json({
			message: 'Insufficient formed response by grouped department data'
		});
		return;
	}

	res.status(200).json(formedResponse);
});

app.listen(port, () => console.log(`Application is running on port ${port}`));

export { app };
