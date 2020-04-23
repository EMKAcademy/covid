//Actualizati  si al doilea for, cu elementele prezentate la primul


let titleText = 'Galerie'
let title = document.createElement('h1')
document.body.appendChild(title)
title.setAttribute('id', 'titlu')
title.innerHTML = titleText


let gallery = ['imagine1', 'imagine2', 'imagine3', 'imagine4', 'imagine5', 'imagine6']  
let titluri = ['Cainele Max','Pisica Miti','Catelul Pufi','Cei mai buni prieteni','Porcusorul Lulu','Cainele Cosmo'] //declaram vector de descrieri


for (i=0; i<gallery.length; i++) { 
   let container = document.createElement('div'); //am creat un nou element div ce se va comporta ca un container pentru poza si titlul ei
   container.setAttribute('class','container'); //i-am setat acestui container clasa "container"
   let titluPoza = document.createElement('p');//am creat un nou element p 
   titluPoza.setAttribute('class', 'titluPoza');//i-am setat clasa "titluPoza"
   titluPoza.innerHTML = titluri[i];//pentru fiecare poza luam titlul corespunzator din vector
   container.appendChild(titluPoza);//adaugam titlul in container

   let poza = document.createElement('img'); 
   container.appendChild(poza);  // adaugam poza in container
   poza.setAttribute('src', gallery[i]+".jpg")
   
   if(i%2 == 0) { 
       container.setAttribute('class', 'rotesteDreapta')
   } else {
       container.setAttribute('class', 'rotesteStanga')
   }
   
   document.body.appendChild(container); //adaugam containerul in pagina
   
   
}


let newgallery = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7']

for (var i = 0; i < newgallery.length; i++) {
  let poza = document.createElement('img');
  document.body.appendChild(poza)
  poza.setAttribute('src', newgallery[i] + ".jpg")
  if(i%2 == 0) { 
       poza.setAttribute('class', 'rotesteDreapta')
   } else {
       poza.setAttribute('class', 'rotesteStanga')
   }
}


