import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import NewsContainer from './components/News/NewsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Header from './components/Header/Header';
import LoginContainer from './components/Login/LoginContainer';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='wraper'>
      <Route exact path='/' component={Home} />
      <Route path='/news' component={NewsContainer} />
      <Route path='/profile' component={ProfileContainer} />
      <Route  path='/login' component={LoginContainer} />
      </div>
    </div>
  );
}

export default App;
