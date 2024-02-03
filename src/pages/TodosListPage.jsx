import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";
import AddTodo from "../components/AddTodo";
import { addTodo, fetchTodos } from "../redux/slices/todosSlice";

export default function TodosListPage() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodoTitle, setNewTodoTitle] = React.useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        title: newTodoTitle,
      })
    );
  };

  return (
    <div>
      <h1>Todos List</h1>
      <AddTodo
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
        onSubmit={handleAddTodo}
      />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
