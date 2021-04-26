
import './App.css';
import SignIN from './Signin'
import Main from './main'
import Navbar from './Navbar'
import { useState } from 'react';

function App() {
  const[route,setRoute]=useState(['signin']);

  function onRouteChange(route)
  {
    setRoute(route);
  }
  if(route==='signin'||route==='logout')
  {
    return (
 
      <div className="App">
          
            <SignIN />    
      </div>
    );
  }
  else
  {
    return (
 
      <div className="App">
        <header className="App-header">
            <Navbar onRouteChange ={onRouteChange} route={route} />
            <h1>Movies</h1>
            <Main />
            <h1>WEB Series</h1>
            <Main />
        </header>
      </div>
    );
  }
 
}

export default App;
