import {Component} from "react"

import EachItem from "../EachItem"
import "./index.css"

class Todos extends Component{

    state={todosList:[],inputItem:"",activeId:"",isButton:false}


    addingAndUpdatingTodoItem = () =>{
        const {isButton} = this.state
        if(!isButton){
            const {todosList,inputItem}=this.state
    
            const addTodo ={
                id : todosList.length,
                todo : inputItem,
                isEdit:false,
                isCompleted:false
            }
            this.setState(prevState => ({todosList : [...prevState.todosList,addTodo],inputItem:""}))
        }else{ 
            const {activeId,todosList,inputItem} = this.state
            // this.setState({isButton:false})
            const updatedTodoItemList = todosList.map(item => item.id === activeId ? ({...item,todo:inputItem}):(item))
            console.log(updatedTodoItemList)
            this.setState({todosList:updatedTodoItemList,inputItem:"",isButton:false})
        }
    }


    // getTodoInputElement=(e)=>this.setState({inputItem:e.target.value})

    deleteTodoItem=(id)=>{
        const {todosList} = this.state
        const updateTodoList = todosList.filter(eachItem => eachItem.id !== id)
        this.setState({todosList:updateTodoList})
    }

    editTodoItemInList=(todo)=>{
        // const updatedTodoList = todoList.map(eachItem =>eachItem.id === id ? {...eachItem,todo:task,isEdit : !eachItem.isEdit} : eachItem)
        this.setState({inputItem:todo.todo,isButton:true,activeId:todo.id})

    }

    render(){
        const {todosList,inputItem,isButton} = this.state
        const placeholder = isButton ? "Upadate Todo" : "Enter Todo"
        const buttonValue = isButton ? "Update" : "Add"
        return(
            <center>
            <div className="react-app">
                <h1>Todos</h1>
                <div>
                    <input type="text" value={inputItem} placeholder={placeholder} onChange={(e)=>this.setState({inputItem : e.target.value})}/>
                    <button type="button" disabled = {inputItem.trim() === "" ? true : false}  onClick={this.addingAndUpdatingTodoItem} >{buttonValue}</button>
                </div>
            <ul>
                {todosList.map(item =>(
                    <EachItem key={item.id} todoDetails={item} deleteTodoItem={this.deleteTodoItem} editTodoItemInList={this.editTodoItemInList}/>
                ))}
            </ul>
            </div>
            </center>
        )
    }


}

export default Todos