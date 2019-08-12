import './user.css'

export default class Human {
    constructor (fname, mname, lname) {
        this.fname = fname
        this.mname = mname
        this.lname = lname
    }
    sayHi () {
        return 'Hi'
    }
    getFio () {
        return [this.fname, this.mname, this.lname].join(' ')
    }
}