
var queue = {
  get size() {
    return this._list.length;
  },
  push: function (element) {
    this._list.push(element);
  }
}

var lifo = Object.create(queue);
lifo.pull = function () {
  return this._list.pop();
};
lifo.create = function () {
  var q = Object.create(this);
  q._list = [];
  return q;
};

var q = lifo.create();
q.push(5);
console.log(q.size);
console.log(q.pull());
