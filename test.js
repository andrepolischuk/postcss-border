import test from 'ava';
import postcss from 'postcss';
import border from './index';

const transform = input => postcss([ border ]).process(input);

test('return original', async t => {
  const res = await transform('a { border: 1px solid #000; }');
  t.is(res.warnings().length, 0);
  t.is(res.css, 'a { border: 1px solid #000; }');
});

test('set border and border-width', async t => {
  const res = await transform('a { border: 1px 0 solid #000; }');
  t.is(res.warnings().length, 0);
  t.is(res.css, 'a { border: 1px solid #000; border-width: 1px 0; }');
});

test('set border and border-color', async t => {
  const res = await transform('a { border: 1px solid #444 #222 #000; }');
  t.is(res.warnings().length, 0);
  t.is(res.css, 'a { border: 1px solid #444; border-color: #444 #222 #000; }');
});

test('set border, border-style and border-color', async t => {
  const res = await transform('a { border: 0 1px 2px solid #000 #333; }');
  t.is(res.warnings().length, 0);
  t.is(res.css, 'a { border: 0 solid #000; border-width: 0 1px 2px; border-color: #000 #333; }');
});
