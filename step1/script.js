//Our Servise
const ourServiseBtnes = document.querySelectorAll('.our-servise__tabItem');
const ourServiseContentItem = document.querySelectorAll('.our-servise__contentItem');

ourServiseBtnes.forEach((element, index) => {
    element.addEventListener('click', () => {
        showOurServiseContent(element, index);
    })
});

function showOurServiseContent(elem, ind) {
    ourServiseBtnes.forEach((btn) => btn.classList.remove('active'));
    ourServiseContentItem.forEach((content) => content.classList.remove('active'));
    ourServiseContentItem[ind].classList.add('active');
    elem.classList.add('active');
}




//Amazing work
const amazingWorkBtnes = document.querySelectorAll('.amazing-work__tabItem');
const amazingWorkContent = document.querySelectorAll('.amazing-work__contentItem');

const loadMoreBtn = document.querySelectorAll('.btn-load-more');
const loadBtn = document.querySelectorAll('.windows8');

let BtnSwitch = 0;
let count = 0;


amazingWorkBtnes.forEach((elemBtn) => {
    elemBtn.addEventListener('click', () => {
        amazingWorkSliders(elemBtn);
    });

});

loadMoreBtn[0].addEventListener('click', () => {
    loadMore(0, 12, 24, amazingWorkContent);
});


function loadMore(btnIndx, startPoint, endPoint, content) {
    loadMoreBtn[btnIndx].classList.remove('active');
    loadBtn[btnIndx].classList.add('active');
    setTimeout(() => {
        loadBtn[btnIndx].classList.remove('active');

        if (BtnSwitch === 0) {
            for (let i = startPoint; i < endPoint; i++) {
                if (content[i] !== undefined) {
                    content[i].classList.add('active');
                }
            }
            loadMoreBtn[btnIndx].classList.add('active');

            BtnSwitch = 1;
        } else {
            for (let i = startPoint * 2; i < endPoint * 2; i++) {
                if (content[i] !== undefined) {
                    content[i].classList.add('active');
                }
            }

            BtnSwitch = 0;
        }
    }, 1000)
}

function amazingWorkSliders(btn) {

    const attributeBtnes = btn.getAttribute('data-amazing-work');

    amazingWorkContent.forEach((el) => {
        const attributeContent = el.getAttribute('data-amazing-work');

        el.classList.remove('active');

        amazingWorkBtnes.forEach(e => e.classList.remove('active'));

        if (attributeBtnes === attributeContent) {
            el.classList.add('active');

            loadMoreBtn[0].classList.remove('active');
        }

        if (attributeBtnes === 'All') {
            for (let i = 0; i < 12; i++) {
                amazingWorkContent[i].classList.add('active');
                loadMoreBtn[0].classList.add('active');
            }
        }
    })

    btn.classList.add('active');
}




//Say About theHam
const aboutPerson = document.querySelectorAll('.about-person');
const namePreson = document.querySelectorAll('.name-preson');
const personPosition = document.querySelectorAll('.person-position');
const avatarBig = document.querySelectorAll('.avatar-big-list');
const avatarSmall = document.querySelectorAll('.avatar-small');
const arrowRight = document.querySelector('.arrow-right-wrapper');
const arrowLeft = document.querySelector('.arrow-left-wrapper');


avatarSmall.forEach((element, index) => {
    element.addEventListener('click', () => {
        AboutHamRemoveClass(index);
        AboutHamAddClass(index);
    })
})

arrowRight.addEventListener('click', () => {
    for (let i = 0; i < avatarSmall.length; i++) {
        if (avatarSmall[i].classList.contains('active')) {
            AboutHamRemoveClass(i);

            i++;

            if (i === avatarSmall.length) i = 0;

            AboutHamAddClass(i);
        }
    }
})

arrowLeft.addEventListener('click', () => {
    for (let i = 0; i < avatarSmall.length; i++) {
        if (avatarSmall[i].classList.contains('active')) {

            AboutHamRemoveClass(i);

            i--;

            if (i === -1) i = avatarSmall.length - 1;

            AboutHamAddClass(i);
        }
    }
})


function AboutHamRemoveClass(index) {
    aboutPerson.forEach(index => index.classList.remove('active'))
    namePreson.forEach(index => index.classList.remove('active'))
    personPosition.forEach(index => index.classList.remove('active'))
    avatarBig.forEach(index => index.classList.remove('active'))
    avatarSmall.forEach(index => index.classList.remove('active'))
}

function AboutHamAddClass(index) {
    aboutPerson[index].classList.add('active')
    namePreson[index].classList.add('active')
    personPosition[index].classList.add('active')
    avatarBig[index].classList.add('active')
    avatarSmall[index].classList.add('active')
}




//Gallery of best images
const galaryBestImgList = document.querySelectorAll('.galary-best-img-list');

loadMoreBtn[1].addEventListener('click', () => {
    loadMore(1, 3, 6, galaryBestImgList);
});
