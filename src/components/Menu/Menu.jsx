import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

export default class Menu extends Component {    
    render () {
        const {items_prop, title} = this.props//props - объект
        return (
            // вместо дивов, чтобы не вкладывались друг в друга при рендере верстки, подключается выше.
            <Fragment>                
                <ul className="menu">
                    { items_prop.map ((item, idx) => <li key={ idx }> <Link to= { item.href }> { item.title } </Link></li>) }
                </ul>
            </Fragment>
        )
    }
}