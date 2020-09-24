import React from 'react'
import './TodoList.css'

const TodoList = ( props ) => {
    return (
        <li className="List">
            {props.addTask.todos.map((todo, index) =>
                (<ul key={index} className="ListItem">
                    <h3 className="Task">{todo}<span onClick={props.removeTodo} className="Close">X</span></h3>
                </ul>))}
        </li>
    )
}

export default TodoList;
