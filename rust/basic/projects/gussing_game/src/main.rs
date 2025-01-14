use std::io; // 입출력 라이브러리
use std::cmp::Ordering;
use rand::Rng;

fn main() {
    println!("숫자 추리 게임");

    let secret_number = rand::thread_rng().gen_range(1..=100);

    println!("비밀 번호는: {secret_number}");

    println!("숫자를 입력해 주세요");

    let mut guess = String::new(); //String 은 표준 라이브러리에서 제공하는 확장 가능한 UTF-8 인코딩 문자열 타입이다.
    // new 는 새로운 값을 만드는 함수 이름

    io::stdin().read_line(&mut guess).expect("읽기 실패");
    // read_line 은 표준 입력에서 한줄을 읽는 함수이다.
    // 인자로 받은 참조자를 통해 입력값을 저장한다.
    // expect 는 오류가 발생했을때 오류 메시지를 출력하고 프로그램을 종료한다.
    // 에러 처리를 안하면 컴파일시 에러가 발생한다.

    // Result 는 열거형인데, 여러개의 상태 중 하나가 될 수 있는 타입이다. 가능한 상태를 배리언트 라고 한다.

    let guess: i32 = guess.trim().parse().expect("숫자값을 입력해 주세요");
    
    println!("입력한 숫자: {guess}");

    match guess.cmp(&secret_number) {
        Ordering::Less => println!("너무 작습니다."),
        Ordering::Greater => println!("너무 큽니다."),
        Ordering::Equal => println!("정답입니다."),
    }
}
