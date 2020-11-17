import React from 'react';
import { shallow } from 'enzyme';
import MoviesList from './MoviesList';

describe('MoviesList', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MoviesList debug />);
  
    expect(component).toMatchSnapshot();
  });
});