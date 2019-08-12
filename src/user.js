import './user.css'

export default class Human {
    constructor (fname, lname) {
        this.fname = fname
        this.lname = lname
    }
    sayHi () {
        return 'Hi'
    }
}