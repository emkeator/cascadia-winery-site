import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'
import lonelyMtn from './../../LonleyMtnLogoBlack.jpg';
import dragon from './../../dragonWhite.png';
import $ from 'jquery';

export default class Visit extends Component {
    

    componentDidMount() {
        $('body').scrollTop(0);
    }

    render() {
        return(
            <div>Visit</div>
        );
    }
}