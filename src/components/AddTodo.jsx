import { useState } from "react";

function AddTodo({onNewItem}) {
  const [todoName,setTodoName]=useState("");
  const [dueDate,setDueDate]=useState("");
  const handleNameChange=(event)=>{
    setTodoName(event.target.value);
  }
  const handleDateChange=(event)=>{
    setDueDate(event.target.value);
  }
  const handleAddButtonclicked=()=>{
    if(!todoName.trim()||!dueDate){
      alert("Both fields are required.");
      return ;
    }
    onNewItem(todoName,dueDate);
    setDueDate("");
    setTodoName("");
  }
  return (
    <div className="container ">
      <div className="row ak-row">
        <div className="col-6">
          <input 
            placeholder="Enter Todo Here" 
            value={todoName}
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input 
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          ></input>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success ak-button" onClick={handleAddButtonclicked}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
