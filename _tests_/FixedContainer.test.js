import React from 'react';
import FixedContainer from '../app/components/FixedContainer';

import renderer from 'react-test-renderer';

describe('<FixedContainer/>', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FixedContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
