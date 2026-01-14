import { useTheme } from "../contexts/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ marginBottom: "1rem" }}>
      <p>
        Gjeldende tema: <strong>{theme}</strong>
      </p>
      <button onClick={toggleTheme}>
        Bytt til {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
}
