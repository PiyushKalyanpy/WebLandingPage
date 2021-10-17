function myFunction() {
    var x = document.getElementById("list_itema");
    var y = document.getElementById("logo_image");
    var z = document.getElementById("navbar_id");

    if (x.style.display == "none" || x.style.display == '') {
        x.style.display = "block";
        y.style.display = "none";
        z.style.flexDirection = "column";

    } else if (x.style.display == "block") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.flexDirection = "row";
    }

}