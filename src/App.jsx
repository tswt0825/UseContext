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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          background: theme === "light" ? "#fff" : "#333",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow:
            theme === "light"
              ? "0 2px 8px rgba(0, 0, 0, 0.1)"
              : "0 2px 8px rgba(0, 0, 0, 0.5)",
          transition: "0.2s",
        }}
      >
        <ThemeSwitcher />

        <h1>Get shit done</h1>
        <h2>Making life easier</h2>

        <hr style={{ margin: "1rem 0" }} />

        <AddTodo />
        <TodoList />
        <TodoStats />
      </div>
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
