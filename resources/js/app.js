require('./bootstrap');

/*
 *   EVEENEMENT SHOW TEXT AND HIDE TEXTE
 *
 */
 var index=0;
 const EvenementShow=()=>{
     var tabTexte=["Resaux Informatique","Programmation","Developpement Web","Developpement mobile","Developpement Desktop","Big Data","Marketing Digital"];
     var text=document.querySelector(".textWrite");
        function ShowText(){
              text.innerHTML=tabTexte[index];
              text.style.opacity="1";
        }
        function HideText(){
            text.style.opacity="0.1";
        }
        function IncrementIndex(){
             index++;
             if(index==7){
                 index=0;
             }
        }
    
        setTimeout(ShowText,1000);
        setTimeout(HideText,3000);
        setTimeout(IncrementIndex,3000);
        setTimeout(EvenementShow,2500);
 }
 EvenementShow();

 /**
  * ANIMATION CHARGEMENT
  */
const main=document.querySelector(".main");
const animation =document.querySelector(".animation-load");
var ishwo=0;
 window.onload=()=>{
      setTimeout(function(){
          ishwo=0;
           main.style.display="block";
          animation.style.opacity="0";
          showContenu();
           
      },2000);
 }
function showContenu(){
    if(ishwo<=10){
        ishwo++;
        if(ishwo>=10){
            main.style.opacity="1";
        }
        else{
            main.style.opacity=0+"."+ishwo;
        }
        setTimeout(showContenu,5);
    }
}



 /**
  * 
  */
 /**  animation deroulante */

const taille=.1;
const option ={
     root:null,
     rootMargin:"0px",
     threshold:taille
}

const callEvent=(entries, observer)=>{
       entries.forEach(entry=> {
             if(entry.intersectionRatio>taille){
                  entry.target.classList.add("visible-true")
                 observer.unobserve(entry.target);
             }
       });
}
var observer= new IntersectionObserver(callEvent,option);
document.querySelectorAll('[class*="visible-"]').forEach((element)=>{
     observer.observe(element);
})