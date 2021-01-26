const items = [
  {
    name: "Green tea",
    price: "2.3",
  },
  {
    name: "Black tea",
    price: "2.1",
  },
  {
    name: "Masala tea",
    price: "2.7",
  },
  {
    name: "Normal tea",
    price: "2.8",
  },
  {
    name: "Herbal tea",
    price: "5.4",
  },
   {
    name: "White tea",
    price: "4.4",
  },
   {
    name: "Yellow tea",
    price: "3.4",
  },
  {
    name: "Fermented tea",
    price: "2.4",
  },
];

// {
//   <li class="list-group-item">
//          TEA<span class="float-right">$2.1</span>
//   </li> 
// }

function generateLIST() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(item.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");
    const price = document.createTextNode("$ " + item.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}

// generateLIST();

window.addEventListener("load", generateLIST);

const button = document.querySelector(".Asort-btn");

button.addEventListener("click", () => {
  items.sort((a, b) => a.price - b.price);
  generateLIST();
});

const btn = document.querySelector(".Dsort-btn");

btn.addEventListener("click", () => {
  items.sort((a, b) => b.price - a.price);
  generateLIST();
});