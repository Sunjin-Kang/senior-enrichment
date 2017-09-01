import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {createPlanet} from '../reducers';


function Planets (props) {

  return (
    <div className='container bg-dark'>

      <br/>

      <h2 className='text-center text-danger'>Planets</h2>

      <form className="form-inline my-2 my-lg-0" onSubmit={props.handleSubmit}>
        <div className='text-right'>
        <input className="form-control mr-sm-2" name='planetName' type="text" placeholder="Create Planet" aria-label="Search"/>
        <button className="btn btn-outline-light bg-info my-2 my-sm-0" type="submit">Create</button>
        </div>
      </form>

      <hr/>


      <div className='row'>
        {
          props.planets.map(planet => (
            <div className='col-lg-6 align-left' key={planet.id}>

              <NavLink className='thumbnail' to={`/planets/${planet.id}`}>
                <img src={planet.image} className='img-responsive img-thumbnail bg-info' height='360px'/>

                  <h5 className='text-center'>
                    <small className='text-light'>
                    <h5 className='text-warning'>{planet.name}</h5>
                    <p>
                    Enrollment: {planet.students.length}
                    </p>
                    </small>
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

const mapStateToProps = function(state, ownProps) {
  return {
    planets: state.planets
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return{
    handleSubmit (event){
      event.preventDefault();
      dispatch(createPlanet(event.target.planetName.value))

    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Planets);
