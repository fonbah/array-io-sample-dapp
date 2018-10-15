import React from 'react'
import { connect } from 'react-redux'
import { addTodo, broadcastTodo } from '../actions/todos'

const AddTodo = ({ dispatch }) => {
    let input

    return (
        <div className="todo-input form-group">
            <form
                className="form-inline"
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    //dispatch(addTodo(Math.random(), input.value))
                    dispatch(broadcastTodo(Date.now()+Math.random(), input.value, false))
                    input.value = ''
                }}
            >
                <input className="form-control" ref={node => input = node} />
                <button className="btn btn-success" type="submit">
                    Add Todo
        </button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)