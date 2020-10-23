import React, {Component} from 'react';
import WithClass from '../hoc/WithClass.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import classes from './App.scss';
import FrontPage from '../components/FrontPage/FrontPage'
import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';

class App extends Component {
    render(){
        return (
            <WithClass classes = {classes.App}>
                <BrowserRouter>
                    <Switch>
                            <Route path = "/" exact component = {FrontPage} />
                           <Route path = "/personalInfo" exact component = {PersonalInfo} />
                           <Route path="/experience" component={Experience} />
                           <Route path="/education" component={Education} />
                    </Switch>
                </BrowserRouter>
            </WithClass>
         );

    }

}

export default App;
