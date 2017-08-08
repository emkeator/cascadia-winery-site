import React, {Component} from 'react'
import './Nav.css';
import {Link} from 'react-router-dom';
import $ from 'jquery';

export default class Nav extends Component {

    render() {

        return(
            <nav className="navBar">
                <Link to='/' className="menuItem" id='home'>Home</Link>
                <div className='hiddenMenuItems'>
                    <Link to='/wines' className="menuItem hiddenItem" id='wines'>Wines</Link>
                    <Link to='/events' className="menuItem hiddenItem" id='events'>events</Link>
                    <Link to='/visit' className="menuItem hiddenItem" id='visit'>visit</Link>
                </div>
                <span className="menuItem" id='menu' onClick={ () => $('.hiddenItem').fadeToggle(700)}>menu</span>                
            </nav>
        );
    }
}