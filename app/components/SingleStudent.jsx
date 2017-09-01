import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

function SingleStudent (props) {

  console.log(props)
  const student = props.students.find(student => {
    return (student.id === Number(props.match.params.studentId))
  })
  if (student) {
    return (
      <div className='container bg-dark'>
        <div className='text-light'>

          <br/>

          <h3 className='text-warning'>{student.name}</h3>

          <hr/>

          <p>Rank: <b className='text-info'>{student.id}</b></p>
          <p>Email: <b className='text-info'>{student.email}</b></p>
          <NavLink to={`/planets/${student.planet.id}`}>
          <p className='text-light'>Planet: <b className='text-primary'>{student.planet.name}</b></p>
          </NavLink>

          <br/>
          <button className="btn btn-default btn-secondary btn-sm btn-outline-light bg-dark my-2 my-sm-0" type="submit" value={student.id}>expel</button>
          <br/>
        </div>

        <hr/>

      </div>
    )
  } else {
    return (<div>error</div>)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students
  }
}

export default connect(mapStateToProps)(SingleStudent)
