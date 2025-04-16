function loginUser() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  const savedUser = localStorage.getItem("user");
  const savedPass = localStorage.getItem("pass");

  if (user === savedUser && pass === savedPass) {
    alert("Login সফল!");
    window.location.href = "welcome.html";
  } else {
    alert("ইউজারনেম বা পাসওয়ার্ড ভুল!");
  }
  return false;
}

function registerUser() {
  const user = document.getElementById("signupUser").value;
  const pass = document.getElementById("signupPass").value;
  const confirm = document.getElementById("signupConfirm").value;

  if (pass !== confirm) {
    alert("পাসওয়ার্ড মিলছে না!");
    return false;
  }

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);
  alert("সাইন আপ সফল! এখন লগইন করুন।");
  window.location.href = "index.html";
  return false;
}
