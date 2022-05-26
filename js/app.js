const btn = document.querySelector("button");
const body = document.querySelector("body");
const form = document.querySelectorAll("form");
const img = document.querySelectorAll("input + img");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const h3 = document.querySelectorAll("h3");
const input = document.querySelectorAll("input");

// btn.addEventListener("click", function (params) {
//   input.forEach(element => {
//     if (element.value === "") {
//           element.classList.add("error-alert");
//           const img = document.querySelectorAll('img');
//           img.forEach(element => {
//                 element.style.display = "block";
//           })

//     } else {
//           element.classList.add("success-alert");
//          const img = document.querySelectorAll("img");
//          img.forEach((element) => {
//            element.style.display = "none";
//          });
//     }
//   });
// });
// function showImage() {
//   const image = document.querySelector(".image");
//   let inp = document.querySelector(".inp");
//   image.setAttribute(
//     "src",
//     "intro-component-with-signup-form-master/images/icon-error.svg"
//   );
// }

function check() {
  if (email.value !== password.value) {
    alert("error");
  }
}
// function removeImage() {
//   const image = document.querySelector(".image");
//   image.removeAttribute(
//     "src",
//     "intro-component-with-signup-form-master/images/icon-error.svg"
//   );
// }
function showError(style) {
  style.classList.add("error-alert");
}
function showSuccess(style) {
  style.classList.add("success-alert");
}
btn.addEventListener("click", function () {
  if (firstName.value === "") {
    showError(firstName);
  } else {
    showSuccess(firstName);
  }

  if (lastName.value === "") {
    showError(lastName);
  } else {
    showSuccess(lastName);
  }
  if (email.value === "" || email.value !== password.value) {
    showError(email);
  } else {
    showSuccess(email);
  }
  if (password.value === "" || email.value !== password.value) {
    showError(password);
  } else {
    showSuccess(password);
  }
  error();
});

function error() {
//   if (firstName.className === 'success-alert' || lastName.className === 'success-alert' || email.className === 'success-alert' || password.className === 'success-alert') {
//    alert('hsj')
//  }
  
  input.forEach(function (item) {
    if (item.className === 'success-alert') {
      alert('kjj')
     } 
  })
}
