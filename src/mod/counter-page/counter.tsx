import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../config/state/hooks";
import { RootState } from "../../config/state/store";
import { increment, decrement, incrementByAmount } from '../../state-slices/counter-slice';

const Counter = (props: any) => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (<>
    <div>
      count: { count }
    </div>
    <div>
      <button onClick={ (e) => dispatch(increment())}>Increase by 1</button>
      <button onClick={e => dispatch(decrement())}>Decrease by 1</button>
      <input></input>
      <button onClick={ (e) => dispatch(incrementByAmount(1))}>Increase by amount</button>
    </div>
  </>);
};

export default Counter;