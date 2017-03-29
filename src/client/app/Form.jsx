/**
 * Created by tammyslau on 3/19/17.
 */
import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskInput: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({taskInput: e.target.value});
    }

    render() {

        return (
            <form>
                <input value={this.state.taskInput} onChange={this.handleChange} type="text" placeholder="Enter A Task"/>
                <input type="date"/>
            </form>
        );
    }
}

export default Form;