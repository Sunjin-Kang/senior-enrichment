import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

function SinglePlanet(props) {
    // const planets = this.state.planets
    // const planetId = Number(this.props.match.params.planetId)
    // const thePlanet = planets.find(planet => {
    //   return planetId === planet.id
    // })
    const planet = props.planets.find(planet => {
      return planet.id === Number(props.match.params.planetId)
    })

  if (planet) {
    return (
      <div className='container bg-dark text-light'>

        <br/>

        <h3 className='text-warning text-center'>{planet.name}</h3>

        <hr/>

        <ul className='list-inline'>
        {
          planet.students.map(student => (
            <li key={student.id}>

              <div className='row text-light text-center align-left'>
                <div className='col-lg-3'>
                </div>

                <div className='col-lg-3'>
                <NavLink to={`/students/${student.id}`} className='nav-link'>
                  <h5 className='text-light'>Name: {student.name} </h5>
                  </NavLink>
                </div>

                <div className='col-lg-3'>
                <NavLink to={`/students/${student.id}`} className='nav-link'>
                  <h5 className='text-light'>Email: {student.email}</h5>
                </NavLink>
                </div>


                <div className='col-lg-1'>
                <form>
                {console.log(student)}
                  <select name='transfer' value={student.planetId} onChange={(event) => {
                    //add the edit function here
                  }
                  }>
                    {
                      props.planets.map(planet => (
                      <option key={planet.id} value={planet.id}>{planet.name}</option>
                    ))
                    }
                  </select>
                  <button type='button' className='btn btn-small btn-outline-primary btn-default'>transfer
                  </button>
                  </form>
                </div>
                <div className='col-lg-1'>
                <button type='button' className='btn btn-secondary btn-default btn-outline-light'>expel
                </button>
              </div>

                <br/>
                <br/>
                </div>
            </li>
          ))
        }
        </ul>
        <br/>
        <button className="btn btn-default btn-secondary btn-sm btn-outline-light bg-dark my-2 my-sm-0" type="submit">Destroy Planet</button>
        <br/>
        <hr/>
      </div>
    )
  } else {
    return (<div>error</div>)
  }
}


const mapStateToProps = function(state, ownProps) {
  return {
    planets: state.planets,
    students: state.students
  }
}

const mapDispatchToProps = function(dispatch) {

}

export default connect(mapStateToProps)(SinglePlanet)
