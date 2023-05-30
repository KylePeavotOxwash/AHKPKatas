export class StringCalculator {
    static add(numbers: string): number {
        if (numbers === "") {
            return 0;
        }

        const [firstNumber, possiblySecondNumber] = numbers.split(",");

        return Number(firstNumber) + Number(possiblySecondNumber ?? 0);
    }
}