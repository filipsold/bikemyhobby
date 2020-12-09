$(document).docready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-pause").onclick(function(){
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").onclick(function(){
        $("#mycarousel").carousel('cycle');
    });
});