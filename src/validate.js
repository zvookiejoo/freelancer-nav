const validators = {
	defined: {
		handler: (arg) => arg != null,
		message: "argument is null or not defined"
	},
	number: {
		handler: (arg) => arg.__proto__ === Number.prototype,
		message: "argument must be a number"
	},
	lt: {
		handler: (arg, expression) => arg < expression,
		message: "argument value must be less than"
	},
	lte: {
		handler: (arg, expression) => arg <= expression,
		message: "argument value must be equal or less than"
	},
	gt: {
		handler: (arg, expression) => arg > expression,
		message: "argument value must be greater than"
	},
	gte: {
		handler: (arg, expression) => arg >= expression,
		message: "argument value must be equal or greater than"
	},
	string: {
		handler: (arg) => arg.__proto__ === String.prototype,
		message: "argument must be a string"
	},
	match: {
		handler: (arg, expression) => arg.match(new RegExp(expression)),
		message: "argument must match regexp"
	},
	notMatch: {
		handler: (arg, expression) => !(arg.match(new RegExp(expression))),
		message: "argument must not match regexp"
	},
}

function validate(rules, value) {
	if (!validators.defined.handler(rules)) throw validators.defined.message

	let results = []

	rules.split(",").forEach(item => {
		if (item.indexOf(":") === -1) {
			if (!validators[item].handler(value)) results.push(validators[item].message)
		} else {
			let elements = item.split(":")
			let key = elements[0]
			let expression = elements[1]

			if (!validators[key].handler(value, expression)) results.push(`${validators[key].message} ${expression}`)
		}
	})

	if (results.length > 0) throw results.join("; ")

	return true
}

module.exports = {
	validate
}