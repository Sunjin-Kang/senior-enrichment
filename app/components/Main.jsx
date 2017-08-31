import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import store, {  } from '../store';
import Navbar from './Navbar';
import Planets from './Planets';


export default class Main extends Component {


  componentDidMount() {
    // store the initial thing to load in here!
    //aka the store.dispatch(thunks)
  }

  render() {

    return(
      <div>
        <Navbar />

        <main>
          <Switch>
            <Route exact path='/planets/planet-id' />
            <Route exact path='/planets/:planetId' />
            <Route exact path="/planets" component={Planets} />

            <Route exact path='/students/new-student' />
            <Route exact path='/students/:studentId' />
            <Route exact path='/students' />
            <Redirect to='/' />
          </Switch>
        </main>
      </div>
    );
  }
}
