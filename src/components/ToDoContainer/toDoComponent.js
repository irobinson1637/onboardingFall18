import React, { Component } from "react";
import Display from "../ToDoContainer/displayComponent"
import styled from "styled-components"



let todoList = [];
let idCount = 0;
let displayBool = false;
let searchBool =  false;

const Header = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 2em;
  text-align: center;
`

const ToDoList = styled.div`

`
const InputBox = styled.input`
width: 100%;

`
const MaintSite = styled.div `
  flex-direction: column;
`



class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: todoList,
      currentTodo : "",
      todoSearch: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delete = this.delete.bind(this);
    this.handleSearch= this.handleSearch.bind(this);

  }

  handleChange(event) {
    this.setState({currentTodo: event.target.value});
  }

  handleSearch(event) {
    console.log("this handle")
    searchBool = !searchBool
    this.setState({todoSearch :  todoList.filter( el => el.label.includes(event.target.value))})
    
  }

  delete(id){

    todoList = todoList.filter(el => el.id !== id)
    
    this.setState({todo: todoList})
   
  }

  handleSubmit(event) {

    displayBool = true;
    idCount++
    todoList.push({
      label : this.state.currentTodo,
      id : idCount
      }
      )
      
    this.setState({todo: todoList})

    event.preventDefault();
  }
  handleSearchSubmit(event) {


      
    this.setState({todo: todoList})

    event.preventDefault();
  }
  



  render() {
    return (
    <MaintSite>
        <label>
          Search:
          <input type="text" value={this.state.value} onChange={this.handleSearch} />
        </label>
      
      <Header>

      
        <label>
          Todo:
          <InputBox type="text" value={this.state.value} onChange={this.handleChange} />
        </label>

        <button onClick = {this.handleSubmit}>Add</button>
    
    
      </Header>

      <ToDoList>
        {displayBool && !searchBool && <Display todo = {this.state.todo} deleteFunction = {this.delete}/>}
        {searchBool && <Display todo = {this.state.todoSearch} deleteFunction = {this.delete}/>}
      </ToDoList>
      </MaintSite>
    );
    
  }
}

export default ToDo;