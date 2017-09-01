import axios from 'axios';

//action types

const EXPEL_STUDENT = 'EXPEL_STUDENT';

//action creators

export function expelStudentAction (studentId) {
  const action = {
    type: EXPEL_STUDENT, studentId
  };
  return action;
}

//thunks

export function expelStudent(studentId) {
  return function thunk(dispatch) {
    return axios.delete(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(() => {
        const action = expelStudentAction(Number(studentId))
        dispatch(action)
      })
  }
}

//reducer

export default function reducer (state = [], action) {

  switch (action.type) {
    case EXPEL_STUDENT:
      console.log('in the reducer')
      return Object.assign({}, state, {students: state.students.filter(student => student.id !== action.studentId)})
    default:
      return state;
  }
}
