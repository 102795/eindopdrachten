function geldverdeling(){
    const totaalbedrag = 330000000000 // totaalbedrag is 330miljard


// Inputs in variabelen zetten

let a = parseFloat(document.getElementById("algemenezaken").value)|| 0;
let b = parseFloat(document.getElementById("buitenland").value)|| 0;
let c = parseFloat(document.getElementById("binnenland").value)|| 0;
let d = parseFloat(document.getElementById("financien").value)|| 0;
let e = parseFloat(document.getElementById("defensie").value)|| 0;
let f = parseFloat(document.getElementById("justitie").value)|| 0;
let g = parseFloat(document.getElementById("onderwijs").value)|| 0;
let h = parseFloat(document.getElementById("economie").value)|| 0;
let i = parseFloat(document.getElementById("infrastructuur").value)|| 0;
let j = parseFloat(document.getElementById("gezondheid").value)|| 0;
let k = parseFloat(document.getElementById("socialezaken").value)|| 0;
let l = parseFloat(document.getElementById("landbouw").value)|| 0;
let m = parseFloat(document.getElementById("wonen").value) || 0;

// Checken of alles is ingevuld en anders terug sturen
if (a == "" || b =="" || c =="" || d == "" || e == ""|| f == ""|| g == ""|| h == ""|| i == ""|| j == ""|| k == ""|| l == ""|| m == ""){
    alert("Niet alle velden zijn ingevuld!")
    return
}


// Besteed bedrag en overgebleven bedrag berekenen EN definieren
let besteedbedrag = a + b + c + d + e + f + g + h + i + j + k + l + m
let overgeblevenbedrag = totaalbedrag - besteedbedrag


// Antwoorden tonen
document.getElementById("besteedbedrag").innerHTML = besteedbedrag.toLocaleString()
document.getElementById("overgeblevenbedrag").innerHTML = overgeblevenbedrag.toLocaleString()
}