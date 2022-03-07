import { validate } from "./validate"

test("validate() throws corresponding errors", () => {
	expect(() => validate("defined", null)).toThrow("argument is null or not defined")
	expect(() => validate("number", "ab")).toThrow("argument must be a number")
	expect(() => validate("lt:2", 2)).toThrow("argument value must be less than 2")
	expect(() => validate("lte:2", 3)).toThrow("argument value must be equal or less than 2")
	expect(() => validate("gt:1", 1)).toThrow("argument value must be greater than 1")
	expect(() => validate("gte:1", 0)).toThrow("argument value must be equal or greater than 1")
	expect(() => validate("string", 1)).toThrow("argument must be a string")
	expect(() => validate("match:[a-z]", "12")).toThrow("argument must match regexp [a-z]")
	expect(() => validate("notMatch:[a-z]+", "ab")).toThrow("argument must not match regexp [a-z]+")
})

test("validate() returns true on valid arguments", () => {
	expect(validate("defined", 1)).toBe(true)
	expect(validate("defined;number", 1)).toBe(true)
	expect(validate("lt:2", 1)).toBe(true)
	expect(validate("lte:2", 2)).toBe(true)
	expect(validate("gt:1", 2)).toBe(true)
	expect(validate("gte:1", 2)).toBe(true)
	expect(validate("defined;string", "abc")).toBe(true)
	expect(validate("match:[a-b]", "a")).toBe(true)
	expect(validate("notMatch:[a-z]+", "123")).toBe(true)
})