/**
 * Created by tammyslau on 3/19/17.
 */
import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskDetails: {
                title:"",
                date: "",
                description: ""
            },
        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(e) {
        const key = e.target.id;
        const tmpDetails = Object.assign({}, this.state.taskDetails);
        tmpDetails[key] = e.target.value;
        this.setState({ taskDetails: tmpDetails });
    }

    handleSubmit(){
        this.props.sendFormData(this.state.taskDetails)
    }

    render() {

        return (
            <form>
                <label>Title</label>
                <input value={this.state.title} id="title" onChange={this.handleChange} type="text" className="formTitle" placeholder="Task Title"/>
                <label>Details</label>
                <input value={this.state.description} id="description" onChange={this.handleChange} type="text" className="formInfo" placeholder="Enter A Task"/>
                <label>Due Date</label>
                <input value={this.state.date} id="date" onChange={this.handleChange} type="date"/>
                <button onClick={this.handleSubmit} type="button">Add to List</button>
            </form>
        );
    }
}

export default Form;