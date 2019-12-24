import React from 'react';
import './App.css';
import HomePage from './pages/Hompage/Homepage';
import { Route } from 'react-router-dom';
import MexicanPage from './pages/Categories/Mexican/Mexican.component'
 

function App() {
  return (
    <div className="App">
     {/* start of the APP  *
     {/* nav bar and listing of categories */
      }
      
      <Route exact path='/' component={HomePage} />
      <Route  path='/hi/' component={MexicanPage} />


     </div>
  );
}

export default App;
