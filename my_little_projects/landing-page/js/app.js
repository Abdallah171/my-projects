//define my global vars
let navbarUl = document.getElementById('navbar__list');
let myAllSections = document.querySelectorAll('section');

//create list element to my navbar
myAllSections.forEach(mySection => {
    let myList = document.createElement('li');

    let myLiLinks = document.createElement('a');
    myLiLinks.classList.add('menu__bar')
    myLiLinks.setAttribute('data-nav', mySection.id);

    let secTitle = mySection.querySelector('.title');
    myLiLinks.innerHTML = secTitle.textContent;

    myList.appendChild(myLiLinks);
    navbarUl.appendChild(myList);

    //styling myList 
    myList.style.cssText = 'color : black; font-size:20px; margin-right:1em; ';
})
let myLinks = document.querySelectorAll('li a');

//scroll function
myLinks.forEach(clickLi => clickLi.addEventListener('click', function(e) {
        let secId = e.target.dataset.nav;
        document.getElementById(secId).scrollIntoView({ behavior: 'smooth' });

    }))
    //   active section
window.onscroll = () => {
    let active = "";
    myAllSections.forEach((mySection) => {
        const sectionTop = mySection.offsetTop;
        if (scrollY >= sectionTop - 200) {
            active = mySection.id;
        }
    });
    myLinks.forEach((sec) => {
        sec.classList.remove("active-sec");
        let secData = sec.getAttribute("data-nav");
        if (secData == active) {
            sec.classList.add("active-sec");
        }
    });

};

////////