import React from 'react';
import ReactDOM from 'react-dom';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { LayoutEffect } from './components/05-useLayoutEffect/LayoutEffect';
// import { Memorize } from './components/06-memos/Memorize';
import { MemoHook } from './components/06-memos/MemoHook';


ReactDOM.render(
    <MemoHook />,
    document.getElementById('root')
);

