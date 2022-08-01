import {Child} from "./Child";
import {useState} from "react";

export function Parent(props){
  const [parentParam, setParentParam] = useState("example 5 parent param")
  return (
    <Child state={{...props.state, parentParam, setParentParam}} />
  )
}
