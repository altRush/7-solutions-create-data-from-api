import { response } from 'express';
import { MinMax } from '../src/types';
import * as utils from '../src/utils';

describe('All utils', () => {
	beforeEach(() => {
		jest.resetAllMocks();
		jest.clearAllMocks();
		jest.restoreAllMocks();
	});

	describe('groupBy', () => {
		test('Receives null with empty data array supplied', () => {
			const groupedData = utils.groupBy([], '__MOCK_KEY__');

			expect(groupedData).toBe(null);
		});
		test('Works with nested layer of data (hair/color)', () => {
			const mockData = [
				{
					id: 1,
					firstName: 'Terry',
					lastName: 'Medhurst',
					maidenName: 'Smitham',
					age: 50,
					gender: 'male',
					email: 'atuny0@sohu.com',
					phone: '+63 791 675 8914',
					username: 'atuny0',
					password: '9uQFF1Lh',
					birthDate: '2000-12-25',
					image: 'https://robohash.org/Terry.png?set=set4',
					bloodGroup: 'A-',
					height: 189,
					weight: 75.4,
					eyeColor: 'Green',
					hair: {
						color: 'Black',
						type: 'Strands'
					},
					domain: 'slashdot.org',
					ip: '117.29.86.254',
					address: {
						address: '1745 T Street Southeast',
						city: 'Washington',
						coordinates: {
							lat: 38.867033,
							lng: -76.979235
						},
						postalCode: '20020',
						state: 'DC'
					},
					macAddress: '13:69:BA:56:A3:74',
					university: 'Capitol University',
					bank: {
						cardExpire: '06/22',
						cardNumber: '50380955204220685',
						cardType: 'maestro',
						currency: 'Peso',
						iban: 'NO17 0695 2754 967'
					},
					company: {
						address: {
							address: '629 Debbie Drive',
							city: 'Nashville',
							coordinates: {
								lat: 36.208114,
								lng: -86.58621199999999
							},
							postalCode: '37076',
							state: 'TN'
						},
						department: 'Marketing',
						name: "Blanda-O'Keefe",
						title: 'Help Desk Operator'
					},
					ein: '20-9487066',
					ssn: '661-64-2976',
					userAgent:
						'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24',
					crypto: {
						coin: 'Bitcoin',
						wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
						network: 'Ethereum (ERC20)'
					}
				},
				{
					id: 3,
					firstName: 'Terrill',
					lastName: 'Hills',
					maidenName: 'Hoeger',
					age: 38,
					gender: 'male',
					email: 'rshawe2@51.la',
					phone: '+63 739 292 7942',
					username: 'rshawe2',
					password: 'OWsTbMUgFc',
					birthDate: '1992-12-30',
					image: 'https://robohash.org/Terrill.png?set=set4',
					bloodGroup: 'A-',
					height: 200,
					weight: 105.3,
					eyeColor: 'Gray',
					hair: {
						color: 'Blond',
						type: 'Very curly'
					},
					domain: 'earthlink.net',
					ip: '205.226.160.3',
					address: {
						address: '560 Penstock Drive',
						city: 'Grass Valley',
						coordinates: {
							lat: 39.213076,
							lng: -121.077583
						},
						postalCode: '95945',
						state: 'CA'
					},
					macAddress: 'F2:88:58:64:F7:76',
					university: 'University of Cagayan Valley',
					bank: {
						cardExpire: '10/23',
						cardNumber: '3586082982526703',
						cardType: 'jcb',
						currency: 'Peso',
						iban: 'AT24 1095 9625 1434 9703'
					},
					company: {
						address: {
							address: '18 Densmore Drive',
							city: 'Essex',
							coordinates: {
								lat: 44.492953,
								lng: -73.101883
							},
							postalCode: '05452',
							state: 'VT'
						},
						department: 'Marketing',
						name: 'Lindgren LLC',
						title: 'Mechanical Systems Engineer'
					},
					ein: '48-3951994',
					ssn: '633-89-1926',
					userAgent:
						'Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:21.0.0) Gecko/20121011 Firefox/21.0.0',
					crypto: {
						coin: 'Bitcoin',
						wallet: '0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7',
						network: 'Ethereum (ERC20)'
					}
				},
				{
					id: 10,
					firstName: 'Eleanora',
					lastName: 'Price',
					maidenName: 'Cummings',
					age: 37,
					gender: 'female',
					email: 'umcgourty9@jalbum.net',
					phone: '+60 184 408 0824',
					username: 'umcgourty9',
					password: 'i0xzpX',
					birthDate: '1958-08-11',
					image: 'https://robohash.org/Eleanora.png?set=set4',
					bloodGroup: 'O+',
					height: 198,
					weight: 48,
					eyeColor: 'Blue',
					hair: {
						color: 'Chestnut',
						type: 'Wavy'
					},
					domain: 'alibaba.com',
					ip: '73.15.179.178',
					address: {
						address: '8821 West Myrtle Avenue',
						city: 'Glendale',
						coordinates: {
							lat: 33.5404296,
							lng: -112.2488391
						},
						postalCode: '85305',
						state: 'AZ'
					},
					macAddress: 'BC:A9:D8:98:CB:0B',
					university: 'Melaka City Polytechnic',
					bank: {
						cardExpire: '01/24',
						cardNumber: '3557806620295254',
						cardType: 'jcb',
						currency: 'Ringgit',
						iban: 'GT40 DWAD 9UHA VEOZ ZF4J 2Y0F OOFD'
					},
					company: {
						address: {
							address: '1649 Timberridge Court',
							city: 'Fayetteville',
							coordinates: {
								lat: 36.084563,
								lng: -94.206082
							},
							postalCode: '72704',
							state: 'AR'
						},
						department: 'Marketing',
						name: 'Bins Group',
						title: 'Senior Sales Associate'
					},
					ein: '21-5278484',
					ssn: '544-66-0745',
					userAgent:
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.6 Safari/537.11',
					crypto: {
						coin: 'Bitcoin',
						wallet: '0xb9fe6979a82fb43fdd9ba9f446846dc4dfca3deb',
						network: 'Ethereum (ERC20)'
					}
				}
			];

			const expectedGroupByResult = {
				Black: [
					{
						id: 1,
						firstName: 'Terry',
						lastName: 'Medhurst',
						maidenName: 'Smitham',
						age: 50,
						gender: 'male',
						email: 'atuny0@sohu.com',
						phone: '+63 791 675 8914',
						username: 'atuny0',
						password: '9uQFF1Lh',
						birthDate: '2000-12-25',
						image: 'https://robohash.org/Terry.png?set=set4',
						bloodGroup: 'A-',
						height: 189,
						weight: 75.4,
						eyeColor: 'Green',
						hair: {
							color: 'Black',
							type: 'Strands'
						},
						domain: 'slashdot.org',
						ip: '117.29.86.254',
						address: {
							address: '1745 T Street Southeast',
							city: 'Washington',
							coordinates: {
								lat: 38.867033,
								lng: -76.979235
							},
							postalCode: '20020',
							state: 'DC'
						},
						macAddress: '13:69:BA:56:A3:74',
						university: 'Capitol University',
						bank: {
							cardExpire: '06/22',
							cardNumber: '50380955204220685',
							cardType: 'maestro',
							currency: 'Peso',
							iban: 'NO17 0695 2754 967'
						},
						company: {
							address: {
								address: '629 Debbie Drive',
								city: 'Nashville',
								coordinates: {
									lat: 36.208114,
									lng: -86.58621199999999
								},
								postalCode: '37076',
								state: 'TN'
							},
							department: 'Marketing',
							name: "Blanda-O'Keefe",
							title: 'Help Desk Operator'
						},
						ein: '20-9487066',
						ssn: '661-64-2976',
						userAgent:
							'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24',
						crypto: {
							coin: 'Bitcoin',
							wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
							network: 'Ethereum (ERC20)'
						}
					}
				],
				Blond: [
					{
						id: 3,
						firstName: 'Terrill',
						lastName: 'Hills',
						maidenName: 'Hoeger',
						age: 38,
						gender: 'male',
						email: 'rshawe2@51.la',
						phone: '+63 739 292 7942',
						username: 'rshawe2',
						password: 'OWsTbMUgFc',
						birthDate: '1992-12-30',
						image: 'https://robohash.org/Terrill.png?set=set4',
						bloodGroup: 'A-',
						height: 200,
						weight: 105.3,
						eyeColor: 'Gray',
						hair: {
							color: 'Blond',
							type: 'Very curly'
						},
						domain: 'earthlink.net',
						ip: '205.226.160.3',
						address: {
							address: '560 Penstock Drive',
							city: 'Grass Valley',
							coordinates: {
								lat: 39.213076,
								lng: -121.077583
							},
							postalCode: '95945',
							state: 'CA'
						},
						macAddress: 'F2:88:58:64:F7:76',
						university: 'University of Cagayan Valley',
						bank: {
							cardExpire: '10/23',
							cardNumber: '3586082982526703',
							cardType: 'jcb',
							currency: 'Peso',
							iban: 'AT24 1095 9625 1434 9703'
						},
						company: {
							address: {
								address: '18 Densmore Drive',
								city: 'Essex',
								coordinates: {
									lat: 44.492953,
									lng: -73.101883
								},
								postalCode: '05452',
								state: 'VT'
							},
							department: 'Marketing',
							name: 'Lindgren LLC',
							title: 'Mechanical Systems Engineer'
						},
						ein: '48-3951994',
						ssn: '633-89-1926',
						userAgent:
							'Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:21.0.0) Gecko/20121011 Firefox/21.0.0',
						crypto: {
							coin: 'Bitcoin',
							wallet: '0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7',
							network: 'Ethereum (ERC20)'
						}
					}
				],
				Chestnut: [
					{
						id: 10,
						firstName: 'Eleanora',
						lastName: 'Price',
						maidenName: 'Cummings',
						age: 37,
						gender: 'female',
						email: 'umcgourty9@jalbum.net',
						phone: '+60 184 408 0824',
						username: 'umcgourty9',
						password: 'i0xzpX',
						birthDate: '1958-08-11',
						image: 'https://robohash.org/Eleanora.png?set=set4',
						bloodGroup: 'O+',
						height: 198,
						weight: 48,
						eyeColor: 'Blue',
						hair: {
							color: 'Chestnut',
							type: 'Wavy'
						},
						domain: 'alibaba.com',
						ip: '73.15.179.178',
						address: {
							address: '8821 West Myrtle Avenue',
							city: 'Glendale',
							coordinates: {
								lat: 33.5404296,
								lng: -112.2488391
							},
							postalCode: '85305',
							state: 'AZ'
						},
						macAddress: 'BC:A9:D8:98:CB:0B',
						university: 'Melaka City Polytechnic',
						bank: {
							cardExpire: '01/24',
							cardNumber: '3557806620295254',
							cardType: 'jcb',
							currency: 'Ringgit',
							iban: 'GT40 DWAD 9UHA VEOZ ZF4J 2Y0F OOFD'
						},
						company: {
							address: {
								address: '1649 Timberridge Court',
								city: 'Fayetteville',
								coordinates: {
									lat: 36.084563,
									lng: -94.206082
								},
								postalCode: '72704',
								state: 'AR'
							},
							department: 'Marketing',
							name: 'Bins Group',
							title: 'Senior Sales Associate'
						},
						ein: '21-5278484',
						ssn: '544-66-0745',
						userAgent:
							'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.6 Safari/537.11',
						crypto: {
							coin: 'Bitcoin',
							wallet: '0xb9fe6979a82fb43fdd9ba9f446846dc4dfca3deb',
							network: 'Ethereum (ERC20)'
						}
					}
				]
			};

			const groupedData = utils.groupBy(mockData, 'hair', 'color');

			expect(groupedData).toEqual(expectedGroupByResult);
		});
		test('Works with normal layer of data (gender)', () => {
			const mockData = [
				{
					id: 1,
					firstName: 'Terry',
					lastName: 'Medhurst',
					maidenName: 'Smitham',
					age: 50,
					gender: 'male',
					email: 'atuny0@sohu.com',
					phone: '+63 791 675 8914',
					username: 'atuny0',
					password: '9uQFF1Lh',
					birthDate: '2000-12-25',
					image: 'https://robohash.org/Terry.png?set=set4',
					bloodGroup: 'A-',
					height: 189,
					weight: 75.4,
					eyeColor: 'Green',
					hair: {
						color: 'Black',
						type: 'Strands'
					},
					domain: 'slashdot.org',
					ip: '117.29.86.254',
					address: {
						address: '1745 T Street Southeast',
						city: 'Washington',
						coordinates: {
							lat: 38.867033,
							lng: -76.979235
						},
						postalCode: '20020',
						state: 'DC'
					},
					macAddress: '13:69:BA:56:A3:74',
					university: 'Capitol University',
					bank: {
						cardExpire: '06/22',
						cardNumber: '50380955204220685',
						cardType: 'maestro',
						currency: 'Peso',
						iban: 'NO17 0695 2754 967'
					},
					company: {
						address: {
							address: '629 Debbie Drive',
							city: 'Nashville',
							coordinates: {
								lat: 36.208114,
								lng: -86.58621199999999
							},
							postalCode: '37076',
							state: 'TN'
						},
						department: 'Marketing',
						name: "Blanda-O'Keefe",
						title: 'Help Desk Operator'
					},
					ein: '20-9487066',
					ssn: '661-64-2976',
					userAgent:
						'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24',
					crypto: {
						coin: 'Bitcoin',
						wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
						network: 'Ethereum (ERC20)'
					}
				},
				{
					id: 3,
					firstName: 'Terrill',
					lastName: 'Hills',
					maidenName: 'Hoeger',
					age: 38,
					gender: 'male',
					email: 'rshawe2@51.la',
					phone: '+63 739 292 7942',
					username: 'rshawe2',
					password: 'OWsTbMUgFc',
					birthDate: '1992-12-30',
					image: 'https://robohash.org/Terrill.png?set=set4',
					bloodGroup: 'A-',
					height: 200,
					weight: 105.3,
					eyeColor: 'Gray',
					hair: {
						color: 'Blond',
						type: 'Very curly'
					},
					domain: 'earthlink.net',
					ip: '205.226.160.3',
					address: {
						address: '560 Penstock Drive',
						city: 'Grass Valley',
						coordinates: {
							lat: 39.213076,
							lng: -121.077583
						},
						postalCode: '95945',
						state: 'CA'
					},
					macAddress: 'F2:88:58:64:F7:76',
					university: 'University of Cagayan Valley',
					bank: {
						cardExpire: '10/23',
						cardNumber: '3586082982526703',
						cardType: 'jcb',
						currency: 'Peso',
						iban: 'AT24 1095 9625 1434 9703'
					},
					company: {
						address: {
							address: '18 Densmore Drive',
							city: 'Essex',
							coordinates: {
								lat: 44.492953,
								lng: -73.101883
							},
							postalCode: '05452',
							state: 'VT'
						},
						department: 'Marketing',
						name: 'Lindgren LLC',
						title: 'Mechanical Systems Engineer'
					},
					ein: '48-3951994',
					ssn: '633-89-1926',
					userAgent:
						'Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:21.0.0) Gecko/20121011 Firefox/21.0.0',
					crypto: {
						coin: 'Bitcoin',
						wallet: '0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7',
						network: 'Ethereum (ERC20)'
					}
				},
				{
					id: 10,
					firstName: 'Eleanora',
					lastName: 'Price',
					maidenName: 'Cummings',
					age: 37,
					gender: 'female',
					email: 'umcgourty9@jalbum.net',
					phone: '+60 184 408 0824',
					username: 'umcgourty9',
					password: 'i0xzpX',
					birthDate: '1958-08-11',
					image: 'https://robohash.org/Eleanora.png?set=set4',
					bloodGroup: 'O+',
					height: 198,
					weight: 48,
					eyeColor: 'Blue',
					hair: {
						color: 'Chestnut',
						type: 'Wavy'
					},
					domain: 'alibaba.com',
					ip: '73.15.179.178',
					address: {
						address: '8821 West Myrtle Avenue',
						city: 'Glendale',
						coordinates: {
							lat: 33.5404296,
							lng: -112.2488391
						},
						postalCode: '85305',
						state: 'AZ'
					},
					macAddress: 'BC:A9:D8:98:CB:0B',
					university: 'Melaka City Polytechnic',
					bank: {
						cardExpire: '01/24',
						cardNumber: '3557806620295254',
						cardType: 'jcb',
						currency: 'Ringgit',
						iban: 'GT40 DWAD 9UHA VEOZ ZF4J 2Y0F OOFD'
					},
					company: {
						address: {
							address: '1649 Timberridge Court',
							city: 'Fayetteville',
							coordinates: {
								lat: 36.084563,
								lng: -94.206082
							},
							postalCode: '72704',
							state: 'AR'
						},
						department: 'Marketing',
						name: 'Bins Group',
						title: 'Senior Sales Associate'
					},
					ein: '21-5278484',
					ssn: '544-66-0745',
					userAgent:
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.6 Safari/537.11',
					crypto: {
						coin: 'Bitcoin',
						wallet: '0xb9fe6979a82fb43fdd9ba9f446846dc4dfca3deb',
						network: 'Ethereum (ERC20)'
					}
				}
			];

			const expectedGroupByResult = {
				male: [
					{
						id: 1,
						firstName: 'Terry',
						lastName: 'Medhurst',
						maidenName: 'Smitham',
						age: 50,
						gender: 'male',
						email: 'atuny0@sohu.com',
						phone: '+63 791 675 8914',
						username: 'atuny0',
						password: '9uQFF1Lh',
						birthDate: '2000-12-25',
						image: 'https://robohash.org/Terry.png?set=set4',
						bloodGroup: 'A-',
						height: 189,
						weight: 75.4,
						eyeColor: 'Green',
						hair: {
							color: 'Black',
							type: 'Strands'
						},
						domain: 'slashdot.org',
						ip: '117.29.86.254',
						address: {
							address: '1745 T Street Southeast',
							city: 'Washington',
							coordinates: {
								lat: 38.867033,
								lng: -76.979235
							},
							postalCode: '20020',
							state: 'DC'
						},
						macAddress: '13:69:BA:56:A3:74',
						university: 'Capitol University',
						bank: {
							cardExpire: '06/22',
							cardNumber: '50380955204220685',
							cardType: 'maestro',
							currency: 'Peso',
							iban: 'NO17 0695 2754 967'
						},
						company: {
							address: {
								address: '629 Debbie Drive',
								city: 'Nashville',
								coordinates: {
									lat: 36.208114,
									lng: -86.58621199999999
								},
								postalCode: '37076',
								state: 'TN'
							},
							department: 'Marketing',
							name: "Blanda-O'Keefe",
							title: 'Help Desk Operator'
						},
						ein: '20-9487066',
						ssn: '661-64-2976',
						userAgent:
							'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24',
						crypto: {
							coin: 'Bitcoin',
							wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
							network: 'Ethereum (ERC20)'
						}
					},
					{
						id: 3,
						firstName: 'Terrill',
						lastName: 'Hills',
						maidenName: 'Hoeger',
						age: 38,
						gender: 'male',
						email: 'rshawe2@51.la',
						phone: '+63 739 292 7942',
						username: 'rshawe2',
						password: 'OWsTbMUgFc',
						birthDate: '1992-12-30',
						image: 'https://robohash.org/Terrill.png?set=set4',
						bloodGroup: 'A-',
						height: 200,
						weight: 105.3,
						eyeColor: 'Gray',
						hair: {
							color: 'Blond',
							type: 'Very curly'
						},
						domain: 'earthlink.net',
						ip: '205.226.160.3',
						address: {
							address: '560 Penstock Drive',
							city: 'Grass Valley',
							coordinates: {
								lat: 39.213076,
								lng: -121.077583
							},
							postalCode: '95945',
							state: 'CA'
						},
						macAddress: 'F2:88:58:64:F7:76',
						university: 'University of Cagayan Valley',
						bank: {
							cardExpire: '10/23',
							cardNumber: '3586082982526703',
							cardType: 'jcb',
							currency: 'Peso',
							iban: 'AT24 1095 9625 1434 9703'
						},
						company: {
							address: {
								address: '18 Densmore Drive',
								city: 'Essex',
								coordinates: {
									lat: 44.492953,
									lng: -73.101883
								},
								postalCode: '05452',
								state: 'VT'
							},
							department: 'Marketing',
							name: 'Lindgren LLC',
							title: 'Mechanical Systems Engineer'
						},
						ein: '48-3951994',
						ssn: '633-89-1926',
						userAgent:
							'Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:21.0.0) Gecko/20121011 Firefox/21.0.0',
						crypto: {
							coin: 'Bitcoin',
							wallet: '0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7',
							network: 'Ethereum (ERC20)'
						}
					}
				],
				female: [
					{
						id: 10,
						firstName: 'Eleanora',
						lastName: 'Price',
						maidenName: 'Cummings',
						age: 37,
						gender: 'female',
						email: 'umcgourty9@jalbum.net',
						phone: '+60 184 408 0824',
						username: 'umcgourty9',
						password: 'i0xzpX',
						birthDate: '1958-08-11',
						image: 'https://robohash.org/Eleanora.png?set=set4',
						bloodGroup: 'O+',
						height: 198,
						weight: 48,
						eyeColor: 'Blue',
						hair: {
							color: 'Chestnut',
							type: 'Wavy'
						},
						domain: 'alibaba.com',
						ip: '73.15.179.178',
						address: {
							address: '8821 West Myrtle Avenue',
							city: 'Glendale',
							coordinates: {
								lat: 33.5404296,
								lng: -112.2488391
							},
							postalCode: '85305',
							state: 'AZ'
						},
						macAddress: 'BC:A9:D8:98:CB:0B',
						university: 'Melaka City Polytechnic',
						bank: {
							cardExpire: '01/24',
							cardNumber: '3557806620295254',
							cardType: 'jcb',
							currency: 'Ringgit',
							iban: 'GT40 DWAD 9UHA VEOZ ZF4J 2Y0F OOFD'
						},
						company: {
							address: {
								address: '1649 Timberridge Court',
								city: 'Fayetteville',
								coordinates: {
									lat: 36.084563,
									lng: -94.206082
								},
								postalCode: '72704',
								state: 'AR'
							},
							department: 'Marketing',
							name: 'Bins Group',
							title: 'Senior Sales Associate'
						},
						ein: '21-5278484',
						ssn: '544-66-0745',
						userAgent:
							'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.6 Safari/537.11',
						crypto: {
							coin: 'Bitcoin',
							wallet: '0xb9fe6979a82fb43fdd9ba9f446846dc4dfca3deb',
							network: 'Ethereum (ERC20)'
						}
					}
				]
			};

			const groupedData = utils.groupBy(mockData, 'gender');

			expect(groupedData).toEqual(expectedGroupByResult);
		});
	});

	describe('extractCountOfDataGroup', () => {
		test('Receives null with empty data group supplied', () => {
			const extractedCount = utils.extractCountOfDataGroup({});

			expect(extractedCount).toEqual(null);
		});
		test('successful', () => {});
	});

	describe('findMinMax', () => {
		test('Receives null with empty data array supplied', () => {
			const minMaxValue = utils.findMinMax([], '__MOCK_KEY__');

			expect(minMaxValue).toBe(null);
		});
		test('Receives min and max values for given data array', () => {
			const mockDataArray = [
				{
					id: 1,
					firstName: 'Terry',
					lastName: 'Medhurst',
					maidenName: 'Smitham',
					age: 50,
					gender: 'male',
					email: 'atuny0@sohu.com',
					phone: '+63 791 675 8914',
					username: 'atuny0',
					password: '9uQFF1Lh',
					birthDate: '2000-12-25',
					image: 'https://robohash.org/Terry.png?set=set4',
					bloodGroup: 'A-',
					height: 189,
					weight: 75.4,
					eyeColor: 'Green',
					hair: {
						color: 'Black',
						type: 'Strands'
					},
					domain: 'slashdot.org',
					ip: '117.29.86.254',
					address: {
						address: '1745 T Street Southeast',
						city: 'Washington',
						coordinates: {
							lat: 38.867033,
							lng: -76.979235
						},
						postalCode: '20020',
						state: 'DC'
					},
					macAddress: '13:69:BA:56:A3:74',
					university: 'Capitol University',
					bank: {
						cardExpire: '06/22',
						cardNumber: '50380955204220685',
						cardType: 'maestro',
						currency: 'Peso',
						iban: 'NO17 0695 2754 967'
					},
					company: {
						address: {
							address: '629 Debbie Drive',
							city: 'Nashville',
							coordinates: {
								lat: 36.208114,
								lng: -86.58621199999999
							},
							postalCode: '37076',
							state: 'TN'
						},
						department: 'Marketing',
						name: "Blanda-O'Keefe",
						title: 'Help Desk Operator'
					},
					ein: '20-9487066',
					ssn: '661-64-2976',
					userAgent:
						'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24',
					crypto: {
						coin: 'Bitcoin',
						wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
						network: 'Ethereum (ERC20)'
					}
				},
				{
					id: 3,
					firstName: 'Terrill',
					lastName: 'Hills',
					maidenName: 'Hoeger',
					age: 38,
					gender: 'male',
					email: 'rshawe2@51.la',
					phone: '+63 739 292 7942',
					username: 'rshawe2',
					password: 'OWsTbMUgFc',
					birthDate: '1992-12-30',
					image: 'https://robohash.org/Terrill.png?set=set4',
					bloodGroup: 'A-',
					height: 200,
					weight: 105.3,
					eyeColor: 'Gray',
					hair: {
						color: 'Blond',
						type: 'Very curly'
					},
					domain: 'earthlink.net',
					ip: '205.226.160.3',
					address: {
						address: '560 Penstock Drive',
						city: 'Grass Valley',
						coordinates: {
							lat: 39.213076,
							lng: -121.077583
						},
						postalCode: '95945',
						state: 'CA'
					},
					macAddress: 'F2:88:58:64:F7:76',
					university: 'University of Cagayan Valley',
					bank: {
						cardExpire: '10/23',
						cardNumber: '3586082982526703',
						cardType: 'jcb',
						currency: 'Peso',
						iban: 'AT24 1095 9625 1434 9703'
					},
					company: {
						address: {
							address: '18 Densmore Drive',
							city: 'Essex',
							coordinates: {
								lat: 44.492953,
								lng: -73.101883
							},
							postalCode: '05452',
							state: 'VT'
						},
						department: 'Marketing',
						name: 'Lindgren LLC',
						title: 'Mechanical Systems Engineer'
					},
					ein: '48-3951994',
					ssn: '633-89-1926',
					userAgent:
						'Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:21.0.0) Gecko/20121011 Firefox/21.0.0',
					crypto: {
						coin: 'Bitcoin',
						wallet: '0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7',
						network: 'Ethereum (ERC20)'
					}
				},
				{
					id: 15,
					firstName: 'Jeanne',
					lastName: 'Halvorson',
					maidenName: 'Cummerata',
					age: 26,
					gender: 'female',
					email: 'kminchelle@qq.com',
					phone: '+86 581 108 7855',
					username: 'kminchelle',
					password: '0lelplR',
					birthDate: '1996-02-02',
					image: 'https://robohash.org/Jeanne.png?set=set4',
					bloodGroup: 'A+',
					height: 176,
					weight: 45.7,
					eyeColor: 'Amber',
					hair: {
						color: 'Blond',
						type: 'Straight'
					},
					domain: 'google.co.uk',
					ip: '78.43.74.226',
					address: {
						address: '4 Old Colony Way',
						city: 'Yarmouth',
						coordinates: {
							lat: 41.697168,
							lng: -70.189992
						},
						postalCode: '02664',
						state: 'MA'
					},
					macAddress: 'D9:DB:D9:5A:01:09',
					university: 'Donghua University, Shanghai',
					bank: {
						cardExpire: '10/23',
						cardNumber: '3588859507772914',
						cardType: 'jcb',
						currency: 'Yuan Renminbi',
						iban: 'FO12 1440 0396 8902 56'
					},
					company: {
						address: {
							address: '22572 Toreador Drive',
							city: 'Salinas',
							coordinates: {
								lat: 36.602449,
								lng: -121.699071
							},
							postalCode: '93908',
							state: 'CA'
						},
						department: 'Marketing',
						name: 'Hahn-MacGyver',
						title: 'Software Test Engineer IV'
					},
					ein: '62-0561095',
					ssn: '855-43-8639',
					userAgent:
						'Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.14 Safari/534.24',
					crypto: {
						coin: 'Bitcoin',
						wallet: '0xb9fc1004bfe7702de522516cf34a5da41c4ef2b5',
						network: 'Ethereum (ERC20)'
					}
				}
			];

			const { min, max } = utils.findMinMax(mockDataArray, 'age') as MinMax;

			expect(min).toBe(26);
			expect(max).toBe(50);
		});
	});

	describe('transformToNameAndPostalCode', () => {
		test('Receives null with empty data array supplied', () => {
			const transformedData = utils.transformToNameAndPostalCode([]);
			expect(transformedData).toBe(null);
		});
		test('Receives nameAndPostalCode resolved data', () => {
			const mockDataArray = [
				{
					id: 1,
					firstName: 'Terry',
					lastName: 'Medhurst',
					maidenName: 'Smitham',
					age: 50,
					gender: 'male',
					email: 'atuny0@sohu.com',
					phone: '+63 791 675 8914',
					username: 'atuny0',
					password: '9uQFF1Lh',
					birthDate: '2000-12-25',
					image: 'https://robohash.org/Terry.png?set=set4',
					bloodGroup: 'A-',
					height: 189,
					weight: 75.4,
					eyeColor: 'Green',
					hair: {
						color: 'Black',
						type: 'Strands'
					},
					domain: 'slashdot.org',
					ip: '117.29.86.254',
					address: {
						address: '1745 T Street Southeast',
						city: 'Washington',
						coordinates: {
							lat: 38.867033,
							lng: -76.979235
						},
						postalCode: '20020',
						state: 'DC'
					},
					macAddress: '13:69:BA:56:A3:74',
					university: 'Capitol University',
					bank: {
						cardExpire: '06/22',
						cardNumber: '50380955204220685',
						cardType: 'maestro',
						currency: 'Peso',
						iban: 'NO17 0695 2754 967'
					},
					company: {
						address: {
							address: '629 Debbie Drive',
							city: 'Nashville',
							coordinates: {
								lat: 36.208114,
								lng: -86.58621199999999
							},
							postalCode: '37076',
							state: 'TN'
						},
						department: 'Marketing',
						name: "Blanda-O'Keefe",
						title: 'Help Desk Operator'
					},
					ein: '20-9487066',
					ssn: '661-64-2976',
					userAgent:
						'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24',
					crypto: {
						coin: 'Bitcoin',
						wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
						network: 'Ethereum (ERC20)'
					}
				},
				{
					id: 3,
					firstName: 'Terrill',
					lastName: 'Hills',
					maidenName: 'Hoeger',
					age: 38,
					gender: 'male',
					email: 'rshawe2@51.la',
					phone: '+63 739 292 7942',
					username: 'rshawe2',
					password: 'OWsTbMUgFc',
					birthDate: '1992-12-30',
					image: 'https://robohash.org/Terrill.png?set=set4',
					bloodGroup: 'A-',
					height: 200,
					weight: 105.3,
					eyeColor: 'Gray',
					hair: {
						color: 'Blond',
						type: 'Very curly'
					},
					domain: 'earthlink.net',
					ip: '205.226.160.3',
					address: {
						address: '560 Penstock Drive',
						city: 'Grass Valley',
						coordinates: {
							lat: 39.213076,
							lng: -121.077583
						},
						postalCode: '95945',
						state: 'CA'
					},
					macAddress: 'F2:88:58:64:F7:76',
					university: 'University of Cagayan Valley',
					bank: {
						cardExpire: '10/23',
						cardNumber: '3586082982526703',
						cardType: 'jcb',
						currency: 'Peso',
						iban: 'AT24 1095 9625 1434 9703'
					},
					company: {
						address: {
							address: '18 Densmore Drive',
							city: 'Essex',
							coordinates: {
								lat: 44.492953,
								lng: -73.101883
							},
							postalCode: '05452',
							state: 'VT'
						},
						department: 'Marketing',
						name: 'Lindgren LLC',
						title: 'Mechanical Systems Engineer'
					},
					ein: '48-3951994',
					ssn: '633-89-1926',
					userAgent:
						'Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:21.0.0) Gecko/20121011 Firefox/21.0.0',
					crypto: {
						coin: 'Bitcoin',
						wallet: '0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7',
						network: 'Ethereum (ERC20)'
					}
				},
				{
					id: 10,
					firstName: 'Eleanora',
					lastName: 'Price',
					maidenName: 'Cummings',
					age: 37,
					gender: 'female',
					email: 'umcgourty9@jalbum.net',
					phone: '+60 184 408 0824',
					username: 'umcgourty9',
					password: 'i0xzpX',
					birthDate: '1958-08-11',
					image: 'https://robohash.org/Eleanora.png?set=set4',
					bloodGroup: 'O+',
					height: 198,
					weight: 48,
					eyeColor: 'Blue',
					hair: {
						color: 'Chestnut',
						type: 'Wavy'
					},
					domain: 'alibaba.com',
					ip: '73.15.179.178',
					address: {
						address: '8821 West Myrtle Avenue',
						city: 'Glendale',
						coordinates: {
							lat: 33.5404296,
							lng: -112.2488391
						},
						postalCode: '85305',
						state: 'AZ'
					},
					macAddress: 'BC:A9:D8:98:CB:0B',
					university: 'Melaka City Polytechnic',
					bank: {
						cardExpire: '01/24',
						cardNumber: '3557806620295254',
						cardType: 'jcb',
						currency: 'Ringgit',
						iban: 'GT40 DWAD 9UHA VEOZ ZF4J 2Y0F OOFD'
					},
					company: {
						address: {
							address: '1649 Timberridge Court',
							city: 'Fayetteville',
							coordinates: {
								lat: 36.084563,
								lng: -94.206082
							},
							postalCode: '72704',
							state: 'AR'
						},
						department: 'Marketing',
						name: 'Bins Group',
						title: 'Senior Sales Associate'
					},
					ein: '21-5278484',
					ssn: '544-66-0745',
					userAgent:
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.6 Safari/537.11',
					crypto: {
						coin: 'Bitcoin',
						wallet: '0xb9fe6979a82fb43fdd9ba9f446846dc4dfca3deb',
						network: 'Ethereum (ERC20)'
					}
				},
				{
					id: 15,
					firstName: 'Jeanne',
					lastName: 'Halvorson',
					maidenName: 'Cummerata',
					age: 26,
					gender: 'female',
					email: 'kminchelle@qq.com',
					phone: '+86 581 108 7855',
					username: 'kminchelle',
					password: '0lelplR',
					birthDate: '1996-02-02',
					image: 'https://robohash.org/Jeanne.png?set=set4',
					bloodGroup: 'A+',
					height: 176,
					weight: 45.7,
					eyeColor: 'Amber',
					hair: {
						color: 'Blond',
						type: 'Straight'
					},
					domain: 'google.co.uk',
					ip: '78.43.74.226',
					address: {
						address: '4 Old Colony Way',
						city: 'Yarmouth',
						coordinates: {
							lat: 41.697168,
							lng: -70.189992
						},
						postalCode: '02664',
						state: 'MA'
					},
					macAddress: 'D9:DB:D9:5A:01:09',
					university: 'Donghua University, Shanghai',
					bank: {
						cardExpire: '10/23',
						cardNumber: '3588859507772914',
						cardType: 'jcb',
						currency: 'Yuan Renminbi',
						iban: 'FO12 1440 0396 8902 56'
					},
					company: {
						address: {
							address: '22572 Toreador Drive',
							city: 'Salinas',
							coordinates: {
								lat: 36.602449,
								lng: -121.699071
							},
							postalCode: '93908',
							state: 'CA'
						},
						department: 'Marketing',
						name: 'Hahn-MacGyver',
						title: 'Software Test Engineer IV'
					},
					ein: '62-0561095',
					ssn: '855-43-8639',
					userAgent:
						'Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.14 Safari/534.24',
					crypto: {
						coin: 'Bitcoin',
						wallet: '0xb9fc1004bfe7702de522516cf34a5da41c4ef2b5',
						network: 'Ethereum (ERC20)'
					}
				},
				{
					id: 25,
					firstName: 'Edwina',
					lastName: 'Ernser',
					maidenName: 'Kiehn',
					age: 21,
					gender: 'female',
					email: 'dfundello@amazon.co.jp',
					phone: '+86 376 986 8945',
					username: 'dfundello',
					password: 'k9zgV68UKw8m',
					birthDate: '2000-09-28',
					image: 'https://robohash.org/Edwina.png?set=set4',
					bloodGroup: 'O+',
					height: 180,
					weight: 102.1,
					eyeColor: 'Blue',
					hair: {
						color: 'Brown',
						type: 'Wavy'
					},
					domain: 'apple.com',
					ip: '48.30.193.203',
					address: {
						address: '1513 Cathy Street',
						city: 'Savannah',
						coordinates: {
							lat: 32.067416,
							lng: -81.125331
						},
						postalCode: '31415',
						state: 'GA'
					},
					macAddress: 'EC:59:D3:FC:65:92',
					university: 'Wuhan University of Technology',
					bank: {
						cardExpire: '10/23',
						cardNumber: '3558628665594956',
						cardType: 'jcb',
						currency: 'Yuan Renminbi',
						iban: 'RS85 6347 5884 2820 5764 23'
					},
					company: {
						address: {
							address: '125 John Street',
							city: 'Santa Cruz',
							coordinates: {
								lat: 36.950901,
								lng: -122.046881
							},
							postalCode: '95060',
							state: 'CA'
						},
						department: 'Marketing',
						name: 'Volkman Group',
						title: 'Cost Accountant'
					},
					ein: '14-6307509',
					ssn: '266-43-5297',
					userAgent:
						'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1063.0 Safari/536.3',
					crypto: {
						coin: 'Bitcoin',
						wallet: '0xb9fc1004bfe7702de522516cf34a5da41c4ef2b5',
						network: 'Ethereum (ERC20)'
					}
				}
			];
			const transformedData = utils.transformToNameAndPostalCode(mockDataArray);

			expect(transformedData).toEqual({
				TerryMedhurst: '20020',
				TerrillHills: '95945',
				EleanoraPrice: '85305',
				JeanneHalvorson: '02664',
				EdwinaErnser: '31415'
			});
		});
	});

	describe('formResponseRecordForDepartment', () => {
		test('Receives null with empty array supplied', () => {
			const formedResponse = utils.formResponseRecordForDepartment(
				[],
				utils.groupBy,
				utils.findMinMax,
				utils.transformToNameAndPostalCode
			);
			expect(formedResponse).toBe(null);
		});

		const mockData = [
			{
				id: 1,
				firstName: 'Terry',
				lastName: 'Medhurst',
				maidenName: 'Smitham',
				age: 50,
				gender: 'male',
				email: 'atuny0@sohu.com',
				phone: '+63 791 675 8914',
				username: 'atuny0',
				password: '9uQFF1Lh',
				birthDate: '2000-12-25',
				image: 'https://robohash.org/Terry.png?set=set4',
				bloodGroup: 'A-',
				height: 189,
				weight: 75.4,
				eyeColor: 'Green',
				hair: {
					color: 'Black',
					type: 'Strands'
				},
				domain: 'slashdot.org',
				ip: '117.29.86.254',
				address: {
					address: '1745 T Street Southeast',
					city: 'Washington',
					coordinates: {
						lat: 38.867033,
						lng: -76.979235
					},
					postalCode: '20020',
					state: 'DC'
				},
				macAddress: '13:69:BA:56:A3:74',
				university: 'Capitol University',
				bank: {
					cardExpire: '06/22',
					cardNumber: '50380955204220685',
					cardType: 'maestro',
					currency: 'Peso',
					iban: 'NO17 0695 2754 967'
				},
				company: {
					address: {
						address: '629 Debbie Drive',
						city: 'Nashville',
						coordinates: {
							lat: 36.208114,
							lng: -86.58621199999999
						},
						postalCode: '37076',
						state: 'TN'
					},
					department: 'Marketing',
					name: "Blanda-O'Keefe",
					title: 'Help Desk Operator'
				},
				ein: '20-9487066',
				ssn: '661-64-2976',
				userAgent:
					'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24',
				crypto: {
					coin: 'Bitcoin',
					wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
					network: 'Ethereum (ERC20)'
				}
			},
			{
				id: 3,
				firstName: 'Terrill',
				lastName: 'Hills',
				maidenName: 'Hoeger',
				age: 38,
				gender: 'male',
				email: 'rshawe2@51.la',
				phone: '+63 739 292 7942',
				username: 'rshawe2',
				password: 'OWsTbMUgFc',
				birthDate: '1992-12-30',
				image: 'https://robohash.org/Terrill.png?set=set4',
				bloodGroup: 'A-',
				height: 200,
				weight: 105.3,
				eyeColor: 'Gray',
				hair: {
					color: 'Blond',
					type: 'Very curly'
				},
				domain: 'earthlink.net',
				ip: '205.226.160.3',
				address: {
					address: '560 Penstock Drive',
					city: 'Grass Valley',
					coordinates: {
						lat: 39.213076,
						lng: -121.077583
					},
					postalCode: '95945',
					state: 'CA'
				},
				macAddress: 'F2:88:58:64:F7:76',
				university: 'University of Cagayan Valley',
				bank: {
					cardExpire: '10/23',
					cardNumber: '3586082982526703',
					cardType: 'jcb',
					currency: 'Peso',
					iban: 'AT24 1095 9625 1434 9703'
				},
				company: {
					address: {
						address: '18 Densmore Drive',
						city: 'Essex',
						coordinates: {
							lat: 44.492953,
							lng: -73.101883
						},
						postalCode: '05452',
						state: 'VT'
					},
					department: 'Marketing',
					name: 'Lindgren LLC',
					title: 'Mechanical Systems Engineer'
				},
				ein: '48-3951994',
				ssn: '633-89-1926',
				userAgent:
					'Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:21.0.0) Gecko/20121011 Firefox/21.0.0',
				crypto: {
					coin: 'Bitcoin',
					wallet: '0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7',
					network: 'Ethereum (ERC20)'
				}
			},
			{
				id: 10,
				firstName: 'Eleanora',
				lastName: 'Price',
				maidenName: 'Cummings',
				age: 37,
				gender: 'female',
				email: 'umcgourty9@jalbum.net',
				phone: '+60 184 408 0824',
				username: 'umcgourty9',
				password: 'i0xzpX',
				birthDate: '1958-08-11',
				image: 'https://robohash.org/Eleanora.png?set=set4',
				bloodGroup: 'O+',
				height: 198,
				weight: 48,
				eyeColor: 'Blue',
				hair: {
					color: 'Chestnut',
					type: 'Wavy'
				},
				domain: 'alibaba.com',
				ip: '73.15.179.178',
				address: {
					address: '8821 West Myrtle Avenue',
					city: 'Glendale',
					coordinates: {
						lat: 33.5404296,
						lng: -112.2488391
					},
					postalCode: '85305',
					state: 'AZ'
				},
				macAddress: 'BC:A9:D8:98:CB:0B',
				university: 'Melaka City Polytechnic',
				bank: {
					cardExpire: '01/24',
					cardNumber: '3557806620295254',
					cardType: 'jcb',
					currency: 'Ringgit',
					iban: 'GT40 DWAD 9UHA VEOZ ZF4J 2Y0F OOFD'
				},
				company: {
					address: {
						address: '1649 Timberridge Court',
						city: 'Fayetteville',
						coordinates: {
							lat: 36.084563,
							lng: -94.206082
						},
						postalCode: '72704',
						state: 'AR'
					},
					department: 'Marketing',
					name: 'Bins Group',
					title: 'Senior Sales Associate'
				},
				ein: '21-5278484',
				ssn: '544-66-0745',
				userAgent:
					'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.6 Safari/537.11',
				crypto: {
					coin: 'Bitcoin',
					wallet: '0xb9fe6979a82fb43fdd9ba9f446846dc4dfca3deb',
					network: 'Ethereum (ERC20)'
				}
			},
			{
				id: 15,
				firstName: 'Jeanne',
				lastName: 'Halvorson',
				maidenName: 'Cummerata',
				age: 26,
				gender: 'female',
				email: 'kminchelle@qq.com',
				phone: '+86 581 108 7855',
				username: 'kminchelle',
				password: '0lelplR',
				birthDate: '1996-02-02',
				image: 'https://robohash.org/Jeanne.png?set=set4',
				bloodGroup: 'A+',
				height: 176,
				weight: 45.7,
				eyeColor: 'Amber',
				hair: {
					color: 'Blond',
					type: 'Straight'
				},
				domain: 'google.co.uk',
				ip: '78.43.74.226',
				address: {
					address: '4 Old Colony Way',
					city: 'Yarmouth',
					coordinates: {
						lat: 41.697168,
						lng: -70.189992
					},
					postalCode: '02664',
					state: 'MA'
				},
				macAddress: 'D9:DB:D9:5A:01:09',
				university: 'Donghua University, Shanghai',
				bank: {
					cardExpire: '10/23',
					cardNumber: '3588859507772914',
					cardType: 'jcb',
					currency: 'Yuan Renminbi',
					iban: 'FO12 1440 0396 8902 56'
				},
				company: {
					address: {
						address: '22572 Toreador Drive',
						city: 'Salinas',
						coordinates: {
							lat: 36.602449,
							lng: -121.699071
						},
						postalCode: '93908',
						state: 'CA'
					},
					department: 'Marketing',
					name: 'Hahn-MacGyver',
					title: 'Software Test Engineer IV'
				},
				ein: '62-0561095',
				ssn: '855-43-8639',
				userAgent:
					'Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.14 Safari/534.24',
				crypto: {
					coin: 'Bitcoin',
					wallet: '0xb9fc1004bfe7702de522516cf34a5da41c4ef2b5',
					network: 'Ethereum (ERC20)'
				}
			},
			{
				id: 25,
				firstName: 'Edwina',
				lastName: 'Ernser',
				maidenName: 'Kiehn',
				age: 21,
				gender: 'female',
				email: 'dfundello@amazon.co.jp',
				phone: '+86 376 986 8945',
				username: 'dfundello',
				password: 'k9zgV68UKw8m',
				birthDate: '2000-09-28',
				image: 'https://robohash.org/Edwina.png?set=set4',
				bloodGroup: 'O+',
				height: 180,
				weight: 102.1,
				eyeColor: 'Blue',
				hair: {
					color: 'Brown',
					type: 'Wavy'
				},
				domain: 'apple.com',
				ip: '48.30.193.203',
				address: {
					address: '1513 Cathy Street',
					city: 'Savannah',
					coordinates: {
						lat: 32.067416,
						lng: -81.125331
					},
					postalCode: '31415',
					state: 'GA'
				},
				macAddress: 'EC:59:D3:FC:65:92',
				university: 'Wuhan University of Technology',
				bank: {
					cardExpire: '10/23',
					cardNumber: '3558628665594956',
					cardType: 'jcb',
					currency: 'Yuan Renminbi',
					iban: 'RS85 6347 5884 2820 5764 23'
				},
				company: {
					address: {
						address: '125 John Street',
						city: 'Santa Cruz',
						coordinates: {
							lat: 36.950901,
							lng: -122.046881
						},
						postalCode: '95060',
						state: 'CA'
					},
					department: 'Marketing',
					name: 'Volkman Group',
					title: 'Cost Accountant'
				},
				ein: '14-6307509',
				ssn: '266-43-5297',
				userAgent:
					'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1063.0 Safari/536.3',
				crypto: {
					coin: 'Bitcoin',
					wallet: '0xb9fc1004bfe7702de522516cf34a5da41c4ef2b5',
					network: 'Ethereum (ERC20)'
				}
			}
		];

		test('Receives null when findMinMax returns null', () => {
			jest.spyOn(utils, 'findMinMax').mockImplementation(() => null);
			const formedResponse = utils.formResponseRecordForDepartment(
				mockData,
				utils.groupBy,
				utils.findMinMax,
				utils.transformToNameAndPostalCode
			);

			expect(formedResponse).toBe(null);
		});

		test('Receives null when transformToNameAndPostalCode returns null', () => {
			jest
				.spyOn(utils, 'transformToNameAndPostalCode')
				.mockImplementation(() => null);
			const formedResponse = utils.formResponseRecordForDepartment(
				mockData,
				utils.groupBy,
				utils.findMinMax,
				utils.transformToNameAndPostalCode
			);

			expect(formedResponse).toBe(null);
		});

		test('Receives successful formResponse when appropriate data supplied', () => {
			const formedResponse = utils.formResponseRecordForDepartment(
				mockData,
				utils.groupBy,
				utils.findMinMax,
				utils.transformToNameAndPostalCode
			);

			expect(formedResponse).toEqual({
				male: 2,
				female: 3,
				hair: {
					Black: 1,
					Blond: 2,
					Chestnut: 1,
					Brown: 1
				},
				ageRange: '21-50',
				addressUser: {
					TerryMedhurst: '20020',
					TerrillHills: '95945',
					EleanoraPrice: '85305',
					JeanneHalvorson: '02664',
					EdwinaErnser: '31415'
				}
			});
		});
	});

	describe('formResponse', () => {
		test('Receives null with empty object supplied', () => {
			const formedResponse = utils.formResponse({});

			expect(formedResponse).toBe(null);
		});
		test('Receives proper formed response with appropriate data supplied', () => {
			const mockData = {
				Marketing: [
					{
						id: 1,
						firstName: 'Terry',
						lastName: 'Medhurst',
						maidenName: 'Smitham',
						age: 50,
						gender: 'male',
						email: 'atuny0@sohu.com',
						phone: '+63 791 675 8914',
						username: 'atuny0',
						password: '9uQFF1Lh',
						birthDate: '2000-12-25',
						image: 'https://robohash.org/Terry.png?set=set4',
						bloodGroup: 'A-',
						height: 189,
						weight: 75.4,
						eyeColor: 'Green',
						hair: {
							color: 'Black',
							type: 'Strands'
						},
						domain: 'slashdot.org',
						ip: '117.29.86.254',
						address: {
							address: '1745 T Street Southeast',
							city: 'Washington',
							coordinates: {
								lat: 38.867033,
								lng: -76.979235
							},
							postalCode: '20020',
							state: 'DC'
						},
						macAddress: '13:69:BA:56:A3:74',
						university: 'Capitol University',
						bank: {
							cardExpire: '06/22',
							cardNumber: '50380955204220685',
							cardType: 'maestro',
							currency: 'Peso',
							iban: 'NO17 0695 2754 967'
						},
						company: {
							address: {
								address: '629 Debbie Drive',
								city: 'Nashville',
								coordinates: {
									lat: 36.208114,
									lng: -86.58621199999999
								},
								postalCode: '37076',
								state: 'TN'
							},
							department: 'Marketing',
							name: "Blanda-O'Keefe",
							title: 'Help Desk Operator'
						},
						ein: '20-9487066',
						ssn: '661-64-2976',
						userAgent:
							'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24',
						crypto: {
							coin: 'Bitcoin',
							wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
							network: 'Ethereum (ERC20)'
						}
					},
					{
						id: 3,
						firstName: 'Terrill',
						lastName: 'Hills',
						maidenName: 'Hoeger',
						age: 38,
						gender: 'male',
						email: 'rshawe2@51.la',
						phone: '+63 739 292 7942',
						username: 'rshawe2',
						password: 'OWsTbMUgFc',
						birthDate: '1992-12-30',
						image: 'https://robohash.org/Terrill.png?set=set4',
						bloodGroup: 'A-',
						height: 200,
						weight: 105.3,
						eyeColor: 'Gray',
						hair: {
							color: 'Blond',
							type: 'Very curly'
						},
						domain: 'earthlink.net',
						ip: '205.226.160.3',
						address: {
							address: '560 Penstock Drive',
							city: 'Grass Valley',
							coordinates: {
								lat: 39.213076,
								lng: -121.077583
							},
							postalCode: '95945',
							state: 'CA'
						},
						macAddress: 'F2:88:58:64:F7:76',
						university: 'University of Cagayan Valley',
						bank: {
							cardExpire: '10/23',
							cardNumber: '3586082982526703',
							cardType: 'jcb',
							currency: 'Peso',
							iban: 'AT24 1095 9625 1434 9703'
						},
						company: {
							address: {
								address: '18 Densmore Drive',
								city: 'Essex',
								coordinates: {
									lat: 44.492953,
									lng: -73.101883
								},
								postalCode: '05452',
								state: 'VT'
							},
							department: 'Marketing',
							name: 'Lindgren LLC',
							title: 'Mechanical Systems Engineer'
						},
						ein: '48-3951994',
						ssn: '633-89-1926',
						userAgent:
							'Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:21.0.0) Gecko/20121011 Firefox/21.0.0',
						crypto: {
							coin: 'Bitcoin',
							wallet: '0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7',
							network: 'Ethereum (ERC20)'
						}
					}
				],
				Services: [
					{
						id: 2,
						firstName: 'Sheldon',
						lastName: 'Quigley',
						maidenName: 'Cole',
						age: 28,
						gender: 'male',
						email: 'hbingley1@plala.or.jp',
						phone: '+7 813 117 7139',
						username: 'hbingley1',
						password: 'CQutx25i8r',
						birthDate: '2003-08-02',
						image: 'https://robohash.org/Sheldon.png?set=set4',
						bloodGroup: 'O+',
						height: 187,
						weight: 74,
						eyeColor: 'Brown',
						hair: {
							color: 'Blond',
							type: 'Curly'
						},
						domain: '51.la',
						ip: '253.240.20.181',
						address: {
							address: '6007 Applegate Lane',
							city: 'Louisville',
							coordinates: {
								lat: 38.1343013,
								lng: -85.6498512
							},
							postalCode: '40219',
							state: 'KY'
						},
						macAddress: '13:F1:00:DA:A4:12',
						university: 'Stavropol State Technical University',
						bank: {
							cardExpire: '10/23',
							cardNumber: '5355920631952404',
							cardType: 'mastercard',
							currency: 'Ruble',
							iban: 'MD63 L6YC 8YH4 QVQB XHIK MTML'
						},
						company: {
							address: {
								address: '8821 West Myrtle Avenue',
								city: 'Glendale',
								coordinates: {
									lat: 33.5404296,
									lng: -112.2488391
								},
								postalCode: '85305',
								state: 'AZ'
							},
							department: 'Services',
							name: 'Aufderhar-Cronin',
							title: 'Senior Cost Accountant'
						},
						ein: '52-5262907',
						ssn: '447-08-9217',
						userAgent:
							'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.30 (KHTML, like Gecko) Ubuntu/11.04 Chromium/12.0.742.112 Chrome/12.0.742.112 Safari/534.30',
						crypto: {
							coin: 'Bitcoin',
							wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
							network: 'Ethereum (ERC20)'
						}
					}
				]
			};

			const formedResponse = utils.formResponse(mockData);

			expect(formedResponse).toEqual({
				Marketing: {
					male: 2,
					hair: {
						Black: 1,
						Blond: 1
					},
					ageRange: '38-50',
					addressUser: {
						TerryMedhurst: '20020',
						TerrillHills: '95945'
					}
				},
				Services: {
					male: 1,
					hair: {
						Blond: 1
					},
					ageRange: '28',
					addressUser: {
						SheldonQuigley: '40219'
					}
				}
			});
		});
	});
});
