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

//first carousel
let swiper = new Swiper(".mySwiper", {
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

// create img
let target = document.querySelector('.swiper-wrapper');
for(let i = 0 ; i < arrMovies.length ; i++){
    let div = document.createElement('div');
    div.className = "swiper-slide";
    let img = document.createElement('img');
    img.src = arrMovies[i][0];
    img.alt = arrMovies[i][2];
    div.appendChild(img);
    target.appendChild(div);
}