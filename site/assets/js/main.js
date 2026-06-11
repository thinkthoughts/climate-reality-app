document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateButton(savedTheme);
  }

  toggle?.addEventListener("click", () => {
    const current =
      document.documentElement.getAttribute("data-theme") || "light";

    const next = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);

    updateButton(next);
  });

  function updateButton(theme) {
    toggle.textContent = theme === "dark" ? "☀️" : "🌙";
  }
});
