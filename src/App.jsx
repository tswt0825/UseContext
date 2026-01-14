import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { TodoProvider } from "./contexts/TodoContext";

import ThemeSwitcher from "./components/ThemeSwitcher";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem",
        background: theme === "light" ? "#f5f5f5" : "#222",
        color: theme === "light" ? "#222" : "#f5f5f5",
        transition: "0.2s",
      }}
    >
      <h1>TodoApp med ThemeSwitcher</h1>

      <ThemeSwitcher />

      <hr style={{ margin: "1rem 0" }} />

      <AddTodo />
      <TodoList />
      <TodoStats />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <AppContent />
      </TodoProvider>
    </ThemeProvider>
  );
}
