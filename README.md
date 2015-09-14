# postcss-border [![Build Status][travis-image]][travis-url]

> [PostCSS][postcss] plugin for border shortcut

```css
.hello {
  border: 1px 0 solid #000;
}
```

```css
.hello {
  border: 1px solid #000;
  border-width: 1px 0;
}
```

## Install

```sh
npm install --save postcss-border
```

## Usage

```js
var fs = require('fs');
var postcss = require('postcss');
var border = require('postcss-border');
var css = fs.readFileSync('input.css', 'utf8');

var output = postcss()
  .use(border())
  .process(css)
  .css;
```

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/postcss-border
[travis-image]: https://travis-ci.org/andrepolischuk/postcss-border.svg?branch=master

[postcss]: https://github.com/postcss/postcss
