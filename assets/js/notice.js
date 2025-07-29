const adminEmail = "admin@test.com"; 
const currentUser = localStorage.getItem("currentUser");
if (!currentUser) location.href = "index.html";

document.getElementById("postNoticeBtn").addEventListener("click", () => {
  if (currentUser !== adminEmail) return alert("관리자만 작성할 수 있습니다.");
  const text = document.getElementById("noticeText").value;
  const notices = JSON.parse(localStorage.getItem("notices")) || [];
  notices.push(text);
  localStorage.setItem("notices", JSON.stringify(notices));
  renderNotices();
});

function renderNotices() {
  const list = document.getElementById("noticeList");
  list.innerHTML = "";
  const notices = JSON.parse(localStorage.getItem("notices")) || [];
  notices.forEach(n => {
    const p = document.createElement("p");
    p.textContent = n;
    list.appendChild(p);
  });
}
renderNotices();
