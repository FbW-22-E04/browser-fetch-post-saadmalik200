// The following line makes sure your styles are included in the project. Don't remove this.
// import "../styles/main.scss";
// import "babel-polyfill";

// \/ All of your javascript should go here \/

const form = document.querySelector("form");

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector("#message");
const button = document.querySelector(".btn");
const checkbox = document.querySelector("#checkbox");

// button.addEventListener("click", handleClick);

form.addEventListener(
  "submit",
  handleClick
  //   return;
);
//   console.log(checkbox.checked);

async function handleClick(e) {
  e.preventDefault();

  //   if (checkbox.checked) {
  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
    message: message.value,
  };

  console.log(data);
  const settings = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  try {
    if (checkbox.checked) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        settings
      );

      console.log("Reponse", response);

      if (response.status === 201) alert("Thanks your profile has been saved");

      const reponseJson = await response.json();
      console.log("ReponseJson", reponseJson);
      email.value = "";
      name.value = "";
      password.value = "";
      message.value = "";
      checkbox.checked = false;
    }
  } catch (error) {
    console.log("Error", error.message);
  }
  //   }
}
