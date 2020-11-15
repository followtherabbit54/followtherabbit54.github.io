function myFunction() {
    var person = prompt("What are you wishing for?", "the answer must be simple");
    if (person == "you") {
        document.getElementById("demo").innerHTML =
            "<a href='https://drive.google.com/drive/folders/1BwXSaiPDB8Radk6NAd974CCkZHQ8WTze?usp=sharing'>End of Transmition</a>";
        document.getElementById("image").src = "../img/inTimeQRcode.png"
    } else {
        document.getElementById("demo").innerHTML =
            "Wrong, please try again...";
    }
}