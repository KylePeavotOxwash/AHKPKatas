export class StringCalculator {

    add(numbers: string): number {

        const stringArrayWithoutCommas = numbers.split(',')

        const stringNumbersArray = stringArrayWithoutCommas.map((string) => string.split('\n'))

        const numbersArray = stringNumbersArray
            .map((numberString) => numberString
                .map(Number)
                .reduce((sum, nextNumber) => sum + nextNumber, 0))

        return numbersArray.reduce((sum, nextNumber) => sum + nextNumber, 0)

    }

}