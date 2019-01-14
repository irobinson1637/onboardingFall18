import React, { Component } from "react";
import styled from "styled-components";
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
})

const ToDoButton = styled.button`
  color:turquoise;
  font-size: 1em;
  border-radius: 3px;
  width: 100%;
  border: 2px solid #0F4C5C;
  flex-direction: column;
`



class Display extends Component {

  constructor(props) {
    super(props);
    this.state = {
  
    };

  }


  render() {
    return (
        this.props.todo.map((el) => 
        <React.Fragment>
        <ToDoButton onClick =  {() => this.props.deleteFunction(el.id)}>{el.label}</ToDoButton>
         </React.Fragment>
        )
    );
  }
}

export default Display;