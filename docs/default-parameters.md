# Default Parameters

(firefox)

```js
function foo (a = 4, b = 2) {
  console.log(a + b);
}

foo(); // => 6
foo(3); // => 5
foo(undefined, 8); // => 12
foo(3, 5); // => 8
```

## Expressions

```js
function foo (a = 4, b = a * 2) {
  console.log(a + b);
}

foo(); // => 12
foo(3); // => 9
```

```js
function sq (a) {
  return a * a;
}

function foo (a = 4, b = sq(a)) {
  console.log(a + b);
}

foo(); // => 20
foo(3); // => 12
```
