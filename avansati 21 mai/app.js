/*
Adaugati sub acest comentariu urmatoarele:
- creati variabila "data" care sa preia data curenta (cu new Date(), ca la tema anterioara)
- creati variabila numarZi care sa preia ziua saptamanii. Ne folosim de variabila "data" si metoda "getDay()"
- creati variabila numeZi
- creati variabila descriereZi
*/ 





/*
acum in variabila "numarZi" o sa avem un numar de la 0 la 6 (in functie de ziua saptamanii). Daca azi e duminica, "numarZi" va contine cifra 0.
Daca azi e luni, "numarZi" va contine cifra 1 si asa mai departe. If-ul de mai jos verifica daca "numarZi" este 0. Daca este 0, atunci variabila
"numeZi" va fi "Duminica" si "decriereZi" va fi "Astazi ne relaxam!". 
Ce trebuie sa faceti voi: 
- trebuie sa mai adaugati if-uri care sa verifice daca "numarZi" este 1, apoi daca este 2, apoi 3 si tot asa pana la 6. La fiecare numar sa 
setati "numeZi" si "descriereZi".
Dupa toate if-urile, trebuie sa setam ca elementul HTML cu id-ul "zi" sa aiba ca innerText variabila "numeZi" si elementul HTML cu id-ul "descriere"
sa aiba ca innerText variabila "descriereZi" 
*/

if (numarZi == 0) {
    numeZi = 'Duminica';
    descriereZi = 'Astazi ne relaxam!';
}