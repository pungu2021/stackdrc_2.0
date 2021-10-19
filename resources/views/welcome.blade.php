@extends('partials.heade')
@section('index')
<figure style="margin-top:60px">
   <img src="{{Storage::url("images/a112.png")}}" alt="" class="image-stack-accueil">
</figure>
<div class="index-bloc-write">
     <div>
         <p class="visible- visible-de-1">
             Bienvenue Chez Stackdrc 
         <p>         
             <p class="visible- visible-de-2 slog">
                votre site web qui vous apprend des nouvelles connaissances en :
            </p>    
            <div  class="visible- visible-de-3">
                <p class="textWrite ">
                    Resaux Informatique
                </p>
            </div>
           
         <!--
         <p class="small-text-accueil">
             Apprendre des  nouvelles choses <br> grace  aux experts qualifier dans le domaine de l'informatique 
         </p> -->
      
         <button class="begin-acceuil visible- visible-de-4">Commencer maintenant</button>
     </div>
</div>
<div class="container-fluid">
    dssss
    <div class="row">
        <div class="col-lg-9">
             <div class="row">
                 <?php for ($i=0; $i < 6; $i++) { ?>             
                 <!--first col-->
                 <div class="col-lg-4 visible- visible-de-<?php echo $i+1?> bloc">
                     <a href="#" class="text-light">
                        <figure>
                            <img src="{{Storage::url("images/logo2.png")}}" alt="" class="image-bloc">
                        </figure>
                        <h2>Titre</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellat quas voluptatibus, deserunt ipsam amet
                            exercitationem nemo quos repellendus reprehenderit
                            quod sapiente cum iusto aspernatur accusantium totam,
                            eaque animi odit. Rem?
                        </p>
                        </a>
                 </div>
                 <?php } ?>
                 <!--end first-->
             </div>
        </div>
        <div class="col-lg-3">
             publicité
        </div>
    </div>
</div>
@endsection