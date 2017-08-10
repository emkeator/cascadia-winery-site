import React, {Component} from 'react'
import './Home.css';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import video from './../pnw.mp4';
import arrowDown from './../arrow.png';
import dragon from './../dragonWhite.png';

export default class Home extends Component {

    render() {

        function scrollDown() {
            $('html,body').animate({
                scrollTop: $('Footer').offset().top
            }, 'slow');
        }

        return(
        <div>
            <div className='fullscreen-bg'>
            {/*Poster: Photo by Tim Mossholder on Unsplash  */}
            {/*Video: video by Matt johnson https://www.youtube.com/watch?v=m2ryFkHwf2c  */}
            <video loop muted autoPlay width='100%' height='auto' poster="./../pnwPoster.jpg" className="fullscreen-bg-video">
                <source src={video} type="video/mp4" />
            </video>
            </div>
            <div className="overlay">
            <h1>Lonely Mountain Winery</h1>
            <img src={dragon} className="dragon"/>
            <img src={arrowDown} className="arrowDown" onClick={() => {scrollDown()}}/>
            </div>
        </div>
        );
    }
}