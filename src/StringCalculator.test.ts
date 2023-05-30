import { StringCalculator } from "./StringCalculator";

describe('StringCalculator', () => {
    let stringCalculator = new StringCalculator();

    it('should return 0 for an empty string', () => {
        expect(stringCalculator.add("")).toBe(0);
    });

    it('should return a given number', () => {
        expect(stringCalculator.add("1")).toBe(1);
    });

    it('should return the sum of two numbers', () => {
        expect(stringCalculator.add("1,2")).toBe(3);
    });
});