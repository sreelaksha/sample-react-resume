import React, {Component} from 'react';
import './App.css';
import PersonDetails from './components/PersonDetails/PersonDetails';

class App extends Component {
    state = {
            personDetails: [
                    {firstName: ' '},
                    {lastName: ' '}
            ]
    }

    nameInputHandler = (event) => {
                this.setState({
                    personDetails: [
                                        {firstName: event.target.value},
                                        {lastName: event.target.value}
                                ]

                } )
           }

    render(){
        return (
                <div className="App">
                    <PersonDetails firstName = {this.state.personDetails[0].firstName}
                                    lastName = {this.state.personDetails[1].lastName}
                                    changed = {this.nameInputHandler}/>
                </div>
         );

    }

}

export default App;
