// Sample Event Data
const events = [
  { name: "Hackathon 2025", date: "2025-10-30", desc: "Coding event for all departments." },
  { name: "Cultural Fest", date: "2025-11-10", desc: "Show your talent in music, dance, and drama." }
];

// Display Events Dynamically
function loadEvents() {
  const container = document.getElementById("event-list");
  if (!container) return;
  
  container.innerHTML = events.map(e => `
    <div class="event-card">
      <h3>${e.name}</h3>
      <p><strong>Date:</strong> ${e.date}</p>
      <p>${e.desc}</p>
      <button>Register</button>
    </div>
  `).join('');
}

// Handle Event Form
const form = document.getElementById("eventForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("eventName").value;
    const date = document.getElementById("eventDate").value;
    const desc = document.getElementById("eventDesc").value;
    alert(`Event "${name}" posted successfully!`);
    form.reset();
  });
}

loadEvents();
