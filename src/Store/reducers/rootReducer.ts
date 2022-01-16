import { combineReducers, createStore } from "redux";
import { modalReducer } from "./modalReducer";
import { notesReducer } from "./notesReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  notes: notesReducer,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;

export default rootReducer;
