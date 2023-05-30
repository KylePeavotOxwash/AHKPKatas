import { StringCalculator } from "./StringCalculator";

describe('StringCalculator', () => {
    it('should return 0 for an empty string', () => {
        expect(StringCalculator.add("")).toBe(0);
    });

    it('should return a given number', () => {
        expect(StringCalculator.add("1")).toBe(1);
    });

    it('should return the sum of two numbers', () => {
        expect(StringCalculator.add("1,2")).toBe(3);
    });
});