import React, { Component } from "react"
import { Link } from "gatsby"
import Layouts from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { connect, useSelector, useDispatch } from 'react-redux'
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
const Page3 = ({todos, dispatch}) => {
   // const messages = useSelector(filteredTodoSelector)
    console.log('messages ', todos)

    return <Layouts>
        <SEO title="Home" />
        
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </Layouts>     
}

// export default connect(state=>({
//     todos: state.todos
// }), null)(Page3)
export default Page3