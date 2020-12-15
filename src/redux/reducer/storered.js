import { fakeData } from './fakeData'

const checkEmailAndPassword = (data) => {
  const filtredArray = fakeData.filter(el => el.email === data.email && el.password === data.password)
  if (filtredArray.length === 0) {
    return false
  }
  return true
}

const changein = (state = {
  list: [],
  isloged: false,
  errorMessage: '',
  user: {}
}, action) => {
  switch (action.type) {
    case 'addin':
      return { ...state, list: action.data }

    case 'login':
      if (checkEmailAndPassword(action.data)) {
        return { ...state, isloged: true, errorMessage: '', user: action.data }
      } else {
        return { ...state, isloged: false, errorMessage: 'Wrong Email or password' }
      }

    case 'logout':
      return { ...state, isloged: false, errorMessage: '', user: {} }

    default: return state;

  }
}

export default changein