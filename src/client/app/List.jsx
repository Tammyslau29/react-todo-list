/**
 * Created by tammyslau on 3/19/17.
 */
import React from 'react';
import {Button} from 'react-bootstrap'

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const taskDetails = this.props.listData;
        return (
           <div>
               {taskDetails.map((task,i) => {
                   return (
                       <div>
                       <h1 key={i}>{task.title}</h1>
                           <p>{task.description}</p>
                           <p>{task.date}</p>
                           <Button type="button" onClick={() => {this.props.handleDelete(i)}}>Delete</Button>
                       </div>
                   )

               })}
           </div>
        );
    }
}

export default List;