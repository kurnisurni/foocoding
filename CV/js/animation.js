// name animation
const spans = document.querySelectorAll('h1 span')

spans.forEach(index => index.addEventListener('mouseover', function(e) {

    index.classList.add('animated', 'rubberBand')
}))

spans.forEach(index => index.addEventListener('mouseout', function(e) {

    index.classList.remove('animated', 'rubberBand')
}))

//scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});


// scroll about
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

// scroll resume
sr.reveal('.resume__subtitle', {});
sr.reveal('.timeline', { delay: 400 });
sr.reveal('.skills-bar', { delay: 400 });