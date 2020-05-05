// Creati functiile pentru preluarea id-urilor
// Creati functiile pentru aplicarea culorilor  - functia red de mai jos va merge pentru toate patratele.
// Va trebui sa creati functii pentru preluarea id-urilor patratelor create si pentru aplicarea culorilor 



let patrat = document.getElementById('patrat');
let customId = '';

patrat.addEventListener('click', function{   //Facem astfel incat ca atunci cand dam click pe patrat in variabila customId sa avem id-ul patratului
customId=patrat.getAttribute('id');
})



// astfel functia red va colora in rosu orice patrat pe care dam click
function red() {   
    let element = document.getElementById(customId);
    element.style.background='red';
}