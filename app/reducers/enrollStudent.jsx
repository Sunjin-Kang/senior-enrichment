import axios from 'axios';

//action types

const ENROLL_STUDENT = 'ENROLL_STUDENT';

//action creators

export function enrollStudentAction (student) {
  const action = {
    type: ENROLL_STUDENT, newStudent
  };
  return action;
}

//thunks

export function enrollStudent(newStudent) {
  return function thunk(dispatch) {
    return axios.post(`/api/students/`, {newStudent})
      .then(res => res.data)
      .then(() => {
        const action = enrollStudentAction(newStudent)
        dispatch(action)
      })
  }
}

//reducer

export default function reducer (state = [], action) {

  switch (action.type) {
    case ENROLL_STUDENT:
      return Object.assign({}, state, {students: [...state.students, action.newStudent]})
    default:
      return state;
  }
}
