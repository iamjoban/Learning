Function.prototype.myCall = function (context, ...args) {
  let fun = this;
  context.__dummy__prop__ = fun;
  let result = context.__dummy__prop__(...args);
  delete context.__dummy__prop__;
  return result;
}



function User(name) {
  this.name = name;
  this.getName = function () {
    return name;
  }
}

let obj = {};
User.myCall(obj, 'joban');
console.log(obj);