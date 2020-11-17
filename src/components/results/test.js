import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results';

describe('Results', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Results debug />);
  
    expect(component).toMatchSnapshot();
  });
});