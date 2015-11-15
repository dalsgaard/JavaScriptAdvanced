# Iterator

### `for ... of`

```javascript
var a = [0, 2, 4, 6, 8];
for (let i of a) {
  console.log(i);
}
```

### *iterator* property

```js
{
  let a = [1, 2, 4];
  let it = a[Symbol.iterator]();
  console.log(it);
}
```

### `next`

```js
{
  let a = [1, 2, 4];
  let it = a[Symbol.iterator]();
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
}
```

### Custom iterators

```js
}
  let foo = {
    [Symbol.iterator]() {
      let v = 3;
      return {
        next() {
          let value = v > 0 ? v-- : undefined;
          let done = value === undefined
          return { value, done }
        }
      }
    }
  }

  for (let i of foo) {
    console.log(i);
  }
}
```

### Spread

```js
{
  let a = [...foo]
  console.log(a);
}
```
