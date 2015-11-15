# symbol

`symbol` is a new primitive.

## Creating a symbol

```javascript
var s1 = Symbol('Foo');
console.log(s1);
```

```javascript
var s1 = Symbol('Foo');
var s2 = Symbol('Foo');
s1 == s2; // => false
```

## `for`

```js
var s1 = Symbol.for('Bar');
var s2 = Symbol.for('Bar');
console.log(s1 === s2);
```

## `keyFor`

```js
var s1 = Symbol.for('Bar');
var key = Symbol.keyFor(s1);
console.log(key);
```

## `getOwnPropertySymbols`

```js
var s1 = Symbol.for('Bar');
var foo = {
  a: 2,
  [s1]: 4
};
var symbols = Object.getOwnPropertySymbols(foo);
```
