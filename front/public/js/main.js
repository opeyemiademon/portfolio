const hamburger =  document.getElementById('hamburger')
const navMemu  = document.getElementById('nav-menu')
const closeIcon  = document.getElementById('nav-close');
const navLink = document.querySelectorAll(".nav__link")






navLink.forEach(link=>

    link.addEventListener("click", ()=>{
        navMemu.classList.add('hidden');
    })
)
closeIcon.addEventListener("click", ()=>{
    navMemu.classList.add('hidden');
})

hamburger.addEventListener("click", ()=>{
    navMemu.classList.remove('hidden');
})



const tabs = document.querySelectorAll('.tabs_wrap ul li')
const all = document.querySelectorAll('.item_wrap')
const foods = document.querySelectorAll('.food')
const snack = document.querySelectorAll('.snack')
const beverage = document.querySelectorAll('.beverage')

tabs.forEach(tab=>{
    tab.addEventListener("click", ()=>{
        tabs.forEach(tab=>{
            tab.classList.remove("active")
        })
        tab.classList.add("active")

        const tabval = tab.getAttribute('data-tabs')

        all.forEach(item =>{
            item.style.display='none'
        })


        if(tabval ==='food'){
            foods.forEach(item =>{
                item.style.display='block'
            })
        }else if(tabval ==='snack'){
            snack.forEach(item =>{
                item.style.display='block'
            })

        }else if(tabval ==='beverage'){
            beverage.forEach(item =>{
                item.style.display='block'
            })

        }else{
            
            all.forEach(item =>{
                item.style.display='block'
            })
        }
    })
})


const scrollHeader = () =>{
    const header = document.getElementById('header')
    if(this.scrollY >= 50){
        header.classList.add("border-b", "border-secondaryColor")
    }else{
        header.classList.remove("border-b", "border-secondaryColor") 
    }
}

window.addEventListener("scroll", scrollHeader)

/* Dark theme */

const html = document.querySelector('html')
const themeBtn = document.getElementById('theme-toggle')
if(localStorage.getItem('mode')=='dark'){
darkMode()
}else{
    lightMode()
}

themeBtn.addEventListener("click", (e)=>{
    if(localStorage.getItem('mode')=='light'){
    darkMode()
    }else{
        lightMode()
    }
})
 
function darkMode (){
    html.classList.add('dark');
   themeBtn.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('mode', 'dark')
}

function lightMode (){
    html.classList.remove('dark');
   themeBtn.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('mode', 'light')
}

const activeLink = ()=>{
    const sections = document.querySelectorAll('section')
    const navLinks = document.querySelectorAll('.nav_link')

    let current ='home'

    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        if(this.scrollY >= sectionTop -60){
            current = section.getAttribute('id')
        }
    })
navLinks.forEach(item =>{
    item.classList.remove('text-secondaryColor')
    if(item.href.includes(current)){
        item.classList.add('text-secondaryColor')
    }

})
    
}

window.addEventListener('scroll', activeLink );


const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400
})

sr.reveal('.home_image');
sr.reveal('.home_contact', { origin:'bottom' });
sr.reveal('.category_card', { interval:300 });

sr.reveal('.promo__card-1', { origin:'left' });
sr.reveal('.promo__card-2', { origin:'right' });
sr.reveal('.about__img', { origin:'bottom' });
sr.reveal('.about_content', { origin:'top' });
sr.reveal('.menu__items', { origin:'left' });
sr.reveal('.customer__review', { origin:'right' });
sr.reveal('.footer');