let string = "";
let buttons = document.getElementsByTagName("button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.innerHTML.trim();
    if (buttonText === "X") {
      string = string + "*";
    } else if (buttonText === "=") {
      string = eval(string);
    } else {
      string = string + buttonText;
    }
    if (buttonText === "AC") {
      string = "";
      document.querySelector("input").value = "";
    } else if (buttonText === "C") {
      string = string.slice(0, -2);
    } 
    document.querySelector("input").value = string;
  });
});
