// const person: {
//   name: string;
//   age: number;
// }
var person = {
    name: "심준",
    age: 31,
    hobbies: ["코딩", "운동", "독서"],
    role: [2, "author"],
};
//person.role.push("admin"); // 튜플타입 오류라면 push 로 값을 추가하는것이 가능하다. => 이것은 주의 필요
//person.role[2] = 1; // => 튜플 타입이 아니라면 stirng 타입의 요소값이 숫자형으로 변경 할 수 있다. 단 튜플 타입이라면 오류
//person.role = [1, "admin", 'test']; // => 만약 튜플 타입에 새로운 값을 할당 할때 지정된 길이와 요소 타입이 맞지 않다면 오류가 발생한다.
var favoriteActivities;
favoriteActivities = ["운동"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var Jobs;
(function (Jobs) {
    Jobs[Jobs["WARRIOR"] = 50] = "WARRIOR";
    Jobs[Jobs["MAGE"] = 51] = "MAGE";
    Jobs[Jobs["ARCHER"] = 52] = "ARCHER";
})(Jobs || (Jobs = {}));
var user = {
    id: "jshim",
    lavel: 50,
    job: Jobs.MAGE,
};
if (user.job === Jobs.MAGE) {
    console.log("마법사 직업니다.");
    console.log(user.job); // => 자동으로 1이라는 값을 MAGE 에 매핑 해준다.
}
console.log(Jobs.WARRIOR);
