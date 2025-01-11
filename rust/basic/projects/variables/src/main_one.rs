fn main() {
//    let x = 5; 
   const THREE_HOURS_IN_SECONDS: u32 = 60 * 60  * 3;
   println!("The value of THREE_HOURS_IN_SECONDS is: {}", THREE_HOURS_IN_SECONDS);
   let mut x = 5;
   println!("The value of x is: {}", x);
   x = 6;
   println!("The value of x is: {}", x);

   let shadowing = 5;
   let shadowing = shadowing + 1;

   {
    let shadowing = shadowing * 2;
    println!("The value of shadowing is: {}", shadowing);
   }

   println!("The value of shadowing is: {}", shadowing);

   let spaces = "   ";
   let spaces = spaces.len();
   println!("The value of spaces is: {}", spaces);

   //숫자 타입
   let num = 5;
   let num: i32 = 50;

   // 부동 소수점 타입
   let x = 2.0; //f64
   let y: f32 = 3.0; //f32

   let sum = x + y;
   println!("The sum of x and y is: {}", sum);

   // 연산자
   // 덧셈
   let sum  = 5 + 10;

   // 뺄셈
   let difference = 95.5 - 4.3;

   // 곱셈
   let product = 4 * 30;

   // 나눗셈
   let quotient = 56.7 / 32.2;
   let trunceted = -5 / 3; // 결과값은 -1

   //나머지 연산
   let remainder = 43 % 5;

   println!("The sum of x and y is: {}", sum);
   println!("The difference of x and y is: {}", difference);
   println!("The product of x and y is: {}", product);
   println!("The quotient of x and y is: {}", quotient);
   println!("The trunceted of x and y is: {}", trunceted);
   println!("The remainder of x and y is: {}", remainder);

   // 불리언 타입
   let t = true;
   let f: bool = false; // 명시적 타입의 애너테이션

   println!("The value of t is: {}", t);
   println!("The value of f is: {}", f);

   // 문자 타입
   let c = 'z';
   let z: char = 'z'; // 명시적 타입의 애너테이션
   println!("The value of c is: {}", c);
   println!("The value of z is: {}", z);

   let heart_eyed_cat = '😻';
   println!("The value of heart_eyed_cat is: {}", heart_eyed_cat);

   // 튜플타입
   let tup: (i32, f64, u8) = (500, 6.4, 1);
   let tup = (500, 6.4, 1);

   let (x,y,z) = tup;

   println!("The value of y is: {y}");
   
   let finx_humdered = tup.0;
   let six_point_four = tup.1;
   let one = tup.2;

   let emty:() = ();

   let arr = [1,2,3,4,5];

   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   let arr : [i32; 5] = [1,2,3,4,5]; // 배열의 경우 타입 뒤에 요소의 갯수를 명시 할수 있다.

   let first = arr[0];
   let second = arr[1];

   println!("The value of first is: {}", first);
   println!("The value of second is: {}", second);

   let arr = [3; 5]; // 모든 요소가 같은 값으로 채워진 배열을 초기화 할경우 사용 방법 [값; 요소의 갯수]

   println!("The value of arr is: {}", arr[0]);

}
