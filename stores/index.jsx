import { TodoReducer } from './TodoReducer'
import { combineReducers  } from 'redux';
export default combineReducers({
      todos: TodoReducer
    })