const shoppinglist = ['cipolla',
                      'pomodori', 
                      'patate', 
                      'carne', 
                      'pesce',
                      'cicorie',
                      'rape',
                      'insalata',
                     ];
let i=0;
let elementlist= document.getElementById('element-list');

while(i < shoppinglist.length) {
     
let onelist= document.createElement('li');
console.log(onelist);
onelist.innerHTML = shoppinglist[i];
elementlist.append(onelist);

i++;
}

