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
      <div className='container bg-dark'>


        <br/>
        <h2 className='text-center text-danger'>Planets</h2>



        <form className="form-inline my-2 my-lg-0">
          <div className='text-right'>
          <input className="form-control mr-sm-2" type="text" placeholder="Create Planet" aria-label="Search"/>
          <button className="btn btn-outline-light bg-info my-2 my-sm-0" type="submit">Create</button>
          </div>
        </form>

        <hr/>

        <div className='row'>
          {
            planets.map(planet => (
              <div className='col-lg-6 align-left' key={planet.id}>

                <NavLink className='thumbnail' to={`/planets/${planet.id}`}>
                  <img src={planet.image} className='img-responsive img-thumbnail bg-info' height='360px'/>

                    <h5 className='text-center'>
                      <small className='text-light'>Enrollment: {planet.students.length}</small>
                    </h5>
                </NavLink>

                <br/>
              </div>
            ))
          }
        </div>

        <br/>

      </div>
    )
  }
}
