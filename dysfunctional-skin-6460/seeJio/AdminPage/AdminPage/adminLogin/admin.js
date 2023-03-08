let userName = document.getElementById("username");
let Password = document.getElementById("password");
let myForm = document.getElementById("registrationForm");

let authenticatioToken;
baseServerURL = "https://reqres.in/api/register";
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = userName.value;
  let password = Password.value;
  // fetch("https://dummyjson.com/users/1", {
  //   method: "PATCH",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     username: "admin ",
  //     password: "admin",
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((d) => console.log(d));
  loginUser();
});

function loginUser() {
  fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "eve.holt@reqres.in",
      password: "pistol",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      authenticatioToken = data.token;

      console.log(authenticatioToken);
      window.location.pathname = "/seeJio/AdminPage/AdminPage/dashboard.html";
    });
}
