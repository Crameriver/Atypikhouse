import { observable, computed, action, makeAutoObservable } from 'mobx'
import uniqid from 'uniqid'
import MessageModel from './MessageModel'

export default class MessageListModel {
    constructor() {
        makeAutoObservable(this)
    }
    //Chaque items messages sera un objet d'une instance MessageModel
    @observable messages = []
    @computed
    get ReadedMessages() {
        return this.messages.filter(message=> message.read).length
    }
    @action
    addMessage(texte) {
        this.messages.push(new MessageModel(texte))
    }
    @computed
    AllMessages() {
        return this.messages
    }
    @action
    removeMessage(id) {
        this.messages = this.messages.filter(messages=> messages.id !== id)
    }
}