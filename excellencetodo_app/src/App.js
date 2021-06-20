import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={toDo:[],temp_toDo:''};
  }

  formHandler=(formInput)=>{
    formInput.preventDefault(); 
    if(this.state.temp_toDo!==''){
      const temp={id:Math.random(),task:this.state.temp_toDo};
      const list=[...this.state.toDo,temp];
      this.setState({toDo:list,temp_toDo:''}); 
    }
    formInput.target.reset(); 
  };

  inputHandler=(formInput)=>{
    this.setState({temp_toDo:formInput.target.value});
  };

  render(){
    return(
      <div className="Main">
        <div>
          <h1 style={{fontSize:"45px"}}>ToDo App</h1>
        </div>
        <div className="Form">
          <form onSubmit={this.formHandler}>
            <input id="inputFields" type="text" placeholder="Enter Task" onChange={this.inputHandler}></input>
            <br></br>
            <input  id="submitButton" type="submit" value="Add"></input>
          </form>
        </div>
        <div className="list">
          <h1>ToDo List</h1>
          {this.state.toDo.map((item)=>{
            return(<div className="todo"><ul key={item.id}>{item.task}</ul></div>);
          })}
        </div>
      </div>
    );
  }
};

export default App; 