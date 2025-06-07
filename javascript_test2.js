// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redText = document.createElement("p");
redText.classList.add("redText");
redText.textContent = "This is red";
redText.style.color = "red";

const blueH3 = document.createElement("h3");
blueH3.classList.add("blueH3");
blueH3.textContent = "This is Blue H3"
blueH3.style.color = "blue";

const newDiv = document.createElement("div");
newDiv.classList.add("newDiv");
newDiv.style.backgroundColor = "pink";
newDiv.style.borderColor = "black";

const textH1 = document.createElement("h1");
textH1.classList.add("textH1");
textH1.textContent = "I'm in a div";

const textP = document.createElement("p");
textP.classList.add("textP");
textP.textContent = "ME TOO!";

container.appendChild(content);
container.appendChild(redText);
container.appendChild(blueH3);
container.appendChild(newDiv);

//ensures that textH1 is appended into the newDiv.
newDiv.appendChild(textH1);
newDiv.appendChild(textP);


const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});