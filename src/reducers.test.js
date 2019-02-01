import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

describe('Search Robots', () => {
    it('Should return initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''})
    })

    it('Should return some state', () => {
        expect(reducers.searchRobots(undefined, {type: CHANGE_SEARCHFIELD, payload: 'abc'})).toEqual({searchField: 'abc'})
    })
})

describe('Request Robots', () => {
    it('Should return initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual({robots: [], isPending: false})
    })

    it('Should return some state for REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(undefined, {type: REQUEST_ROBOTS_PENDING})).toEqual({robots: [], isPending: true})
    })

    const _robots = [{
            id: 1,
            name: 'Tee Boss',
            email: 'T.Boss@gmail.com'
      }];

    const _initialStateRobots = {
        robots: [],
        isPending: false
      }

    it('Should return some state for REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots(_initialStateRobots,{ payload: _robots, type: REQUEST_ROBOTS_SUCCESS})).toEqual({robots: _robots, isPending: false})
    })

    it('Should return some state for REQUEST_ROBOTS_FAILED', () => {
        expect(reducers.requestRobots(_initialStateRobots,{ payload: 'Some errorx', type: REQUEST_ROBOTS_FAILED})).toEqual({error: 'Some errorx', robots: [], isPending: false})
    })
})