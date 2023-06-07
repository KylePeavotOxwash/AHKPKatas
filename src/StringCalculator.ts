export class StringCalculator {
    add(numbers: string): number {


        let delimiter: string | undefined;

        if (numbers.startsWith('//')) {
            const charArray = [...numbers];

            const charArrayWithDelimiter = charArray.splice(0, 3)

            delimiter = charArrayWithDelimiter[2]

            numbers = charArray.join().split(delimiter).join(',')
        }

        const stringArrayWithoutCommas = numbers.split(',')

        const stringNumbersArray = stringArrayWithoutCommas.map((string) => string.split('\n'))

        const numbersArray = stringNumbersArray
            .map((numberString) => numberString
                .map(Number)
                .reduce((sum, nextNumber) => sum + nextNumber, 0))

        return numbersArray.reduce((sum, nextNumber) => sum + nextNumber, 0)

    }

}