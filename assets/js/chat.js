const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const currentUser = localStorage.getItem("currentUser");
if (!currentUser) location.href = "index.html";

sendBtn.addEventListener("click", () => {
  const msg = chatInput.value;
  if (!msg) return;
  const chats = JSON.parse(localStorage.getItem("chats")) || [];
  chats.push({ user: currentUser, msg });
  localStorage.setItem("chats", JSON.stringify(chats));
  chatInput.value = "";
  renderChats();
});

function renderChats() {
  chatBox.innerHTML = "";
  const chats = JSON.parse(localStorage.getItem("chats")) || [];
  chats.forEach(c => {
    const p = document.createElement("p");
    p.innerHTML = `<b>${c.user}:</b> ${c.msg}`;
    chatBox.appendChild(p);
  });
}
renderChats();
