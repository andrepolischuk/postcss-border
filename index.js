
/**
 * Module dependencies
 */

import postcss from 'postcss';

/**
 *
 */

const styleRegExp = /(hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/i;

/**
 * Expose plugin
 */

export default postcss.plugin('postcss-border', () => {
  return (style) => {
    style.eachDecl('border', transform);
  };
});

/**
 * Transform
 */

function transform(decl) {
  const style = styleRegExp.exec(decl.value)[0];
  let [size, color] = decl.value.split(`${style}`);
  size = postcss.list.space(size);
  color = postcss.list.space(color);
  if (size.length < 2 && color.length < 2) return;
  decl.value = `${size[0]} ${style} ${color[0]}`;
  if (color.length > 1) decl.cloneAfter({prop: 'border-color', value: color.join(' ')});
  if (size.length > 1) decl.cloneAfter({prop: 'border-width', value: size.join(' ')});
}
