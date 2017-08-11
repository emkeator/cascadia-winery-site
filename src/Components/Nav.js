import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import $ from 'jquery';

export default class Nav extends Component {

    componentDidMount() {
        $('.hiddenItem').hide();
        $('body').on('click', function(){
            $('.hiddenItem').hide(800);
        });
    }

    render() {

        return(
            <nav className="navBar">
                <Link to='/' className="navMenuItem" id='home'>Home</Link>
                <div className='hiddenMenuItems'>
                    <Link to='/wines' className="navMenuItem hiddenItem" id='wines'>Wines</Link>
                    <Link to='/events' className="navMenuItem hiddenItem" id='events'>events</Link>
                    <Link to='/visit' className="navMenuItem hiddenItem" id='visit'>visit</Link>
                </div>
                <span className="navMenuItem" id='menu' onClick={ () => {
                                                                        let me = $('.hiddenItem');
                                                                        if(me.is(':visible')) {
                                                                            me.hide(800);
                                                                        }else {
                                                                            me.show(800);
                                                                        }
                                                                    }}>menu</span>                
            </nav>
        );
    }
}