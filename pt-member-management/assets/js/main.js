const scriptURL = "https://script.google.com/macros/s/APP_SCRIPT_URL/exec";

document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  fetch(scriptURL, { method: "POST", body: formData })
    .then(() => alert("회원 정보가 등록되었습니다!"))
    .catch(err => alert("오류 발생: " + err.message));
});
