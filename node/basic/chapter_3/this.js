// this  === exports
console.log(this);
console.log(this === module.exports);
console.log(this === exports);

//function this === global
function whatThis() {
  return console.log("function", this === exports, this === global);
}
whatThis();
