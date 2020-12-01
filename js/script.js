
$('.js-timeline').Timeline({
    autoplay: false,
    dotsPosition: 'top',
});

function info() {

    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if (email.length > 0 && mensaje.length > 0) {
        if (email.includes("@") && mensaje.length > 10) {
            $("#alert1").show();
            $("#alert1").fadeIn();
            setTimeout(function () { $("#alert1").fadeOut(1000); }, 2000);
        } else {
            $("#alert3").show();
            $("#alert3").fadeIn();
            setTimeout(function () { $("#alert3").fadeOut(1000); }, 2000);
        }
    } else {
        $("#alert2").show();
            $("#alert2").fadeIn();
            setTimeout(function () { $("#alert2").fadeOut(1000); }, 2000);
    }

}