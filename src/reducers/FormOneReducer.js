export const initialState = {
    email: '',
    firstName: '',
    lastName: ''
}

export const types = {
    INIT: 'init',
    UPDATE: 'update'
}

export default (state, action) => {
    console.info("FORM ONE ACTION", action);
    
    switch (action.type) {
        case types.INIT:
            return { ...initialState }
        case types.UPDATE:
            return { ...state, [action.field]: action.value }
        default:
            return state;
    }
}