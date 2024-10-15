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
        return
    }
    // Variabelen maken
    let leeftijd = document.getElementById("leeftijdinput").value
    let naam = document.getElementById("nameinput").value
    
    // Zeker weten dat leeftijd een nummer is
    leeftijd = Number(leeftijd)
    
    
    
    // Checken of de checkboxes zijn aangevinkt en zoja dan 1 toevoegen aan x
    let checkbox0 = document.getElementById("hoofdpijn")
    if (checkbox0.checked){
        hoofdpijn = "hoofdpijn,".toUpperCase()
        x ++
    }
    
    let checkbox1 = document.getElementById("misselijk")
    if (checkbox1.checked){
        misselijk = "misselijkheid,".toUpperCase()
        x ++
    }
    
    let checkbox2 = document.getElementById("duizelig")
    if (checkbox2.checked){
        duizelig = "duizeligheid,".toUpperCase()
        x ++
    }
       
    let checkbox3 = document.getElementById("keelpijn")
    if (checkbox3.checked){
       keelpijn = "keelpijn,".toUpperCase()
        x ++
    }
    
    let checkbox4 = document.getElementById("hoesten")
    if (checkbox4.checked){
       hoesten = "hoesten,".toUpperCase()
        x ++
    }
    
    // Eind resultaten maken
    if (leeftijd <=18 && x >= 3){
        document.getElementById("div").innerHTML = "<span class='waarschuwing'>WAARSCHUWING! </span>" + (naam.substring(0, 1)).toUpperCase() + (naam.substring(1)) + ", je hebt 3 of meer klachten, het is handig om dit te checken! Je hebt last van de volgende klachten: "+ "<br>" + hoofdpijn  + " " + misselijk   + " " + duizelig  + " " + keelpijn  +  " " + hoesten
    }
    else if (leeftijd <=18 && x <= 2){
        document.getElementById("div").innerHTML = "Hey, " + (naam.substring(0, 1)).toUpperCase() + (naam.substring(1)) + "." + " je bent helemaal <span class='gezond'>gezond!</span>"

    }
    else if (leeftijd > 18 && x >=2){
        document.getElementById("div").innerHTML = "<span class='waarschuwing'>WAARSCHUWING! </span>" + (naam.substring(0, 1)).toUpperCase() + (naam.substring(1)) + ", je hebt 3 of meer klachten, het is handig om dit te checken! Je hebt last van de volgende klachten: " + "<br>" + hoofdpijn  + " " + misselijk   + " " + duizelig  + " " + keelpijn  +  " " + hoesten
    }
    else if (leeftijd > 18 && x < 2){
        document.getElementById("div").innerHTML = "Hey, " + (naam.substring(0, 1)).toUpperCase() + (naam.substring(1)) + "." + " je bent helemaal <span class='gezond'>gezond!</span>"
    }
    }
