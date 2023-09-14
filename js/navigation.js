function display_navigation() {
	var container = document.getElementById("navigation_container");
	container.innerHTML =
		`
		<!-- Navigation Start -->
		<link rel = "stylesheet" href = "/css/navigation.css" />
		<div class="site-navbar-top">
			<div class="container py-3 px-2">
				<div class="row align-items-center mx-0">
					<div class="d-flex mr-auto">
						<a href="mailto:team@digillab.uni-augsburg.de" class="d-flex align-items-center mr-4">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 d-none d-md-inline-block" viewBox="0 0 16 16">
							  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
							</svg>
							<span class="d-none d-md-inline-block">team@digillab.uni-augsburg.de</span>
						</a>
						<a href="tel:+498215983151" class="d-flex align-items-center mr-4">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 d-none d-md-inline-block" viewBox="0 0 16 16">
							  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
							</svg>
							<span class="d-none d-md-inline-block"> +49 821 598 3151</span>
						</a>
						<a href="https://digillab.uni-augsburg.de" class="d-flex align-items-center mr-auto" target=”_blank” >
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 d-none d-md-inline-block" viewBox="0 0 16 16">
							  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
							  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
							</svg>
							<span class="d-none d-md-inline-block">https://digillab.uni-augsburg.de</span>
						</a>
					</div>
					<div class="d-flex ml-auto">
						<a href="#" class="d-flex align-items-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2" viewBox="0 0 16 16">
							  <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
							  <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
							</svg>
							<div id="dropdown-languages_de" class="mr-auto d-inline-flex align-items-center text-white font-weight-bold">
								<a href="javascript:clickedGerman()">DE</a>
							</div>
							<span class="text-white mx-1">/</span>
							<div id="dropdown-languages_en" class="mr-auto d-inline-flex align-items-center text-white font-weight-bold">
								<a href="javascript:clickedEnglish()">EN</a>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="container px-2">
			<nav class="navbar navbar-expand-lg pt-3 mt-0 navbar-dark mb-3 pr-0">
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav mr-auto">
			      <li class="nav-item mx-auto">
			        <a data-lang="De" class="nav-link pl-0 pb-0" href="index.html" alt="Start">
			        	<div class="image">
			          		<figure class="mb-0">
			            		<img class="image-img" src="/img/sophie/AAER%20Logo.png" width="200">
			          		</figure>
			        	</div>
			        </a>
			        <a style="display: none;" data-lang="En" class="nav-link pl-0 pb-0" href="index.html" alt="Start">
			        	<div class="image">
			          		<figure class="mb-0">
			            		<img class="image-img" src="/img/sophie/AAER%20Logo.png" width="200">
			          		</figure>
			        	</div>
			        </a>
			      </li>
			    </ul>
			    <ul class="navbar-nav mt-3">
			    	<!-- Dropdown German-->
					<li class="nav-item mx-3 dropdown" data-lang="De">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
						>
          				Analysieren & Bewerten
        				</a>
				        <ul class="dropdown-menu mt-2" aria-labelledby="dropdownMenuLink">
				          <li>
				            <a class="dropdown-item nav-link" href="survey.html" data-lang="De">Das allgemeine AAER</a>
				          </li>
				          <li>
				            <a class="dropdown-item nav-link" href="aaer-geschichte.html" data-lang="De" style="min-width: 300px;">Das AAER für den Geschichtsunterricht</a>
				          </li>
				        </ul>
					</li>
					<!-- Dropdown German-->
			    	<!-- Dropdown English -->
					<li class="nav-item mx-3 dropdown" data-lang="En" style="display: none;">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
						>
          				Analyse & Evaluate 
        				</a>
				        <ul class="dropdown-menu mt-2" aria-labelledby="dropdownMenuLink">
				          <li>
				            <a class="dropdown-item nav-link" href="survey.html" data-lang="En" style="display: none;">Common Tool</a>
				          </li>
				          <li>
				            <a class="dropdown-item nav-link" href="aaer-geschichte.html" data-lang="En" style="display: none; min-width:300px !important;">Tool for History Education</a>
				          </li>
				        </ul>
					</li>
					<!-- Dropdown English -->
					<li class="nav-item mx-3" data-lang="De">
			        	<a class="nav-link" href="info.html" data-toggle="tooltip" data-placement="bottom" title="Erfahren Sie mehr über das AAER." alt="Erfahren Sie mehr über das AAER">Mehr</a>
			      	</li>
			    	<li class="nav-item mx-3" data-lang="En" style="display: none;">
			        	<a class="nav-link" href="info.html" data-toggle="tooltip" data-placement="bottom" title="Learn more about the AAER." alt="Learn more about the AAER">More</a>
			      	</li>
					<li class="nav-item ml-3" data-lang="De">
			        	<a class="nav-link" href="contact.html" data-toggle="tooltip" data-placement="bottom" title="Kontaktieren Sie uns bei Fragen." alt="Kontaktieren Sie uns bei Fragen">Kontakt</a>
			      	</li>
			    	<li class="nav-item ml-3" data-lang="En" style="display: none;">
			        	<a class="nav-link" href="contact.html" data-toggle="tooltip" data-placement="bottom" title="Contact us if you have any questions." alt="Contact us if you have any questions">Contact</a>
			      	</li>
			     </ul>
			  </div>
			</nav>
		</div>
		<!-- Navigation End -->
		`
	;
}

// Start: Hervorhebung des Active-Elements in der Navigation
// Entfernung des voranstehenden / der Unterseiten
var specialChars = "/";
for (var i = 0; i < specialChars.length; i++) {
  var active = location.pathname.replace(new RegExp("\\" + specialChars[i], "gi"), "");
}

// Hinzufügen der Klasse active für das aktuelle Element im DOM
$(document).ready(function() {
    $('a[href$="' + active + '"]').addClass('active');
    console.log("Hey Nerd! Vince und Norman wünschen dir viel Spaß bei der Nutzung des AAER.");
});

// Ende: Hervorhebung des Active-Elements in der Navigation
display_navigation();

// Tooltips Initialization
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

function expand(lang) {
	dropdown = document.getElementById('dropdown-languages_' + lang)
	if (dropdown.style.display === 'none') {
		dropdown.style.display = 'block'
	}
}

window.addEventListener('click', function(e) {
	dropdown_de = document.getElementById('dropdown-languages_de')
	if (!dropdown_de.contains(e.target)) {
		dropdown_de.style.display = 'none'
	}
	dropdown_en = document.getElementById('dropdown-languages_en')
	if (!dropdown_en.contains(e.target)) {
		dropdown_en.style.display = 'none'
	}
})

function changeDeInline() {
	let elements_de = document.querySelectorAll('[data-lang="de-inline"]')
	let de = [...elements_de]
	de.forEach(element => element.style.display = 'inline-block')

	let elements_en = document.querySelectorAll('[data-lang="en-inline"]')
	let en = [...elements_en]
	en.forEach(element => element.style.display = 'none')
}

function clickedGerman() {
	changePlaceholderTextAAER('De')
	changeSurveyText('De')

	dropdown = document.getElementById('dropdown-languages_de')
	dropdown.style.display = 'none'

	let elements_de = document.querySelectorAll('[data-lang="De"]')
	let de = [...elements_de]
	de.forEach(element => element.style.display = 'block')

	let elements_en = document.querySelectorAll('[data-lang="En"]')
	let en = [...elements_en]
	en.forEach(element => element.style.display = 'none')

	changeDeInline()

	// SessionStorage De
	sessionStorage.setItem("language", "De");
}

let subjects_de = [
	'Bitte wählen Sie ein Fach...',
	'Keine Angabe', 'Biologie', 'Chemie', 'Deutsch', 'Englisch',
	'Erdkunde / Geographie', 'Ethik', 'Französich', 'Geschichte', 'Informatik / IT',
	'Kunst / Werken', 'Latein', 'Mathematik', 'Musik', 'Pädagogik', 'Philosophie',
	'Physik', 'Psychologie', 'Religion', 'Sozialkunde / Politik', 
	'Sport', 'Sprachen (andere)', 'Sonstiges Fach'
]

let subjects_en = [
	'Please choose a subject...',
	'not specified', 'biology', 'chemistry', 'german', 'english', 
	'geography', 'ethics', 'french', 'history', 'computer science', 
	'art', 'latin', 'maths', 'music', 'pedagogy', 'philosophy',
	'physics', 'psychology', 'religion', 'social/political studies', 
	'sports', 'languages (other)', 'other subject'
]

let schools_de = [
	'Bitte wählen Sie eine Schulart...', 
	'Keine Angabe', 'Abendschule', 'Alternatives Schulkonzept', 'Berufsfachschule',
	'Berufskolleg', 'Berufsoberschule', 'Berufsschule', 'Bildungskolleg',
	'Fachakademie', 'Fachhochschule', 'Fachoberschule', 'Fachschule',
	'Förderschule', 'Gemeinschaftsschule', 'Gesamtschule', 'Grundschule',
	'Gymnasium', 'Hochschule', 'Internationale Schule', 'Mittelschule',
	'Realschule', 'Schule besonderer Art', 'Schule für Kranke', 'Sekundarschule',
	'Volkshochschule', 'Vorschule', 'Wirtschaftsschule', 'Sonstige Schule'
]

let schools_en = [
	'Please choose the type of school...', 
	'not specified', 'Abendschule', 'Alternatives Schulkonzept', 'Berufsfachschule',
	'Berufskolleg', 'Berufsoberschule', 'Berufsschule', 'Bildungskolleg',
	'Fachakademie', 'Fachhochschule', 'Fachoberschule', 'Fachschule',
	'Förderschule', 'Gemeinschaftsschule', 'Gesamtschule', 'Grundschule',
	'Gymnasium', 'Hochschule', 'Internationale Schule', 'Mittelschule',
	'Realschule', 'Schule besonderer Art', 'Schule für Kranke', 'Sekundarschule',
	'Volkshochschule', 'Vorschule', 'Wirtschaftsschule', 'other school'
]

function changePlaceholderTextAAER(language) {
	subjects = document.getElementById('survey_subject');
	schools = document.getElementById('survey_institution');
	if (subjects != null) {
		if (language == "De") {
			document.getElementById('loadPredefined').placeholder = "10-stelliger Code"
			document.getElementById('loadResultSet').placeholder = "10-stelliger Code"
			document.getElementById('loadResult').placeholder = "12-stelliger Code"
			Array.prototype.forEach.call(subjects.options, function(option, index) {
				option.innerHTML = subjects_de[index];
				option.innerHTML = subjects_de[index];
			})
			Array.prototype.forEach.call(schools.options, function(option, index) {
				option.innerHTML = schools_de[index];
			})
	
			
		} else {
			document.getElementById('loadPredefined').placeholder = "10 characters long code"
			document.getElementById('loadResultSet').placeholder = "10 characters long code"
			document.getElementById('loadResult').placeholder = "12 characters long code"
			Array.prototype.forEach.call(subjects.options, function(option, index) {
				option.innerHTML = subjects_en[index];
			})
			Array.prototype.forEach.call(schools.options, function(option, index) {
				option.innerHTML = schools_en[index];
			})
		}
	}
}

let surveyTextDe = [
		{
			title: "Name des Lehr-Lernmittels",
			description: "Der Name wird später in Ihrer für Sie persönlich generierten Auswertung angezeigt.",
			question: "Bitte geben Sie den Namen des Lehr-Lernmittels an, das Sie mit Hilfe des AAER analysieren/evaluieren möchten."
		},
		{
			title: "Link (optional)",
			description: "Sie können an dieser Stelle den Link zu dem zu analysierenden/evaluierenden Lehr-Lernmittel angeben. Er wird in der abschließend für Sie generierten Auswertungsübersicht angezeigt.",
			question: "Bitte geben Sie den Link zu Ihrem Lehr-Lernmittel an (optional)."
		},
		{
			title: "",
			description: "",
			question: "Bitte teilen Sie uns mit, für welches Fach Sie das AAER nutzen (optional)."
		},
		{
			title: "",
			description: "",
			question: "Bitte teilen Sie uns mit, für welche Schulart Sie das AAER nutzen (optional)."
		},
		{
			title: "Bezüge Curriculum",
			description: "Heutige Lehrpläne enthalten fach- und stufen- bzw. jahrgangsbezogene Ziele, Themengebiete, Fertigkeiten/Kompetenzen, didaktische Prinzipien oder Anregungen zu Methoden. Wenn es auch nicht unbedingt darum geht, hier eine eng geführte Entsprechung zu erreichen, so ist doch eine Passung der mittel- und langfristigen Unterrichtsverläufe zu diesen Lehrplänen wichtig. Dazu ist es hilfreich, wenn das Lehr-Lernmittel entsprechende Bezüge zumindest stichwortartig herstellt, sodass eine Zuordnung seitens der Lehrkräfte, bzw. unter Umständen auch seitens der Schüler*innen, leichter vollzogen werden kann.",
			question: "Im Lehr-Lernmittel werden nachvollziehbare Bezüge zu Inhalten des gültigen Curriculums hergestellt."
		},
		{
			title: "Bezüge Bildungsstandards",
			description: "Für eine Reihe von Fächern existieren in der Bundesrepublik Deutschland Bildungsstandards, in denen Kompetenz- bzw. Anforderungsbereiche beschrieben sind. Zwar ist davon auszugehen, dass sich diese auch in Lehr- und Bildungsplänen der Bundesländer niederschlagen, jedoch kann es trotzdem hilfreich sein, wenn im Lehr-Lernmittel auch hier entsprechende Bezüge zumindest stichwortartig herstellt werden, sodass eine Zuordnung seitens der Lehrkräfte, bzw. unter Umständen auch seitens der Schüler*innen, leichter vollzogen werden kann.",
			question: "Im Lehr-Lernmittel werden nachvollziehbare Bezüge zu Inhalten der gültigen Bildungsstandards hergestellt."
		},
		{
			title: "Interessegeleitete Themenführung/Positionierung",
			description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schüler*innen und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektivische Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig repräsentiert sind?",
			question: "Das Lehr-Lernmittel ist frei von einseitiger Informationsvermittlung bzgl. bestimmter Themen/Aussagen gesellschaftlicher Akteure."
		},
		{
			title: "Transparenz",
			description: "'Transparenz' bedeutet in diesem Zusammenhang, inwieweit für die nutzende Person eines Lehr-Lernmittels klar ersichtlich ist, von wem dieses Lehr-Lernmittel stammt, sodass eine (kritische) Bewertung und Einordnung erfolgen kann. Dafür ist es wichtig, dass im Lehr-Lernmittel selbstbezogene Informationen bereitstellt werden. Dazu gehört z.B., wer es entwickelt und verbreitet (Autor*innen, Herausgeber*innen und Fördernde sowie ihre Zugehörigkeit zu bestimmten Organisationen), woher möglicherweise Gelder stammen, die zur Entwicklung des Lehr-Lernmittels genutzt wurden, und woher die Informationen stammen, die im Lehr-Lernmittel enthalten sind (Quellen). Wichtige Informationen für die Lehrkraft sind in diesem Zusammenhang auch Aussagen über die Ziele, die mit diesem Angebot verfolgt werden, bzw. Antworten auf die Frage, warum dieses Lehr-Lernmittel angeboten wird (Motivation).",
			question: "Das Lehr-Lernmittel ist transparent hinsichtlich seiner Autorenschaft/Anbieter."
		},
		{
			title: "Werbliche Elemente",
			description: "Zur Frage steht hier, inwiefern und in welchem Ausmaß in Lehr-Lernmitteln werbliche Elemente dargestellt werden. Dies muss unter dem Aspekt, dass in vielen Bundesländern Werbung im Unterricht entweder verboten oder zumindest sehr kritisch betrachtet wird und mit bestimmten Auflagen versehen ist, problematisiert werden. Werbliche Elemente im Zusammenhang mit Lehr-Lernmitteln können sein: Logos, Produktabbildungen, Nennung von Marken u.Ä., die nicht Gegenstand des Unterrichts sind (d.h., die nicht unter fachlicher oder medienpädagogischer Perspektive thematisiert werden).",
			question: "Das Lehr-Lernmittel ist frei von Werbung."
		},
		{
			title: "Heterogenität/Gender",
			description: "Lehr-Lernmittel enthalten direkt oder indirekt (z.B. über visuelle Darstellungen, Bilder, Grafiken oder auch im Rahmen von Textteilen) Repräsentationen/Darstellungen einer sozialen und gesellschaftlichen Umwelt, die sie jedoch auch gleichzeitig aufgrund dieser Darstellung für das Verständnis der Schüler*innen wiederum beeinflussen und 'erzeugen'. In einer pluralistisch verfassten, demokratischen Gesellschaft erscheint es wichtig, dass einseitige Zuschreibungen/Festlegungen auf gesellschaftliche bzw. ethnische Gruppen oder Minderheiten, auf Menschen mit Beeinträchtigungen sowie auf Geschlecht oder Religion vermieden werden. Darüber hinaus erscheint es als wichtig, dass eine kulturelle Vielfalt, wie sie unter den Schüler*innen herrscht, auch in Lehr-Lernmitteln repräsentiert wird.",
			question: "Das Lehr-Lernmittel ist in seinen textlichen und bildlichen Darstellungen von gesellschaftlichen bzw. ethnischen Gruppen sowie hinsichtlich der Kategorie Geschlecht ausgewogen und in ihm werden einseitige, reduzierende Darstellungen vermieden."
		},
		{
			title: "Handlungsorientierung",
			description: "Das Konzept der 'Handlungsorientierung' zielt auf die aktive Erschließung von Wissen und Kompetenzen durch die Schüler*innen ab. Dabei ist es in einen bildungstheoretischen Rahmen eingeordnet, der übergeordnete Bildungsziele der Selbst- und Mitbestimmungsfähigkeit (Klafki) als wichtige Normen für die übergeordneten Ziele von Unterricht anerkennt. Ein handlungsorientierter Unterricht zeichnet sich unter anderem dadurch aus, dass Schüler*innen aktiv tätig werden und eigene Arbeits- bzw. Denkergebnisse produzieren. Das kann im Rahmen von individuellen Aufgabenstellungen geschehen, es bieten sich dazu jedoch auch vielfältige Formen gruppenorientierten entdeckenden Lernens (Kooperation, Kollaboration) an. So interpretiert impliziert 'Handlungsorientierung' auch Eigenverantwortlichkeit und damit die Möglichkeit bzw. Notwendigkeit, mit eigenen Entscheidungen den Lern- bzw. Bildungsprozess zu beeinflussen/zu gestalten.",
			question: "Das Lehr-Lernmittel ist handlungsorientiert gestaltet, indem es Verantwortungsübernahme für Lernwege und Lernergebnisse durch die Schüler*innen fördert/fordert."
		},
		{
			title: "Lebensweltlichkeit",
			description: "Hier geht es um die Frage, inwiefern das Lehr-Lernmittel Bezüge zur Lebenswelt der Schüler*innen aufweist. Das geschieht z.B. dadurch, dass es zentrale und authentische Problemstellungen zur Grundlage hat, die unter gesellschaftlich-politischer oder unter individueller bzw. gruppenspezifischer (Klassengruppe, Peer Group) Perspektive für die Schüler*innen relevant sind. Dazu kann auch gehören, dass das Lehr-Lernmittel bewusst den emotionalen Aspekt dieser Lebenswelt thematisiert.",
			question: "Das Lehr-Lernmittel weist Bezüge zur Lebenswelt der Schüler*innen auf."
		},
		{
			title: "Reflexion/Urteilsfähigkeit",
			description: "Übergeordnete pädagogische Bildungsziele, wie Mündigkeit, Selbst-, Mitbestimmungs- und Solidaritätsfähigkeit (Klafki), verlangen, dass Schüler*innen sowohl im Hinblick auf fachliche Themen als auch auf ihre nahe und weite Umwelt sowie Lebenswelt als verantwortliche, urteilende Menschen angesprochen werden. Dazu gehört auch ein Maß an Selbstreflexion, d.h. dass Schüler*innen auch sich selbst, die eigene Situation, die Situation der Gruppe und ihre politische, soziale bzw. gesellschaftliche Position zum Gegenstand des Denkens machen (Metakognition, Reflexion).",
			question: "Das Lehr-Lernmittel spricht die Schüler*innen als Menschen an, die sich selbst und ihre Umwelt zum Gegenstand des eigenen Denkens und Urteilens machen."
		},
		{
			title: "Multiperspektivität/Kontroversität",
			description: "Lehr-Lernmittel behandeln als direkten Unterrichtsgegenstand oder auch als begleitendes Nebenthema immer wieder Themen, die innerhalb der Gesellschaft (oder auch in der Fachwissenschaft) multiperspektivisch oder auch kontrovers diskutiert werden. Es ist ein zentrales Anliegen eines pädagogisch verantworteten Unterrichtens, dass Lernende in solchen Themen nicht durch Unterricht und Lehrmittel bereits einseitig für eine mögliche Position/Meinung vereinnahmt werden, sondern dass sie auf Basis von Fakten sowie unterschiedlichen Argumenten zu einer eigenen Meinungsbildung hingeführt bzw. ermächtigt werden. Dies gilt vorbehaltlich einer altersgemäßen Komplexitätsreduktion bzw. Elementarisierung durch die Autor*innen des Lehr-Lernmittels. Insofern sind die Entwickler*innen gefordert, nicht nur eine einseitige Darstellung von Themen/Sachverhalten in Lehr-Lernmitteln zu vermeiden, sondern auch sensibel für plurale Sichtweisen zu sein und, wo vorhanden, auch die Kontroversität, die möglicherweise in Fachwissenschaft und Gesellschaft vorzufinden ist, den Lernenden nicht vorzuenthalten.",
			question: "Themen bzw. Probleme, die in Gesellschaft bzw. Wissenschaft kontrovers und multiperspektivisch diskutiert werden, werden im Lehrmittel ebenfalls kontrovers und multiperspektivisch dargestellt."
		},
		{
			title: "Methodenpluralität",
			description: "Methoden sind 'Lern- und Arbeitstechniken zum selbständigen und sachgerechten Erkennen, Entdecken, Experimentieren, Bearbeiten, Konstruieren, Gestalten, Präsentieren, Kommunizieren und Kontrollieren' (Wiater). Klippert unterscheidet Methoden der Informationsbeschaffung (Lesen, Nachschlagen, Befragen, etc.), der Informationsverarbeitung und Aufbereitung (Strukturieren, Visualisieren, Gestalten, etc.), Methoden der Arbeits-, Zeit- und Lernplanung und Methoden, die das Nachdenken über das eigene Lernen fördern. Einzelne Methoden können in Lehr-Lernmitteln bewusst eingesetzt werden, um die beabsichtigten Lernprozesse und Aktivitäten zu unterstützen. Sie können auch direkt thematisiert, in ihrer Bedeutung erläutert und gezielt eingeübt werden, um ihre Effektivität zu erhöhen (Förderung von Methodenkompetenz). Methoden erfüllen dabei keinen Selbstzweck, sondern haben eine Funktion innerhalb der übergeordneten Ziele des Lernprozesses (inkl. allgemeiner und überfachlicher Entwicklungsziele der Schüler*innen). ",
			question: "Das Lehr-Lernmittel setzt gezielt unterschiedliche Methoden ein, die den übergeordneten Zielen des Lernprozesses dienen."
		},
		{
			title: "Multimedia/Multimodalität",
			description: "Medien können ein eindrückliches Mittel sein, Sachverhalte zu veranschaulichen, Informationen didaktisch aufzubereiten, verständlich zu präsentieren und Anknüpfungen an die Lebenswelt von Jugendlichen zu schaffen. Lehr-Lernmittel können Medien nutzen, um Lernende auf unterschiedlichen Wegen anzusprechen und ihren Lerninhalt abgestimmt auf die damit verbundenen Lernziele zu vermitteln. Dies kann besonders effektiv gelingen, wenn in Lehr-Lernmitteln unterschiedliche Medienformate kombiniert werden, um so mehrere sensorische Kanäle der Lernenden anzusprechen (Multimodalität). Sie können dabei auch Wahlmöglichkeiten bieten, welche Medienarten für spezifische Schritte des Lernprozesses genutzt werden können.",
			question: "Das Lehr-Lernmittel transportiert seine Lerninhalte auf multimediale/multimodale Art und Weise."
		},
		{
			title: "Medienkompetenz",
			description: "Medien sind Teil der kulturellen und sozialen Umwelt von Schüler*innen sowie wesentlicher Träger der Informations- und Wissensgesellschaft, in der wir leben. Sie sind daher gleichermaßen ein notwendiges Lehr-Lernfeld und auch ein didaktisches Mittel, um Lehr-Lernprozesse zu unterstützen (Mittlerfunktion). Durch sie kann man auf besonders eindrückliche Weise Sachverhalte veranschaulichen, Informationen didaktisch aufbereiten und verständlich präsentieren sowie Anknüpfungen an die Lebenswelt von Kindern und Jugendlichen schaffen. Es ist wichtig, die kompetente Nutzung sowie die kritische Reflexion von Medien als Kommunikationsmittel und 'Mittler von Welt' zu fördern und zu trainieren. Medienkompetenz lässt sich in diesem Sinn verstehen als Vermögen (Fähigkeit) und Bereitschaft in Medienzusammenhängen zu handeln, über diese zu kommunizieren und kritisch zu reflektieren.",
			question: "Das Lehr-Lernmittel fördert einen kompetenten Umgang mit Medien."
		},
		{
			title: "Differenzierung",
			description: "Eine besondere Herausforderung für die Gestaltung von Unterricht stellt die Anpassung an eine heterogene Schülerschaft dar. Dazu können Lehr-Lernmittel einen wichtigen Beitrag leisten, indem sie sozusagen 'Variationen' ihrer selbst anbieten (Parallelisierung von Unterricht). Diese können z.B. über die Bereitstellung unterschiedlicher Anwendungsgebiete und Lernziele (auch mit unterschiedlichen Schwierigkeitsgraden) und darauf abgestimmter Arbeitsschritte bzw. unterschiedlicher Arbeitsaufträge innerhalb des Lehr-Lernmittels erfolgen. Dabei ist wichtig, dass die Ergebnisse der parallel durchgeführten Lernsequenzen auch wieder zusammengeführt werden.",
			question: "Das Lehr-Lernmittel beinhaltet Angebote für binnendifferenzierte Lernarrangements."
		},
		{
			title: "Barrierefreiheit/Inklusion",
			description: "Lehr-Lernmittel können wesentlich zur erfolgreichen Gestaltung von inklusiven Unterrichtsszenarien beitragen, indem sie barrierefreie Zugänge für Schüler*innen mit Beeinträchtigungen bieten (insbesondere für Schüler*innen mit Seh-, Hör- oder Lernbeeinträchtigungen). Für Menschen mit Hör- oder Sehbeeinträchtigungen ist beispielsweise die Beachtung des Zwei-Sinne-Prinzips von Bedeutung, d.h. ein Element/Inhalt des Lehr-Lernmittels wird immer vollständig auf zwei Wegen (auditiv und visuell) vermittelt. Außerdem können Untertitel in Videos, zusätzliche Texte, die den Inhalt einer Grafik oder einer Abbildung beschreiben, die Integration von Gebärdensprache, Möglichkeiten zur digitalen Sprachausgabe per Screenreader oder die Nutzbarkeit von Vergrößerungssoftware sowie Audiodeskriptionen etc. die Zugänglichkeit des Lehr-Lernmittels für die genannte Personengruppe erleichtern. Für Menschen mit Lernschwierigkeiten ist es sinnvoll, beispielsweise die Texte des Lehr-Lernmittels in leichter Sprache zu integrieren.",
			question: "Das Lehr-Lernmittel bietet barrierefreie Zugänge für Schüler*innen mit Beeinträchtigungen."
		},
		{
			title: "Transfer- und Anwendungsorientierung",
			description: "In Lehr-Lernmitteln können unterschiedliche kognitive Prozesse angeregt bzw. angestrebt werden. Diese Prozesse lassen sich grob unter folgenden Aktionswörtern zusammenfassen (aufsteigende Reihenfolge, was die Komplexität des Vorgangs angeht): erinnern, verstehen, anwenden, analysieren, bewerten, erschaffen. Kompetenzorientiertes Unterrichten wird in der Regel darauf abzielen, neben den elementaren kognitiven Prozessen 'erinnern' und 'verstehen' auch - entsprechend der Lern- bzw. Kompetenzziele - 'höhere' kognitive Prozesse anzuregen. Daher können in Lehr-Lernmitteln bewusst entsprechende Prozesse in Form von Fragen, Aufgaben oder Anschauungen integriert sein.",
			question: "Durch das Lehr-Lernmittel werden gezielt kognitive Prozesse angesprochen, die über elementare kognitive Prozesse hinausgehen und als transfer- bzw. anwendungsorientiert zu bezeichnen sind."
		},
		{
			title: "Prozessorientierung (Kumulation)",
			description: "Ein Lehr-Lernmittel besteht oftmals aus mehreren aufeinanderfolgenden Sequenzen, die sukzessive auf ein bestimmtes Ziel bzw. auch unterschiedliche Teilziele in einem Gesamtzusammenhang des Unterrichtens bzw. Lernens hinleiten sollen. Zur Frage steht, inwiefern die Verknüpfung der einzelnen Sequenzen einen fachlichen bzw. didaktisch sinnvollen Zusammenhang erkennen lässt. Bedeutsam ist darüber hinaus, dass in der Regel ein kumulativer, schrittweiser Aufbau von Wissen, Fertigkeiten und Kompetenzen als erfolgversprechend zu betrachten ist. Dabei kann auch die Anknüpfung am Vorwissen der Schüler*innen (sozusagen als Ausgangspunkt) eine Rolle spielen.",
			question: "Das Lehr-Lernmittel verknüpft einzelne Sequenzen zu einem Prozess und unterstützt damit das Prinzip eines kumulativen Aufbaus von Wissen, Fertigkeiten und Kompetenzen."
		},
		{
			title: "Lernwegunterstützende Elemente (Scaffolding)",
			description: "Zur Frage steht hier, inwiefern Lehr-Lernmittel Elemente enthalten, die ihren Nutzer*innen - hier insbesondere den Schüler*innen - deutlich machen können, wie mit dem Lehr-Lernmittel gelernt werden kann/soll. Dazu können erläuternde und erklärende Hinweise gegeben werden (Vor-/Nachbemerkungen, Kommentare, Textbausteine, Marginalien). Wichtig hierbei ist, dass diese sich auf den Lernweg der Schüler*innen beziehen und den Lernprozess bzw. die Lernaktivität unterstützen/fördern/anleiten.",
			question: "Das Lehr-Lernmittel enthält Elemente, die den Lernprozess der Schüler*innen unterstützen, indem sie Aussagen machen, die sich auf den Lernweg bzw. die Lernaktivität der Schüler*innen beziehen."
		},
		{
			title: "Sprachlichkeit",
			description: "Damit Lehr-Lernmittel in der Breite von Schüler*innen genutzt werden können, ist es (nicht nur für schwächere Schüler*innen) vorteilhaft, wenn sie in allen Teilen (auch in Aufgabenstellungen) eine klare, einfache Sprache kennzeichnet. Davon unbetroffen sind für die fachliche Aufarbeitung nötige Fach- und Fremdwörter. Textpassagen sind darüber hinaus 'kohärent', d.h. sie weisen eine logische Verknüpfung ihrer Abschnitte auf (Sprachfluss ohne Unterbrechungen).",
			question: "Die Sprache des Lehr-Lernmittels ist klar und verständlich."
		},
		{
			title: "Bildsprache",
			description: "Über unterschiedliche bildliche Darstellungen (z.B. Fotos, Diagramme, Tabellen, Charts, Animationen) können Sachverhalte vermittelt, verdeutlicht und erklärt werden. Diese bildlichen Elemente sollten in einem logischen und didaktischen Zusammenhang zum Thema und zu den Zielen des Lehr-Lernmittels stehen. Außerdem sind bildliche Elemente in der Regel in textliche Elemente eingebettet oder in Zusammenhang gesetzt - dieser Zusammenhang sollte möglichst klar sein. Es kann zur Förderung von bildlichem Verstehen und Interpretationsvermögen sinnvoll sein, dass abstrahierte bildliche Darstellungen (z.B. Charts) mit textlichen Elementen versehen sind, die erklärenden Charakter haben.",
			question: "Bildliche Elemente werden im Lehr-Lernmittel in klarer und logischer Zuordnung zum Lerngegenstand bzw. -ziel eingesetzt."
		},
		{
			title: "Additive Kommunikation (Anreicherung)",
			description: "Hiermit ist gemeint, dass das Lehr-Lernmittel auch über die rein fachliche Aufbereitung hinaus zusätzliche Elemente integriert und jene 'anreichern' kann. Dies können z.B. Lebensweltbezüge im Sinne von Zusatzinformationen, Anekdoten oder humoristischen Passagen sein. Es kann sich dabei auch um Zusätze handeln, die sich ergänzend oder vertiefend auf die im Lehr-Lernmittel präsentierten Inhalte beziehen (z.B. Zusammenfassungen, Exkurse, Merksätze, Glossare, Begriffserklärungen).",
			question: "Das Lehr-Lernmittel integriert zusätzliche kommunikative Elemente, die seine Inhalte unterstützen/anreichern."
		},
		{
			title: "Sequenzierung",
			description: "Aufgaben, die im Lehr-Lernmittel gestellt werden, sollten in einem sinvollen fachlichen und/oder didaktischen Zusammenhang zueinander stehen. Hier kann entsprechend die Frage gestellt werden, welche kognitiven Leistungen/Prozesse (z.B. etwas erinnern, verstehen, anwenden, analysieren, bewerten, erschaffen) in den einzelnen Aufgaben oder ihren Teilen angeregt werden und ob diese z.B. aufeinander aufbauen, zueinander hinführen oder ein Thema/eine Kompetenz aus unterschiedlichen Teilaspekten behandeln und vertiefen.",
			question: "Die im Lehr-Lernmittel enthaltenen Aufgaben stehen in einem didaktisch oder fachlich sinnvollen Zusammenhang zueinander."
		},
		{
			title: "Aktivierung",
			description: "Hier geht es um die Frage, inwiefern ein Lehr-Lernmittel insgesamt eine grundlegende Problemstellung verfolgt, die im Verlauf durch die Schüler*innen bearbeitet und gelöst wird. Diese Problemstellung wird in der Regel am Anfang des Lehr-Lernmittels formuliert und bietet damit das 'Setting' für die sich daraus ergebenden Schritte und Aufgaben, wodurch lernpsychologisch betrachtet eine Aktivierung der Schüler*innen erfolgt (Motivation).",
			question: "Das Lehr-Lernmittel steht unter einer übergeordneten/umgreifenden Problemstellung, die durch die Schüler*innen bearbeitet und gelöst wird."
		},
		{
			title: "Multiple Lösungswege",
			description: "Nicht immer gibt es eine feste Methode, eine fachliche Prozedur oder eine Sichtweise, um ein Problem oder eine Aufgabe zu lösen. Lehr-Lernmittel können hierfür sensibel sein und - wo möglich - unterschiedliche Lösungswege zulassen oder diese sogar anregen. Damit wird ein Spielraum für unterschiedliche plausible Strategien der Schüler*innen ermöglicht und Flexibilität in verschiedenen Lösungsgsansätzen gefördert.",
			question: "Die im Lehr-Lernmittel enthaltenen Aufgaben regen die Schüler*innen zur Entwicklung mehrerer Lösungswege an."
		},
		{
			title: "Didaktisches Konzept",
			description: "Für eine eigene Nutzung - insbesondere durch Lehrkräfte - ist es von Vorteil, wenn zentrale Gedanken für den didaktischen Einsatz vermittelt werden. Und zwar selbst dann, wenn die Lehrpersonen das Lehr-Lernmittel nicht eins zu eins für ihren eigenen Unterricht einsetzen wollen, sondern an eigene Bedürfnisse anpassen möchten. Dazu gehören Informationen wie: Zielgruppe(n), Ziele, Teilziele, damit verbundene Methoden, angestrebte bzw. geförderte Kompetenzen, Bezug zu Unterrichtsthemen etc.",
			question: "Das Lehr-Lernmittel enthält didaktische Informationen, die seine Anwendung erleichtern."
		},
		{
			title: "Rahmenbedingungen",
			description: "Der Einsatz von Lehr-Lernmitteln im Unterricht birgt bestimmte Voraussetzungen, die bei einer beabsichtigten Nutzung zu bedenken sind. Dazu gehören z.B. Zeitbedarf, technische oder räumliche Voraussetzungen, bestimmte Gruppengrößen, das Vorhandensein bestimmter Materialien oder Medien, die Möglichkeit der Wiedergabe bestimmter Medienformate, Internetverbindung, eine bestimmte Anzahl an PCs oder mobilen Endgeräten etc. Für die Lehrkraft ist es hilfreich, wenn diese Voraussetzungen von vornherein übersichtlich genannt werden.",
			question: "Das Lehr-Lernmittel nennt die Rahmenbedingungen seiner Nutzung."
		},
		{
			title: "Eigene Anmerkungen",
			description: "Hier können Sie eigene Kommentare zum analysierten/evaluierten Lehr-Lernmnittel einfügen, die in der Auswertung angezeigt werden.",
			question: "Bitte geben Sie hier eigene Anmerkungen zum Lehr-Lernmittel ein (optional)."
		},
]

let surveyTextEn = [
	{
		title: "1",
		description: "1",
		question: "1"
	},
	{
		title: "2",
		description: "2",
		question: "2"
	},
	{
		title: "3",
		description: "3",
		question: "3"
	},
	{
		title: "4",
		description: "4",
		question: "4"
	},
	{
		title: "5",
		description: "5",
		question: "5"
	},
	{
		title: "6",
		description: "",
		question: ""
	},
	{
		title: "7",
		description: "",
		question: ""
	},
	{
		title: "8",
		description: "",
		question: ""
	},
	{
		title: "9",
		description: "",
		question: ""
	},
	{
		title: "10",
		description: "",
		question: ""
	},
	{
		title: "11",
		description: "",
		question: ""
	},
	{
		title: "12",
		description: "",
		question: ""
	},
	{
		title: "13",
		description: "",
		question: ""
	},
	{
		title: "14",
		description: "",
		question: ""
	},
	{
		title: "15",
		description: "",
		question: ""
	},
	{
		title: "16",
		description: "",
		question: ""
	},
	{
		title: "17",
		description: "",
		question: ""
	},
	{
		title: "18",
		description: "",
		question: ""
	},
	{
		title: "19",
		description: "",
		question: ""
	},
	{
		title: "20",
		description: "",
		question: ""
	},
	{
		title: "21",
		description: "",
		question: ""
	},
	{
		title: "22",
		description: "",
		question: ""
	},
	{
		title: "23",
		description: "",
		question: ""
	},
	{
		title: "24",
		description: "",
		question: ""
	},
	{
		title: "25",
		description: "",
		question: ""
	},
	{
		title: "26",
		description: "",
		question: ""
	},
	{
		title: "27",
		description: "",
		question: ""
	},
	{
		title: "28",
		description: "",
		question: ""
	},
	{
		title: "29",
		description: "",
		question: ""
	},
	{
		title: "30",
		description: "",
		question: ""
	},
	{
		title: "31",
		description: "",
		question: ""
	}
]

function changeSurveyText(language) {
	if (window.survey != null) {
		surveyText = language == 'De' ? surveyTextDe : surveyTextEn;
		for (i = 0; i < survey.pageCount; i++) {
			page = survey.getPage(i);
			page.title = surveyText[i].title;
			page.description = surveyText[i].description;
			page.questions[0].title = surveyText[i].question;
		}
	}
}

function changeEnInline() {
	let elements_en = document.querySelectorAll('[data-lang="en-inline"]')
	let en = [...elements_en]
	en.forEach(element => element.style.display = 'inline-block')

	let elements_de = document.querySelectorAll('[data-lang="de-inline"]')
	let de = [...elements_de]
	de.forEach(element => element.style.display = 'none')
}

function clickedEnglish() {
	changePlaceholderTextAAER('En')
	changeSurveyText('En')

	dropdown = document.getElementById('dropdown-languages_en')
	dropdown.style.display = 'none'

	let elements_en = document.querySelectorAll('[data-lang="En"]')
	let en = [...elements_en]
	en.forEach(element => element.style.display = 'block')

	let elements_de = document.querySelectorAll('[data-lang="De"]')
	let de = [...elements_de]
	de.forEach(element => element.style.display = 'none')
	
	changeEnInline()

	// SessionStorage En
	sessionStorage.setItem("language", "En");
}

// Hinzufügen des SessionStorages zur Sprache
$(document).ready(function() {
  sessionStorage.getItem("language") == 'En' ? clickedEnglish() : clickedGerman();
});