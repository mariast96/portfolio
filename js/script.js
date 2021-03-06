
window.addEventListener('load', function(){
    document.querySelector('.preloader').classList.add('opacity-0');
    setTimeout(function(){
         document.querySelector('.preloader').style.display='none';

    },1000)
})


//portfolio item filter

const filterContainer=document.querySelector('.portfolio-filter'),
      filterBtns=filterContainer.children,
      totalFilterBtn=filterBtns.length,
      portfolioItems=document.querySelectorAll('.portfolio-item'),
      totalPorfolioItem=portfolioItems.length;

for(let i=0; i<totalFilterBtn; i++){
    filterBtns[i].addEventListener('click', function(){
        filterContainer.querySelector('.active').classList.remove('active');
        this.classList.add('active');

        const filterValue=this.getAttribute('data-filter');

        for(let k=0; k<totalPorfolioItem; k++){
            if(filterValue === portfolioItems[k].getAttribute('data-category')){
                portfolioItems[k].classList.remove('hide');
                portfolioItems[k].classList.add('show');
            }
            else{
                portfolioItems[k].classList.remove('show');
                portfolioItems[k].classList.add('hide');
            }

            if(filterValue === 'all') {
                portfolioItems[k].classList.remove('hide');
                portfolioItems[k].classList.add('show');
            }
        }
    })
}


//portfolio lightbox

const lightbox=document.querySelector('.lightbox'),
      lightboxImg=lightbox.querySelector('.lightbox-img'),
      lightboxClose=lightbox.querySelector('.close-lightbox'),
      lightboxText=lightbox.querySelector('.caption-text'),
      lightboxCounter=lightbox.querySelector('.caption-counter');
let itemIndex=0;

for(i=0; i<totalPorfolioItem; i++){
portfolioItems[i].addEventListener('click', function(){
    itemIndex=0;
    changeItem();
    toggleLightbox();
})
}

function nextItem(){
    if(itemIndex === totalPorfolioItem-1){
        itemIndex=0;
    }
    else{
        itemIndex++;
    }
    changeItem();
}

function prevItem(){
    if(itemIndex === 0){
        itemIndex=totalPorfolioItem-1;
    }
    else{
        itemIndex--;
    }
    changeItem();
}


function toggleLightbox(){
    lightbox.classList.toggle('open');
}

function changeItem(){
    imgSrc=portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute('src');
    lightboxImg.src=imgSrc;
    lightboxText.innerHTML=portfolioItems[itemIndex].querySelector('h4').innerHTML;
    lightboxCounter.innerHTML=(itemIndex+1) + ' of ' + totalPorfolioItem;
}

//close lightbox

lightbox.addEventListener('click', function(event){
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox();
    }
})



//aside navbar

//const nav=document.querySelector('.nav'),
//      navList=nav.querySelectorAll('li'),
//      totalNavList=navList.length,
//      allSection=document.querySelectorAll('.section'),
//      totalSection=allSection.length;
//
//for (let i=0; i<totalNavList; i++){
//    const a=navList[i].querySelector('a');
//    a.addEventListener('click', function(){
//        for (let j=0; j<totalNavList; j++){
//            navList[j].querySelector('a').classList.remove('active');
//        }
//        this.classList.add('active');
//
//        showSection(this);
//    })
//}
//
//function showSection(element){
//    for (let i=0; i<totalSection; i++){
//        allSection[i].classList.remove('active');
//    }
//    const href=element.getAttribute('href').split('#')[1];
//    document.querySelector('#'+target).classList.add('active');
//}


document.querySelector('.hire-me').addEventListener('click', function(){
    console.log(this);
})


const navTogglerBtn=document.querySelector('.nav-toggler'),
      aside=document.querySelector('.aside');

navTogglerBtn.addEventListener('click', () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
}





























































