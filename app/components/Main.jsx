import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import store from '../store';
import {fetchPlanets, fetchStudents} from '../reducers'

import Navbar from './Navbar';
import Home from './Home';
import Planets from './Planets';
import Students from './Students';
import SinglePlanet from './SinglePlanet';
import SingleStudent from './SingleStudent';


export default class Main extends Component {

  componentDidMount() {
    // store the initial thing to load in here!
    //aka the store.dispatch(thunks)
    const planetsThunk = fetchPlanets();
    const studentsThunk = fetchStudents();

    store.dispatch(planetsThunk);
    store.dispatch(studentsThunk);
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

            <Route exact path='/students/enroll-student' />
            <Route exact path='/students/:studentId' component={SingleStudent}/>
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
