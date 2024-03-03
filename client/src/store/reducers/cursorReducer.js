const initialState = { x: 0, y: 0 };

const cursorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURSOR_POSITION':
            return action.payload;
        default:
            return state;
    }
}

export default cursorReducer;