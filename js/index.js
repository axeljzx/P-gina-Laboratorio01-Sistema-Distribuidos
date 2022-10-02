document.addEventListener("DOMContentLoaded", function(){
    iniciarApp();
})

function iniciarApp(){
    navegacionResponsive();
    scrollNav();
    navegacionFija();
}


function navegacionResponsive(){
    const mobileMenu= document.querySelector('.mobile');
    mobileMenu.addEventListener('click',function(){
      const navegacion=document.querySelector('.navegacion-principal') ;
      navegacion.classList.toggle('mostrar');    
    });
}

function scrollNav(){
    const enlaces= document.querySelectorAll(".enlace");
    enlaces.forEach((enlace)=>{
         enlace.addEventListener("click",(e)=>{
            e.preventDefault();
            const seccionScroll=e.target.attributes.href.value;
            const seccion=document.querySelector(seccionScroll);
         
            seccion.scrollIntoView({behavior: "smooth"});
            
          
         });
    });
}

function navegacionFija(){
    const barra=document.querySelector('.header');
    const principal= document.querySelector('.principal');
    const body= document.querySelector('body');
    window.addEventListener('scroll',function(){
        if(principal.getBoundingClientRect().top<0){
            barra.classList.add('barra-fija');
            body.classList.add('body-scroll');
        }else{
            barra.classList.remove('barra-fija');
            body.classList.remove('body-scroll');
        }
        
    })
}