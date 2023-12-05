Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
Survey
    .StylesManager
    .applyTheme("bootstrapmaterial");

window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    event.returnValue = '';
});

// Survey.englishStrings.optionsCaption = "Wählen..."

function getJson(isPresetName=false, isPresetLink=false, isPresetSchulart=false) {
    let schools = sessionStorage.getItem("language") == 'En' ? schools_history_en : schools_history_de
    let answers = sessionStorage.getItem("language") == 'En' ? answers_history_en : answers_history_de
    let aaer = sessionStorage.getItem("language") == 'En' ? surveyTextHistoryEn : surveyTextHistoryDe

    return  {
        title: "Nutzung des Augsburger Analyse- und Evaluationsrasters für digitale und analoge Bildungsmedien (AAER) im Bereich Geschichte",
        pages: [
            {
                title: aaer[0].name,
                description: aaer[0].description,
                elements: [
                    {
                        type: "text",
                        name: "Name",
                        title: aaer[0].summary,
                        isRequired: true,
                        readOnly: isPresetName,
                    }
                ]
            }, {
                title: aaer[1].name,
                description: aaer[1].description,
                elements: [
                    {
                        type: "text",
                        name: "Verlinkung",
                        title: aaer[1].summary,
                        isRequired: false,
                        readOnly: isPresetLink,
                    }
                ]
            }, {
                elements: [
                    {
                        type: "dropdown",
                        name: "Schulart",
                        title: aaer[2].summary,
                        readOnly: isPresetSchulart,
                        showOptionsCaption: false,
                        choices: schools
                    }
                ]
            }, {
                title: aaer[3].name,
                description: aaer[3].description,
                elements: [
                    {
                        type: "text",
                        name: "Meinung",
                        title: aaer[3].summary,
                        isRequired: true
                    }
                ]
            },
              
            //dimension 1 mit (0:2) Items
            {
                title: aaer[4].name,
                description: aaer[4].description,
                elements: [
                    {
                        type: "radiogroup",
                        name: "I",
                        title: aaer[4].summary,
                        description: '*' + aaer[4].indicators,
                        descriptionLocation: 'underInput',
                        isRequired: true,
                        choices: answers
                    }
                ]
            }, {
                title: aaer[5].name,
                description: aaer[5].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "II",
                                title: aaer[5].summary,
                                description: '*' + aaer[5].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[6].name,
                description: aaer[6].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "III",
                                title: aaer[6].summary,
                                description: '*' + aaer[6].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, 
    
            //dimension 2 mit (0:1) items
            {
                title: aaer[7].name,
                description: aaer[7].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "IV",
                                title: aaer[7].summary,
                                description: '*' + aaer[7].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[8].name,
                description: aaer[8].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "V",
                                title: aaer[8].summary,
                                description: '*' + aaer[8].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            },
    
            //dimension3 mit (0:5) items
            {
                title: aaer[9].name,
                description: aaer[9].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "VI",
                                title: aaer[9].summary,
                                description: '*' + aaer[9].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[10].name,
                description: aaer[10].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "VII",
                                title: aaer[10].summary,
                                description: '*' + aaer[10].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[11].name,
                description: aaer[11].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "VIII",
                                title: aaer[11].summary,
                                description: '*' + aaer[11].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[12].name,
                description: aaer[12].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "IX",
                                title: aaer[12].summary,
                                description: '*' + aaer[12].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[13].name,
                description: aaer[13].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "X",
                                title: aaer[13].summary,
                                description: '*' + aaer[13].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[14].name,
                description: aaer[14].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "XI",
                                title: aaer[14].summary,
                                description: '*' + aaer[14].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            },
    
            //dimension4 mit (0:5) items
            {
                title: aaer[15].name,
                description: aaer[15].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "XII",
                                title: aaer[15].summary,
                                description: '*' + aaer[15].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[16].name,
                description: aaer[16].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "XIII",
                                title: aaer[16].summary,
                                description: '*' + aaer[16].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[17].name,
                description: aaer[17].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "XIV",
                                title: aaer[17].summary,
                                description: '*' + aaer[17].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[18].name,
                description: aaer[18].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "XV",
                                title: aaer[18].summary,
                                description: '*' + aaer[18].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[19].name,
                description: aaer[19].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "XVI",
                                title: aaer[19].summary,
                                description: '*' + aaer[19].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[20].name,
                description: aaer[20].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "XVII",
                                title: aaer[20].summary,
                                description: '*' + aaer[20].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            },
    
            //dimension5 mit (0:1) items
            {
                title: aaer[21].name,
                description: aaer[21].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "XVIII",
                                title: aaer[21].summary,
                                description: '*' + aaer[21].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[22].name,
                description: aaer[22].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "XIX",
                                title: aaer[22].summary,
                                description: '*' + aaer[22].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            },
    
            //dimension6 mit (0:3) items
            {
                title: aaer[23].name,
                description: aaer[23].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "XX",
                                title: aaer[23].summary,
                                description: '*' + aaer[23].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[24].name,
                description: aaer[24].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "XXI",
                                title: aaer[24].summary,
                                description: '*' + aaer[24].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[25].name,
                description: aaer[25].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "XXII",
                                title: aaer[25].summary,
                                description: '*' + aaer[25].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[26].name,
                description: aaer[26].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "XXIII",
                                title: aaer[26].summary,
                                description: '*' + aaer[26].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            },
    
            //dimension7 mit (0:2) items
            {
                title: aaer[27].name,
                description: aaer[27].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "XXIV",
                                title: aaer[27].summary,
                                description: '*' + aaer[27].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[28].name,
                description: aaer[28].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "XXV",
                                title: aaer[28].summary,
                                description: '*' + aaer[28].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[29].name,
                description: aaer[29].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "XXVI",
                                title: aaer[29].summary,
                                description: '*' + aaer[29].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            },
    
            //dimension8 mit (0:1) items
            {
                title: aaer[30].name,
                description: aaer[30].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "XXVII",
                                title: aaer[30].summary,
                                description: '*' + aaer[30].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[31].name,
                description: aaer[31].description,
                elements: [
                            {
                                type: "radiogroup",
                                name: "XXVIII",
                                title: aaer[31].summary,
                                description: '*' + aaer[31].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: aaer[32].name,
                description: aaer[32].description,
                elements: [
                    {
                        type: "text",
                        name: "Kritik",
                        title: aaer[32].summary,
                        isRequired: true,
                    }
                ]
            }, {
                title: aaer[33].name,
                description: aaer[33].description,
                elements: [
                    {
                        type: "text",
                        name: "Eigene Anmerkungen",
                        title: aaer[33].summary,
                        isRequired: false,
                    }
                ]
            }
        ],
        "showQuestionNumbers": "off"
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

let labels_en = [
    ['Congruence with the subject-specific goals according to the curriculum', 'Congruence with the subject-specific competencies according to the curriculum', 'Congruence with the subject-specific topical fields according to the curriculum'],
    [['Distinguishing historical (topical) information', 'from interpretation/personal judgement'], ['Conceptions of history:', 'Non-discriminating and in conformity with the constitution']],
    ['Orientation at science', 'Orientation at sources/methods', 'Multiperspectivity', 'Controversity', 'Plurality', 'Orientation at the present/future'],
    ['Distinguishing historical sources and representations', 'The nature of the used historical sources', 'The nature of the used representations', 'The method of the (re)construction of history (source work)', 'The method of the deconstruction of representations', 'The methode of historical comparison'],
    ['Accumulation of dimensions of historical knowledge', 'The transfer/application of historical competencies'],
    ['Narrative structure and language', 'Narrative structure and language', 'Subject-related vocabulary and terms', 'Subject-specific function of images', 'Subject-specific paratexts/support discourses'],
    ['Activating, historical guiding questions with present-time relevance', 'Sequencing the historical setting of tasks', 'The material-methodical focus of the historical setting of tasks'],
    ['Didactical concept', 'General conditions']
]
let labels_de = [
    ['Kongruenz mit den fachspezifischen Zielen des Lehrplans', 'Kongruenz mit den fachspezifischen Kompetenzen des Lehrplans', 'Kongruenz mit den fachspezifischen Inhaltsfeldern des Lehrplans'],
    ['Trennung von historischer (Sach-)information und Deutung/Wertung', 'Verfassungskonforme, antidiskriminierende Geschichtsbilder'],
    ['Wissenschaftsorientierung', 'Quellen-/Methodenorientierung', 'Multiperspektivität i. e. S.', 'Kontroversität', 'Pluralität', 'Gegenwarts-/Zukunftsorientierung'],
    ['Unterscheidungen von historischen Quellen und Darstellungen', 'Charakter der historischen Quellen', 'Charakter der Darstellungen', 'Methode der (Re-)Konstruktion von Geschichte (Quellenarbeit)', 'Methode der Dekonstruktion vorhandener Darstellungen', 'Methode des Historischen Vergleichs'],
    ['Kumulation von historischen Wissensdimensionen', 'Progression und Transfer/Anwendung von historischen Kompetenzen'],
    ['Narrative Struktur und Sprache', 'Fachvokabular und Begriffe', 'Fachspezifische Bildfunktion', 'Fachspezifische Paratexte/Hilfsdiskurse'],
    ['Aktivierende gegenwartsrelevante, historische Leitfragen als Lernimpuls', 'Sequenzierung und Angemessenheit des historischen Aufgabensettings', 'Materiell-Methodische Schwerpunktsetzung des historischen Aufgabensettings'],
    ['Didaktisches Konzept', 'Rahmenbedingungen']
]


function generateBarChart(index) {
    let names = [
        ['I', 'II', 'III'],
        ['IV', 'V'],
        ['VI', 'VII', 'VIII', 'IX', 'X', 'XI'],
        ['XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII'],
        ['XVIII', 'XIX'],
        ['XX', 'XXI', 'XXII', 'XXIII'],
        ['XXIV', 'XXV', 'XXVI'],
        ['XXVII', 'XXVIII']
    ]

    let canvas = window.document.getElementById(ids[index]);

    let submittedData = [];
    names[index].forEach(function (name) {
        submittedData.push(survey.getValue(name))
    })

    let chartData = {
        labels: sessionStorage.getItem("language") == 'En' ? labels_en[index] : labels_de[index],
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

    let labels = []
    let _labels = sessionStorage.getItem("language") == 'En' ? labels_en : labels_de
    _labels.forEach(arr => {
        labels = labels.concat(arr)
    })
    
    let values = [];

    names.forEach( name => { values.push(survey.getValue(name)) });

    let bar_colors = [];
    dimensionsHistoryEn.forEach( (dimension, index) => { 
        for(let i = 0; i < dimension.count; i++) {
            bar_colors.push(colors[index]);
        }
    });

    let sorted = [];

    for (let i = 0; i < names.length; i++) {
        sorted.push({ 'name': labels[i], 'value': values[i], 'color': bar_colors[i] });
    }

    sorted.sort(function (a, b) {
        return ((a.value > b.value) ? -1 : ((a.value == b.value) ? 0 : 1));
    })

    for (let i = 0; i < sorted.length; i++) {
        names[i] = sorted[i].name;
        values[i] = sorted[i].value;
        bar_colors[i] = sorted[i].color;
    }

    let data = {
        labels: names,
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

    let values = [];
    names.forEach( name => {
        values.push(survey.getValue(name))
    });

    let labels = []
    let _labels = sessionStorage.getItem("language") == 'En' ? labels_en : labels_de
    _labels.forEach(arr => {
        labels = labels.concat(arr)
    })

    let radar_colors = [];
    dimensionsHistoryEn.forEach( (dimension, index) => { 
        radar_colors.push("#ffffff");
        for(let i = 0; i < dimension.count; i++) {
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
        "Schulart": "Hochschule",
        "Meinung": "meinung_index_" + index,  //
        "Kongruenz mit den fachspezifischen Zielen des Lehrplans": 1,
        "Kongruenz mit den fachspezifischen Kompetenzen des Lehrplans": 2,
        "Kongruenz mit den fachspezifischen Inhaltsfeldern des Lehrplans": 4,
        "Trennung von historischer (Sach-)information und Deutung/Wertung": 3,
        "Verfassungskonforme, antidiskriminierende Geschichtsbilder": 1,
        "Wissenschaftsorientierung": 4,
        "Quellen-/Methodenorientierung": 3,
        "Multiperspektivität i. e. S.": 1,
        "Kontroversität": 1,
        "Pluralität": 2,
        "Gegenwarts-/Zukunftsorientierung": 3,
        "Unterscheidungen von historischen Quellen und Darstellungen": 3,
        "Charakter der historischen Quellen": 4,
        "Charakter der Darstellungen": 1,
        "Methode der (Re-)Konstruktion von Geschichte (Quellenarbeit)": 3,
        "Methode der Dekonstruktion vorhandener Darstellungen": 1,
        "Methode des Historischen Vergleichs": 4,
        "Kumulation von historischen Wissensdimensionen": 2,
        "Progression und Transfer/Anwendung von historischen Kompetenzen": 2,
        "Narrative Struktur und Sprache": 3,
        "Fachvokabular und Begriffe": 1,
        "Fachspezifische Bildfunktion": 3,
        "Fachspezifische Paratexte/Hilfsdiskurse": 4,
        "Aktivierende gegenwartsrelevante, historische Leitfragen als Lernimpuls": 3,
        "Sequenzierung und Angemessenheit des historischen Aufgabensettings": 1,
        "Materiell-Methodische Schwerpunktsetzung des historischen Aufgabensettings": 1,
        "Didaktisches Konzept": 2,
        "Rahmenbedingungen": 3,
        "Kritik": "verbesserungsvorschlag_index_" + index,  //
        "Eigene Anmerkungen": "anmerkungen_index_" + index  //
    }
    
	let json = getJson();
	window.survey = new Survey.Model(json);  // global: window.

	$("#surveyElement").Survey({ model: survey });

    startEvaluation(data);

}