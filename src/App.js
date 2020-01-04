import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/Hompage/Homepage';
import { Route } from 'react-router-dom';
import MexicanPage from './pages/Categories/Mexican/Mexican.component'
import BBQPage from './pages/Categories/Bbq/Bbq.component'
import ChinesePage from './pages/Categories/Chinese/Chinese.component'
import JamaicanPage from './pages/Categories/Jamaican/Jamaican.component'
import Register from './pages/Login/Login'
import Shop from './pages/Shop/Shop.component'
import Header from './components/NavBar/NavBar.component'
import { auth, storeUserProfileDocument } from './firebase/firebase.utils'

class App extends Component {
  constructor(props) {
    super(props);

    // signed in?
    this.state = {
      currentUser: null
    }
  }
  // property
  unsubscribeFromAuth = null

  componentDidMount() {
    // whens someone signs in/out be aware without having to manually fetch
    // always aware when fb auth state has changed
    // subscriber --  // always open


    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
     storeUserProfileDocument(user)
      console.log(user)
    })

  }

  componentWillUnmount() {
    // will close the subsciption
    this.unsubscribeFromAuth();
  }


  render() {

    return (
      <div className="App">
        {/* start of the APP  *
     {/* nav bar and listing of categories */
        }
        <Header currentUser={this.state.currentUser} />
        <Route exact path='/' component={HomePage} />
        <Route path='/mexican/' component={MexicanPage} />
        <Route path='/jamaican/' component={JamaicanPage} />
        <Route path='/chinese/' component={ChinesePage} />
        <Route path='/bbq/' component={BBQPage} />
        <Route path='/shop' component={Shop} />
        <Route path='/login' component={Register} />





      </div>
    )

  };
}

export default App;
