import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootType } from "../store";

export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;