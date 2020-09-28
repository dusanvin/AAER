const jsPDFmodule = require('../node_modules/jspdf/dist/jspdf.umd.js');

var button = document.getElementById('downloadBtn');
button.addEventListener('click', downloadPdf);

// $('#testBtn').click(myFunc());

var pdfFile = new jsPDFmodule.jsPDF('p', 'px', 'a4'); // 595.28x841.89

function downloadPdf() {

    function datum () {
      var d = new Date();
      var month = d.getMonth()+1;
      var day = d.getDate();
      var output = ((''+day).length<2 ? '0' : '') + day + '.' + ((''+month).length<2 ? '0' : '') + month + '.' + d.getFullYear();
      return output;
    }



  // Seite 1


  // Laden des Canvas-Objekts
  canvas0 = document.getElementById('canvasALL');
  context0 = canvas0.getContext('2d');

  // Umwandeln in PNG
  var imgData1 = canvas0.toDataURL('image/png', 1.0);

  // Überschrift
  pdfFile.setFontSize(16);
  pdfFile.text(30, 30, "Übersicht Ihrer Bewertungen");

  // Unterschrift
  pdfFile.setFontSize(10);
  pdfFile.text(370, 30, datum() + '\nSeite 1/2');
  pdfFile.text(30, 45, "Die folgenden Ergebnisse erschließen sich aus Ihren Bewertungen bei der Nutzung des AAER.\n\nName:" + survey.getValue('Name') + "\nLink: " + survey.getValue('Verlinkung') + "\nRegion: " + regionen[survey.getValue('Region') - 1].text + "\nAnmerkungen: " + survey.getValue('Eigene Anmerkungen'));

  // Name und Verlinkung
  // pdfFile.text(30, 70, "Name: " + survey.getValue('Name'));
  // pdfFile.text(30, 90, "Verlinkung: " + survey.getValue('Verlinkung'));

  // Hinzufügen des imgData1-Containers als PNG
  // Breite von PDF 447
  pdfFile.addImage(imgData1, 'PNG', 30, 120, 270, 326);

  // Legende
  // pdfFile.setFontSize(8);
  // pdfFile.text(65.5, 275, "0 = nicht bewertbar | 1 = trifft nicht zu | 2 = trifft weniger zu | 3 = trifft mehr zu | 4 = trifft voll zu");
  pdfFile.text(310, 140, 'Legende: \n\n0 = nicht bewertbar\n1 = trifft nicht zu\n2 = trifft weniger zu\n3 = trifft mehr zu\n4 = trifft voll zu');


  // Seitenzahlen
  // pdfFile.text(10, 285, "Seite 1 / 2");



  // Seite 2

  pdfFile.addPage();

  canvasPdf2 = document.createElement('canvas');
  canvasPdf2.id = 'canvasPdf2';
  
  document.body.appendChild(canvasPdf2);
  canvasPdf2.width = 595;
  canvasPdf2.height = 842;

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
  // contextPdf2.drawImage(chart1canvas, 39, 20+39, 340, 170);
  // contextPdf2.drawImage(chart2canvas, 415, 20+93, 340, 170);
  // contextPdf2.drawImage(chart3canvas, 39, 20+39+250, 340, 170);
  // contextPdf2.drawImage(chart4canvas, 415, 20+39+250, 340, 170);
  // contextPdf2.drawImage(chart5canvas, 39, 14+20+39+250+250, 340, 170);
  // contextPdf2.drawImage(chart6canvas, 415, 20+39+250+250, 340, 170);
  // contextPdf2.drawImage(chart7canvas, 39, 14+20+39+250+250+250, 340, 170);
  // contextPdf2.drawImage(chart8canvas, 415, 20+39+250+250+250, 340, 170);

  let a1 = 0;
  let a2 = 376;

  let h1 = 59;
  let h2 = h1 + 250;
  let h3 = h2 + 250;
  let h4 = h3 + 250;



  contextPdf2.drawImage(chart1canvas, a1, h1, 340, 170);
  contextPdf2.drawImage(chart2canvas, a2, h1, 340, 170);
  contextPdf2.drawImage(chart3canvas, a1, h2, 340, 170);
  contextPdf2.drawImage(chart4canvas, a2, h2, 340, 170);
  contextPdf2.drawImage(chart5canvas, a1, h3, 340, 170);
  contextPdf2.drawImage(chart6canvas, a2, h3, 340, 170);
  contextPdf2.drawImage(chart7canvas, a1, h4, 340, 170);
  contextPdf2.drawImage(chart8canvas, a2, h4, 340, 170);

  // Initialisierung imgData2-Container in Abhängigkeit des contextPdf2-Containers
  var imgData2 = canvasPdf2.toDataURL('image/png', 1.0);

  // Hinzufügen des imgData2-Containers als PNG
  pdfFile.addImage(imgData2, 'PNG', 39, 0);

  // Legende
  pdfFile.setFontSize(8);
  pdfFile.text(47, 275, "0 = nicht bewertbar | 1 = trifft nicht zu | 2 = trifft weniger zu | 3 = trifft mehr zu | 4 = trifft voll zu");
  
  // Seitenzahlen
  pdfFile.text(10, 285, "Seite 2 / 2");

  // Seitenname
  pdfFile.save("Uebersicht Ihrer Bewertungen mittels des AAER.pdf");

};