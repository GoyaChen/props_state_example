export function Child1(props){
  //And Child can only get the param their need
  const{param1, setParam1} = props.state

  return param1;
}
