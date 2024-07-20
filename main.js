const degree = document.getElementById("degree");
const remove = document.getElementById("remove");
const keyGen = document.getElementById("keyGen");
const btns = document.querySelectorAll(".btn");

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

const createParagraph = (holder, text) => {
  let paragraph = document.createElement("p");
  paragraph.innerHTML = text;
  holder.appendChild(paragraph);
};

const getSquare = (num, power) => {
  return power === 1 ? num : num * getSquare(num, power - 1);
};

const removeElement = (arr, num) => {
  arr.splice(arr.indexOf(num), 1);
  return arr;
};

const generateKey = (len, str) => {
  let key = "";
  for (let i = 0; i < len; i++) {
    key += str.charAt(Math.round(Math.random() * str.length));
  }
  return key;
};

btns.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (index === 0) {
      let number = +prompt("write number", "2");
      let power = +prompt("write second number", "2");
      createParagraph(degree, getSquare(number, power));
    }
    if (index === 1) {
      let numArr = [1, 2, 3, 4, 5, 6, 7];
      let element = +prompt(
        "write element, which you want to remove from this arr [1, 2, 3, 4, 5, 6, 7]",
        "7"
      );
      createParagraph(remove, removeElement(numArr, element));
    }
    if (index === 2) {
      let len = +prompt("write length of your key");
      createParagraph(keyGen, generateKey(len, characters));
    }
  });
});
