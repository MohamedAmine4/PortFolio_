// let sequence = [1, 2, 3, 4, 5];
// somme=0;
// let size=sequence.length;
// const soustableau=sequence.map(x=>x*2); //map permet de parcourir le tableau et de multiplier chaque element par 2
// const soustablepaire=sequence.filter(x=>x%2==0); //filter permet de parcourir le tableau et de filtrer les elements pairs
// const soustableimpaire=sequence.filter(x=>x%2!=0); //filter permet de parcourir le tableau et de filtrer les elements impairs
// const soustable=sequence.reduce((sum,b)=>sum+b); //reduce permet de parcourir le tableau et de faire la somme des elements
// const isPaire=sequence.filter(x=>x%2==0).length!=0; //filter permet de parcourir le tableau et de filtrer les elements pairs et length permet de return true ou false 
// //reduce prend un tableau et renvoie un element 
// //filter prend un tableau et renvoie un tableu filtrer
// //map prend un tableau et renvoie un tableau de meme taille
// const getMax=(a,b)=> Math.max(a,b); //c est une fonction fleche qui prend deux parametres et renvoie le max
const football = [
  [
    { "club": "SCB", "joueur": "SANTELLI", "but": 2 },
    { "club": "SCB", "joueur": "MAGRI", "but": 1 },
    { "club": "HAC", "joueur": "KITALA", "but": 3 },
    { "club": "SCB", "joueur": "ROBIC", "but": 3 },
    { "club": "BORDEAUX", "joueur": "MAJA", "but": 4 }
  ]
]

const joueurSCB = football[0].filter(x => x.club == "SCB").map(x => x.but+1).reduce((sum, b) => sum + b);
console.log(joueurSCB);


