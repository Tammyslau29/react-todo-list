import React from 'react';
import {render} from 'react-dom';
import Form from './Form.jsx';
import List from './List.jsx'
import Rebase from 're-base';


var base = Rebase.createClass({
    apiKey: "AIzaSyD7QG-495110jK7JnKbk3nuXhNz4n-DgpA",
    authDomain: "react-todos-ad88f.firebaseapp.com",
    databaseURL: "https://react-todos-ad88f.firebaseio.com",
    storageBucket: "react-todos-ad88f.appspot.com",
    messagingSenderId: "488473037299"
});
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems:[]
        };
        this.handleFormData = this.handleFormData.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleFormData(taskDetails){
        const tmpListItem = [...this.state.listItems, taskDetails];
        this.setState({
            listItems: tmpListItem
        })
    }
    handleDelete(i){
        this.setState({
            listItems: [
            ...this.state.listItems.slice(0, i),
            ...this.state.listItems.slice(i + 1)]
        })
    }
    render() {

        return (
            <div>
                <Form base={base} sendFormData={this.handleFormData}/>
                <List handleDelete={this.handleDelete} listData = {this.state.listItems}/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));