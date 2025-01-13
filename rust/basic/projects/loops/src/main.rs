fn main() {
    // loop {
    //     println!("again!");
    // }

    let mut counter = 0;

    let result = loop {
        counter += 1;
        if counter == 10{
            break counter * 2; // 할당하는 구문을 끝내기 위해 세미콜론을 붙였다.
        }
    };

    println!("The result is {result}");

    let mut count = 0;
    'counting_up: loop {
        println!("count = {count}");
        let mut remaining = 10;

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }
        count += 1;
    }

    println!("Encountered an error");

    let mut wile_count = 3;

    while wile_count != 0{
        println!("wile_count = {wile_count}");
        wile_count -= 1;
    }

    println!("LIFTOFF!!!");


    let arr = [10, 20, 30, 40, 50];
    let mut index = 0;
    
    while index < 5 {
        println!("the value is: {}", arr[index]);
        index += 1;
    } // => 인덱스와 컬렉션 갯수가 다를경우 오류 발생(패닉 발생), 루프의 매 반복 회차마다 인덱스가 범위 안에 있는지 조건문 검사를 수행 하기에 느려집니다.

   for element in arr {
    println!("the value is: {}", element);
   } 

   for number in (1..4).rev(){
    println!("{number}");
   }  // => Range 타입을 이용하여 특정 횟수만큼 값 생성 가능, rev() 통하여 값 역순으로 출력 가능
   println!("LIFTOFF!!!");


}