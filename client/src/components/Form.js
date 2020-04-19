import React from "react";

const Form = () => {
  return (
    <div style={{ margin: "50px" }}>
      <h2 className='is-size-4 has-text-centered'>TODO</h2>
      <form>
        <div className='field'>
          <label className='label'>Title</label>
          <div className='control'>
            <input className='input' type='text' placeholder='Title...' />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Description</label>
          <div className='control'>
            <input className='input' type='text' placeholder='Description' />
          </div>
        </div>
        <div className='field'>
          <div className='control'>
            <label className='checkbox'>
              <input type='checkbox' />
              {"  "} Item completed
            </label>
          </div>
        </div>
        <div className='columns is-centered' style={{ margin: "30px" }}>
          <div className='control'>
            <input
              className='button is-primary '
              type='submit'
              value='Submit'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
