import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App';
import Nav from './Components/Nav';
import Wines from './Components/Wines/Wines';
import Events from './Components/Events/Events';
import Visit from './Components/Visit/Visit';

export default (
    <Nav>
        <Switch>
            <Route path='/' exact component={App}/>
            <Route path='/wines' component={Wines}/>
            <Route path='/events' component={Events}/>
            <Route path='/visit' component={Visit}/>                
        </Switch>
    </Nav>
)


//FIND OUT: best practice. How to get Nav at the top 
//of everything, but the body changes with the path.
//footer can stay
//so basically body of the app is replaced?