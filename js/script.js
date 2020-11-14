function myFunction() {
    var person = prompt("What are you wishing for?", "the answer must be simple");
    if (person == "you") {
        document.getElementById("demo").innerHTML =
            "<a href='www.google.com'>www.google.com</a>";
        document.getElementById("image").src = "../img/inTimeQRcode.png"
    } else {
        document.getElementById("demo").innerHTML =
            "Wrong, please try again...";
    }
}