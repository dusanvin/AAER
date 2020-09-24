var Express = require('express');
var Fs = require('fs');



const port = 3000;

var app = Express();
app.use(Express.json());


app.get('/', (req, res) => {
  console.log("GET REQUEST!");
})

app.post('/', (req, res) => {
    console.log("GOT POST REQUEST");
    console.log(req.body);

    res.send(req.body);

    jsObject = req.body.parse();
    console.log(jsObject);





    file_name = Date.now() + ".json"
    file_data = JSON.stringify(req.body)
    Fs.writeFile(file_name, file_data, 'utf-8', function(err) {
	       if (err) {
		         console.log("Error: File not saved.")
		         return console.log(err)
	       }
         console.log("File saved.")
    })

})


app.listen(port, () =>  {console.log('server available at port ', port); });


const jsData = {
    //Anlehnung an Curriculum und Bildungsstandards
    "Bezüge Curriculum": 0,
    "Bezüge Bildungsstandards": 1,

    //Diskursive Positionierung
    "Interessegeleitete Themenführung/Positionierung": 2,
    "Transparenz": 3,
    "Werbliche Elemente": 0,
    "Heterogenität/Gender": 1,

    //Makrodidaktische und bildungstheoretische Fundierung
    "Handlungsorientierung": 4,
    "Lebensweltlichkeit": 2,
    "Reflexion/Urteilsfähigkeit": 1,
    "Multiperspektivität/Kontroversität": 1,

    //Mikrodidaktische Umsetzung
    "Methodenpluralität": 0,
    "Multimedia/Multimodalität": 3,
    "Medienkompetenz": 1,
    "Differenzierung": 4,
    "Barrierefreiheit/Inklusion": 4,

    //Kognitive Strukturierung
    "Transfer- und Anwendungsorientierung": 2,
    "Prozessorientierung (Kumulation)": 1,
    "Lernwegunterstützende Elemente (Scaffolding)": 0,

    //Bild- und Textkomposition
    "Sprachlichkeit": 2,
    "Bildsprache": 3,
    "Additive Kommunikation (Anreicherung)": 1,

    //Aufgabendesign
    "Sequenzierung": 4,
    "Aktivierung": 1,
    "Multiple Lösungswege": 0,

    //Anwendungstransparenz
    "Didaktisches Konzept": 1,
    "Rahmenbedingungen": 2,

    //Weitere Angaben
    "Name des Lehr-Lernmittels": "keins",
    "Link": "www",
    "Eigene Anmerkungen": "test",
    "Region": 1
};