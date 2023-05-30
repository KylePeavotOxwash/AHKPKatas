export class StringCalculator{

    add(numbers: string): number {

        const numbersArray = numbers.split(',')

        const sum = numbersArray.length > 1 ? +numbersArray[0] + +numbersArray[1] : +numbersArray[0]

        return numbers ? sum : 0
    }

}