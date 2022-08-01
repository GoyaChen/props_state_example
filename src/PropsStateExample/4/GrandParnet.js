import {useState} from "react";
import {Parent} from "./Parent";

export function GrandParent(props){
  const [grandParam, setGrandParam] = useState("example 4")

  return (
    <Parent state={{grandParam, setGrandParam}} />
  )
}