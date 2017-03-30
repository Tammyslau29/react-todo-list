import React from 'react';
import {render} from 'react-dom';
import Form from './Form.jsx';
import List from './List.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems:[]
        };
    }
    handleFormData(taskDetails){
        const tmpListItem = [...this.state.listItem, taskDetails];
        this.setState({
            listItems: tmpListItem
        })
    }
    render() {

        return (
            <div>
                <Form sendFormData={this.handleFormData}/>
                <List listData = {this.state.listItems}/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));