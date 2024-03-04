import { configureStore } from "@reduxjs/toolkit";
import { trellRender } from "./tools/trelloSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userRender } from "./tools/userSlice";

const store = configureStore({
  reducer: { trellRender, userRender },
});
export default store;
type useDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<useDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
