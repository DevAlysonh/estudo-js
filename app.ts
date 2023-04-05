function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;

    if(showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

var number1 = 5;
var number2 = 2.8;
var printResult = true;
var phrase = 'The result is: ';

add(number1, number2, printResult, phrase);