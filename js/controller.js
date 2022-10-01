// Magical Touch
// Magical Touch 22
window.onload=function(){
    checkTurn();
    var buttons = document.querySelectorAll(".btn");
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click",function(event){
            turn(event);
            console.log(event);
            checkForWin();
        });
    }
}
var count =0;

function checkTurn(){
    if(count%2==0){
        document.querySelector("#turn").innerText = "X Turn";
    }
    else{
        document.querySelector("#turn").innerText = "O Turn";
    }
}

function turn(event){
    if(count%2==0){

        count++;
        checkTurn();
        if(event.target.className.length ==3){
            event.target.className = "x";
        }
    }
    else{
        count++;
        checkTurn();
        if(event.target.className.length ==3){
            event.target.className = "o";
        }
    }
}

function checkForWin(){
    if ($("#1").hasClass('o') && $("#2").hasClass('o') && $("#3").hasClass('o') || $("#4").hasClass('o') && $("#5").hasClass('o') && $("#6").hasClass('o') || $("#7").hasClass('o') && $("#8").hasClass('o') && $("#9").hasClass('o') || $("#1").hasClass('o') && $("#4").hasClass('o') && $("#7").hasClass('o') || $("#2").hasClass('o') && $("#5").hasClass('o') && $("#8").hasClass('o') || $("#3").hasClass('o') && $("#6").hasClass('o') && $("#9").hasClass('o') || $("#1").hasClass('o') && $("#5").hasClass('o') && $("#9").hasClass('o') || $("#3").hasClass('o') && $("#5").hasClass('o') && $("#7").hasClass('o')){
        alert("O win the Game.");
        count =0;
        checkTurn();
        let buttons = document.getElementsByTagName("button");
        for(let i=0;i<buttons.length;i++){
            buttons[i].className = "btn";
        }
    }
    else if ($("#1").hasClass('x') && $("#2").hasClass('x') && $("#3").hasClass('x') || $("#4").hasClass('x') && $("#5").hasClass('x') && $("#6").hasClass('x') || $("#7").hasClass('x') && $("#8").hasClass('x') && $("#9").hasClass('x') || $("#1").hasClass('x') && $("#4").hasClass('x') && $("#7").hasClass('x') || $("#2").hasClass('x') && $("#5").hasClass('x') && $("#8").hasClass('x') || $("#3").hasClass('x') && $("#6").hasClass('x') && $("#9").hasClass('x') || $("#1").hasClass('x') && $("#5").hasClass('x') && $("#9").hasClass('x') || $("#3").hasClass('x') && $("#5").hasClass('x') && $("#7").hasClass('x')){
        alert("X win the Game.");
        count = 0;
        checkTurn();
        let buttons = document.getElementsByTagName("button");
        for(let i=0;i<buttons.length;i++){
            buttons[i].className = "btn";
        }
    }
    else if(count ==9){
        alert("Match tie");
        count = 0;
        checkTurn();
        let buttons = document.getElementsByTagName("button");
        for(let i=0;i<buttons.length;i++){
            buttons[i].className = "btn";
        }
    }
}
