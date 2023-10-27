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

// import {aaer_geschichte, fach, schularten, antworten} from './objects.js'; should be loaded in browser already


function getJson(isPresetName=false, isPresetLink=false, isPresetFach=false, isPresetSchulart=false) {
    let subjects = sessionStorage.getItem("language") == 'En' ? subjects_history_en : subjects_history_de
    let schools = sessionStorage.getItem("language") == 'En' ? schools_history_en : schools_history_de
    let answers = sessionStorage.getItem("language") == 'En' ? answers_history_en : answers_history_de

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
                        readOnly: isPresetLink,
                    }
                ]
            }, {
                elements: [
                    {
                        type: "dropdown",
                        name: "Fach",
                        title: "Bitte teilen Sie uns mit, für welches Fach Sie das AAER nutzen (optional).",
                        // defaultValue: "Keine Angabe",
                        readOnly: isPresetFach,
                        isRequired: true,
                        showOptionsCaption: false,
                        // defaultValue: 1,
                        choices: subjects
                    }
                ]
    
            }, {
                elements: [
                    {
                        type: "dropdown",
                        name: "Schulart",
                        title: "Bitte teilen Sie uns mit, für welche Schulart Sie das AAER nutzen (optional).",
                        // defaultValue: "Keine Angabe",
                        readOnly: isPresetSchulart,
                        showOptionsCaption: false,
                        // defaultValue: 1,
                        choices: schools
                    }
                ]
            }, {
                title: "Ihre Meinung", 
                description: "Wir wollen unser Analyse- und Evaluationsraster kontinuierlich weiterentwickeln. Dafür ist für uns auch von Interessen wie sie das Lehr-Lernmittel ohne Verwendung unseres Analyse- und Evaluationsraster bewerten. Halten Sie das Ihnen vorliegende Geschichtslehrmitteln für gut oder schlecht? Welche Kriterien ziehen Sie heran? Welche sind für Sie die entscheidenden, welche sind Ihnen weniger wichtig?",
                elements: [
                    {
                        type: "text",
                        name: "Meinung",
                        title: "Bitte teilen Sie uns hier Ihre Meinung mit.",
                        isRequired: true
                    }
                ]
            },
              
            //dimension 1 mit (0:2) Items
            {
                dimension: aaer_geschichte[0].items[0].dimension, 
                title: aaer_geschichte[0].items[0].name, 
                description: aaer_geschichte[0].items[0].description,
                elements: [
                    {
                        type: "radiogroup",
                        name: aaer_geschichte[0].items[0].name, // name is hidden
                        title: aaer_geschichte[0].items[0].summary,  // entspricht frage
                        description: '*' + aaer_geschichte[0].items[0].indicators,
                        descriptionLocation: 'underInput',
                        isRequired: true,
                        dimension: aaer_geschichte[0].items[0].dimension,
                        choices: answers
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
                                description: '*' + aaer_geschichte[0].items[1].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[0].items[2].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[1].items[0].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[1].items[1].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[2].items[0].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[2].items[1].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[2].items[2].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[2].items[3].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[2].items[4].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[2].items[5].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[3].items[0].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[3].items[1].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[3].items[2].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[3].items[3].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                // description: '*' + aaer_geschichte[3].items[4].indicators,
                                // descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[3].items[5].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[4].items[0].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[4].items[1].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[5].items[0].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[5].items[1].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[5].items[2].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[5].items[3].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[6].items[0].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[6].items[1].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[6].items[2].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[7].items[0].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
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
                                description: '*' + aaer_geschichte[7].items[1].indicators,
                                descriptionLocation: 'underInput',
                                isRequired: true,
                                choices: answers
                            }
                        ]
            }, {
                title: "Kritikpunkte und Verbesserungsvorschläge", 
                description: "Wir wollen unser Analyse- und Evaluationsraster kontinuierlich weiterentwickeln. Hier ist Platz für Ihre Kritikpunkte und ihre Verbesserungsvorschläge. Zur Anregung: Vermissen Sie bestimmte Kriterien? Erscheint Ihnen die Reihenfolge der Kriterien logisch? Sind die einzelnen Kriterien für Sie nachvollziehbar und verständlich verfasst?",
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

    let canvas = window.document.getElementById(ids[index]);

    let submittedData = [];
    aaer_geschichte[index].items.forEach(function (question) {
        submittedData.push(survey.getValue(question.name))
    })

    let chartData = {
        labels: sessionStorage.getItem("language") == 'En' ? labels_en[index] : labels_de[index],  //aaer_geschichte[index].labels,
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

    // let labels = [];
    // aaer_geschichte.forEach( obj => { labels = labels.concat(obj.labels) });
    // console.log("Labels:")
    // console.log(labels)

    let names = [];
    aaer_geschichte.forEach( obj => {
            obj.items.forEach( item => {
                    names = names.concat(item.name);
                })
            })

    let labels = []
    let _labels = sessionStorage.getItem("language") == 'En' ? labels_en : labels_de
    _labels.forEach(arr => {
        labels = labels.concat(arr)
    })
    
    let values = [];
    // for(let i = 0; i < labels_en.length; i++) {
    //     for(let j = 0; j < labels_en[i].length; j++){
    //         if (typeof survey.getValue(labels_en[i][j]) != 'undefined') {
    //             values.push(survey.getValue(labels_en[i][j]))
    //         } else {
    //             values.push(survey.getValue(labels_de[i][j]))
    //         }
    //     }
    // }
    names.forEach( name => { values.push(survey.getValue(name)) });

    let bar_colors = [];
    aaer_geschichte.forEach( (item, index) => { 
        for(let i = 0; i < item.labels.length; i++) {
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

    let names = [];
    aaer_geschichte.forEach( obj => {
        obj.items.forEach( item => {
            names = names.concat(item.name);
        })
    })

    let values = [];
    names.forEach( name => {
        if (!name) {
            console.log("push 0")
            values.push(0);
        }
        else
            values.push(survey.getValue(name))
    });

    let labels = []
    let _labels = sessionStorage.getItem("language") == 'En' ? labels_en : labels_de
    _labels.forEach(arr => {
        labels = labels.concat(arr)
    })

    let radar_colors = [];
    aaer_geschichte.forEach( (dimension, index) => { 
        radar_colors.push("#ffffff");
        for(let i = 0; i < dimension.items.length; i++) {
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