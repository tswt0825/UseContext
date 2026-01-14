import { useState } from "react";
import { useTodos } from "../contexts/TodoContext";

export default function AddTodo() {
  const { addTodo } = useTodos();
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Skriv en todo..."
      />
      <button type="submit">Legg til</button>
    </form>
  );
}
