const button = document.getElementById("sqr");

Big.DP = 2000;

const sqrt_2 = new Big(17).sqrt().toString();
console.log(sqrt_2);

button.addEventListener("click", () => {
  AppendInput(sqrt_2);
});

function AppendInput(inputvalue) {
  sqr_root.innerHTML = "";
  sqr_root.innerHTML += `<p>${inputvalue}</p>`;
}
