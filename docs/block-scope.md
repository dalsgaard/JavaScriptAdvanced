# Block Scope

## `let`

### Hoisting

There is *no* hoisting of `let` declarations.

```js
{
  console.log(a); // ReferenceError
  let a = 5;
}
```

### Redeclaration

Redeclaration is not allowed.

```js
{
  let a = 5;
  let a = 6; // TypeError
}
```

## const
