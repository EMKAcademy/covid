function red(){
    document.getElementById("culoare").style.background = "red"
}
function blue(){
    document.getElementById("culoare").style.background = "blue"
}
function yellow(){
    document.getElementById("culoare").style.background = "yellow"
}
function green(){
    document.getElementById("culoare").style.background = "green"
}
function white(){
    document.getElementById("culoare").style.background = "white"
}
function culo()
{    
    let input = document.getElementById("aplica").value;
    document.getElementById('culoare').style.background = input
}
function dele()
{
    document.getElementById("culoare").style.opacity = "0"
}
