import { validate } from "./validate"
import { jumpData } from "./data"
import { findRenderedComponentWithType } from "react-dom/test-utils"

function abscissa(val) {
	const abscissaValues = "abcdefgh"
	const borderRule = /ab|bc|cd|de|ef|fg|gh/

	const onBorder = val.match(borderRule) != null

	if (val.length > 2 || (val.length == 2 && !onBorder)) throw new Error("abscissa() received invalid value")

	return (abscissaValues.indexOf(val) + 1) + (onBorder && 0.5)
}

function ordinate(val) {
	if (validate("defined;string;match:[1-8]{1,2}", val)) {
		if (val.length == 2) {
			const [ a, b ] = val.split("")
			
			return (parseInt(a) + parseInt(b)) / 2
		} else {
			return parseInt(val)
		}
	}
}

function localRange(a, b) {
	const splitMatch = "([a-h]{1,2})([1-8]{1,2})"
	const validationRule = `defined;string;match:${splitMatch}`

	if (validate(validationRule, a) && validate(validationRule, b)) {
		let [ pointA, xA, yA ] = a.match(splitMatch)
		let [ pointB, xB, yB ] = b.match(splitMatch)

		let rangeX = Math.abs(abscissa(xA) - abscissa(xB))
		let rangeY = Math.abs(ordinate(yA) - ordinate(yB))

		return Math.sqrt((rangeX * rangeX) + (rangeY * rangeY))
	}
}

function findPath(from, to) {
	let queue = []
	let visited = {}
	let predecessor = {}

	queue.push(from)
	visited[from] = true

	while (queue.length > 0) {
		let v = queue.shift()

		for (let neighbor of Object.keys(jumpData[v])) {
			if (!visited[neighbor]) {
				queue.push(neighbor)
				visited[neighbor] = true

				if (neighbor == to) {
					var path = [ neighbor ]

					while (v != from) {
						path.push(v)
						v = predecessor[v]
					}

					path.push(v)

					return path.reverse()
				}

				predecessor[neighbor] = v
			}
		}
	}

	return path
}

module.exports = {
	abscissa,
	ordinate,
	localRange,
	findPath
}