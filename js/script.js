let elResult = document.querySelector("#result");
const elZero = document.querySelector("#zero");
const elOne = document.querySelector("#one");
const elTwo = document.querySelector("#two");
const elTree = document.querySelector("#three");
const elFour = document.querySelector("#four");
const elFive = document.querySelector("#five");
const elSix = document.querySelector("#six");
const elSeven = document.querySelector("#seven");
const elEight = document.querySelector("#eight");
const elNine = document.querySelector("#nine");
const elTurnOff = document.querySelector("#turnOff");
const elMltpcn = document.querySelector("#multiplication");
const elBeing = document.querySelector("#being");
const elPlus = document.querySelector("#plus");
const elMinus = document.querySelector("#minus");
let elEqual = document.querySelector("#equal");

elZero.addEventListener("click", () => {
  elResult.textContent += elZero.value;
});
elOne.addEventListener("click", () => {
  elResult.textContent += elOne.value;
});

elTwo.addEventListener("click", () => {
  elResult.textContent += elTwo.value;
});
elTree.addEventListener("click", () => {
  elResult.textContent += elTree.value;
});

elFour.addEventListener("click", () => {
  elResult.textContent += elFour.value;
});

elFive.addEventListener("click", () => {
  elResult.textContent += elFive.value;
});

elSix.addEventListener("click", () => {
  elResult.textContent += elSix.value;
});

elSeven.addEventListener("click", () => {
  elResult.textContent += elSeven.value;
});
elEight.addEventListener("click", () => {
  elResult.textContent += elEight.value;
});

elNine.addEventListener("click", () => {
  elResult.textContent += elNine.value;
});

elPlus.addEventListener("click", () => {
  elResult.textContent += elPlus.value;
});

elMinus.addEventListener("click", () => {
  elResult.textContent += elMinus.value;
});

elMltpcn.addEventListener("click", () => {
  elResult.textContent += elMltpcn.value;
});

elBeing.addEventListener("click", () => {
  elResult.textContent += elBeing.value;
});

elEqual.addEventListener("click", () => {
  const result = elResult.textContent;
  let answer = eval(result);
  elResult.textContent = answer;
});

elTurnOff.addEventListener("click", () => {
  elResult.textContent = "";
  console.log(elResult.value);
});