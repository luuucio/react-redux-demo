import React, { Fragment } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <Fragment>
      <div className='hero is-primary has-text-centered'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>React &amp; Redux Demo</h1>
            <h2 className='subtitle'>(and the awesome JSON Server)</h2>
          </div>
        </div>
      </div>

      <div className='columns is-centered'>
        <div className='column'>
          <Form />
        </div>
        <div className='column'>
          <TodoList />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
