import {Child1} from "./Child1";
import {useState} from "react";
import {Child2} from "./Child2";

export function Parent(props){
  //Like context, you can package all the state, and pass it to multiple children
  const [param1, setParam1] = useState("example 3 param1")
  const [param2, setParam2] = useState("example 3 param2")

  const state={param1, setParam1, param2, setParam2}

  return (
    <>
      <Child1 state={state} />
      <Child2 state={state} />
    </>
  )
}
