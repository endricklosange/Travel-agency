$(document).ready(function () {
    for (let i = 0; i < 7; i++) {
        $(".firstCard").after("<div class='col-md-3 announcement mt-3'><div class='deal'><h4>Amsterdam</h4></div><img src='https://picsum.photos/500/500' alt='image aléatoire' class='dealImg'><div class='whiteBlur'><div class='imformation'><p>Hotel Calypso</p><p>1 week</p></div><div class='price'><p>130$</p></div></div></div>  ");
    }
    $(function () {
        $("footer").load("/component/footer.html");
    });

    $(function () {
        $(".header").load("/component/header.html");
    });
    for (let i = 0; i < 9; i++) {
        $(".allImg").prepend('<div class="col-3 my-2"><div class="position-relative"><img src="https://picsum.photos/500/300" alt="image aléatoire" class="w-100"><div class="darkenDivHover"></div></div><img src="/assets/images/zoom.png" alt="image aléatoire" class="w-25 magnifyingGlass"></div>');
    }
    for (let i = 0; i < 3; i++) {
        $(".youMayAlsoLike").after("<div class='col-lg-4 announcement mt-3 my-3'><div class='deal'><h4>Amsterdam</h4></div><img src='https://picsum.photos/500/500' alt='image aléatoire' class='dealImg'><div class='whiteBlur'><div class='imformation'><p>Hotel Calypso</p><p>1 week</p></div><div class='price'><p>130$</p></div></div></div>  ");
    }
});
