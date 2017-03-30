/**
 * Created by tammyslau on 3/19/17.
 */
import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const taskDetails = this.props.listData;
        return (
           <div>
               {taskDetails.map((i,task) => {
                   return (
                       <div>
                       <h1 key={i}>{task.title}</h1>
                           <p>{task.description}</p>
                           <p>{task.date}</p>
                       </div>
                   )

               })}
           </div>
        );
    }
}

export default List;