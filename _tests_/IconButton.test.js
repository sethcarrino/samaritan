import React from 'react';
import { mount, configure } from 'enzyme';
import renderer from 'react-test-renderer';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import IconButton from '../app/components/IconButton';

describe('<IconButton />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<IconButton />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<IconButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
