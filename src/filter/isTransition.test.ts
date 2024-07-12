import { TransformedToken } from 'style-dictionary/types';
import { isTransition } from './isTransition.js';

describe('Filter: isTransition', () => {
  const items = [{
    value: '300ms',
    $type: 'transition',
  }, {
    value: '2rem',
    $type: 'dimension',
  }, {
    value: '10ms',
    type: 'transition',
  }, {
    value: 'string',
  }] as TransformedToken[];
  it('filters transition tokens', () => {
    expect(items.filter(item => isTransition(item, {}))).toStrictEqual([items[0], items[2]]);
  });
});
