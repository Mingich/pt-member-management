const loginBtn = document.getElementById("loginBtn");
const signupLink = document.getElementById("signupLink");

loginBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[email] && users[email].password === password) {
    localStorage.setItem("currentUser", email);
    alert("로그인 성공!");
    location.href = "dashboard.html";
  } else {
    alert("이메일 또는 비밀번호가 잘못됐습니다.");
  }
});

signupLink.addEventListener("click", () => {
  const email = prompt("가입할 이메일 입력:");
  const password = prompt("비밀번호 입력:");
  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[email]) {
    alert("이미 존재하는 계정입니다.");
  } else {
    users[email] = { password, attendance: [], workouts: [] };
    localStorage.setItem("users", JSON.stringify(users));
    alert("회원가입 완료! 로그인하세요.");
  }
});
