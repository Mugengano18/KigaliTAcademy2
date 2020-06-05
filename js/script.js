$(document).ready(function(){
    $("#regiter").click(function(){
        alert("Successfully Registered..")
    })
    $(".btn1").on("click", function () {
        $('.menu').toggleClass("show");
    })

})

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
