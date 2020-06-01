



 function enemy(){
    let x = Math.random();
    if(x<0.32) {
        x = "scissor";
    }
    else if(0.32<=x<0.66){
        x= "rock";
    }
    else (0.66<=x<0.99){
        x="paper";
    }
};

  function write(){
    document.write('눌렀습니다.')
};


function battle(){
    enemy();
    let y = document.querySelector(this)
    if(x=="scissor"&&y=="rock"){
        document.write("당신은 이겼습니다!");
    }
    else if(x=="scissor"&&y=="scissor"){
        document.write("당신은 비겼습니다!");
    }
    else if(x=="scissor"&&y=="paper"){
        document.write("당신은 졌습니다!");
    }
    else if(x=="rock"&&y=="scissor"){
        document.write("당신은 졌습니다!");
    }
    else if(x=="rock"&&y=="rock"){
        document.write("당신은 비겼습니다!");
    }
    else if(x=="rock"&&y=="paper"){
        document.write("당신은 이겼습니다!");
    }
    else if(x=="paper"&&y=="scissor"){
        document.write("당신은 이겼습니다!");
    }
    else if(x=="paper"&&y=="rock"){
        document.write("당신은 졌습니다!");
    }
    else(x=="paper"&&y=="paper"){
        document.write("당신은 비겼습니다!");
    }
};

let button = document.querySelector(button);
button.addEventListener("click",write());




