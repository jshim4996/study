type Combine = number | string;
type returnType = "num" | "txt";

function add(n1: Combine, n2: Combine, resultConversion: returnType) {
  let result: Combine;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "num"
  )
    result = +n1 + +n2;
  else result = n1.toString() + n2.toString();
  return result;
}

console.log(add(1, 2, "num"));

console.log(add("Shim", "Joon", "txt"));
