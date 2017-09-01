import axios from 'axios';



//action types

const GET_STUDENTS = 'GET_STUDENTS';

//action creators

export function getStudents (students) {
  const action = {
    type: GET_STUDENTS, students
  };
  return action;
}

//thunks

export function fetchStudents() {
  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students)
        dispatch(action)
      })
  }
}

//reducer

export default function reducer (state = [], action) {

  switch (action.type) {
    case GET_STUDENTS:
      return action.students
    default:
      return state;
  }
}
