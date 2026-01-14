import { useTodos } from "../contexts/TodoContext";

export default function TodoStats() {
  const { todos } = useTodos();

  const total = todos.length;
  const done = todos.filter((t) => t.done).length;
  const left = total - done;

  return (
    <p style={{ marginTop: "1rem" }}>
      Totalt: <strong>{total}</strong> | Ferdig: <strong>{done}</strong> |
      Igjen: <strong>{left}</strong>
    </p>
  );
}
