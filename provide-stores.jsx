import React from 'react'
import MessageListModel from './src/models/MessageListModel'
import { Provider } from 'mobx-react'
import reduxstore from './stores'
import { createStore } from 'redux';
import uniqid from 'uniqid'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SecondPage from './src/pages/page-2'
import Accueil from './src/pages/Accueil'
import Page3 from "./src/pages/page3"
let store = new MessageListModel()
const mystore = createStore(reduxstore)

store.addMessage('Fifi')
store.addMessage('Toto')
store.addMessage('Rere')

export const ProvideStores = ({ element })=> <Provider store={ store }>
     {element} 
     </Provider>