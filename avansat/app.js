function fun() {
    setInterval(() => {
    document.getElementById("patrat").style.background = "#"+((1<<24)*Math.random()|0).toString(16);
    }, 500);
}

/* 
Functia fun face ca patratul sa se schimbe intr-o culoare aleasa la intamplare o data la jumatate de secunda. E doar 
pentru amuzament, nu trebuie sa o bagati in seama, doar apasati butonul "Fun" in pagina ca sa vedeti efectul :)

ENUNT
Functia schimbaRosu de mai jos schimba culoarea patratului in rosu. Creati cate o functie asemanatoare pentru fiecare 
culoare din documentul html. Nu uitati in html sa adaugati butoanelor proprietatea onclick.
*/ 


function schimbaRosu() {
    document.getElementById("patrat").style.backgroundColor = "red";
}







