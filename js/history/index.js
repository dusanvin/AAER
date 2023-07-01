Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
Survey
    .StylesManager
    .applyTheme("bootstrapmaterial");

window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    event.returnValue = '';
});


// import {aaer_geschichte, fach, schularten, antworten} from './objects.js'; should be loaded in browser already


function getJson(isPresetName=false, isPresetVerlinkung=false, isPresetFach=false, isPresetSchulart=false) {
    return  {
        title: "Nutzung des Augsburger Analyse- und Evaluationsrasters für digitale und analoge Bildungsmedien (AAER) im Bereich Geschichte",
        pages: [
            {
                title: "Name des Lehr-Lernmittels", // überschrift seite
                description: "Der Name wird später in Ihrer für Sie persönlich generierten Auswertung angezeigt.",
                elements: [
                    {
                        type: "text",
                        name: "Name", // dict key, zugriff auf angegeben wert
                        title: "Bitte geben Sie den Namen des Lehr-Lernmittels an, das Sie mit Hilfe des AAER analysieren/evaluieren möchten.", // überschrift direkt vor der eingabe
                        isRequired: true,
                        readOnly: isPresetName,
                    }
                ]
            }, {
                title: "Link (optional)", 
                description: "Sie können an dieser Stelle den Link zu dem zu analysierenden/evaluierenden Lehr-Lernmittel angeben. Er wird in der abschließend für Sie generierten Auswertungsübersicht angezeigt.",
                elements: [
                    {
                        type: "text",
                        name: "Verlinkung",
                        title: "Bitte geben Sie den Link zu Ihrem Lehr-Lernmittel an (optional).",
                        isRequired: false,
                        readOnly: isPresetVerlinkung,
                    }
                ]
            }, {
                elements: [
                    {
                        type: "dropdown",
                        name: "Fach",
                        title: "Bitte teilen Sie uns mit, für welches Fach Sie das AAER nutzen (optional).",
                        defaultValue: 1,
                        readOnly: isPresetFach,
                        choices: fach
                    }
                ]
    
            }, {
                elements: [
                    {
                        type: "dropdown",
                        name: "Schulart",
                        title: "Bitte teilen Sie uns mit, für welche Schulart Sie das AAER nutzen (optional).",
                        defaultValue: 1,
                        readOnly: isPresetSchulart,
                        choices: schularten
                    }
                ]
            }, {
                title: "Ihre Meinung", 
                description: "Wir interessieren uns für Ihre Meinung: Halten Sie das Ihnen vorliegende Geschichtslehrmitteln für gut oder schlecht? Welche Kriterien ziehen Sie heran? Welche sind für Sie die entscheidenden, welche sind Ihnen weniger wichtig?",
                elements: [
                    {
                        type: "text",
                        name: "Meinung",
                        title: "Bitte teilen Sie uns hier Ihre Meinung mit.",
                        isRequired: false
                    }
                ]
            },
              
            //dimension 1 mit (0:2) Items
            {
                title: aaer_geschichte[0].items[0].name, 
                description: aaer_geschichte[0].items[0].description,
                elements: [
                    {
                        type: "radiogroup",
                        name: aaer_geschichte[0].items[0].name, // name is hidden
                        title: aaer_geschichte[0].items[0].summary,  // entspricht frage
                        description: '*'+aaer_geschichte[0].items[0].indicators,
                        descriptionLocation: 'underInput',
                        isRequired: true,
                        choices: antworten
                    }
                ]
            }, {
                title: aaer_geschichte[0].items[1].name, 
                description: aaer_geschichte[0].items[1].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[0].items[1].name, 
                                title: aaer_geschichte[0].items[1].summary,
                                description: aaer_geschichte[0].items[1].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[0].items[2].name, 
                description: aaer_geschichte[0].items[2].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[0].items[2].name, 
                                title: aaer_geschichte[0].items[2].summary,
                                description: aaer_geschichte[0].items[2].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, 
    
            //dimension 2 mit (0:1) items
            {
                title: aaer_geschichte[1].items[0].name, 
                description: aaer_geschichte[1].items[0].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[1].items[0].name, 
                                title: aaer_geschichte[1].items[0].summary,
                                description: aaer_geschichte[1].items[0].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[1].items[1].name, 
                description: aaer_geschichte[1].items[1].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[1].items[1].name, 
                                title: aaer_geschichte[1].items[1].summary,
                                description: aaer_geschichte[1].items[1].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            },
    
            //dimension3 mit (0:5) items
            {
                title: aaer_geschichte[2].items[0].name, 
                description: aaer_geschichte[2].items[0].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[2].items[0].name, 
                                title: aaer_geschichte[2].items[0].summary,
                                description: aaer_geschichte[2].items[0].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[2].items[1].name, 
                description: aaer_geschichte[2].items[1].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[2].items[1].name, 
                                title: aaer_geschichte[2].items[1].summary,
                                description: aaer_geschichte[2].items[1].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[2].items[2].name, 
                description: aaer_geschichte[2].items[2].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[2].items[2].name, 
                                title: aaer_geschichte[2].items[2].summary,
                                description: aaer_geschichte[2].items[2].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[2].items[3].name, 
                description: aaer_geschichte[2].items[3].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[2].items[3].name, 
                                title: aaer_geschichte[2].items[3].summary,
                                description: aaer_geschichte[2].items[3].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[2].items[4].name, 
                description: aaer_geschichte[2].items[4].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[2].items[4].name, 
                                title: aaer_geschichte[2].items[4].summary,
                                description: aaer_geschichte[2].items[4].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[2].items[5].name, 
                description: aaer_geschichte[2].items[5].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[2].items[5].name, 
                                title: aaer_geschichte[2].items[5].summary,
                                description: aaer_geschichte[2].items[5].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            },
    
            //dimension4 mit (0:5) items
    
            {
                title: aaer_geschichte[3].items[0].name, 
                description: aaer_geschichte[3].items[0].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[3].items[0].name, 
                                title: aaer_geschichte[3].items[0].summary,
                                description: aaer_geschichte[3].items[0].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[3].items[1].name, 
                description: aaer_geschichte[3].items[1].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[3].items[1].name, 
                                title: aaer_geschichte[3].items[1].summary,
                                description: aaer_geschichte[3].items[1].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[3].items[2].name, 
                description: aaer_geschichte[3].items[2].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[3].items[2].name, 
                                title: aaer_geschichte[3].items[2].summary,
                                description: aaer_geschichte[3].items[2].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[3].items[3].name, 
                description: aaer_geschichte[3].items[3].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[3].items[3].name, 
                                title: aaer_geschichte[3].items[3].summary,
                                description: aaer_geschichte[3].items[3].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[3].items[4].name, 
                description: aaer_geschichte[3].items[4].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[3].items[4].name, 
                                title: aaer_geschichte[3].items[4].summary,
                                description: aaer_geschichte[3].items[4].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[3].items[5].name, 
                description: aaer_geschichte[3].items[5].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[3].items[5].name, 
                                title: aaer_geschichte[3].items[5].summary,
                                description: aaer_geschichte[3].items[5].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            },
    
            //dimension5 mit (0:1) items
            {
                title: aaer_geschichte[4].items[0].name, 
                description: aaer_geschichte[4].items[0].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[4].items[0].name, 
                                title: aaer_geschichte[4].items[0].summary,
                                description: aaer_geschichte[4].items[0].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[4].items[1].name, 
                description: aaer_geschichte[4].items[1].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[4].items[1].name, 
                                title: aaer_geschichte[4].items[1].summary,
                                description: aaer_geschichte[4].items[1].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            },
    
            //dimension6 mit (0:3) items
            {
                title: aaer_geschichte[5].items[0].name, 
                description: aaer_geschichte[5].items[0].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[5].items[0].name, 
                                title: aaer_geschichte[5].items[0].summary,
                                description: aaer_geschichte[5].items[0].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[5].items[1].name, 
                description: aaer_geschichte[5].items[1].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[5].items[1].name, 
                                title: aaer_geschichte[5].items[1].summary,
                                description: aaer_geschichte[5].items[1].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[5].items[2].name, 
                description: aaer_geschichte[5].items[2].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[5].items[2].name, 
                                title: aaer_geschichte[5].items[2].summary,
                                description: aaer_geschichte[5].items[2].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[5].items[3].name, 
                description: aaer_geschichte[5].items[3].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[5].items[3].name, 
                                title: aaer_geschichte[5].items[3].summary,
                                description: aaer_geschichte[5].items[3].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            },
    
            //dimension7 mit (0:2) items
            {
                title: aaer_geschichte[6].items[0].name, 
                description: aaer_geschichte[6].items[0].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[6].items[0].name, 
                                title: aaer_geschichte[6].items[0].summary,
                                description: aaer_geschichte[6].items[0].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[6].items[1].name, 
                description: aaer_geschichte[6].items[1].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[6].items[1].name, 
                                title: aaer_geschichte[6].items[1].summary,
                                description: aaer_geschichte[6].items[1].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[6].items[2].name, 
                description: aaer_geschichte[6].items[2].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[6].items[2].name, 
                                title: aaer_geschichte[6].items[2].summary,
                                description: aaer_geschichte[6].items[2].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            },
    
            //dimension8 mit (0:1) items
            {
                title: aaer_geschichte[7].items[0].name, 
                description: aaer_geschichte[7].items[0].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[7].items[0].name, 
                                title: aaer_geschichte[7].items[0].summary,
                                description: aaer_geschichte[7].items[0].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: aaer_geschichte[7].items[1].name, 
                description: aaer_geschichte[7].items[1].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: aaer_geschichte[7].items[1].name, 
                                title: aaer_geschichte[7].items[1].summary,
                                description: aaer_geschichte[7].items[1].indicators,
                                isRequired: true,
                                choices: antworten
                            }
                        ]
            }, {
                title: "Kritikpunkte und Verbesserungsvorschläge", 
                description: "Wir wollen unser Analyse- und Evaluationsraster kontinuierlich weiterentwickeln. Hier ist Platz für Ihre Kritikpunkte und ihre Verbesserungsvorschläge. Zur Anregung: Vermissen Sie bestimmte Kriterien? Erscheint Ihnen die Reihenfolge der Kriterien logisch? Sind die einzelnen Kriteiren für Sie nachvollziehbar und verständlich verfasst?",
                elements: [
                    {
                        type: "text",
                        name: "Kritik",
                        title: "Bitte teilen Sie uns hier Ihre Kritik und Verbesserungsvorschläge mit (optional).",
                        isRequired: false,
                    }
                ]
            }, {
                title: "Eigene Anmerkungen", 
                description: "Hier können Sie eigene Kommentare zum analysierten/evaluierten Lehr-Lernmnittel einfügen, die in der Auswertung angezeigt werden.",
                elements: [
                    {
                        type: "text",
                        name: "Eigene Anmerkungen",
                        title: "Bitte geben Sie hier eigene Anmerkungen zum Lehr-Lernmittel ein (optional).",
                        isRequired: false,
                    }
                ]
            }
        ]
    };
}

var json = getJson();

// Start: Optionen der Charts

barChartOptions = {
    animation: {
        duration: 0 // general animation time
    },
    responsiveAnimationDuration: 0, // animation duration after a resize
    scales: {
        yAxes: [{
            ticks: {
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold",
                display: true,
                max: 4,
                stepSize: 1,
                beginAtZero: true
            },
            gridLines: {
                display: true
            }
        }],
        xAxes: [{
            gridLines: {
                display: true
            },
            ticks: {
                display: true
            }
        }]
    }
};

// Ende: Optionen der Charts


// Start: Charts Section

Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.callbacks.title = (tooltipItems, data) => { return tooltipItems[0].label.split(',') };

Chart.defaults.global.datasets.bar.maxBarThickness = 70

var charts = [];

let ids = ['chart1', 'chart2', 'chart3', 'chart4', 'chart5', 'chart6', 'chart7', 'chart8']
let colors = ['#003f5c', '#2f4b7c', '#665191', '#a05195', '#d45087', '#f95d6a', '#ff7c43', '#ffa600']


function generateBarChart(index) {

    let canvas = window.document.getElementById(ids[index]);

    let submittedData = [];
    aaer_geschichte[index].items.forEach(function (question) {
        submittedData.push(survey.getValue(question.name))
    })

    let chartData = {
        labels: aaer_geschichte[index].labels,
        datasets: [{
            backgroundColor: colors[index],
            data: submittedData
        }]
    }

    let chart = new Chart(canvas, {
        type: 'bar',
        data: chartData,
        options: barChartOptions
    })

    return chart;

}


function generateOverallChart() {

    let canvas = document.getElementById('overallChart');

    let labels = [];
    aaer_geschichte.forEach( obj => { labels = labels.concat(obj.labels) });

    let values = [];
    labels.forEach( label => { values.push(survey.getValue(label)) });

    let bar_colors = [];
    aaer_geschichte.forEach( (item, index) => { 
        for(let i = 0; i < item.labels.length; i++) {
            bar_colors.push(colors[index]);
        }
    });

    let sorted = [];

    for (let i = 0; i < labels.length; i++) {
        sorted.push({ 'label': labels[i], 'value': values[i], 'color': bar_colors[i] });
    }

    sorted.sort(function (a, b) {
        return ((a.value > b.value) ? -1 : ((a.value == b.value) ? 0 : 1));
    })

    for (let i = 0; i < sorted.length; i++) {
        labels[i] = sorted[i].label;
        values[i] = sorted[i].value;
        bar_colors[i] = sorted[i].color;
    }

    let data = {
        labels: labels,
        datasets: [{
            label: "Übersichts-Chart",
            backgroundColor: bar_colors,
            data: values
        }]
    };

    let chart = new Chart(canvas, {
        type: 'horizontalBar',
        data: data,
        options: {
            legend: {
                display: false
            },
            animation: {
                duration: 0
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    ticks: {
                        max: 4,
                        min: 0,
                        stepSize: 1
                    }
                }]
            }
        }
    });

    return chart;

}


function generateRadarChart() {

    let labels = [];
    aaer_geschichte.forEach( obj => { 
        labels.push('');
        labels = labels.concat(obj.labels);
    });
    let values = [];
    labels.forEach( label => {
        if (!label) 
           values.push(0);
        else
            values.push(survey.getValue(label))
    });

    let radar_colors = [];
    aaer_geschichte.forEach( (item, index) => { 
        radar_colors.push("#ffffff");
        for(let i = 0; i < item.labels.length; i++) {
            radar_colors.push(colors[index]);
        }
    });

    let data = {
        labels: labels,
        datasets: [{
            label: "Übersichts-Chart",
            backgroundColor: "rgba(140, 140, 140, 0.15)", //colorsRadar
            data: values,
            lineTension: 0.1
        }]
    };

    let canvas = document.getElementById('radarChart');
    let chart = new Chart(canvas, {
        type: 'radar',
        data: data,
        options: {
            legend: {
                display: false
            },
            events: [],
            maintainAspectRatio: false,
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 4,
                    min: 0,
                    stepSize: 1
                }
            }
        }
    });

    return chart;
}


function generateCharts() {

    if (charts.length) {
        charts.forEach(chart => chart.destroy())
    }

    charts = []; 

    charts.push(generateOverallChart());
    charts.push(generateRadarChart())

    for (let i=0; i < ids.length; i++) {
        charts.push(generateBarChart(i))
    }

}


// Start: Eingabe durch Enter-Taste als Alternative zum Button "Weiter" und zum Button "Fertig"

$(document).on('keypress', function (e) {
    //13 fuer Enter
    if (e.which == 13) {
        //Fertig
        if ($(document.querySelector("#sq_129i")).length > 0) {
            document.querySelector(".sv_complete_btn").click();
            return;
        }
        //Weiter
        else if (typeof (document.getElementsByClassName("sv_next_btn")) != 'undefined' && document.getElementsByClassName("sv_next_btn") != null) {
            document.querySelector(".sv_next_btn").click();
        }
        else return;
    }
});

// Ende: Eingabe durch Enter-Taste als Alternative zum Button "Weiter" und zum Button "Fertig"


// Start: Dynamische Progress Bar in Abhängigkeit der Klasse .sv_q_num

$(".sv_next_btn").click(function () {

    let res = "";
    let specialChar = ".";

    // Holen Nummer mit Punkt
    res = $(".sv_q_num").html();

    // Eliminierung von Punkt
    for (let i = 0; i < specialChar.length; i++) {
        let active = res.replace(new RegExp("\\" + specialChar[i], "gi"), "");
    }

    // Multiplikator zur Hochrechnung des Fortschritts
    active = active * 3.25;

    // Zusammenfügen als String
    res = active + "%";

    // Einfügen der width-property zur Darstellung des Fortschritts
    let progress = $(".progress-bar").css("width", res);

});


function forward(index) {
    let data = {
        "Name": "name_index_" + index,
        "Verlinkung": "link_index_" + index,
        "Fach": "Englisch",
        "Schulart": "Hochschule",
        "Meinung": "meinung_index_" + index,
        "Kongruenz mit den fachspezifischen Zielen des Lehrplans": 3,
        "Kongruenz mit den fachspezifischen Kompetenzen des Lehrplans": 3,
        "Kongruenz mit den fachspezifischen Inhaltsfeldern des Lehrplans": 3,
        "Trennung von historischer (Sach-)information und Deutung/Wertung": 3,
        "Verfassungskonforme, antidiskriminierende Geschichtsbilder": 3,
        "Wissenschaftsorientierung": 3,
        "Quellen-/Methodenorientierung": 3,
        "Multiperspektivität i. e. S.": 3,
        "Kontroversität": 3,
        "Pluralität": 3,
        "Gegenwarts-/Zukunftsorientierung": 3,
        "Unterscheidungen von historischen Quellen und Darstellungen": 3,
        "Charakter der historischen Quellen": 3,
        "Charakter der Darstellungen": 3,
        "Methode der (Re-)Konstruktion von Geschichte (Quellenarbeit)": 3,
        "Methode der Dekonstruktion vorhandener Darstellungen": 3,
        "Methode des Historischen Vergleichs": 3,
        "Kumulation von historischen Wissensdimensionen": 3,
        "Progression und Transfer/Anwendung von historischen Kompetenzen": 3,
        "Narrative Struktur und Sprache": 3,
        "Fachvokabular und Begriffe": 3,
        "Fachspezifische Bildfunktion": 3,
        "Fachspezifische Paratexte/Hilfsdiskurse": 3,
        "Aktivierende gegenwartsrelevante, historische Leitfragen als Lernimpuls": 3,
        "Sequenzierung und Angemessenheit des historischen Aufgabensettings": 3,
        "Materiell-Methodische Schwerpunktsetzung des historischen Aufgabensettings": 3,
        "Didaktisches Konzept": 3,
        "Rahmenbedingungen": 3,
        "Kritik": "verbesserungsvorschlag_index_" + index,
        "Eigene Anmerkungen": "anmerkungen_index_" + index
    }
    
	let json = getJson();
	window.survey = new Survey.Model(json);  // global: window.

	$("#surveyElement").Survey({ model: survey });

    startEvaluation(true, data);

}