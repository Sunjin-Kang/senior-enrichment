import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {getStudents, expelStudent} from '../reducers';



function Students (props) {
  return (
    <div className='container bg-dark'>


      <br/>
      <h2 className='text-center text-danger'>Students</h2>

      <NavLink to='/enroll-student'>
        <button className="btn btn-outline-light bg-info" type="submit">Enroll Student</button>
      </NavLink>

      <div className='row text-center text-warning'>

        <div className='col-lg-3'>
        </div>

        <div className='col-lg-2'>
          <header>
            <h3 >
              Rank
            </h3>
          </header>
        </div>


        <div className='col-lg-2'>
          <header>
            <h3 >
              Name
            </h3>
          </header>
        </div>

        <div className='col-lg-2'>
          <header>
            <h3 >
              Planet
            </h3>
          </header>
        </div>

        <div className='col-lg-3'>
        </div>

      </div>

      <hr/>

      <div className='row'>
        <div className='col-lg-12 center-block'>

          <ul className='list-inline'>
            {
              props.students.map(student => (
                <li key={student.id}>
                  <div className='row text-warning text-center align-left'>

                    <div className='col-lg-3'>
                    </div>

                    <div className='col-lg-2'>
                      <h5 className='text-light'>{student.id}</h5>
                    </div>

                    <div className='col-lg-2'>
                      <NavLink className='thumbnail' to={`/students/${student.id}`}>
                        <h5 className='text-light'><u>{student.name}</u></h5>
                      </NavLink>
                    </div>


                    <div className='col-lg-2'>
                      <NavLink className='thumbnail' to={`/planets/${student.planet.id}`}>
                        <h5 className='text-light'><u>{student.planet.name}</u></h5>
                      </NavLink>
                    </div>

                    <div className='col-lg-1'>
                      <button className="btn btn-default btn-primary btn-sm btn-outline-primary bg-dark my-2 my-sm-0" type="submit" value={student.id}>transfer</button>
                    </div>
                    <div className='col-lg-1'>
                    <form onSubmit={props.handleExpel}>
                      <button className="btn btn-default btn-secondary btn-sm btn-outline-light bg-dark my-2 my-sm-0" name='expel' type="submit" value={student.id}>expel</button>
                      </form>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                  </div>
                  <br/>
                </li>
              ))
            }
          </ul>

        </div>
      </div>

      <br/>

    </div>
  )
}


const mapStateToProps = function(state, ownProps) {
  return {
    students: state.students
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleExpel (event) {
      event.preventDefault()
      dispatch(expelStudent(event.target.expel.value))
      dispatch(getStudents())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Students)
