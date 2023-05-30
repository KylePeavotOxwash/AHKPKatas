import { StringCalculator } from "./StringCalculator";

describe('StringCalculator', () => {
    let stringCalculator = new StringCalculator();

    describe('Exercise one', () => {
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

    describe('Exercise two', () => {
        it('should handle an unknown number of numbers', () => {
            //Given
            const numbersAsNumbers: number[] = Array.from({ length: Math.floor(Math.random() * 100) }, () => Math.floor(Math.random() * 100));

            //When
            const sumFromCalculator = stringCalculator.add(numbersAsNumbers.join(','));

            //Then
            const expectedSum = numbersAsNumbers.reduce((a, b) => a + b, 0);
            expect(sumFromCalculator).toBe(expectedSum);
        });
    });

    xdescribe('Exercise three', () => {
        it('should handle new lines between numbers instead of commas', () => {
            expect(stringCalculator.add("1\n2,3,4\n5")).toBe(15);
        });
    });

    xdescribe('Exercise four', () => {
        it('should support custom delimiters', () => {
            expect(stringCalculator.add("//$\n1$2")).toBe(3);
        });
    });

    xdescribe('Exercise five', () => {
        it('should throw an exception "negatives not allowed" for negatives', () => {
            expect(() => stringCalculator.add("1,-2")).toThrowError('negatives not allowed');
        });
    });

});