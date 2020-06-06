
let comScore = 0;
let userScore =0;
let shotsLeft = 15;
let isComputerTurn = true;

function onComputerShoot(){
    if(!isComputerTurn)
    return;

    let textElem = document.getElementById('text');

    let comScoreElem = document.getElementById('computer-score');

    let shootType = Math.random() < 0.5 ? 2: 3;

    if(shootType===2){
        if(Math.random()<0.5){
            showText('컴퓨터가 2점슛을 성공시켰습니다.');
            updateComputerScore(2)
            
        }
        else{
            showText('컴퓨터가 2점슛을 실패했습니다.');
        } 
    }    
    else{
        if(Math.random()<0.33){
            showText('컴퓨터가 3점슛을 성공시켰습니다.');
            updateComputerScore(3)
        }
        else{
            showText('컴퓨터가 3점슛을 실패했습니다.');
        }
    }
    isComputerTurn = false;
    
    disableComputerButtons(true);
    disableUserButtons(false);
    
}

function onUserShoot(shootType){
    if(isComputerTurn)
    return;

    let textElem = document.getElementById('text');

    let comScoreElem = document.getElementById('user-score');

    

    if(shootType===2){
        if(Math.random()<0.5){
            showText('컴퓨터가 2점슛을 성공시켰습니다.');
            updateUserScore(2)
        }
        else{
            showText('컴퓨터가 2점슛을 실패했습니다.');
        } 
    }    
    else{
        if(Math.random()<0.33){
            showText('컴퓨터가 3점슛을 성공시켰습니다.');
            updateUserScore(3)
        }
        else{
            showText('컴퓨터가 3점슛을 실패했습니다.');
        }
    }
    
    isComputerTurn = true;

    disableComputerButtons(false);
    disableUserButtons(true);

    shotsLeft--;

    let shotsLeftElem = document.getElementById('shots-left');
    shotsLeftElem.innerHTML = shotsLeft;

    if(shotsLeft ===0){
        if(userScore > comScore){
        textElem.innerHTML = '승리했습니다';
        }
        else if(userScore < comScore){
            textElem.innerHTML = '아쉽게도 졌습니다.';
        }
        else {
            textElem.innerHTML = '비겼습니다.';
        }
        
        
        disableComputerButtons(true);
        disableUserButtons(true);
        
        
    }
}

function showText(s){
    let textElem = document.getElementById('text');
    textElem.innerHTML = s;
}

function updateComputerScore(score){
    comScore +=score;
    let comScoreElem = document.getElementById('computer-score');
    comScoreElem.innerHTML = comScore;
}
function updateUserScore(score){
    userScore +=score;
    let userScoreElem = document.getElementById('user-score');
    userScoreElem.innerHTML = userScore;
}

function disableComputerButtons(flag){
    let computerButtons = document.getElementsByClassName('btn-computer');
    for( let i =0; i< computerButtons.length; i++){
        computerButtons[i].disabled = flag;
        }
}
function disableUserButtons(flag){
    let userButtons = document.getElementsByClassName('btn-user');
    for( let i =0; i< userButtons.length; i++){
        userButtons[i].disabled = flag;
        }
}

