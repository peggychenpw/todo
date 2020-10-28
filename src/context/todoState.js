import React, { useReducer } from 'react';
import todoContext from "./todo-context";
import todoReducer from "./todo-reducer";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, MARK_TODO } from './todo-actions';

const TodoState = (props) => {
    const initialState = {
        todos: []
    }
    //{id: 123, text:"sss", delete: false }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    //Add todo
    const addTodo = (todo) => {
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
    }
    //Delete todo
    const deleteTodo = (todoId) => {
        dispatch({
            type: DELETE_TODO,
            payload: todoId
        })
    }

    //Toggle todo
    const toggleTodo = (todoId) => {
        dispatch({
            type: TOGGLE_TODO,
            payload: todoId
        })
    }

    //Mark todo
    const markTodo = (todoId) => {
        dispatch({
            type: MARK_TODO,
            payload: todoId
        })
    }

    return (
        <todoContext.Provider value={{
            todos: state.todos,
            addTodo, toggleTodo, deleteTodo, markTodo
        }}>
            {props.children}
        </todoContext.Provider>
    )
}

export default TodoState
