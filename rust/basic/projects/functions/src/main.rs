fn main() {
    another_function(5);
    print_labeled_measurement(5, 'h');

    let y = 6; // 구문
    //let x = (let y = 6);  // => 구문은 반환값이 없기에 다른 변수에 할당 하면 오류 발생
    //let x = y = 1; => 다른 언어와 다르게 구문을 다른 변수에 할당할수 없다.

    let y = {
        let x = 3;
        x + 1 // => 표현식의 마지막에는 세미 콜론을 붙이지 않는다. 붙이면 구문이 된다.
    };

    println!("The value of y is: {y}");

    let five = five();
    println!("The value of five is: {five}");

    let plus_one = plus_one(5);
    println!("The value of five is: {plus_one}");
}

// 러스트에선 유효한 함수
fn five() -> i32 {
    5 // 반환값이 된다.
}

fn plus_one(x:i32) -> i32 {
    x + 1 // 반환값이 된다.
    // x + 1; => 세미콜론을 붙이면 구문이 된다.
}

fn another_function(x: i32) {
   println!("The value of x is: {x}");
}

fn print_labeled_measurement(value: i32, label: char) {
    println!("The measurement is: {value}{label}");
}