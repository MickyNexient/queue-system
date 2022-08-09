import { expect, it } from 'vitest';

import QueueReducer, { types, initialState } from '../../src/reducers/QueueReducer';

describe('QueueReducer', () => {
    it('defaults', () => {
        const state = { items: [{ id: 1 }], count: 1 };
        const action = { type: "YOLO" };

        expect(QueueReducer(state, action)).toEqual(state);
    });

    it('resets to initial state', () => {
        const state = { items: [{ id: 420 }], count: 1 };
        const action = { type: types.RESET };

        expect(QueueReducer(state, action)).toEqual(initialState);
    });

    it('adds an item', () => {
        const action = { type: types.ADD, item: { id: 1 } };

        expect(QueueReducer(initialState, action)).toEqual({ items: [{ id: 1 }], count: 1 });
    });

    it('removes an item', () => {
        const state = { items: [{ id: 1 }], count: 1 };
        const action = { type: types.REMOVE, item: { id: 1 } };

        expect(QueueReducer(state, action)).toEqual({ items: [], count: 0 });
    });

    it('does not remove an item that does not exist', () => {
        const action = { type: types.REMOVE, item: { id: 1337 } };

        expect(QueueReducer(initialState, action)).toEqual({ items: [], count: 0 });
    });
});