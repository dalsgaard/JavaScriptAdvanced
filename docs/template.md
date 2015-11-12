# Template String

Also called *interpolation*.

```js
{
  let a = 4, b = 3;
  let s = `${a} x ${b} = ${a * b}`
  console.log(s);
}
```

### Nesting

```js
{
  let a = 4, b = 3;
  let s = `${ `${a} x ${b}` } = ${a * b}`
  console.log(s);
}
```

### New lines

```js
{
  let s =
`foo
bar
baz`;
  console.log(s);
}
```
