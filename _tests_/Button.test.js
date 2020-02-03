// __tests__/App-test.js
import React from 'react';
import Button from '../app/components/Button';

import renderer from 'react-test-renderer';

describe('<Button/>', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
