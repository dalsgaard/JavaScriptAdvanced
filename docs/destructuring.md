# Destructuring

(firefox)

## Arrays

```js
{
  let [x, y] = [1, 3];
  console.log(x, y);
}
```

## Objects

```js
{
  let { a: a, b: b } = { a: 'foo', b: 'bar' };
  console.log(a, b);
}
```

## Unequal size

```js
{
  let { a: a, b: b } = { a: 'foo' };
  console.log(a, b);
}
```

```js
{
  let { a: a } = { a: 'foo', b: 'bar' };
  console.log(a);
}
```

```js
{
  let { a: a, c: c } = { a: 'foo', b: 'bar' };
  console.log(a, c);
}
```

```js
{
  let [a, b] = [1, 2, 4];
  console.log(a, b);
}
```

```js
{
  let [a, b, c] = [1, 2];
  console.log(a, b, c);
}
```

## Short form

```js
{
  let { a, b } = { a: 'foo', b: 'bar' };
  console.log(a, b);
}
```

## Reassignment

```js
{
  let a = 2, b = 4;
  ( { a, b } = { a: 'foo', b: 'bar' });
  console.log(a, b);
}
```

## Complex Assignments

```js
{
  let o = {};
  [o.a, o.b, o.c] = [1, 2, 4];
  console.log(o);
}
```

```js
{
  let a = [];
  ({ x: a[0], y: a[1] } = { x: 2, y: 4 });
  console.log(a);
}
```

## Computed Property Expressions

```js
{
  let p = 'x';
  let { [p]: x } = { x: 8 };
  console.log(x);
}
```

```js
{
  let p = 'x', o = {};
  ({ [p]: o[p] } = { x: 13 });
  console.log(o);
}
```

## Ignoring values

```js
{
  let [, a, b, , c] = [1, 2, 3, 4, 5];
  console.log(a, b, c);
}
```

## Default values

```js
{
  let [a = 1, b = 2, c = 4] = [];
  console.log(a, b, c);
}
```

```js
{
  let [a = 1, b = 2, c = 4] = [10, 20];
  console.log(a, b, c);
}
```

```js
{
  let { a: a = 1, b: b = 2} = {};
  console.log(a, b);
}
```

```js
{
  let { a: a = 1, b: b = 2} = { a: 10 };
  console.log(a, b);
}
```

## Nested Destructuring

```js
{
  let { a: { b, c } } = { a: { b: 2, c: 4 } };
  console.log(b, c);
}
```

```js
{
  let { a: [ b, c ] } = { a: [1, 3] };
  console.log(b, c);
}
```

```js
{
  let [{ x: a }, { x: b }] = [{ x: 4 }, { x: 8 }];
  console.log(a, b);
}
```

## Parameters

```js
{
  function foo ([a, b, c]) {
    console.log(a, b, c);
  }
  foo([1, 2, 4]);
}
```
