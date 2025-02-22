const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
})

close.addEventListener('click', () => {
    menu.classList.remove('active');
});




const knowleadgeArea = document.querySelector('.about__knowleadge-area'),
    listBio = document.querySelector('.about__list'),
    nextItem = document.querySelector('.item__next'),
    backItem = document.querySelector('.item__back');

nextItem.addEventListener('click', () => {
    knowleadgeArea.classList.remove('active');
    listBio.classList.add('active');
})

backItem.addEventListener('click', () => {
    knowleadgeArea.classList.add('active');
    listBio.classList.remove('active');
});




const counters = document.querySelectorAll('.skills__number'),
    lines = document.querySelectorAll('.skills__percent-line');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});



const target = document.getElementById('up'),
    arrow = document.querySelector('.pageup');

arrow.addEventListener('click', () => {
    target.scrollIntoView({ behavior: 'smooth' });
});




const linkExperience = document.getElementById('experience'),
    destExperience = document.querySelector('.link-experience');

destExperience.addEventListener('click', () => {
    linkExperience.scrollIntoView({ behavior: 'smooth' });
});

const linkSkills = document.getElementById('skills'),
    destSkills = document.querySelector('.link-skills');

destSkills.addEventListener('click', () => {
    linkSkills.scrollIntoView({ behavior: 'smooth' });
});

const linkAbout = document.getElementById('about'),
    destAbout = document.querySelector('.link-about');

destAbout.addEventListener('click', () => {
    linkAbout.scrollIntoView({ behavior: 'smooth' });
});

const linkPortfolio = document.getElementById('portfolio'),
    destPortfolio = document.querySelector('.link-portfolio');

destPortfolio.addEventListener('click', () => {
    linkPortfolio.scrollIntoView({ behavior: 'smooth' });
});

const linkContact = document.getElementById('contact'),
    destContact = document.querySelector('.link-contact');

destContact.addEventListener('click', () => {
    linkContact.scrollIntoView({ behavior: 'smooth' });
});






