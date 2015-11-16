# Traceur Compiler

## Compiling in the Browser

### GitHub

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script>
    <script src="https://google.github.io/traceur-compiler/src/bootstrap.js"></script>
    <script type="module" src="main.js"></script>
  </head>
  <body>
  </body>
</html>
```

### Bower

```sh
$ bower install traceur --save
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script src="/components/traceur/traceur.js"></script>
    <script>
      new traceur.WebPageTranscoder(document.location.href).run();
    </script>
    <script type="module" src="main.js"></script>
  </head>
  <body>
  </body>
</html>
```

## Compiling Offline

### Installing the compiler

```sh
$ npm install traceur -g
```

### Getting the runtime

```sh
$ bower install traceur-runtime --save
```

### Compiling the source

```sh
$ traceur --out app.js main.js
```

### Using the compiled source

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Traceur Compiled</title>
    <script src="/components/traceur-runtime/traceur-runtime.js" charset="utf-8"></script>
    <script src="app.js" charset="utf-8"></script>
  </head>
  <body>
  </body>
</html>
```

### Source maps

```sh
$ traceur --out app.js --source-maps file main.js
```

## Links

- [Traceur](https://github.com/google/traceur-compiler)
- [LanguageFeatures](https://github.com/google/traceur-compiler/wiki/LanguageFeatures)
- [Traceur Transcoding Demo](https://google.github.io/traceur-compiler/demo/repl.html)
