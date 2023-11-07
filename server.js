const http = require ("http");

const dotenv = require ("dotenv");
dotenv.config();
// forma contratta
// require("dotenv").config();

const port = process.env.PORT || 3000;

const frasiIspirazionali = [ 
    "La vita è per il 10% cosa ti accade e per il 90% come reagisci. (Charles R. Swindoll)",
    "Ci sono due regole nella vita: 1. Non mollare mai; 2. Non dimenticare mai la regola n° 1. (Duke Ellington)",
    "Se qualcosa non ti piace, cambiala. Se non puoi cambiarla, cambia il tuo atteggiamento. Non lamentarti. (Maya Angelou)",
    "Se vuoi qualcosa che non hai mai avuto, devi fare qualcosa che non hai mai fatto. (Thomas Jefferson)",
    "Non essere una 'se-potessi-sarei o una se-volessi-potrei-essere'. Sii e basta. (Sarah Ban Breathnach)",
    "Il mio scopo nella vita? Fare solo cose positive. (Zendaya)",
    "Prima ti ignorano, poi ti deridono, poi ti combattono. Poi vinci. (Mahatma Gandhi)",
    "Non è mai troppo tardi per essere ciò che avresti voluto essere (George Eliot)",
    "È nel momento delle decisioni che si plasma il tuo destino.” – Anthony Robbins",
    "Niente è davvero difficile se lo si divide in tanti piccoli pezzettini. Henry Ford"
]

// funzione per scrivere in html
function htmlResponse(res, content) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content);
}


// creo il server
const server = http.createServer(function (req, res){

    // dico cosa deve fare, in questo caso gli dico che deve rispondere con una stringa oppure manipolando i tag html come in questo caso
    // res.end(`
    // <h1>Il server funziona!</h1>
    // Il codice &egrave; ${process.env.CODICE} 
    // `);

    // oppure direttamente tramite funzione
    htmlResponse(res, `<h1>Il server funziona!</h1>
    Il codice &egrave; ${process.env.CODICE} `
    );


});

// avvio il serverg
server.listen(port,function(){

    console.log("Il server si trova sulla porta:" + port)
});