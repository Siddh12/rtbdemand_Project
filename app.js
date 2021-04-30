const Secondparagraph = document.getElementById("SecondPeragraph")
const add1 = document.getElementById("add1");
const Crossbutton = document.getElementById("crossbutton").addEventListener(`click`, ()=>{
    add1.remove("id");
    Secondparagraph.style.height = "400px";
    Secondparagraph.style.marginTop = "2%";
});