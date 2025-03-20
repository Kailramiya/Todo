import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
function App() {
  let [Items,setTodoItems]=useState([]);
  
  const handleNewItem=(itemName,itemDueDate)=>{
    // console.log(`New Item addded ${itemName},${itemDueDate}`);
    let newItems=[...Items,{name:itemName,dueDate:itemDueDate}];
    setTodoItems(newItems);
  }

  const handleDeleteItem=(todoName)=>{
      let newItems=Items.filter(item=>item.name!==todoName);
      setTodoItems(newItems);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      
      {Items.length ===0 && <WelcomeMsg/> }
      <TodoItems todoItems={Items} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
