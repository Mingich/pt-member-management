const userEmail = localStorage.getItem("currentUser");
if (!userEmail) location.href = "index.html";

const users = JSON.parse(localStorage.getItem("users")) || {};
const currentUser = users[userEmail];

document.getElementById("checkInBtn").addEventListener("click", () => {
  const today = new Date().toLocaleDateString();
  currentUser.attendance.push(today);
  localStorage.setItem("users", JSON.stringify(users));
  renderAttendance();
});

document.getElementById("saveWorkoutBtn").addEventListener("click", () => {
  const text = document.getElementById("workoutText").value;
  const image = document.getElementById("workoutImage").value;
  currentUser.workouts.push({ text, image });
  localStorage.setItem("users", JSON.stringify(users));
  renderWorkouts();
});

function renderAttendance() {
  const list = document.getElementById("attendanceList");
  list.innerHTML = "";
  currentUser.attendance.forEach(d => {
    const li = document.createElement("li");
    li.textContent = d;
    list.appendChild(li);
  });
}

function renderWorkouts() {
  const div = document.getElementById("myWorkouts");
  div.innerHTML = "";
  currentUser.workouts.forEach(w => {
    const p = document.createElement("p");
    p.innerHTML = `<b>${w.text}</b><br>${w.image ? `<img src="${w.image}" width="100">` : ""}`;
    div.appendChild(p);
  });
}

renderAttendance();
renderWorkouts();
