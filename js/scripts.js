$(document).ready (function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carousel-pause").click(function () {
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function () {
        $("#mycarousel").carousel('cycle');
    });
});

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(37.964319548790364,23.723446211230204),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }