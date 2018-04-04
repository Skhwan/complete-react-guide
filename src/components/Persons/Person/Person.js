import React, { Component } from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';
import Aux from '../../../hocs/Aux';
import withClass from '../../../hocs/withClass';

class Person extends Component {

    componentDidMount() {
        if(this.props.position === 0){
            this.inputElement.focus();
        }
    }

    render () {
        return (
            <Aux >
                <p onClick={this.props.clicked} >I'm {this.props.name} and I'm {this.props.age} yeas old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                    ref={(inp) => {this.inputElement = inp}} />
            </Aux>
        )
    }
}

Person.propTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);