$(document).ready(function(){
    $(".click1").click(function(){
        $("#par1").toggle();
        $(".hidden1").toggle();
    });
    $(".click2").click(function(){
        $("#par2").toggle();
        $(".hidden2").toggle();
    });

    $(".click3").click(function(){
        $("#par3").toggle();
        $(".hidden3").toggle();
    });
})