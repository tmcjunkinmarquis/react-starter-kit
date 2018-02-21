import React, { Component } from 'react';

export default class EvilActionList extends Component {
  constructor() {
    super();
    this.state = {
      // todos: [],
      value = '',
      toDo: []
    }
  }
  render(){
  return(
      <div>
        <h2>Evil To Do List</h2>
        <input value={this.state.value}
                onChange={ (event) => this.setState( { value: event.target.value } ) }  />
        <button onClick={ () => {
          const updatedToDoList = this.state.toDo;
          updatedToDoList.push(this.state.value);
          this.setState( { toDo: updatedToDoList, value: '' } );
        } }>
          SUBMIT
        </button>
        <ul>
          {
            this.state.toDo.map((toDo, index) => {
              return <li key={index}>{toDo}</li>
            })
          }
        </ul>
      </div>
    )
  }

  // save() {
  //   let todos = [...this.state.todos];
  //   todos.push(this.newText.value);
  //   this.setState({todos})
  // }

  // render() {
  //   return (
  //     <div className='evilDeedsForm'>
  //       <h1> Evil Deeds List </h1>
  //       <input type='text' ref={(input) => {this.newText = input}}/>
  //       <button onClick={this.save.bind(this)}>SAVE</button>
  //       <ul>
  //         {this.state.todos.map( todo => {
  //           return <li>{todo}</li>
  //         })}
  //       </ul>
  //     </div>
  //   )
  // }
}