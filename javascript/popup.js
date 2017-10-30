$(document).ready(function() {
   var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.getElementsByName("imageForm")[0].reset();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementsByName("imageForm")[0].reset();
    }
}

document.getElementById("popCancel").onclick = function(){
	modal.style.display = "none";
	document.getElementsByName("imageForm")[0].reset();
	return false;
}

});