const navbar = document.querySelector(".navbar__list");
const anchor = document.querySelectorAll('a');

const sectionList = document.querySelectorAll('section');
const burger = document.querySelector('.burger');


//Here i am building the navbar 
//and adding the eventlistener for each link
const addLinks= ()=>{
    for (let i of sectionList){
        const list= document.createElement('li');
        const link=document.createElement('a');
        link.href="#"+i.id;
        link.textContent=i.getAttribute('data-nav');
        link.id=i.id;
        link.addEventListener('click',(event)=>{
            event.preventDefault();
            i.scrollIntoView({
                behavior: "smooth"
            });
        });
        list.appendChild(link);
        navbar.appendChild(list);
    }
}
//here i am adding some animation for the burger slider
const slider= ()=>{
    burger.addEventListener('click',()=>{
        navbar.classList.toggle('nav-active');
        let index= 0 ;
        for (let link of navbar.children ){
            if(link.style.animation){
                link.style.animation='';
            }
            else{
            link.style.animation =`navLinkFade 0.5s ease forwards ${index/7 +0.5}s`; 
            index++;
            }
         }
    });
    
}
function highlight(section,anchor){
    let defaultBG = section.style.backgroundColor;
    section.style.backgroundColor = "#A9A9A9";
    anchor.style.color="#0066FF";

    setTimeout(function()
    {
        section.style.backgroundColor = defaultBG;
        anchor.style.color="#fff";


    }, 2000); 
}
//this is a web api which helps us determine the intersection of viewport with screen
let observer = new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
      if(entry.isIntersecting){
           let id=entry.target.id;
           let link=document.querySelector(`#${id}`);
           highlight(entry.target,link);
         }
    });
  }, {threshold: 1});                                                                                                                                          
  
  
  

addLinks();
slider();
sectionList.forEach(s => { observer.observe(s) });

