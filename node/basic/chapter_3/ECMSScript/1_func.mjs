import { odd, even } from "./var.mjs";

function checkOddOrEven(num) {
  return num % 2 ? odd : even;
}

export default checkOddOrEven;
