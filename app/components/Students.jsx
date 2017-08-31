import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

export default class Students extends Component {
  constructor (props) {
    super (props)
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios.get('/api/students')
    .then(res => res.data)
    .then(students => {
      this.setState({
        students: students
      })
    })
  }

  render () {

    const students = this.state.students
    return (
      <div className='container bg-dark'>


        <br/>
        <h2 className='text-center text-danger'>Students</h2>



        <div className="row">
          <div className='col-lg-12'>
            <div className='text-right'>
              <NavLink to='/EnrollStudent' className='nav-link'>
                <button className="btn btn-outline-light bg-info my-2 my-sm-0" type="submit">Enroll Student</button>
              </NavLink>
            </div>
          </div>
        </div>

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
                students.map(student => (
                  <li key={student.id}>
                    <div className='row text-info text-center align-left'>

                      <div className='col-lg-3'>
                      </div>

                      <div className='col-lg-2'>
                        {student.id}
                      </div>
                      <div className='col-lg-2'>
                        {student.name}
                      </div>
                      <div className='col-lg-2'>
                        {student.planet.name}
                      </div>
                      <div className='col-lg-1'>
                        <button className="btn btn-default btn-secondary btn-sm btn-outline-light bg-danger my-2 my-sm-0" type="reset">expel</button>
                      </div>
                      <div className='col-lg-2'>

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
}
