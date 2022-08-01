import {Child} from "./Child";
import {useState} from "react";

export function Parent(props){
  const [parentParam1, setParentParam1] = useState("example 6 parent param 1")
  const [parentParam2, setParentParam2] = useState("example 6 parent param 2")

  const state = {parentParam1, setParentParam1, parentParam2, setParentParam2}
  return (
    <Child state={{...props.state, ...state}} />
  )
}
