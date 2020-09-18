var Express = require('express');
var Fs = require('fs');

var d3 = require('d3');
const D3Node = require('d3-node');


const port = 3000;

var app = Express();
app.use(Express.json());


app.get('/', (req, res) => {
  console.log("GET REQUEST!");
})

app.post('/', (req, res) => {
    console.log("GOT POST REQUEST");
    console.log(req.body);
    //res.send(req.body)
    res.set('Content-Disposition','attachment;filename=pdffile.pdf');
    res.set('Content-Type', 'application/pdf');

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

const d3n = new D3Node();
d3n.createSVG(10,20).append('g');
console.log(d3n.svgString());

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

function grp1Chart()
{
    const keys = Object.keys(jsData);

    const margin = {top: 10, right: 20, bottom: 30, left: 30};

    const width = 400 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const data = [keys[0], keys[1]]; // Hier stehen einfach Strings zur Beschriftung der x-Achse

    const xScale = d3.scaleBand() // Aufteilung der x-Achse
        .padding(0.2)
        .domain(data)
        .range([0, width]);

    const yScale = d3.scaleLinear() // Aufteilung der y-Achse von 0 bis 4
        .domain([0, 4])
        .range([height, 0]);

    const svg = d3.select('#grp1Chart')
        .append('svg') // Anfügen svg->DOM-Element
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          //.call(responsivefy) // this is all it takes to make the chart responsive
        .append('g') // Anfügen g->svg
          .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const graphArea = svg
        .append('g'); // Anfügen g->svg.g

    let defs = svg.append("defs"); // Anfügen defs->svg.g

    let gradient = defs.append("linearGradient") // Farbübergang senkrecht
        .attr("id", "svgGradient")
        //.attr("x1", "0%")
        //.attr("x2", "100%")
        //.attr("y1", "0%")
        //.attr("y2", "100%");
        .attr('gradientTransform', 'rotate(90)');

    gradient.append("stop") // Man fängt oben an
        .attr('class', 'start')
        .attr("offset", "0%")
        .attr("stop-color", 'green')
        .attr("stop-opacity", 1);

    gradient.append("stop")
        .attr('class', 'end')
        .attr("offset", "100%")
        .attr("stop-color", 'white')
        .attr("stop-opacity", 0.7);

    defs // Erstellt das Chart
        .append('clipPath')
        .attr('id', 'clip-bar-rects')
        .selectAll('bar')
        .data([survey.getValue('Bezüge Curriculum'), survey.getValue('Bezüge Bildungsstandards')])
        .enter()
        .append('rect')
        .attr('x', (d, i) => xScale(data[i]))
        .attr('y', d => yScale(d))
        .attr('width', d => xScale.bandwidth())
        .attr('height', d => height - yScale(d))
        .attr("clip-path", "url(#clip-bar-rects)")
        .attr('fill', 'url(#svgGradient)');

    const clipPath = graphArea // An die Fläche wird der Bereich angebracht, auf den die Balken kommen.
        .append('g')
        .attr('clip-path', 'url(#clip-bar-rects)');

    clipPath // Fläche, die man benötigt, um die Balken zu färben.
        .append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', width)
        .attr('height', height)
        .style('fill', 'url(#svgGradient)');


    svg.append('g').call(d3.axisLeft(yScale).ticks(4)); // y-Achse mit yScale[vorher definiert]

    svg.append('g') // x-Achse mit xScale[vorher definiert]
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));
}
