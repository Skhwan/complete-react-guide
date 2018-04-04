import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hocs/Aux';
import withClass from '../hocs/withClass';

class App extends Component {
  state = {
    persons : [
      { id: 'owoek', name: "Max", age: 28 },
      { id: 'd3dff', name: "Manu", age: 29 },
      { id: 'dajd7', name: "Stephanie", age: 26 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personId;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
      <Aux>
        <Cockpit 
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler} />
        { persons }
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
