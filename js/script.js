/*=========================================
            MENÚ RESPONSIVE
=========================================*/

const menu = document.querySelector(".menu");

const nav = document.querySelector("nav ul");

menu.addEventListener("click", () => {

    nav.classList.toggle("show");

    menu.classList.toggle("active");

});

/*=========================================
        CERRAR MENÚ AL DAR CLICK
=========================================*/

document.querySelectorAll("nav ul li a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");

        menu.classList.remove("active");

    });

});

/*=========================================
        HEADER AL HACER SCROLL
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scroll");

    } else {

        header.classList.remove("scroll");

    }

});

/*=========================================
            SCROLL SUAVE
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*=========================================
        ANIMACIÓN AL APARECER
=========================================*/

const elementos = document.querySelectorAll(

".card, .construction-card, .service-section, .other-card, .team-card, .value-card, .maintenance-item"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

elementos.forEach(item=>{

    observer.observe(item);

});

/*=========================================
            BOTÓN WHATSAPP
=========================================*/

const whatsapp = document.querySelector(".whatsapp-button");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        whatsapp.style.opacity="1";

        whatsapp.style.pointerEvents="auto";

        whatsapp.style.transform="scale(1)";

    }else{

        whatsapp.style.opacity="0";

        whatsapp.style.pointerEvents="none";

        whatsapp.style.transform="scale(.8)";

    }

});

/*=========================================
        EFECTO PARALLAX HERO
=========================================*/

const heroImage=document.querySelector(".hero-image");

window.addEventListener("scroll",()=>{

    const offset=window.pageYOffset;

    heroImage.style.transform=`translateY(${offset*0.35}px)`;

});

/*=========================================
        ANIMACIÓN TARJETAS
=========================================*/

const cards=document.querySelectorAll(

".card,.construction-card,.other-card,.team-card,.value-card"

);

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transition=".35s";

        card.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

/*=========================================
        EFECTO IMÁGENES
=========================================*/

const images=document.querySelectorAll(

".service-image img,.maintenance-images img,.construction-card img,.other-card img,.team-card img"

);

images.forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transition=".4s";

        img.style.transform="scale(1.04)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});

/*=========================================
        VALIDAR FORMULARIO
=========================================*/

const formulario=document.querySelector(".contact-form form");

if(formulario){

    formulario.addEventListener("submit",(e)=>{

        const nombre=formulario.nombre.value.trim();

        const correo=formulario.correo.value.trim();

        const mensaje=formulario.mensaje.value.trim();

        if(nombre===""||correo===""||mensaje===""){

            e.preventDefault();

            alert("Completa todos los campos obligatorios.");

            return;

        }

        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!regex.test(correo)){

            e.preventDefault();

            alert("Ingresa un correo electrónico válido.");

        }

    });

}

/*=========================================
        AÑO AUTOMÁTICO FOOTER
=========================================*/

const footer=document.querySelector(".footer-bottom p");

if(footer){

    footer.innerHTML=`© ${new Date().getFullYear()} GRIPBSO. Todos los derechos reservados.`;

}
