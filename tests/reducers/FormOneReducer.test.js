import { describe, expect, it } from 'vitest';

import reducer, { initialState, types } from './../../src/reducers/FormOneReducer';

describe('Form One Reducer', () => {
    it('initializes itself', () => {
        const state = {
            email: 'yolo@420.com',
            firstName: 'mike',
            lastName: 'wazowski'
        }
        const action = { type: types.INIT };

        expect(reducer(initialState, action)).toEqual(initialState);
    });

    it('updates a field', () => {
        const action = { type: types.UPDATE, field: 'email', value: 'justice' };

        expect(reducer(initialState, action)).toEqual({
            email: 'justice',
            firstName: '',
            lastName: ''
        });
    });
});