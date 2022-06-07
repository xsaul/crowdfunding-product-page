const burger = document.getElementById("burger");
const menu = document.querySelector(".menu");
const close = document.getElementById("close");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const closeM = document.getElementById("closeModal");
const modal = document.querySelector(".modal");
const radioButtons = document.querySelectorAll('input[name="pledge"]');
const cardModal = document.querySelectorAll(".card-modal");
const radioBtn1 = document.getElementById("1");
const radioBtn2 = document.getElementById("2");
const radioBtn3 = document.getElementById("3");
const cardOne = document.querySelector(".cardOne");
const cardTwo = document.querySelector(".cardTwo");
const cardThree = document.querySelector(".cardThree");
const pledgeBtn1 = document.querySelector(".pledgeBtn1");
const pledgeBtn2 = document.querySelector(".pledgeBtn2");
const pledgeBtn3 = document.querySelector(".pledgeBtn3");
const thanksCard = document.querySelector(".thanksDisplay");
const gotIt = document.querySelector(".gotIt");

radioBtn1.addEventListener("click", (e) => {
  // clearClicked2();
  // clearClicked3();
  cardOne.style.border = "1.5px solid hsl(176, 50%, 47%)";
  const pledgeInput = document.createElement("div");
  pledgeInput.innerHTML += `
      <div>
      <h3 style="margin-top: 0.5rem">Enter your pledge</h3>
    <label for="pledge">
      <span>$</span>
      <input type="text" class="inputText inputText1"/>
    </label>
    <button class="pledgeBtn1" onclick="displayThanks()">Continue</button>
    </div>
    `;
  cardOne.appendChild(pledgeInput);
});

// function clearClicked1() {
//   cardOne.style.border = "1px solid hsl(0, 0%, 88%)";
//   cardTwo.removeChild(pledgeInput);
//   cardThree.removeChild(pledgeInput);
// }

radioBtn2.addEventListener("click", (e) => {
  // clearClicked1();
  // clearClicked3();
  cardTwo.style.border = "1.5px solid hsl(176, 50%, 47%)";
  const pledgeInput = document.createElement("div");
  pledgeInput.innerHTML += `
      <div>
      <h3 style="margin-top: 0.5rem">Enter your pledge</h3>
    <label for="pledge">
      <span>$</span>
      <input type="text" class="inputText inputText1"/>
    </label>
    <button class="pledgeBtn2" onclick="displayThanks()">Continue</button>
    </div>
    `;
  cardTwo.appendChild(pledgeInput);
});

// function clearClicked2() {
//   cardTwo.style.border = "1px solid hsl(0, 0%, 88%)";
//   cardOne.removeChild(pledgeInput);
//   cardThree.removeChild(pledgeInput);
// }

radioBtn3.addEventListener("click", (e) => {
  // clearClicked1();
  // clearClicked2();
  cardThree.style.border = "1.5px solid hsl(176, 50%, 47%)";
  const pledgeInput = document.createElement("div");
  pledgeInput.innerHTML += `
      <div>
      <h3 style="margin-top: 0.5rem">Enter your pledge</h3>
    <label for="pledge">
      <span>$</span>
      <input type="text" class="inputText inputText1"/>
    </label>
    <button class="pledgeBtn3" onclick="displayThanks()">Continue</button>
    </div>
    `;
  cardThree.appendChild(pledgeInput);
});

// function clearClicked3() {
//   cardThree.style.border = "1px solid hsl(0, 0%, 88%)";
//   cardTwo.removeChild(pledgeInput);
//   cardOne.removeChild(pledgeInput);
// }

gotIt.addEventListener("click", () => {
  thanksCard.style.display = "none";
  document.body.style.opacity = "1";
});

function displayThanks() {
  modal.style.display = "none";
  thanksCard.style.display = "block";
}

function showModal() {
  if (modal.style.display == "none") {
    modal.style.display = "block";
    modal.style.opacity = "1";
    document.body.style.opacity = "0.85";
  } else {
    modal.style.display = "none";
  }
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.opacity = "1";
}

function displayMenu() {
  menu.style.display = "flex";
  burger.style.display = "none";
  close.style.display = "block";
}

function closeMenu() {
  menu.style.display = "none";
  burger.style.display = "block";
  close.style.display = "none";
}

function toggleBook() {
  if (btn2.value == "Bookmark") {
    btn2.value = "Bookmarked";
    btn2.innerHTML = `<img src="images/icon-bookmark.svg" alt="icon"/> Bookmarked`;
  } else {
    btn2.value = "Bookmark";
    btn2.innerHTML = `<img src="images/icon-bookmark.svg" alt="icon"/> Bookmark`;
  }
}

btn2.addEventListener("click", toggleBook);
close.addEventListener("click", closeMenu);
burger.addEventListener("click", displayMenu);
btn1.addEventListener("click", showModal);
closeM.addEventListener("click", closeModal);
// pledgeBtn1.addEventListener("click", displayThanks);
// pledgeBtn2.addEventListener("click", displayThanks);
// pledgeBtn3.addEventListener("click", displayThanks);
