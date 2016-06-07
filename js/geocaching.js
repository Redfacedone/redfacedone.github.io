function check_geocache() {
var input = document.getElementById("output").value;
if(input === "I love geocaching!"){
document.getElementById("geocachingOutput").innerHTML = "You did it!";
}else{
document.getElementById("geocachingOutput").innerHTML = "Not quite it."
};
};
