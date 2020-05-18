/*
Cititi cu atentie ultimele 2 pagini din PDF-ul JavaScript. Aveti acolo toate informatiile necesare pentru a completa aceasta tema.

Momentan, variabila "data" contine data curenta. In variabila "an" am pus anul acestei date. Apoi, am pus acest an in elementul HTML cu id-ul "an"
Trebuie sa faceti si voi acelasi lucru pentru luna, zi, ora, minut si secunda.
Folositi metodele din PDF-ul JavaScript (sunt toate acolo).
*/

//am creat variabila "data" si am pus data curenta in ea
var data = new Date();
//am preluat in variabila "an" anul din data.
var an = data.getFullYear(); 



//am pus anul in elementul HTML cu id-ul "an"
document.getElementById('an').innerText = an;
//aici am pus toata data in primul paragraf din pagina, cel cu id-ul "data"
document.getElementById('data').innerText = data;