document.querySelector(".one").onclick = () => {
  let a = document.querySelector(".i-1").value;

  console.log(a);
};
document.querySelector(".two").onclick = () => {
  let a = +document.querySelector(".i-2").value;
  console.log(a + 5);
};
document.querySelector(".three").onclick = () => {
  let a = document.querySelector(".i-3").value;
  document.querySelector("body").style.background = a;
  console.log(a);
};
document.querySelector(".four").onclick = () => {
  let a = document.querySelector(".i-4").value;
  console.log(a);
};
document.querySelector(".five").onchange = () => {
  let a = document.querySelector(".five").value;
  console.log(a);
};
document.querySelector(".ch-1").onchange = () => {
  if (document.querySelector(".ch-1").checked == true) {
    let a = document.querySelector(".ch-1");
    console.log(a);
  }
};
let r = document.querySelectorAll('input[name="r"]');
for (let i = 0; i < r.length; i++) {
  if (r[i].checked == true) {
    console.log(r[i].value);
  }
  break;
}
document.querySelector(".radio").onclick = () => {
  let r = document.querySelectorAll('input[name="r"]');
  for (let i = 0; i < r.length; i++) {
    if (r[i].checked == true) {
      console.log(r[i].value);
    }
    break;
  }
};
