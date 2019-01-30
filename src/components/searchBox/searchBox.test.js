import { shallow, mount, render } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

it('expect to render SearchBox component', () => {
    const searchChange = () => {}
    expect(shallow(<SearchBox searchChanged={searchChange}/>)).toMatchSnapshot();
})