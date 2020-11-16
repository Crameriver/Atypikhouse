import React from 'react'
import MessageListModel from './src/models/MessageListModel'
import { Provider } from 'mobx-react'
import reduxstore from './stores'
import { createStore } from 'redux';
import uniqid from 'uniqid'
let store = new MessageListModel()
const mystore = createStore(reduxstore)
store.addMessage('Fifi')
store.addMessage('Toto')
store.addMessage('Rere')
export const ProvideStores = ({ element })=> <Provider store={ store }> {element} </Provider>