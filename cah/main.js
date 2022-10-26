var counter = 0;


function onc(l) {
// alert("a da");
counter++;
console.log("ти натисна бутона " + counter + " пъти");
l.innerHTML = ("u pressed me: " + counter)
l.style.cssText = "border-radius: 5px; border: 10; font-size: 20px"
}

function onInput(l) {
if(l.value == "hello")
alert("hallo");
  console.log(l.value);
}
