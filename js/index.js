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

var json = {title:"Nutzung des Augsburger Analyse- und Evaluationsrasters für digitale und analoge Bildungsmedien (AAER)",
    pages: [
        {name:"Name", title: "Name des Lehr-Lernmittels", description: "Der Name wird später in Ihrer für Sie persönlich generierten Auswertung angezeigt.",

            questions: [
                {
                    type: "text",
                    name: "Name",
                    title: "Bitte geben Sie den Namen des Lehr-/ Lernmittels, das Sie mit Hilfe des AAER analysieren / evaluieren möchten, an.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Der Name wird später Ihrer persönlichen Auswertung, die Sie sich herunterladen können, angezeigt."
                }
            ]
        }, {name:"Verlinkung", title: "Link (optional)", description: "Sie können an dieser Stelle den Link zu dem zu analysierenden/ zu evaluierenden Lehr-Lernmittel angeben. Er wird in der abschließend für Sie generierten Auswertungsübersicht angezeit.",

            questions: [
                {
                    type: "text",
                    name: "Verlinkung",
                    title: "Bitte geben Sie den Link zu Ihrem Lehr-Lernmittel an (optional).",
                    isRequired: false,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält keine einseitigen Aussagen, Themenführungen oder Selbstdarstellungen von Organisationen/Anbietern und lässt sichtbar ein Bemühen erkennen, unterschiedliche und plurale Sichtweisen auf gesellschaft-liche Diskurse gleichberechtigt zu integrieren. Das wird z.B. auch dadurch signalisiert, dass Aussagen, die keine simplen Fakten darstellen, nicht als 'verabsolutierte' Aussagen formuliert sind. Dies gilt auch für sozusagen beiläufig vermittelte Inhalte oder Aussagen, die nicht in zentralem Zusammenhang mit dem Thema des Lehr-Lernmittels stehen (z.B. Aussagen in Textaufgaben, Anwendungsaufgaben, Abbildungen o.ä.).",
                }
            ]
        }, {name:"Interessegeleitete Themenführung/Positionierung", title: "Interessegeleitete Themenführung/Positionierung", description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transpor-tiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie rele-vanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",

            questions: [
                {
                    type: "radiogroup",
                    name: "Interessegeleitete Themenführung/Positionierung",
                    title: "Das Lehr-Lernmittel ist frei von einseitiger Informationsvermittlung bzgl. bestimmter Themen/Aussagen gesellschaftlicher Akteure.",
                    isRequired: true,
                    defaultValue: 5,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält keine einseitigen Aussagen, Themenführungen oder Selbstdarstellungen von Organisationen/Anbietern und lässt sichtbar ein Bemühen erkennen, unterschiedliche und plurale Sichtweisen auf gesellschaftliche Diskurse gleichberechtigt zu integrieren. Das wird z.B. auch dadurch signalisiert, dass Aussagen, die keine simplen Fakten darstellen, nicht als 'verabsolutierte' Aussagen formuliert sind. Dies gilt auch für sozusagen beiläufig vermittelte Inhalte oder Aussagen, die nicht in zentralem Zusammenhang mit dem Thema des Lehr-Lernmittels stehen (z.B. Aussagen in Textaufgaben, Anwendungsaufgaben, Abbildungen o.ä.).",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Transparenz", title: "Transparenz", description: "'Transparenz' bedeutet in diesem Zusammenhang, inwieweit für die nutzende Person eines Lehr-Lernmittels klar ersichtlich ist, von wem dieses Lehr-Lernmittel stammt, so dass eine (kritische) Bewertung und Einordnung erfolgen kann. Dafür ist es wichtig, dass im Lehr-Lernmittel selbstbezogene Informationen bereitstellt werden. Dazu gehört z.B., wer es entwickelt und verbreitet (Autor*innen, Herausgeber*innen und Fördernde – Personen und Zugehörigkeit zu bestimmten Organisationen), woher möglicherweise Gelder stammen, die zur Entwicklung des Lehr-Lernmittels genutzt wurden und woher die Informationen stammen, die im Lehr-Lernmittel enthalten sind (Quellen). Wichtige Informationen für die Lehrkraft sind in diesem Zusammenhang auch Aussagen über die Ziele, die mit diesem Angebot verfolgt werden bzw. Antworten auf die Frage, warum dieses Lehr-Lernmittel angeboten wird (Motivation).",

            questions: [
                {
                    type: "radiogroup",
                    name: "Transparenz",
                    title: "Das Lehr-Lernmittel ist transparent hinsichtlich seiner Autorenschaft/Anbieter.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Es werden Autor*innen und Anbieter sowie deren organisationale/institutionelle Zugehörigkeit genannt. Finanzierungsquellen werden offengelegt. Zusammenhänge (z.B. bei mehreren Anbietern oder beteiligten Organisationen) sind für die Lehrkraft nachvollziehbar. Außerdem werden Ziele des Lehr-Lernmittels und die Gründe für das Angebot (d.h. also eine Erklärung, warum dieses Lehr-Lernmittel angeboten wird) genannt.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Werbliche Elemente", title: "Werbliche Elemente", description: "Zur Frage steht hier, inwiefern und in welchem Ausmaß in Lehr-Lernmitteln werbliche Elemente dargestellt werden. Dies muss unter dem Aspekt, dass in vielen Bundesländern Werbung im Unterricht entweder verboten oder zumindest sehr kritisch betrachtet wird und mit bestimmten Auflagen versehen ist, problematisiert werden. Werbliche Elemente im Zusammenhang mit Lehr-Lernmitteln können sein: Logos, Produktabbildungen, Nennung von Marken u.ä., die nicht Gegenstand des Unterrichts sind (d.h., die nicht unter fachlicher oder medienpädagogischer Perspektive thematisiert werden).",

            questions: [
                {
                    type: "radiogroup",
                    name: "Werbliche Elemente",
                    title: "Das Lehr-Lernmittel ist frei von Werbung.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Es sind keine der oben genannten Elemente im Lehr-Lernmittel enthalten. Höchstens eine direkt auf den Anbieter des Lehr-Lernmittels bezogene Namensnennung (Quelle) oder das Logo des Anbieters ist enthalten - jedoch sollte dieses nicht in visuell dominanter Weise präsentiert werden.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Heterogenität/Gender", title: "Heterogenität/Gender", description: "Lehr-Lernmittel enthalten direkt oder indirekt (z.B. über visuelle Darstellungen, Bilder, Grafiken oder auch im Rahmen von Textteilen) Repräsentationen/Darstellungen einer sozialen und gesellschaftlichen Umwelt, die sie jedoch auch gleichzeitig aufgrund dieser Darstellung für das Verständnis der SuS wiederum beeinflusst und 'erzeugt'. In einer pluralistisch verfassten, demokratischen Gesellschaft erscheint es wichtig, dass einseitige Zuschreibungen/Festlegungen auf gesellschaftliche bzw. ethnische Gruppen oder Minderheiten, auf Menschen mit Beeinträchtigungen sowie auf Geschlecht oder Religion vermieden werden. Darüber hinaus erscheint es als wichtig, dass eine kulturelle Vielfalt, wie sie unter den SuS herrscht, auch in Lehr-Lernmitteln repräsentiert wird.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Heterogenität/Gender",
                    title: "Das Lehr-Lernmittel ist in seinen textlichen und bildlichen Darstellungen von gesellschaftlichen bzw. ethnischen Gruppen sowie hinsichtlich der Kategorie Geschlecht ausgewogen und in ihm werden einseitige, reduzierende Darstellungen vermieden.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n In Abbildungen, Fotos und textlichen Beschreibungen, in den gesellschaftliche Gruppen vorkommen, werden diese nicht vereinseitigend dargestellt (etwa indem eine bestimmte gesellschaftliche Gruppe bestimmten Tätigkeiten, Meinungen und Verhaltensweisen vereinfachend zugeordnet wird). Für die Kategorie Geschlecht gilt, dass eine ausgewogene, sozusagen gleichberechtigte Darstellung von weiblichen und männlichen Personen enthalten ist, in der ebenfalls vereinseitigende Zuordnungen vermieden bzw. möglicherweise sogar bewusst aufgebrochen werden. In ähnlicher Weise erfolgt die Darstellung unterschiedlicher gesellschaftlicher Gruppen, Ethnien und Menschen mit Beeinträchtigungen - dies unter anderem auch deshalb, um der Heterogenität der SuS in diesem Bereich Rechnung zu tragen und entsprechende Identifikationsangebote zu bieten.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Handlungsorientierung", title: "Handlungsorientierung", description: "Das Konzept der 'Handlungsorientierung' zielt auf die aktive Erschließung von Wissen und Kompetenzen durch die SuS ab. Dabei ist es in einen bildungstheoretischen Rahmen eingeordnet, der übergeordnete Bildungsziele der Selbst- und Mitbestimmungsfähigkeit (Klafki) als wichtige Normen für die übergeordneten Ziele von Unterricht anerkennt. Ein Handlungsorientierter Unterricht zeichnet sich unter anderem dadurch aus, dass SuS aktiv tätig werden und eigene Arbeits bzw. Denkergebnisse produzieren. Das kann im Rahmen von individuellen Aufgabenstellungen geschehen, es bieten sich dazu jedoch auch vielfältige Formen gruppenorientierten entdeckenden Lernens (Kooperation, Kollaboration) an. So interpretiert impliziert 'Handlungsorientierung' auch Eigenverantwortlichkeit und damit die Möglichkeit bzw. Notwendigkeit, mit eigenen Entscheidungen den Lern- bzw. Bildungsprozess zu beeinflussen/zu gestalten.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Handlungsorientierung",
                    title: "Das Lehr-Lernmittel ist handlungsorientiert gestaltet, indem es Verantwortungsübernahme für Lernwege und Lernergebnisse durch die SuS fördert/fordert.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Im bzw. durch das Lehr-Lernmittel werden die SuS weitreichend zu aktiven Gestaltenden ihres eigenen Lernprozesses bzw. der Anwendung von Wissen, Fertigkeiten und Kompetenzen. Das zeigt sich u.U. auch darin, dass individuell oder auch in Gruppen echte Entscheidungen über Lernwege oder die Anwendung von Wissen, Fertigkeiten und Kompetenzen getroffen werden, was wiederum Wahlmöglichkeiten auf Seiten der SuS voraussetzt.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Lebensweltlichkeit", title: "Lebensweltlichkeit", description: "Hier geht es um die Frage, inwiefern das Lehr-Lernmittel Bezüge zur Lebenswelt der Schülerinnen und Schüler aufweist. Das geschieht z.B. dadurch, dass es zentrale und authentische Problemstellungen zur Grundlage hat, die unter gesellschaftlich-politischer oder unter individueller bzw. gruppenspezifischer (Klassengruppe, PeerGroup) Perspektive für die Schülerinnen und Schüler relevant sind. Dazu kann auch gehören, dass das Lehr-Lernmittel bewusst den emotionalen Aspekt dieser Lebenswelt thematisiert.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Lebensweltlichkeit",
                    title: "Das Lehr-Lernmittel weist Bezüge zur Lebenswelt der Schülerinnen und Schüler auf.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel weist nicht nur allgemeine Bezüge zur Lebenswelt der Schülerinnen und Schüler auf, sondern diese werden konkretisiert, indem z.B. reale Elemente/Materialien/Aussagen aus der aktuellen Zeitgeschichte aufgegriffen werden, die eine (emotionale) Nähe zu den Schülerinnen und Schülern aufweisen (z.B. aus Zeitschriften, Webseiten sowie konkrete Ereignisse, Bezüge zu Fragen der Identitätsentwicklung, der Lebensgestaltung, Freizeit oder Beruf etc.).",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                } //übernimmt wert von 6 # erledigt
            ]
        }, {name:"Reflexion/Urteilsfähigkeit", title: "Reflexion/Urteilsfähigkeit", description: "Übergeordnete pädagogische Bildungsziele wie Mündigkeit, Selbst-, Mitbestimmungs- und Solidaritätsfähigkeit (Klafki) verlangen, dass SuS im Hinblick auf fachliche Themen aber auch auf ihre nahe und weite Umwelt sowie Lebenswelt als verantwortliche, urteilende Menschen angesprochen werden. Dazu gehört auch ein Maß an Selbstreflexion, d.h. dass SuS auch sich selbst, die eigene Situation, die Situation der Gruppe und ihre politische, soziale bzw. gesellschaftliche Position zum Gegenstand des Denkens machen (Metakognition, Reflexion).",

            questions: [
                {
                    type: "radiogroup",
                    name: "Reflexion/Urteilsfähigkeit",
                    title: "Das Lehr-Lernmittel spricht die SuS als Menschen an, die sich selbst und ihre Umwelt zum Gegenstand des eigenen Denkens und Urteilens machen.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel fördert die Bildung einer eigenen begründeten Meinung bzw. die argumentative Äußerung dieser Meinung. Die SuS werden z.B. explizit aufgefordert, auf der Basis ihres fachlichen Wissens und der Ihnen zur Verfügung stehenden Informationen, ein Urteil als Antwort auf eine bestimmte Fragestellung zu fällen. Dabei kann auch eine gewissermaßen überfachliche Dimension eine Rolle spielen, indem z.B. fachliche Themen in ihren gesellschaftlichen, politischen oder sozialen Bezügen eingebettet und zum Gegenstand gemacht werden.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Multiperspektivität/Kontroversität", title: "Multiperspektivität/Kontroversität", description: "Lehr-Lernmittel referenzieren als direkten Unterrichtsgegenstand oder auch als begleitendes Nebenthema immer wieder Themen, die innerhalb der Gesellschaft (oder auch in der Fachwissenschaft) multiperspektivisch oder auch kontrovers diskutiert werden. Es ist ein zentrales Anliegen eines pädagogisch verantworteten Unterrichtens, dass Lernende in solchen Themen nicht durch Unterricht und Lehrmittel bereits einseitig für eine mögliche Position/Meinung vereinnahmt werden, sondern dass sie auf Basis von Fakten sowie unterschiedlichen Argumenten zu einer eigenen Meinungsbildung hingeführt bzw. ermächtigt werden. Dies gilt vorbehaltlich einer altersgemäßen Komplexitätsreduktion bzw. Elementarisierung durch die Autor*innen des Lehr-Lernmittels. Insofern sind die Entwickler*innen gefordert, nicht nur eine einseitige Darstellung von Themen/Sachverhalten in Lehr-Lernmitteln zu vermeiden, sondern auch sensibel für plurale Sichtweisen zu sein und, wo vorhanden, auch die Kontroversität, die möglicherweise in Fachwissenschaft und Gesellschaft vorzufinden ist, den Lernenden nicht vorzuenthalten.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Multiperspektivität/Kontroversität",
                    title: "Themen bzw. Probleme, die in Gesellschaft bzw. Wissenschaft kontrovers und multiperspektivisch diskutiert werden, werden im Lehrmittel ebenfalls kontrovers und multiperspektivisch dargestellt.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Die im Lehr-Lernmittel dargestellten Themen, seien es zentrale oder begleitende, lassen in der Art der Darstellung für die Lernenden erkennen, dass es für ihre Bewertung unterschiedliche Positionen, Meinungen, Sichtweisen oder Argumente gibt. Es werden nicht nur einseitige Aussagen, Wertungen oder Formulierungen vermieden, die den Anschein der Alternativlosigkeit vermitteln, sondern die Lernenden werden durch das Lehr-Lernmittel für das Bestehen unterschiedlicher, kontroverser Sichtweisen sensibilisiert. Zudem wird durch die Präsentation der Themen/der Inhalte sowie durch die Art der sprachlichen Vermittlung eine Offenheit für eine eigene Meinungsbildung/Bewertung gewährleistet.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Methodenpluralität", title: "Methodenpluralität", description: "Methoden sind 'Lern- und Arbeitstechniken zum selbständigen und sachgerechten Erkennen, Entdecken, Experimentieren, Bearbeiten, Konstruieren, Gestalten, Präsentieren, Kommunizieren und Kontrollieren' (Wiater). Klippert unterscheidet Methoden der Informationsbeschaffung (Lesen, Nachschlagen, Befragen, etc.), der Informationsverarbeitung und Aufbereitung (Strukturieren, Visualisieren, Gestalten, etc.), Methoden der Arbeits-, Zeit- und Lernplanung und Methoden, die das Nachdenken über das eigene Lernen fördern (Klippert). Einzelne Methoden können in Lehr-Lernmitteln bewusst eingesetzt werden, um die beabsichtigten Lernprozesse und Aktivitäten zu unterstützen. Sie können auch direkt thematisiert, in ihrer Bedeutung erläutert und gezielt eingeübt werden, um ihre Effektivität zu erhöhen (Förderung von Methodenkompetenz). Methoden erfüllen dabei keinen Selbstzweck, sondern haben eine Funktion innerhalb der übergeordneten Ziele des Lern-prozesses (inkl. allgemeiner und überfachlicher Entwicklungsziele der SuS). ",

            questions: [
                {
                    type: "radiogroup",
                    name: "Methodenpluralität",
                    title: "Das Lehr-Lernmittel setzt gezielt unterschiedliche Methoden ein, die den übergeordneten Zielen des Lernprozesses dienen.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Im Lehr-Lernmittel werden (unterschiedliche) Methoden gezielt eingesetzt, um bestimmte Aufgaben oder Sequenzen zu unterstützen. Diese Methoden zielen auf die Tätigkeit der SuS ab. Dabei geht es nicht darum, möglichst viele unterschiedliche Methoden einzusetzen (Selbstzeck), sondern nach Möglichkeit solche, die die angestrebten Ziele, Fertigkeiten und Kompetenzen didaktisch unterstützen. Hilfreich ist es, wenn der Sinn oder die Zielsetzung der eingesetzten Methoden genannt wird oder in Bezug auf ihre damit verbundene Zielsetzung transparent ist.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                } // übernimmt den wert von 8 # erledigt
            ]
        }, {name:"Multimedia/Multimodalität", title: "Multimedia/Multimodalität", description: "Medien können ein eindrückliches Mittel sein, Sachverhalte zu veranschaulichen, Informationen didaktisch aufzubereiten, verständlich zu präsentieren und Anknüpfungen an die Lebenswelt von Jugendlichen zu schaffen. Lehr-Lernmittel können Medien nutzen um Lernende auf unterschiedlichen Wegen anzusprechen und ihren Lerninhalt abgestimmt auf die damit verbundenen Lernziele zu vermitteln. Dies kann besonders effektiv gelingen, wenn in Lehr-Lernmitteln unterschiedliche 'Kanäle' oder Medienformate kombiniert werden, um so mehrere sensorische Kanäle der Lernenden anzusprechen (Multimodalität). Sie können dabei auch Wahlmöglichkeiten bieten, welche Medienarten für spezifische Schritte des Lernprozesses genutzt werden können.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Multimedia/Multimodalität",
                    title: "Das Lehr-Lernmittel transportiert seine Lerninhalte auf multimediale/multimodale Art und Weise.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Wesentliche Inhalte des Lehr-Lernprozesses, der durch das Lehr-Lernmittel angestrebt wird, werden medial aufbereitet vermittelt bzw. machen mediale Darstellungen zum Gegenstand des Lernhandelns für die SuS. Unterschiedliche Medienarten bzw. 'Kanäle' (z.B. auditive, audiovisuelle, annotierte oder symbolische Illustrationen/Videos, interaktive Webelemente, etc.) werden genutzt und in sinnvoller Weise kombiniert, um den Lernprozess zu fördern. Dies kann auch so umgesetzt werden, dass Wahlmöglichkeiten je nach individueller Präferenz für unterschiedliche Medienarten auf Seiten der Lernenden bestehen.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Medienkompetenz", title: "Medienkompetenz", description: "Medien sind Teil der kulturellen und sozialen Umwelt von SuS sowie wesentlicher Träger der Informations- und Wissensgesellschaft, in der wir leben. Sie sind daher gleichermaßen ein notwendiges Lehr-Lernfeld und auch ein didaktisches Mittel, um Lehr-Lernprozesse zu unterstützen (Mittlerfunktion). Durch sie kann man auf besonders eindrückliche Weise Sachverhalte veranschaulichen, Informationen didaktisch aufbereiten und verständlich präsentieren und Anknüpfungen an die Lebenswelt von Kindern und Jugendlichen schaffen. Es ist wichtig, die kompetente Nutzung sowie die kritische Reflexion von Medien als Kommunikationsmittel und 'Mittler von Welt' zu fördern und zu trainieren. Medienkompetenz lässt sich in diesem Sinn verstehen als Vermögen (Fähigkeit) und Bereitschaft in Medienzusammenhängen zu handeln, über diese zu kommunizieren und kritisch zu reflektieren.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Medienkompetenz",
                    title: "Das Lehr-Lernmittel fördert einen kompetenten Umgang mit Medien.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Die Lernenden sind nicht nur passive Rezipienten medialer Inhalte, sondern setzen sich aktiv und reflexiv mit Mediendarstellung und/oder Kommunikation auseinander. Sie arbeiten, lernen und machen Lernfortschritte unter Nutzung von Medien. Und - wo möglich - erstellen sie sogar eigene Medieninhalte oder werden herausgefordert mediale Repräsentationen kritisch und reflexiv zu hinterfragen, um Medienkompetenz zu fördern.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Differenzierung", title: "Differenzierung", description: "Eine besondere Herausforderung für die Gestaltung von Unterricht stellt die Anpassung an eine heterogene Schülerschaft dar. Dazu können Lehr-Lernmittel einen wichtigen Beitrag leisten, indem sie sozusagen 'Variationen' ihrer selbst anbieten (Parallelisierung von Unterricht). Diese können z.B. über die Bereitstellung unterschiedlicher Anwendungsgebiete und Lernziele (auch mit unterschiedlichen Schwierigkeitsgraden) und darauf abgestimmter Arbeitsschritte bzw. unterschiedlicher Arbeitsaufträge innerhalb des Lehr-Lernmittels erfolgen. Dabei ist wichtig, dass die Ergebnisse der parallel durchgeführten Lernsequenzen auch wieder zusammengeführt werden.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Differenzierung",
                    title: "Das Lehr-Lernmittel beinhaltet Angebote für binnendifferenzierte Lernarrangements.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält Variationsangebote, die zeitlich parallel umgesetzt werden können. Diese gehen über einfache Arbeitsgruppen hinaus, die dieselben Ziele lediglich auf unterschiedliche Gegenstände umsetzen.  Sie enthalten z.B. auch unterschiedliche Lernziele, unterschiedliche Schwierigkeitsgrade, aufeinander verweisende Arbeitsschritte u.ä. Dabei wird zudem die Sicherung von verbindlichen Ergebnissen für alle Schülerinnen und Schüler nicht vernachlässigt.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Barrierefreiheit/Inklusion", title: "Barrierefreiheit/Inklusion", description: "Lehr-Lernmittel können wesentlich zur erfolgreichen Gestaltung von inklusiven Unterrichtsszenarien beitragen, indem sie barrierefreie Zugänge für SuS mit Beeinträchtigungen bieten (insbesondere für SuS mit Seh-, Hör- oder Lernbeeinträchtigungen). Für Menschen mit Hör oder Sehbeeinträchtigungen ist beispielsweise die Beachtung des Zwei-Sinne-Prinzips von Bedeutung, d.h. ein Element/Inhalt des Lehr-Lernmittels wird immer vollständig auf zwei Wegen (auditiv und visuell) vermittelt. Außerdem können Untertitel in Videos, zusätzliche Texte, die den Inhalt einer Grafik oder einer Abbildung beschreiben, die Integration von Gebärdensprache, Möglichkeiten zur digitalen Sprachausgabe per Screenreader oder die Nutzbarkeit von Vergrößerungssoftware sowie Audiodeskriptionen etc. die Zugänglichkeit des Lehr-Lernmittels für die genannte Personengruppe erleichtern. Für Menschen mit Lernschwierigkeiten ist es sinnvoll, beispielsweise die Texte des Lehr-Lernmittels in leichter Sprache zu integrieren.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Barrierefreiheit/Inklusion",
                    title: "Das Lehr-Lernmittel bietet barrierefreie Zugänge für SuS mit Beeinträchtigungen.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält durchgängig in allen seinen Bestandteilen/Inhalten Elemente und Anreicherungen, die eine Barrierefreiheit für zumindest eine der beschriebenen Zielgruppen ermöglicht.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Transfer- und Anwendungsorientierung", title: "Transfer- und Anwendungsorientierung", description: "In Lehr-Lernmitteln können unterschiedliche kognitive Prozesse angeregt bzw. angestrebt werden. Solche kognitiven Prozesse lassen sich grob unter folgenden Aktionswörtern zusammenfassen (aufsteigende Reihenfolge, was die Komplexität des Vorgangs angeht): erinnern, verstehen, anwenden, analysieren, bewerten, erschaffen. Kompetenzorientiertes Unterrichten wird in der Regel darauf abzielen, neben den elementaren kognitiven Prozessen 'erinnern' und 'verstehen' auch - entsprechend der Lern- bzw. Kompetenzziele - 'höhere' kognitive Prozesse anzuregen. Daher können in Lehr-Lernmitteln bewusst entsprechende Prozesse in Form von Fragen, Aufgaben oder Anschauungen integriert sein.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Transfer- und Anwendungsorientierung",
                    title: "Durch das Lehr-Lernmittel werden gezielt kognitive Prozesse angesprochen, die über elementare kognitive Prozesse hinausgehen und als transfer bzw. anwendungsorientiert zu bezeichnen sind.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Es lassen sich im Lehr-Lernmittel in den einzelnen Teilen/Sequenzen die jeweils angeregten/beabsichtigten kognitiven Prozesse identifizieren bzw. sie sind möglicherweise sogar ausgewiesen. Außerdem finden sich Fragen oder Aufgaben, die z.B. darauf abzielen, dass die SuS aufgebautes Wissen auf andere Objekte anwenden (Transfer), Sachverhalte eigenständig analysieren, eigene Bewertungen auf der Basis ihres Wissens und der erworbenen fachlichen Fertigkeiten vornehmen oder sogar eigenständig neues Wissen oder Fertigkeiten für unbekannte Anwendungsgebiete bilden bzw. entwickeln, um fachliche Probleme zu lösen.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Prozessorientierung (Kumulation)", title: "Prozessorientierung (Kumulation)", description: "Ein Lehr-Lernmittel besteht oftmals aus mehreren aufeinanderfolgenden Sequenzen, die sukzessive auf ein bestimmtes Ziel bzw. auch unterschiedliche Teilziele in einem Gesamtzusammenhang des Unterrichtens bzw. Lernens hinleiten sollen. Zur Frage steht, inwiefern die Verknüpfung der einzelnen Sequenzen einen fachlichen bzw. didaktisch sinnvollen Zusammenhang erkennen lässt. Bedeutsam ist darüber hinaus, dass in der Regel ein kumulativer, schrittweiser Aufbau von Wissen, Fertigkeiten und Kompetenzen als erfolgversprechend zu betrachten ist. Dabei kann auch die Anknüpfung am Vorwissen der SuS (sozusagen als Ausgangspunkt) eine Rolle spielen.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Prozessorientierung (Kumulation)",
                    title: "Das Lehr-Lernmittel verknüpft einzelne Sequenzen zu einem Prozess und unterstützt damit das Prinzip eines kumulativen Aufbaus von Wissen, Fertigkeiten und Kompetenzen.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Sequenzen sind im Lehr-Lernmittel als solche zu erkennen und in ihren Verweisungszusammenhängen untereinander deutlich. In Bezug auf Unterrichtsziele, angestrebte Fertigkeiten und Kompe-tenzen lässt sich eine schrittweise Vorgehensweise erkennen bzw. mit dem Lehr-Lernmittel umsetzen. Unter Umständen ist das Lehr-Lernmittel sogar so konzipiert, dass es die Bedeutung seiner einzelnen Schritte und Zusammenhänge selbst erklärt und transparent macht.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Lernwegunterstützende Elemente (Scaffolding)", title: "Lernwegunterstützende Elemente (Scaffolding)", description: "Zur Frage steht hier, inwiefern Lehr-Lernmittel Elemente enthalten, die ihren Nutzer*innen - hier insbesondere den Schülerinnen und Schülern - deutlich machen können, wie mit dem Lehr-Lernmittel gelernt werden kann/soll. Dazu können erläuternde und erklärende Hinweise gegeben werden (Vor-/ Nachbemerkungen, Kommentare, Textbausteine, Marginalien). Wichtig hierbei ist, dass diese sich auf den Lernweg der Schülerinnen und Schüler beziehen und den Lernprozess bzw. die Lernaktivität unterstützen/fördern/anleiten.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Lernwegunterstützende Elemente (Scaffolding)",
                    title: "Das Lehr-Lernmittel enthält Elemente, die den Lernprozess der Schülerinnen und Schüler unterstützen, indem sie Aussagen machen, die sich auf den Lernweg bzw. die Lernaktivität der Schülerinnen und Schüler beziehen.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Lernwegunterstützende Elemente finden sich nicht nur vereinzelt, sondern sind erkennbar systematisch an den Schlüsselstellen des Lehr-Lernmittels integriert und haben damit eine 'rahmende' Funktion. Solche Elemente können sein: Vor- und Nachbemerkungen, Kommentare zu Inhalten oder Lernprozessen des Lehr-Lernmittels (diese können sich auch metakognitiv direkt auf die SuS beziehen).",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Sprachlichkeit", title: "Sprachlichkeit", description: "Damit Lehr-Lernmittel in der Breite von Schülerinnen und Schülern genutzt werden können, ist es vorteilhaft (auch, aber nicht nur für schwächere Schülerinnen und Schüler), wenn sie in allen ihren Teilen (auch in Aufgabenstellungen) eine klare, einfache Sprache kennzeichnet. Davon unbetroffen sind für die fachliche Aufarbeitung nötige Fach und Fremdwörter. Textpassagen sind darüber hinaus 'kohärent' d.h. sie weisen eine logische Verknüpfung ihrer Abschnitte auf (Sprachfluss ohne Unterbrechungen).",

            questions: [
                {
                    type: "radiogroup",
                    name: "Sprachlichkeit",
                    title: "Die Sprache des Lehr-Lernmittels ist klar und verständlich.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält keine unnötig langen und verschachtelten Sätze. Auch Aufgaben sind direkt und klar formuliert, und es werden nicht mehrere Aufgabenstellungen in einer einzelnen Aufgabe vermischt. Fachbegriffe und Fremdwörter werden im fachlich nötigen und sinnvollen Rahmen eingesetzt oder gegebenenfalls erläutert. Es existieren keine sprachlichen bzw. logischen Brüche zwischen einzelnen Sätzen oder Abschnitten.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Bildsprache", title: "Bildsprache", description: "Über unterschiedliche bildliche Darstellungen (z.B. Fotos, Diagramme, Tabellen, Charts, Animationen) können Sachverhalte vermittelt, verdeutlicht und erklärt werden. Diese bildlichen Elemente sollten in einem logischen und didaktischen Zusammenhang zum Thema und zu den Zielen des Lehr-Lernmittels stehen. Außerdem sind bildliche Elemente in der Regel in textliche Elemente eingebettet oder in Zusammenhang gesetzt - dieser Zusammenhang sollte möglichst klar sein. Es kann zur Förderung von bildlichem Verstehen und Interpretationsvermögen sinnvoll sein, dass abstrahierte bildliche Darstellungen (z.B. Charts) mit textlichen Elementen versehen sind, die erklärenden Charakter haben.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Bildsprache",
                    title: "Bildliche Elemente werden im Lehr-Lernmittel in klarer und logischer Zuordnung zum Unterrichtsthema bzw. -ziel eingesetzt.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel verwendet bildliche Elemente über eine rein illustrative Funktion hinaus. Sie stehen im Zusammenhang zum Unterrichtsthema und -ziel und leisten einen eigenen Beitrag zum Verstehen, Erklären oder Anwenden von Wissen, Fertigkeiten und Kompetenzen, die für den durch das Lehr-Lernmittel angeregten Unterrichtsprozess wichtig sind. Sie sind dabei auch textlich eingebettet, was z.B. durch erklärende Textpassagen oder Beschriftungen erreicht wird.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Additive Kommunikation (Anreicherung)", title: "Additive Kommunikation (Anreicherung)", description: "Hiermit ist gemeint, dass das Lehr-Lernmittel auch über die rein fachliche Aufbereitung hinaus zusätzliche Elemente integriert und jene 'anreichern' kann. Dies können z.B. sein: Lebensweltbezüge im Sinne von Zusatzinformationen, Anekdoten oder humoristischen Passagen. Es können auch Zusätze sein, die sich ergänzend oder vertiefend auf die im Lehr-Lernmittel präsentierten Inhalte beziehen (z.B.: Zusammenfassungen, Exkurse, Merksätze, Glossare, Begriffserklärungen).",

            questions: [
                {
                    type: "radiogroup",
                    name: "Additive Kommunikation (Anreicherung)",
                    title: "Das Lehr-Lernmittel integriert zusätzliche kommunikative Elemente, die die Inhalte des Lehr-Lernmittels unterstützen/anreichern.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält über eine reine fachliche Aufbereitung des Unterrichtsthemas und der Unterrichtsziele hinaus auch zusätzliche Elemente (Text/Bild/Sprache), die die SuS ansprechen, z.B. in ihren lebensweltlichen Bezügen, oder als Ergänzung, Erklärung sowie Verstärkung der im Lehr-Lernmittel präsentierten Inhalte.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Sequenzierung", title: "Sequenzierung", description: "Aufgaben, die im Lehr-Lernmittel gestellt werden, sollten in einem fachlichen und/oder didaktischen Zusammenhang zueinanderstehen. Hier kann entsprechend die Frage gestellt werden, welche kognitiven Leistungen/Prozesse (z.B. etwas erinnern, verstehen, anwenden, analysieren, bewerten, erschaffen) in den einzelnen Aufgaben oder ihren Teilen angeregt werden und ob diese in sinnvollem Zusammenhang zueinander stehen - also z.B. aufeinander aufbauen, zueinander hinführen oder ein Thema/eine Kompetenz aus unterschiedlichen Teilaspekten behandeln und vertiefen.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Sequenzierung",
                    title: "Die im Lehr-Lernmittel enthaltenen Aufgaben stehen in einem didaktisch oder fachlich sinnvollen Zusammenhang zueinander.",
                    isRequired: true,
                    hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Die im Lehr-Lernmittel enthaltenen Aufgaben sind in einer aus fachlicher oder didaktischer Perspektive verständlichen Weise sequenziert. Sie verweisen aufeinander/bauen aufeinander auf und dabei werden nicht nur gleiche oder ähnliche kognitive Prozesse wiederholt. ",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Aktivierung", title: "Aktivierung", description: "Hier geht es um die Frage, inwiefern ein Lehr-Lernmittel insgesamt eine grundlegende Problemstellung verfolgt, die im Verlauf durch die Schülerinnen und Schüler bearbeitet und gelöst wird. Diese Problemstellung wird in der Regel am Anfang des Lehr-Lernmittels formuliert und bietet damit das 'Setting' für die sich daraus ergebenden Schritte und Aufgaben, wodurch lernpsychologisch betrachtet eine Aktivierung der Schülerinnen und Schüler erfolgt (Motivation).",

            questions: [
                {
                    type: "radiogroup",
                    name: "Aktivierung",
                    title: "Das Lehr-Lernmittel steht unter einer übergeordneten/umgreifenden Problemstellung, die durch die Schülerinnen und Schüler bearbeitet und gelöst wird.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Zu Beginn des durch das Lehr-Lernmittel initiierten Lernprozesses wird eine Problemstellung formuliert, die es im Verlauf zu lösen gilt. Alle nachfolgenden Unterrichtsschritte sind auf diese Problemstellung bezogen und führen nach und nach zur Lösung bzw. vertiefen diese.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Multiple Lösungswege", title: "Multiple Lösungswege", description: "Nicht immer gibt es eine festgefertigte Methode, eine fachliche Prozedur oder eine Sichtweise, um ein Problem oder eine Aufgabe zu lösen. Lehr-Lernmittel können hierfür sensibel sein und - wo möglich - unterschiedliche Wege zu einer Lösung zu kommen zulassen oder diese sogar anregen. Damit wird ein Spielraum für verschiedene plausible Strategien unterschiedlicher SuS ermöglicht, andererseits Flexibilität in verschiedenen Lösungsgsansätzen gefördert.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Multiple Lösungswege",
                    title: "Die im Lehr-Lernmittel enthaltenen Aufgaben regen die SuS zur Entwicklung mehrerer Lößungswege an.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Lehr-Lernmittel lassen Raum für unterschiedliche Herangehensweisen, ohne dabei die SuS gänzlich ohne jegliche Anleitung oder Hinweise auf Lösungswege zu lassen. Z.B. werden unterschiedliche Lösungswege oder Strategien als Angebot an die SuS skizziert und vorgeschlagen. Auch konkrete Beispiele für mögliche unterschiedliche Lösungen oder Strategien können diesen Ansatz unterstützen.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Didaktisches Konzept", title: "Didaktisches Konzept", description: "Für eine eigene Nutzung - insbesondere durch Lehrkräfte - ist es von Vorteil, wenn zentrale Gedanken für den didaktischen Einsatz vermittelt werden. Und zwar selbst dann, wenn die Lehrpersonen das Lehr-Lernmittel nicht eins zu eins für ihren eigenen Unterricht einsetzen wollen, sondern an eigene Bedürfnisse anpassen möchten. Dazu gehören Informationen wie: Zielgruppe(n), Ziele, Teilziele, damit verbundene Methoden, angestrebte bzw. geförderte Kompetenzen, Bezug zu Unterrichtsthemen etc.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Didaktisches Konzept",
                    title: "Das Lehr-Lernmittel enthält didaktische Informationen, die seine Anwendung erleichtern.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält weitreichende und begründete Informationen über seine didaktische Konzeption. Diese übersteigen grundlegende Informationen über thematische Bezüge sowie die Zielgruppe und geben darüber hinaus auch Informationen über methodische Vorgehensweisen, angestrebte Kompetenzen oder Teilziele. Diese Informationen erklären die Intention des Lehr-Lernmittels und erleichtern somit seine Nutzbarkeit.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Rahmenbedingungen", title: "Rahmenbedingungen", description: "Der Einsatz von Lehr-Lernmitteln im Unterricht birgt bestimmte Voraussetzungen, die bei einer beabsichtigten Nutzung zu bedenken sind. Dazu gehören z.B. Zeitbedarf, technische oder räumliche Voraussetzungen, bestimmte Gruppengrößen, das Vorhandensein bestimmter Materialien oder Medien, die Möglichkeit der Wiedergabe bestimmter Medienformate, Internetverbindung, eine bestimmte Anzahl an PCs oder mobilen Endgeräten etc. Für die Lehrkraft ist es hilfreich, wenn diese Voraussetzungen von vornherein übersichtlich genannt werden.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Rahmenbedingungen",
                    title: "Das Lehr-Lernmittel nennt die Rahmenbedingungen seiner Nutzung.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Es sind alle nötigen Rahmenbedingungen der Nutzung/des Einsatzes des Lehr-Lernmittels übersichtlich aufgeführt.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Bezüge Curriculum", title: "Bezüge Curriculum", description: "Heutige Lehrpläne enthalten fach- und stufen- bzw. jahrgangsbezogene Ziele, Themengebiete, Fertigkeiten/Kompetenzen, didaktische Prinzipien oder Anregungen zu Methoden. Wenn es auch nicht unbedingt darum geht, hier eine eng geführte Entsprechung zu erreichen, so ist doch eine Passung der mittel und langfristigen Unterrichtsverläufe zu diesen Lehrplänen wichtig. Dazu ist es hilfreich, wenn das Lehr-Lernmittel entsprechende Bezüge zumindest stichwortartig herstellt, so dass eine Zuordnung seitens der Lehrkräfte bzw. u.U. auch seitens der SuS leichter vollzogen werden kann.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Bezüge Curriculum",
                    title: "Im Lehr-Lernmittel werden nachvollziehbare Bezüge zu Inhalten des für das Fach gültigen Curriculums hergestellt",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Im Lehr-Lernmittel werden Ziele, Themengebiete, angestrebte Fertigkeiten/Kompetenzen, didaktische Prinzipien oder Anregungen zu Methoden auf eine Art transparent gemacht, die einer Lehrkraft eine Zuordnung zu den gültigen Lehr- und Bildungsplänen (Curricula) leicht macht. Idealerweise wird eine solche Zuordnung im Lehr-/Lernmittel selbst vorgenommen, es enthält also spezifische Aussagen zu diesem Bereich. Das kann auch in der Form geschehen, dass der ergänzende Charakter als indirekter Bezug auf die Lehr- und Bildungspläne deutlich gemacht wird.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Bezüge Bildungsstandards", title: "Bezüge Bildungsstandards", description: "Für eine Reihe von Fächern existieren in der Bundesrepublik Deutschland Bildungsstandards, in denen Kompetenz- bzw. Anforderungsbereiche beschrieben sind. Zwar ist davon auszugehen, dass sich diese auch in Lehr- und Bildungsplänen niederschlagen, jedoch kann es trotzdem hilfreich sein, wenn im Lehr-Lernmittel auch hier entsprechende Bezüge zumindest stichwortartig herstellt werden, so dass eine Zuordnung seitens der Lehrkräfte bzw. u.U. auch seitens der SuS leichter vollzogen werden kann.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Bezüge Bildungsstandards",
                    title: "Im Lehr-Lernmittel werden nachvollziehbare Bezüge zu Inhalten der für das Fach gültigen Bildungsstandards hergestellt.",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Im Lehr-Lernmittel findet eine grundsätzliche Einordnung der Lehr-Lernziele, der Themen sowie der angestrebten Kompetenzen zu entsprechenden Inhalten der Bildungsstandards statt (z.B. Anforderungsbereiche, Kompetenzen, Themen). Das kann auch detailliert/kleinschrittiger passieren, indem z.B. einzelne Unterrichtssequenzen oder Aufgaben in ihrer Bedeutung für den Kompetenzerwerb im Sinne der Bildungsstandards zugeordnet werden.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Eigene Anmerkungen", title: "Eigene Anmerkungen", description: "Hier können Sie eigene Kommentare zum analysierten / evaluierten Lehr-Lernmnittel einfügen, die in der Auswertung angezeigt werden.",

            questions: [
                {
                    type: "text",
                    name: "Eigene Anmerkungen",
                    title: "Bitte geben Sie hier eigene Anmerkung zum Lehr-Lernmittel an (optional).",
                    isRequired: false,
                }
            ]
        },  {
            questions: [
                {
                    type: "dropdown",
                    name: "Fach",
                    title: "Bitte teilen Sie uns mit, für welches Fach Sie das AAER nutzen (optional).",
                    defaultValue: 1,
                    choices: fach
                }
            ]

        },    {
            questions: [
                {
                    type: "dropdown",
                    name: "Schulart",
                    title: "Bitte teilen Sie uns mit, für welche Schulart Sie das AAER nutzen (optional).",
                    defaultValue: 1,
                    choices: schularten
                }
            ]

        }
    ]
};

window.survey = new Survey.Model(json);



// Start: Skripte zur Speicherung der JS-Objekte

survey.onComplete.add(function (sender, options) {
    save(sender.data);
    show(sender.data);
});

// Ende: Skripte zur Speicherung der JS-Objekte

$("#surveyElement").Survey({model: survey});


// Daten senden und 12-stellige-Id empfangen
function save(result) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://aaer.zlbib.uni-augsburg.de/result");
    let new_result_id;
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            new_result_id = this.responseText;
            console.log(new_result_id);
            // document.getElementById('result_id').innerHTML = new_result_id; // to display if user finished survey
        }
    };
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(result));
}

function show(result) {
    let jsonViewData = Object.assign({}, result);

    // Fachname anzeigen
    fachName = fach[survey.getValue('Fach') - 1].text;
    jsonViewData.Fach = fachName; // JSON-Übersicht
    document.getElementById('fach').innerHTML = fachName; // Gesamtübersicht
    console.log(fachName);

    // Schulart anzeigen
    schulName = schularten[survey.getValue('Schulart') - 1].text;
    jsonViewData.Schulart = schulName; // JSON-Übersicht
    document.getElementById('schulart').innerHTML = schulName; // Gesamtübersicht
    console.log(schulName);

    document.getElementById('anmerkungen').innerHTML = survey.getValue('Eigene Anmerkungen'); // Gesamtübersicht

    document.querySelector('#surveyResult').textContent = "" + JSON.stringify(jsonViewData, null, 4);

    // Charts erstellen
    generateCharts();
}

// Wird über einen Button aufgerufen und lädt Daten aus der DB
function loadResult() {
    let input = document.getElementById('toLoad').value;
    if (input.length === 12) {

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "https://aaer.zlbib.uni-augsburg.de/load");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({"id": input}));

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                db_data = this.responseText;
                if (db_data.length > 0) {
                    console.log(db_data);
                    data = JSON.parse(db_data);
                    data_object = {
                        "id": data.result_id,
                        "Name": data._tool_name,
                        "Verlinkung": data._link,
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
                        "Fach": data.fk_subject,
                        "Schulart": data.fk_institution,
                        "Eigene Anmerkungen": data._comment
                    };
                    console.log(data_object);
                    survey.data = data_object;
                    //survey.doComplete();


                } else {
                    console.log("No result.")
                }
            };
        };

    } else {
        console.log("Es müssen genau 12 Zeichen sein.")
    }
}

// Start: Funktionen zur Darstellung der Diagramme

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


// Ende: Funktionen zur Darstellung der Diagramme

setSurveyValues();

// Start: Radio Buttons Presets

function setSurveyValues() {

    survey.data = {
        "Name": "Bee-Bot Klassen-Set",
        "Verlinkung": "https://www.betzold.de/prod/89809/",

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


        "Fach": 1,
        "Schulart": 1,
        "Eigene Anmerkungen": "Super!"
    };

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

    let sortedLabels = [];
    let sortedValues = [];
    let sortedColors = [];

    for (let i = 0; i < values.length; i++) {
        if (values[i] === 4) {
            sortedLabels.push(labels[i]);
            sortedValues.push(values[i]);
            sortedColors.push(colors[i]);
        };
    };

    for (let i = 0; i < values.length; i++) {
        if (values[i] === 3) {
            sortedLabels.push(labels[i]);
            sortedValues.push(values[i]);
            sortedColors.push(colors[i]);
        };
    };

    for (let i = 0; i < values.length; i++) {
        if (values[i] === 2) {
            sortedLabels.push(labels[i]);
            sortedValues.push(values[i]);
            sortedColors.push(colors[i]);
        };
    };

    for (let i = 0; i < values.length; i++) {
        if (values[i] === 1) {
            sortedLabels.push(labels[i]);
            sortedValues.push(values[i]);
            sortedColors.push(colors[i]);
        };
    };

    for (let i = 0; i < values.length; i++) {
        if (values[i] === 0) {
            sortedLabels.push(labels[i]);
            sortedValues.push(values[i]);
            sortedColors.push(colors[i]);
        };
    };


    dataALL = {
        labels: sortedLabels,
        datasets: [{
            label: "Übersichts-Chart",
            backgroundColor: sortedColors,
            data: sortedValues
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

$( ".sv_complete_btn" ).click(function() {
    $( "#dashboard-aaer" ).css("display", "block");
    $( "#ergebnisse_container" ).css("display", "block");
    $( ".front-background" ).css("display", "none");
    $( "#surveyElementContainer" ).css("display", "none");
    $( "#carouselExampleSlidesOnly" ).css("display", "none");
    
});

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

// Ende: Dynamische Progressbar in Abhängigkeit der Klasse .sv_q_num