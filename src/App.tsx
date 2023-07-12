import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';
import './App.css';


function App() {
  return (
    <TodosContextProvider>
      <NewTodo ></NewTodo>
      <Todos ></Todos>
    </TodosContextProvider>
  );
}

export default App;
