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
	} catch (e) {
		console.error('Unexpected error: ', e);
		res.status(500).json({
			message: 'Internal server error'
		});
	}

	if (!users?.length) {
		res.status(400).json({ message: 'Invalid supplied users data' });
	}

	const groupedByDepartmentData = groupBy(users, 'company', 'department');

	if (!groupedByDepartmentData) {
		res.status(400).json({ message: 'Insufficient grouped department data' });
	}

	const formedResponse = formResponse(groupedByDepartmentData);

	if (!formedResponse) {
		res.status(400).json({
			message: 'Insufficient formed response by grouped department data'
		});
	}

	res.status(200).json(formedResponse);
});

app.listen(port, () => console.log(`Application is running on port ${port}`));
