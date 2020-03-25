/*ENUNT
Codul de mai jos face ca atunci cand apasam pe butonul "Apasa" sa apara un alert si sa se schimbe textul  din paragraful 1.

Creati o functie noua astfel incat atunci cand apasam pe butonul "Verifica" sa apara un alert in care sa scrie 
"Am verificat!" si sa modifice textul paragrafului 2 din prenumele vostru in "elev model".

ATENTIE - nu uitati sa adaugati evenimentul onclick pentru buton in codul HTML!
*/

function apasa() {
    alert("S-a schimbat!");
    document.getElementById("paragraf1").innerHTML = "Elevul care a scris codul este un";
}

