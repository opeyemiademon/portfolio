

const hamburger =  document.getElementById('hamburger')
const navClose =  document.getElementById('nav-close')

const mobileMenu  = document.getElementById('mobile_menu') 

hamburger.addEventListener("click", ()=>{
   mobileMenu.classList.remove('hidden');
}) 
navClose.addEventListener("click", ()=>{
   mobileMenu.classList.add('hidden');
}) 


const scrollHeader = () =>{
   const header = document.getElementById('header')
   if(this.scrollY >= 50){
       header.classList.add("border-b", "color-neutral-grey")
   }else{
       header.classList.remove("border-b", "color-neutral-grey") 
   }
}

window.addEventListener("scroll", scrollHeader);