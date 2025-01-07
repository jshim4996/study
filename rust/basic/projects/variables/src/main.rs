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
}
