let stone=document.getElementById('stone');
let paper=document.getElementById('paper');
let scissor=document.getElementById('scissor');
let user;
let comp;
function choose_move(x){
    user=x;
    console.log(x);
    document.getElementById('select_userIcon').className=x;
    computerChoice();
    comp=computerChoice();
    game();
}
let array=["fa-solid fa-hand-back-fist","fa-solid fa-hand","fa-solid fa-hand-scissors"];
function computerChoice(){
    // document.getElementById('msg').innerHTML="computer's move first";
    let x= Math.floor(Math.random()*3);
    document.getElementById('select_compIcon').className=array[x];
    return array[x];
} 
// setTimeout(computerChoice(),5000);
function game(){
    if (user==array[0] && comp==array[1]){
        document.getElementById('msg').innerHTML='computer won';
    }else if(user==array[0] && comp==array[2]){
        document.getElementById('msg').innerHTML='user won';
    }else if (user==array[1] && comp==array[0]){
        document.getElementById('msg').innerHTML='user won';
    }else if (user==array[1] && comp==array[2]){
        document.getElementById('msg').innerHTML='computer won';
    }else if (user==array[2] && comp==array[0]){
        document.getElementById('msg').innerHTML='computer won';
    }else if (user==array[2] && comp==array[1]){
        document.getElementById('msg').innerHTML='user won';
    }else{
        document.getElementById('msg').innerHTML='Draw';
    } 
    
}
