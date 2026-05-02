// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

// Skill bars animate on scroll
const skillBars = document.querySelectorAll('.skill-bar-fill');
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const w = e.target.style.width;
      e.target.style.width = '0';
      setTimeout(() => { e.target.style.width = w; }, 100);
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
skillBars.forEach(b => { const w = b.style.width; b.style.width = '0'; barObserver.observe(b); b._target = w; });

// Active nav link highlight
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.style.color = l.getAttribute('href') === '#' + cur ? 'var(--cyan)' : '';
  });
});

// ===== BACKEND CONNECTION =====
const API_URL = "https://khan-6exn.onrender.com";

// Example test call
async function testBackend() {
  try {
    const res = await fetch(`${API_URL}/`);
    const data = await res.text();
    console.log("Backend response:", data);
  } catch (err) {
    console.error("Backend error:", err);
  }
}

testBackend();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // allow frontend

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});