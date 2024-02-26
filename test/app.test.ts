import request from 'supertest';
import { app } from '../src/app';
import * as utils from '../src/utils';
import axios from 'axios';

describe('Test the root path', () => {
	beforeEach(() => {
		jest.resetAllMocks();
		jest.clearAllMocks();
		jest.restoreAllMocks();
	});
	test('Normal entry should be working', async () => {
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(200);
		expect(response.body).toEqual({
			Marketing: {
				male: 2,
				female: 3,
				hair: { Black: 1, Blond: 2, Chestnut: 1, Brown: 1 },
				ageRange: '21-50',
				addressUser: {
					TerryMedhurst: '20020',
					TerrillHills: '95945',
					EleanoraPrice: '85305',
					JeanneHalvorson: '02664',
					EdwinaErnser: '31415'
				}
			},
			Services: {
				male: 2,
				hair: { Blond: 1, Chestnut: 1 },
				ageRange: '28-29',
				addressUser: { SheldonQuigley: '40219', EwellMueller: '85306' }
			},
			'Business Development': {
				male: 2,
				hair: { Blond: 1, Black: 1 },
				ageRange: '39-49',
				addressUser: { MilesCummerata: '06040', MarcelJones: '40208' }
			},
			Support: {
				male: 3,
				female: 2,
				hair: { Brown: 3, Black: 1, Blond: 1 },
				ageRange: '28-42',
				addressUser: {
					MavisSchultz: '40206',
					ArelySkiles: '36108',
					LennaRenner: '93908',
					KodyTerry: '06042',
					MaurineStracke: '20001'
				}
			},
			Accounting: {
				female: 1,
				hair: { Blond: 1 },
				ageRange: '21',
				addressUser: { AlisonReichert: '05452' }
			},
			'Product Management': {
				female: 3,
				male: 2,
				hair: { Chestnut: 1, Black: 3, Brown: 1 },
				ageRange: '19-45',
				addressUser: {
					OletaAbbott: '94591',
					AssuntaRath: '80003',
					DoyleErnser: '72704',
					JocelynSchuster: '36111',
					MacyGreenfelder: '93645'
				}
			},
			'Human Resources': {
				male: 1,
				female: 1,
				hair: { Brown: 1, Black: 1 },
				ageRange: '22-47',
				addressUser: { DemetriusCorkery: '37209', PiperSchowalter: '37013' }
			},
			'Research and Development': {
				male: 1,
				female: 2,
				hair: { Auburn: 1, Black: 2 },
				ageRange: '26-41',
				addressUser: {
					TraceDouglas: '05037',
					TryciaFadel: '37206',
					TressaWeber: '72703'
				}
			},
			Sales: {
				male: 3,
				hair: { Auburn: 1, Black: 2 },
				ageRange: '21-46',
				addressUser: {
					EnochLynch: '06040',
					BradfordProhaska: '72704',
					GustPurdy: '37076'
				}
			},
			Legal: {
				female: 1,
				hair: { Brown: 1 },
				ageRange: '46',
				addressUser: { "FelicityO'Reilly": '37211' }
			},
			Engineering: {
				male: 1,
				hair: { Blond: 1 },
				ageRange: '35',
				addressUser: { GriffinBraun: '99503' }
			}
		});
	});

	test('"Limit" querystring should be working', async () => {
		const response = await request(app).get('/?limit=1');
		expect(response.statusCode).toBe(200);
		expect(response.body).toEqual({
			Marketing: {
				male: 1,
				hair: { Black: 1 },
				ageRange: '50',
				addressUser: { TerryMedhurst: '20020' }
			}
		});
	});

	test('Wrong type of querystring should return 500 error', async () => {
		const response = await request(app).get('/?limit=aaa');
		expect(response.statusCode).toBe(500);
	});

	test('Non-exist URL should return 404 error', async () => {
		const response = await request(app).get('/test-404');
		expect(response.statusCode).toBe(404);
	});

	test('data endpoint returns empty users data', async () => {
		jest.spyOn(axios, 'get').mockResolvedValue({ data: { users: [] } });
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(400);
		expect(response.body).toEqual({ message: 'Invalid supplied users data' });
	});

	test('groupBy returns null data, making could not go on further', async () => {
		jest.spyOn(utils, 'groupBy').mockImplementation(() => null);
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(400);
		expect(response.body).toEqual({
			message: 'Insufficient grouped department data'
		});
	});

	test('formResponse returns empty data, making could not go on further', async () => {
		jest.spyOn(utils, 'formResponse').mockImplementation(() => ({}));
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(400);
		expect(response.body).toEqual({
			message: 'Insufficient formed response by grouped department data'
		});
	});
});
