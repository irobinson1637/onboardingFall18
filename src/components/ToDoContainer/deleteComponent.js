import React, { Component } from "react";


class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };

  }



  render() {
    return (
        this.props.todo.map((el) => 
        <React.Fragment>
        <button onClick = {this.props.delete}>{el.id}</button>
        </React.Fragment>
        )
    );
  }
}

export default Delete;