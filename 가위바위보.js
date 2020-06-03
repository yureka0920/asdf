
const SCISSOR = '가위';
const ROCK = '바위';
const PAPER = '보';


let userInput = prompt('가위, 바위 보!');

if (userInput!==SCISSOR && userInput!==ROCK && userInput!==PAPER){
    alert('가위, 바위, 보 중 하나를 입력해야 합니다!');
}
else {

var comInput;
let rnd = Math.random();

if(rnd <0.33){
    comInput = SCISSOR;
}
else if (rnd <0.66) {
    comInput = ROCK;
}
else {
    comInput = PAPER;
}

console.log('컴퓨터의 패:', comInput);
}

if(userInput === SCISSOR){
    if(comInput === SCISSOR){
        alert('컴퓨터: ' + comInput + '-컴퓨터와 비겼습니다.');
    }
    else if(comInput === ROCK){
        alert('컴퓨터: ' + comInput + '-컴퓨터와 졌습니다.');
    }
    else{
        alert('컴퓨터: ' + comInput + '-컴퓨터와 이겼습니다.');
    }
}
else if(userInput === ROCK){
    if(comInput === ROCK){
        alert('컴퓨터: ' + comInput + '-컴퓨터와 비겼습니다.');
    }
    else if(comInput === PAPER){
        alert('컴퓨터: ' + comInput + '-컴퓨터와 졌습니다.');
    }
    else {
        alert('컴퓨터: ' + comInput + '-컴퓨터와 이겼습니다.');
    }
}
else{
    if(comInput === PAPER){
        alert('컴퓨터: ' + comInput + '-컴퓨터와 비겼습니다.');
    }
    else if(comInput === SCISSOR){
        alert('컴퓨터: ' + comInput + '-컴퓨터와 졌습니다.');
    }
    else {
        alert('컴퓨터: ' + comInput + '-컴퓨터와 이겼습니다.');
    }
}