import React from 'react';
import TodoItem from './TodoItem';

function ListComponent(props) {
     console.log("this is first props", props.items)
     return (
      <div>
        <ul>{props.items.map((item, index) =>{
          return (
            <TodoItem item={item}/>
          )})}
       </ul>
    </div>
    )
}

export default ListComponent;