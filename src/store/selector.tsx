import { RootState } from "./store";

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const isLoading = (state: RootState) => state.repoStore.inProgress;
export const repoSearchList = (state: RootState) => state.repoStore.repos;
export const isDataFetched = (state: RootState) => state.repoStore.isDataFetched;
export const userDetails = (state: RootState) => state.repoStore.userDetails;