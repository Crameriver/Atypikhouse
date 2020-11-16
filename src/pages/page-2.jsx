import React, { Component } from "react"
import { Link } from "gatsby"
import { inject, observer } from "mobx-react";
import Layouts from "../components/layout"
import SEO from "../components/seo"
@inject('store')
@observer
class SecondPage extends Component {

  render() {
    const { store } = this.props
    return <Layouts>
              <SEO title="Page two" />
              <h1>Hi from the second page</h1>
              <ul>
                {store.messages.map(({texte, id})=> <li key={id}> {texte} </li> ) }
              </ul>
              <p>Welcome to page 2</p>
              <Link to="/">Go back to the homepage</Link>
          </Layouts> 
  }
}

export default SecondPage
