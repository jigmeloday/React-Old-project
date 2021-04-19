import CartActionType from './cart.type'

const INITIAL_STATE = {
    hidden: true
};

const CardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN: return{
            ...state,
            hidden: !state.hidden
        };
        default: return state;

    }
};

export default CardReducer;
