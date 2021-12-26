import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './TodoReducer';


import './styles.css'
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


export const TodoApp = () => {

    const init = () => {

        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);


    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos]);


    const handleDelete = ( ( todoId ) => {
        console.log( todoId );

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action );
    });

    const handleAddTodo = ( newTodo ) => {
        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch( action );
    }

    const handleToggle = ( todoId ) => {
        const action = {
            type: 'toggle',
            payload: todoId
        }
        dispatch(action);
    };

    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr />

            <div className='row'>
                <div className="col-7">                    
                    <TodoList 
                        todos={ todos } 
                        handleDelete={ handleDelete } 
                        handleToggle={ handleToggle }
                    />
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
            </div>
        </div>
    )
}
