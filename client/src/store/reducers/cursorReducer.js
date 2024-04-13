const initialState = {
    hoveredElement: null 
  };

const cursorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURSOR_POSITION':
            return action.payload;
        case 'SET_HOVERED_ELEMENT':
            return {
                ...state,
                hoveredElement: action.payload
            };
        default:
            return state;    
        }
}

export default cursorReducer;