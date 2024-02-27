class MyPromise {
  #catchHandler;
  #thenHandlers = [];

  constructor(handler) {
    const f1 = this.#resolve.bind(this);
    const f2 = this.#reject.bind(this);

    handler(f1, f2);
  }

  #resolve(data) {
    const length = this.#thenHandlers.length;
    let res = data;
    for (let i = 0; i < length; i++) {
      res = this.#thenHandlers[i](res);
    }

    return res;
  }

  #reject(error) {
    if (this.#catchHandler) {
      this.#catchHandler(error);
    }
  }

  then(handlerFun) {
    this.#thenHandlers.push(handlerFun);
  }

  catch(handlerFun) {
    this.#catchHandler = handlerFun;
  }
}

MyPromise.all = function (promiseAry) {
  return new MyPromise((resolve, reject) => {
    const finalResponseArray = [];
    const callback = (response, index, error) => {
      if (error) {
        reject(error);
        return;
      }
      finalResponseArray[index] = response;
      if (finalResponseArray.length === promiseAry.length) {
        resolve(finalResponseArray);
      }
    };
    for (let i = 0; i < promiseAry.length; i++) {
      const currentPromise = promiseAry[i];
      if (
        promiseAry[i].constructor === Promise ||
        promiseAry[i].constructor === MyPromise
      ) {
        currentPromise.then(
          (response) => {
            callback(response, i);
          },
          (error) => {
            callback(null, i, error);
          }
        );
      } else {
        callback(currentPromise, i);
      }
    }
  });
};

// Testing

const obj = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done");
  }, 100);
});
const obj2 = Promise.resolve(5);
async function abc() {
  console.log("abc");
  const x = await MyPromise.all([obj, obj2, 10]);
  console.log(x, "d");
}

abc();
