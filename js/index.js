Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
Survey
    .StylesManager
    .applyTheme("bootstrapmaterial");

//Fächer

fach = [
    {value: 1, text: "Keine Angabe"},
    {value: 2, text: "Biologie"},
    {value: 3, text: "Chemie"},
    {value: 4, text: "Deutsch"},
    {value: 5, text: "Englisch"},
    {value: 6, text: "Erdkunde / Geographie"},
    {value: 7, text: "Ethik"},
    {value: 8, text: "Französich"},
    {value: 9, text: "Geschichte"},
    {value: 10, text: "Informatik / IT"},
    {value: 11, text: "Kunst / Werken"},
    {value: 12, text: "Latein"},
    {value: 13, text: "Mathematik"},
    {value: 14, text: "Musik"},
    {value: 15, text: "Pädagogik"},
    {value: 16, text: "Philosophie"},
    {value: 17, text: "Physik"},
    {value: 18, text: "Psychologie"},
    {value: 19, text: "Religion"},
    {value: 20, text: "Sozialkunde / Politik"},
    {value: 21, text: "Sport"},
    {value: 22, text: "Sprachen (andere)"},
    {value: 23, text: "Sonstiges Fach"}
];

schularten = [
    {value: 1, text: "Keine Angabe"},
    {value: 2, text: "Abendschule"},
    {value: 3, text: "Alternatives Schulkonzept"},
    {value: 4, text: "Berufsfachschule"},
    {value: 5, text: "Berufskolleg"},
    {value: 6, text: "Berufsoberschule"},
    {value: 7, text: "Berufsschule"},
    {value: 8, text: "Bildungskolleg"},
    {value: 9, text: "Fachakademie"},
    {value: 10, text: "Fachhochschule"},
    {value: 11, text: "Fachoberschule"},
    {value: 12, text: "Fachschule"},
    {value: 13, text: "Förderschule"},
    {value: 14, text: "Gesamtschule"},
    {value: 15, text: "Grundschule"},
    {value: 16, text: "Gymnasium"},
    {value: 17, text: "Hochschule"},
    {value: 18, text: "Internationale Schule"},
    {value: 19, text: "Mittelschule"},
    {value: 20, text: "Realschule"},
    {value: 21, text: "Schule besonderer Art"},
    {value: 22, text: "Schule für Kranke"},
    {value: 23, text: "Volkshochschule"},
    {value: 24, text: "Vorschule"},
    {value: 25, text: "Wirtschaftsschule"},
    {value: 26, text: "Sonstige Schule"}
];

antworten = [
    {value: 1, text: "trifft nicht zu"},
    {value: 2, text: "trifft weniger zu"},
    {value: 3, text: "trifft mehr zu"},
    {value: 4, text: "trifft voll zu"},
    {value: 0, text: "nicht bewertbar / nicht relevant"}
];


var isPredefinedName = false;
var isPredefinedLink = false;
var isPredefinedSubject = false;
var isPredefinedInstitute = false;



var json = {title:"Nutzung des Augsburger Analyse- und Evaluationsrasters für digitale und analoge Bildungsmedien (AAER)",
    pages: [
        {name:"Name", title: "Name des Lehr-Lernmittels", description: "Der Name wird später in Ihrer für Sie persönlich generierten Auswertung angezeigt.",

            questions: [
                {
                    type: "text",
                    name: "Name",
                    title: "Bitte geben Sie den Namen des Lehr-Lernmittels an, das Sie mit Hilfe des AAER analysieren/evaluieren möchten.",
                    isRequired: true,
                    readOnly: isPredefinedName,
                    
                    //commentText: "Der Name wird später Ihrer persönlichen Auswertung, die Sie sich herunterladen können, angezeigt."
                }
            ]
        }, {name:"Verlinkung", title: "Link (optional)", description: "Sie können an dieser Stelle den Link zu dem zu analysierenden/evaluierenden Lehr-Lernmittel angeben. Er wird in der abschließend für Sie generierten Auswertungsübersicht angezeigt.",

            questions: [
                {
                    type: "text",
                    name: "Verlinkung",
                    title: "Bitte geben Sie den Link zu Ihrem Lehr-Lernmittel an (optional).",
                    isRequired: false,
                    readOnly: isPredefinedLink,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält keine einseitigen Aussagen, Themenführungen oder Selbstdarstellungen von Organisationen/Anbietern und lässt sichtbar ein Bemühen erkennen, unterschiedliche und plurale Sichtweisen auf gesellschaftliche Diskurse gleichberechtigt zu integrieren. Das wird z.B. auch dadurch signalisiert, dass Aussagen, die keine simplen Fakten darstellen, nicht als 'verabsolutierte' Aussagen formuliert sind. Dies gilt auch für sozusagen beiläufig vermittelte Inhalte oder Aussagen, die nicht in zentralem Zusammenhang mit dem Thema des Lehr-Lernmittels stehen (z.B. Aussagen in Textaufgaben, Anwendungsaufgaben, Abbildungen o.ä.).",
                }
            ]
        }, {
            questions: [
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
            questions: [
                {
                    type: "dropdown",
                    name: "Schulart",
                    title: "Bitte teilen Sie uns mit, für welche Schulart Sie das AAER nutzen (optional).",
                    defaultValue: 1,
                    readOnly: isPredefinedInstitute,
                    choices: schularten
                }
            ]
        }, {name:"Bezüge Curriculum", title: "Bezüge Curriculum", description: "Heutige Lehrpläne enthalten fach- und stufen- bzw. jahrgangsbezogene Ziele, Themengebiete, Fertigkeiten/Kompetenzen, didaktische Prinzipien oder Anregungen zu Methoden. Wenn es auch nicht unbedingt darum geht, hier eine eng geführte Entsprechung zu erreichen, so ist doch eine Passung der mittel- und langfristigen Unterrichtsverläufe zu diesen Lehrplänen wichtig. Dazu ist es hilfreich, wenn das Lehr-Lernmittel entsprechende Bezüge zumindest stichwortartig herstellt, sodass eine Zuordnung seitens der Lehrkräfte, bzw. unter Umständen auch seitens der Schüler*innen, leichter vollzogen werden kann.",

        questions: [
            {
                type: "radiogroup",
                name: "Bezüge Curriculum",
                title: "Im Lehr-Lernmittel werden nachvollziehbare Bezüge zu Inhalten des gültigen Curriculums hergestellt.",
                isRequired: true,
                
                //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Im Lehr-Lernmittel werden Ziele, Themengebiete, angestrebte Fertigkeiten/Kompetenzen, didaktische Prinzipien oder Anregungen zu Methoden auf eine Art transparent gemacht, die einer Lehrkraft eine Zuordnung zu den gültigen Lehr- und Bildungsplänen (Curricula) leicht macht. Idealerweise wird eine solche Zuordnung im Lehr-Lernmittel selbst vorgenommen, es enthält also spezifische Aussagen zu diesem Bereich. Das kann auch in der Form geschehen, dass der ergänzende Charakter als indirekter Bezug auf die Lehr- und Bildungspläne deutlich gemacht wird.",
                choices: antworten
                //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
            }
        ]
    }, {name:"Bezüge Bildungsstandards", title: "Bezüge Bildungsstandards", description: "Für eine Reihe von Fächern existieren in der Bundesrepublik Deutschland Bildungsstandards, in denen Kompetenz- bzw. Anforderungsbereiche beschrieben sind. Zwar ist davon auszugehen, dass sich diese auch in Lehr- und Bildungsplänen der Bundesländer niederschlagen, jedoch kann es trotzdem hilfreich sein, wenn im Lehr-Lernmittel auch hier entsprechende Bezüge zumindest stichwortartig herstellt werden, sodass eine Zuordnung seitens der Lehrkräfte, bzw. unter Umständen auch seitens der Schüler*innen, leichter vollzogen werden kann.",

        questions: [
            {
                type: "radiogroup",
                name: "Bezüge Bildungsstandards",
                title: "Im Lehr-Lernmittel werden nachvollziehbare Bezüge zu Inhalten der gültigen Bildungsstandards hergestellt.",
                isRequired: true,
                
                //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Im Lehr-Lernmittel findet eine grundsätzliche Einordnung der Lehr-Lernziele, der Themen sowie der angestrebten Kompetenzen zu entsprechenden Inhalten der Bildungsstandards statt (z.B. Anforderungsbereiche, Kompetenzen, Themen). Das kann auch detailliert/kleinschrittiger passieren, indem z.B. einzelne Unterrichtssequenzen oder Aufgaben in ihrer Bedeutung für den Kompetenzerwerb im Sinne der Bildungsstandards zugeordnet werden.",
                choices: antworten
                //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
            }
        ]
        }, {name:"Interessegeleitete Themenführung/Positionierung", title: "Interessegeleitete Themenführung/Positionierung", description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schüler*innen und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektivische Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig repräsentiert sind?",

            questions: [
                {
                    type: "radiogroup",
                    name: "Interessegeleitete Themenführung/Positionierung",
                    title: "Das Lehr-Lernmittel ist frei von einseitiger Informationsvermittlung bzgl. bestimmter Themen/Aussagen gesellschaftlicher Akteure.",
                    isRequired: true,
                    defaultValue: 5,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält keine einseitigen Aussagen, Themenführungen oder Selbstdarstellungen von Organisationen/Anbietern und lässt sichtbar ein Bemühen erkennen, unterschiedliche und plurale Sichtweisen auf gesellschaftliche Diskurse gleichberechtigt zu integrieren. Das wird z.B. auch dadurch signalisiert, dass Aussagen, die keine simplen Fakten darstellen, nicht als 'verabsolutierte' Aussagen formuliert sind. Dies gilt auch für sozusagen beiläufig vermittelte Inhalte oder Aussagen, die nicht in zentralem Zusammenhang mit dem Thema des Lehr-Lernmittels stehen (z.B. Aussagen in Textaufgaben, Anwendungsaufgaben, Abbildungen o.ä.).",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Transparenz", title: "Transparenz", description: "'Transparenz' bedeutet in diesem Zusammenhang, inwieweit für die nutzende Person eines Lehr-Lernmittels klar ersichtlich ist, von wem dieses Lehr-Lernmittel stammt, sodass eine (kritische) Bewertung und Einordnung erfolgen kann. Dafür ist es wichtig, dass im Lehr-Lernmittel selbstbezogene Informationen bereitstellt werden. Dazu gehört z.B., wer es entwickelt und verbreitet (Autor*innen, Herausgeber*innen und Fördernde sowie ihre Zugehörigkeit zu bestimmten Organisationen), woher möglicherweise Gelder stammen, die zur Entwicklung des Lehr-Lernmittels genutzt wurden, und woher die Informationen stammen, die im Lehr-Lernmittel enthalten sind (Quellen). Wichtige Informationen für die Lehrkraft sind in diesem Zusammenhang auch Aussagen über die Ziele, die mit diesem Angebot verfolgt werden, bzw. Antworten auf die Frage, warum dieses Lehr-Lernmittel angeboten wird (Motivation).",

            questions: [
                {
                    type: "radiogroup",
                    name: "Transparenz",
                    title: "Das Lehr-Lernmittel ist transparent hinsichtlich seiner Autorenschaft/Anbieter.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Es werden Autor*innen und Anbieter sowie deren organisationale/institutionelle Zugehörigkeit genannt. Finanzierungsquellen werden offengelegt. Zusammenhänge (z.B. bei mehreren Anbietern oder beteiligten Organisationen) sind für die Lehrkraft nachvollziehbar. Außerdem werden Ziele des Lehr-Lernmittels und die Gründe für das Angebot (d.h. also eine Erklärung, warum dieses Lehr-Lernmittel angeboten wird) genannt.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Werbliche Elemente", title: "Werbliche Elemente", description: "Zur Frage steht hier, inwiefern und in welchem Ausmaß in Lehr-Lernmitteln werbliche Elemente dargestellt werden. Dies muss unter dem Aspekt, dass in vielen Bundesländern Werbung im Unterricht entweder verboten oder zumindest sehr kritisch betrachtet wird und mit bestimmten Auflagen versehen ist, problematisiert werden. Werbliche Elemente im Zusammenhang mit Lehr-Lernmitteln können sein: Logos, Produktabbildungen, Nennung von Marken u.Ä., die nicht Gegenstand des Unterrichts sind (d.h., die nicht unter fachlicher oder medienpädagogischer Perspektive thematisiert werden).",

            questions: [
                {
                    type: "radiogroup",
                    name: "Werbliche Elemente",
                    title: "Das Lehr-Lernmittel ist frei von Werbung.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Es sind keine der oben genannten Elemente im Lehr-Lernmittel enthalten. Höchstens eine direkt auf den Anbieter des Lehr-Lernmittels bezogene Namensnennung (Quelle) oder das Logo des Anbieters ist enthalten - jedoch sollte dieses nicht in visuell dominanter Weise präsentiert werden.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Heterogenität/Gender", title: "Heterogenität/Gender", description: "Lehr-Lernmittel enthalten direkt oder indirekt (z.B. über visuelle Darstellungen, Bilder, Grafiken oder auch im Rahmen von Textteilen) Repräsentationen/Darstellungen einer sozialen und gesellschaftlichen Umwelt, die sie jedoch auch gleichzeitig aufgrund dieser Darstellung für das Verständnis der Schüler*innen wiederum beeinflussen und 'erzeugen'. In einer pluralistisch verfassten, demokratischen Gesellschaft erscheint es wichtig, dass einseitige Zuschreibungen/Festlegungen auf gesellschaftliche bzw. ethnische Gruppen oder Minderheiten, auf Menschen mit Beeinträchtigungen sowie auf Geschlecht oder Religion vermieden werden. Darüber hinaus erscheint es als wichtig, dass eine kulturelle Vielfalt, wie sie unter den Schüler*innen herrscht, auch in Lehr-Lernmitteln repräsentiert wird.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Heterogenität/Gender",
                    title: "Das Lehr-Lernmittel ist in seinen textlichen und bildlichen Darstellungen von gesellschaftlichen bzw. ethnischen Gruppen sowie hinsichtlich der Kategorie Geschlecht ausgewogen und in ihm werden einseitige, reduzierende Darstellungen vermieden.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n In Abbildungen, Fotos und textlichen Beschreibungen, in den gesellschaftliche Gruppen vorkommen, werden diese nicht vereinseitigend dargestellt (etwa indem eine bestimmte gesellschaftliche Gruppe bestimmten Tätigkeiten, Meinungen und Verhaltensweisen vereinfachend zugeordnet wird). Für die Kategorie Geschlecht gilt, dass eine ausgewogene, sozusagen gleichberechtigte Darstellung von weiblichen und männlichen Personen enthalten ist, in der ebenfalls vereinseitigende Zuordnungen vermieden bzw. möglicherweise sogar bewusst aufgebrochen werden. In ähnlicher Weise erfolgt die Darstellung unterschiedlicher gesellschaftlicher Gruppen, Ethnien und Menschen mit Beeinträchtigungen - dies unter anderem auch deshalb, um der Heterogenität der Schüler*innen in diesem Bereich Rechnung zu tragen und entsprechende Identifikationsangebote zu bieten.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Handlungsorientierung", title: "Handlungsorientierung", description: "Das Konzept der 'Handlungsorientierung' zielt auf die aktive Erschließung von Wissen und Kompetenzen durch die Schüler*innen ab. Dabei ist es in einen bildungstheoretischen Rahmen eingeordnet, der übergeordnete Bildungsziele der Selbst- und Mitbestimmungsfähigkeit (Klafki) als wichtige Normen für die übergeordneten Ziele von Unterricht anerkennt. Ein handlungsorientierter Unterricht zeichnet sich unter anderem dadurch aus, dass Schüler*innen aktiv tätig werden und eigene Arbeits- bzw. Denkergebnisse produzieren. Das kann im Rahmen von individuellen Aufgabenstellungen geschehen, es bieten sich dazu jedoch auch vielfältige Formen gruppenorientierten entdeckenden Lernens (Kooperation, Kollaboration) an. So interpretiert impliziert 'Handlungsorientierung' auch Eigenverantwortlichkeit und damit die Möglichkeit bzw. Notwendigkeit, mit eigenen Entscheidungen den Lern- bzw. Bildungsprozess zu beeinflussen/zu gestalten.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Handlungsorientierung",
                    title: "Das Lehr-Lernmittel ist handlungsorientiert gestaltet, indem es Verantwortungsübernahme für Lernwege und Lernergebnisse durch die Schüler*innen fördert/fordert.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Im bzw. durch das Lehr-Lernmittel werden die Schüler*innen weitreichend zu aktiven Gestaltenden ihres eigenen Lernprozesses bzw. der Anwendung von Wissen, Fertigkeiten und Kompetenzen. Das zeigt sich u.U. auch darin, dass individuell oder auch in Gruppen echte Entscheidungen über Lernwege oder die Anwendung von Wissen, Fertigkeiten und Kompetenzen getroffen werden, was wiederum Wahlmöglichkeiten auf Seiten der Schüler*innen voraussetzt.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Lebensweltlichkeit", title: "Lebensweltlichkeit", description: "Hier geht es um die Frage, inwiefern das Lehr-Lernmittel Bezüge zur Lebenswelt der Schüler*innen aufweist. Das geschieht z.B. dadurch, dass es zentrale und authentische Problemstellungen zur Grundlage hat, die unter gesellschaftlich-politischer oder unter individueller bzw. gruppenspezifischer (Klassengruppe, Peer Group) Perspektive für die Schüler*innen relevant sind. Dazu kann auch gehören, dass das Lehr-Lernmittel bewusst den emotionalen Aspekt dieser Lebenswelt thematisiert.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Lebensweltlichkeit",
                    title: "Das Lehr-Lernmittel weist Bezüge zur Lebenswelt der Schüler*innen auf.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel weist nicht nur allgemeine Bezüge zur Lebenswelt der Schüler*innen auf, sondern diese werden konkretisiert, indem z.B. reale Elemente/Materialien/Aussagen aus der aktuellen Zeitgeschichte aufgegriffen werden, die eine (emotionale) Nähe zu den Schüler*innen aufweisen (z.B. aus Zeitschriften, Webseiten sowie konkrete Ereignisse, Bezüge zu Fragen der Identitätsentwicklung, der Lebensgestaltung, Freizeit oder Beruf etc.).",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                } //übernimmt wert von 6 # erledigt
            ]
        }, {name:"Reflexion/Urteilsfähigkeit", title: "Reflexion/Urteilsfähigkeit", description: "Übergeordnete pädagogische Bildungsziele, wie Mündigkeit, Selbst-, Mitbestimmungs- und Solidaritätsfähigkeit (Klafki), verlangen, dass Schüler*innen sowohl im Hinblick auf fachliche Themen als auch auf ihre nahe und weite Umwelt sowie Lebenswelt als verantwortliche, urteilende Menschen angesprochen werden. Dazu gehört auch ein Maß an Selbstreflexion, d.h. dass Schüler*innen auch sich selbst, die eigene Situation, die Situation der Gruppe und ihre politische, soziale bzw. gesellschaftliche Position zum Gegenstand des Denkens machen (Metakognition, Reflexion).",

            questions: [
                {
                    type: "radiogroup",
                    name: "Reflexion/Urteilsfähigkeit",
                    title: "Das Lehr-Lernmittel spricht die Schüler*innen als Menschen an, die sich selbst und ihre Umwelt zum Gegenstand des eigenen Denkens und Urteilens machen.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel fördert die Bildung einer eigenen begründeten Meinung bzw. die argumentative Äußerung dieser Meinung. Die Schüler*innen werden z.B. explizit aufgefordert, auf der Basis ihres fachlichen Wissens und der Ihnen zur Verfügung stehenden Informationen, ein Urteil als Antwort auf eine bestimmte Fragestellung zu fällen. Dabei kann auch eine gewissermaßen überfachliche Dimension eine Rolle spielen, indem z.B. fachliche Themen in ihren gesellschaftlichen, politischen oder sozialen Bezügen eingebettet und zum Gegenstand gemacht werden.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Multiperspektivität/Kontroversität", title: "Multiperspektivität/Kontroversität", description: "Lehr-Lernmittel behandeln als direkten Unterrichtsgegenstand oder auch als begleitendes Nebenthema immer wieder Themen, die innerhalb der Gesellschaft (oder auch in der Fachwissenschaft) multiperspektivisch oder auch kontrovers diskutiert werden. Es ist ein zentrales Anliegen eines pädagogisch verantworteten Unterrichtens, dass Lernende in solchen Themen nicht durch Unterricht und Lehrmittel bereits einseitig für eine mögliche Position/Meinung vereinnahmt werden, sondern dass sie auf Basis von Fakten sowie unterschiedlichen Argumenten zu einer eigenen Meinungsbildung hingeführt bzw. ermächtigt werden. Dies gilt vorbehaltlich einer altersgemäßen Komplexitätsreduktion bzw. Elementarisierung durch die Autor*innen des Lehr-Lernmittels. Insofern sind die Entwickler*innen gefordert, nicht nur eine einseitige Darstellung von Themen/Sachverhalten in Lehr-Lernmitteln zu vermeiden, sondern auch sensibel für plurale Sichtweisen zu sein und, wo vorhanden, auch die Kontroversität, die möglicherweise in Fachwissenschaft und Gesellschaft vorzufinden ist, den Lernenden nicht vorzuenthalten.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Multiperspektivität/Kontroversität",
                    title: "Themen bzw. Probleme, die in Gesellschaft bzw. Wissenschaft kontrovers und multiperspektivisch diskutiert werden, werden im Lehrmittel ebenfalls kontrovers und multiperspektivisch dargestellt.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Die im Lehr-Lernmittel dargestellten Themen, seien es zentrale oder begleitende, lassen in der Art der Darstellung für die Lernenden erkennen, dass es für ihre Bewertung unterschiedliche Positionen, Meinungen, Sichtweisen oder Argumente gibt. Es werden nicht nur einseitige Aussagen, Wertungen oder Formulierungen vermieden, die den Anschein der Alternativlosigkeit vermitteln, sondern die Lernenden werden durch das Lehr-Lernmittel für das Bestehen unterschiedlicher, kontroverser Sichtweisen sensibilisiert. Zudem wird durch die Präsentation der Themen/der Inhalte sowie durch die Art der sprachlichen Vermittlung eine Offenheit für eine eigene Meinungsbildung/Bewertung gewährleistet.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Methodenpluralität", title: "Methodenpluralität", description: "Methoden sind 'Lern- und Arbeitstechniken zum selbständigen und sachgerechten Erkennen, Entdecken, Experimentieren, Bearbeiten, Konstruieren, Gestalten, Präsentieren, Kommunizieren und Kontrollieren' (Wiater). Klippert unterscheidet Methoden der Informationsbeschaffung (Lesen, Nachschlagen, Befragen, etc.), der Informationsverarbeitung und Aufbereitung (Strukturieren, Visualisieren, Gestalten, etc.), Methoden der Arbeits-, Zeit- und Lernplanung und Methoden, die das Nachdenken über das eigene Lernen fördern. Einzelne Methoden können in Lehr-Lernmitteln bewusst eingesetzt werden, um die beabsichtigten Lernprozesse und Aktivitäten zu unterstützen. Sie können auch direkt thematisiert, in ihrer Bedeutung erläutert und gezielt eingeübt werden, um ihre Effektivität zu erhöhen (Förderung von Methodenkompetenz). Methoden erfüllen dabei keinen Selbstzweck, sondern haben eine Funktion innerhalb der übergeordneten Ziele des Lernprozesses (inkl. allgemeiner und überfachlicher Entwicklungsziele der Schüler*innen). ",

            questions: [
                {
                    type: "radiogroup",
                    name: "Methodenpluralität",
                    title: "Das Lehr-Lernmittel setzt gezielt unterschiedliche Methoden ein, die den übergeordneten Zielen des Lernprozesses dienen.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Im Lehr-Lernmittel werden (unterschiedliche) Methoden gezielt eingesetzt, um bestimmte Aufgaben oder Sequenzen zu unterstützen. Diese Methoden zielen auf die Tätigkeit der Schüler*innen ab. Dabei geht es nicht darum, möglichst viele unterschiedliche Methoden einzusetzen (Selbstzeck), sondern nach Möglichkeit solche, die die angestrebten Ziele, Fertigkeiten und Kompetenzen didaktisch unterstützen. Hilfreich ist es, wenn der Sinn oder die Zielsetzung der eingesetzten Methoden genannt wird oder in Bezug auf ihre damit verbundene Zielsetzung transparent ist.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                } // übernimmt den wert von 8 # erledigt
            ]
        }, {name:"Multimedia/Multimodalität", title: "Multimedia/Multimodalität", description: "Medien können ein eindrückliches Mittel sein, Sachverhalte zu veranschaulichen, Informationen didaktisch aufzubereiten, verständlich zu präsentieren und Anknüpfungen an die Lebenswelt von Jugendlichen zu schaffen. Lehr-Lernmittel können Medien nutzen, um Lernende auf unterschiedlichen Wegen anzusprechen und ihren Lerninhalt abgestimmt auf die damit verbundenen Lernziele zu vermitteln. Dies kann besonders effektiv gelingen, wenn in Lehr-Lernmitteln unterschiedliche Medienformate kombiniert werden, um so mehrere sensorische Kanäle der Lernenden anzusprechen (Multimodalität). Sie können dabei auch Wahlmöglichkeiten bieten, welche Medienarten für spezifische Schritte des Lernprozesses genutzt werden können.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Multimedia/Multimodalität",
                    title: "Das Lehr-Lernmittel transportiert seine Lerninhalte auf multimediale/multimodale Art und Weise.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Wesentliche Inhalte des Lehr-Lernprozesses, der durch das Lehr-Lernmittel angestrebt wird, werden medial aufbereitet vermittelt bzw. machen mediale Darstellungen zum Gegenstand des Lernhandelns für die Schüler*innen. Unterschiedliche Medienarten bzw. 'Kanäle' (z.B. auditive, audiovisuelle, annotierte oder symbolische Illustrationen/Videos, interaktive Webelemente, etc.) werden genutzt und in sinnvoller Weise kombiniert, um den Lernprozess zu fördern. Dies kann auch so umgesetzt werden, dass Wahlmöglichkeiten je nach individueller Präferenz für unterschiedliche Medienarten auf Seiten der Lernenden bestehen.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Medienkompetenz", title: "Medienkompetenz", description: "Medien sind Teil der kulturellen und sozialen Umwelt von Schüler*innen sowie wesentlicher Träger der Informations- und Wissensgesellschaft, in der wir leben. Sie sind daher gleichermaßen ein notwendiges Lehr-Lernfeld und auch ein didaktisches Mittel, um Lehr-Lernprozesse zu unterstützen (Mittlerfunktion). Durch sie kann man auf besonders eindrückliche Weise Sachverhalte veranschaulichen, Informationen didaktisch aufbereiten und verständlich präsentieren sowie Anknüpfungen an die Lebenswelt von Kindern und Jugendlichen schaffen. Es ist wichtig, die kompetente Nutzung sowie die kritische Reflexion von Medien als Kommunikationsmittel und 'Mittler von Welt' zu fördern und zu trainieren. Medienkompetenz lässt sich in diesem Sinn verstehen als Vermögen (Fähigkeit) und Bereitschaft in Medienzusammenhängen zu handeln, über diese zu kommunizieren und kritisch zu reflektieren.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Medienkompetenz",
                    title: "Das Lehr-Lernmittel fördert einen kompetenten Umgang mit Medien.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Die Lernenden sind nicht nur passive Rezipienten medialer Inhalte, sondern setzen sich aktiv und reflexiv mit Mediendarstellung und/oder Kommunikation auseinander. Sie arbeiten, lernen und machen Lernfortschritte unter Nutzung von Medien. Und - wo möglich - erstellen sie sogar eigene Medieninhalte oder werden herausgefordert mediale Repräsentationen kritisch und reflexiv zu hinterfragen, um Medienkompetenz zu fördern.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Differenzierung", title: "Differenzierung", description: "Eine besondere Herausforderung für die Gestaltung von Unterricht stellt die Anpassung an eine heterogene Schülerschaft dar. Dazu können Lehr-Lernmittel einen wichtigen Beitrag leisten, indem sie sozusagen 'Variationen' ihrer selbst anbieten (Parallelisierung von Unterricht). Diese können z.B. über die Bereitstellung unterschiedlicher Anwendungsgebiete und Lernziele (auch mit unterschiedlichen Schwierigkeitsgraden) und darauf abgestimmter Arbeitsschritte bzw. unterschiedlicher Arbeitsaufträge innerhalb des Lehr-Lernmittels erfolgen. Dabei ist wichtig, dass die Ergebnisse der parallel durchgeführten Lernsequenzen auch wieder zusammengeführt werden.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Differenzierung",
                    title: "Das Lehr-Lernmittel beinhaltet Angebote für binnendifferenzierte Lernarrangements.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält Variationsangebote, die zeitlich parallel umgesetzt werden können. Diese gehen über einfache Arbeitsgruppen hinaus, die dieselben Ziele lediglich auf unterschiedliche Gegenstände umsetzen.  Sie enthalten z.B. auch unterschiedliche Lernziele, unterschiedliche Schwierigkeitsgrade, aufeinander verweisende Arbeitsschritte u.ä. Dabei wird zudem die Sicherung von verbindlichen Ergebnissen für alle Schüler*innen nicht vernachlässigt.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Barrierefreiheit/Inklusion", title: "Barrierefreiheit/Inklusion", description: "Lehr-Lernmittel können wesentlich zur erfolgreichen Gestaltung von inklusiven Unterrichtsszenarien beitragen, indem sie barrierefreie Zugänge für Schüler*innen mit Beeinträchtigungen bieten (insbesondere für Schüler*innen mit Seh-, Hör- oder Lernbeeinträchtigungen). Für Menschen mit Hör- oder Sehbeeinträchtigungen ist beispielsweise die Beachtung des Zwei-Sinne-Prinzips von Bedeutung, d.h. ein Element/Inhalt des Lehr-Lernmittels wird immer vollständig auf zwei Wegen (auditiv und visuell) vermittelt. Außerdem können Untertitel in Videos, zusätzliche Texte, die den Inhalt einer Grafik oder einer Abbildung beschreiben, die Integration von Gebärdensprache, Möglichkeiten zur digitalen Sprachausgabe per Screenreader oder die Nutzbarkeit von Vergrößerungssoftware sowie Audiodeskriptionen etc. die Zugänglichkeit des Lehr-Lernmittels für die genannte Personengruppe erleichtern. Für Menschen mit Lernschwierigkeiten ist es sinnvoll, beispielsweise die Texte des Lehr-Lernmittels in leichter Sprache zu integrieren.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Barrierefreiheit/Inklusion",
                    title: "Das Lehr-Lernmittel bietet barrierefreie Zugänge für Schüler*innen mit Beeinträchtigungen.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält durchgängig in allen seinen Bestandteilen/Inhalten Elemente und Anreicherungen, die eine Barrierefreiheit für zumindest eine der beschriebenen Zielgruppen ermöglicht.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Transfer- und Anwendungsorientierung", title: "Transfer- und Anwendungsorientierung", description: "In Lehr-Lernmitteln können unterschiedliche kognitive Prozesse angeregt bzw. angestrebt werden. Diese Prozesse lassen sich grob unter folgenden Aktionswörtern zusammenfassen (aufsteigende Reihenfolge, was die Komplexität des Vorgangs angeht): erinnern, verstehen, anwenden, analysieren, bewerten, erschaffen. Kompetenzorientiertes Unterrichten wird in der Regel darauf abzielen, neben den elementaren kognitiven Prozessen 'erinnern' und 'verstehen' auch - entsprechend der Lern- bzw. Kompetenzziele - 'höhere' kognitive Prozesse anzuregen. Daher können in Lehr-Lernmitteln bewusst entsprechende Prozesse in Form von Fragen, Aufgaben oder Anschauungen integriert sein.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Transfer- und Anwendungsorientierung",
                    title: "Durch das Lehr-Lernmittel werden gezielt kognitive Prozesse angesprochen, die über elementare kognitive Prozesse hinausgehen und als transfer- bzw. anwendungsorientiert zu bezeichnen sind.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Es lassen sich im Lehr-Lernmittel in den einzelnen Teilen/Sequenzen die jeweils angeregten/beabsichtigten kognitiven Prozesse identifizieren bzw. sie sind möglicherweise sogar ausgewiesen. Außerdem finden sich Fragen oder Aufgaben, die z.B. darauf abzielen, dass die Schüler*innen aufgebautes Wissen auf andere Objekte anwenden (Transfer), Sachverhalte eigenständig analysieren, eigene Bewertungen auf der Basis ihres Wissens und der erworbenen fachlichen Fertigkeiten vornehmen oder sogar eigenständig neues Wissen oder Fertigkeiten für unbekannte Anwendungsgebiete bilden bzw. entwickeln, um fachliche Probleme zu lösen.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Prozessorientierung (Kumulation)", title: "Prozessorientierung (Kumulation)", description: "Ein Lehr-Lernmittel besteht oftmals aus mehreren aufeinanderfolgenden Sequenzen, die sukzessive auf ein bestimmtes Ziel bzw. auch unterschiedliche Teilziele in einem Gesamtzusammenhang des Unterrichtens bzw. Lernens hinleiten sollen. Zur Frage steht, inwiefern die Verknüpfung der einzelnen Sequenzen einen fachlichen bzw. didaktisch sinnvollen Zusammenhang erkennen lässt. Bedeutsam ist darüber hinaus, dass in der Regel ein kumulativer, schrittweiser Aufbau von Wissen, Fertigkeiten und Kompetenzen als erfolgversprechend zu betrachten ist. Dabei kann auch die Anknüpfung am Vorwissen der Schüler*innen (sozusagen als Ausgangspunkt) eine Rolle spielen.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Prozessorientierung (Kumulation)",
                    title: "Das Lehr-Lernmittel verknüpft einzelne Sequenzen zu einem Prozess und unterstützt damit das Prinzip eines kumulativen Aufbaus von Wissen, Fertigkeiten und Kompetenzen.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Sequenzen sind im Lehr-Lernmittel als solche zu erkennen und in ihren Verweisungszusammenhängen untereinander deutlich. In Bezug auf Unterrichtsziele, angestrebte Fertigkeiten und Kompetenzen lässt sich eine schrittweise Vorgehensweise erkennen bzw. mit dem Lehr-Lernmittel umsetzen. Unter Umständen ist das Lehr-Lernmittel sogar so konzipiert, dass es die Bedeutung seiner einzelnen Schritte und Zusammenhänge selbst erklärt und transparent macht.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Lernwegunterstützende Elemente (Scaffolding)", title: "Lernwegunterstützende Elemente (Scaffolding)", description: "Zur Frage steht hier, inwiefern Lehr-Lernmittel Elemente enthalten, die ihren Nutzer*innen - hier insbesondere den Schüler*innen - deutlich machen können, wie mit dem Lehr-Lernmittel gelernt werden kann/soll. Dazu können erläuternde und erklärende Hinweise gegeben werden (Vor-/Nachbemerkungen, Kommentare, Textbausteine, Marginalien). Wichtig hierbei ist, dass diese sich auf den Lernweg der Schüler*innen beziehen und den Lernprozess bzw. die Lernaktivität unterstützen/fördern/anleiten.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Lernwegunterstützende Elemente (Scaffolding)",
                    title: "Das Lehr-Lernmittel enthält Elemente, die den Lernprozess der Schüler*innen unterstützen, indem sie Aussagen machen, die sich auf den Lernweg bzw. die Lernaktivität der Schüler*innen beziehen.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Lernwegunterstützende Elemente finden sich nicht nur vereinzelt, sondern sind erkennbar systematisch an den Schlüsselstellen des Lehr-Lernmittels integriert und haben damit eine 'rahmende' Funktion. Solche Elemente können sein: Vor- und Nachbemerkungen, Kommentare zu Inhalten oder Lernprozessen des Lehr-Lernmittels (diese können sich auch metakognitiv direkt auf die Schüler*innen beziehen).",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Sprachlichkeit", title: "Sprachlichkeit", description: "Damit Lehr-Lernmittel in der Breite von Schüler*innen genutzt werden können, ist es (nicht nur für schwächere Schüler*innen) vorteilhaft, wenn sie in allen Teilen (auch in Aufgabenstellungen) eine klare, einfache Sprache kennzeichnet. Davon unbetroffen sind für die fachliche Aufarbeitung nötige Fach- und Fremdwörter. Textpassagen sind darüber hinaus 'kohärent', d.h. sie weisen eine logische Verknüpfung ihrer Abschnitte auf (Sprachfluss ohne Unterbrechungen).",

            questions: [
                {
                    type: "radiogroup",
                    name: "Sprachlichkeit",
                    title: "Die Sprache des Lehr-Lernmittels ist klar und verständlich.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält keine unnötig langen und verschachtelten Sätze. Auch Aufgaben sind direkt und klar formuliert, und es werden nicht mehrere Aufgabenstellungen in einer einzelnen Aufgabe vermischt. Fachbegriffe und Fremdwörter werden im fachlich nötigen und sinnvollen Rahmen eingesetzt oder gegebenenfalls erläutert. Es existieren keine sprachlichen bzw. logischen Brüche zwischen einzelnen Sätzen oder Abschnitten.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Bildsprache", title: "Bildsprache", description: "Über unterschiedliche bildliche Darstellungen (z.B. Fotos, Diagramme, Tabellen, Charts, Animationen) können Sachverhalte vermittelt, verdeutlicht und erklärt werden. Diese bildlichen Elemente sollten in einem logischen und didaktischen Zusammenhang zum Thema und zu den Zielen des Lehr-Lernmittels stehen. Außerdem sind bildliche Elemente in der Regel in textliche Elemente eingebettet oder in Zusammenhang gesetzt - dieser Zusammenhang sollte möglichst klar sein. Es kann zur Förderung von bildlichem Verstehen und Interpretationsvermögen sinnvoll sein, dass abstrahierte bildliche Darstellungen (z.B. Charts) mit textlichen Elementen versehen sind, die erklärenden Charakter haben.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Bildsprache",
                    title: "Bildliche Elemente werden im Lehr-Lernmittel in klarer und logischer Zuordnung zum Lerngegenstand bzw. -ziel eingesetzt.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel verwendet bildliche Elemente über eine rein illustrative Funktion hinaus. Sie stehen im Zusammenhang zum Unterrichtsthema und -ziel und leisten einen eigenen Beitrag zum Verstehen, Erklären oder Anwenden von Wissen, Fertigkeiten und Kompetenzen, die für den durch das Lehr-Lernmittel angeregten Unterrichtsprozess wichtig sind. Sie sind dabei auch textlich eingebettet, was z.B. durch erklärende Textpassagen oder Beschriftungen erreicht wird.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Additive Kommunikation (Anreicherung)", title: "Additive Kommunikation (Anreicherung)", description: "Hiermit ist gemeint, dass das Lehr-Lernmittel auch über die rein fachliche Aufbereitung hinaus zusätzliche Elemente integriert und jene 'anreichern' kann. Dies können z.B. Lebensweltbezüge im Sinne von Zusatzinformationen, Anekdoten oder humoristischen Passagen sein. Es kann sich dabei auch um Zusätze handeln, die sich ergänzend oder vertiefend auf die im Lehr-Lernmittel präsentierten Inhalte beziehen (z.B. Zusammenfassungen, Exkurse, Merksätze, Glossare, Begriffserklärungen).",

            questions: [
                {
                    type: "radiogroup",
                    name: "Additive Kommunikation (Anreicherung)",
                    title: "Das Lehr-Lernmittel integriert zusätzliche kommunikative Elemente, die seine Inhalte unterstützen/anreichern.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält über eine reine fachliche Aufbereitung des Unterrichtsthemas und der Unterrichtsziele hinaus auch zusätzliche Elemente (Text/Bild/Sprache), die die Schüler*innen ansprechen, z.B. in ihren lebensweltlichen Bezügen, oder als Ergänzung, Erklärung sowie Verstärkung der im Lehr-Lernmittel präsentierten Inhalte.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Sequenzierung", title: "Sequenzierung", description: "Aufgaben, die im Lehr-Lernmittel gestellt werden, sollten in einem sinvollen fachlichen und/oder didaktischen Zusammenhang zueinander stehen. Hier kann entsprechend die Frage gestellt werden, welche kognitiven Leistungen/Prozesse (z.B. etwas erinnern, verstehen, anwenden, analysieren, bewerten, erschaffen) in den einzelnen Aufgaben oder ihren Teilen angeregt werden und ob diese z.B. aufeinander aufbauen, zueinander hinführen oder ein Thema/eine Kompetenz aus unterschiedlichen Teilaspekten behandeln und vertiefen.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Sequenzierung",
                    title: "Die im Lehr-Lernmittel enthaltenen Aufgaben stehen in einem didaktisch oder fachlich sinnvollen Zusammenhang zueinander.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Die im Lehr-Lernmittel enthaltenen Aufgaben sind in einer aus fachlicher oder didaktischer Perspektive verständlichen Weise sequenziert. Sie verweisen aufeinander/bauen aufeinander auf und dabei werden nicht nur gleiche oder ähnliche kognitive Prozesse wiederholt. ",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Aktivierung", title: "Aktivierung", description: "Hier geht es um die Frage, inwiefern ein Lehr-Lernmittel insgesamt eine grundlegende Problemstellung verfolgt, die im Verlauf durch die Schüler*innen bearbeitet und gelöst wird. Diese Problemstellung wird in der Regel am Anfang des Lehr-Lernmittels formuliert und bietet damit das 'Setting' für die sich daraus ergebenden Schritte und Aufgaben, wodurch lernpsychologisch betrachtet eine Aktivierung der Schüler*innen erfolgt (Motivation).",

            questions: [
                {
                    type: "radiogroup",
                    name: "Aktivierung",
                    title: "Das Lehr-Lernmittel steht unter einer übergeordneten/umgreifenden Problemstellung, die durch die Schüler*innen bearbeitet und gelöst wird.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Zu Beginn des durch das Lehr-Lernmittel initiierten Lernprozesses wird eine Problemstellung formuliert, die es im Verlauf zu lösen gilt. Alle nachfolgenden Unterrichtsschritte sind auf diese Problemstellung bezogen und führen nach und nach zur Lösung bzw. vertiefen diese.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Multiple Lösungswege", title: "Multiple Lösungswege", description: "Nicht immer gibt es eine feste Methode, eine fachliche Prozedur oder eine Sichtweise, um ein Problem oder eine Aufgabe zu lösen. Lehr-Lernmittel können hierfür sensibel sein und - wo möglich - unterschiedliche Lösungswege zulassen oder diese sogar anregen. Damit wird ein Spielraum für unterschiedliche plausible Strategien der Schüler*innen ermöglicht und Flexibilität in verschiedenen Lösungsgsansätzen gefördert.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Multiple Lösungswege",
                    title: "Die im Lehr-Lernmittel enthaltenen Aufgaben regen die Schüler*innen zur Entwicklung mehrerer Lösungswege an.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Lehr-Lernmittel lassen Raum für unterschiedliche Herangehensweisen, ohne dabei die Schüler*innen gänzlich ohne jegliche Anleitung oder Hinweise auf Lösungswege zu lassen. Z.B. werden unterschiedliche Lösungswege oder Strategien als Angebot an die Schüler*innen skizziert und vorgeschlagen. Auch konkrete Beispiele für mögliche unterschiedliche Lösungen oder Strategien können diesen Ansatz unterstützen.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Didaktisches Konzept", title: "Didaktisches Konzept", description: "Für eine eigene Nutzung - insbesondere durch Lehrkräfte - ist es von Vorteil, wenn zentrale Gedanken für den didaktischen Einsatz vermittelt werden. Und zwar selbst dann, wenn die Lehrpersonen das Lehr-Lernmittel nicht eins zu eins für ihren eigenen Unterricht einsetzen wollen, sondern an eigene Bedürfnisse anpassen möchten. Dazu gehören Informationen wie: Zielgruppe(n), Ziele, Teilziele, damit verbundene Methoden, angestrebte bzw. geförderte Kompetenzen, Bezug zu Unterrichtsthemen etc.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Didaktisches Konzept",
                    title: "Das Lehr-Lernmittel enthält didaktische Informationen, die seine Anwendung erleichtern.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält weitreichende und begründete Informationen über seine didaktische Konzeption. Diese übersteigen grundlegende Informationen über thematische Bezüge sowie die Zielgruppe und geben darüber hinaus auch Informationen über methodische Vorgehensweisen, angestrebte Kompetenzen oder Teilziele. Diese Informationen erklären die Intention des Lehr-Lernmittels und erleichtern somit seine Nutzbarkeit.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Rahmenbedingungen", title: "Rahmenbedingungen", description: "Der Einsatz von Lehr-Lernmitteln im Unterricht birgt bestimmte Voraussetzungen, die bei einer beabsichtigten Nutzung zu bedenken sind. Dazu gehören z.B. Zeitbedarf, technische oder räumliche Voraussetzungen, bestimmte Gruppengrößen, das Vorhandensein bestimmter Materialien oder Medien, die Möglichkeit der Wiedergabe bestimmter Medienformate, Internetverbindung, eine bestimmte Anzahl an PCs oder mobilen Endgeräten etc. Für die Lehrkraft ist es hilfreich, wenn diese Voraussetzungen von vornherein übersichtlich genannt werden.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Rahmenbedingungen",
                    title: "Das Lehr-Lernmittel nennt die Rahmenbedingungen seiner Nutzung.",
                    isRequired: true,
                    
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Es sind alle nötigen Rahmenbedingungen der Nutzung/des Einsatzes des Lehr-Lernmittels übersichtlich aufgeführt.",
                    choices: antworten
                    //[{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]

        }, {name:"Eigene Anmerkungen", title: "Eigene Anmerkungen", description: "Hier können Sie eigene Kommentare zum analysierten/evaluierten Lehr-Lernmnittel einfügen, die in der Auswertung angezeigt werden.",

            questions: [
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


// saves data of a survey to db and return result_id
function saveResult(data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://aaer.zlbib.uni-augsburg.de/saveResult");

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('display_id').innerHTML = this.responseText;
        };
    }

    console.log("predefined boolean: " )
    console.log(predefined)
    console.log(predefined_id)

    if(predefined) {
        data.predefined_id = predefined_id;
        predefined = false;
    }

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
}

//
function visualize(data) {
    let dict = {}
    let jsonViewData = Object.assign(dict, data);

    // Fachname anzeigen
    if (data['Fach'] == null) {
        data['Fach'] = 1;
    }
    fachName = fach[data['Fach'] - 1].text;
    jsonViewData.Fach = fachName; // JSON-Übersicht
    document.getElementById('fach').innerHTML = fachName; // Gesamtübersicht

    // Schulart anzeigen
    if (data['Schulart'] == null) {
        data['Schulart'] = 1;
    }
    schulName = schularten[data['Schulart'] - 1].text;
    jsonViewData.Schulart = schulName; // JSON-Übersicht
    document.getElementById('schulart').innerHTML = schulName; // Gesamtübersicht

    document.getElementById('anmerkungen').innerHTML = data['Eigene Anmerkungen']; // Gesamtübersicht

    document.querySelector('#surveyResult').textContent = "" + JSON.stringify(jsonViewData, null, 4);

    // Charts erstellen
    generateCharts();
}

// Wird über einen Button aufgerufen und lädt Daten aus der DB
function loadResult() {
    let input = document.getElementById('loadResult').value;
    console.log(input)
    return new Promise( ((resolve, reject) => {
        if (input.length === 12) {

            let xhr = new XMLHttpRequest();
            xhr.open("POST", "https://aaer.zlbib.uni-augsburg.de/loadResult");

            xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    db_data = this.responseText;
                    if (db_data.length > 0) {
                        let data = JSON.parse(db_data);
                        let data_object = {
                            "Einzelevaluation": data.result_id,
                            "Name": data._tool_name,
                            "Verlinkung": data._link,
                            "Fach": data.subject_id,
                            "Schulart": data.institution_id,
                            "Bezüge Curriculum": data._00,
                            "Bezüge Bildungsstandards": data._01,
                            "Interessegeleitete Themenführung/Positionierung": data._10,
                            "Transparenz": data._11,
                            "Werbliche Elemente": data._12,
                            "Heterogenität/Gender": data._13,
                            "Handlungsorientierung": data._20,
                            "Lebensweltlichkeit": data._21,
                            "Reflexion/Urteilsfähigkeit": data._22,
                            "Multiperspektivität/Kontroversität": data._23,
                            "Methodenpluralität": data._30,
                            "Multimedia/Multimodalität": data._31,
                            "Medienkompetenz": data._32,
                            "Differenzierung": data._33,
                            "Barrierefreiheit/Inklusion": data._34,
                            "Transfer- und Anwendungsorientierung": data._40,
                            "Prozessorientierung (Kumulation)": data._41,
                            "Lernwegunterstützende Elemente (Scaffolding)": data._42,
                            "Sprachlichkeit": data._50,
                            "Bildsprache": data._51,
                            "Additive Kommunikation (Anreicherung)": data._52,
                            "Sequenzierung": data._60,
                            "Aktivierung": data._61,
                            "Multiple Lösungswege": data._62,
                            "Didaktisches Konzept": data._70,
                            "Rahmenbedingungen": data._71,
                            "Eigene Anmerkungen": data._comment
                        };
                        console.log(data_object);

                        window.survey = new Survey.Model(json);
                        survey.data = data_object;
                        survey.onComplete.add(function (sender, options) {
                            visualize(sender.data);
                        });
                        survey.doComplete();

                        document.getElementById('display_id').innerHTML = input;

                        resolve();

                    } else {
                        reject("Es konnten keine entsprechenden Daten geladen werden.");
                    }
                };

            };

            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({"result_id": input}));

        } else {
            reject("Es müssen genau 12 Zeichen sein.");
        }

    }))

}

function loadResultSet(data) {
    let input = document.getElementById('loadResultSet').value;
    data = JSON.parse(data);

    return new Promise( ((resolve, reject) => {
        if (input.length === 10) {

            let xhr = new XMLHttpRequest();
            xhr.open("POST", "https://aaer.zlbib.uni-augsburg.de/loadResultSet");

            xhr.onreadystatechange = function() {

                if (this.readyState == 4 && this.status == 200) {
                    // Daten kommen als String an
                    let db_data = JSON.parse(this.responseText);
                    console.log(db_data)

                    if (db_data.length > 0) {  // && db_data !== '[]'

                        let _00SUM = 0, _00COUNT = 0, _00COUNT_NULL = 0;
                        let _01SUM = 0, _01COUNT = 0, _01COUNT_NULL = 0;

                        let _10SUM = 0, _10COUNT = 0, _10COUNT_NULL = 0;
                        let _11SUM = 0, _11COUNT = 0, _11COUNT_NULL = 0;
                        let _12SUM = 0, _12COUNT = 0, _12COUNT_NULL = 0;
                        let _13SUM = 0, _13COUNT = 0, _13COUNT_NULL = 0;

                        let _20SUM = 0, _20COUNT = 0, _20COUNT_NULL = 0;
                        let _21SUM = 0, _21COUNT = 0, _21COUNT_NULL = 0;
                        let _22SUM = 0, _22COUNT = 0, _22COUNT_NULL = 0;
                        let _23SUM = 0, _23COUNT = 0, _23COUNT_NULL = 0;

                        let _30SUM = 0, _30COUNT = 0, _30COUNT_NULL = 0;
                        let _31SUM = 0, _31COUNT = 0, _31COUNT_NULL = 0;
                        let _32SUM = 0, _32COUNT = 0, _32COUNT_NULL = 0;
                        let _33SUM = 0, _33COUNT = 0, _33COUNT_NULL = 0;
                        let _34SUM = 0, _34COUNT = 0, _34COUNT_NULL = 0;

                        let _40SUM = 0, _40COUNT = 0, _40COUNT_NULL = 0;
                        let _41SUM = 0, _41COUNT = 0, _41COUNT_NULL = 0;
                        let _42SUM = 0, _42COUNT = 0, _42COUNT_NULL = 0;

                        let _50SUM = 0, _50COUNT = 0, _50COUNT_NULL = 0;
                        let _51SUM = 0, _51COUNT = 0, _51COUNT_NULL = 0;
                        let _52SUM = 0, _52COUNT = 0, _52COUNT_NULL = 0;

                        let _60SUM = 0, _60COUNT = 0, _60COUNT_NULL = 0;
                        let _61SUM = 0, _61COUNT = 0, _61COUNT_NULL = 0;
                        let _62SUM = 0, _62COUNT = 0, _62COUNT_NULL = 0;

                        let _70SUM = 0, _70COUNT = 0, _70COUNT_NULL = 0;
                        let _71SUM = 0, _71COUNT = 0, _71COUNT_NULL = 0;

                        let json_str = '\nAuflistung der zugehörigen Einzelevaluationen: ';

                        for (let i=0; i<db_data.length; i++) {
                            let result = {};
                            console.log(db_data[i])

                            result.Einzelevaluation = db_data[i].result_id;

                            if (data._pre_link == null) {
                                result.Verlinkung = db_data[i]._link;
                            }

                            if (data.subject_id == null) {
                                result.Fach = db_data[i].subject_id;
                            }

                            if (data.institution_id == null) {
                                result.Schulart = db_data[i].institution_id;
                            }

                            let _00 = db_data[i]._00;
                            let _01 = db_data[i]._01;

                            let _10 = db_data[i]._10;
                            let _11 = db_data[i]._11;
                            let _12 = db_data[i]._12;
                            let _13 = db_data[i]._13;

                            let _20 = db_data[i]._20;
                            let _21 = db_data[i]._21;
                            let _22 = db_data[i]._22;
                            let _23 = db_data[i]._23;

                            let _30 = db_data[i]._30;
                            let _31 = db_data[i]._31;
                            let _32 = db_data[i]._32;
                            let _33 = db_data[i]._33;
                            let _34 = db_data[i]._34;

                            let _40 = db_data[i]._40;
                            let _41 = db_data[i]._41;
                            let _42 = db_data[i]._42;

                            let _50 = db_data[i]._50;
                            let _51 = db_data[i]._51;
                            let _52 = db_data[i]._52;

                            let _60 = db_data[i]._60;
                            let _61 = db_data[i]._61;
                            let _62 = db_data[i]._62;

                            let _70 = db_data[i]._70;
                            let _71 = db_data[i]._71;

                            result['Bezüge Curriculum'] = _00;
                            result['Bezüge Bildungsstandards'] = _01;
                            result['Interessegeleitete Themenführung/Positionierung'] = _10;
                            result['Transparenz'] = _11;
                            result['Werbliche Elemente'] = _12;
                            result['Heterogenität/Gender'] = _13;
                            result['Handlungsorientierung'] = _20;
                            result['Lebensweltlichkeit'] = _21;
                            result['Reflexion/Urteilsfähigkeit'] = _22;
                            result['Multiperspektivität/Kontroversität'] = _23;
                            result['Methodenpluralität'] = _30;
                            result['Multimedia/Multimodalität'] = _31;
                            result['Medienkompetenz'] = _32;
                            result['Differenzierung'] = _33;
                            result['Barrierefreiheit/Inklusion'] = _34;
                            result['Transfer- und Anwendungsorientierung'] = _40;
                            result['Prozessorientierung (Kumulation)'] = _41;
                            result['Lernwegunterstützende Elemente (Scaffolding)'] = _42;
                            result['Sprachlichkeit'] = _50;
                            result['Bildsprache'] = _51;
                            result['Additive Kommunikation (Anreicherung)'] = _52;
                            result['Sequenzierung'] = _60;
                            result['Aktivierung'] = _61;
                            result['Multiple Lösungswege'] = _62;
                            result['Didaktisches Konzept'] = _70;
                            result['Rahmenbedingungen'] = _71;

                            if (db_data[i]._comment == null || (!db_data[i]._comment.replace(/\s/g, '').length)) {
                                result['Eigene Anmerkungen'] = 'Keine Angabe.'
                            } else {
                                result['Eigene Anmerkungen'] = db_data[i]._comment;
                            }

                            json_str += '\n\n' + JSON.stringify(result, null, 4);


                            if (_00 === 0) { _00COUNT_NULL++; }
                            else { _00SUM += _00; _00COUNT++; }
                            if (_01 === 0) { _01COUNT_NULL++; }
                            else { _01SUM += _01; _01COUNT++; }

                            if (_10 === 0) { _10COUNT_NULL++; }
                            else { _10SUM += _10; _10COUNT++; }
                            if (_11 === 0) { _11COUNT_NULL++; }
                            else { _11SUM += _11; _11COUNT++; }
                            if (_12 === 0) { _12COUNT_NULL++; }
                            else { _12SUM += _12; _12COUNT++; }
                            if (_13 === 0) { _13COUNT_NULL++; }
                            else { _13SUM += _13; _13COUNT++; }

                            if (_20 === 0) { _20COUNT_NULL++; }
                            else { _20SUM += _20; _20COUNT++; }
                            if (_21 === 0) { _21COUNT_NULL++; }
                            else { _21SUM += _21; _21COUNT++; }
                            if (_22 === 0) { _22COUNT_NULL++; }
                            else { _22SUM += _22; _22COUNT++; }
                            if (_23 === 0) { _23COUNT_NULL++; }
                            else { _23SUM += _23; _23COUNT++; }

                            if (_30 === 0) { _30COUNT_NULL++; }
                            else { _30SUM += _30; _30COUNT++; }
                            if (_31 === 0) { _31COUNT_NULL++; }
                            else { _31SUM += _31; _31COUNT++; }
                            if (_32 === 0) { _32COUNT_NULL++; }
                            else { _32SUM += _32; _32COUNT++; }
                            if (_33 === 0) { _33COUNT_NULL++; }
                            else { _33SUM += _33; _33COUNT++; }
                            if (_34 === 0) { _34COUNT_NULL++; }
                            else { _34SUM += _34; _30COUNT++; }

                            if (_40 === 0) { _40COUNT_NULL++; }
                            else { _40SUM += _40; _40COUNT++; }
                            if (_41 === 0) { _41COUNT_NULL++; }
                            else { _41SUM += _41; _41COUNT++; }
                            if (_42 === 0) { _42COUNT_NULL++; }
                            else { _42SUM += _42; _42COUNT++; }

                            if (_50 === 0) { _50COUNT_NULL++; }
                            else { _50SUM += _50; _50COUNT++; }
                            if (_51 === 0) { _51COUNT_NULL++; }
                            else { _51SUM += _51; _51COUNT++; }
                            if (_52 === 0) { _52COUNT_NULL++; }
                            else { _52SUM += _52; _52COUNT++; }

                            if (_60 === 0) { _60COUNT_NULL++; }
                            else { _60SUM += _60; _60COUNT++; }
                            if (_61 === 0) { _61COUNT_NULL++; }
                            else { _61SUM += _61; _61COUNT++; }
                            if (_62 === 0) { _62COUNT_NULL++; }
                            else { _62SUM += _62; _62COUNT++; }

                            if (_70 === 0) { _70COUNT_NULL++; }
                            else { _70SUM += _70; _70COUNT++; }
                            if (_71 === 0) { _71COUNT_NULL++; }
                            else { _71SUM += _71; _71COUNT++; }

                        }

                        let data_object = {
                            "Evaluation": input,
                            "Name": data._pre_tname,
                            "Verlinkung": (data._pre_link == null) ? 'Keine Angabe' : data._pre_link,
                            "Fach": (data.subject_id == null) ? 1 : data.subject_id,
                            "Schulart": (data.institution_id == null) ? 1 : data.institution_id,
                            "Bezüge Curriculum": (_00COUNT > 0)?(_00SUM/_00COUNT):0,
                            "Bezüge Bildungsstandards": (_01COUNT > 0)?(_01SUM/_01COUNT):0,
                            "Interessegeleitete Themenführung/Positionierung": (_10COUNT > 0)?(_10SUM/_10COUNT):0,
                            "Transparenz": (_11COUNT > 0)?(_11SUM/_11COUNT):0,
                            "Werbliche Elemente": (_12COUNT > 0)?(_12SUM/_12COUNT):0,
                            "Heterogenität/Gender": (_13COUNT > 0)?(_13SUM/_13COUNT):0,
                            "Handlungsorientierung": (_20COUNT > 0)?(_20SUM/_20COUNT):0,
                            "Lebensweltlichkeit": (_21COUNT > 0)?(_21SUM/_21COUNT):0,
                            "Reflexion/Urteilsfähigkeit": (_22COUNT > 0)?(_22SUM/_22COUNT):0,
                            "Multiperspektivität/Kontroversität": (_23COUNT > 0)?(_23SUM/_23COUNT):0,
                            "Methodenpluralität": (_30COUNT > 0)?(_30SUM/_30COUNT):0,
                            "Multimedia/Multimodalität": (_31COUNT > 0)?(_31SUM/_31COUNT):0,
                            "Medienkompetenz": (_32COUNT > 0)?(_32SUM/_32COUNT):0,
                            "Differenzierung": (_33COUNT > 0)?(_33SUM/_33COUNT):0,
                            "Barrierefreiheit/Inklusion": (_34COUNT > 0)?(_34SUM/_34COUNT):0,
                            "Transfer- und Anwendungsorientierung": (_40COUNT > 0)?(_40SUM/_40COUNT):0,
                            "Prozessorientierung (Kumulation)": (_41COUNT > 0)?(_41SUM/_41COUNT):0,
                            "Lernwegunterstützende Elemente (Scaffolding)": (_42COUNT > 0)?(_42SUM/_42COUNT):0,
                            "Sprachlichkeit": (_50COUNT > 0)?(_50SUM/_50COUNT):0,
                            "Bildsprache": (_51COUNT > 0)?(_51SUM/_51COUNT):0,
                            "Additive Kommunikation (Anreicherung)": (_52COUNT > 0)?(_52SUM/_52COUNT):0,
                            "Sequenzierung": (_60COUNT > 0)?(_60SUM/_60COUNT):0,
                            "Aktivierung": (_61COUNT > 0)?(_61SUM/_61COUNT):0,
                            "Multiple Lösungswege": (_62COUNT > 0)?(_62SUM/_62COUNT):0,
                            "Didaktisches Konzept": (_70COUNT > 0)?(_70SUM/_70COUNT):0,
                            "Rahmenbedingungen": (_71COUNT > 0)?(_71SUM/_71COUNT):0,
                            "Anzahl Datensätze:": db_data.length
                        };
                        console.log(data_object);

                        window.survey = new Survey.Model(json);
                        survey.data = data_object;
                        visualize(data_object);


                        document.getElementById('display_id').innerHTML = input;

                        document.getElementById('anmerkungen').innerHTML = `Die Anzahl der berücksichtigten Datensätze ist ${db_data.length}.`;

                        document.querySelector('#surveyResult').textContent += "\n\n" + json_str;

                        resolve();
                    } else {
                        reject("Es konnten keine entsprechenden Daten geladen werden.");
                    }
                }

            }

            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({"predefined_id": input}));

        } else {
            reject("Es müssen genau 10 Zeichen sein.");
        }
    }))

}

function getPredefinedData() {
    let input = document.getElementById('loadResultSet').value;

    return new Promise( ((resolve, reject) => {
        if (input.length === 10) {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "https://aaer.zlbib.uni-augsburg.de/loadPredefined");
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let db_data = this.responseText;
                    if (db_data.length > 0) {
                        console.log(db_data)
                        data = JSON.parse(db_data);
                        console.log(data)
                        resolve(db_data);
                    } else {
                        reject("Zum angegebenen Code wurde nichts gefunden!");
                    }

                }
            }

            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({"predefined_id": input}));

        } else {
            reject("Der angegebene Code muss genau 10 Zeichen lang sein!");
        }

    }))
}


function loadPredefined() {
    let input = document.getElementById('loadPredefined').value;

    return new Promise( (resolve, reject) => {
        if (input.length === 10) {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "https://aaer.zlbib.uni-augsburg.de/loadPredefined");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({"predefined_id": input}));


            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let db_data = this.responseText;
                    if (db_data.length > 0) {
                        window.survey = new Survey.Model(json);

                        survey.onComplete.add(function (sender, options) {
                            saveResult(sender.data);
                            visualize(sender.data);
                        });

                        console.log(db_data);
                        data = JSON.parse(db_data);

                        data_object = {
                            "Name": data._pre_tname,
                            "Verlinkung": data._pre_link,
                            "Fach": data.subject_id,
                            "Schulart": data.institution_id
                        };

                        all_questions = survey.getAllQuestions();
                        all_questions[0].readOnly = true;

                        if (data_object.Verlinkung != null) {
                            all_questions[1].readOnly = true;
                        };

                        if (data_object.Fach != null) {
                            all_questions[2].readOnly = true;
                        };

                        if (data_object.Schulart != null) {
                            all_questions[3].readOnly = true;
                        };

                        console.log(data_object);

                        survey.data = data_object;

                        $("#surveyElement").Survey({model: survey});


                        predefined = true;
                        predefined_id = input;

                        resolve();

                    } else {
                        reject("Zum angegebenen Code wurde nichts gefunden!");
                    }
                }
            }


        } else {
            reject("Der angegebene Code muss genau 10 Zeichen lang sein!");
        }

    });
}



function newSurveyData() {
    window.survey = new Survey.Model(json);

    survey.onComplete.add(function (sender, options) {
        saveResult(sender.data);
        visualize(sender.data);
    });

    survey.data = {};

    $("#surveyElement").Survey({model: survey});
}

function savePredefined() {
    return new Promise( ((resolve, reject) => {

        let input_tname = document.getElementById('survey_tname').value;
        if (!input_tname.replace(/\s/g, '').length) { // only whitespaces
            reject("Bitte Name des Lehr-/Lernmittels eingeben!");
        } else {
            let input_link = document.getElementById('survey_link').value;
            if (!input_link.replace(/\s/g, '').length) {
                input_link = null;
            }

            let input_subject = document.getElementById('survey_subject').value;
            if (input_subject === '' || input_subject == 1) {
                console.log("Kein Fach wird vorausgesetzt.");
                input_subject = null;
            }

            let input_institute = document.getElementById('survey_institution').value;
            if (input_institute == '' || input_institute == 1) {
                console.log("Keine Schulart wird vorausgesetzt.")
                input_institute = null;
            }

            //value_link = document.querySelector('input[name="answer_link"]:checked').value;
            let predefined_data = {
                "_pre_tname": input_tname,
                "_pre_link": input_link,
                "subject_id": input_subject,
                "institution_id": input_institute
            }

            let xhr = new XMLHttpRequest();
            xhr.open("POST", "https://aaer.zlbib.uni-augsburg.de/savePredefined");

            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log("db: " + this.responseText);
                    resolve(this.responseText);
                }
            }

            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(predefined_data));

        }

    }))

}

// Ende: Funktionen zur Darstellung der Diagramme


// Start: Radio Buttons Presets

function setSurveyData() {

    survey.data = {
        // "Name": "Bee-Bot Klassen-Set",
        // "Verlinkung": "https://www.betzold.de/prod/89809/",

        //Anlehnung an Curriculum und Bildungsstandards
        "Bezüge Curriculum": 4,
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


        // "Fach": 1,
        // "Schulart": 1,
        "Eigene Anmerkungen": "Super!"
    };

}

function toLastPage() {
    setSurveyData();
    console.log(survey.pages);
    console.log(survey.pages.length);
    survey.currentPage = survey.pages[30];
}

function generateCharts() {
    overallChart();
    grp1Chart();
    grp2Chart();
    grp3Chart();
    grp4Chart();
    grp5Chart();
    grp6Chart();
    grp7Chart();
    grp8Chart();
}

// Ende: Radio Buttons Presets

// Start: Optionen der Charts

barChartOptions = {
    animation: {
        duration: 0 // general animation time
    },
    responsiveAnimationDuration: 0, // animation duration after a resize
    legend: {
        display: true
    },
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

// Start: Optionen der Charts zur Darstellung als PDF

barNonResponsive = {
    animation: {
        duration: 0 // general animation time
    },
    legend: {
        display: true,
        labels: {
            fontSize: 14
        }
    },
    scales: {
        yAxes: [{
            ticks: {
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold",
                fontSize: 14,
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
                display: true,
                fontSize: 14
            }
        }]
    },
    responsive: false
};

// Ende: Optionen der Charts zur Darstellung als PDF

// Start: Details overallChart

function overallChart() {
    let canvas0 = document.getElementById('overallChart');
    let labels = ["Bezüge Curriculum", "Bezüge Bildungsstandards", "Interessensgeleitete Themenführung", "Transparenz", "Werbliche Elemente", "Heterogenität/Gender", "Handlungsorientierung", "Lebensweltlichkeit", "Reflexion / Urteilsfähigkeit", "Multiperspektivität / Kontroversität", "Methodenpluralität", "Multimedia / Multimodalität", "Medienkompetenz", "Differenzierung", "Barrierefreiheit / Inklusion", "Transferorientierung", "Prozessorientierung", "Lernwegunterstützend", "Sprachlichkeit", "Bildsprache", "Anreicherung", "Sequenzierung", "Aktivierung", "Multiple Lösungswege", "Didaktisches Konzept", "Rahmenbedingungen"];
    let values = [survey.getValue('Bezüge Curriculum'), survey.getValue('Bezüge Bildungsstandards'), survey.getValue('Interessegeleitete Themenführung/Positionierung'), survey.getValue('Transparenz'), survey.getValue('Werbliche Elemente'), survey.getValue('Heterogenität/Gender'), survey.getValue('Handlungsorientierung'), survey.getValue('Lebensweltlichkeit'), survey.getValue('Reflexion/Urteilsfähigkeit'), survey.getValue('Multiperspektivität/Kontroversität'), survey.getValue('Methodenpluralität'), survey.getValue('Multimedia/Multimodalität'), survey.getValue('Medienkompetenz'), survey.getValue('Differenzierung'), survey.getValue('Barrierefreiheit/Inklusion'), survey.getValue('Transfer- und Anwendungsorientierung'), survey.getValue('Prozessorientierung (Kumulation)'), survey.getValue('Lernwegunterstützende Elemente (Scaffolding)'), survey.getValue('Sprachlichkeit'), survey.getValue('Bildsprache'), survey.getValue('Additive Kommunikation (Anreicherung)'), survey.getValue('Sequenzierung'), survey.getValue('Aktivierung'), survey.getValue('Multiple Lösungswege'), survey.getValue('Didaktisches Konzept'), survey.getValue('Rahmenbedingungen')];
    let colors = [
        // 1. Bereich
        "#003f5c","#003f5c",
        // 2. Bereich
        "#2f4b7c","#2f4b7c","#2f4b7c","#2f4b7c",
        // 3. Bereich
        "#665191","#665191","#665191","#665191",
        // 4. Bereich
        "#a05195","#a05195","#a05195","#a05195","#a05195",
        // 5. Bereich
        "#d45087","#d45087","#d45087",
        // 6. Bereich
        "#f95d6a","#f95d6a","#f95d6a",
        // 7. Bereich
        "#ff7c43","#ff7c43","#ff7c43",
        // 8. Bereich
        "#ffa600","#ffa600"
    ];

    let sorted = [];

    for (let i = 0; i < labels.length; i++) {
        sorted.push({'label': labels[i], 'value': values[i], 'color': colors[i]});
    }

    sorted.sort(function (a, b) {
        return ((a.value > b.value) ? -1 : ( (a.value == b.value) ? 0 : 1 ));
    })

    for (let i = 0; i < sorted.length; i++) {
        labels[i] = sorted[i].label;
        values[i] = sorted[i].value;
        colors[i] = sorted[i].color;
    }

    dataALL = {
        labels: labels,
        datasets: [{
            label: "Übersichts-Chart",
            backgroundColor: colors,
            data: values
        }]
    };

    let Chart0 = new Chart(canvas0, {
        type: 'horizontalBar',
        data: dataALL,
        options: {
            legend: {
                display: false
            },
            animation: {
                duration: 0
            },
            maintainAspectRatio:false,
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

    let hiddenCanvas0 = window.document.getElementById('canvasALL');
    let hiddenChart0 = new Chart(hiddenCanvas0, {
        type: 'horizontalBar',
        data: dataALL,
        options: {
            legend: {
                display: false
            },
            animation: {
                duration: 0
            },
            maintainAspectRatio:false,
            scales: {
                xAxes: [{
                    ticks: {
                        max: 4,
                        min: 0,
                        stepSize: 1,
                        fontSize: 14
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontSize: 14
                    }
                }]
            },
            responsive: false
        }
    });
}

// Ende: Details overallChart

let maxBarWidth = 70;

// Start: Details grb1Chart

function grp1Chart() {
    let canvas1 = window.document.getElementById('grp1Chart');
    let data1 = {
        labels: ["Curriculum", "Bildungsstandards"],
        datasets: [{
            label: "Anlehnung an Curriculum und Bildungsstandards",
            backgroundColor: "#003f5c",
            maxBarThickness: maxBarWidth,
            data: [survey.getValue('Bezüge Curriculum'), survey.getValue('Bezüge Bildungsstandards')]
        }]
    };

    let Chart1 = new Chart(canvas1, {
        type: 'bar',
        data: data1,
        options: barChartOptions

    });

    let hiddenCanvas1 = window.document.getElementById('canvas1');
    let hiddenChart1 = new Chart(hiddenCanvas1, {
        type: 'bar',
        data: data1,
        options: barNonResponsive
    });
}

// Ende: Details grb1Chart



// Start: Details grb2Chart

function grp2Chart() {
    let canvas2 = document.getElementById('grp2Chart');
    data2 = {
        labels: [["Interessensgeleitete", "Themenführung"], "Transparenz", "Werbliche Elemente", ["Heterogenität /", "Gender"]],
        datasets: [{
            label: "Diskursive Positionierung",
            backgroundColor: "#2f4b7c",
            maxBarThickness: maxBarWidth,
            data: [survey.getValue('Interessegeleitete Themenführung/Positionierung'), survey.getValue('Transparenz'), survey.getValue('Werbliche Elemente'), survey.getValue('Heterogenität/Gender')]
        }]
    };

    let Chart2 = new Chart(canvas2, {
        type: 'bar',
        data: data2,
        options: barChartOptions

    });

    let hiddenCanvas2 = window.document.getElementById('canvas2');
    let hiddenChart2 = new Chart(hiddenCanvas2, {
        type: 'bar',
        data: data2,
        options: barNonResponsive
    });

}

// Ende: Details grb2Chart



// Start: Details grb3Chart

function grp3Chart() {
    let canvas3 = document.getElementById('grp3Chart');
    data3 = {
        labels: ["Handlungsorientierung", "Lebensweltlichkeit", "Reflexion", "Multiperspektivität"],
        datasets: [{
            label: "Makrodidaktische und bildungstheoretische Fundierung",
            backgroundColor: "#665191",
            maxBarThickness: maxBarWidth,
            data: [survey.getValue('Handlungsorientierung'), survey.getValue('Lebensweltlichkeit'), survey.getValue('Reflexion/Urteilsfähigkeit'), survey.getValue('Multiperspektivität/Kontroversität')]
        }]
    };

    let Chart3 = new Chart(canvas3, {
        type: 'bar',
        data: data3,
        options: barChartOptions

    });

    let hiddenCanvas3 = window.document.getElementById('canvas3');
    let hiddenChart3 = new Chart(hiddenCanvas3, {
        type: 'bar',
        data: data3,
        options: barNonResponsive
    });
}

// Ende: Details grb3Chart



// Start: Details grb4Chart

function grp4Chart() {
    let canvas4 = document.getElementById('grp4Chart');
    data4 = {
        labels: ["Methodenpluralität", "Multimedia", "Medienkompetenz", "Differenzierung", "Barrierefreiheit"],
        datasets: [{
            label: "Mikrodidaktische Umsetzung",
            backgroundColor: "#a05195",
            maxBarThickness: maxBarWidth,
            data: [survey.getValue('Methodenpluralität'), survey.getValue('Multimedia/Multimodalität'), survey.getValue('Medienkompetenz'), survey.getValue('Differenzierung'), survey.getValue('Barrierefreiheit/Inklusion')]
        }]
    };

    let Chart4 = new Chart(canvas4, {
        type: 'bar',
        data: data4,
        options: barChartOptions

    });

    let hiddenCanvas4 = window.document.getElementById('canvas4');
    let hiddenChart4 = new Chart(hiddenCanvas4, {
        type: 'bar',
        data: data4,
        options: barNonResponsive
    });
}

// Ende: Details grb4Chart



// Start: Details grb5Chart

function grp5Chart() {
    let canvas5 = document.getElementById('grp5Chart');
    data5 = {
        labels: ["Transferorientierung", "Prozessorientierung", "Lernwegunterstützend"],
        datasets: [{
            label: "Kognitive Strukturierung",
            backgroundColor: "#d45087",
            maxBarThickness: maxBarWidth,
            data: [survey.getValue('Transfer- und Anwendungsorientierung'), survey.getValue('Prozessorientierung (Kumulation)'), survey.getValue('Lernwegunterstützende Elemente (Scaffolding)')]
        }]
    };


    let Chart5 = new Chart(canvas5, {
        type: 'bar',
        data: data5,
        options: barChartOptions
    });

    let hiddenCanvas5 = window.document.getElementById('canvas5');
    let hiddenChart5 = new Chart(hiddenCanvas5, {
        type: 'bar',
        data: data5,
        options: barNonResponsive
    });
}

// Ende: Details grb5Chart



// Start: Details grb6Chart

function grp6Chart() {
    let canvas6 = document.getElementById('grp6Chart');
    data6 = {
        labels: ["Sprachlichkeit", "Bildsprache", "Anreicherung"],
        datasets: [{
            label: "Bild- und Textkomposition",
            backgroundColor: "#f95d6a",
            maxBarThickness: maxBarWidth,
            data: [survey.getValue('Sprachlichkeit'), survey.getValue('Bildsprache'), survey.getValue('Additive Kommunikation (Anreicherung)')]
        }]
    };

    let Chart6 = new Chart(canvas6, {
        type: 'bar',
        data: data6,
        options: barChartOptions
    });

    let hiddenCanvas6 = window.document.getElementById('canvas6');
    let hiddenChart6 = new Chart(hiddenCanvas6, {
        type: 'bar',
        data: data6,
        options: barNonResponsive
    });
}

// Ende: Details grb6Chart



// Start: Details grb7Chart

function grp7Chart() {
    let canvas7 = document.getElementById('grp7Chart');
    data7 = {
        labels: ["Sequenzierung", "Aktivierung", "Multiple Lösungswege"],
        datasets: [{
            label: "Aufgabendesign",
            backgroundColor: "#ff7c43",
            maxBarThickness: maxBarWidth,
            data: [survey.getValue('Sequenzierung'), survey.getValue('Aktivierung'), survey.getValue('Multiple Lösungswege')]
        }]
    };

    let Chart7 = new Chart(canvas7, {
        type: 'bar',
        data: data7,
        options: barChartOptions
    });

    let hiddenCanvas7 = window.document.getElementById('canvas7');
    let hiddenChart7 = new Chart(hiddenCanvas7, {
        type: 'bar',
        data: data7,
        options: barNonResponsive
    });
}

// Ende: Details grb7Chart



// Start: Details grb8Chart

function grp8Chart() {
    let canvas8 = document.getElementById('grp8Chart');
    data8 = {
        labels: ["Didaktisches Konzept", "Rahmenbedingungen"],
        datasets: [{
            label: "Anwendungstransparenz",
            backgroundColor: "#ffa600",
            maxBarThickness: maxBarWidth,
            data: [survey.getValue('Didaktisches Konzept'), survey.getValue('Rahmenbedingungen')]
        }]
    };

    let Chart8 = new Chart(canvas8, {
        type: 'bar',
        data: data8,
        options: barChartOptions
    });

    let hiddenCanvas8 = window.document.getElementById('canvas8');
    let hiddenChart8 = new Chart(hiddenCanvas8, {
        type: 'bar',
        data: data8,
        options: barNonResponsive
    });
}

// Ende: Details grb8Chart




// Start: Eingabe durch Enter-Taste als Alternative zum Button "Weiter" und zum Button "Fertig"

$(document).on('keypress',function(e) {
    //13 fuer Enter
    if (e.which == 13) {
        //Fertig
        if ($(document.querySelector("#sq_129i")).length > 0){
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



// Start: Display der Ergebnisse erst nach Beendigung der Umfrage und Eliminierung der übrigen Container

// $( ".sv_complete_btn" ).click(function() {
//     $( "#dashboard-aaer" ).css("display", "block");
//     $( "#ergebnisse_container" ).css("display", "block");
//     $( ".front-background" ).css("display", "none");
//     $( "#surveyElementContainer" ).css("display", "none");
//     $( "#carouselExampleSlidesOnly" ).css("display", "none");
//
// });

// Ende: Display der Ergebnisse erst nach Beendigung der Umfrage und Eliminierung der übrigen Container



// Start: Dynamische Progress Bar in Abhängigkeit der Klasse .sv_q_num

var res = "";
var specialChar = ".";

$( ".sv_next_btn" ).click(function() {

    // Holen Nummer mit Punkt
    res = $( ".sv_q_num" ).html();

    // Eliminierung von Punkt
    for (var i = 0; i < specialChar.length; i++) {
        var active = res.replace(new RegExp("\\" + specialChar[i], "gi"), "");
    }

    // Multiplikator zur Hochrechnung des Fortschritts
    active = active * 3.25;

    // Zusammenfügen als String
    res = active + "%";

    // Einfügen der width-property zur Darstellung des Fortschritts
    var progress = $( ".progress-bar" ).css("width",res);

});