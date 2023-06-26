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


var isPredefinedName = false;
var isPredefinedLink = false;
var isPredefinedSubject = false;
var isPredefinedInstitute = false;

var json = {
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
                    readOnly: isPredefinedName,
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
                    readOnly: isPredefinedLink,
                }
            ]
        }, {
            elements: [
                {
                    type: "dropdown",
                    name: "Fach",
                    title: "Bitte teilen Sie uns mit, für welches Fach Sie das AAER nutzen (optional).",
                    defaultValue: 1,
                    readOnly: isPredefinedSubject,
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
                    readOnly: isPredefinedInstitute,
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

var predefined = false;
var predefined_id = "";

var aaer_data;


function getDate() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    return (('' + day).length < 2 ? '0' : '') + day + '.' + (('' + month).length < 2 ? '0' : '') + month + '.' + d.getFullYear();
}


// umfragedaten werden als json gesendet und gespeichert
// danach generiertem evaluationscode angezeigt
function visualize(data) {
    
    document.getElementById('evaluationscode').innerHTML = data['Evaluationscode'];
    document.getElementById('verlinkung').innerHTML = data['Verlinkung'];
    document.getElementById('schulart').innerHTML = data['Schulart'];
    document.getElementById('fach').innerHTML = data['Fach'];
    document.getElementById('evaluationsdatum').innerHTML = data['Evaluationsdatum'];
    document.getElementById('anmerkungen').innerHTML = data['Eigene Anmerkungen'];
    
    // JSON-Übersicht
    document.querySelector('#surveyResult').textContent = "" + JSON.stringify(data, null, 4);

    generateCharts();
}


function createEvaluationPresetsForGroup() {
    return new Promise(((resolve, reject) => {

        let lehrmittelName = document.getElementById('lehrmittelname-gruppe').value;
        if (!lehrmittelname.replace(/\s/g, '').length) { // only whitespaces
            reject("Bitte Name des Lehr-/Lernmittels eingeben!");
        } else {
            let lehrmittelLink = document.getElementById('lehrmittel-link').value;
            if (!lehrmittelLink.replace(/\s/g, '').length) {
                lehrmittelLink = null;
            }

            let lehrmittelFach = document.getElementById('lehrmittel-fach').value;
            if (lehrmittelFach === '' || lehrmittelFach == 'Keine Angabe') {
                lehrmittelFach = null;
            }

            let lehrmittelSchulart = document.getElementById('lehrmittel-schulart').value;
            if (lehrmittelSchulart == '' || lehrmittelSchulart == 'Keine Angabe') {
                lehrmittelSchulart = null;
            }

            let presets = {
                "lehrmittelName": lehrmittelName,
                "lehrmittelLink": lehrmittelLink,
                "lehrmittelFach": lehrmittelFach,
                "lehrmittelSchulart": lehrmittelSchulart
            }

            let xhr = new XMLHttpRequest();
            xhr.open("POST", "https://aaer.digillab.uni-augsburg.de/createEvaluationPresetsForGroup");

            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    resolve(this.response);
                }
            }

            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(presets));

        }

    }))

}


function getEvaluationPresetsForGroup() {

    return new Promise(((resolve, reject) => {

        let evaluationscode = document.getElementById('evaluationscode-gruppe').value;
        if (evaluationscode.length === 10) {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "https://aaer.digillab.uni-augsburg.de/getEvaluationPresetsForGroup");
            xhr.responseType = 'json';

            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    if (db_data.length > 0) {
                        resolve(this.response); // JSON.parse(this.responseText) deprecated, use xhr.responseType if necessesary and xhr.response instead
                    } else {
                        reject("Zum angegebenen Code wurde nichts gefunden!");
                    }
                }
            }

            xhr.send(evaluationscode);

        } else {
            reject("Der angegebene Code muss genau 10 Zeichen lang sein!");
        }
        
    }))
}


function getEvaluationAndVisualize() {
    let evaluationscode = document.getElementById('loadResult').value;

    return new Promise(((resolve, reject) => {
        if (evaluationscode.length === 12) {

            let xhr = new XMLHttpRequest();
            xhr.open("POST", "https://aaer.digillab.uni-augsburg.de/getEvaluation");

            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {

                    if (this.responseText.length > 0) {
                        let data = JSON.parse(this.responseText);

                        window.survey = new Survey.Model(json);
                        survey.data = data;

                        survey.onComplete.add(function (sender, options) {
                            aaer_data = sender.data;
                            visualize(sender.data);
                        });
                        survey.doComplete();

                        resolve();

                    } else {
                        reject("Es konnten keine entsprechenden Daten geladen werden.");
                    }
                };

            };

            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({ "evaluationscode": evaluationscode }));

        } else {
            reject("Es müssen genau 12 Zeichen sein.");
        }

    }))

}


function getEvaluationGroupAndVisualize(data) {
    let evaluationscode = document.getElementById('loadResultSet').value;
    // data = JSON.parse(data);  // ?????? user formular eingabe

    return new Promise(((resolve, reject) => {
        if (evaluationscode.length === 10) {

            let xhr = new XMLHttpRequest();
            xhr.open("POST", "https://aaer.digillab.uni-augsburg.de/getEvaluationGroup");

            xhr.onreadystatechange = function () {

                if (this.readyState == 4 && this.status == 200) {

                    // array mit datensätzen
                    let loadedEvaluations = JSON.parse(this.responseText);
                    if (loadedEvaluations.length > 0) {  // && loadedEvaluations !== '[]'

                    
                    let gesamtEvaluation = {
                        "Evaluationscode": evaluationscode,
                        "Name": data._pre_tname,
                        "Verlinkung": (data._pre_link == null) ? 'Keine Angabe' : data._pre_link,
                        "Schulart": (data.institution_id == null) ? 1 : data.institution_id,
                        "Fach": (data.subject_id == null) ? 1 : data.subject_id,
                    };
                    
                    // berechnungen der durchschnittswerte
                    let countVars = new Map();
                    document.getElementById('anmerkungen').innerHTML = `Die Anzahl der berücksichtigten Datensätze ist ${loadedEvaluations.length}.`;
                    for(i=0; i<aaer_geschichte.length; i++) {
                        for(j=0; j<aaer_geschichte[i].items.length; j++) {

                            countVars.set('dim' + i + 'item' + j, {'SUM': 0, 'COUNT': 0, 'COUNT_NULLS':0 , AVG: 'nicht bewertbar'});

                            loadedEvaluations.forEach(evaluation => {
                                if (evaluation[aaer_geschichte[i].items[j].name] == 0) {
                                    countVars.get('dim' + i + 'item' + j).COUNT_NULLS++;
                                } else {
                                    countVars.get('dim' + i + 'item' + j).SUM += evaluation[aaer_geschichte[i].items[j].name];
                                    countVars.get('dim' + i + 'item' + j).COUNT++;
                                }
                            });

                            if (countVars.get('dim' + i + 'item' + j).COUNT > 0)
                                countVars.get('dim' + i + 'item' + j).AVG = countVars.get('dim' + i + 'item' + j).SUM / countVars.get('dim' + i + 'item' + j).COUNT;

                            gesamtEvaluation[aaer_geschichte[i].items[j].name] = countVars.get('dim' + i + 'item' + j).AVG;

                            if (countVars.get('dim' + i + 'item' + j).COUNT_NULLS > 0)
                                document.getElementById('anmerkungen').innerHTML += `<br> ${aaer_geschichte[i].items[j].name} wurde ${countVars.get('dim' + i + 'item' + j).COUNT_NULLS} mal als nicht bewertbar oder nicht relevant eingestuft.`;


                        }
                    }

                    gesamtEvaluation.Evaluationsdatum = getDate();
                    aaer_data = gesamtEvaluation;

                    // vis code
                    document.getElementById('display_id').innerHTML = evaluationscode;
                    window.survey = new Survey.Model(json);
                    survey.data = gesamtEvaluation;
                    visualize(gesamtEvaluation);


                    // alle datensätze als json ausgeben
                    let json_str = '\nAuflistung der zugehörigen Einzelevaluationen: ';
                    json_str += '\n\n' + JSON.stringify(loadedEvaluations, null, 4);
                    document.querySelector('#surveyResult').textContent += "\n\n" + json_str;

                    resolve();
                    
                    } else {
                        reject("Es konnten keine entsprechenden Daten geladen werden.");
                    }
                }

            }

            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({ "predefined_id": evaluationscode }));

        } else {
            reject("Es müssen genau 10 Zeichen sein.");
        }
    }))

}


function submitEvaluationAndVisualize(data) {

    if (predefined) {
        data.predefined_id = predefined_id;
        predefined = false;  // reset flag
    }
    data.Evaluationsdatum = getDate();

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://aaer.digillab.uni-augsburg.de/saveEvaluation");

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data.Evaluationscode = this.responseText;
            aaer_data = data; // globale variable mit aktuellen daten
            visualize(data);
        };
    }

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
}

// Ende: Funktionen zur Darstellung der Diagramme


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
    aaer_geschichte.forEach( item => { labels = labels.concat(item.labels) });

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
    aaer_geschichte.forEach( item => { 
        labels = labels.push('');
        labels = labels.concat(item.labels);
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
}


var charts = [];

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

var res = "";
var specialChar = ".";

$(".sv_next_btn").click(function () {

    // Holen Nummer mit Punkt
    res = $(".sv_q_num").html();

    // Eliminierung von Punkt
    for (var i = 0; i < specialChar.length; i++) {
        var active = res.replace(new RegExp("\\" + specialChar[i], "gi"), "");
    }

    // Multiplikator zur Hochrechnung des Fortschritts
    active = active * 3.25;

    // Zusammenfügen als String
    res = active + "%";

    // Einfügen der width-property zur Darstellung des Fortschritts
    var progress = $(".progress-bar").css("width", res);

});