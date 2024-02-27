// Observer pattern

class Observer {
  observers;
  constructor() {
    this.observers = [];
  }

  notify(data) {
    for (let cb of this.observers) {
      cb(data);
    }
  }

  subscribe(callback) {
    this.observers.push(callback);
  }

  unsubscribe(callback) {
    this.observers = this.observers.filter((cb) => cb !== callback);
  }
}

function observer1() {
  console.log("observer1");
}

function observer2() {
  console.log("observer2");
}

const observer = new Observer();

observer.subscribe(observer1);
observer.subscribe(observer2);

observer.notify("");
