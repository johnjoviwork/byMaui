const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");

  toggle.setAttribute("aria-expanded", open);
});


document.querySelectorAll(".nav-links a").forEach(a =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");

    toggle.setAttribute("aria-expanded", "false");
  })
);


const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: .12
  }
);


document.querySelectorAll(".reveal").forEach(el =>
  observer.observe(el)
);


/* =========================================================
   DARK MODE
   ========================================================= */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const darkMode = document.body.classList.contains("dark-mode");

  themeToggle.textContent = darkMode ? "☀️" : "🌙";

  localStorage.setItem("darkMode", darkMode);
});


/* Remember selected theme */

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}