import { makeAutoObservable, observable } from "mobx"
import uniqid from 'uniqid'
export default class MessageModel {
    id  = uniqid()
    @observable texte = "";
    @observable author = "";
    @observable read = false;

    constructor(texte) {
        makeAutoObservable(this)
        this.texte = texte
    }
    toggle() {
        this.read = !this.read
    }
}