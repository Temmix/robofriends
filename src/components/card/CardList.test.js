import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component', () => {
    const mockedRobots = [
        {
            id: 1,
            name: 'Tim Tolly',
            email: 'Tim.Tolly@gmail.com'
        },
        {
            id: 2,
            name: 'Franc Jessica',
            email: 'Franc.Jessica@gmail.com'
        }

    ]
    expect(shallow(<CardList robots={mockedRobots}/>)).toMatchSnapshot();
})