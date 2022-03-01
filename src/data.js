/*
 * Граф "ворот"/"дыр" между системами.
 * 
 * Корневой ключ - система.
 * Вложенные ключи - системы, в которые можно "прыгнуть".
 * Значения, соответствующие вложенным ключам - прыжковая дыра или их массив.
**/

const jumpData = {
	"New York": {
		"Colorado": [
			{ loc: "c3", gate: false, hidden: false },
			{ loc: "d2", gate: true, hidden: false }
		],
		"Texas": [
			{ loc: "e7", gate: false, hidden: false },
			{ loc: "fg6", gate: true, hidden: false }
		],
		"Alaska": { loc: "g5", gate: true, hidden: true },
		"Magellan": { loc: "d7", gate: true, hidden: true },
		"California": { loc: "b6", gate: true, hidden: false }
	},
	"Texas": {
		"Bering": { loc: "g5", gate: true, hidden: false },
		"Hudson": [
			{ loc: "d7", gate: true, hidden: false },
			{ loc: "e7", gate: false, hidden: false }
		],
		"California": { loc: "c4", gate: false, hidden: false },
		"New York": [
			{ loc: "e2", gate: true, hidden: false },
			{ loc: "d23", gate: false, hidden: true}
		]
	},
	"Bering": {
		"Texas": { loc: "d2", gate: true, hidden: false },
		"Hamburg": [
			{ loc: "e7", gate: true, hidden: false },
			{ loc: "d6", gate: false, hidden: false }
		],
		"Hudson": { loc: "c4", gate: false, hidden: false }
	},
	"Hudson": {
		"Bering": { loc: "f56", gate: false, hidden: false },
		"Hamburg": { loc: "de7", gate: true, hidden: false },
		"Texas": [
			{ loc: "d2", gate: true, hidden: false },
			{ loc: "cd3", gate: false, hidden: false }
		]
	},
	"Hamburg": {
		"Bering": [
			{ loc: "e2", gate: false, hidden: false },
			{ loc: "f2", gate: true, hidden: false }
		],
		"Frankfurt": [
			{ loc: "f5", gate: false, hidden: false },
			{ loc: "fg4", gate: false, hidden: false }
		],
		"New Berlin": [
			{ loc: "de7", gate: false, hidden: false },
			{ loc: "e7", gate: true, hidden: false }
		],
		"Hudson": { loc: "c2", gate: true, hidden: false }
	},
	"Frankfurt": {
		"Sigma 13": [
			{ loc: "de2", gate: true, hidden: false },
			{ loc: "e3", gate: false, hidden: false }
		],
		"Dresden": { loc: "d67", gate: false, hidden: false },
		"New Berlin": { loc: "b6", gate: true, hidden: false },
		"Hamburg": [
			{ loc: "d34", gate: false, hidden: false },
			{ loc: "cd3", gate: false, hidden: false }
		]
	},
	"New Berlin": {
		"Sigma 13": { loc: "e5", gate: false, hidden: false },
		"Frankfurt": { loc: "g4", gate: true, hidden: false },
		"Dresden": [
			{ loc: "c5", gate: true, hidden: false },
			{ loc: "d6", gate: false, hidden: false },
		],
		"Stuttgart": { loc: "de7", gate: true, hidden: false },
		"Hamburg": [
			{ loc: "c3", gate: false, hidden: false },
			{ loc: "de2", gate: true, hidden: false }
		]
	},
	"Dresden": {
		"New Berlin": [
			{ loc: "e2", gate: true, hidden: false },
			{ loc: "d3", gate: false, hidden: false }
		],
		"Frankfurt": { loc: "g45", gate: false, hidden: false },
		"Omega 11": { loc: "c4", gate: false, hidden: false },
		"Stuttgart": { loc: "c3", gate: false, hidden: false }
	},
	"Stuttgart": {
		"New Berlin": { loc: "g3", gate: true, hidden: false },
		"Dresden": { loc: "g4", gate: false, hidden: false },
		"Omega 11": [
			{ loc: "cd6", gate: false, hidden: false },
			{ loc: "cd7", gate: true, hidden: false }
		],
		"Omega 7": { loc: "b4", gate: true, hidden: false }
	},
	"Omega 11": {
		"Stuttgart": [
			{ loc: "d23", gate: false, hidden: false },
			{ loc: "ef3", gate: true, hidden: false }
		],
		"Dresden": { loc: "ef3", gate: false, hidden: false },
		"Omega 41": { loc: "c5", gate: false, hidden: false },
		"Omega 5": { loc: "bc4", gate: false, hidden: false },
		"Omega 7": { loc: "c34", gate: false, hidden: false }
	},
	"Omega 7": {
		"Stuttgart": { loc: "g5", gate: true, hidden: false },
		"Omega 11": { loc: "fg6", gate: false, hidden: false },
		"Omega 5": { loc: "c6", gate: false, hidden: false },
		"Omega 3": { loc: "b5", gate: true, hidden: false }
	},
	"Omega 5": {
		"Omega 3": { loc: "d34", gate: false, hidden: false },
		"Omega 7": { loc: "d34", gate: false, hidden: false },
		"Omega 11": { loc: "ef4", gate: false, hidden: false },
		"Omega 41": { loc: "d56", gate: false, hidden: false },
		"Cambridge": { loc: "cd5", gate: false, hidden: false }
	},
	"Omega 3": {
		"Omega 7": { loc: "g5", gate: true, hidden: false },
		"Omega 5": { loc: "d7", gate: false, hidden: false },
		"Cambridge": [
			{ loc: "b45", gate: false, hidden: false },
			{ loc: "b56", gate: true, hidden: false }
		]
	},
	"Cambridge": {
		"Leeds": { loc: "f3", gate: false, hidden: false },
		"Omega 3": [
			{ loc: "f3", gate: false, hidden: false },
			{ loc: "g4", gate: true, hidden: false }
		],
		"Omega 5": { loc: "f6", gate: false, hidden: false },
		"New London": [
			{ loc: "c3", gate: false, hidden: false },
			{ loc: "b3", gate: true, hidden: false }
		],
	},
	"New London": {
		"Leeds": [
			{ loc: "c23", gate: false, hidden: false },
			{ loc: "d2", gate: true, hidden: false }
		],
		"Manchester": { loc: "g3", gate: true, hidden: false },
		"Cambridge": [
			{ loc: "g5", gate: false, hidden: false },
			{ loc: "g6", gate: true, hidden: false }
		],
		"Dublin": [
			{ loc: "b5", gate: false, hidden: false },
			{ loc: "b6", gate: true, hidden: false }
		]
	},
	"Dublin": {
		"Leeds": { loc: "e3", gate: false, hidden: false },
		"New London": [
			{ loc: "e3", gate: false, hidden: true },
			{ loc: "f4", gate: true, hidden: false }
		],
	},
	"Leeds": {
		"Tau 31": { loc: "f23", gate: true, hidden: false },
		"Magellan": { loc: "ef6", gate: false, hidden: false },
		"Manchester": { loc: "f6", gate: false, hidden: false },
		"Cambridge": { loc: "d6", gate: false, hidden: false },
		"New London": [
			{ loc: "d6", gate: false, hidden: false },
			{ loc: "de7", gate: true, hidden: false }
		],
		"Dublin": { loc: "c6", gate: false, hidden: false },
		"Edinburgh": [
			{ loc: "c3", gate: false, hidden: false },
			{ loc: "b56", gate: true, hidden: false }
		],
	},
	"Edinburgh": {
		"Tau 31": { loc: "cd23", gate: false, hidden: false },
		"Leeds": [
			{ loc: "f3", gate: false, hidden: false },
			{ loc: "fg45", gate: true, hidden: false }
		]
	},
	"Manchester": {
		"Cortez": { loc: "f2", gate: true, hidden: false },
		"Magellan": [
			{ loc: "f3", gate: false, hidden: false },
			{ loc: "g4", gate: true, hidden: false }
		],
		"New London": { loc: "b4", gate: true, hidden: false },
		"Leeds": { loc: "d3", gate: false, hidden: false }
	},
	"Magellan": {
		"Cortez": { loc: "c2", gate: false, hidden: false },
		"California": { loc: "g4", gate: true, hidden: false },
		"New York": { loc: "d4", gate: true, hidden: true },
		"Manchester": [
			{ loc: "c4", gate: false, hidden: false },
			{ loc: "bc5", gate: true, hidden: false }
		],
		"Leeds": { loc: "c3", gate: false, hidden: false }
	},
	"Cortez": {
		"California": [
			{ loc: "fg5", gate: false, hidden: false },
			{ loc: "g45", gate: true, hidden: false }
		],
		"Magellan": { loc: "e6", gate: false, hidden: false },
		"Manchester": { loc: "b45", gate: false, hidden: false }
	},
	"California": {
		"New York": { loc: "f3", gate: true, hidden: false },
		"Texas": { loc: "fg5", gate: false, hidden: false },
		"Magellan": { loc: "c67", gate: true, hidden: false },
		"Cortez": [
			{ loc: "bc5", gate: false, hidden: false },
			{ loc: "b4", gate: true, hidden: false }
		]
	},
	"Colorado": {
		"Galileo": [
			{ loc: "d3", gate: false, hidden: false },
			{ loc: "f2", gate: true, hidden: false }
		],
		"New York": [
			{ loc: "d7", gate: false, hidden: false },
			{ loc: "e7", gate: true, hidden: false }
		],
		"Kepler": [
			{ loc: "b4", gate: false, hidden: false },
			{ loc: "bc3", gate: true, hidden: false }
		]
	},
	"Kepler": {
		"Shikoku": { loc: "d2", gate: true, hidden: false },
		"Galileo": { loc: "fg4", gate: false, hidden: false },
		"Colorado": [
			{ loc: "bc6", gate: false, hidden: false },
			{ loc: "de7", gate: true, hidden: false }
		]
	},
	"Galileo": {
		"Shikoku": [
			{ loc: "b2", gate: false, hidden: false },
			{ loc: "e12", gate: true, hidden: false }
		],
		"Colorado": [
			{ loc: "cd6", gate: false, hidden: false },
			{ loc: "d7", gate: true, hidden: false}
		],
		"Kepler": { loc: "b3", gate: false, hidden: false }
	},
	"Shikoku": {
		"New Tokyo": { loc: "e2", gate: true, hidden: false },
		"Galileo": [
			{ loc: "e7", gate: false, hidden: false },
			{ loc: "f7", gate: true, hidden: false }
		],
		"Kepler": { loc: "d7", gate: true, hidden: false },
		"Kyushu": { loc: "d3", gate: false, hidden: false }
	},
	"Hokkaido": {
		"Chugoku": { loc: "c3", gate: false, hidden: false },
		"Tohoku": { loc: "e3", gate: false, hidden: false },
		"New Tokyo": {loc: "de67", gate: true, hidden: false },
		"Kyushu": { loc: "c6", gate: false, hidden: false }
	},
	"Chugoku": {
		"Tohoku": { loc: "e45", gate: false, hidden: false },
		"Sigma 13": { loc: "e5", gate: false, hidden: false },
		"Honshu": { loc: "e5", gate: false, hidden: false },
		"Hokkaido": { loc: "d56", gate: false, hidden: false }
	},
	"Tohoku": {
		"Chugoku": { loc: "ab5", gate: false, hidden: false },
		"Hokkaido": { loc: "b5", gate: false, hidden: false }
	},
	"Honshu": {
		"Chugoku": { loc: "d23", gate: false, hidden: false },
		"Sigma 19": [
			{ loc: "g3", gate: false, hidden: false },
			{ loc: "g4", gate: true, hidden: false }
		],
		"Sigma 13": [
			{ loc: "f67", gate: false, hidden: false },
			{ loc: "fg6", gate: true, hidden: false }
		],
		"New Tokyo": [
			{ loc: "c34", gate: false, hidden: true },
			{ loc: "b5", gate: true, hidden: false }
		]
	},
	"Kyushu": {
		"Hokkaido": { loc: "e2", gate: false, hidden: true },
		"New Tokyo": [
			{ loc: "g4", gate: false, hidden: false },
			{ loc: "g3", gate: true, hidden: false }
		],
		"Shikoku": { loc: "g45", gate: false, hidden: false },
		"Tau 29": { loc: "b5", gate: true, hidden: false },
		"Tau 23": { loc: "bc4", gate: false, hidden: false }
	},
	"Tau 29": {
		"Tau 23": { loc: "d3", gate: false, hidden: false },
		"Kyushu": { loc: "fg34", gate: true, hidden: false },
		"Tau 31": [
			{ loc: "b5", gate: false, hidden: false },
			{ loc: "bc56", gate: true, hidden: false }
		]
	},
	"Tau 31": {
		"Tau 23": { loc: "ef2", gate: true, hidden: false },
		"Tau 29": [
			{ loc: "f4", gate: false, hidden: false },
			{ loc: "g4", gate: true, hidden: false }
		],
		"Leeds": { loc: "bc7", gate: true, hidden: false },
		"Edinburgh": { loc: "ab5", gate: false, hidden: false }
	},
	"Tau 23": {
		"Tau 37": { loc: "e2", gate: false, hidden: false },
		"Kyushu": { loc: "f3", gate: false, hidden: false },
		"Tau 29": { loc: "fg5", gate: false, hidden: false },
		"Tau 31": { loc:" c7", gate: true, hidden: false }
	},
	"Tau 37": {
		"Omicron Alpha": { loc: "e3", gate: false, hidden: false },
		"Tau 23": { loc: "d67", gate: false, hidden: false }
	},
	"Omicron Alpha": {
		"Unknown 1": { loc: "f4", gate: false, hidden: false },
		"Omicron Theta": { loc: "f5", gate: false, hidden: false },
		"Omicron Beta": { loc: "f5", gate: false, hidden: false },
		"Tau 37": { loc: "c5", gate: false, hidden: false }
	},
	"Omicron Beta": {
		"Omicron Major": { loc: "f5", gate: true, hidden: true },
		"Omicron Minor": { loc: "d4", gate: false, hidden: true },
		"Sigma 19": { loc: "e6", gate: false, hidden: false },
		"Omicron Alpha": { loc: "de3", gate: false, hidden: false }
	},
	"Sigma 19": {
		"Omicron Beta": { loc: "e3", gate: false, hidden: false },
		"Sigma 17": [
			{ loc: "f6", gate: false, hidden: false },
			{ loc: "e6", gate: true, hidden: false }
		],
		"Sigma 13": { loc: "c5", gate: false, hidden: false },
		"Honshu": [
			{ loc: "c45", gate: false, hidden: false },
			{ loc: "c34", gate: true, hidden: false }
		],
	},
	"Sigma 13": {
		"Sigma 19": { loc: "e3", gate: false, hidden: false },
		"Sigma 17": { loc: "f5", gate: false, hidden: false },
		"Frankfurt": [
			{ loc: "c6", gate: false, hidden: false },
			{ loc: "e7", gate: true, hidden: false }
		],
		"New Berlin": { loc: "c5", gate: false, hidden: false },
		"Honshu": [
			{ loc: "c45", gate: false, hidden: false },
			{ loc: "c34", gate: true, hidden: false }
		]
	},
	"Sigma 17": {
		"Omicron Theta": { loc: "f6", gate: false, hidden: false },
		"Sigma 13": { loc: "c4", gate: false, hidden: false },
		"Sigma 19": [
			{ loc: "d3", gate: false, hidden: false },
			{ loc: "e2", gate: true, hidden: false }
		]
	},
	"Omicron Theta": {
		"Omicron Alpha": { loc: "fg34", gate: false, hidden: false },
		"Omicron Gamma": { loc: "e6", gate: false, hidden: false },
		"Omega 41": { loc: "c5", gate: false, hidden: false },
		"Sigma 17": { loc: "e3", gate: false, hidden: false }
	},
	"Omicron Gamma": {
		"Unknown 2": { loc: "f2", gate: false, hidden: false },
		"Omicron Theta": { loc: "d3", gate: false, hidden: false },
		"Omega 41": { loc: "c5", gate: false, hidden: false }
	},
	"Omega 41": {
		"Omicron Theta": { loc: "ef4", gate: false, hidden: false },
		"Omicron Gamma": { loc: "e5", gate: false, hidden: false },
		"Omega 5": { loc: "cd5", gate: false, hidden: false },
		"Omega 11": { loc: "d34", gate: false, hidden: false }
	}
}

export default jumpData