import { abscissa, ordinate, localRange, findPath } from "./core"

test("abscissa() should return valid numeric value", () => {
	[ 
		[ "a", 1 ], 
		[ "b", 2 ], 
		[ "ab", 1.5 ],
		[ "gh", 7.5 ],
		[ "h", 8 ]
	].forEach(item => {
		expect(abscissa(item[0])).toBe(item[1])
	})
})

test("abscissa() should throw error on invalid argument", () => {
	expect(() => abscissa("ah")).toThrow()
})

test("ordinate() should return valid values", () => {
	[ 
		[ "1", 1 ],
		[ "2", 2 ],
		[ "12", 1.5 ],
	].forEach(item => {
		expect(ordinate(item[0])).toBe(item[1])
	})
})

test("ordinate() should throw error on invalid argument", () => {
	expect(() => ordinate("ab")).toThrow()
})

test("localRange() should return valid value", () => {
	expect(localRange("ab1", "de5")).toBe(Math.sqrt(3*3 + 4*4))
	expect(localRange("a1", "h8")).toBe(Math.sqrt(7*7 + 7*7))
})

test("localRange() should throw an error on invalid arguments", () => {
	[
		[ "ab", "12" ],
		[ null, "ab12" ],
		[ "ab12", null ],
		[ "ab12", 12 ],
		[ 12, "ab12" ],
	].forEach(args => {
		expect(() => localRange(args[0], args[1])).toThrow()
	})
})

test("findPath() should return shortest path", () => {
	expect(findPath("New York", "Texas")).toStrictEqual([ "New York", "Texas" ])
	expect(findPath("New York", "Bering")).toStrictEqual([ "New York", "Texas", "Bering" ])
	expect(findPath("Cambridge", "Stuttgart")).toStrictEqual([ "Cambridge", "Omega 3", "Omega 7", "Stuttgart" ])
})

test("findPath() should return array with error message when path not found", () => {
	expect(findPath("a", "b")).toStrictEqual(["Маршрут не найден."])
})