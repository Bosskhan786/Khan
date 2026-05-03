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
// testBackend();