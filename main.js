/*
zzNullbisFastEins = Math.random(); // z.B. 0.1115226324...
zzNullbisFastZehn = zzNullbisFastEins * 10; // z.b: 6.4246246246262461...
zzGanzahlNullbisNeun = Math.floor(zzNullbisFastZehn); // z.b. 3

zzGanzahlEinsbisZehn = zzGanzahlNullbisNeun + 1
*/

const zufallsZahl = Math.floor(Math.random() * 10) + 1;
console.log(zufallsZahl);

function zahlRaten(nutzerZahl) {
    let ausgabe;
    if (nutzerZahl == zufallsZahl) {
        ausgabe = "herzlichen glückwunsch";
    }
    if (nutzerZahl > zufallsZahl) {
        ausgabe = "die Zahl ist zu Groß";
    }
    if (nutzerZahl < zufallsZahl) {
        ausgabe = "die Zahl ist zu Klein";
    }
    document.getElementById("ausgabeFeld").textContent = ausgabe;
}
