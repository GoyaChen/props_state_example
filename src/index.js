import React from 'react';
import ReactDOM from 'react-dom/client';
import {Parent} from "./PropsStateExample/1/Parnet";
import {GrandParent} from "./PropsStateExample/6/GrandParnet";
import {UseEffectCallbackExample} from "./PropsStateExample/useEffectCallbackExample/useEffectCallbackExample";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <UseEffectCallbackExample />
  <React.StrictMode>
    <Parent/>
    {/*<GrandParent />*/}
    {/*<UseEffectCallbackExample />*/}
  </React.StrictMode>
);
