
import React, { useState } from "react";
function Todo() {
  const [value1, setValue1] = useState("");
  const [todos, setTodos] = useState([]);
  const Add = (e) => {
    setValue1(e.target.value);
  };
  const toDo = () => {
    if (value1.length == 0) {
      alert("Write Down the activity");
    } else {
      setTodos([...todos, value1]);
      setValue1("");
      
    }
  };
  const deLete = (index) => {
    const filteredData = todos.filter((item, id) => id !== index);
    setTodos(filteredData);
  };
  const deLeteAll = () => {
    setTodos([]);
  };
  return (
    <main className="index">
      <div className="white">
      <h1 id="po">TO DO LIST</h1>
      
      <input
        type="text"
        value={value1}
        placeholder="Add Activity"
        onChange={Add}
        required="required"
      />
      <button onClick={toDo} className="indexx">
        Add
      </button>
       
      <div>
        <ul>
        {todos.length != 0  && (<h2 id="heading">Here is Your List</h2>)}
          {todos.map((item, id) => {
            return (
              <li id="list"
               >
                {item}{" "}
                <button className="poo" onClick={() => deLete(id)}>
                  REMOVE
                </button>
              </li>
            );
          })}
          
          {todos.length != 0 && todos.length != 1 && (
            <button onClick={deLeteAll} className="indexx">
              REMOVE All
            </button>
          )}
        </ul>
      </div>
      </div>
    </main>
  );
}
export default Todo;
