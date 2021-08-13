import './App.css';
import React from 'react';
import FlexboxPage from './components/FlexboxPage';
import Fetchador from './components/Fetchador'
import { Fragment } from 'react';



function App() {
  const urlInt = "https://game-of-thrones-quotes.herokuapp.com/v1/author/arya/0";
  const queryInt = 'arya';

  return (
    <div className="App">
      <header 
        className="App-header"
        /* style={{
          backgroundImage: `url("https://media.giphy.com/media/l3DdO92WfFxqI9uiQ/giphy.gif")`  
          
    }} */>
        <Fragment>
          <div className="d-flex flex-column">
            <div className="p-2 col-example text-left">
              <Fetchador url={urlInt} queryInt={ queryInt}/>
            </div>
          </div>
        </Fragment>
      </header>
      
    </div>
  );
}

export default App;
