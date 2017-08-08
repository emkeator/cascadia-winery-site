import React, {Component} from 'react'
import './Footer.css';
import {Link} from 'react-router-dom';
import axios from 'axios'
import lonelyMtn from './../LonleyMtnLogoBlack.jpg';
import $ from 'jquery';

export default class Footer extends Component {
    

    render() {
        return(
            <footer id="#footer" className="mainFooter">
                <ul className='footerMenu'>
                    <li onClick={ () => $('.featWine').fadeToggle(700)}>Featured Wine ||</li>
                    <li onClick={ () => $('.news').fadeToggle(700)} className="left"> News</li>
                    <li onClick={ () => $('.contact').fadeToggle(700)}>Contact ||</li>
                    <li onClick={ () => $('.social').fadeToggle(700)} className="left"> Social Media</li>                    
                </ul>
                <div className='infoBox featWine'>Featured Wine</div>
                <div className='infoBox news'>News</div>
                <div className='infoBox contact'>Contact</div>
                <div className='infoBox social'>Social</div>
                <img className='logoImg' alt="mountain drawing" src={lonelyMtn}/>              
            </footer>
        );
    }
}