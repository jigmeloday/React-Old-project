import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import CardReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: CardReducer

});

export default persistReducer(persistConfig, rootReducer);