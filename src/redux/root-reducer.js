import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import directoryReducer from "./directory/directory.reducer";
import CardReducer from "./cart/cart.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: CardReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
