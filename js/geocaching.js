function check_geocache() {
var geoInput = document.getElementById("output").value;
if(geoInput === "I love geocaching!"){
document.getElementById("geocachingOutput").innerHTML = "You did it!";
}else{
document.getElementById("geocachingOutput").innerHTML = "Not quite it."
};
};
