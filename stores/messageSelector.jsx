import {createSelector} from 'reselect'

export const todoSelector = (todos)=> {
    console.log('todos=> ', todos)
    return []
} 

export const filteredTodoSelector = createSelector(
    todoSelector,
    (todos)=> {
        return todos
    }
)