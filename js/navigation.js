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
    console.log("Hey Nerd! Vince, Norman und Israa wünschen dir viel Spaß bei der Nutzung des AAER.");
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
        title: "Name of the Resource",
        description: "The name will be displayed later in your personally generated evaluation.",
        question: "Please enter the name of the teaching learning resource you would like to analyze/evaluate using the AAER."
    },
    {
        title: "Link (optional)",
        description: "At this point, you can provide the link to the teaching learning resource to be analyzed/evaluated. It will be displayed in the final evaluation summary generated for you.",
        question: "Please provide the link to your teaching learning resource (optional)."
    },
    {
        title: "",
        description: "",
        question: "Please let us know for which subject you are using the AAER (optional)."
    },
    {
        title: "",
        description: "",
        question: "Please let us know for which type of school you are using the AAER (optional)."
    },
	{
        title: "References to the Curriculum",
        description: "Contemporary curricula contain subject-, grade- and age-group-specific educational objectives, subject areas, skills/competencies, didactical principles or suggestions of learning and teaching methods. Though educational media need not necessarily reach a narrow equivalence, an alignment of the mid- and long-term learning activities to the curriculum is important. Therefore it is helpful, if the educational medium makes at least shorthand references, so that an easier attribution by the teachers and maybe also by the learners is possible.",
        question: "The educational medium makes transparent references to educational objectives, topics, skills/competencies, didactical principles or suggestions of learning and teachings methods, which easily allows for the teachers to allocate them to the relevant curriculum. Ideally, the educational medium itself elucidates the specific relations by making particular statements in this regard. The reference to the curriculum may also be an indirect one, emphasizing the supplementary character of the content."
    },
	{
        title: "References to Educational Standards",
        description: "Several countries have implemented national educational standards for a range of subjects, which describe competencies resp. requirement areas and standards. Although it can be assumed that these standards will also penetrate the curricula, it can be helpful if the educational medium makes also at least shorthand references to them, so that an easier attribution by the teachers and maybe also by the learners is possible.",
        question: "The educational medium provides a general classification of the educational objectives, the topics and the aspired competencies with regard to the educational standards, which are applicable for the particular subject (e.g., areas of requirement, competencies, topics). This can also be done in a detailed/small-steps manner, for example by relating the importance of single learning sequences or assignments to the acquisition of competencies in terms of the educational standards."
    },
    {
        title: "Interest-driven Mediation of Topics/Positioning",
        description: "An elementary question to be asked with regard to the analysis of educational media is how their content is related to specific interests of their providers and if this relation is exerting a biased, one-sided influence on learners and teachers. Does the educational medium, for instance, aim to transport a specific subject into the classroom? Is a particular topic highlighted or are specific assertions made with regard to this topic? Or is a certain organization connoted in a positive way with regard to the overarching topic of the educational medium? Is this done in a one-sided way, or does the medium take a multi-perspective view on relevant societal, political or scientific discourses, which includes the equivalent presentation of different or contrary perspectives?",
        question: "The educational medium does not include one-sided statements and presentations of topics or positive self-portrayals of organizations/providers. Its authors recognizably take efforts to present differing/pluralistic views on societal discourses in an equivalent manner. This is, for instance, indicated by a formulation of statements, which avoids absolutizations in phrasing/wording (with the exception of statements that can be regarded as basic facts). This is also true for supposedly incidentally mediated content or statements, which are not directly related to the central theme or topic of the educational medium (for instance, statements made in instructions for tasks, instructions for practical applications, illustrations, annotations, etc.).",
    },
	{
        title: "Transparency (Provider/Authors/Motivation)",
        description: "Transparency means to what extent the origin of the educational medium is clear for the user, so that a (critical) assessment and contextualization of its content is possible. In order to allow for this, the educational medium must include information referring to its origination. This includes, for instance, information about who developed and who disseminates it (authors, distributers, sponsors – that is, all relevant persons and their relation to specific organizations). It also includes information about funding, which was used to develop the educational medium, as well as information about the sources of its content. Statements about goals (educational as well as general), which shall be achieved by offering the educational medium, are also an important information for the teacher: Why is this educational medium offered/distributed (motivation)?",
        question: "Authors, providers and their organizational or institutional affiliation(s) are explicitly named. Sources of financing are disclosed. Relations of persons and organizations involved in the making and distribution of the educational medium (for example if several providers or organizations are participating) are traceable for the user. In addition, goals and motivation for offering the educational medium are made clear (i.e., reasons why this educational medium is provided).",
    },
    {
        title: "Promotional Elements",
        description: "The question to be asked here is to what extent the educational medium includes elements, which have a promotional character. This has to be critically assessed since advertising is forbidden or regulated by many school administrations or is at least subject to provisions (depending on the country where the medium is used). Promotional elements in the context of educational media may be (amongst others): logos, product images, references to trademarks, unless they are a themselves subject of the lesson/are treated as a (media-)educational topic.",
        question: "The educational-medium does not include any of the elements mentioned above. At the most, the name of the author (source) or the logo of the provider of the educational medium may be included – but the latter should not be presented in a visually dominant way.",
    },
    {
        title: "Heterogeneity/Gender",
        description: "Educational media directly or indirectly include representations/depictions of social and societal environments (e.g., via visual representations, pictures, figures, or also as textual elements). By “representing/depicting” those environments, they are “created” in the learners’ imagination and influence their comprehension of the topic. In a pluralistic, democratic society it is important to avoid one-sided attributions/determinations with regard to societal or ethnical groups or minorities and also with regard to gender or religion. In addition, it is crucial that cultural diversity, which also refers to the learners, is represented in educational media as well.",
        question: "Illustrations, photos, textual descriptions, which are related to societal groups, do not depict these groups in a one-sided, reducing manner (for instance, by assigning specific activities, opinions, behaviors in a simplifying way to these groups). With regard to the category “gender” it is important that a balanced and equal representation of male and female persons is given, again avoiding biased attributions or maybe breaking them consciously. The depiction of different societal groups/ethnicities follows the same pattern, also in order to comply with the learners’ heterogeneity and to offer appropriate opportunities for identification.",
    },
    {
        title: "Activity Orientation",
        description: "The concept of „Activity Orientation” aims at an active acquisition of knowledge and competencies by the learners. The concept belongs to a wider education-theoretical framework, which acknowledges the educational objectives of self-determination and participation (Klafki) as overarching normative goals of teaching. Activity-oriented teaching is among others characterized by the fact that the learners become pro-active and produce their own working and thinking results. This can be achieved by means of individualized assignments, but many forms of group-based and discovery-oriented learning activities (cooperation, collaboration) are also suitable. Thus „Activity Orientation“ also implies personal responsibility and thereby the opportunity resp. necessity to influence and organize the process of learning by one’s own decisions.",
        question: "The educational medium encourages and enables learners to organize their own learning process resp. the use of their knowledge, skills and competencies actively. This can be seen from genuine individual or group-based decisions about learning paths or the use of knowledge, skills and competencies, which require the opportunity to choose on the side of the learners."
    },
    {
        title: "Reference to the Learners’ Background / Social Milieu",
        description: "This item deals with the question how strongly the educational medium is related to the learners’ background/social milieu. This may be the case when it deals with central and authentic issues, which are of high relevance to the learners from a societal, political, individual or group-specific perspective (classmates, peer-group). This may include that the educational medium deliberately addresses the emotional aspect of this background.",
        question: "The educational medium does not only show general references to the learners’ background, but also concrete ones, including for example authentic elements/materials/statements from contemporary political and/or societal events, which have an (emotional) closeness to the learners (e.g., from magazines, websites, concrete events, with references to topics like identity development, way of living, leisure, workplace and career, etc.)."
    },
    {
        title: "Reflection/Ability to Judge",
        description: "Overarching normative educational objectives like maturity, self-determination, participation and solidarity (Klafki) require that learners are addressed as responsible and reasoning human beings, both with regard to subject-related issues and to their closer and wider environment. This also implies a level of self-reflection, i.e., that learners make themselves, their situation, the situation of their group, their political, social and societal position a subject of their critical thinking (metacognition, reflection).",
        question: "The educational medium requires and encourages the forming of a reasonable opinion resp. the argumentative statement of this opinion. The learners are, for instance, explicitly prompted to make a decision as answer to a specific question, based on their subject-related knowledge and their information at hand. This may even exceed the scope of a specific school-subject, as subject-related topics are embedded in their societal, political or social references and are addressed as such."
    },
    {
        title: "Multiperspectivity/Controversy",
        description: "Oftentimes educational media refer directly or collaterally to topics that are being discussed under different perspectives or are even discussed controversially in society and related academic disciplines. For pedagogically responsible education it is of central concern that learners are not imposed by pre-decided and one-sided content. Instead, the learners should be presented facts and different/opposing arguments to guide and empower them to their own formation of opinion (within the framework of an adequate reduction of complexity and elementarization provided by the authors of the educational medium). In this sense, educational media are challenged to not only avoid a one-sided, reductional presentation of topics/subjects, but also present their content in a sensitive way, giving plural and sometimes even controversial views on topics/subjects, reflecting the way they are prevalent in society/the academic field.",
        question: "Topics/Subjects mediated by the educational medium, regardless if they are central or arbitrary, make it clear in the way they are bein presented to the learners, that different positions, opinions, perspectives or arguments exist to judge and decide upon them. Not only are one-sided statements, valuations or rhetoric avoided, that create the impression that alternative thinking and judgement is non-existent, but instead the learners are sensibilized for existing different and controversial views and perspectives on the subject. The way topics and content is presented (for example by directly pointing to societal and academic dissent), as well as the language used to mediate and communicate to the learners create an openness for the learners to form their own opinion and identify alternative/competing perspectives. "
    },
    {
        title: "Plurality in Methods of Learning and Teaching",
        description: "Methods are „techniques of learning and working, aiming at an autonomous and appropriate perceiving, discovering, experimenting, processing, constructing, shaping, presenting, communicating, and monitoring” (Wiater 2011). Klippert differentiates methods for information acquisition (reading, consulting, questioning, etc.), for information processing and preparation (structuring, visualizing, organizing, etc.), methods for work planning, time management and learning processes, and methods, which foster the reflection about the individual learning procedure (Klippert 2006). Specific methods may be consciously used in educational media, in order to support the intended learning processes and activities. They may also be stressed as an own topic, their meaning can be explained, and they can be deliberately trained to increase their effectiveness (fostering of methodological competencies). Methods are never ends in themselves, but they have a distinct function for achieving the overarching objectives of the learning process (including general and generic development goals of the learners).",
        question: "The educational medium uses (different) learning and teaching methods in order to support the solution of specific assignments or particular learning/teaching sequences. Thereby the methods aim at the learners’ activities. The goal is not to use as many different methods as possible (end in itself), but preferably those, which didactically support the aspired goals, skills and competencies. It is useful if the purpose or the goals of the methods employed are explicitly named and are made transparent with regard to these goals."
    },
    {
        title: "Multimedia/Multimodality",
        description: "Media can be impressive means for the illustration of facts, the didactical processing and comprehensible presentation of information, and the connection to the learners’ background and environment. Educational media can use media to address learners in different ways to provide access to their educational content in alignment with their learning goals. This can be particular effective when educational media combine different “channels” or forms of media to address multiple sensory channels of the learners at the same time (multimodality) or by offering choices as to which media the learners might use for specific elements of the learning process.",
        question: "Significant content of the learning/teaching process, the acquisition of which is aimed at by the educational medium, is conveyed by means of media. The educational medium uses different media-“modalities” (for instance audio, audio-visual, annotated or symbolic illustration/video, interactive web-based elements, etc.) and combines them in a meaningful way to foster learning processes on the side of the learners. This may include allowing for choices between different media to use by the learners depending on their own preference."
    },
	    {
        title: "Media Literacy",
        description: "Media are an integral part of the learners’ cultural and social environment; they are important carriers of the information and knowledge society we live in. Therefor they are both a necessary field of learning and a didactical means to support teaching and learning processes (mediating function). It is important to train, to foster the competent use of media as well as the critical reflection about media as a means of communication and content presentation. In this sense, media literacy (media competence) can be interpreted as capability (skill) and readiness to act in media contexts, to communicate about them, to choose, to create and use medial content and to reflect about media and their impact critically.",
        question: "Learners are not only passive recipients of medial content, but actively and reflectively engage with this content. They work, learn and progress through learning sequences by means of it; where applicable, they even create medial content by their own or are required to assess the medial presentation in a critical and reflective way (fostering of media competency)."
    },
    {
        title: "(Internal) Differentiation",
        description: "A particular challenge for the arrangement of teaching is the adaptation to a heterogeneous group of learners. Educational media can make a significant contribution by offering, so to speak, “variations” of themselves which allow for a “parallelization” of the learning process. This can, for instance, be achieved by provisioning different fields of application and educational objectives (also with different levels of difficulty), matched working steps and various assignments in the educational medium. It is important though to bring the different results of the parallel learning sequences together in the end.",
        question: "The educational medium offers variations, which can be used at the same time by different learners. This exceeds simple working groups, who merely pursue the same targets with regard to different objects, and includes for example also different educational objectives, different levels of difficulty, interdependent work steps, etc. In doing so, the safekeeping of the binding results for all learners is not neglected."
    },
	{
        title: "Acessibility / Inclusion",
        description: "Educational media can significantly contribute to the successful design of inclusive learning scenarios by providing barrier-free access for students with impairments (particularly for students with visual, auditory, or learning impairments). For individuals with auditory or visual impairments, for example, it is important to adhere to the 'dual sensory principle,' meaning that an element or content of the educational material is always conveyed through two channels (auditory and visual). Additionally, features such as subtitles in videos, supplementary texts describing the content of a graphic or image, the integration of sign language, options for digital voice output via screen readers, or the usability of magnification software, audio descriptions, etc., can facilitate the accessibility of the educational materials for the aforementioned group of individuals. For people with learning difficulties, it is advisable to integrate texts in easy-to-read language into the educational materials.",
        question: "The educational medium consistently incorporates elements and enhancements throughout all of its components, enabling barrier-free access for at least one of the mentioned target groups."
    },
    {
        title: "Transfer and Application Orientation",
        description: "Educational Media can encourage or aim at various cognitive processes. These can be roughly described by the following action verbs (ascending order stands for the complexity of the action): remember, understand, apply, analyze, evaluate, create. Competence-oriented teaching and learning will usually aim to foster, besides the elementary cognitive processes of remembering and understanding, 'higher' cognitive processes, according to the learning and competence objectives. Therefore educational media can deliberately integrate appropriate cognitive processes in the form of questions, assignments, or conceptions.",
        question: "It is possible to identify the particularly stimulated/intended cognitive processes in separate parts/sequences of the educational medium; perhaps they are even designated. Additionally, the educational medium includes questions or assignments, which shall encourage that the learners apply their knowledge to other learning objects (transfer), that they analyze facts independently, make their own assessments on the basis of their knowledge and acquired subject-related skills, or even autonomously build up new knowledge or skills for so far unknown fields of application, in order to solve subject-related problems."
    },
    {
        title: "Process Orientation (Accumulation)",
        description: "Educational media often consist of several consecutive learning sequences, which lead step-by-step towards a certain educational objective or to different sub-goals within an overall teaching and learning context. This item deals with the question to what extent the singular learning sequences show a subject-related and didactically reasonable coherence. Besides, it is evident that a cumulative, successive development of knowledge, skills and competencies is most promising. Linking to the learners’ prior knowledge (so to speak as a starting point) can also play an important role in this context.",
        question: "It is possible to identify the singular learning sequences and their interconnectedness within the educational medium. A step-by-step approach is apparent with regard to educational objectives, aspired skills and competencies, and can be pursued by means of this educational medium. The educational medium is potentially conceptualized in such a way that it explains and elucidates the meaning of its separate steps and their connections by itself."
    },
    {
        title: "Elements Supporting the Learning Process (Scaffolding)",
        description: "This item deals with the question to what extent the educational medium includes elements, which may explain to the users – especially the learners – how it can/ should be used for effective learning. This can be done via explanatory hints and references (e.g., preliminary or summarizing remarks, comments, text modules, marginalia). It is important that these elements refer to the learners and that they support/foster/guide the learning process and the learning activities.",
        question: "Elements, which support the learning path, are not only implemented occasionally, but are recognizably and systematically integrated at the key sections of the educational medium and provide a 'framing' function. Such elements may be: preliminary and summarizing remarks, comments with regard to content or learning processes of the educational medium (these may, so to speak, metacognitively refer directly to the learners."
    },
    {
        title: "Language",
        description: "In order to make educational media suitable for a wide range of learners, it is advantageous (also, but not only for lower achieving students) to use a clear and simple language in all of its parts (also in assignments). This does not apply to technical terms and foreign words, which are necessary for subject-specific concepts. Furthermore, text passages should be 'coherent,' which means that the sections are logically interconnected (stream of speech without interruptions).",
        question: "The educational medium does not use unnecessarily long and complicated sentences. Assignments are also phrased directly and clearly, and several tasks are not intermingled within a single assignment. Technical terms and foreign words are used in a reasonable way, which is required by the subject, and are explained, if necessary. There are no linguistic or logical breaks between single sentences or sections."
    },
	{
        title: "Visual Literacy",
        description: "By means of pictorial representations (e.g., photos, diagrams, tables, charts, animations) educational media can convey, elucidate and explain facts and issues. These pictorial elements should be related logically and didactically to the topic and to the educational objectives of the educational medium. Moreover, pictorial elements are usually embedded within textual elements or are related to them – this relation should be as clear as possible. To foster visual literacy and interpretive capability on the side of the learners, it may be useful to accompany abstracted pictorial representations (like charts, e.g.) with textual elements, which explain the content of the pictorial representations.",
        question: "The educational medium uses pictorial representations beyond a merely illustrative function. They are connected to the learning topic and the educational objectives and contribute themselves to the understanding, explanation or application of knowledge, skills and competencies, which are important for the learning process initiated by the educational medium. At the same time, they are textually embedded, which may, for instance, be achieved by explaining text passages or captions."
    },
    {
        title: "Additive Communication (Enrichment)",
        description: "Beyond the merely subject-related presentation, an educational medium can integrate also further elements and thus 'enrich' itself. They may include: references to the learners’ living environment in terms of additional information, anecdotes or humorous passages. These may also be supplements, which complement or deepen the content of the educational medium (e.g., summaries, excursions, mnemotechnic verses, glossaries, definitions).",
        question: "The educational medium includes beyond a merely subject-related presentation of the learning topic and the educational objectives also additional elements (text/illustrations), which address the learners, for example, with regard to their living environment, or serve as supplement, explanation, reinforcement of the content of the educational medium."
    },
    {
        title: "Sequencing",
        description: "Assignments, which are included in the educational medium, should be related to each other in a subject-specific and/or didactical way. This item deals with the question, which cognitive activities and processes (e.g., remembering, understanding, applying, analyzing, assessing, creating) shall be initiated by the singular assignments or by parts of them and whether they are interrelated in a reasonable way: for instance, whether they build on one another, lead to one another, or whether they deal with a subject or a competence from different perspectives and deepen it.",
        question: "The assignments included in the educational medium are sequenced in a comprehensive way from a subject-specific or didactical perspective. They refer to each other/build on one another, and in doing so, not only the same or similar cognitive processes are repeated."
    },
    {
        title: "Activation",
        description: "This item deals with the question to what extent the educational medium as a whole pursues an issue, which is worked on and solved by the learners during the learning course. Such an issue is normally introduced at the beginning of the educational medium and thus provides the 'setting' for the consequential steps and assignments, which initiates from a learning-psychological point of view an activation of the learners (motivation).",
        question: "At the beginning of the educational medium, a fundamental issue is articulated, which has to be solved during the learning course. All following learning steps are related to this issue and lead towards a solution of the problem or deepen it."
    },
    {
        title: "Multiple Approaches",
        description: "Mostly, there is not only one single method, a single subject-specific procedure or point of view to solve a problem or an assignment. Educational media can be sensible to this fact and – if possible – allow for different approaches or even encourage them. This opens heterogeneous learners a scope of various possible strategies and fosters flexibility of different solution approaches.",
        question: "The educational medium allows for different solution approaches, whilst leaving the learners not completely without guidance or hints for potential strategies. Different approaches or strategies are, for example, sketched and proposed as offers to the learners. These hints can be regarded as an offer to the learners, which outline and recommend certain strategies. Additionally, concrete examples of various ways of solving a problem or of different strategies can support this concept."
    },
    {
        title: "Didactical Concept",
        description: "For the use of the educational medium – especially by the teachers – it is advantageous when central concepts for the didactical application are mediated, even if the teachers will not use the educational medium one-to-one in their lessons, but want to adapt it to their own requirements. Helpful information includes: target group, (educational) objectives, sub-goals, relating methods, targeted resp. fostered competencies, relation to specific aspects of the subject, etc.",
        question: "The educational medium includes extensive and reasonable information about its didactical concept. This information exceeds basic information about both thematic references and the target group and additionally provides information about methodological approaches, targeted competencies, or sub-goals. This information explains the intention of the educational medium and thus facilitates its use."
    },
    {
        title: "Framework Conditions",
        description: "The use of educational media for instruction is subject to certain conditions, which have to be considered. These include for example: time need, technical or spatial requirements, specific group size, availability of particular materials or media, possibility to play back certain media-formats, internet connection, a specific number of PCs or mobile devices, etc. It is helpful for the teacher if these preconditions are a priori concisely specified.",
        question: "All preconditions for use of the educational medium are concisely specified."
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