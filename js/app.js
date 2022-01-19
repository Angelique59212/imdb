//search
$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        let param = $(this).attr("href").replace("#","");
        let concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });
});

// create img
let target = document.querySelector('.s1 .swiper-wrapper');
for(let i = 0 ; i < arrMovies.length ; i++){
    let div = document.createElement('div');
    let img = document.createElement('img');
    let divBottom = document.createElement('div');
    let poster = document.createElement('a');
    // let info = document.createElement('div');
    let icon = document.createElement('i');
    let text = document.createElement('p');

    div.className = "swiper-slide";
    div.style.position = "relative";

    img.src = arrMovies[i][0];
    img.alt = arrMovies[i][2];

    divBottom.className = "divBottom";

    poster.href = arrMovies[i][1];
    poster.style.width = "16vw";
    poster.style.paddingBottom = "24vw";
    poster.style.backgroundImage = "url(" + arrMovies[i][1] + ")";

    icon.className = "far fa-play-circle";
    icon.style.fontSize = "8rem";

    text.innerHTML = arrMovies[i][2];

    div.appendChild(img);
    div.appendChild(divBottom);

    divBottom.appendChild(poster);
    divBottom.appendChild(icon);
    divBottom.appendChild(text);
    target.appendChild(div);
}

//first carousel
const swiper1 = new Swiper(".s1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// trigger click on swiper button next
setInterval(function (){
    $(".s1 .swiper-button-next").click();
}, 6000);

//second carousel
const swiper2 = new Swiper(".s2", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let elem = document.querySelector('.s2 .swiper-wrapper');
for(let i = 0 ; i < arr_sec.length ; i++){
    console.log('ici');
    let div = document.createElement('div');
    let img = document.createElement('img');
    div.className = "swiper-slide";
    img.src = arr_sec[i][0];
    div.appendChild(img);
    elem.appendChild(div);
}

//third carousel
const swiper3 = new Swiper(".s3", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// favourites carousel
const swiper4 = new Swiper(".s4", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// exclusive videos
const swiper5 = new Swiper(".s5", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// explore what's stream
const swiper6 = new Swiper(".s6", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
