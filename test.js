
import border from './index';
import postcss from 'postcss';
import assert from 'assert';

describe('postcss-border', () => {
  it('should return original', (done) => {
    verify('a { border: 1px solid #000; }', 'a { border: 1px solid #000; }', done);
  });

  it('should set border and border-width', (done) => {
    verify('a { border: 1px 0 solid #000; }', 'a { border: 1px solid #000; border-width: 1px 0; }', done);
  });

  it('should set border and border-color', (done) => {
    verify('a { border: 1px solid #444 #222 #000; }', 'a { border: 1px solid #444; border-color: #444 #222 #000; }', done);
  });

  it('should set border, border-style and border-color', (done) => {
    verify('a { border: 0 1px 2px solid #000 #333; }', 'a { border: 0 solid #000; border-width: 0 1px 2px; border-color: #000 #333; }', done);
  });
});

function verify(input, out, done) {
  postcss([border()])
    .process(input)
    .then((res) => {
      assert(res.warnings().length === 0);
      assert(res.css === out);
      done();
    })
    .catch((err) => {
      done(err);
    });
}
