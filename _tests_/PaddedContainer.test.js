import React from 'react';
import PaddedContainer from '../app/components/PaddedContainer';

import renderer from 'react-test-renderer';

describe('<PaddedContainer/>', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PaddedContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
