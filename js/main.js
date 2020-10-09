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


  // Überschrift
  pdfFile.setFontSize(16);
  pdfFile.text(30, 30, "Übersicht Ihrer Bewertungen");

  // Textinformationen
  pdfFile.setFontSize(10);
  pdfFile.text(370, 30, datum() + '\nSeite 1/2');
  pdfFile.text(30, 45, "Die folgenden Ergebnisse erschließen sich aus Ihren Bewertungen bei der Nutzung des AAER.\n\nName:" + survey.getValue('Name') + "\nLink: " + survey.getValue('Verlinkung') + "\nSchulart: " + schularten[survey.getValue('Schulart') - 1].text + "\nFach: " + fach[survey.getValue('Fach') - 1].text + "\nAnmerkungen: " + survey.getValue('Eigene Anmerkungen'));

  // Chart 0
  canvas0 = document.getElementById('canvasALL');
  var imgData0 = canvas0.toDataURL('image/png', 1.0);
  pdfFile.addImage(imgData0, 'PNG', 30, 120, 270, 326); // Breite von PDF 447

  // Legende
  pdfFile.text(350, 140, 'Legende: \n\n0 = nicht bewertbar\n1 = trifft nicht zu\n2 = trifft weniger zu\n3 = trifft mehr zu\n4 = trifft voll zu');

  // Chart 1
  canvas1 = document.getElementById('canvas1');
  var imgData1 = canvas1.toDataURL('image/png', 1.0);
  pdfFile.addImage(imgData1, 'PNG', 30, 450, 155, 95);

  // Chart 8
  canvas8 = document.getElementById('canvas8');
  var imgData8 = canvas8.toDataURL('image/png', 1.0);
  pdfFile.addImage(imgData8, 'PNG', 210, 450, 155, 95);




  // Seite 2


  pdfFile.addPage();

  // Textinformationen
  pdfFile.text(370, 30, datum() + '\nSeite 2/2');

  // Variablen für Charts

  let a1 = 30;
  let imgHeight = 95;

  let imgWidth3 = 232;
  let imgWidth4 = 310;
  let imgWidth5 = 387;

  let next = imgHeight + 5;

  h1 = 24;
  h2 = h1 + next;
  h3 = h2 + next;
  h4 = h3 + next;
  h5 = h4 + next;
  h6 = h5 + next;

  // Chart 2
  canvas2 = document.getElementById('canvas2');
  var imgData2 = canvas2.toDataURL('image/png', 1.0);
  pdfFile.addImage(imgData2, 'PNG', a1, h1, imgWidth4, imgHeight);

  // Chart 3
  canvas3 = document.getElementById('canvas3');
  var imgData3 = canvas3.toDataURL('image/png', 1.0);
  pdfFile.addImage(imgData3, 'PNG', a1, h2, imgWidth4, imgHeight);

  // Chart 4
  canvas4 = document.getElementById('canvas4');
  var imgData4 = canvas4.toDataURL('image/png', 1.0);
  pdfFile.addImage(imgData4, 'PNG', a1, h3, imgWidth5, imgHeight);

  // Chart 5
  canvas5 = document.getElementById('canvas5');
  var imgData5 = canvas5.toDataURL('image/png', 1.0);
  pdfFile.addImage(imgData5, 'PNG', a1, h4, imgWidth3, imgHeight);

  // Chart 6
  canvas6 = document.getElementById('canvas6');
  var imgData6 = canvas6.toDataURL('image/png', 1.0);
  pdfFile.addImage(imgData6, 'PNG', a1, h5, imgWidth3, imgHeight);

  // Chart 7
  canvas7 = document.getElementById('canvas7');
  var imgData7 = canvas7.toDataURL('image/png', 1.0);
  pdfFile.addImage(imgData7, 'PNG', a1, h6, imgWidth3, imgHeight);

  // Legende
  pdfFile.text(340, h6 + 30, 'Legende: \n\n0 = nicht bewertbar\n1 = trifft nicht zu\n2 = trifft weniger zu\n3 = trifft mehr zu\n4 = trifft voll zu');

  // Seitenname
  pdfFile.save("Uebersicht Ihrer Bewertungen mittels des AAER.pdf");

};