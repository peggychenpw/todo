import './App.css';
import TodoInput from "./component/todoInput/TodoInput"
import TodoList from "./component/todoList/TodoList"
import TodoState from "./context/todoState"

function App() {
  return (
    <div className="App">
      <div className="app__todoApp">
        <TodoState>
          <TodoInput />
          <TodoList />
        </TodoState>
      </div>
    </div>
  );
}

export default App;
