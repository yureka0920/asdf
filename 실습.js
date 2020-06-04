






var scissor = '가위';
var rock = '바위';
var paper = '보';

function onbuttonClick(userInput){
    let comInput;
    let rnd = Math.random();
    if(rnd<0.32) {
          comInput= scissor;
         
    }
    else if(0.32<=rnd<0.66){
     comInput= rock;
     
    }
    else {
     comInput=paper;
     
    }

    var result = '컴퓨터:' + comInput;

    if(userInput==scissor){
        if(comInput==rock){
        result +=" 당신은 이겼습니다!";
    }
    else if(comInput==scissor){
        result +=" 당신은 비겼습니다!";
    }
    else 
    result +=" 당신은 졌습니다!";
    
}
    if(userInput==rock){
        if(comInput==scissor){
            result +=" 당신은 졌습니다!";
    }
    else if(comInput==rock){
        result +=" 당신은 비겼습니다!";
    }
    else 
    result +=" 당신은 이겼습니다!";
    }

    if(userInput==paper){
        if(comInput==scissor){
            result +=" 당신은 이겼습니다!";
    }
    else if(comInput==rock){
        result +=" 당신은 졌습니다!";
    }
    else
    result +=" 당신은 비겼습니다!";
}
document.write(result);


}




