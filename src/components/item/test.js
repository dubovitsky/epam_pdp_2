import React from 'react';
import { shallow } from 'enzyme';
import MoviewItem from './MoviewItem';

describe('MoviewItem', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MoviewItem debug />);
  
    expect(component).toMatchSnapshot();
  });
});