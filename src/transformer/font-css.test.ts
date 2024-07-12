import { TransformedToken, Filter } from 'style-dictionary/types';

import { fontCss } from './font-css.js';

describe('Transformer: fontFamily', () => {
  const items = [{
    value: {
      "fontWeight": 500,
      "fontSize": "16px",
      "lineHeight": "22px",
      "fontFamily": "Helvetica",
      "fontStyle": "italic"
    },
    $type: 'typography',
  }, {
    value: {
      "fontSize": "16px",
      "fontFamily": "Helvetica",
    },
    $type: 'typography',
  }, {
    value: '',
  }, {
    value: '',
    $type: 'color',
  }] as TransformedToken[];

  const filterFn = (item: TransformedToken) => (fontCss.filter as Filter['filter'])(item, {})

  it('matches `fontFamily` tokens with an array as a value', () => {
    expect(items.filter(filterFn)).toStrictEqual([items[0], items[1]]);
  });

  it('transforms `fontFamily` array tokens', () => {
    expect(items.filter(filterFn).map(item => fontCss.transform(item, {}, {}))).toStrictEqual([
      "italic 500 16px/22px Helvetica",
      "16px Helvetica",
    ]);
  });
})