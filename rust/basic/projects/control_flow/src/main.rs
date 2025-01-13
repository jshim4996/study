fn main() {
    let number = 7; 

    if number < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }

     // if number {
    //     println!("condition was true");
    // } => bool 타입이 아니여서 오류 발생

    let not_zero = 3;

    if not_zero != 0 {
        println!("number was something than zero");
    } 

    let four = 6;

    if four % 4 == 0 {
        println!("number was divisible by 4");
    } else if four % 3 == 0 {
        println!("number was divisible by 3");
    } else if four % 2 == 0 {
        println!("number was divisible by 2");
    } else {
        println!("number was not divisible by 4, 3, or 2");
    }

    let condition = true;
    let condition_value = if condition { 5 } else { 6 };
    // let condition_value = if condition { 5 } else { 'six' }; => 오류 발생, if else 의 반환값의 타입이 다르다면 rust 는 컴파일중에 오류를 발생시킨다. 

    println!("The value of condition_value is: {condition_value}");
}
