/*var a = "Elzero web school";

console.log (a.slice(2,6).replace("z",a.slice(2,6).charAt(0).toUpperCase()))
console.log (a.split(" ",1));
console.log (a.charAt(a.indexOf("h")).toUpperCase().repeat(8));
*/
/*const api ="https://www.breakingbadapi.com/api/characters";
 async function get(){
   const response =  await fetch(api);
   const data = await response.json();
   printdata(data);
  }         
  function printdata(data){
    const act = document.querySelector('#actor');
    
    act.innerHTML+=
      `
      <select class="form-control" onchange="getch(this.value)" >
          <option>please Select</option>
          ${
            data.map
            (actor => `<option>${actor.name}</option>`)
           }
      </select>
      `
    }
     async  function getch(name){
     if (name!="please Select"){
      const response = await fetch(`${api}?name=${name}`);
      const data = await response.json();
      document.querySelector('#content').innerHTML=`
          <h1>${data[0].name}</h1>
          <img src="${data[0].img}" width=200px>
      `
     }
      
      
    }
  get();
  */
var slideImage = Array.from(document.querySelectorAll('.photos img'));
var slidecount = slideImage.length;
var currentSlide = 1;
var slideNumber = document.querySelectorAll('.nums li');
var myNext = document.getElementById('style1');
var myPrevious = document.getElementById('style');
var mySlide = document.getElementById('slider-number');
check();
myNext.onclick=function(){
  currentSlide++;
  check();
}
myPrevious.onclick=function(){
  currentSlide--;
  check();
}
function check() {
  mySlide.textContent  = ` slide ${currentSlide} of ${slidecount}`
  removeAll();
  slideNumber[currentSlide-1].classList.add('active');
  slideImage[currentSlide-1].classList.add('active');
  verNext();
  verPrev();
}
function verNext() {
  if(currentSlide>=6){
    myNext.classList.add('disible');
    myNext.setAttribute("disabled",null); }
  else{
    myNext.classList.remove('disible');
    myNext.removeAttribute("disabled");
  }
}
function verPrev() {
  if(currentSlide<=1){
    myPrevious.classList.add('disible');
    myPrevious.setAttribute("disabled",null);
  }
  else{
    myPrevious.classList.remove('disible');
    myPrevious.removeAttribute("disabled");
  }
}
function removeAll() {
  slideImage.forEach(img =>{
    img.classList.remove('active');
  })
  slideNumber.forEach(li =>{
    li.classList.remove('active')
  })
}
slideNumber.forEach(ele =>{
  ele.addEventListener('click',(e)=>{
       removeAll();
      currentSlide= Number(e.target.dataset.number);
      slideNumber[currentSlide-1].classList.add('active');
      slideImage[currentSlide-1].classList.add('active');
      verPrev();
      verNext();
    })
  })


//-------

/*var myArrow = document.querySelectorAll('.material-icons');
myArrow.forEach(arrow =>{
  arrow.addEventListener('click',()=>{
    
    if (arrow.previousElementSibling.type==='text' && valid(arrow.previousElementSibling)) {
      arrow.parentElement.classList.add('innective');
      arrow.parentElement.classList.remove('active');
      arrow.parentElement.nextElementSibling.classList.add('active');
      arrow.parentElement.nextElementSibling.classList.remove('innective');
    }
    else if(arrow.previousElementSibling.type==='email' && valid(arrow.previousElementSibling)){
      arrow.parentElement.classList.add('innective');
      arrow.parentElement.classList.remove('active');
      arrow.parentElement.nextElementSibling.classList.add('active');
      arrow.parentElement.nextElementSibling.classList.remove('innective');
    }
    else if(arrow.previousElementSibling.type==='password' && valid(arrow.previousElementSibling)){
      arrow.parentElement.classList.add('innective');
      arrow.parentElement.classList.remove('active');
      arrow.parentElement.nextElementSibling.classList.add('active');
      arrow.parentElement.nextElementSibling.classList.remove('innective');
    
    }else{
      arrow.parentElement.style.animation='tour .8s ease'
    }
    arrow.parentElement.addEventListener("animationend",(e)=>{
        arrow.parentElement.style.animation='';
    })
  })
})
function valid(user) {
  if(user.value.length < 6){
    erreur('rgb(189,87,87)');
  }
  else{
    erreur('rgb(93, 228, 100)');
    return true;
  }
}
function erreur(col) {
    document.querySelector('.situe').style.backgroundColor=col ;
}

/* writing
 
var myArrays = ['Oussama','Ilyes','Saif'];
var mySpan = document.querySelector('.change');
var counter = 0;
var index = 0;
var content ='';
setInterval(() => {
  if (counter==3) {
    counter =0;
  }
  var myLength = myArrays[counter].length;
   if (index!=myLength+1) {
      content = myArrays[counter].slice(0,index++);
      mySpan.textContent =content;
    }
    else{
      index=0;
      counter ++;
    }
}, 500);*/
/* text animation
const myText = document.querySelector('.text');
const myContent = myText.textContent;
var myArray = myContent.split('');
myText.textContent='';
for (let i = 0; i < myArray.length; i++) {
   myText.innerHTML +=  `<span>${myArray[i]}</span>`
}
let char =0;
let timer = setInterval(() => {
  const span = myText.querySelectorAll('span')[char];
  
   span.classList.add('fade');
  char++;
  if (char===myArray.length) {
    clearInterval(timer);
    timer=null;
  }
}, 50);
*/
// ------ to do list------
var myAdd = document.querySelector('.add-item i'),
myerr = document.querySelector('.add-item');
var myNew_t = document.querySelector('.add-item input');
var myList=document.querySelector("#list");
myAdd.addEventListener('click',()=>{
    verify();
})
const asyncLocalStorage = {
  setItem: function (key, value) {
      return Promise.resolve().then(function () {
          localStorage.setItem(key, value);
      });
  },
  getItem: function (key) {
      return Promise.resolve().then(function () {
          return localStorage.getItem(key);
      });
  }
};

let List=[];
asyncLocalStorage.getItem('List').then((a)=>{
  if(a){ List=JSON.parse(a);}
 

  affichage();
});


let id = localStorage.getItem("id")?localStorage.getItem("id"):0;
function verify() {
   if (myNew_t.value=='') {
     myerr.classList.add('err');
  }
  else{
    myerr.classList.remove('err');

    List.push(
        {
          name:myNew_t.value,
          id:id,
          done:false,
          trash:false
        }
    );
  updateStorage();
    affichage();
    id++;
    localStorage.setItem("id",id);
    myNew_t.value='';
  }
}
document.addEventListener('keyup',(ele)=>{
  if (ele.keyCode==13) {
    verify();
     }
})
function affichage(){
  myList.innerHTML="";
  for(var i=0;i<List.length;i++){
    if(List[i]?.trash){

    }
     else{
      var Line=List[i]?.done?"line-through":"";
      var dn =List[i]?.done ? 'check_circle' : "radio_button_unchecked"; 
      var tr=List[i]?.done ?`<i class="material-icons"  onclick="action(2,${List[i]?.id}) "">delete_outline</i>`:'';
      const text = `
      <li class="item">
      <i class="material-icons"  onclick="action(1,${List[i]?.id}) ">${dn}</i>
      <p class="${Line}">${List[i]?.name}</p>
      ${tr}
      </li>
      `
    myList.innerHTML+=text;
     }


  }
}

function action(act,id){
  if(act==1){
    List.forEach(el=>{
      if(el.id==id){
        el.done=!el.done;
      }
    })
    
  }
  else if(act==2){
    List.forEach(el=>{
      if(el.id==id && el.done){
      
        el.trash=true;
      }
    })
  }
  else if(act==3){
    List.forEach(el=>{
      if(el.done){
      if(el.trash){
      
      }
      else{
        el.trash=true;
      }}
    })
  }
  else if(act==4){
    List.forEach(el=>{
 
        el.trash=false;
      
    })
  }
  updateStorage();
  affichage();
}
    

   function updateStorage(){
    localStorage.setItem("List",JSON.stringify(List) );

   }

   /*--------   do quiz-----------*/
   var time = document.querySelector('.count');
   var que = document.querySelector('.body-quiz h2');
   var nexting = document.querySelector('.next');
   var mychoix = document.querySelectorAll('.que');
   var mybody_c =document.querySelector('.que-quiz');
   var mybody_all =document.querySelector('.body-quiz'); 
   var choises =[];
   var Id =0;
   choises.push(
          { 
            Id:'what is MAC?',
            Q:["medium acess control","media acess control","more acess control","morphism acess control"],
          
            correct:1
          },
          {
            Id:'how many classes are we seeing in ip?',
            Q:[3,4,5],
         
           correct:1
          },
          { 
            Id:'who collect between network ?',
            Q:['router','switch','firewall','pc','hub'],
         
           correct:0
          }
   )
  function ter(c,bl,correcti){
    mybody_c.innerHTML="";
    for (let i = 0; i< choises[Id].Q.length; i++) {
      var  fc=""; 
      if(correcti==i){
        fc = `
        <div class="que corr">${choises[Id].Q[i]}</div>
        `
      }
       else{
      if(c==i){
          if(bl){
             fc = `
            <div class="que corr">${choises[Id].Q[i]}</div>
            `
          }
          else{
            fc = `
            <div class="que incorr">${choises[Id].Q[i]}</div>
            `

          }
      }
      else{
     fc = `
      <div class="que">${choises[Id].Q[i]}</div>
      `
    }}
      mybody_c.innerHTML+=fc;
     }  
  }
   function fillchoix() {
    
     for (let i = 0; i< choises[Id].Q.length; i++) {
       const fc = `
       <div class="que" onclick="checkQ(${i})">${choises[Id].Q[i]}</div>
       `
       mybody_c.insertAdjacentHTML('beforeend',fc);
      }   
   }
   function checkQ(ele) {

    
         if (ele==choises[Id].correct) {
          ter(ele,true,choises[Id].correct)

         } else {
          ter(ele,false,choises[Id].correct)
         }
    }
   function fillque() {
    const fq = `<h3>${choises[Id].Id}</h3>`;
    mybody_all.insertAdjacentHTML('afterbegin',fq);
    fillchoix();  
   }
   fillque();
   function changing() {
     mybody_all.children[0].innerHTML='';
       mybody_c.innerHTML='';
       Id++;
       fillque();  
       numero=15;
       time.textContent=15;
        if (Id==(choises.length-1)) {
           nexting.style.display='none';
        }
   }
   var numero =time.textContent;
   function repetition() {
    var repet = setInterval(() => {
      time.textContent=numero;
      if (numero==0) {
        time.textContent=numero;
        clearInterval(repet);
        stop();
       }
       numero--;
    },1000);
   }
 repetition();
 function stop() {
  mybody_c.innerHTML="";
  for(let i = 0; i < choises[Id].Q.length; i++) {
    if (i==choises[Id].correct) {
      var fs = `
       <div class="que corr">${choises[Id].Q[i]}</div>
       `
    }
    else{

      var fs = `
      <div class="que">${choises[Id].Q[i]}</div>
      `
    }
       mybody_c.innerHTML+=fs;
  
  } 

 }
 //-------palindrome----------
const buttonPalindrome = document.querySelector('.palindrone-box button'),
      myInput = buttonPalindrome.previousElementSibling;


      buttonPalindrome.addEventListener('click',()=>{
        if (document.querySelector('.oui')) {
          document.querySelector('.oui').style.display='none';
          
        }
        let insideInput= myInput.value;
        let inputArray = [...insideInput];
        if (!insideInput) {
         const remarque = `<h4 class='oui' style='text-align:center;color:red;margin-top:20px;'>empty enter the word</h4>`;
         document.querySelector('.palindrone-box').children[1].insertAdjacentHTML('afterend',remarque);
        }
      else{
            var reverseArray=[];
      for (let i = inputArray.length-1; i >=0; i--) {       
           reverseArray.push(inputArray[i]);
      }
      if (reverseArray.toString()===inputArray.toString()) {
        const remarque = `<h4 class='oui' style='text-align:center;color:blue;margin-top:20px;'>yes ${insideInput} is a palindrone</h4>`;
         document.querySelector('.palindrone-box').children[1].insertAdjacentHTML('afterend',remarque);
      } else {
        const remarque = `<h4 class='oui' style='text-align:center;color:red;margin-top:20px;'>no ${insideInput} isn't a palindrone</h4>`;
         document.querySelector('.palindrone-box').children[1].insertAdjacentHTML('afterend',remarque);
      }

    }})
  