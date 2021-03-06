const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//이름 재설정 버튼 시작
const requestName = document.getElementById("request");

function removeUsername() {
  localStorage.removeItem("username");
  window.location.reload(true); // 새로고침 버튼
}

requestName.addEventListener("click", removeUsername);
//이름 재설정 버튼 종료

function onLoginSubmit(event) {
  //event.preventDefault(); 새로고침 막기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `안녕하세요 ${username}님`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  requestName.classList.remove(HIDDEN_CLASSNAME); // 재설정 버튼 활성화
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
