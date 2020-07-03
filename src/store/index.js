import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
// import storage from "redux-persist/lib/";
const myReducer = persistReducer(
  {
    key: "root",
    storage: storageSession,
  },
  reducer
);

const store = createStore(myReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
export default store;
