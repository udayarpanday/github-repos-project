import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import RepoDetailsReducer from "../store/reducer"

export const store = configureStore({
  reducer: {
    repoStore:RepoDetailsReducer
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
