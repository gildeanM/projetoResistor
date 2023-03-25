let cfx1 = document.getElementById("color1").value;
let cfx2 = document.getElementById("color2").value;
let cfx3 = document.getElementById("color3").value;
let cfx4 = document.getElementById("color4").value;

function mudarCor(){
    cfx1 = document.getElementById("color1").value;
    cfx2 = document.getElementById("color2").value;
    cfx3 = document.getElementById("color3").value;
    cfx4 = document.getElementById("color4").value;
    switch(cfx1){
        case("0"):
        document.getElementById("fx1").style.backgroundColor = "black"
        break
        case("1"):
        document.getElementById("fx1").style.backgroundColor = "brown"
        break
        case("2"):
        document.getElementById("fx1").style.backgroundColor = "red"
        break
        case("3"):
        document.getElementById("fx1").style.backgroundColor = "orange"
        break
        case("4"):
        document.getElementById("fx1").style.backgroundColor = "yellow"
        break
        case("5"):
        document.getElementById("fx1").style.backgroundColor = "green"
        break
        case("6"):
        document.getElementById("fx1").style.backgroundColor = "blue"
        break
        case("7"):
        document.getElementById("fx1").style.backgroundColor = "violet"
        break
        case("8"):
        document.getElementById("fx1").style.backgroundColor = "gray"
        break
        case("9"):
        document.getElementById("fx1").style.backgroundColor = "white"
        break
    }
    switch(cfx2){
        case("0"):
        document.getElementById("fx2").style.backgroundColor = "black"
        break
        case("1"):
        document.getElementById("fx2").style.backgroundColor = "brown"
        break
        case("2"):
        document.getElementById("fx2").style.backgroundColor = "red"
        break
        case("3"):
        document.getElementById("fx2").style.backgroundColor = "orange"
        break
        case("4"):
        document.getElementById("fx2").style.backgroundColor = "yellow"
        break
        case("5"):
        document.getElementById("fx2").style.backgroundColor = "green"
        break
        case("6"):
        document.getElementById("fx2").style.backgroundColor = "blue"
        break
        case("7"):
        document.getElementById("fx2").style.backgroundColor = "violet"
        break
        case("8"):
        document.getElementById("fx2").style.backgroundColor = "gray"
        break
        case("9"):
        document.getElementById("fx2").style.backgroundColor = "white"
        break
    }
    switch(cfx3){
        case("1"):
        document.getElementById("fx3").style.backgroundColor = "black"
        break
        case("10"):
        document.getElementById("fx3").style.backgroundColor = "brown"
        break
        case("100"):
        document.getElementById("fx3").style.backgroundColor = "red"
        break
        case("1000"):
        document.getElementById("fx3").style.backgroundColor = "orange"
        break
        case("10000"):
        document.getElementById("fx3").style.backgroundColor = "yellow"
        break
        case("100000"):
        document.getElementById("fx3").style.backgroundColor = "green"
        break
        case("1000000"):
        document.getElementById("fx3").style.backgroundColor = "blue"
        break
        case("10000000"):
        document.getElementById("fx3").style.backgroundColor = "violet"
        break
        case("0.1"):
        document.getElementById("fx3").style.backgroundColor = "gold"
        break
        case("0.01"):
        document.getElementById("fx3").style.backgroundColor = "silver"
        break
    }
    switch(cfx4){
        case("1"):
        document.getElementById("fx4").style.backgroundColor = "brown"
        break
        case("2"):
        document.getElementById("fx4").style.backgroundColor = "red"
        break
        case("0.5"):
        document.getElementById("fx4").style.backgroundColor = "green"
        break
        case("0.25"):
        document.getElementById("fx4").style.backgroundColor = "blue"
        break
        case("0.1"):
        document.getElementById("fx4").style.backgroundColor = "violet"
        break
        case("0.05"):
        document.getElementById("fx4").style.backgroundColor = "gray"
        break
        case("5"):
        document.getElementById("fx4").style.backgroundColor = "gold"
        break
        case("10"):
        document.getElementById("fx4").style.backgroundColor = "silver"
        break
        case("20"):
        document.getElementById("fx4").style.backgroundColor = "brown"
        break
    }
    calc(cfx1,cfx2,cfx3,cfx4)
    
}

function calc(cfx1,cfx2,cfx3,cfx4){
    let res = (cfx1 + cfx2) *parseInt(cfx3);
    let tol = (cfx4/100) * res;
    document.getElementById("resultado").innerHTML = `${res-tol}Ω e ${res}Ω`
}

let resolucao = window.innerWidth
 if(resolucao < 400){
     let resistor = document.getElementById("resistor");
     resistor.style.height = "70vh";
     resistor.style.width = "30vw";
     resistor.style.flexDirection = "column";
     resistor.style.borderRadius = "35vh";

     let cor = document.getElementById("cor");
     cor.style.height = "70vh";
     cor.style.flexDirection = "column";

     document.getElementById("content1").style.display = "flex";
     
     document.getElementById("fx1").style.width = "100%";
     document.getElementById("fx1").style.height = "5vh";
     document.getElementById("fx2").style.width = "100%";
     document.getElementById("fx2").style.height = "5vh";
     document.getElementById("fx3").style.width = "100%";
     document.getElementById("fx3").style.height = "5vh";
     document.getElementById("fx4").style.width = "100%";
     document.getElementById("fx4").style.height = "5vh";

     let resultado = document.getElementById("resultado");
     resultado.style.top = "90vh";

     document.getElementById("bod").style.backgroundSize = "auto";
    
    }