import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import store, {  } from '../store';
import Navbar from './Navbar';
import Home from './Home';
import Planets from './Planets';
import Students from './Students';
import SinglePlanet from './SinglePlanet';

export default class Main extends Component {


  componentDidMount() {
    // store the initial thing to load in here!
    //aka the store.dispatch(thunks)
  }

  render() {

    return(
      <div className='bg-light'>
        <Navbar />


        <br/>
        <main>
          <Switch>
            <Route exact path='/planets/planet-id' />
            <Route exact path='/planets/:planetId' component={SinglePlanet}/>
            <Route exact path="/planets" component={Planets} />

            <Route exact path='/students/new-student' />
            <Route exact path='/students/:studentId' />
            <Route exact path='/students' component={Students} />
            <Route exact path='/' component={Home} />
            <Redirect to='/' />
          </Switch>
        </main>

        <br/>
      </div>
    );
  }
}
