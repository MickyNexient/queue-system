export const initialState = {
    items: [],
    count: 0
}

export const types = {
    RESET: 'reset',
    ADD: 'add',
    REMOVE: 'remove'
}

export default (state, action) => {
    console.info("STATE", action.type);

    switch (action.type) {
        case types.RESET:
            return initialState
        case types.ADD:
            let newItems = [...state.items, action.item];
            return { items: newItems, count: newItems.length };
        case types.REMOVE:
            let filteredItems = state.items.filter((item) => item.id != action.item.id);
            return { items: filteredItems, count: filteredItems.length };
        default:
            return state;
    }
}