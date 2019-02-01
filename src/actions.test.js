import * as actions from './actions'
import * as types from './constants'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk';
import nock from 'nock';

import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants'

export const mockStore = configureMockStore([thunkMiddleware]);

describe('actions', () => {
  it('should create an action to search', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: types.CHANGE_SEARCHFIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
  })
})

describe("Fetch robots action PENDING", () => {
  it("should create a Pending action on request Robots", () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots())
    const action = store.getActions();
    expect(action[0]).toEqual({type: REQUEST_ROBOTS_PENDING});
  });
});

describe("Fetch robots action SUCCESS", () => {

  it("should create a Success action on request Robots", () => {
     const store = mockStore();
     store.dispatch(actions.requestRobots());
     const _robots = [{
        id: '123ABC', 
        name: 'pgte',
        email: 'pedro.teixeira@gmail.com'
    }];

     const call = nock('https://jsonplaceholder.typicode.com')
                    .get('/users')
                    .reply(200, { type: REQUEST_ROBOTS_SUCCESS, payload: _robots });
       const action = store.getActions();
       call.get(res => expect(res.body).toEqual({type: REQUEST_ROBOTS_SUCCESS, payload: _robots}));

     
    // store.dispatch(actions.requestRobots());  
    
    // expect(action[0]).toEqual({type: REQUEST_ROBOTS_SUCCESS, payload: _robots});
     
  });


});