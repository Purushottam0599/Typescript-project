import React from 'react';
import TodoApp from '../src/component/TodoApp';
import Practice from './component/practice/practice';
import UseState from './component/practice/hooks/UseState';
import UseReducer from './component/practice/hooks/UseReducer';
import Content from './component/practice/hooks/context/Content';

const App: React.FC = () => {
  return (
    <>
    <div style={{display: "flex", justifyContent: "center"}}>
    {/* <Practice name='pradip' age={19} isEligible={false} /> */}

    {/* <TodoApp /> */}

    <UseState />

    {/* <UseReducer /> */}
    {/* <Content /> */}

    </div>
  
      
    

    </>
  );
};

export default App;
