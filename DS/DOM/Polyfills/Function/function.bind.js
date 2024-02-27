// ---------------------------------
// Approach 1

Function.prototype.myBind = function (context) {
  let fun = this;
  return function (...args) {
    return fun.call(context, ...args);
  }
}

function User(name) {
  this.name = name;
  this.getName = function () {
    console.log(this)
    return this.name;
  }
}

let obj = new User('joban');
let getName = obj.getName.myBind(obj);
console.log(getName());

// ---------------------------------
// Approach 2
function User() {
  console.log(this.name);
}

Function.prototype.bind = function (ctx) {
  const fun = this;
  return (...args) => {
    ctx.dummyFun = fun;
    const result = ctx.dummyFun(...args);
    delete ctx.dummyFun;
    return result;
  };
};

let x = User.bind({ name: 'Joban' });
x();