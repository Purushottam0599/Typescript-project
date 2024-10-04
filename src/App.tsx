import React from 'react';
import TodoApp from '../src/component/TodoApp';
import Practice from './component/practice/practice';
import UseState from './component/practice/hooks/UseState';
import UseReducer from './component/practice/hooks/UseReducer';
import Content from './component/practice/hooks/context/Content';
import UseRef from './component/practice/hooks/UseRef';
import UseMemo from './component/practice/hooks/UseMemo';
import UseCallback from './component/practice/hooks/UseCallback';

const App: React.FC = () => {
  return (
    <>
    <div style={{display: "flex", justifyContent: "center"}}>
    {/* <Practice name='pradip' age={19} isEligible={false} /> */}

    {/* <TodoApp /> */}

    {/* <UseState /> */}

    {/* <UseReducer /> */}
    {/* <Content /> */}

    {/* <UseRef /> */}

    {/* <UseMemo /> */}

    <UseCallback />


    </div>

    </>
  );
};

export default App;
