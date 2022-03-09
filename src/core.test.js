import { abscissa, ordinate, localRange, findPath } from "./core"

test("findPath() should return shortest path", () => {
	expect(findPath("New York", "Texas")).toStrictEqual([ "New York", "Texas" ])
	expect(findPath("New York", "Bering")).toStrictEqual([ "New York", "Texas", "Bering" ])
	expect(findPath("Cambridge", "Stuttgart")).toStrictEqual([ "Cambridge", "Omega 3", "Omega 7", "Stuttgart" ])
})

test("findPath() should return array with error message when path not found", () => {
	expect(findPath("a", "b")).toStrictEqual(["Маршрут не найден."])
})