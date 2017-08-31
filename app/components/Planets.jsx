import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

export default class Planets extends Component {
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
    return (
      <div>
        <h2>Planets</h2>
        <div>

          {
            planets.map(planet => (
              <div className='col-lg-6' key={planet.id}>
                <NavLink className='thumbnail' to={`/planets/${planet.id}`}>
                  <img src={planet.image} />
                  <div className='caption'>
                    <h5>
                      <small>{planet.students.length}</small>
                    </h5>
                  </div>
                </NavLink>
              </div>
            ))
          }

        </div>
      </div>
    )
  }
}
