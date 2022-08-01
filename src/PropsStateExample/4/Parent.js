import {Child} from "./Child";

export function Parent(props){
  //use this way to pass all the state
  return (
    <Child state={{...props.state}} />
  )
}
