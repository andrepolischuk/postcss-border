import postcss from 'postcss';

const styleRegExp = /(hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/i;

function transform(decl) {
  const [ style ] = styleRegExp.exec(decl.value);
  const [ size, color ] = decl.value.split(`${style}`);
  const sizeList = postcss.list.space(size);
  const colorList = postcss.list.space(color);

  if (sizeList.length < 2 && colorList.length < 2) return;

  /* eslint-disable no-param-reassign */
  decl.value = `${sizeList[0]} ${style} ${colorList[0]}`;

  if (colorList.length > 1) {
    decl.cloneAfter({ prop: 'border-color', value: colorList.join(' ') });
  }

  if (sizeList.length > 1) {
    decl.cloneAfter({ prop: 'border-width', value: sizeList.join(' ') });
  }
}

export default postcss.plugin('postcss-border', () => style => {
  style.walkDecls('border', transform);
});
