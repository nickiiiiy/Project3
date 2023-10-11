// const menuBtn=document.querySelector('.menu-btn-mob');
// const menu=document.querySelector('.menu-list');

// menuBtn.addEventListener('clck',() =>{
//     menu.classList.toggle('menu-list--active')

// });


const menuBtn=document.querySelector('.menu-btn-mob');
const menu=document.querySelector('.menu-list');

menuBtn.addEventListener('click',() =>{
    menu.classList.toggle('menu-list--active')
});

const  sr= ScrollReveal({
    // distance:'100px',
    duration: 2600,
    delay: 450,
    reset: true

});


sr.reveal('.header-content-images',{delay:150,origin:'top'});
sr.reveal('.choose-color',{delay:200,origin:'left'});
sr.reveal('.composition',{delay:200,origin:'left'});
sr.reveal('.case',{delay:200,origin:'left'});
sr.reveal('.audio',{delay:200,origin:'left'});


const choseColor=document.querySelectorAll('.choose-color-btn');
const contentItem=document.querySelectorAll('.content-item');


choseColor.forEach(function(element){
    element.addEventListener('click',open)
});

function open(evt){
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    choseColor.forEach(function(item){
        item.classList.remove('choose-color-btn--active')
    })

    target.classList.add('choose-color-btn--active')


    contentItem.forEach(function(item){
        item.classList.remove('content-item--active')
    })


    contentActive.forEach(function(item){
        item.classList.add('content-item--active')
    })


}