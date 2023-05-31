export class StringCalculator{

    add(numbers: string): number {

        const stringNumbersArray = numbers.split(',')

        const numbersArray = stringNumbersArray.map((number) => Number(number))

        return numbersArray.reduce((sum, nextNumber) => sum + nextNumber, 0)


    }

}