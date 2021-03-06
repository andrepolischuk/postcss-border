# postcss-border [![Build Status][travis-image]][travis-url]

> [PostCSS][postcss] plugin for border shortcut

```css
/* before */

.hello {
  border: 1px 0 solid #000;
}

/* after */

.hello {
  border: 1px solid #000;
  border-width: 1px 0;
}
```

## Install

```sh
npm install --save-dev postcss-border
```

## Usage

### PostCSS

```js
var fs = require('fs');
var postcss = require('postcss');
var border = require('postcss-border');
var css = fs.readFileSync('input.css', 'utf8');

var output = postcss([border])
  .process(css)
  .css;
```

### Gulp

```js
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var border = require('postcss-border');

gulp.task('css', function () {
  return gulp.src('./src')
    .pipe(postcss([
      border
    ]))
    .pipe(gulp.dest('./dist'));
});
```

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/postcss-border
[travis-image]: https://travis-ci.org/andrepolischuk/postcss-border.svg?branch=master

[postcss]: https://github.com/postcss/postcss
