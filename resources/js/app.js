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

/**
 * Dark mode 
 */

const mode_global=document.querySelector(".mode-global");
const mode=document.querySelector(".mode");
const main1=document.querySelector(".main");
const text_light= document.querySelectorAll(".text-light");
const dark_image=document.querySelector(".dark-image");


mode_global.addEventListener("click",function(){
       if(window.getComputedStyle(mode,null).getPropertyValue("float")=="left"){
           mode.style.float="right";
            main1.style.backgroundColor="#121A26";
            main1.style.color="white";
            dark_image.setAttribute("src","/storage/images/lune.png");
            mode.style.backgroundColor="transparent";
             //suppression de la couleur blanche
        text_light.forEach((element)=>{
            element.classList.add("light");
        })
        // ajouter la couleur noire
        text_light.forEach((element)=>{
            element.classList.remove("dark-light");
        })
       }
       else{
        mode.style.float="left";
        main1.style.backgroundColor="#121a2607 ";
        main1.style.color="black";
        dark_image.setAttribute("src","/storage/images/moon.png");
        mode.style.backgroundColor="white";
          // supprimer la couleur noir du textex
          text_light.forEach((element)=>{
            element.classList.remove("light");
        })
        // ajouter la couleur blanche
        text_light.forEach((element)=>{
            element.classList.add("dark-light");
        })
      
       }
})


/**
 * load color for dark mode 
 */
 window.addEventListener("load",function(){
    main1.style.backgroundColor="#121a2607 ";
    main1.style.color="black";
      // supprimer la couleur noir du textex
      text_light.forEach((element)=>{
        element.classList.remove("light");
    })
    // ajouter la couleur blanche
    text_light.forEach((element)=>{
        element.classList.add("dark-light");
    })
})