import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import PersonalInfo from './components/PersonDetails/PersonalInfo';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';

class App extends Component {
    render(){
        return (
                <BrowserRouter>
                    <Switch>
                           <Route path = "/" exact component = {PersonalInfo} />
                           <Route path="/experience" component={Experience} />
                           <Route path="/education" component={Education} />
                    </Switch>
                </BrowserRouter>
         );

    }

}

export default App;
