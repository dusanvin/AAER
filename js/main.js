const jsPDFmodule = require('../node_modules/jspdf/dist/jspdf.umd.js');

var button = document.getElementById('downloadBtn');
button.addEventListener('click', downloadPdf);

// $('#testBtn').click(myFunc());

var pdfFile = new jsPDFmodule.jsPDF();

function downloadPdf() {

    function datum () {
      var d = new Date();
      var month = d.getMonth()+1;
      var day = d.getDate();
      var output = ((''+day).length<2 ? '0' : '') + day + '.' + ((''+month).length<2 ? '0' : '') + month + '.' + d.getFullYear();
      return output;
    }



  // Seite 1

  canvasPdf1 = document.createElement('canvas');
  canvasPdf1.id = 'canvasPdf1';
  
  document.body.appendChild(canvasPdf1);
  canvasPdf1.width = 768;
  canvasPdf1.height = 1020;


  // Laden des Canvas-Objekts
  chartALLcanvas = document.getElementById('canvasALL');

  // Initialisierung contextPdf1-Containers
  contextPdf1 = canvasPdf1.getContext('2d');

  // Malen des Canvas-Objekts in contextPdf1-Container
  // Abstand Links, Abstand Oben, Länge, Höhe
  contextPdf1.drawImage(chartALLcanvas, 39, 179, 620, 842);

  // Initialisierung imgData1-Container in Abhängigkeit des contextPdf1-Containers
  var imgData1 = canvasPdf1.toDataURL('image/png');

  // Überschrift
  pdfFile.setFontSize(20);
  pdfFile.text(10, 19, "Übersicht Ihrer Bewertungen");

  // Unterschrift
  pdfFile.setFontSize(10);
  pdfFile.text(180, 16, datum());
  pdfFile.text(10, 29, "Die folgenden Ergebnisse erschließen sich aus Ihren Bewertungen bei der Nutzung des AAER.");

  // Name und Verlinkung
  pdfFile.text(10, 34, "Name: " + survey.getValue('Name'));
  pdfFile.text(10, 39, "Verlinkung: " + survey.getValue('Verlinkung'));

  // Hinzufügen des imgData1-Containers als PNG
  pdfFile.addImage(imgData1, 'PNG', 0, 0);

  // Legende
  pdfFile.setFontSize(8);
  pdfFile.text(65.5, 275, "0 = nicht bewertbar | 1 = trifft nicht zu | 2 = trifft weniger zu | 3 = trifft mehr zu | 4 = trifft voll zu");

  // Seitenzahlen
  pdfFile.text(10, 285, "Seite 1 / 2");



  // Seite 2

  pdfFile.addPage();

  canvasPdf2 = document.createElement('canvas');
  canvasPdf2.id = 'canvasPdf2';
  
  document.body.appendChild(canvasPdf2);
  canvasPdf2.width = 768;
  canvasPdf2.height = 1020;

  // Laden der Canvas-Objekte
  chart1canvas = document.getElementById('canvas1');
  chart2canvas = document.getElementById('canvas2');
  chart3canvas = document.getElementById('canvas3');
  chart4canvas = document.getElementById('canvas4');
  chart5canvas = document.getElementById('canvas5');
  chart6canvas = document.getElementById('canvas6');
  chart7canvas = document.getElementById('canvas7');
  chart8canvas = document.getElementById('canvas8');

  // Initialisierung contextPdf2-Container
  contextPdf2 = canvasPdf2.getContext('2d');

  // Malen der Canvas-Objekte in contextPdf2-Container
  // Abstand Links, Abstand Oben, Länge, Höhe
  contextPdf2.drawImage(chart1canvas, 39, 20+39, 340, 170);
  contextPdf2.drawImage(chart2canvas, 415, 20+93, 340, 170);
  contextPdf2.drawImage(chart3canvas, 39, 20+39+250, 340, 170);
  contextPdf2.drawImage(chart4canvas, 415, 20+39+250, 340, 170);
  contextPdf2.drawImage(chart5canvas, 39, 14+20+39+250+250, 340, 170);
  contextPdf2.drawImage(chart6canvas, 415, 20+39+250+250, 340, 170);
  contextPdf2.drawImage(chart7canvas, 39, 14+20+39+250+250+250, 340, 170);
  contextPdf2.drawImage(chart8canvas, 415, 20+39+250+250+250, 340, 170);

  // Initialisierung imgData2-Container in Abhängigkeit des contextPdf2-Containers
  var imgData2 = canvasPdf2.toDataURL('image/png');

  // Hinzufügen des imgData2-Containers als PNG
  pdfFile.addImage(imgData2, 'PNG', 0, 0);

  // Legende
  pdfFile.setFontSize(8);
  pdfFile.text(47, 275, "0 = nicht bewertbar | 1 = trifft nicht zu | 2 = trifft weniger zu | 3 = trifft mehr zu | 4 = trifft voll zu");
  
  // Seitenzahlen
  pdfFile.text(10, 285, "Seite 2 / 2");

  // Seitenname
  pdfFile.save("Uebersicht Ihrer Bewertungen mittels des AAER.pdf");

};