import React, {Component} from 'react';
import './App.css';
import PersonDetails from './components/PersonDetails/PersonDetails';

class App extends Component {
    state = {
            personDetails: [
                    {name: ' '},
            ]
    }

    nameInputHandler = (event) => {
                this.setState({
                    personDetails: [
                                        {name: event.target.value},
                                ]

                } )
           }

    render(){
        return (
                <div className="App">
                    <PersonDetails name = {this.state.personDetails[0].name}
                                    changed = {this.nameInputHandler}/>
                </div>
         );

    }

}

export default App;
