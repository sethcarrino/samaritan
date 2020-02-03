import React from 'react';
import CancelButton from '../app/components/CancelButton';

import renderer from 'react-test-renderer';

describe('<CancelButton/>', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CancelButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
