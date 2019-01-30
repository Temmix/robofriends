import { shallow, mount, render } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    };
    wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filter robots correctly with empty robot', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);
})

it('filter robots correctly with some robots', () => {
    const innerMockProps = {
        onRequestRobots: jest.fn(),
        robots: [
            {
                id: 1,
                name: 'John Fashanu',
                email: 'J.Fashanu@gmail.com'
            },
            {
                id: 2,
                name: 'Erele Maxwell',
                email: 'Erelu.Maxwell@gmail.com'
            },
            {
                id: 3,
                name: 'Tee Bros',
                email: 'Tee_Bros@yahoo.com'
            }
        ],
        searchField: 'Te',
        isPending: false
    };
    const innerWrapper = shallow(<MainPage {...innerMockProps} />)
    expect(innerWrapper.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'Tee Bros',
        email: 'Tee_Bros@yahoo.com'
    }]);
})