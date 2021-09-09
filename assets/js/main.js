console.log("hello world");
let gebruiksnaam = document.getElementById("input1");
let wachtwoord = document.getElementById("input2");
//email-adres input
function focusFunction1() {
    // Focus = Changes the background color of input to pink
    gebruiksnaam.style.background = "pink";
    gebruiksnaam.style.color = "black";
  }
  function blurFunction1() {
    // Focus = Changes the background color of input to lightsteelblue
    gebruiksnaam.style.background = "lightsteelblue";
    gebruiksnaam.style.color = "white";
  }
//   wachtwoord input
  function focusFunction2() {
    // Focus = Changes the background color of input to pink
    wachtwoord.style.background = "pink";
    wachtwoord.style.color = "black";
  }
  function blurFunction2() {
    // Focus = Changes the background color of input to lightsteelblue
    wachtwoord.style.background = "lightsteelblue";
    wachtwoord.style.color = "white";
  }