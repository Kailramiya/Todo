function TodoItem({todoName,tododate,onDeleteClick}){
  return <div className="container ">
          <div className="row ak-row">
            <div className="col-6">{todoName}</div>
            <div className="col-4">{tododate}</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger ak-button" onClick={()=>onDeleteClick(todoName)}>
                Delete
              </button>
            </div>
          </div>
          </div>
}
export default TodoItem;