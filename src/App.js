import { useState } from "react";




const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");


  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }])
      setNewTodo("");
    };
  }
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)

  };
  const handleToggleTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos)
  }

  return (
    <div>
      <h2 style={{color:'black'}}>To-Do List </h2>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}

        placeholder="Enter your name here....." />
<button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center" }}>


              <input type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(index)}
              />
              <span
                style={{color:'white', marginRight: "10px",  }}>{todo.text}</span>
              <button style={{ marginTop: "5px", marginBottom: "5px" }} type="submit" onClick={() => handleDeleteTodo(index)}>Delete</button>
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
