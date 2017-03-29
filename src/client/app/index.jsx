import React from 'react';
import {render} from 'react-dom';
import Form from './Form.jsx';
import ListBody from './ListBody.jsx'

class App extends React.Component {

    render() {

        return (
            <div>
                <Form/>
                <ListBody/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));