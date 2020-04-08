/*ENUNT
Functia "schimba" preia in variabila patrat1 elementul cu id-ul "patrat1" si ii schimba apoi lungimea in functie de numarul din input si culoarea de fundal intr-o alta culoare.
Faceti acelasi lucru si pentru celelalte 2 patrate: schimbati-le dimensiunea cu valoarea din input si culoarea cu o alta culoare aleasa de voi.
*/




function schimba() {
    var patrat1 = document.getElementById("patrat1");
    var dimensiune = document.getElementById("dimensiune").value;

    patrat1.style.width = dimensiune;

    patrat1.style.backgroundColor = "black";
}