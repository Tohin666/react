import React, { Component, Fragment } from 'react'
import ReactDom from 'react-dom'
import './Menu.css'

export default class Menu extends Component {
    render () {
        const {items_prop, title} = this.props//props - объект
        return (
            // вместо дивов, чтобы не вкладывались друг в друга при рендере верстки, подключается выше.
            <Fragment>
                <h1> { title } </h1>
                <ul className="menu">
                    { items_prop.map (el => <li> <a href= { el.href } > { el.title } </a></li>) }
                </ul>
            </Fragment>
        )
    }
}