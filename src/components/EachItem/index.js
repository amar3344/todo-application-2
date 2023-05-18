import React from 'react'
import "./index.css"

const EachItem = (props) => {
    const {todoDetails,deleteTodoItem,editTodoItemInList} = props

    const onClickDeleteTodoItem=()=>deleteTodoItem(todoDetails.id)
    const editTodoItem=()=>editTodoItemInList(todoDetails)
  return (
        <li>
            <h1>{todoDetails.todo}</h1>
            <div>
                <button type="button" onClick={editTodoItem}>Edit</button>
                <button type="button" onClick={onClickDeleteTodoItem}>Delete</button>
            </div>
        </li>
    )
}

export default EachItem