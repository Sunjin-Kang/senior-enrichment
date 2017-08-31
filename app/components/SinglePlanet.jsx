import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

export default class SinglePlanet extends Component {
  constructor (props) {
    super (props)
    this.state = {
      planets: []
    }
  }

  componentDidMount() {
    axios.get('/api/planets')
    .then(res => res.data)
    .then(planets => {
      this.setState({
        planets: planets
      })
    })
  }

  render () {

    const planets = this.state.planets
    const planetId = Number(this.props.match.params.planetId)
    const thePlanet = planets.find(planet => {
      return planetId === planet.id
    })

    if (thePlanet ) {


      return (
        <div className='container bg-dark'>
          <ul className='text-light'>
            <h3 className='text-warning'>{thePlanet.name}</h3>
            {
              thePlanet.students.map(student => (
                <li key={student.id}>

                  <p>{student.name}</p>
                  <p>{student.email}</p>

                </li>
              ))
            }
          </ul>

        </div>
      )
    } else {
      return (<div>error</div>)
    }
  }
}
