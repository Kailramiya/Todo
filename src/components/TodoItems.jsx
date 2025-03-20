import TodoItem from "./TodoItem";
function TodoItems ({todoItems, onDeleteClick}){
  return <>
      <div className="items-container">
        {todoItems.map((item)=>(
          <TodoItem
            key={item.name}
            tododate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}>
              
            </TodoItem>
        
        ))}
      </div>
  </>
}

export default TodoItems;