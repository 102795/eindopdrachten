function ernstigheid(){
let x = 0



// variabele van de ziektes neerzetten (nog zonder waarde)
let keelpijn = "";
let hoesten = "";
let misselijk = "";
let duizelig = "";
let hoofdpijn = "";

// Checken of naam en leeftijd veld is ingevuld
if (document.getElementById("leeftijdinput").value === "" || document.getElementById("nameinput").value === ""){
    alert("Je moet je leeftijd en naam invullen!")
}
// Variabelen maken
let leeftijd = document.getElementById("leeftijdinput").value
let naam = document.getElementById("nameinput").value

// Zeker weten dat leeftijd een nummer is
leeftijd = Number(leeftijd)



// Checken of de checkboxes zijn aangevinkt en zoja dan 1 toevoegen aan x
let checkbox0 = document.getElementById("hoofdpijn")
if (checkbox0.checked){
    hoofdpijn = "hoofdpijn,"
    x ++
}

let checkbox1 = document.getElementById("misselijk")
if (checkbox1.checked){
    misselijk = "misselijkheid,"
    x ++
}

let checkbox2 = document.getElementById("duizelig")
if (checkbox2.checked){
    duizelig = "duizeligheid,"
    x ++
}
   
let checkbox3 = document.getElementById("keelpijn")
if (checkbox3.checked){
   keelpijn = "keelpijn,"
    x ++
}

let checkbox4 = document.getElementById("hoesten")
if (checkbox4.checked){
   hoesten = "hoesten,"
    x ++
}

// Eind resultaten maken
if (leeftijd <=18 && x >= 2){
    document.getElementById("div").innerHTML = "<span class='waarschuwing'>WAARSCHUWING! </span>" + naam + ", je hebt 3 of meer klachten, het is handig om dit te checken! Je hebt last van de volgende klachten: " + hoofdpijn  + " " + misselijk   + " " + duizelig  + " " + keelpijn  +  " " + hoesten
}
else if (leeftijd <=18 && x < 2){
    document.getElementById("div").innerHTML = "Hey, " + naam + "." + " je bent helemaal <span class='gezond'>gezond!</span>"
}
else if (leeftijd > 18 && x >=3){
    document.getElementById("div").innerHTML = "<span class='waarschuwing'>WAARSCHUWING! </span>" + naam + ", je hebt 3 of meer klachten, het is handig om dit te checken! Je hebt last van de volgende klachten: " + hoofdpijn  + " " + misselijk   + " " + duizelig  + " " + keelpijn  +  " " + hoesten
}
else if (leeftijd > 18 && x < 3){
    document.getElementById("div").innerHTML = "Hey, " + naam + "." + " je bent helemaal <span class='gezond'>gezond!</span>"
}
}
