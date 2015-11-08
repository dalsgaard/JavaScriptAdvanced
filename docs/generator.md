# Generator

```js
function *foo () { }
var it = foo();
console.log(it.next());
```

## `yield`

```js
function *foo() {
  yield 42;
}
var it = foo();
console.log(it.next());
console.log(it.next());
```

```js
function *foo() {
  yield 1;
  yield 2;
  yield 4;
}
```

```js
function *foo() {
  while (true) {
    yield Date.now();
  }
}
```

```js
function *foo() {
  yield;
}
```

## Parsing Arguments

```js
function *foo(a, b) {
  var c = a * b;
  yield c;
}
var it = foo(6, 7);
console.log(it.next());
console.log(it.next());
```

## Returning values

```js
function *foo() {
  var x = yield 10;
  console.log(x);
}
var it = foo();
console.log(it.next(20));
console.log(it.next());
```

## `yield` is an expression

```js
function *foo() {
  var a = [yield, yield];
  yield a;
}
var it = foo();
console.log(it.next());
console.log(it.next(10));
console.log(it.next(20));
```

`yield` has the same precedence as `=`.

```js
function *foo() {
  var a = yield 3 + 5;
  console.log(a);
}
var it = foo();
console.log(it.next());
console.log(it.next(10));
```

```js
a = 2 + yield 3; // invalid
a = 2 + (yield 3); // valid
```

## Expressions and Declarations

```js
var foo = function * () {
  yield;
}
```

## `throw`

```js
function *foo() {
  yield 4;
  throw 22;
  yield 2;
}
var it = foo();
try {
  console.log(it.next());
  console.log(it.next());
} catch (e) {
  console.log('Catch ' + e);
}
```

## `yield *`

```js
function *foo() {
  yield *[2, 4];
}
var it = foo();
console.log(it.next());
console.log(it.next());
```

```js
function *bar() {
  yield 2;
  yield 4;
}
function *foo(g) {
  yield *g();
}
var it = foo(bar);
console.log(it.next());
console.log(it.next());
console.log(it.next());
```

## `return`

```js
function *bar() {
  yield 2;
  yield 4;
  return 6;
}
function *foo(g) {
  var x = yield *g();
  console.log(x);
}
var it = foo(bar);
console.log(it.next());
console.log(it.next());
console.log(it.next());
```

## Links

[Regenerator](https://github.com/facebook/regenerator)
