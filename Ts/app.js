function add(n1, n2, showResult, phrase) {
    if (showResult)
        console.log(phrase + (n1 + n2));
    else
        return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
var testData; // any 타입
testData = "5"; // any 타입
var result = add(number1, number2, printResult, resultPhrase);
// console.log(result);
