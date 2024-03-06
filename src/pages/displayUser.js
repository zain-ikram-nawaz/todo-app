import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem } from "./redux/slice";

export default function displayUser() {
  const dispatch = useDispatch();
  const selector = useSelector((data) => data.reducer.users);
  return (
    <div className="display-user">
      {selector &&
        selector.map((data, key) => {
          return (
            <div key={data.id} className="grid grid-cols-2 gap-1">
              <p>{data.name}</p>
              <button onClick={() => dispatch(RemoveItem(data.id))}>
             Remove
              </button>
            </div>
          );
        })}
    </div>
  );
}
