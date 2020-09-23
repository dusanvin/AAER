Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
Survey
    .StylesManager
    .applyTheme("bootstrapmaterial");


var json = {title:"Nutzung des Augsburger Analyse- und Evaluationsrasters für digitale und analoge Bildungsmedien (AAER)",
    pages: [
        {name:"Name des Lehr-Lernmittels", title: "Name des Lehr-Lernmittels", description: "Der Name wird später in Ihrer für Sie persönlich generierten Auswertung angezeigt.",

            questions: [
                {
                    type: "text",
                    name: "Name des Lehr-Lernmittels",
                    title: "Bitte geben Sie den Namen des Lehr-/ Lernmittels, das Sie mit Hilfe des AAER analysieren / evaluieren möchten, an.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler sowie Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie rele-vanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    //hasComment: true,
                    //commentText: "Der Name wird später Ihrer persönlichen Auswertung, die Sie sich herunterladen können, angezeigt."
                }
            ]
        }, {name:"Link", title: "Link (optional)", description: "Sie können an dieser Stelle den Link zu dem zu analysierenden/ zu evaluierenden Lehr-Lernmittel angeben. Er wird in der abschließend für Sie generierten Auswertungsübersicht angezeit.",

            questions: [
                {
                    type: "text",
                    name: "Link",
                    title: "Bitte geben Sie den Link zu Ihrem Lehr-Lernmittel an (optional).",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie rele-vanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: false,
                    //hasComment: true,
                    //commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält keine einseitigen Aussagen, Themenführungen oder Selbstdarstellungen von Organisationen/Anbietern und lässt sichtbar ein Bemühen erkennen, unterschiedliche und plurale Sichtweisen auf gesellschaft-liche Diskurse gleichberechtigt zu integrieren. Das wird z.B. auch dadurch signalisiert, dass Aussagen, die keine simplen Fakten darstellen, nicht als 'verabsolutierte' Aussagen formuliert sind. Dies gilt auch für sozusagen beiläufig vermittelte Inhalte oder Aussagen, die nicht in zentralem Zusammenhang mit dem Thema des Lehr-Lernmittels stehen (z.B. Aussagen in Textaufgaben, Anwendungsaufgaben, Abbildungen o.ä.).",
                    //choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 5, text: "nicht bewertbar"}],
                    //colCount: 5
                }
            ]
        }, {name:"Interessegeleitete Themenführung/Positionierung", title: "Interessegeleitete Themenführung/Positionierung", description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transpor-tiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie rele-vanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",

            questions: [
                {
                    type: "radiogroup",
                    name: "Interessegeleitete Themenführung/Positionierung",
                    title: "Das Lehr-Lernmittel ist frei von einseitiger Informationsvermittlung bzgl. bestimmter Themen/Aussagen gesellschaftlicher Akteure.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält keine einseitigen Aussagen, Themenführungen oder Selbstdarstellungen von Organisationen/Anbietern und lässt sichtbar ein Bemühen erkennen, unterschiedliche und plurale Sichtweisen auf gesellschaftliche Diskurse gleichberechtigt zu integrieren. Das wird z.B. auch dadurch signalisiert, dass Aussagen, die keine simplen Fakten darstellen, nicht als 'verabsolutierte' Aussagen formuliert sind. Dies gilt auch für sozusagen beiläufig vermittelte Inhalte oder Aussagen, die nicht in zentralem Zusammenhang mit dem Thema des Lehr-Lernmittels stehen (z.B. Aussagen in Textaufgaben, Anwendungsaufgaben, Abbildungen o.ä.).",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Transparenz", title: "Transparenz", description: "'Transparenz' bedeutet in diesem Zusammenhang, inwieweit für die nutzende Person eines Lehr-Lernmittels klar ersichtlich ist, von wem dieses Lehr-Lernmittel stammt, so dass eine (kritische) Bewertung und Einordnung erfolgen kann. Dafür ist es wichtig, dass im Lehr-Lernmittel selbstbezogene Informationen bereitstellt werden. Dazu gehört z.B., wer es entwickelt und verbreitet (Autor*innen, Herausgeber*innen und Fördernde – Personen und Zugehörigkeit zu bestimmten Organisationen), woher möglicherweise Gelder stammen, die zur Entwicklung des Lehr-Lernmittels genutzt wurden und woher die Informationen stammen, die im Lehr-Lernmittel enthalten sind (Quellen). Wichtige Informationen für die Lehrkraft sind in diesem Zusammenhang auch Aussagen über die Ziele, die mit diesem Angebot verfolgt werden bzw. Antworten auf die Frage, warum dieses Lehr-Lernmittel angeboten wird (Motivation).",

            questions: [
                {
                    type: "radiogroup",
                    name: "Transparenz",
                    title: "Das Lehr-Lernmittel ist transparent hinsichtlich seiner Autorenschaft/Anbieter.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Es werden Autor*innen und Anbieter sowie deren organisationale/institutionelle Zugehörigkeit genannt. Finanzierungsquellen werden offengelegt. Zusammenhänge (z.B. bei mehreren Anbietern oder beteiligten Organisationen) sind für die Lehrkraft nachvollziehbar. Außerdem werden Ziele des Lehr-Lernmittels und die Gründe für das Angebot (d.h. also eine Erklärung, warum dieses Lehr-Lernmittel angeboten wird) genannt.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Werbliche Elemente", title: "Werbliche Elemente", description: "Zur Frage steht hier, inwiefern und in welchem Ausmaß in Lehr-Lernmitteln werbliche Elemente dargestellt werden. Dies muss unter dem Aspekt, dass in vielen Bundesländern Werbung im Unterricht entweder verboten oder zumindest sehr kritisch betrachtet wird und mit bestimmten Auflagen versehen ist, problematisiert werden. Werbliche Elemente im Zusammenhang mit Lehr-Lernmitteln können sein: Logos, Produktabbildungen, Nennung von Marken u.ä., die nicht Gegenstand des Unterrichts sind (d.h., die nicht unter fachlicher oder medienpädagogischer Perspektive thematisiert werden).",

            questions: [
                {
                    type: "radiogroup",
                    name: "Werbliche Elemente",
                    title: "Das Lehr-Lernmittel ist frei von Werbung.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schü-ler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Es sind keine der oben genannten Elemente im Lehr-Lernmittel enthalten. Höchstens eine direkt auf den Anbieter des Lehr-Lernmittels bezogene Namensnennung (Quelle) oder das Logo des Anbieters ist enthalten - jedoch sollte dieses nicht in visuell dominanter Weise präsentiert werden.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Heterogenität/Gender", title: "Heterogenität/Gender", description: "Lehr-Lernmittel enthalten direkt oder indirekt (z.B. über visuelle Darstellungen, Bilder, Grafiken oder auch im Rahmen von Textteilen) Repräsentationen/Darstellungen einer sozialen und gesellschaftlichen Umwelt, die sie jedoch auch gleichzeitig aufgrund dieser Darstellung für das Verständnis der SuS wiederum beeinflusst und 'erzeugt'. In einer pluralistisch verfassten, demokratischen Gesellschaft erscheint es wichtig, dass einseitige Zuschreibungen/Festlegungen auf gesellschaftliche bzw. ethnische Gruppen oder Minderheiten, auf Menschen mit Beeinträchtigungen sowie auf Geschlecht oder Religion vermieden werden. Darüber hinaus erscheint es als wichtig, dass eine kulturelle Vielfalt, wie sie unter den SuS herrscht, auch in Lehr-Lernmitteln repräsentiert wird.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Heterogenität/Gender",
                    title: "Das Lehr-Lernmittel ist in seinen textlichen und bildlichen Darstellungen von gesellschaftlichen bzw. ethnischen Gruppen sowie hinsichtlich der Kategorie Geschlecht ausgewogen und in ihm werden einseitige, reduzierende Darstellungen vermieden.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n In Abbildungen, Fotos und textlichen Beschreibungen, in den gesellschaftliche Gruppen vorkommen, werden diese nicht vereinseitigend dargestellt (etwa indem eine bestimmte gesellschaftliche Gruppe bestimmten Tätigkeiten, Meinungen und Verhaltensweisen vereinfachend zugeordnet wird). Für die Kategorie Geschlecht gilt, dass eine ausgewogene, sozusagen gleichberechtigte Darstellung von weiblichen und männlichen Personen enthalten ist, in der ebenfalls vereinseitigende Zuordnungen vermieden bzw. möglicherweise sogar bewusst aufgebrochen werden. In ähnlicher Weise erfolgt die Darstellung unterschiedlicher gesellschaftlicher Gruppen, Ethnien und Menschen mit Beeinträchtigungen - dies unter anderem auch deshalb, um der Heterogenität der SuS in diesem Bereich Rechnung zu tragen und entsprechende Identifikationsangebote zu bieten.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Handlungsorientierung", title: "Handlungsorientierung", description: "Das Konzept der 'Handlungsorientierung' zielt auf die aktive Erschließung von Wissen und Kompetenzen durch die SuS ab. Dabei ist es in einen bildungstheoretischen Rahmen eingeordnet, der übergeordnete Bildungsziele der Selbst- und Mitbestimmungsfähigkeit (Klafki) als wichtige Normen für die übergeordneten Ziele von Unterricht anerkennt. Ein Handlungsorientierter Unterricht zeichnet sich unter anderem dadurch aus, dass SuS aktiv tätig werden und eigene Arbeits bzw. Denkergebnisse produzieren. Das kann im Rahmen von individuellen Aufgabenstellungen geschehen, es bieten sich dazu jedoch auch vielfältige Formen gruppenorientierten entdeckenden Lernens (Kooperation, Kollaboration) an. So interpretiert impliziert 'Handlungsorientierung' auch Eigenverantwortlichkeit und damit die Möglichkeit bzw. Notwendigkeit, mit eigenen Entscheidungen den Lern- bzw. Bildungsprozess zu beeinflussen/zu gestalten.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Handlungsorientierung",
                    title: "Das Lehr-Lernmittel ist handlungsorientiert gestaltet, indem es Verantwortungsübernahme für Lernwege und Lernergebnisse durch die SuS fördert/fordert.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Im bzw. durch das Lehr-Lernmittel werden die SuS weitreichend zu aktiven Gestaltenden ihres eigenen Lernprozesses bzw. der Anwendung von Wissen, Fertigkeiten und Kompetenzen. Das zeigt sich u.U. auch darin, dass individuell oder auch in Gruppen echte Entscheidungen über Lernwege oder die Anwendung von Wissen, Fertigkeiten und Kompetenzen getroffen werden, was wiederum Wahlmöglichkeiten auf Seiten der SuS voraussetzt.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Lebensweltlichkeit", title: "Lebensweltlichkeit", description: "Hier geht es um die Frage, inwiefern das Lehr-Lernmittel Bezüge zur Lebenswelt der Schülerinnen und Schüler aufweist. Das geschieht z.B. dadurch, dass es zentrale und authentische Problemstellungen zur Grundlage hat, die unter gesellschaftlich-politischer oder unter individueller bzw. gruppenspezifischer (Klassengruppe, PeerGroup) Perspektive für die Schülerinnen und Schüler relevant sind. Dazu kann auch gehören, dass das Lehr-Lernmittel bewusst den emotionalen Aspekt dieser Lebenswelt thematisiert.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Lebensweltlichkeit",
                    title: "Das Lehr-Lernmittel weist Bezüge zur Lebenswelt der Schülerinnen und Schüler auf.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel weist nicht nur allgemeine Bezüge zur Lebenswelt der Schülerinnen und Schüler auf, sondern diese werden konkretisiert, indem z.B. reale Elemente/Materialien/Aussagen aus der aktuellen Zeitgeschichte aufgegriffen werden, die eine (emotionale) Nähe zu den Schülerinnen und Schülern aufweisen (z.B. aus Zeitschriften, Webseiten sowie konkrete Ereignisse, Bezüge zu Fragen der Identitätsentwicklung, der Lebensgestaltung, Freizeit oder Beruf etc.).",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                } //übernimmt wert von 6 # erledigt
            ]
        }, {name:"Reflexion/Urteilsfähigkeit", title: "Reflexion/Urteilsfähigkeit", description: "Übergeordnete pädagogische Bildungsziele wie Mündigkeit, Selbst-, Mitbestimmungs- und Solidaritätsfähigkeit (Klafki) verlangen, dass SuS im Hinblick auf fachliche Themen aber auch auf ihre nahe und weite Umwelt sowie Lebenswelt als verantwortliche, urteilende Menschen angesprochen werden. Dazu gehört auch ein Maß an Selbstreflexion, d.h. dass SuS auch sich selbst, die eigene Situation, die Situation der Gruppe und ihre politische, soziale bzw. gesellschaftliche Position zum Gegenstand des Denkens machen (Metakognition, Reflexion).",

            questions: [
                {
                    type: "radiogroup",
                    name: "Reflexion/Urteilsfähigkeit",
                    title: "Das Lehr-Lernmittel spricht die SuS als Menschen an, die sich selbst und ihre Umwelt zum Gegenstand des eigenen Denkens und Urteilens machen.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel fördert die Bildung einer eigenen begründeten Meinung bzw. die argumentative Äußerung dieser Meinung. Die SuS werden z.B. explizit aufgefordert, auf der Basis ihres fachlichen Wissens und der Ihnen zur Verfügung stehenden Informationen, ein Urteil als Antwort auf eine bestimmte Fragestellung zu fällen. Dabei kann auch eine gewissermaßen überfachliche Dimension eine Rolle spielen, indem z.B. fachliche Themen in ihren gesellschaftlichen, politischen oder sozialen Bezügen eingebettet und zum Gegenstand gemacht werden.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Multiperspektivität/Kontroversität", title: "Multiperspektivität/Kontroversität", description: "Lehr-Lernmittel referenzieren als direkten Unterrichtsgegenstand oder auch als begleitendes Nebenthema immer wieder Themen, die innerhalb der Gesellschaft (oder auch in der Fachwissenschaft) multiperspektivisch oder auch kontrovers diskutiert werden. Es ist ein zentrales Anliegen eines pädagogisch verantworteten Unterrichtens, dass Lernende in solchen Themen nicht durch Unterricht und Lehrmittel bereits einseitig für eine mögliche Position/Meinung vereinnahmt werden, sondern dass sie auf Basis von Fakten sowie unterschiedlichen Argumenten zu einer eigenen Meinungsbildung hingeführt bzw. ermächtigt werden. Dies gilt vorbehaltlich einer altersgemäßen Komplexitätsreduktion bzw. Elementarisierung durch die Autor*innen des Lehr-Lernmittels. Insofern sind die Entwickler*innen gefordert, nicht nur eine einseitige Darstellung von Themen/Sachverhalten in Lehr-Lernmitteln zu vermeiden, sondern auch sensibel für plurale Sichtweisen zu sein und, wo vorhanden, auch die Kontroversität, die möglicherweise in Fachwissenschaft und Gesellschaft vorzufinden ist, den Lernenden nicht vorzuenthalten.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Multiperspektivität/Kontroversität",
                    title: "Themen bzw. Probleme, die in Gesellschaft bzw. Wissenschaft kontrovers und multiperspektivisch diskutiert werden, werden im Lehrmittel ebenfalls kontrovers und multiperspektivisch dargestellt.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Die im Lehr-Lernmittel dargestellten Themen, seien es zentrale oder begleitende, lassen in der Art der Darstellung für die Lernenden erkennen, dass es für ihre Bewertung unterschiedliche Positionen, Meinungen, Sichtweisen oder Argumente gibt. Es werden nicht nur einseitige Aussagen, Wertungen oder Formulierungen vermieden, die den Anschein der Alternativlosigkeit vermitteln, sondern die Lernenden werden durch das Lehr-Lernmittel für das Bestehen unterschiedlicher, kontroverser Sichtweisen sensibilisiert. Zudem wird durch die Präsentation der Themen/der Inhalte sowie durch die Art der sprachlichen Vermittlung eine Offenheit für eine eigene Meinungsbildung/Bewertung gewährleistet.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Methodenpluralität", title: "Methodenpluralität", description: "Methoden sind 'Lern- und Arbeitstechniken zum selbständigen und sachgerechten Erkennen, Entdecken, Experimentieren, Bearbeiten, Konstruieren, Gestalten, Präsentieren, Kommunizieren und Kontrollieren' (Wiater). Klippert unterscheidet Methoden der Informationsbeschaffung (Lesen, Nachschlagen, Befragen, etc.), der Informationsverarbeitung und Aufbereitung (Strukturieren, Visualisieren, Gestalten, etc.), Methoden der Arbeits-, Zeit- und Lernplanung und Methoden, die das Nachdenken über das eigene Lernen fördern (Klippert). Einzelne Methoden können in Lehr-Lernmitteln bewusst eingesetzt werden, um die beabsichtigten Lernprozesse und Aktivitäten zu unterstützen. Sie können auch direkt thematisiert, in ihrer Bedeutung erläutert und gezielt eingeübt werden, um ihre Effektivität zu erhöhen (Förderung von Methodenkompetenz). Methoden erfüllen dabei keinen Selbstzweck, sondern haben eine Funktion innerhalb der übergeordneten Ziele des Lern-prozesses (inkl. allgemeiner und überfachlicher Entwicklungsziele der SuS). ",

            questions: [
                {
                    type: "radiogroup",
                    name: "Methodenpluralität",
                    title: "Das Lehr-Lernmittel setzt gezielt unterschiedliche Methoden ein, die den übergeordneten Zielen des Lernprozesses dienen.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Im Lehr-Lernmittel werden (unterschiedliche) Methoden gezielt eingesetzt, um bestimmte Aufgaben oder Sequenzen zu unterstützen. Diese Methoden zielen auf die Tätigkeit der SuS ab. Dabei geht es nicht darum, möglichst viele unterschiedliche Methoden einzusetzen (Selbstzeck), sondern nach Möglichkeit solche, die die angestrebten Ziele, Fertigkeiten und Kompetenzen didaktisch unterstützen. Hilfreich ist es, wenn der Sinn oder die Zielsetzung der eingesetzten Methoden genannt wird oder in Bezug auf ihre damit verbundene Zielsetzung transparent ist.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                } // übernimmt den wert von 8 # erledigt
            ]
        }, {name:"Multimedia/Multimodalität", title: "Multimedia/Multimodalität", description: "Medien können ein eindrückliches Mittel sein, Sachverhalte zu veranschaulichen, Informationen didaktisch aufzubereiten, verständlich zu präsentieren und Anknüpfungen an die Lebenswelt von Jugendlichen zu schaffen. Lehr-Lernmittel können Medien nutzen um Lernende auf unterschiedlichen Wegen anzusprechen und ihren Lerninhalt abgestimmt auf die damit verbundenen Lernziele zu vermitteln. Dies kann besonders effektiv gelingen, wenn in Lehr-Lernmitteln unterschiedliche 'Kanäle' oder Medienformate kombiniert werden, um so mehrere sensorische Kanäle der Lernenden anzusprechen (Multimodalität). Sie können dabei auch Wahlmöglichkeiten bieten, welche Medienarten für spezifische Schritte des Lernprozesses genutzt werden können.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Multimedia/Multimodalität",
                    title: "Das Lehr-Lernmittel transportiert seine Lerninhalte auf multimediale/multimodale Art und Weise.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Wesentliche Inhalte des Lehr-Lernprozesses, der durch das Lehr-Lernmittel angestrebt wird, werden medial aufbereitet vermittelt bzw. machen mediale Darstellungen zum Gegenstand des Lernhandelns für die SuS. Unterschiedliche Medienarten bzw. 'Kanäle' (z.B. auditive, audiovisuelle, annotierte oder symbolische Illustrationen/Videos, interaktive Webelemente, etc.) werden genutzt und in sinnvoller Weise kombiniert, um den Lernprozess zu fördern. Dies kann auch so umgesetzt werden, dass Wahlmöglichkeiten je nach individueller Präferenz für unterschiedliche Medienarten auf Seiten der Lernenden bestehen.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Medienkompetenz", title: "Medienkompetenz", description: "Medien sind Teil der kulturellen und sozialen Umwelt von SuS sowie wesentlicher Träger der Informations- und Wissensgesellschaft, in der wir leben. Sie sind daher gleichermaßen ein notwendiges Lehr-Lernfeld und auch ein didaktisches Mittel, um Lehr-Lernprozesse zu unterstützen (Mittlerfunktion). Durch sie kann man auf besonders eindrückliche Weise Sachverhalte veranschaulichen, Informationen didaktisch aufbereiten und verständlich präsentieren und Anknüpfungen an die Lebenswelt von Kindern und Jugendlichen schaffen. Es ist wichtig, die kompetente Nutzung sowie die kritische Reflexion von Medien als Kommunikationsmittel und 'Mittler von Welt' zu fördern und zu trainieren. Medienkompetenz lässt sich in diesem Sinn verstehen als Vermögen (Fähigkeit) und Bereitschaft in Medienzusammenhängen zu handeln, über diese zu kommunizieren und kritisch zu reflektieren.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Medienkompetenz",
                    title: "Das Lehr-Lernmittel fördert einen kompetenten Umgang mit Medien.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Die Lernenden sind nicht nur passive Rezipienten medialer Inhalte, sondern setzen sich aktiv und reflexiv mit Mediendarstellung und/oder Kommunikation auseinander. Sie arbeiten, lernen und machen Lernfortschritte unter Nutzung von Medien. Und - wo möglich - erstellen sie sogar eigene Medieninhalte oder werden herausgefordert mediale Repräsentationen kritisch und reflexiv zu hinterfragen, um Medienkompetenz zu fördern.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Differenzierung", title: "Differenzierung", description: "Eine besondere Herausforderung für die Gestaltung von Unterricht stellt die Anpassung an eine heterogene Schülerschaft dar. Dazu können Lehr-Lernmittel einen wichtigen Beitrag leisten, indem sie sozusagen 'Variationen' ihrer selbst anbieten (Parallelisierung von Unterricht). Diese können z.B. über die Bereitstellung unterschiedlicher Anwendungsgebiete und Lernziele (auch mit unterschiedlichen Schwierigkeitsgraden) und darauf abgestimmter Arbeitsschritte bzw. unterschiedlicher Arbeitsaufträge innerhalb des Lehr-Lernmittels erfolgen. Dabei ist wichtig, dass die Ergebnisse der parallel durchgeführten Lernsequenzen auch wieder zusammengeführt werden.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Differenzierung",
                    title: "Das Lehr-Lernmittel beinhaltet Angebote für binnendifferenzierte Lernarrangements.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält Variationsangebote, die zeitlich parallel umgesetzt werden können. Diese gehen über einfache Arbeitsgruppen hinaus, die dieselben Ziele lediglich auf unterschiedliche Gegenstände umsetzen.  Sie enthalten z.B. auch unterschiedliche Lernziele, unterschiedliche Schwierigkeitsgrade, aufeinander verweisende Arbeitsschritte u.ä. Dabei wird zudem die Sicherung von verbindlichen Ergebnissen für alle Schülerinnen und Schüler nicht vernachlässigt.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Barrierefreiheit/Inklusion", title: "Barrierefreiheit/Inklusion", description: "Lehr-Lernmittel können wesentlich zur erfolgreichen Gestaltung von inklusiven Unterrichtsszenarien beitragen, indem sie barrierefreie Zugänge für SuS mit Beeinträchtigungen bieten (insbesondere für SuS mit Seh-, Hör- oder Lernbeeinträchtigungen). Für Menschen mit Hör oder Sehbeeinträchtigungen ist beispielsweise die Beachtung des Zwei-Sinne-Prinzips von Bedeutung, d.h. ein Element/Inhalt des Lehr-Lernmittels wird immer vollständig auf zwei Wegen (auditiv und visuell) vermittelt. Außerdem können Untertitel in Videos, zusätzliche Texte, die den Inhalt einer Grafik oder einer Abbildung beschreiben, die Integration von Gebärdensprache, Möglichkeiten zur digitalen Sprachausgabe per Screenreader oder die Nutzbarkeit von Vergrößerungssoftware sowie Audiodeskriptionen etc. die Zugänglichkeit des Lehr-Lernmittels für die genannte Personengruppe erleichtern. Für Menschen mit Lernschwierigkeiten ist es sinnvoll, beispielsweise die Texte des Lehr-Lernmittels in leichter Sprache zu integrieren.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Barrierefreiheit/Inklusion",
                    title: "Das Lehr-Lernmittel bietet barrierefreie Zugänge für SuS mit Beeinträchtigungen.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält durchgängig in allen seinen Bestandteilen/Inhalten Elemente und Anreicherungen, die eine Barrierefreiheit für zumindest eine der beschriebenen Zielgruppen ermöglicht.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Transfer- und Anwendungsorientierung", title: "Transfer- und Anwendungsorientierung", description: "In Lehr-Lernmitteln können unterschiedliche kognitive Prozesse angeregt bzw. angestrebt werden. Solche kognitiven Prozesse lassen sich grob unter folgenden Aktionswörtern zusammenfassen (aufsteigende Reihenfolge, was die Komplexität des Vorgangs angeht): erinnern, verstehen, anwenden, analysieren, bewerten, erschaffen. Kompetenzorientiertes Unterrichten wird in der Regel darauf abzielen, neben den elementaren kognitiven Prozessen 'erinnern' und 'verstehen' auch - entsprechend der Lern- bzw. Kompetenzziele - 'höhere' kognitive Prozesse anzuregen. Daher können in Lehr-Lernmitteln bewusst entsprechende Prozesse in Form von Fragen, Aufgaben oder Anschauungen integriert sein.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Transfer- und Anwendungsorientierung",
                    title: "Durch das Lehr-Lernmittel werden gezielt kognitive Prozesse angesprochen, die über elementare kognitive Prozesse hinausgehen und als transfer bzw. anwendungsorientiert zu bezeichnen sind.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Es lassen sich im Lehr-Lernmittel in den einzelnen Teilen/Sequenzen die jeweils angeregten/beabsichtigten kognitiven Prozesse identifizieren bzw. sie sind möglicherweise sogar ausgewiesen. Außerdem finden sich Fragen oder Aufgaben, die z.B. darauf abzielen, dass die SuS aufgebautes Wissen auf andere Objekte anwenden (Transfer), Sachverhalte eigenständig analysieren, eigene Bewertungen auf der Basis ihres Wissens und der erworbenen fachlichen Fertigkeiten vornehmen oder sogar eigenständig neues Wissen oder Fertigkeiten für unbekannte Anwendungsgebiete bilden bzw. entwickeln, um fachliche Probleme zu lösen.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Prozessorientierung (Kumulation)", title: "Prozessorientierung (Kumulation)", description: "Ein Lehr-Lernmittel besteht oftmals aus mehreren aufeinanderfolgenden Sequenzen, die sukzessive auf ein bestimmtes Ziel bzw. auch unterschiedliche Teilziele in einem Gesamtzusammenhang des Unterrichtens bzw. Lernens hinleiten sollen. Zur Frage steht, inwiefern die Verknüpfung der einzelnen Sequenzen einen fachlichen bzw. didaktisch sinnvollen Zusammenhang erkennen lässt. Bedeutsam ist darüber hinaus, dass in der Regel ein kumulativer, schrittweiser Aufbau von Wissen, Fertigkeiten und Kompetenzen als erfolgversprechend zu betrachten ist. Dabei kann auch die Anknüpfung am Vorwissen der SuS (sozusagen als Ausgangspunkt) eine Rolle spielen.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Prozessorientierung (Kumulation)",
                    title: "Das Lehr-Lernmittel verknüpft einzelne Sequenzen zu einem Prozess und unterstützt damit das Prinzip eines kumulativen Aufbaus von Wissen, Fertigkeiten und Kompetenzen.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Sequenzen sind im Lehr-Lernmittel als solche zu erkennen und in ihren Verweisungszusammenhängen untereinander deutlich. In Bezug auf Unterrichtsziele, angestrebte Fertigkeiten und Kompe-tenzen lässt sich eine schrittweise Vorgehensweise erkennen bzw. mit dem Lehr-Lernmittel umsetzen. Unter Umständen ist das Lehr-Lernmittel sogar so konzipiert, dass es die Bedeutung seiner einzelnen Schritte und Zusammenhänge selbst erklärt und transparent macht.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Lernwegunterstützende Elemente (Scaffolding)", title: "Lernwegunterstützende Elemente (Scaffolding)", description: "Zur Frage steht hier, inwiefern Lehr-Lernmittel Elemente enthalten, die ihren Nutzer*innen - hier insbesondere den Schülerinnen und Schülern - deutlich machen können, wie mit dem Lehr-Lernmittel gelernt werden kann/soll. Dazu können erläuternde und erklärende Hinweise gegeben werden (Vor-/ Nachbemerkungen, Kommentare, Textbausteine, Marginalien). Wichtig hierbei ist, dass diese sich auf den Lernweg der Schülerinnen und Schüler beziehen und den Lernprozess bzw. die Lernaktivität unterstützen/fördern/anleiten.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Lernwegunterstützende Elemente (Scaffolding)",
                    title: "Das Lehr-Lernmittel enthält Elemente, die den Lernprozess der Schülerinnen und Schüler unterstützen, indem sie Aussagen machen, die sich auf den Lernweg bzw. die Lernaktivität der Schülerinnen und Schüler beziehen.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Lernwegunterstützende Elemente finden sich nicht nur vereinzelt, sondern sind erkennbar systematisch an den Schlüsselstellen des Lehr-Lernmittels integriert und haben damit eine 'rahmende' Funktion. Solche Elemente können sein: Vor- und Nachbemerkungen, Kommentare zu Inhalten oder Lernprozessen des Lehr-Lernmittels (diese können sich auch metakognitiv direkt auf die SuS beziehen).",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Sprachlichkeit", title: "Sprachlichkeit", description: "Damit Lehr-Lernmittel in der Breite von Schülerinnen und Schülern genutzt werden können, ist es vorteilhaft (auch, aber nicht nur für schwächere Schülerinnen und Schüler), wenn sie in allen ihren Teilen (auch in Aufgabenstellungen) eine klare, einfache Sprache kennzeichnet. Davon unbetroffen sind für die fachliche Aufarbeitung nötige Fach und Fremdwörter. Textpassagen sind darüber hinaus 'kohärent' d.h. sie weisen eine logische Verknüpfung ihrer Abschnitte auf (Sprachfluss ohne Unterbrechungen).",

            questions: [
                {
                    type: "radiogroup",
                    name: "Sprachlichkeit",
                    title: "Die Sprache des Lehr-Lernmittels ist klar und verständlich.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält keine unnötig langen und verschachtelten Sätze. Auch Aufgaben sind direkt und klar formuliert, und es werden nicht mehrere Aufgabenstellungen in einer einzelnen Aufgabe vermischt. Fachbegriffe und Fremdwörter werden im fachlich nötigen und sinnvollen Rahmen eingesetzt oder gegebenenfalls erläutert. Es existieren keine sprachlichen bzw. logischen Brüche zwischen einzelnen Sätzen oder Abschnitten.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Bildsprache", title: "Bildsprache", description: "Über unterschiedliche bildliche Darstellungen (z.B. Fotos, Diagramme, Tabellen, Charts, Animationen) können Sachverhalte vermittelt, verdeutlicht und erklärt werden. Diese bildlichen Elemente sollten in einem logischen und didaktischen Zusammenhang zum Thema und zu den Zielen des Lehr-Lernmittels stehen. Außerdem sind bildliche Elemente in der Regel in textliche Elemente eingebettet oder in Zusammenhang gesetzt - dieser Zusammenhang sollte möglichst klar sein. Es kann zur Förderung von bildlichem Verstehen und Interpretationsvermögen sinnvoll sein, dass abstrahierte bildliche Darstellungen (z.B. Charts) mit textlichen Elementen versehen sind, die erklärenden Charakter haben.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Bildsprache",
                    title: "Bildliche Elemente werden im Lehr-Lernmittel in klarer und logischer Zuordnung zum Unterrichtsthema bzw. -ziel eingesetzt.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, in-wiefern Inhalte des Angebots im Zusam-menhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel verwendet bildliche Elemente über eine rein illustrative Funktion hinaus. Sie stehen im Zusammenhang zum Unterrichtsthema und -ziel und leisten einen eigenen Beitrag zum Verstehen, Erklären oder Anwenden von Wissen, Fertigkeiten und Kompetenzen, die für den durch das Lehr-Lernmittel angeregten Unterrichtsprozess wichtig sind. Sie sind dabei auch textlich eingebettet, was z.B. durch erklärende Textpassagen oder Beschriftungen erreicht wird.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Additive Kommunikation (Anreicherung)", title: "Additive Kommunikation (Anreicherung)", description: "Hiermit ist gemeint, dass das Lehr-Lernmittel auch über die rein fachliche Aufbereitung hinaus zusätzliche Elemente integriert und jene 'anreichern' kann. Dies können z.B. sein: Lebensweltbezüge im Sinne von Zusatzinformationen, Anekdoten oder humoristischen Passagen. Es können auch Zusätze sein, die sich ergänzend oder vertiefend auf die im Lehr-Lernmittel präsentierten Inhalte beziehen (z.B.: Zusammenfassungen, Exkurse, Merksätze, Glossare, Begriffserklärungen).",

            questions: [
                {
                    type: "radiogroup",
                    name: "Additive Kommunikation (Anreicherung)",
                    title: "Das Lehr-Lernmittel integriert zusätzliche kommunikative Elemente, die die Inhalte des Lehr-Lernmittels unterstützen/anreichern.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält über eine reine fachliche Aufbereitung des Unterrichtsthemas und der Unterrichtsziele hinaus auch zusätzliche Elemente (Text/Bild/Sprache), die die SuS ansprechen, z.B. in ihren lebensweltlichen Bezügen, oder als Ergänzung, Erklärung sowie Verstärkung der im Lehr-Lernmittel präsentierten Inhalte.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Sequenzierung", title: "Sequenzierung", description: "Aufgaben, die im Lehr-Lernmittel gestellt werden, sollten in einem fachlichen und/oder didaktischen Zusammenhang zueinanderstehen. Hier kann entsprechend die Frage gestellt werden, welche kognitiven Leistungen/Prozesse (z.B. etwas erinnern, verstehen, anwenden, analysieren, bewerten, erschaffen) in den einzelnen Aufgaben oder ihren Teilen angeregt werden und ob diese in sinnvollem Zusammenhang zueinander stehen - also z.B. aufeinander aufbauen, zueinander hinführen oder ein Thema/eine Kompetenz aus unterschiedlichen Teilaspekten behandeln und vertiefen.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Sequenzierung",
                    title: "Die im Lehr-Lernmittel enthaltenen Aufgaben stehen in einem didaktisch oder fachlich sinnvollen Zusammenhang zueinander.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Die im Lehr-Lernmittel enthaltenen Aufgaben sind in einer aus fachlicher oder didaktischer Perspektive verständlichen Weise sequenziert. Sie verweisen aufeinander/bauen aufeinander auf und dabei werden nicht nur gleiche oder ähnliche kognitive Prozesse wiederholt. ",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Aktivierung", title: "Aktivierung", description: "Hier geht es um die Frage, inwiefern ein Lehr-Lernmittel insgesamt eine grundlegende Problemstellung verfolgt, die im Verlauf durch die Schülerinnen und Schüler bearbeitet und gelöst wird. Diese Problemstellung wird in der Regel am Anfang des Lehr-Lernmittels formuliert und bietet damit das 'Setting' für die sich daraus ergebenden Schritte und Aufgaben, wodurch lernpsychologisch betrachtet eine Aktivierung der Schülerinnen und Schüler erfolgt (Motivation).",

            questions: [
                {
                    type: "radiogroup",
                    name: "Aktivierung",
                    title: "Das Lehr-Lernmittel steht unter einer übergeordneten/umgreifenden Problemstellung, die durch die Schülerinnen und Schüler bearbeitet und gelöst wird.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Zu Beginn des durch das Lehr-Lernmittel initiierten Lernprozesses wird eine Problemstellung formuliert, die es im Verlauf zu lösen gilt. Alle nachfolgenden Unterrichtsschritte sind auf diese Problemstellung bezogen und führen nach und nach zur Lösung bzw. vertiefen diese.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Multiple Lösungswege", title: "Multiple Lösungswege", description: "Nicht immer gibt es eine festgefertigte Methode, eine fachliche Prozedur oder eine Sichtweise, um ein Problem oder eine Aufgabe zu lösen. Lehr-Lernmittel können hierfür sensibel sein und - wo möglich - unterschiedliche Wege zu einer Lösung zu kommen zulassen oder diese sogar anregen. Damit wird ein Spielraum für verschiedene plausible Strategien unterschiedlicher SuS ermöglicht, andererseits Flexibilität in verschiedenen Lösungsgsansätzen gefördert.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Multiple Lösungswege",
                    title: "Die im Lehr-Lernmittel enthaltenen Aufgaben regen die SuS zur Entwicklung mehrerer Lößungswege an.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Lehr-Lernmittel lassen Raum für unterschiedliche Herangehensweisen, ohne dabei die SuS gänzlich ohne jegliche Anleitung oder Hinweise auf Lösungswege zu lassen. Z.B. werden unterschiedliche Lösungswege oder Strategien als Angebot an die SuS skizziert und vorgeschlagen. Auch konkrete Beispiele für mögliche unterschiedliche Lösungen oder Strategien können diesen Ansatz unterstützen.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Didaktisches Konzept", title: "Didaktisches Konzept", description: "Für eine eigene Nutzung - insbesondere durch Lehrkräfte - ist es von Vorteil, wenn zentrale Gedanken für den didaktischen Einsatz vermittelt werden. Und zwar selbst dann, wenn die Lehrpersonen das Lehr-Lernmittel nicht eins zu eins für ihren eigenen Unterricht einsetzen wollen, sondern an eigene Bedürfnisse anpassen möchten. Dazu gehören Informationen wie: Zielgruppe(n), Ziele, Teilziele, damit verbundene Methoden, angestrebte bzw. geförderte Kompetenzen, Bezug zu Unterrichtsthemen etc.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Didaktisches Konzept",
                    title: "Das Lehr-Lernmittel enthält didaktische Informationen, die seine Anwendung erleichtern.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Das Lehr-Lernmittel enthält weitreichende und begründete Informationen über seine didaktische Konzeption. Diese übersteigen grundlegende Informationen über thematische Bezüge sowie die Zielgruppe und geben darüber hinaus auch Informationen über methodische Vorgehensweisen, angestrebte Kompetenzen oder Teilziele. Diese Informationen erklären die Intention des Lehr-Lernmittels und erleichtern somit seine Nutzbarkeit.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Rahmenbedingungen", title: "Rahmenbedingungen", description: "Der Einsatz von Lehr-Lernmitteln im Unterricht birgt bestimmte Voraussetzungen, die bei einer beabsichtigten Nutzung zu bedenken sind. Dazu gehören z.B. Zeitbedarf, technische oder räumliche Voraussetzungen, bestimmte Gruppengrößen, das Vorhandensein bestimmter Materialien oder Medien, die Möglichkeit der Wiedergabe bestimmter Medienformate, Internetverbindung, eine bestimmte Anzahl an PCs oder mobilen Endgeräten etc. Für die Lehrkraft ist es hilfreich, wenn diese Voraussetzungen von vornherein übersichtlich genannt werden.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Rahmenbedingungen",
                    title: "Das Lehr-Lernmittel nennt die Rahmenbedingungen seiner Nutzung.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Es sind alle nötigen Rahmenbedingungen der Nutzung/des Einsatzes des Lehr-Lernmittels übersichtlich aufgeführt.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Bezüge Curriculum", title: "Bezüge Curriculum", description: "Heutige Lehrpläne enthalten fach- und stufen- bzw. jahrgangsbezogene Ziele, Themengebiete, Fertigkeiten/Kompetenzen, didaktische Prinzipien oder Anregungen zu Methoden. Wenn es auch nicht unbedingt darum geht, hier eine eng geführte Entsprechung zu erreichen, so ist doch eine Passung der mittel und langfristigen Unterrichtsverläufe zu diesen Lehrplänen wichtig. Dazu ist es hilfreich, wenn das Lehr-Lernmittel entsprechende Bezüge zumindest stichwortartig herstellt, so dass eine Zuordnung seitens der Lehrkräfte bzw. u.U. auch seitens der SuS leichter vollzogen werden kann.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Bezüge Curriculum",
                    title: "Im Lehr-Lernmittel werden nachvollziehbare Bezüge zu Inhalten des für das Fach gültigen Curriculums hergestellt",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Im Lehr-Lernmittel werden Ziele, Themengebiete, angestrebte Fertigkeiten/Kompetenzen, didaktische Prinzipien oder Anregungen zu Methoden auf eine Art transparent gemacht, die einer Lehrkraft eine Zuordnung zu den gültigen Lehr- und Bildungsplänen (Curricula) leicht macht. Idealerweise wird eine solche Zuordnung im Lehr-/Lernmittel selbst vorgenommen, es enthält also spezifische Aussagen zu diesem Bereich. Das kann auch in der Form geschehen, dass der ergänzende Charakter als indirekter Bezug auf die Lehr- und Bildungspläne deutlich gemacht wird.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Bezüge Bildungsstandards", title: "Bezüge Bildungsstandards", description: "Für eine Reihe von Fächern existieren in der Bundesrepublik Deutschland Bildungsstandards, in denen Kompetenz- bzw. Anforderungsbereiche beschrieben sind. Zwar ist davon auszugehen, dass sich diese auch in Lehr- und Bildungsplänen niederschlagen, jedoch kann es trotzdem hilfreich sein, wenn im Lehr-Lernmittel auch hier entsprechende Bezüge zumindest stichwortartig herstellt werden, so dass eine Zuordnung seitens der Lehrkräfte bzw. u.U. auch seitens der SuS leichter vollzogen werden kann.",

            questions: [
                {
                    type: "radiogroup",
                    name: "Bezüge Bildungsstandards",
                    title: "Im Lehr-Lernmittel werden nachvollziehbare Bezüge zu Inhalten der für das Fach gültigen Bildungsstandards hergestellt.",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: true,
                    hasComment: true,
                    commentText: "Indikator für eine positve Ausprägung (trifft voll zu): \n Im Lehr-Lernmittel findet eine grundsätzliche Einordnung der Lehr-Lernziele, der Themen sowie der angestrebten Kompetenzen zu entsprechenden Inhalten der Bildungsstandards statt (z.B. Anforderungsbereiche, Kompetenzen, Themen). Das kann auch detailliert/kleinschrittiger passieren, indem z.B. einzelne Unterrichtssequenzen oder Aufgaben in ihrer Bedeutung für den Kompetenzerwerb im Sinne der Bildungsstandards zugeordnet werden.",
                    choices: [{value: 1, text: "trifft nicht zu"}, {value: 2, text: "trifft weniger zu"}, {value: 3, text: "trifft mehr zu"}, {value: 4, text: "trifft voll zu"}, {value: 0, text: "nicht bewertbar"}]
                }
            ]
        }, {name:"Eigene Anmerkungen", title: "Eigene Anmerkungen", description: "Hier können Sie eigene Kommentare zum analysierten / evaluierten Lehr-Lernmnittel einfügen, die in der Auswertung angezeigt werden.",

            questions: [
                {
                    type: "text",
                    name: "Eigene Anmerkungen",
                    title: "Bitte geben Sie hier eigene Anmerkung zum Lehr-Lernmittel an (optional).",
                    //description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schülerinnen und Schüler und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektive Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig präsentiert sind?",
                    isRequired: false,
                }
            ]


        },  {
            questions: [
                {
                    type: "dropdown",
                    name: "Region",
                    title: "Wir freuen uns, wenn Sie uns mitteilen aus welcher Region Sie das AAER nutzen (optional).",
                    choices: [{value: 1, text: "Baden-Württemberg"}, {value: 2, text: "Bayern"}, {value: 3, text: "Berlin"}, {value: 4, text: "Brandenburg"}, {value: 5, text: "Bremen"}, {value: 6, text: "Hamburg"}, {value: 7, text: "Hessen"}, {value: 8, text: "Mecklenburg-Vorpommern"}, {value: 9, text: "Niedersachsen"}, {value: 10, text: "Nordrhein-Westfalen"}, {value: 11, text: "Rheinladn-Pfalz"}, {value: 12, text: "Saarland"}, {value: 13, text: "Sachsen"}, {value: 14, text: "Sachsen-Anhalt"}, {value: 15, text: "Schleswig-Holstein"}, {value: 16, text: "Thüringen"}, {value: 17, text: "Schweiz"}, {value: 18, text: "Österreich"}, {value: 19, text: "andere Region"}, {value: 20, text: "keine Angabe"}]
                }
            ]
        }
    ]
};

let canvas = document.createElement('canvas');
canvas.width = 768;
canvas.heigt = 1020;
let context_pdf = canvas.getContext('2d');

function drawOnPDF(chart, pos) {
    context_pdf.drawImage(chart, 340*pos+44*(pos%2), 340*pos, canvas.width, canvas.height);
}


window.survey = new Survey.Model(json);


var stopLink = false;
var stopAnmerkungen = false;

// Start: Survey Validation der Felder

function surveyValidateQuestion(survey, options) {

    if (options.name == 'Link' && !stopLink) {
        console.log(options.value);

        var input;
        if (options.value === undefined) {
            input = '(undefined)';

        } else {
            input = options.value;
        }
        survey.setValue('Link', input);
        console.log(input);
        stopLink = true;

    }
    if (options.name == 'Eigene Anmerkungen' && !stopAnmerkungen) {
        console.log(options.value);

        var input;
        if (options.value === undefined) {
            input = '(undefined)';

        } else {
            input = options.value;
        }
        survey.setValue('Eigene Anmerkungen', input);
        console.log(input);
        stopLink = true;

    }

}

// Ende: Survey Validation der Felder



// Start: Skripte zur Speicherung der JS-Objekte

survey.onComplete.add(function (sender, options) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://aaer.zlbib.uni-augsburg.de/result");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(sender.data));

    console.log(sender.data);

    document.querySelector('#surveyResult').textContent = "" + JSON.stringify(sender.data, null, 4);

    generateCharts();

});

// Ende: Skripte zur Speicherung der JS-Objekte


$("#surveyElement").Survey({model: survey, onValidateQuestion: surveyValidateQuestion});
//$("#surveyElement").Survey({model: survey});

// Start: Funktionen zur Darstellung der Diagramme

function generateCharts() {
    overallChart();
    grp1Chart();
    grp2Chart(2);
    grp3Chart();
    grp4Chart();
    grp5Chart();
    grp6Chart();
    grp7Chart();
    grp8Chart();
}

// Ende: Funktionen zur Darstellung der Diagramme

setRadioButtonsValues();

// Beispiel-Values bei Abfragen
//survey.setValue('Name des Lehr-Lernmittels', 'Whiteboard');
//survey.setValue('Link', 'www.mein-link-123.gibtesnicht');
//survey.setValue('Eigene Anmerkungen', 'Teuer.');


// Start: Radio Buttons Presets

function setRadioButtonsValues() {

    survey.data = {
        "Bezüge Curriculum": 4,
        "Bezüge Bildungsstandards": 1,
        "Interessegeleitete Themenführung/Positionierung": 2,
        "Transparenz": 3,
        "Werbliche Elemente": 0,
        "Heterogenität/Gender": 1,
        "Handlungsorientierung": 4,
        "Lebensweltlichkeit": 2,
        "Reflexion/Urteilsfähigkeit": 1,
        "Multiperspektivität/Kontroversität": 1,
        "Methodenpluralität": 0,
        "Multimedia/Multimodalität": 3,
        "Medienkompetenz": 1,
        "Differenzierung": 4,
        "Barrierefreiheit/Inklusion": 4,
        "Transfer- und Anwendungsorientierung": 2,
        "Prozessorientierung (Kumulation)": 1,
        "Lernwegunterstützende Elemente (Scaffolding)": 0,
        "Sprachlichkeit": 2,
        "Bildsprache": 3,
        "Additive Kommunikation (Anreicherung)": 1,
        "Sequenzierung": 4,
        "Aktivierung": 1,
        "Multiple Lösungswege": 0,
        "Didaktisches Konzept": 1,
        "Rahmenbedingungen": 2,
        "Region": 1
    };

}

// Ende: Radio Buttons Presets



// Start: Name Lehr- Lernmittel

function setNameAndLink() {
    document.getElementById('name_lernmittel').innerHTML = "<h1>" + survey.getValue('Name des Lehr-Lernmittels') + "</h1>";
    document.getElementById('link_lernmittel').innerHTML = "<h1>" + survey.getValue('Link') + "</h1>";
}

// Ende: Name Lehr- Lernmittel



// Start: Eigene Anmerkungen

function setAnmerkungen() {
    document.getElementById('anmerkungen').innerHTML = "<h1>" + survey.getValue('Eigene Anmerkungen') + "</h1>";
}

// Ende: Eigene Anmerkungen



// Start: Bundesland aka Region Abfrage

function setBLand() {
    var bland_value = survey.getValue('Region')
    document.getElementById('bland').innerHTML = "<h1>" + "Ausgewähltes Bundesland: " + bland_value + "</h1>";
}

// Ende: Bundesland aka Region Abfrage



// Globale Einstellungen

// Default Font-Size auf 16px
//Chart.defaults.global.defaultFontSize = 14;

// Default Font-Color auf Schwarz
//Chart.defaults.global.defaultFontColor = 'black';


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

// function responsivefy(svg) {
//     const container = d3.select(svg.node().parentNode),
//         width = parseInt(svg.style('width'), 10),
//         height = parseInt(svg.style('height'), 10),
//         aspect = width / height;
//
//     svg.attr('viewBox', `0 0 ${width} ${height}`)
//         .attr('preserveAspectRatio', 'xMinYMid')
//         .call(resize);
//
//     d3.select(window).on('resize.' + container.attr('id'), resize);
//
//     function resize() {
//         const targetWidth = parseInt(container.style('width'));
//         svg.attr('width', targetWidth);
//         svg.attr('height', Math.round(targetWidth / aspect));
//     }
// }

barChartOptions = {
    animation: {
        easing: "easeInOutBack"
    },
    legend: {
        display: false
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

barNonResponsive = {
    animation: {
        easing: "easeInOutBack"
    },
    legend: {
        display: false
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
    },
    responsive: false
};


// Start: Details overallChart

function overallChart() {
    var overallChartObject = document.getElementById('overallChart');
    dataALL = {
        labels: ["Bezüge Curriculum", "Bezüge Bildungsstandards", "Interessensgeleitete Themenführung", "Transparenz", "Werbliche Elemente", "Heterogenität/Gender", "Handlungsorientierung", "Lebensweltlichkeit", "Reflexion / Urteilsfähigkeit", "Multiperspektivität / Kontroversität", "Methodenpluralität", "Multimedia / Multimodalität", "Medienkompetenz", "Differenzierung", "Barrierefreiheit / Inklusion", "Transferorientierung", "Prozessorientierung", "Lernwegunterstützend", "Sprachlichkeit", "Bildsprache", "Anreicherung", "Sequenzierung", "Aktivierung", "Multiple Lösungswege", "Didaktisches Konzept", "Rahmenbedingungen"],
        datasets: [{
            label: "Übersichts-Chart",
            data: [survey.getValue('Bezüge Curriculum'), survey.getValue('Bezüge Bildungsstandards'), survey.getValue('Interessegeleitete Themenführung/Positionierung'), survey.getValue('Transparenz'), survey.getValue('Werbliche Elemente'), survey.getValue('Heterogenität/Gender'), survey.getValue('Handlungsorientierung'), survey.getValue('Lebensweltlichkeit'), survey.getValue('Reflexion/Urteilsfähigkeit'), survey.getValue('Multiperspektivität/Kontroversität'), survey.getValue('Methodenpluralität'), survey.getValue('Multimedia/Multimodalität'), survey.getValue('Medienkompetenz'), survey.getValue('Differenzierung'), survey.getValue('Barrierefreiheit/Inklusion'), survey.getValue('Transfer- und Anwendungsorientierung'), survey.getValue('Prozessorientierung (Kumulation)'), survey.getValue('Lernwegunterstützende Elemente (Scaffolding)'), survey.getValue('Sprachlichkeit'), survey.getValue('Bildsprache'), survey.getValue('Additive Kommunikation (Anreicherung)'), survey.getValue('Sequenzierung'), survey.getValue('Aktivierung'), survey.getValue('Multiple Lösungswege'), survey.getValue('Didaktisches Konzept'), survey.getValue('Rahmenbedingungen')]
        }]
    };

    var overallChart = new Chart(overallChartObject, {
        type: 'bar',
        data: dataALL,
        options: barChartOptions
    });

    let canvasALL = window.document.getElementById('canvasALL');
    var hiddenChartALL = new Chart(canvasALL, {
        type: 'bar',
        data: dataALL,
        options: barNonResponsive
    });
}

// Ende: Details overallChart

barBackgroundColor = ["#f49080","#80b6f4"];



// radarChartOptions = {
//     scale: {
//         ticks: {
//             max: 4,
//             stepSize: 1,
//             beginAtZero: true
//         }
//
//     }
// };
//
// radarNonResponsive = {
//     scale: {
//         ticks: {
//             max: 4,
//             stepSize: 1,
//             beginAtZero: true
//         }
//
//     },
//     responsive: false
// };



// Start: Details grb1Chart

function grp1Chart() {
    var grp1ChartObject = window.document.getElementById('grp1Chart');
    var data1 = {
        labels: ["Curriculum", "Bildungsstandards"],
        datasets: [{
            label: "Anlehnung an Curriculum und Bildungsstandards",
            backgroundColor: barBackgroundColor,
            data: [survey.getValue('Bezüge Curriculum'), survey.getValue('Bezüge Bildungsstandards')]
        }]
    };
    var Chart1 = new Chart(grp1ChartObject, {
        type: 'bar',
        data: data1,
        options: barChartOptions
    });

    let canvas1 = window.document.getElementById('canvas1');
    var hiddenChart1 = new Chart(canvas1, {
        type: 'bar',
        data: data1,
        options: barNonResponsive
    });
}


// function grp1Chart()
// {
//     const keys = Object.keys(jsData);
//
//     const margin = {top: 10, right: 20, bottom: 30, left: 30};
//
//     const width = 400 - margin.left - margin.right;
//     const height = 400 - margin.top - margin.bottom;
//
//     const data = [keys[0], keys[1]]; // Hier stehen einfach Strings zur Beschriftung der x-Achse
//
//     const xScale = d3.scaleBand() // Aufteilung der x-Achse
//         .padding(0.2)
//         .domain(data)
//         .range([0, width]);
//
//     const yScale = d3.scaleLinear() // Aufteilung der y-Achse von 0 bis 4
//         .domain([0, 4])
//         .range([height, 0]);
//
//     const svg = d3.select('#grp1Chart')
//         .append('svg') // Anfügen svg->DOM-Element
//           .attr('width', width + margin.left + margin.right)
//           .attr('height', height + margin.top + margin.bottom)
//           .call(responsivefy) // this is all it takes to make the chart responsive
//         .append('g') // Anfügen g->svg
//           .attr('transform', `translate(${margin.left}, ${margin.top})`);
//
//     const graphArea = svg
//         .append('g'); // Anfügen g->svg.g
//
//     let defs = svg.append("defs"); // Anfügen defs->svg.g
//
//     let gradient = defs.append("linearGradient") // Farbübergang senkrecht
//         .attr("id", "svgGradient")
//         //.attr("x1", "0%")
//         //.attr("x2", "100%")
//         //.attr("y1", "0%")
//         //.attr("y2", "100%");
//         .attr('gradientTransform', 'rotate(90)');
//
//     gradient.append("stop") // Man fängt oben an
//         .attr('class', 'start')
//         .attr("offset", "0%")
//         .attr("stop-color", 'green')
//         .attr("stop-opacity", 1);
//
//     gradient.append("stop")
//         .attr('class', 'end')
//         .attr("offset", "100%")
//         .attr("stop-color", 'white')
//         .attr("stop-opacity", 0.7);
//
//     defs // Erstellt das Chart
//         .append('clipPath')
//         .attr('id', 'clip-bar-rects')
//         .selectAll('bar')
//         .data([survey.getValue('Bezüge Curriculum'), survey.getValue('Bezüge Bildungsstandards')])
//         .enter()
//         .append('rect')
//         .attr('x', (d, i) => xScale(data[i]))
//         .attr('y', d => yScale(d))
//         .attr('width', d => xScale.bandwidth())
//         .attr('height', d => height - yScale(d))
//         .attr("clip-path", "url(#clip-bar-rects)")
//         .attr('fill', 'url(#svgGradient)');
//
//     const clipPath = graphArea // An die Fläche wird der Bereich angebracht, auf den die Balken kommen.
//         .append('g')
//         .attr('clip-path', 'url(#clip-bar-rects)');
//
//     clipPath // Fläche, die man benötigt, um die Balken zu färben.
//         .append('rect')
//         .attr('x', 0)
//         .attr('y', 0)
//         .attr('width', width)
//         .attr('height', height)
//         .style('fill', 'url(#svgGradient)');
//
//
//     svg.append('g').call(d3.axisLeft(yScale).ticks(4)); // y-Achse mit yScale[vorher definiert]
//
//     svg.append('g') // x-Achse mit xScale[vorher definiert]
//         .attr('transform', `translate(0, ${height})`)
//         .call(d3.axisBottom(xScale));
// }

// Ende: Details grb1Chart



// Start: Details grb2Chart

function grp2Chart() {
    var grp2ChartObject = document.getElementById('grp2Chart');
    data2 = {
        labels: [["Interessensgeleitete", "Themenführung"], "Transparenz", "Werbliche Elemente", ["Heterogenität /", "Gender"]],
        datasets: [{
            label: "Diskursive Positionierung",
            data: [survey.getValue('Interessegeleitete Themenführung/Positionierung'), survey.getValue('Transparenz'), survey.getValue('Werbliche Elemente'), survey.getValue('Heterogenität/Gender')]
        }]
    };
    var Chart2 = new Chart(grp2ChartObject, {
        type: 'bar',
        data: data2,
        options: barChartOptions
    });

    let canvas2 = window.document.getElementById('canvas2');
    var hiddenChart2 = new Chart(canvas2, {
        type: 'bar',
        data: data2,
        options: barNonResponsive
    });

}

// Ende: Details grb2Chart



// Start: Details grb3Chart

function grp3Chart() {
    var grp3ChartObject = document.getElementById('grp3Chart');
    data3 = {
        labels: ["Handlungsorientierung", "Lebensweltlichkeit", "Reflexion", "Multiperspektivität"],
        datasets: [{
            label: "Makrodidaktische und bildungstheoretische Fundierung",
            data: [survey.getValue('Handlungsorientierung'), survey.getValue('Lebensweltlichkeit'), survey.getValue('Reflexion/Urteilsfähigkeit'), survey.getValue('Multiperspektivität/Kontroversität')]
        }]
    };
    var Chart3 = new Chart(grp3ChartObject, {
        type: 'bar',
        data: data3,
        options: barChartOptions
    });

    let canvas3 = window.document.getElementById('canvas3');
    var hiddenChart3 = new Chart(canvas3, {
        type: 'bar',
        data: data3,
        options: barNonResponsive
    });
}

// Ende: Details grb3Chart



// Start: Details grb4Chart

function grp4Chart() {
    var grp4ChartObject = document.getElementById('grp4Chart');
    data4 = {
        labels: ["Methodenpluralität", "Multimedia", "Medienkompetenz", "Differenzierung", "Barrierefreiheit"],
        datasets: [{
            label: "Mikrodidaktische Umsetzung",
            data: [survey.getValue('Methodenpluralität'), survey.getValue('Multimedia/Multimodalität'), survey.getValue('Medienkompetenz'), survey.getValue('Differenzierung'), survey.getValue('Barrierefreiheit/Inklusion')]
        }]
    };
    var Chart4 = new Chart(grp4ChartObject, {
        type: 'bar',
        data: data4,
        options: barChartOptions
    });

    let canvas4 = window.document.getElementById('canvas4');
    var hiddenChart4 = new Chart(canvas4, {
        type: 'bar',
        data: data4,
        options: barNonResponsive
    });
}

// Ende: Details grb4Chart



// Start: Details grb5Chart

function grp5Chart() {
    var grp5ChartObject = document.getElementById('grp5Chart');
    data5 = {
        labels: ["Transferorientierung", "Prozessorientierung", "Lernwegunterstützend"],
        datasets: [{
            label: "Kognitive Strukturierung",
            data: [survey.getValue('Transfer- und Anwendungsorientierung'), survey.getValue('Prozessorientierung (Kumulation)'), survey.getValue('Lernwegunterstützende Elemente (Scaffolding)')]
        }]
    };
    var Chart5 = new Chart(grp5ChartObject, {
        type: 'bar',
        data: data5,
        options: barChartOptions
    });

    let canvas5 = window.document.getElementById('canvas5');
    var hiddenChart5 = new Chart(canvas5, {
        type: 'bar',
        data: data5,
        options: barNonResponsive
    });
}

// Ende: Details grb5Chart



// Start: Details grb6Chart

function grp6Chart() {
    var grp6ChartObject = document.getElementById('grp6Chart');
    data6 = {
        labels: ["Sprachlichkeit", "Bildsprache", "Anreicherung"],
        datasets: [{
            label: "Bild- und Textkomposition",
            data: [survey.getValue('Sprachlichkeit'), survey.getValue('Bildsprache'), survey.getValue('Additive Kommunikation (Anreicherung)')]
        }]
    };
    var Chart6 = new Chart(grp6ChartObject, {
        type: 'bar',
        data: data6,
        options: barChartOptions
    });

    let canvas6 = window.document.getElementById('canvas6');
    var hiddenChart6 = new Chart(canvas6, {
        type: 'bar',
        data: data6,
        options: barNonResponsive
    });
}

// Ende: Details grb6Chart



// Start: Details grb7Chart

function grp7Chart() {
    var grp7ChartObject = document.getElementById('grp7Chart');
    data7 = {
        labels: ["Sequenzierung", "Aktivierung", "Multiple Lösungswege"],
        datasets: [{
            label: "Aufgabendesign",
            data: [survey.getValue('Sequenzierung'), survey.getValue('Aktivierung'), survey.getValue('Multiple Lösungswege')]
        }]
    };
    var Chart7 = new Chart(grp7ChartObject, {
        type: 'bar',
        data: data7,
        options: barChartOptions
    });

    let canvas7 = window.document.getElementById('canvas7');
    var hiddenChart7 = new Chart(canvas7, {
        type: 'bar',
        data: data7,
        options: barNonResponsive
    });
}

// Ende: Details grb7Chart



// Start: Details grb8Chart

function grp8Chart() {
    var grp8ChartObject = document.getElementById('grp8Chart');
    data8 = {
        labels: ["Didaktisches Konzept", "Rahmenbedingungen"],
        datasets: [{
            label: "Anwendungstransparenz",
            backgroundColor: barBackgroundColor,
            data: [survey.getValue('Didaktisches Konzept'), survey.getValue('Rahmenbedingungen')]
        }]
    };
    var Chart8 = new Chart(grp8ChartObject, {
        type: 'bar',
        data: data8,
        options: barChartOptions
    });

    let canvas8 = window.document.getElementById('canvas8');
    var hiddenChart8 = new Chart(canvas8, {
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