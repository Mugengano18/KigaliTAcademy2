function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
$(document).ready(function(){
    $("#data").click(function(){
        alert("thank you for registering,We will review your cv and Get back at you.")
    })
    $("#suggest").click(function(){
        alert("We highly appreciate your suggestion!!!")
    })
    $(".btn1").on("click", function () {
        $('.menu').toggleClass("show");
    })

})
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