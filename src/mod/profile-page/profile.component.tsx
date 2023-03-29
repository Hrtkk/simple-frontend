import { useAppDispatch, useAppSelector } from "../../config/state/hooks";
import { RootState } from "../../config/state/store";

export const ProfileComponent = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <></>
  );
};
