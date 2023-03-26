const rangeTl = document.getElementById("tlr"),
    rangeTr = document.getElementById("trr"),
    rangeBl = document.getElementById("blr"),
    rangeBr = document.getElementById("brr");

const resultTl = document.getElementById("tlr-result"),
    resultTr = document.getElementById("trr-result"),
    resultBl = document.getElementById("blr-result"),
    resultBr = document.getElementById("brr-result");

const input  = document.querySelectorAll(".input");
const square   = document.getElementById("square");

const total = document.getElementById("totalResult");
const btn = document.getElementById("btn");

const changeRadius = () => {
    resultTl.innerHTML = rangeTl.value;
    resultTr.innerHTML = rangeTr.value;
    resultBl.innerHTML = rangeBl.value;
    resultBr.innerHTML = rangeBr.value;
    square.style.borderRadius =
        rangeTl.value +
        "px " +
        rangeTr.value +
        "px " +
        rangeBr.value +
        "px " +
        rangeBl.value +
        "px";
};

const totalResult = () => {
    total.innerHTML = 
    rangeTl.value +
    "px " +
    rangeTr.value +
    "px " + 
    rangeBl.value + 
    "px " +
    rangeBr.value +
    "px";
};

for (node of input) {
    node.addEventListener("input", changeRadius);
  };

  btn.addEventListener("click", totalResult);
