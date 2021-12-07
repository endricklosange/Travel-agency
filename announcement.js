$(document).ready(function () {
    for (let i = 0; i < 7; i++) {
        $(".allCard").prepend("<div class='col-md-3 announcement mt-3'><div class='deal'><h4>Amsterdam</h4></div><img src='https://picsum.photos/500/500' alt='image aléatoire' class='dealImg'><div class='whiteBlur'><div class='imformation'><p>Hotel Calypso</p><p>1 week</p></div><div class='price'><p>130$</p></div></div></div>  ");
    }
});