// Astazi vom invata sa folosim bucle (loops), sa cream elemente HTML din Javascript si sa le setam atribute(clase), mai exact un for loop. La ce ne ajuta ? 
// Prin cateva linii de cod putem crea pagini HTML foarte mari si usor.



let gallery = ['poza1', 'poza2', 'poza3', 'poza4', 'poza5', 'poza6']    // avem aici un array (matrice) in care noi scriem numele pozelor pe care le vrem in galeria noastra. Elemenetele din Gallery sunt numerotate incepand de la 0.

// Ne aducem aminte, ca matricea este ca o variabila care are mai multe elemente sau valori. 
// Pentru a accesa o anumita valoare, de exemplu poza2 scriem gallerry[2].
//!!! Atentie : in gallery-ul nostru avem doar mai multe valori text, nu sunt pozele.



for (i=0; i<gallery.length; i++) {  //Aici definim bucla : ca si la robotel, bucla repeta un lucru pana este indeplinita o conditie
 //Ii spunem ca numaratoarea incepe de la 0 (la fel ca un matricea Gallery)  --- i=0
 //Conditia este ca i<gallery.length, adica bucla sa se opreasca cand se termina gallery-ul nostru.
 //i++ inseamna ca dupa ce termina de facut instructionile sa treaca la i=1 si tot asa.
   
   
   let poza = document.createElement('img'); // Va fi creat in memoria calculatorului un element img (din HTML)
   document.body.appendChild(poza); // Img-ul va fi pus in documentul HTML, dar este gol nu are src
   poza.setAttribute('src', gallery[i]+".jpg") // setAttribute ne permite sa modificam atribute ale elementelor HTML (orice: src, class,id)
   // Aici ii spunem ca vrem sa modificam la poza atributul src, cu valoarea gallery[i] + terminatia .jpg (in primul caz va fi : gallery[0]+".jpg", adica poza1.jpg)
   //for-ul repeta toate aceste operatiuni automat pentru fiecare element din gallery, si pune poze in HTML.
   if(i%2 == 0) { //Mai trebuie sa le punem si clasa, si vrem clase diferite pentru elementele pare si impare Cu i%2==0 verificam daca elementul e par sau impar
       poza.setAttribute('class', 'rotesteDreapta')// Daca e par, elementul va primi clasa rotesteDreapta
   } else {
       poza.setAttribute('class', 'rotesteStanga')// Daca e impar, elementul va primi clasa rotesteStanga
   }
}


//Cerinta

//Creati inca o galerie pentru elementele imagine1 - imagine7. Acestea sunt imagini de timp png

//Bonus 10p : creati un titlu care sa aiba id-ul titlu, cu textul Galerie (Hint: Puneti-l inainte de let gallery)

