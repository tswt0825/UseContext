import { useTodos } from "../contexts/TodoContext";

export default function TodoList() {
  const { todos, toggleTodo, removeTodo } = useTodos();

  if (todos.length === 0) return <p>Ingen todos enda 👀</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodo(todo.id)}
          />
          <span
            style={{
              textDecoration: todo.done ? "line-through" : "none",
              flex: 1,
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}
