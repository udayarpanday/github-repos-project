import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import repoReducer from "../pages/home/reducer"

export const store = configureStore({
  reducer: {
    repoStore:repoReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
