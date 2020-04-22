// 1. Creati inca un div cu id-ul 'nav' dupa titlu
// 2. Creati un div cu id-ul 'display' in care sa puneti imaginile (Presupunand ca numiti variabile display, in loc de document.body.appendChild veti avea display.appendChild)
// 2. In Nav, introduceti doua butoane : Gallerie 1 si Gallerie 2.
// 3. Butoanele mai sus create odata apasate sa arate doar imaginile din Gallery, respectiv New gallery (De ex pentru a sterge continutul din display scriem display.innerHTML=" ")





let titleText = 'Galerie'
let title = document.createElement('h1')
document.body.appendChild(title)
title.setAttribute('id', 'titlu')
title.innerHTML = titleText


let gallery = ['imagine1', 'imagine2', 'imagine3', 'imagine4', 'imagine5', 'imagine6']  



for (i=0; i<gallery.length; i++) { 
   
   let poza = document.createElement('img'); 
   document.body.appendChild(poza); 
   poza.setAttribute('src', gallery[i]+".jpg")
   
   if(i%2 == 0) { 
       poza.setAttribute('class', 'rotesteDreapta')
   } else {
       poza.setAttribute('class', 'rotesteStanga')
   }
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


