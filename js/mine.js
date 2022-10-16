var questions=[
{id:0,
title:"what is mac",
ch:["medium acess control","media acess control","more acess control","morphism acess control"],
correct:1,
},

  {
      id:1,
    title:'how many classes are we seeing in ip?',
    ch:[3,4,5],
 
   correct:2
  },
  {
      id:2,
title:'who collect between network ?',
    ch:['router','switch','firewall','pc','hub'],
 
   correct:0
  }
];
var selectedQuestion=0;
function begin(){

}
var time = document.querySelector('.count');
var numero =15;
function repetition() {
 var repet = setInterval(() => {
   time.textContent=numero;
   if (numero==0) {
     time.textContent=numero;
     clearInterval(repet)
    }
    numero--;
 },1000);
}
repetition();
