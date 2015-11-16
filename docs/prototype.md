# Prototype

### `create`

```js
var foo = {
  a: 5
};
var bar = Object.create(foo);
console.log(bar.a);
```

```js
var foo = {
  a: 5
};
var bar = Object.create(foo, {
  b : {
    value: 6
  }
});
console.log(bar.a, bar.b);
```

### `getPrototypeOf`

```js
var foo = {
  a: 5
};

var bar = Object.create(foo);

var proto = Object.getPrototypeOf(bar);
console.log(proto);
```

### `isPrototypeOf`

```js
var foo = {
  a: 5
};

var bar = Object.create(foo);

var b = foo.isPrototypeOf(bar);
console.log(b);
```

### `setPrototypeOf`

```js
var foo = {
  a: 5
};

var bar = Object.create(null);

Object.setPrototypeOf(bar, foo);
console.log(bar.a);
```

Warning: very slow!

### `super`

```js
var foo = {
  a: 5,
  baz: function () {
    return 4;
  }
};
var bar = {
  a: 7,
  baz: function () {
    return super.baz() * super.a;
  }
}

Object.setPrototypeOf(bar, foo);
console.log(bar.baz());
```
