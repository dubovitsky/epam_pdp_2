import React from 'react';
import { shallow } from 'enzyme';
import Filter from './Filter';

describe('Filter', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Filter debug />);
  
    expect(component).toMatchSnapshot();
  });
});