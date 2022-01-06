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

const swiper2 = new Swiper(".s2", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
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

