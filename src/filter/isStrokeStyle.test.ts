import { TransformedToken } from 'style-dictionary/types';
import { isStrokeStyle } from './isStrokeStyle.js';

describe('Filter: isStrokeStyle', () => {
  const items = [{
    value: '300ms',
    $type: 'strokeStyle',
  }, {
    value: '2rem',
    $type: 'dimension',
  }, {
    value: '10ms',
    type: 'strokeStyle',
  }, {
    value: 'string',
  }] as TransformedToken[];
  it('filters strokeStyle tokens', () => {
    expect(items.filter(item => isStrokeStyle(item, {}))).toStrictEqual([items[0], items[2]]);
  });
});
