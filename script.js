window.onload = function () {

    document.addEventListener('click', (e) => {
        const classList = [...e.target.classList];

        if ((classList.indexOf ('nav-left') > -1) || (classList.indexOf ('nav-right') > -1) || (classList.indexOf ('nav-btn') > -1) || (classList.indexOf ('icon') > -1)) {
            changeSlide(e.target.getAttribute('data-id'));
        }
    });

    const changeSlide = (id) => {

        let activeSlide = document.querySelectorAll('.active')[0];
        activeSlide.classList.remove('active');

        let newActiveSlide = document.getElementById(id);
        newActiveSlide.classList.add('active');
        let navBtns = [...document.querySelectorAll('.nav-btn')];

        for (let i = 0; i < navBtns.length; i++) {
            if ([...navBtns[i].classList].indexOf('active-nav-btn')) {
                navBtns[i].classList.remove('active-nav-btn');
            }
            if (navBtns[i].getAttribute('data-id') === id) {
                navBtns[i].classList.add('active-nav-btn');
            }
        }

        let leftNav = document.getElementById('nav-left');
        let rightNav = document.getElementById('nav-right');
        let imgContainer = document.getElementsByClassName('img-container');
        let slideId = parseInt(id.split('-')[1]);
        let leftSlideId = 'slide-';
        let rightSlideId = 'slide-';

        if (slideId === 1) {
            leftSlideId += imgContainer.length;
        } else {
            let tmp = slideId -1;
            leftSlideId += tmp;
        }
        if (slideId === imgContainer.length) {
            rightSlideId += 1;
        } else {
            let tmp = slideId +1;
            rightSlideId += tmp;
        }

        leftNav.setAttribute('data-id', leftSlideId);
        document.querySelectorAll('.nav-left span')[0].setAttribute('data-id', leftSlideId);
        rightNav.setAttribute('data-id', rightSlideId);
        document.querySelectorAll('.nav-right span')[0].setAttribute('data-id', rightSlideId);
    }
}