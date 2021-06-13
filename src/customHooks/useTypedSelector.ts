import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TRootState } from "../redux";

export const useTypedselector: TypedUseSelectorHook<TRootState> = useSelector;
