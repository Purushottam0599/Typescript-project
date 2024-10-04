import { createStore } from "redux";
import { taskReducer } from "./reducers";

const store = createStore(taskReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;