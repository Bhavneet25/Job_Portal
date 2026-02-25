let name1 = document.querySelector("#name1");
let company = document.querySelector("#company");
let location1 = document.querySelector("#location");
let description = document.querySelector("#description");
let mobile = document.querySelector("#mobile");
let btn = document.querySelector("#submit2");
let div = document.querySelector("#sub");
let search = document.querySelector("#search");
let searchBtn = document.querySelector("#searchBtn");

btn.addEventListener("click", addTask);

function addTask() {
  let taskdata1 = name1.value;
  let taskdata2 = company.value;
  let taskdata3 = location1.value;
  let taskdata4 = description.value;
  let taskdata5 = mobile.value;


  let card = document.createElement("div");
  card.innerHTML = `
    <h2>${taskdata1}</h2>
    <p>${taskdata2}</p>
    <p>${taskdata3}</p>
    <p>${taskdata4}</p>
    <p>${taskdata5}</p>
  `;

 
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function() {
    div.removeChild(card);
  };


  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = function() {
    card.innerHTML = `
      <input type="text" value="${taskdata1}" id="editName">
      <input type="text" value="${taskdata2}" id="editCompany">
      <input type="text" value="${taskdata3}" id="editLocation">
      <input type="text" value="${taskdata4}" id="editDescription">
      <input type="text" value="${taskdata5}" id="editMobile">
    `;
    let saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.onclick = function() {
      taskdata1 = card.querySelector("#editName").value;
      taskdata2 = card.querySelector("#editCompany").value;
      taskdata3 = card.querySelector("#editLocation").value;
      taskdata4 = card.querySelector("#editDescription").value;
      taskdata5 = card.querySelector("#editMobile").value;

      card.innerHTML = `
        <h2>${taskdata1}</h2>
        <p>${taskdata2}</p>
        <p>${taskdata3}</p>
        <p>${taskdata4}</p>
        <p>${taskdata5}</p>
      `;
      card.appendChild(deleteBtn);
      card.appendChild(editBtn);
    };
    card.appendChild(saveBtn);
  };

  card.appendChild(deleteBtn);
  card.appendChild(editBtn);
  div.appendChild(card);

  name1.value = "";
  company.value = "";
  location1.value = "";
  description.value = "";
  mobile.value = "";
}


searchBtn.addEventListener("click", function() {
  let filter = search.value.toLowerCase();
  let cards = div.querySelectorAll("div"); 

  for (let i = 0; i < cards.length; i++) {
    let text = cards[i].textContent.toLowerCase();
    if (text.indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
});
