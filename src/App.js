import React from 'react';
import './App.css';
import HomePage from './pages/Hompage/Homepage';
import { Route } from 'react-router-dom';
import MexicanPage from './pages/Categories/Mexican/Mexican.component'
import BBQPage from './pages/Categories/Bbq/Bbq.component'
import ChinesePage from './pages/Categories/Chinese/Chinese.component'
 import JamaicanPage from './pages/Categories/Jamaican/Jamaican.component'
 import Shop from './pages/Shop/Shop.component'
 import Header from './components/NavBar/NavBar.component'


function App() {
  return (
   
    <div className="App">
     {/* start of the APP  *
     {/* nav bar and listing of categories */
      }
       <Header />
      <Route exact path='/' component={HomePage} />
      <Route  path='/mexican/' component={MexicanPage} />
      <Route  path='/jamaican/' component={JamaicanPage} />
      <Route  path='/chinese/' component={ChinesePage} />
      <Route  path='/bbq/' component={BBQPage} />
      <Route path='/shop' component={Shop} />


   
     </div>
   
  );
}

export default App;
