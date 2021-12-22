import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './TodoReducer';
import { useForm } from '../../hooks/useForm';


import './styles.css'


export const TodoApp = () => {




    const init = () => {

        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });


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

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( description.trim().length <= 1 ) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch( action );
        reset();

    }


    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr />

            <div className='row'>
                <div className="col-7">
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map( (todo, i) => (
                                <li
                                    key={todo.id}
                                    className='list-group-item' 
                                > 
                                    <p className="text-center"> { i + 1}. { todo.desc }  </p>
                                    <button
                                        className='btn btn-danger'
                                        onClick={ () => handleDelete( todo.id )}                                        
                                    >
                                        Borrar
                                    </button>   
                                </li>
                            ))
                        }

                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form>

                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            value={ description }
                            onChange={ handleInputChange }
                        />

                        <button 
                            className="btn btn-outline-primary mt-1 w-100"
                            type="submit"
                            onClick={ handleSubmit }
                        >

                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
