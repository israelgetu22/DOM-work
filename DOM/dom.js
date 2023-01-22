// console.log(div.innerText);
// console.log(div.textContent);

//const body = document.body;
// const strong = document.createElement("strong");
// strong.innerText = "Hello Nick";
// body.append(strong);

//OR
// const body = document.body;
// const div = document.createElement("div");
// div.innerHTML = "<strong> Hello Mick</strong>";
// body.append(div);

const body = document.body;

const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

// div.remove(); //It removes all the div element
// spanHi.remove();
// div.append(spanHi);

//console.log(spanHi.getAttribute("title"));
// spanHi.setAttribute("id", "next");
//OR
// spanHi.id = "next";
// spanHi.removeAttribute("id");
// spanHi.setAttribute("title", "next");

spanHi.style.color = "Red";
spanBye.style.backgroundColor = "Yellow";
spanBye.style.fontSize = "12px";
