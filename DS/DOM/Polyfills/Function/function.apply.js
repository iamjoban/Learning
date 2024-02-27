Function.prototype.myApply = function (context, args) {
  let fun = this;
  context.__dummy__prop__ = fun;
  let result = context.__dummy__prop__(args);
  delete context.__dummy__prop__;
  return result;
}



function User(args) {
  this.name = args[0];
  this.getName = function () {
    return name;
  }
}

let obj = {};
User.myApply(obj, ['joban']);
console.log(obj);