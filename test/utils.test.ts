import {
	groupBy,
	extractCountOfDataGroup,
	findMinMax,
	transformToNameAndPostalCode,
	formResponseRecordForDepartment
} from '../src/utils';

describe('All utils', () => {
	describe('groupBy', () => {
		test('Receives null with empty data array supplied', () => {
			const groupedData = groupBy([], '__MOCK_KEY__');

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

			const groupedData = groupBy(mockData, 'hair', 'color');

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

			const groupedData = groupBy(mockData, 'gender');

			expect(groupedData).toEqual(expectedGroupByResult);
		});
	});

	describe('extractCountOfDataGroup', () => {
		test('Receives null with empty data group supplied', () => {
			const extractedCount = extractCountOfDataGroup({});

			expect(extractedCount).toEqual(null);
		});
		test('successful', () => {});
	});

	describe('findMinMax', () => {
		test('Receives null with empty data array supplied', () => {
			const minMaxValue = findMinMax([], '__MOCK_KEY__');

			expect(minMaxValue).toBe(null);
		});
		test('successful', () => {});
	});

	describe('transformToNameAndPostalCode', () => {
		test('Receives null with empty data array supplied', () => {
			const transformedData = transformToNameAndPostalCode([]);

			expect(transformedData).toBe(null);
		});
		test('successful', () => {});
	});

	describe('formResponseRecordForDepartment', () => {
		test('successful', () => {});
	});

	describe('formResponse', () => {
		test('successful', () => {});
	});
});
