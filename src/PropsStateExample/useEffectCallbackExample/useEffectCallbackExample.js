import {useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";

export function UseEffectCallbackExample(props){
  const [data, setData] = useState(true);
  const another = useMemo(()=>data+1, [data])
  const firstUpdate = useRef(true);

  useEffect(()=>{
    if (firstUpdate.current) {
      firstUpdate.current = false;
    }else{
      console.log("useEffect")
    }
  }, [data])

  return (
    <div>
      <button onClick={()=>setData(!data)}>change state</button>
      <p>data: {data.toString()}</p>
      <p>another: {another.toString()}</p>
    </div>
  )
}