export function Child2(props){
  //And Child can only get the param their need
  const{param2, setParam2} = props.state

  return param2;
}