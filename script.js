let menuVisible = false;
//funcion ocultar mostrar.
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="reponsive";
        menuVisible=true;
    }
}

function seleccionar(){
    //oculto  menu al seleccionar una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}
//funcion aplica animaciones de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills= window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        abilidades[2].classList.add("photoshop");
        abilidades[3].classList.add("wordpress");
        abilidades[4].classList.add("drupal");
        abilidades[5].classList.add("comunicacion");
        abilidades[6].classList.add("trabajo");
        abilidades[7].classList.add("creatividad");
        abilidades[8].classList.add("dedicacions");
        abilidades[9].classList.add("proyect");

    }
}