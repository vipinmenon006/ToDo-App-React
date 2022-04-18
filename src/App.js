import React, { useState } from "react";

let globalID = 0;

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState([]);

  function createToDo() {
    setTodo((prevToDo) => {
      setTask("");
      return [...prevToDo, { todos: task, id: globalID++ }];
    });
  }

  function enterKey(e) {
    if (e.keyCode === 13) {
      createToDo();
    }
  }

  function deleteItem(itemID) {
    setTodo((prevToDo) => prevToDo.filter((item) => item.id !== itemID));
  }
  return (
    <div className="App">
      <main>
        <div id="wrapper">
          <header>
            <h2>Hey there !!</h2>
            <p id="task-count">Your tasks...</p>
            <div id="input">
              <input
                type="text"
                onKeyDown={enterKey}
                value={task}
                id="form-control"
                placeholder="Add a new Task..."
                onChange={(event) => {
                  setTask(event.target.value);
                }}
              />
              <button class="submit-btn" onClick={createToDo}>
                Submit
              </button>
            </div>
          </header>
          <div id="list">
            <ul id="toDo-ul">
              {todos.map((item, index) => {
                return (
                  <div key={item.id}>
                    <li>
                      {item.todos}
                      <button class="close" onClick={() => deleteItem(item.id)}>
                        &times;
                      </button>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
