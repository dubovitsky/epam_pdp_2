import React from 'react';
import { shallow } from 'enzyme';
import MovieDetails from './MovieDetails';

describe('MovieDetails', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MovieDetails debug />);
  
    expect(component).toMatchSnapshot();
  });
});