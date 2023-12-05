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

let subjects_de = [
	'Bitte wählen Sie ein Fach...', 'AAER...de',
	'Keine Angabe', 'Biologie', 'Chemie', 'Deutsch', 'Englisch',
	'Erdkunde / Geographie', 'Ethik', 'Französich', 'Geschichte', 'Informatik / IT',
	'Kunst / Werken', 'Latein', 'Mathematik', 'Musik', 'Pädagogik', 'Philosophie',
	'Physik', 'Psychologie', 'Religion', 'Sozialkunde / Politik', 
	'Sport', 'Sprachen (andere)', 'Sonstiges Fach'
]

//Hier Liste für Geschichte einfügen (Heimat & Sachunttericht, )

let subjects_en = [
	'Please choose a subject...', 'AAER...en',
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

let answers_de = [
    {value: 1, text: "trifft nicht zu"},
    {value: 2, text: "trifft weniger zu"},
    {value: 3, text: "trifft mehr zu"},
    {value: 4, text: "trifft voll zu"},
    {value: 0, text: "nicht bewertbar / nicht relevant"}
];

let answers_en = [
    {value: 1, text: "does not apply"},
    {value: 2, text: "applies less"},
    {value: 3, text: "applies more"},
    {value: 4, text: "applies fully"},
    {value: 0, text: "cannot be assessed / not relevant"}
];

function changeAnswers(lang) {
	let answers = lang == 'De' ? answers_de : answers_en
	for(let i=0; i < window.survey.pageCount; i++) {
		let options = window.survey.getPage(i).questions[0].choices;
		if(options != null && options.length == 5) {
			window.survey.getPage(i).questions[0].choices = answers
		}
	}
}

function changePlaceholderTextAAER(language) {
	if (language == "De") {
		document.getElementById('loadPredefined').placeholder = "10-stelliger Code"
		document.getElementById('loadResultSet').placeholder = "10-stelliger Code"
		document.getElementById('loadResult').placeholder = "12-stelliger Code"		
	} else {
		document.getElementById('loadPredefined').placeholder = "10 characters long code"
		document.getElementById('loadResultSet').placeholder = "10 characters long code"
		document.getElementById('loadResult').placeholder = "12 characters long code"
	}
}

function changePlaceholderTextAAERHistory(language) {
		if (language == "De") {
			document.getElementById('group_id').placeholder = "10-stelliger Code"
			document.getElementById('loadEvaluationGroup').placeholder = "10-stelliger Code"
			document.getElementById('loadEvaluation').placeholder = "12-stelliger Code"			
		} else {
			document.getElementById('group_id').placeholder = "10 characters long code"
			document.getElementById('loadEvaluationGroup').placeholder = "10 characters long code"
			document.getElementById('loadEvaluation').placeholder = "12 characters long code"
		}
}

function changeSelectOptionsAAER(lang) {

	// gruppe anlegen
	let subjects = lang == 'De' ? subjects_de : subjects_en
	Array.prototype.forEach.call(document.getElementById('survey_subject').options, function(option, index) {
		option.innerHTML = subjects[index];
	})
	let schools = lang == 'De' ? schools_de : schools_en
	Array.prototype.forEach.call(document.getElementById('survey_institution').options, function(option, index) {
		option.innerHTML = schools[index];
	})


	// umfrage
	if (window.survey != null) {
		let options_subject = []
		Array.prototype.forEach.call(subjects, function(item, index) {
			let option = {};
			if(index == 0) {
				// selected="selected" disabled="disabled" value="" 
				option.selected = 'selected'
				option.value = ''
			} else {
				option.value = index
			}
			option.text = item;
			options_subject.push(option)
		})

		window.survey.getPage(2).questions[0].choices = options_subject
		window.survey.getPage(2).questions[0].choices[0].setIsEnabled(false)

		let options_schools = []
		Array.prototype.forEach.call(schools, function(item, index) {
			let option = {};
			if(index == 0) {
				// selected="selected" disabled="disabled" value="" 
				option.selected = 'selected'
				option.value = ''
			} else {
				option.value = index
			}
			option.text = item;
			options_schools.push(option)
		})
		window.survey.getPage(3).questions[0].choices = options_schools
		window.survey.getPage(3).questions[0].choices[0].setIsEnabled(false)
	}
	
}

function changeSelectOptionsAAERHistory(lang) {
	let schools = lang == 'De' ? schools_history_de : schools_history_en
	Array.prototype.forEach.call(document.getElementById('form-preset-schulart').options, function(option, index) {
		option.innerHTML = schools[index];
	})

	// umfrage
	if (window.survey != null) {

		let options_schools = []
		Array.prototype.forEach.call(schools, function(item, index) {
			let option = {};
			if(index == 0) {
				// selected="selected" disabled="disabled" value="" 
				option.selected = 'selected'
				option.value = ''
			} else {
				option.value = index
			}
			option.text = item;
			options_schools.push(option)
		})
		window.survey.getPage(2).questions[0].choices = options_schools
		window.survey.getPage(2).questions[0].choices[0].setIsEnabled(false)
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
		title: "I. Bezüge Curriculum (Dimension: Anlehnung an Curriculum und Bildungsstandards)",
		description: "Heutige Lehrpläne enthalten fach- und stufen- bzw. jahrgangsbezogene Ziele, Themengebiete, Fertigkeiten/Kompetenzen, didaktische Prinzipien oder Anregungen zu Methoden. Wenn es auch nicht unbedingt darum geht, hier eine eng geführte Entsprechung zu erreichen, so ist doch eine Passung der mittel- und langfristigen Unterrichtsverläufe zu diesen Lehrplänen wichtig. Dazu ist es hilfreich, wenn das Lehr-Lernmittel entsprechende Bezüge zumindest stichwortartig herstellt, sodass eine Zuordnung seitens der Lehrkräfte, bzw. unter Umständen auch seitens der Schüler*innen, leichter vollzogen werden kann.",
		question: "Im Lehr-Lernmittel werden nachvollziehbare Bezüge zu Inhalten des gültigen Curriculums hergestellt.",
		indicators: "Indikatoren für eine positive Bewertung dieses Items: Im Lehr-Lernmittel werden Ziele, Themengebiete, angestrebte Fertigkeiten/Kompetenzen, didaktische Prinzipien oder Anregungen zu Methoden auf eine Art transparent gemacht, die einer Lehrkraft eine Zuordnung zu den gültigen Lehr- und Bildungsplänen (Curricula) leicht macht. Idealerweise nimmt das Lehr-Lernmittel selbst eine solche Zuordnung vor, enthält also spezifische Aussagen zu diesem Bereich. Das kann auch so geschehen, dass der ergänzende Charakter als indirekter Bezug auf die Lehr- und Bildungspläne deutlich gemacht wird.		"

	},
	{
		title: "II. Bezüge Bildungsstandards (Dimension: Anlehnung an Curriculum und Bildungsstandards)",
		description: "Für eine Reihe von Fächern existieren in der Bundesrepublik Deutschland Bildungsstandards, in denen Kompetenz- bzw. Anforderungsbereiche beschrieben sind. Zwar ist davon auszugehen, dass sich diese auch in Lehr- und Bildungsplänen der Bundesländer niederschlagen, jedoch kann es trotzdem hilfreich sein, wenn im Lehr-Lernmittel auch hier entsprechende Bezüge zumindest stichwortartig herstellt werden, sodass eine Zuordnung seitens der Lehrkräfte, bzw. unter Umständen auch seitens der Schüler*innen, leichter vollzogen werden kann.",
		question: "Im Lehr-Lernmittel werden nachvollziehbare Bezüge zu Inhalten der gültigen Bildungsstandards hergestellt.",
		indicators: "Indikatoren für eine positive Bewertung dieses Items: Im Lehr-Lernmittel findet eine grundsätzliche Einordnung der Lehr-Lernziele, der Themen sowie der angestrebten Kompetenzen zu entsprechenden Inhalten der Bildungsstandards statt (z.B. Anforderungsbereiche, Kompetenzen, Themen). Das kann auch detailliert/kleinschrittiger passieren, in dem z.B. einzelne Unterrichtssequenzen oder Aufgaben in ihrer Bedeutung für den Kompetenzerwerb im Sinne der Bildungsstandards zugeordnet werden."
	},
	{
		title: "III. Interessegeleitete Themenführung/Positionierung (Dimension: Diskursive Positionierung)",
		description: "Es ist grundsätzlich die Frage zu stellen, inwiefern Inhalte des Angebots im Zusammenhang mit bestimmten Interessen des Anbieters stehen und ob das eine einseitige Einflussnahme auf Schüler*innen und Lehrkräfte darstellt. Soll z.B. ein bestimmtes Thema in die Schule transportiert werden? Sollen bestimmte Inhalte oder Aussagen platziert werden? Soll eine bestimmte Organisation bzgl. für sie relevanter Themen in ein gutes Licht gerückt werden? Geschieht dies vereinseitigend oder ist eine multiperspektivische Sichtweise auf gesellschaftlich, politisch oder wissenschaftlich relevante Diskurse gegeben, in der auch anderslautende Perspektiven gleichwertig repräsentiert sind?",
		question: "Das Lehr-Lernmittel ist frei von einseitiger Informationsvermittlung bzgl. bestimmter Themen/Aussagen gesellschaftlicher Akteure.",
		indicators:"Indikatoren für eine positive Bewertung dieses Items: Das Lehr-Lernmittel enthält keine einseitigen Aussagen, Themenführungen oder Selbstdarstellungen von Organisationen/Anbietern und ist ersichtlich bemüht, unterschiedliche und plurale Sichtweisen auf gesellschaftliche Diskurse gleichberechtigt zu integrieren. Das wird z.B. auch dadurch signalisiert, dass Aussagen, die nicht simple Fakten sind, nicht als „verabsolutierte“ Aussagen formuliert sind. Dies gilt auch für sozusagen beiläufig vermittelte Inhalte oder Aussagen, die nicht im zentralen Zusammenhang zum Thema des Lehr-Lernmittels stehen (z.B. Aussagen in Textaufgaben, Anwendungsaufgaben, Abbildungen o.ä.)."
	},
	{
		title: "IV. Transparenz (Dimension: Diskursive Positionierung)",
		description: "'Transparenz' bedeutet in diesem Zusammenhang, inwieweit für die nutzende Person eines Lehr-Lernmittels klar ersichtlich ist, von wem dieses Lehr-Lernmittel stammt, sodass eine (kritische) Bewertung und Einordnung erfolgen kann. Dafür ist es wichtig, dass im Lehr-Lernmittel selbstbezogene Informationen bereitstellt werden. Dazu gehört z.B., wer es entwickelt und verbreitet (Autor*innen, Herausgeber*innen und Fördernde sowie ihre Zugehörigkeit zu bestimmten Organisationen), woher möglicherweise Gelder stammen, die zur Entwicklung des Lehr-Lernmittels genutzt wurden, und woher die Informationen stammen, die im Lehr-Lernmittel enthalten sind (Quellen). Wichtige Informationen für die Lehrkraft sind in diesem Zusammenhang auch Aussagen über die Ziele, die mit diesem Angebot verfolgt werden, bzw. Antworten auf die Frage, warum dieses Lehr-Lernmittel angeboten wird (Motivation).",
		question: "Das Lehr-Lernmittel ist transparent hinsichtlich seiner Autorenschaft/Anbieter.",
		indicators:"Indikatoren für eine positive Bewertung dieses Items: Es werden Autoren und Anbieter sowie deren organisationale/institutionelle Zugehörigkeit genannt. Finanzierungsquellen werden offengelegt. Zusammenhänge (z.B. bei mehreren Anbietern oder beteiligten Organisationen) sind für die Lehrkraft nachvollziehbar. Außerdem werden Ziele des Lehr-Lernmittels und Gründe dafür, dass es angeboten wird (d.h. also eine Erklärung, warum dieses Lehr-Lernmittel angeboten wird), genannt."
	},
	{
		title: "V. Werbliche Elemente (Dimension: Diskursive Positionierung)",
		description: "Zur Frage steht hier, inwiefern und in welchem Ausmaß in Lehr-Lernmitteln werbliche Elemente dargestellt werden. Dies muss unter dem Aspekt, dass in vielen Bundesländern Werbung im Unterricht entweder verboten oder zumindest sehr kritisch betrachtet wird und mit bestimmten Auflagen versehen ist, problematisiert werden. Werbliche Elemente im Zusammenhang mit Lehr-Lernmitteln können sein: Logos, Produktabbildungen, Nennung von Marken u.Ä., die nicht Gegenstand des Unterrichts sind (d.h., die nicht unter fachlicher oder medienpädagogischer Perspektive thematisiert werden).",
		question: "Das Lehr-Lernmittel ist frei von Werbung.",
		indicators: "Indikatoren für eine positive Bewertung dieses Items: Es sind keine der oben genannten Elemente im Lehr-Lernmittel enthalten. Höchstens eine direkt auf den Anbieter des Lehr-Lernmittels bezogene Namensnennung (Quelle) oder das Logo des Anbieters ist enthalten – jedoch sollte dieses nicht in visuell dominanter Weise präsentiert werden."
	},
	{
		title: "VI. Heterogenität/Gender (Dimension: Diskursive Positionierung)",
		description: "Lehr-Lernmittel enthalten direkt oder indirekt (z.B. über visuelle Darstellungen, Bilder, Grafiken oder auch im Rahmen von Textteilen) Repräsentationen/Darstellungen einer sozialen und gesellschaftlichen Umwelt, die sie jedoch auch gleichzeitig aufgrund dieser Darstellung für das Verständnis der Schüler*innen wiederum beeinflussen und 'erzeugen'. In einer pluralistisch verfassten, demokratischen Gesellschaft erscheint es wichtig, dass einseitige Zuschreibungen/Festlegungen auf gesellschaftliche bzw. ethnische Gruppen oder Minderheiten, auf Menschen mit Beeinträchtigungen sowie auf Geschlecht oder Religion vermieden werden. Darüber hinaus erscheint es als wichtig, dass eine kulturelle Vielfalt, wie sie unter den Schüler*innen herrscht, auch in Lehr-Lernmitteln repräsentiert wird.",
		question: "Das Lehr-Lernmittel ist in seinen textlichen und bildlichen Darstellungen von gesellschaftlichen bzw. ethnischen Gruppen sowie hinsichtlich der Kategorie Geschlecht ausgewogen und in ihm werden einseitige, reduzierende Darstellungen vermieden."
	},
	{
		title: "VII. Handlungsorientierung (Dimension: Makrodidaktische und bildungstheoretische Fundierung)",
		description: "Das Konzept der 'Handlungsorientierung' zielt auf die aktive Erschließung von Wissen und Kompetenzen durch die Schüler*innen ab. Dabei ist es in einen bildungstheoretischen Rahmen eingeordnet, der übergeordnete Bildungsziele der Selbst- und Mitbestimmungsfähigkeit (Klafki) als wichtige Normen für die übergeordneten Ziele von Unterricht anerkennt. Ein handlungsorientierter Unterricht zeichnet sich unter anderem dadurch aus, dass Schüler*innen aktiv tätig werden und eigene Arbeits- bzw. Denkergebnisse produzieren. Das kann im Rahmen von individuellen Aufgabenstellungen geschehen, es bieten sich dazu jedoch auch vielfältige Formen gruppenorientierten entdeckenden Lernens (Kooperation, Kollaboration) an. So interpretiert impliziert 'Handlungsorientierung' auch Eigenverantwortlichkeit und damit die Möglichkeit bzw. Notwendigkeit, mit eigenen Entscheidungen den Lern- bzw. Bildungsprozess zu beeinflussen/zu gestalten.",
		question: "Das Lehr-Lernmittel ist handlungsorientiert gestaltet, indem es Verantwortungsübernahme für Lernwege und Lernergebnisse durch die Schüler*innen fördert/fordert.",
		indicators: "Indikatoren für eine positive Bewertung dieses Items: Im Lehr-Lernmittel bzw. durch das Lehr-Lernmittel werden die SuS weitreichend zu aktiven Gestaltern ihres eigenen Lernprozesses bzw. der Anwendung von Wissen, Fertigkeiten und Kompetenzen. Das zeigt sich u.U. auch darin, dass individuell oder auch in Gruppen echte Entscheidungen über Lernwege oder Anwendung von Wissen, Fertigkeiten und Kompetenzen getroffen werden, was wiederum Wahlmöglichkeiten auf Seiten der SuS voraussetzt."
	},
	{
		title: "VIII. Lebensweltlichkeit (Dimension: Makrodidaktische und bildungstheoretische Fundierung)",
		description: "Hier geht es um die Frage, inwiefern das Lehr-Lernmittel Bezüge zur Lebenswelt der Schüler*innen aufweist. Das geschieht z.B. dadurch, dass es zentrale und authentische Problemstellungen zur Grundlage hat, die unter gesellschaftlich-politischer oder unter individueller bzw. gruppenspezifischer (Klassengruppe, Peer Group) Perspektive für die Schüler*innen relevant sind. Dazu kann auch gehören, dass das Lehr-Lernmittel bewusst den emotionalen Aspekt dieser Lebenswelt thematisiert.",
		question: "Das Lehr-Lernmittel weist Bezüge zur Lebenswelt der Schüler*innen auf.",
		indicators: "Indikatoren für eine positive Bewertung dieses Items: Das Lehr-Lernmittel weist nicht nur allgemeine Bezüge zur Lebenswelt der Schülerinnen und Schüler auf, sondern diese werden konkretisiert, indem z.B. reale Elemente/Materialien/Aussagen aus der aktuellen Zeitgeschichte aufgegriffen werden, die eine (emotionale) Nähe zu den Schülerinnen und Schülern aufweisen (z.B. aus Zeitschriften, Webseiten, konkrete Ereignisse, Bezüge zu Fragen der Identitätsentwicklung, der Lebensgestaltung, Freizeit oder Beruf etc.)"
	},
	{
		title: "IX. Reflexion/Urteilsfähigkeit (Dimension: Makrodidaktische und bildungstheoretische Fundierung)",
		description: "Übergeordnete pädagogische Bildungsziele, wie Mündigkeit, Selbst-, Mitbestimmungs- und Solidaritätsfähigkeit (Klafki), verlangen, dass Schüler*innen sowohl im Hinblick auf fachliche Themen als auch auf ihre nahe und weite Umwelt sowie Lebenswelt als verantwortliche, urteilende Menschen angesprochen werden. Dazu gehört auch ein Maß an Selbstreflexion, d.h. dass Schüler*innen auch sich selbst, die eigene Situation, die Situation der Gruppe und ihre politische, soziale bzw. gesellschaftliche Position zum Gegenstand des Denkens machen (Metakognition, Reflexion).",
		question: "Das Lehr-Lernmittel spricht die Schüler*innen als Menschen an, die sich selbst und ihre Umwelt zum Gegenstand des eigenen Denkens und Urteilens machen.",
		indicators: "Indikatoren für eine positive Bewertung dieses Items: Das Lehr-Lernmittel erfragt bzw. fördert die Bildung einer eigenen begründeten Meinung bzw. die argumentative Äußerung dieser Meinung. Die SuS werden z.B. explizit aufgefordert, auf der Basis ihres fachlichen Wissens und der Ihnen zur Verfügung stehenden Informationen, ein Urteil als Antwort auf eine bestimmte Fragestellung zu fällen. Dabei kann auch eine gewissermaßen überfachliche Dimension eine Rolle spielen, indem z.B. fachliche Themen in ihren gesellschaftlichen, politischen oder sozialen Bezügen eingebettet und zum Gegenstand gemacht werden."
	},
	{
		title: "X. Multiperspektivität/Kontroversität (Dimension: Makrodidaktische und bildungstheoretische Fundierung)",
		description: "Lehr-Lernmittel behandeln als direkten Unterrichtsgegenstand oder auch als begleitendes Nebenthema immer wieder Themen, die innerhalb der Gesellschaft (oder auch in der Fachwissenschaft) multiperspektivisch oder auch kontrovers diskutiert werden. Es ist ein zentrales Anliegen eines pädagogisch verantworteten Unterrichtens, dass Lernende in solchen Themen nicht durch Unterricht und Lehrmittel bereits einseitig für eine mögliche Position/Meinung vereinnahmt werden, sondern dass sie auf Basis von Fakten sowie unterschiedlichen Argumenten zu einer eigenen Meinungsbildung hingeführt bzw. ermächtigt werden. Dies gilt vorbehaltlich einer altersgemäßen Komplexitätsreduktion bzw. Elementarisierung durch die Autor*innen des Lehr-Lernmittels. Insofern sind die Entwickler*innen gefordert, nicht nur eine einseitige Darstellung von Themen/Sachverhalten in Lehr-Lernmitteln zu vermeiden, sondern auch sensibel für plurale Sichtweisen zu sein und, wo vorhanden, auch die Kontroversität, die möglicherweise in Fachwissenschaft und Gesellschaft vorzufinden ist, den Lernenden nicht vorzuenthalten.",
		question: "Themen bzw. Probleme, die in Gesellschaft bzw. Wissenschaft kontrovers und multiperspektivisch diskutiert werden, werden im Lehrmittel ebenfalls kontrovers und multiperspektivisch dargestellt.",
		indicators: "Indikatoren für eine positive Bewertung dieses Items: Die im Lehr-Lernmittel dargestellten Themen, seien es zentrale oder begleitende Themen, lassen in der Art der Darstellung für die Lernenden erkennen, dass es für ihre Bewertung unterschiedliche Positionen, Meinungen, Sichtweisen oder Argumente gibt. Es werden nicht nur einseitige Aussagen, Wertungen oder Formulierungen vermieden, die den Anschein der Alternativlosigkeit vermitteln, sondern die Lernenden werden durch das Lehr-Lernmittel für bestehenden unterschiedliche und kontroverse Sichtweisen sensibilisiert und es wird durch Präsentation der Themen/der Inhalte sowie durch die Art der sprachlichen Vermittlung eine Offenheit für eine eigene Meinungsbildung/Bewertung gewährleistet."
	},
	{
		title: "XI. Methodenpluralität (Dimension: Mikrodidaktische Umsetzung)",
		description: "Methoden sind 'Lern- und Arbeitstechniken zum selbständigen und sachgerechten Erkennen, Entdecken, Experimentieren, Bearbeiten, Konstruieren, Gestalten, Präsentieren, Kommunizieren und Kontrollieren' (Wiater). Klippert unterscheidet Methoden der Informationsbeschaffung (Lesen, Nachschlagen, Befragen, etc.), der Informationsverarbeitung und Aufbereitung (Strukturieren, Visualisieren, Gestalten, etc.), Methoden der Arbeits-, Zeit- und Lernplanung und Methoden, die das Nachdenken über das eigene Lernen fördern. Einzelne Methoden können in Lehr-Lernmitteln bewusst eingesetzt werden, um die beabsichtigten Lernprozesse und Aktivitäten zu unterstützen. Sie können auch direkt thematisiert, in ihrer Bedeutung erläutert und gezielt eingeübt werden, um ihre Effektivität zu erhöhen (Förderung von Methodenkompetenz). Methoden erfüllen dabei keinen Selbstzweck, sondern haben eine Funktion innerhalb der übergeordneten Ziele des Lernprozesses (inkl. allgemeiner und überfachlicher Entwicklungsziele der Schüler*innen). ",
		question: "Das Lehr-Lernmittel setzt gezielt unterschiedliche Methoden ein, die den übergeordneten Zielen des Lernprozesses dienen.",
		indicators: "Indikatoren für eine positive Bewertung dieses Items: Im Lehr-Lernmittel werden (unterschiedliche) Methoden gezielt eingesetzt, um bestimmte Aufgaben oder Sequenzen zu unterstützen. Dabei zielen diese Methoden auf die Tätigkeit der SuS ab. Dabei geht es nicht darum, möglichst viele unterschiedliche Methoden einzusetzen (Selbstzeck), sondern möglichst solche, die die angestrebten Ziele, Fertigkeiten und Kompetenzen didaktisch unterstützen. Hilfreich ist es, wenn der Sinn oder die Zielsetzung der eingesetzten Methoden genannt wird oder in Bezug auf ihre Ziele transparent ist."
	},
	{
		title: "XII. Multimedia/Multimodalität (Dimension: Mikrodidaktische Umsetzung)",
		description: "Medien können ein eindrückliches Mittel sein, Sachverhalte zu veranschaulichen, Informationen didaktisch aufzubereiten, verständlich zu präsentieren und Anknüpfungen an die Lebenswelt von Jugendlichen zu schaffen. Lehr-Lernmittel können Medien nutzen, um Lernende auf unterschiedlichen Wegen anzusprechen und ihren Lerninhalt abgestimmt auf die damit verbundenen Lernziele zu vermitteln. Dies kann besonders effektiv gelingen, wenn in Lehr-Lernmitteln unterschiedliche Medienformate kombiniert werden, um so mehrere sensorische Kanäle der Lernenden anzusprechen (Multimodalität). Sie können dabei auch Wahlmöglichkeiten bieten, welche Medienarten für spezifische Schritte des Lernprozesses genutzt werden können.",
		question: "Das Lehr-Lernmittel transportiert seine Lerninhalte auf multimediale/multimodale Art und Weise.",
		indicators:"Indikatoren für eine positive Bewertung dieses Items: Wesentliche Inhalte des Lehr-Lernprozesses, der durch das Lehr-Lernmittel angestrebt wird, werden medial aufbereitet vermittelt bzw. machen mediale Darstellungen zum Gegenstand des Lernhandelns für die SuS. Das Lehr-Lernmittel nutzt unterschiedliche Medienarten bzw. 'Kanäle' (z.B. auditive, audiovisuelle, annotierte oder symbolische Illustrationen/Videos, interaktive Webelemente, etc.) und kombiniert diese in sinnvoller Weise um den Lernprozess zu fördern. Dies kann auch so umgesetzt werden, dass Wahlmöglichkeiten je nach indivudeller Präferenz für unterschiedliche Medienarten auf Seiten der Lernenden bestehen."
	},
	{
		title: "XIII. Medienkompetenz (Dimension: Mikrodidaktische Umsetzung)",
		description: "Medien sind Teil der kulturellen und sozialen Umwelt von Schüler*innen sowie wesentlicher Träger der Informations- und Wissensgesellschaft, in der wir leben. Sie sind daher gleichermaßen ein notwendiges Lehr-Lernfeld und auch ein didaktisches Mittel, um Lehr-Lernprozesse zu unterstützen (Mittlerfunktion). Durch sie kann man auf besonders eindrückliche Weise Sachverhalte veranschaulichen, Informationen didaktisch aufbereiten und verständlich präsentieren sowie Anknüpfungen an die Lebenswelt von Kindern und Jugendlichen schaffen. Es ist wichtig, die kompetente Nutzung sowie die kritische Reflexion von Medien als Kommunikationsmittel und 'Mittler von Welt' zu fördern und zu trainieren. Medienkompetenz lässt sich in diesem Sinn verstehen als Vermögen (Fähigkeit) und Bereitschaft in Medienzusammenhängen zu handeln, über diese zu kommunizieren und kritisch zu reflektieren.",
		question: "Das Lehr-Lernmittel fördert einen kompetenten Umgang mit Medien.",
		indicators:"Indikatoren für eine positive Bewertung dieses Items: Die Lernenden sind nicht nur passive Rezipienten medialer Inhalte, sondern setzen sich aktiv und reflexiv mit Mediendarstellung und/oder Kommunikation auseinander. Sie arbeiten, lernen und machen Lernfortschritte unter Nutzung von Medien und - wo möglich - erstellen Sie sogar eigene Medieninhalte oder werden herausgefordert mediale Repräsentationen kritsch und relexiv zu hinterfragen, um Medienkonpetenz zu fördern."
	},
	{
		title: "XIV. Differenzierung (Dimension: Mikrodidaktische Umsetzung)",
		description: "Eine besondere Herausforderung für die Gestaltung von Unterricht stellt die Anpassung an eine heterogene Schülerschaft dar. Dazu können Lehr-Lernmittel einen wichtigen Beitrag leisten, indem sie sozusagen 'Variationen' ihrer selbst anbieten (Parallelisierung von Unterricht). Diese können z.B. über die Bereitstellung unterschiedlicher Anwendungsgebiete und Lernziele (auch mit unterschiedlichen Schwierigkeitsgraden) und darauf abgestimmter Arbeitsschritte bzw. unterschiedlicher Arbeitsaufträge innerhalb des Lehr-Lernmittels erfolgen. Dabei ist wichtig, dass die Ergebnisse der parallel durchgeführten Lernsequenzen auch wieder zusammengeführt werden.",
		question: "Das Lehr-Lernmittel beinhaltet Angebote für binnendifferenzierte Lernarrangements.",
		indicators:"Indikatoren für eine positive Bewertung dieses Items: Das Lehr-Lernmittel enthält Variationsangebote, die zeitlich parallel umgesetzt werden können. Diese gehen über einfache Arbeitsgruppen, die dieselben Ziele lediglich auf unterschiedliche Gegenstände umsetzen, hinaus und enthalten z.B. auch unterschiedliche Lernziele, unterschiedliche Schwierigkeitsgrade, aufeinander verweisende Arbeitsschritte, u.ä. Dabei wird auch die Sicherung von verbindlichen Ergebnissen für alle Schülerinnen und Schüler nicht vernachlässigt."
	},
	{
		title: "XV. Barrierefreiheit/Inklusion (Dimension: Mikrodidaktische Umsetzung)",
		description: "Lehr-Lernmittel können wesentlich zur erfolgreichen Gestaltung von inklusiven Unterrichtsszenarien beitragen, indem sie barrierefreie Zugänge für Schüler*innen mit Beeinträchtigungen bieten (insbesondere für Schüler*innen mit Seh-, Hör- oder Lernbeeinträchtigungen). Für Menschen mit Hör- oder Sehbeeinträchtigungen ist beispielsweise die Beachtung des Zwei-Sinne-Prinzips von Bedeutung, d.h. ein Element/Inhalt des Lehr-Lernmittels wird immer vollständig auf zwei Wegen (auditiv und visuell) vermittelt. Außerdem können Untertitel in Videos, zusätzliche Texte, die den Inhalt einer Grafik oder einer Abbildung beschreiben, die Integration von Gebärdensprache, Möglichkeiten zur digitalen Sprachausgabe per Screenreader oder die Nutzbarkeit von Vergrößerungssoftware sowie Audiodeskriptionen etc. die Zugänglichkeit des Lehr-Lernmittels für die genannte Personengruppe erleichtern. Für Menschen mit Lernschwierigkeiten ist es sinnvoll, beispielsweise die Texte des Lehr-Lernmittels in leichter Sprache zu integrieren.",
		question: "Das Lehr-Lernmittel bietet barrierefreie Zugänge für Schüler*innen mit Beeinträchtigungen.",
		indicators:"Indikatoren für eine positive Bewertung dieses Items: Das Lehr-Lernmittel enthält durchgängig in allen seinen Bestandteilen Elemente und Anreicherungen, die eine Barrierefreiheit für zumindest eine der genannten Zielgruppen ermöglicht."
	},
	{
		title: "XVI. Transfer- und Anwendungsorientierung (Dimension: Kognitive Strukturierung)",
		description: "In Lehr-Lernmitteln können unterschiedliche kognitive Prozesse angeregt bzw. angestrebt werden. Diese Prozesse lassen sich grob unter folgenden Aktionswörtern zusammenfassen (aufsteigende Reihenfolge, was die Komplexität des Vorgangs angeht): erinnern, verstehen, anwenden, analysieren, bewerten, erschaffen. Kompetenzorientiertes Unterrichten wird in der Regel darauf abzielen, neben den elementaren kognitiven Prozessen 'erinnern' und 'verstehen' auch - entsprechend der Lern- bzw. Kompetenzziele - 'höhere' kognitive Prozesse anzuregen. Daher können in Lehr-Lernmitteln bewusst entsprechende Prozesse in Form von Fragen, Aufgaben oder Anschauungen integriert sein.",
		question: "Durch das Lehr-Lernmittel werden gezielt kognitive Prozesse angesprochen, die über elementare kognitive Prozesse hinausgehen und als transfer- bzw. anwendungsorientiert zu bezeichnen sind.",
		indicators:"Indikatoren für eine positive Bewertung dieses Items: Es lassen sich im Lehr-Lernmittel in den einzelnen Teilen/Sequenzen die jeweils angeregten/beabsichtigten kognitiven Prozesse identifizieren bzw. sie sind möglicherweise sogar ausgewiesen. Außerdem finden sich Fragen oder Aufgaben, die z.B. darauf abzielen, dass die SuS aufgebautes Wissen auf andere Objekte anwenden (Transfer), Sachverhalte eigenständig analysieren, eigene Bewertungen auf der Basis ihres Wissens und der erworbenen fachlichen Fertigkeiten vornehmen oder sogar eigenständig neues Wissen oder Fertigkeiten für neue, unbekannte Anwendungsgebiete bilden, um fachliche Probleme zu lösen."
	},
	{
		title: "XVII. Prozessorientierung (Kumulation) (Dimension: Kognitive Strukturierung)",
		description: "Ein Lehr-Lernmittel besteht oftmals aus mehreren aufeinanderfolgenden Sequenzen, die sukzessive auf ein bestimmtes Ziel bzw. auch unterschiedliche Teilziele in einem Gesamtzusammenhang des Unterrichtens bzw. Lernens hinleiten sollen. Zur Frage steht, inwiefern die Verknüpfung der einzelnen Sequenzen einen fachlichen bzw. didaktisch sinnvollen Zusammenhang erkennen lässt. Bedeutsam ist darüber hinaus, dass in der Regel ein kumulativer, schrittweiser Aufbau von Wissen, Fertigkeiten und Kompetenzen als erfolgversprechend zu betrachten ist. Dabei kann auch die Anknüpfung am Vorwissen der Schüler*innen (sozusagen als Ausgangspunkt) eine Rolle spielen.",
		question: "Das Lehr-Lernmittel verknüpft einzelne Sequenzen zu einem Prozess und unterstützt damit das Prinzip eines kumulativen Aufbaus von Wissen, Fertigkeiten und Kompetenzen.",
		indicators: "Indikatoren für eine positive Bewertung dieses Items: Sequenzen sind im Lehr-Lernmittel als solche zu erkennen und in ihren Verweisungszusammenhängen untereinander deutlich. In Bezug auf Unterrichtsziele, angestrebte Fertigkeiten und Kompetenzen lässt sich eine schrittweise Vorgehensweise erkennen bzw. mit dem Lehr-Lernmittel umsetzen. Unter Umständen ist das Lehr-Lernmittel sogar so konzipiert, dass es die Bedeutung seiner einzelnen Schritte und Zusammenhänge selbst erklärt und transparent macht."
	},
	{
		title: "XVIII. Lernwegunterstüzende Elemente (Scaffolding) (Dimension: Kognitive Strukturierung)",
		description: "Zur Frage steht hier, inwiefern Lehr-Lernmittel Elemente enthalten, die ihren Nutzer*innen - hier insbesondere den Schüler*innen - deutlich machen können, wie mit dem Lehr-Lernmittel gelernt werden kann/soll. Dazu können erläuternde und erklärende Hinweise gegeben werden (Vor-/Nachbemerkungen, Kommentare, Textbausteine, Marginalien). Wichtig hierbei ist, dass diese sich auf den Lernweg der Schüler*innen beziehen und den Lernprozess bzw. die Lernaktivität unterstützen/fördern/anleiten.",
		question: "Das Lehr-Lernmittel enthält Elemente, die den Lernprozess der Schüler*innen unterstützen, indem sie Aussagen machen, die sich auf den Lernweg bzw. die Lernaktivität der Schüler*innen beziehen.",
		indicators: "Indikatoren für eine positive Bewertung dieses Items: Lernwegunterstützende Elemente finden sich nicht nur vereinzelt sondern sind erkennbar systematisch an den Schlüsselstellen des Lehr-Lernmittels integriert und haben damit eine „rahmende“ Funktion. Solche Elemente können sein: Vor- und Nachbemerkungen, Kommentare zu Inhalten oder Lernprozessen des Lehr-Lernmittels (diese können sich auch sozusagen metakognitiv direkt auf die SuS beziehen)."
	},
	{
		title: "XIX. Sprachlichkeit (Dimension: Bild- und Textkomposition)",
		description: "Damit Lehr-Lernmittel in der Breite von Schüler*innen genutzt werden können, ist es (nicht nur für schwächere Schüler*innen) vorteilhaft, wenn sie in allen Teilen (auch in Aufgabenstellungen) eine klare, einfache Sprache kennzeichnet. Davon unbetroffen sind für die fachliche Aufarbeitung nötige Fach- und Fremdwörter. Textpassagen sind darüber hinaus 'kohärent', d.h. sie weisen eine logische Verknüpfung ihrer Abschnitte auf (Sprachfluss ohne Unterbrechungen).",
		question: "Die Sprache des Lehr-Lernmittels ist klar und verständlich.",
		indicators:"Indikatoren für eine positive Bewertung dieses Items: Das Lehr-Lernmittel enthält keine unnötig langen und verschachtelten Sätze. Auch Aufgaben sind direkt und klar formuliert, und es werden nicht mehrere Aufgabenstellungen in einer einzelnen Aufgabe vermischt. Fachbegriffe und Fremdwörter werden im fachlich nötigen und sinnvollen Rahmen eingesetzt oder gegebenenfalls erläutert. Es existieren keine sprachlichen bzw. logischen Brüche zwischen einzelnen Sätzen oder Abschnitten."
	},
	{
		title: "XX. Bildsprache (Dimension: Bild- und Textkomposition)",
		description: "Über unterschiedliche bildliche Darstellungen (z.B. Fotos, Diagramme, Tabellen, Charts, Animationen) können Sachverhalte vermittelt, verdeutlicht und erklärt werden. Diese bildlichen Elemente sollten in einem logischen und didaktischen Zusammenhang zum Thema und zu den Zielen des Lehr-Lernmittels stehen. Außerdem sind bildliche Elemente in der Regel in textliche Elemente eingebettet oder in Zusammenhang gesetzt - dieser Zusammenhang sollte möglichst klar sein. Es kann zur Förderung von bildlichem Verstehen und Interpretationsvermögen sinnvoll sein, dass abstrahierte bildliche Darstellungen (z.B. Charts) mit textlichen Elementen versehen sind, die erklärenden Charakter haben.",
		question: "Bildliche Elemente werden im Lehr-Lernmittel in klarer und logischer Zuordnung zum Lerngegenstand bzw. -ziel eingesetzt.",
		indicators:"Indikatoren für eine positive Bewertung dieses Items: Das Lehr-Lernmittel verwendet bildliche Elemente über eine rein illustrative Funktion hinaus. Sie stehen im Zusammenhang zum Unterrichtsthema und –ziel und leisten einen eigenen Beitrag zum Verstehen, Erklären oder Anwenden von Wissen, Fertigkeiten und Kompetenzen, die für den durch das Lehr-Lernmittel angeregten Unterrichtsprozess wichtig sind. Sie sind dabei auch textlich eingebettet, was z.B. durch erklärende Textpassagen oder Beschriftungen erreicht wird."
	},
	{
		title: "XXI. Additive Kommunikation (Anreicherung) (Dimension: Bild- und Textkomposition)",
		description: "Hiermit ist gemeint, dass das Lehr-Lernmittel auch über die rein fachliche Aufbereitung hinaus zusätzliche Elemente integriert und jene 'anreichern' kann. Dies können z.B. Lebensweltbezüge im Sinne von Zusatzinformationen, Anekdoten oder humoristischen Passagen sein. Es kann sich dabei auch um Zusätze handeln, die sich ergänzend oder vertiefend auf die im Lehr-Lernmittel präsentierten Inhalte beziehen (z.B. Zusammenfassungen, Exkurse, Merksätze, Glossare, Begriffserklärungen).",
		question: "Das Lehr-Lernmittel integriert zusätzliche kommunikative Elemente, die seine Inhalte unterstützen/anreichern.",
		indicators: "Indikatoren für eine positive Bewertung dieses Items: Das Lehr-Lernmittel enthält über eine reine fachliche Aufbereitung des Unterrichtsthemas und der Unterrichtsziele auch zusätzliche Elemente (Text/Bild/Sprache), die die SuS ansprechen: z.B. in ihren lebensweltlichen Bezügen, oder als Ergänzung, Erklärung, Verstärkung der im Lehr-Lernmittel präsentierten Inhalte."
	},
	{
		title: "XXII. Sequenzierung (Dimension: Aufgabendesign)",
		description: "Aufgaben, die im Lehr-Lernmittel gestellt werden, sollten in einem sinvollen fachlichen und/oder didaktischen Zusammenhang zueinander stehen. Hier kann entsprechend die Frage gestellt werden, welche kognitiven Leistungen/Prozesse (z.B. etwas erinnern, verstehen, anwenden, analysieren, bewerten, erschaffen) in den einzelnen Aufgaben oder ihren Teilen angeregt werden und ob diese z.B. aufeinander aufbauen, zueinander hinführen oder ein Thema/eine Kompetenz aus unterschiedlichen Teilaspekten behandeln und vertiefen.",
		question: "Die im Lehr-Lernmittel enthaltenen Aufgaben stehen in einem didaktisch oder fachlich sinnvollen Zusammenhang zueinander.",
		indicators: "Indikatoren für eine positive Bewertung dieses Items: Die im Lehr-Lernmittel enthaltenen Aufgaben sind in einer aus fachlicher oder didaktischer Perspektive verständlichen Weise sequenziert. Sie verweisen aufeinander/bauen aufeinander auf und dabei werden nicht nur gleiche oder ähnliche kognitive Prozesse wiederholt."
	},
	{
		title: "XXIII. Aktivierung (Dimension: Aufgabendesign)",
		description: "Hier geht es um die Frage, inwiefern ein Lehr-Lernmittel insgesamt eine grundlegende Problemstellung verfolgt, die im Verlauf durch die Schüler*innen bearbeitet und gelöst wird. Diese Problemstellung wird in der Regel am Anfang des Lehr-Lernmittels formuliert und bietet damit das 'Setting' für die sich daraus ergebenden Schritte und Aufgaben, wodurch lernpsychologisch betrachtet eine Aktivierung der Schüler*innen erfolgt (Motivation).",
		question: "Das Lehr-Lernmittel steht unter einer übergeordneten/umgreifenden Problemstellung, die durch die Schüler*innen bearbeitet und gelöst wird.",
		indicators: "Indikatoren für eine positive Bewertung dieses Items: Zu Beginn des durch das Lehr-Lernmittel initiierten Lernprozesses wird eine Problemstellung formuliert, die es im Verlauf zu lösen gilt. Alle nachfolgenden Unterrichtsschritte sind auf diese Problemstellung bezogen und führen nach und nach zur Lösung bzw. vertiefen diese."
	},
	{
		title: "XXIV. Multiple Lösungswege (Dimension: Aufgabendesign)",
		description: "Nicht immer gibt es eine feste Methode, eine fachliche Prozedur oder eine Sichtweise, um ein Problem oder eine Aufgabe zu lösen. Lehr-Lernmittel können hierfür sensibel sein und - wo möglich - unterschiedliche Lösungswege zulassen oder diese sogar anregen. Damit wird ein Spielraum für unterschiedliche plausible Strategien der Schüler*innen ermöglicht und Flexibilität in verschiedenen Lösungsgsansätzen gefördert.",
		question: "Die im Lehr-Lernmittel enthaltenen Aufgaben regen die Schüler*innen zur Entwicklung mehrerer Lösungswege an.",
		indicators: "Indikatoren für eine positive Bewertung dieses Items: Lehr-Lernmittel lassen Raum für unterschiedliche Herangehensweise, ohne dabei die SuS gänzlich ohne jegliche Anleitung oder Hinweise für Lösungswege zu lassen. Z.B. werden unterschiedliche Lösungswege oder Strategien als Angebot an die SuS skizziert und vorgeschlagen werden. Auch konkrete Beispiele für mögliche unterschiedliche Lösungen oder Strategien können diesen Ansatz unterstützen."
	},
	{
		title: "XXV. Didaktisches Konzept (Dimension: Anwendungstransparenz)",
		description: "Für eine eigene Nutzung - insbesondere durch Lehrkräfte - ist es von Vorteil, wenn zentrale Gedanken für den didaktischen Einsatz vermittelt werden. Und zwar selbst dann, wenn die Lehrpersonen das Lehr-Lernmittel nicht eins zu eins für ihren eigenen Unterricht einsetzen wollen, sondern an eigene Bedürfnisse anpassen möchten. Dazu gehören Informationen wie: Zielgruppe(n), Ziele, Teilziele, damit verbundene Methoden, angestrebte bzw. geförderte Kompetenzen, Bezug zu Unterrichtsthemen etc.",
		question: "Das Lehr-Lernmittel enthält didaktische Informationen, die seine Anwendung erleichtern.",
		indicators: "Indikatoren für eine positive Bewertung dieses Items: Das Lehr-Lernmittel enthält weitreichende und begründete Informationen über seine didaktische Konzeption. Diese übersteigen grundlegende Informationen über thematische Bezüge sowie die Zielgruppe und geben darüber hinaus auch Informationen über methodische Vorgehensweisen, angestrebte Kompetenzen oder Teilziele. Diese Informationen erklären die Intention des Lehr-Lernmittels und erleichtern somit seine Nutzbarkeit."
	},
	{
		title: "XXVI. Rahmenbedingungen (Dimension: Anwendungstransparenz)",
		description: "Der Einsatz von Lehr-Lernmitteln im Unterricht birgt bestimmte Voraussetzungen, die bei einer beabsichtigten Nutzung zu bedenken sind. Dazu gehören z.B. Zeitbedarf, technische oder räumliche Voraussetzungen, bestimmte Gruppengrößen, das Vorhandensein bestimmter Materialien oder Medien, die Möglichkeit der Wiedergabe bestimmter Medienformate, Internetverbindung, eine bestimmte Anzahl an PCs oder mobilen Endgeräten etc. Für die Lehrkraft ist es hilfreich, wenn diese Voraussetzungen von vornherein übersichtlich genannt werden.",
		question: "Das Lehr-Lernmittel nennt die Rahmenbedingungen seiner Nutzung.",
		indicators: "Indikatoren für eine positive Bewertung dieses Items: Es sind alle nötigen Rahmenbedingungen der Nutzung/des Einsatzes des Lehr-Lernmittels übersichtlich aufgeführt."
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
        title: "I. References to the Curriculum (Dimension: References to Curriculum and Educational Standards)",
        description: "Contemporary curricula contain subject-, grade- and age-group-specific educational objectives, subject areas, skills/competencies, didactical principles or suggestions of learning and teaching methods. Though educational media need not necessarily reach a narrow equivalence, an alignment of the mid- and long-term learning activities to the curriculum is important. Therefore it is helpful, if the educational medium makes at least shorthand references, so that an easier attribution by the teachers and maybe also by the learners is possible.",
        question: "The educational medium makes transparent references to educational objectives, topics, skills/competencies, didactical principles or suggestions of learning and teachings methods, which easily allows for the teachers to allocate them to the relevant curriculum. Ideally, the educational medium itself elucidates the specific relations by making particular statements in this regard. The reference to the curriculum may also be an indirect one, emphasizing the supplementary character of the content.",
        indicators: "Indicators of a positive rating for this item: The educational medium makes transparent references to educational objectives, topics, skills/competencies, didactical principles or suggestions of learning and teachings methods, which easily allows for the teachers to allocate them to the relevant curriculum. Ideally, the educational medium itself elucidates the specific relations by making particular statements in this regard. The reference to the curriculum may also be an indirect one, emphasizing the supplementary character of the content."
    },
    {
        title: "II. References to Educational Standards  (Dimension: References to Curriculum and Educational Standards)",
        description: "Several countries have implemented national educational standards for a range of subjects, which describe competencies resp. requirement areas and standards. Although it can be assumed that these standards will also penetrate the curricula, it can be helpful if the educational medium makes also at least shorthand references to them, so that an easier attribution by the teachers and maybe also by the learners is possible.",
        question: "The educational medium provides a general classification of the educational objectives, the topics and the aspired competencies with regard to the educational standards, which are applicable for the particular subject (e.g., areas of requirement, competencies, topics). This can also be done in a detailed/small-steps manner, for example by relating the importance of single learning sequences or assignments to the acquisition of competencies in terms of the educational standards.",
        indicators: "Indicators of a positive rating for this item: The educational medium provides a general classification of the educational objectives, the topics and the aspired competencies with regard to the educational standards, which are applicable for the particular subject (e.g., areas of requirement, competencies, topics). This can also be done in a detailed/small-steps manner, for example by relating the importance of single learning sequences or assignments to the acquisition of competencies in terms of the educational standards."
    },
    {
        title: "III. Interest-driven Mediation of Topics/Positioning (Dimension: Discoursive Positioning)",
        description: "An elementary question to be asked with regard to the analysis of educational media is how their content is related to specific interests of their providers and if this relation is exerting a biased, one-sided influence on learners and teachers. Does the educational medium, for instance, aim to transport a specific subject into the classroom? Is a particular topic highlighted or are specific assertions made with regard to this topic? Or is a certain organization connoted in a positive way with regard to the overarching topic of the educational medium? Is this done in a one-sided way, or does the medium take a multi-perspective view on relevant societal, political or scientific discourses, which includes the equivalent presentation of different or contrary perspectives?",
        question: "The educational medium does not include one-sided statements and presentations of topics or positive self-portrayals of organizations/providers. Its authors recognizably take efforts to present differing/pluralistic views on societal discourses in an equivalent manner. This is, for instance, indicated by a formulation of statements, which avoids absolutizations in phrasing/wording (with the exception of statements that can be regarded as basic facts). This is also true for supposedly incidentally mediated content or statements, which are not directly related to the central theme or topic of the educational medium (for instance, statements made in instructions for tasks, instructions for practical applications, illustrations, annotations, etc.).",
        indicators: "Indicators of a positive rating for this item: The educational medium does not include one-sided statements and presentations of topics or positive self-portrayals of organizations/providers. Its authors recognizably take efforts to present differing/pluralistic views on societal discourses in an equivalent manner. This is, for instance, indicated by a formulation of statements, which avoids absolutizations in phrasing/wording (with the exception of statements that can be regarded as basic facts). This is also true for supposedly incidentally mediated content or statements, which are not directly related to the central theme or topic of the educational medium (for instance, statements made in instructions for tasks, instructions for practical applications, illustrations, annotations, etc.)."
    },
    {
        title: "IV. Transparency (Provider/Authors/Motivation) (Dimension: Discoursive Positioning)",
        description: "Transparency means to what extent the origin of the educational medium is clear for the user, so that a (critical) assessment and contextualization of its content is possible. In order to allow for this, the educational medium must include information referring to its origination. This includes, for instance, information about who developed and who disseminates it (authors, distributers, sponsors – that is, all relevant persons and their relation to specific organizations). It also includes information about funding, which was used to develop the educational medium, as well as information about the sources of its content. Statements about goals (educational as well as general), which shall be achieved by offering the educational medium, are also an important information for the teacher: Why is this educational medium offered/distributed (motivation)?",
        question: "Authors, providers and their organizational or institutional affiliation(s) are explicitly named. Sources of financing are disclosed. Relations of persons and organizations involved in the making and distribution of the educational medium (for example if several providers or organizations are participating) are traceable for the user. In addition, goals and motivation for offering the educational medium are made clear (i.e., reasons why this educational medium is provided).",
        indicators: "Indicators of a positive rating for this item: Authors, providers and their organizational or institutional affiliation(s) are explicitly named. Sources of financing are disclosed. Relations of persons and organizations involved in the making and distribution of the educational medium (for example if several providers or organizations are participating) are traceable for the user. In addition, goals and motivation for offering the educational medium are made clear (i.e., reasons why this educational medium is provided)."
    },
    {
        title: "V. Promotional Elements (Dimension: Discoursive Positioning)",
        description: "The question to be asked here is to what extent the educational medium includes elements, which have a promotional character. This has to be critically assessed since advertising is forbidden or regulated by many school administrations or is at least subject to provisions (depending on the country where the medium is used). Promotional elements in the context of educational media may be (amongst others): logos, product images, references to trademarks, unless they are a themselves subject of the lesson/are treated as a (media-)educational topic.",
        question: "The educational-medium does not include any of the elements mentioned above. At the most, the name of the author (source) or the logo of the provider of the educational medium may be included – but the latter should not be presented in a visually dominant way.",
        indicators: "Indicators of a positive rating for this item: The educational-medium does not include any of the elements mentioned above. At the most, the name of the author (source) or the logo of the provider of the educational medium may be included – but the latter should not be presented in a visually dominant way."
    },
    {
        title: "VI. Heterogeneity/Gender (Dimension: Discoursive Positioning)",
        description: "Educational media directly or indirectly include representations/depictions of social and societal environments (e.g., via visual representations, pictures, figures, or also as textual elements). By “representing/depicting” those environments, they are “created” in the learners’ imagination and influence their comprehension of the topic. In a pluralistic, democratic society it is important to avoid one-sided attributions/determinations with regard to societal or ethnical groups or minorities and also with regard to gender or religion. In addition, it is crucial that cultural diversity, which also refers to the learners, is represented in educational media as well.",
        question: "Illustrations, photos, textual descriptions, which are related to societal groups, do not depict these groups in a one-sided, reducing manner (for instance, by assigning specific activities, opinions, behaviors in a simplifying way to these groups). With regard to the category “gender” it is important that a balanced and equal representation of male and female persons is given, again avoiding biased attributions or maybe breaking them consciously. The depiction of different societal groups/ethnicities follows the same pattern, also in order to comply with the learners’ heterogeneity and to offer appropriate opportunities for identification.",
        indicators:"Indicators of a positive rating for this item: Illustrations, photos, textual descriptions, which are related to societal groups, do not depict these groups in a one-sided, reducing manner (for instance, by assigning specific activities, opinions, behaviors in a simplifying way to these groups). With regard to the category “gender” it is important that a balanced and equal representation of male and female persons is given, again avoiding biased attributions or maybe breaking them consciously. The depiction of different societal groups/ethnicities follows the same pattern, also in order to comply with the learners’ heterogeneity and to offer appropriate opportunities for identification."
    },
    {
        title: "VII. Action-orientation (Dimension: Macro-Didactical Foundation / Foundation in Educational Theory)",
        description: "The concept of „Activity Orientation” aims at an active acquisition of knowledge and competencies by the learners. The concept belongs to a wider education-theoretical framework, which acknowledges the educational objectives of self-determination and participation (Klafki) as overarching normative goals of teaching. Activity-oriented teaching is among others characterized by the fact that the learners become pro-active and produce their own working and thinking results. This can be achieved by means of individualized assignments, but many forms of group-based and discovery-oriented learning activities (cooperation, collaboration) are also suitable. Thus „Activity Orientation“ also implies personal responsibility and thereby the opportunity resp. necessity to influence and organize the process of learning by one’s own decisions.",
        question: "The educational medium encourages and enables learners to organize their own learning process resp. the use of their knowledge, skills and competencies actively. This can be seen from genuine individual or group-based decisions about learning paths or the use of knowledge, skills and competencies, which require the opportunity to choose on the side of the learners.",
        indicators: "Indicators of a positive rating for this item: The educational medium encourages and enables learners to organize their own learning process resp. the use of their knowledge, skills and competencies actively. This can be seen from genuine individual or group-based decisions about learning paths or the use of knowledge, skills and competencies, which require the opportunity to choose on the side of the learners."
    },
    {
        title: "VIII. Reference to the Learners’ Social and Cultural Background (Dimension: Macro-Didactical Foundation / Foundation in Educational Theory)",
        description: "This item deals with the question how strongly the educational medium is related to the learners’ background/social milieu. This may be the case when it deals with central and authentic issues, which are of high relevance to the learners from a societal, political, individual or group-specific perspective (classmates, peer-group). This may include that the educational medium deliberately addresses the emotional aspect of this background.",
        question: "The educational medium does not only show general references to the learners’ background, but also concrete ones, including for example authentic elements/materials/statements from contemporary political and/or societal events, which have an (emotional) closeness to the learners (e.g., from magazines, websites, concrete events, with references to topics like identity development, way of living, leisure, workplace and career, etc.).",
        indicators: "Indicators of a positive rating for this item: The educational medium does not only show general references to the learners’ background, but also concrete ones, including for example authentic elements/materials/statements from contemporary political and/or societal events, which have an (emotional) closeness to the learners (e.g., from magazines, websites, concrete events, with references to topics like identity development, way of living, leisure, workplace and career, etc.)."
    },
    {
        title: "IX. Reflection/Ability to Judge (Dimension: Macro-Didactical Foundation / Foundation in Educational Theory)",
        description: "Overarching normative educational objectives like maturity, self-determination, participation and solidarity (Klafki) require that learners are addressed as responsible and reasoning human beings, both with regard to subject-related issues and to their closer and wider environment. This also implies a level of self-reflection, i.e., that learners make themselves, their situation, the situation of their group, their political, social and societal position a subject of their critical thinking (metacognition, reflection).",
        question: "The educational medium requires and encourages the forming of a reasonable opinion resp. the argumentative statement of this opinion. The learners are, for instance, explicitly prompted to make a decision as answer to a specific question, based on their subject-related knowledge and their information at hand. This may even exceed the scope of a specific school-subject, as subject-related topics are embedded in their societal, political or social references and are addressed as such.",
        indicators: "Indicators of a positive rating for this item: The educational medium requires and encourages the forming of a reasonable opinion resp. the argumentative statement of this opinion. The learners are, for instance, explicitly prompted to make a decision as answer to a specific question, based on their subject-related knowledge and their information at hand. This may even  exceed the scope of a specific school-subject, as subject-related topics are embedded in their societal, political or social references and are addressed as such."
    },
    {
        title: "X. Multiperspectivity/Controversy (Dimension: Macro-Didactical Foundation / Foundation in Educational Theory)",
        description: "Oftentimes educational media refer directly or collaterally to topics that are being discussed under different perspectives or are even discussed controversially in society and related academic disciplines. For pedagogically responsible education it is of central concern that learners are not imposed by pre-decided and one-sided content. Instead, the learners should be presented facts and different/opposing arguments to guide and empower them to their own formation of opinion (within the framework of an adequate reduction of complexity and elementarization provided by the authors of the educational medium). In this sense, educational media are challenged to not only avoid a one-sided, reductional presentation of topics/subjects, but also present their content in a sensitive way, giving plural and sometimes even controversial views on topics/subjects, reflecting the way they are prevalent in society/the academic field.",
        question: "Topics/Subjects mediated by the educational medium, regardless if they are central or arbitrary, make it clear in the way they are bein presented to the learners, that different positions, opinions, perspectives or arguments exist to judge and decide upon them. Not only are one-sided statements, valuations or rhetoric avoided, that create the impression that alternative thinking and judgement is non-existent, but instead the learners are sensibilized for existing different and controversial views and perspectives on the subject. The way topics and content is presented (for example by directly pointing to societal and academic dissent), as well as the language used to mediate and communicate to the learners create an openness for the learners to form their own opinion and identify alternative/competing perspectives.",
        indicators: "Indicators of a positive rating for this item: Topics/Subjects mediated by the educational medium, regardless if they are central or arbitrary, make it clear in the way they are bein presented to the learners, that different positions, opinions, perspectives or arguments exist to judge and decide upon them. Not only are one-sided statements, valuations or rhetoric avoided, that create the impression that alternative thinking and judgement is non-existent, but instead the learners are sensibilized for existing different and controversial views and perspectives on the subject. The way topics and content is presented (for example by directly pointing to societal and academic dissent), as well as the language used to mediate and communicate to the learners create an openness for the learners to form their own opinion and identify alternative/competing perspectives."
    },
    {
        title: "XI. Plurality in Methods of Learning and Teaching (Dimension: Microdidactical Implementation)",
        description: "Methods are „techniques of learning and working, aiming at an autonomous and appropriate perceiving, discovering, experimenting, processing, constructing, shaping, presenting, communicating, and monitoring” (Wiater 2011). Klippert differentiates methods for information acquisition (reading, consulting, questioning, etc.), for information processing and preparation (structuring, visualizing, organizing, etc.), methods for work planning, time management and learning processes, and methods, which foster the reflection about the individual learning procedure (Klippert 2006). Specific methods may be consciously used in educational media, in order to support the intended learning processes and activities. They may also be stressed as an own topic, their meaning can be explained, and they can be deliberately trained to increase their effectiveness (fostering of methodological competencies). Methods are never ends in themselves, but they have a distinct function for achieving the overarching objectives of the learning process (including general and generic development goals of the learners).",
        question: "The educational medium uses (different) learning and teaching methods in order to support the solution of specific assignments or particular learning/teaching sequences. Thereby the methods aim at the learners’ activities. The goal is not to use as many different methods as possible (end in itself), but preferably those, which didactically support the aspired goals, skills and competencies. It is useful if the purpose or the goals of the methods employed are explicitly named and are made transparent with regard to these goals.",
        indicators:"Indicators of a positive rating for this item: The educational medium uses (different) learning and teaching methods in order to support the solution of specific assignments or particular learning/teaching sequences. Thereby the methods aim at the learners’ activities. The goal is not to use as many different methods as possible (end in itself), but preferably those, which didactically support the aspired goals, skills and competencies. It is useful if the purpose or the goals of the methods employed are explicitly named and are made transparent with regard to these goals."
    },
    {
        title: "XII. Multimedia/Multimodality (Dimension: Microdidactical Implementation)",
        description: "Media can be impressive means for the illustration of facts, the didactical processing and comprehensible presentation of information, and the connection to the learners’ background and environment. Educational media can use media to address learners in different ways to provide access to their educational content in alignment with their learning goals. This can be particular effective when educational media combine different “channels” or forms of media to address multiple sensory channels of the learners at the same time (multimodality) or by offering choices as to which media the learners might use for specific elements of the learning process.",
        question: "Significant content of the learning/teaching process, the acquisition of which is aimed at by the educational medium, is conveyed by means of media. The educational medium uses different media-“modalities” (for instance audio, audio-visual, annotated or symbolic illustration/video, interactive web-based elements, etc.) and combines them in a meaningful way to foster learning processes on the side of the learners. This may include allowing for choices between different media to use by the learners depending on their own preference.",
        indicators: "Indicators of a positive rating for this item: Significant content of the learning/teaching process, the acquisition of which is aimed at by the educational medium, is conveyed by means of media. The educational medium uses different media-“modalities” (for instance audio, audio-visual, annotated or symbolic illustration/video, interactive web-based elements, etc.) and combines them in a meaningful way to foster learning processes on the side of the learners. This may include allowing for choices between different media to use by the learners depending on their own preference."
    },
    {
        title: "XIII. Media Literacy (Dimension: Microdidactical Implementation)",
        description: "Media are an integral part of the learners’ cultural and social environment; they are important carriers of the information and knowledge society we live in. Therefor they are both a necessary field of learning and a didactical means to support teaching and learning processes (mediating function). It is important to train, to foster the competent use of media as well as the critical reflection about media as a means of communication and content presentation. In this sense, media literacy (media competence) can be interpreted as capability (skill) and readiness to act in media contexts, to communicate about them, to choose, to create and use medial content and to reflect about media and their impact critically.",
        question: "Learners are not only passive recipients of medial content, but actively and reflectively engage with this content. They work, learn and progress through learning sequences by means of it; where applicable, they even create medial content by their own or are required to assess the medial presentation in a critical and reflective way (fostering of media competency).",
        indicators: "Indicators of a positive rating for this item: Learners are not only passive recipients of medial content, but actively and reflectively engage with this content. They work, learn and progress through learning sequences by means of it; where applicable, they even create medial content by their own or are required to assess the medial presentation in a critical and reflective way (fostering of media competency)."
    },
    {
		title: "XIV. (Internal) Differentiation (Dimension: Microdidactical Implementation)",
		description: "A particular challenge for the arrangement of teaching is the adaptation to a heterogeneous group of learners. Educational media can make a significant contribution by offering, so to speak, “variations” of themselves which allow for a “parallelization” of the learning process. This can, for instance, be achieved by provisioning different fields of application and educational objectives (also with different levels of difficulty), matched working steps and various assignments in the educational medium. It is important though to bring the different results of the parallel learning sequences together in the end.",
		question: "The educational medium offers variations, which can be used at the same time by different learners. This exceeds simple working groups, who merely pursue the same targets with regard to different objects, and includes for example also different educational objectives, different levels of difficulty, interdependent work steps, etc. In doing so, the safekeeping of the binding results for all learners is not neglected.",
		indicators: "Indicators of a positive rating for this item: The educational medium offers variations, which can be used at the same time by different learners. This exceeds simple working groups, who merely pursue the same targets with regard to different objects, and includes for example also different educational objectives, different levels of difficulty, interdependent work steps, etc. In doing so, the safekeeping of the binding results for all learners is not neglected."
	},
	{
		title: "XV. Acessibility / Inclusion (Dimension: Microdidactical Implementation)",
		description: "Educational media can significantly contribute to the successful design of inclusive learning scenarios by providing barrier-free access for students with impairments (particularly for students with visual, auditory, or learning impairments). For individuals with auditory or visual impairments, for example, it is important to adhere to the 'dual sensory principle,' meaning that an element or content of the educational material is always conveyed through two channels (auditory and visual). Additionally, features such as subtitles in videos, supplementary texts describing the content of a graphic or image, the integration of sign language, options for digital voice output via screen readers, or the usability of magnification software, audio descriptions, etc., can facilitate the accessibility of the educational materials for the aforementioned group of individuals. For people with learning difficulties, it is advisable to integrate texts in easy-to-read language into the educational materials.",
		question: "The educational medium consistently incorporates elements and enhancements throughout all of its components, enabling barrier-free access for at least one of the mentioned target groups.",
		indicators: "Indicators of a positive rating for this item: The educational medium consistently incorporates elements and enhancements throughout all of its components, enabling barrier-free access for at least one of the mentioned target groups."
	},
	{
		title: "XVI. Transfer  and Application Orientation (Dimension: Cognitive Structuring)",
		description: "Educational Media can encourage or aim at various cognitive processes. These can be roughly described by the following action verbs (ascending order stands for the complexity of the action): remember, understand, apply, analyze, evaluate, create. Competence-oriented teaching and learning will usually aim to foster, besides the elementary cognitive processes of remembering and understanding, 'higher' cognitive processes, according to the learning and competence objectives. Therefore educational media can deliberately integrate appropriate cognitive processes in the form of questions, assignments, or conceptions.",
		question: "It is possible to identify the particularly stimulated/intended cognitive processes in separate parts/sequences of the educational medium; perhaps they are even designated. Additionally, the educational medium includes questions or assignments, which shall encourage that the learners apply their knowledge to other learning objects (transfer), that they analyze facts independently, make their own assessments on the basis of their knowledge and acquired subject-related skills, or even autonomously build up new knowledge or skills for so far unknown fields of application, in order to solve subject-related problems.",
		indicators: "Indicators of a positive rating for this item: It is possible to identify the particularly stimulated/intended cognitive processes in separate parts/sequences of the educational medium; perhaps they are even designated. Additionally, the educational medium includes questions or assignments, which shall encourage that the learners apply their knowledge to other learning objects (transfer), that they analyze facts independently, make their own assessments on the basis of their knowledge and acquired subject-related skills, or even autonomously build up new knowledge or skills for so far unknown fields of application, in order to solve subject-related problems."
	},
	{
		title: "XVII. Process Orientation (Accumulation) (Dimension: Cognitive Structuring)",
		description: "Educational media often consist of several consecutive learning sequences, which lead step-by-step towards a certain educational objective or to different sub-goals within an overall teaching and learning context. This item deals with the question to what extent the singular learning sequences show a subject-related and didactically reasonable coherence. Besides, it is evident that a cumulative, successive development of knowledge, skills and competencies is most promising. Linking to the learners’ prior knowledge (so to speak as a starting point) can also play an important role in this context.",
		question: "It is possible to identify the singular learning sequences and their interconnectedness within the educational medium. A step-by-step approach is apparent with regard to educational objectives, aspired skills and competencies, and can be pursued by means of this educational medium. The educational medium is potentially conceptualized in such a way that it explains and elucidates the meaning of its separate steps and their connections by itself.",
		indicators: "Indicators of a positive rating for this item: It is possible to identify the singular learning sequences and their interconnectedness within the educational medium. A step-by-step approach is apparent with regard to educational objectives, aspired skills and competencies, and can be pursued by means of this educational medium. The educational medium is potentially conceptualized in such a way that it explains and elucidates the meaning of its separate steps and their connections by itself."
	},
    {
		title: "XVIII. Elements Supporting the Learning Process (Scaffolding) (Dimension: Cognitive Structuring)",
		description: "This item deals with the question to what extent the educational medium includes elements, which may explain to the users – especially the learners – how it can/ should be used for effective learning. This can be done via explanatory hints and references (e.g., preliminary or summarizing remarks, comments, text modules, marginalia). It is important that these elements refer to the learners and that they support/foster/guide the learning process and the learning activities.",
		question: "Elements, which support the learning path, are not only implemented occasionally, but are recognizably and systematically integrated at the key sections of the educational medium and provide a 'framing' function. Such elements may be: preliminary and summarizing remarks, comments with regard to content or learning processes of the educational medium (these may, so to speak, metacognitively refer directly to the learners.",
		indicators: "Indicators of a positive rating for this item: Elements, which support the learning path, are not only implemented occasionally, but are recognizably and systematically integrated at the key sections of the educational medium and provide a “framing” function. Such elements may be: preliminary and summarizing remarks, comments with regard to content or learning processes of the educational medium (these may, so to speak, metacognitively refer directly to the learners."
	},
	{
		title: "XIX. Language (Dimension: Composition of Visual and Textual Content)",
		description: "In order to make educational media suitable for a wide range of learners, it is advantageous (also, but not only for lower achieving students) to use a clear and simple language in all of its parts (also in assignments). This does not apply to technical terms and foreign words, which are necessary for subject-specific concepts. Furthermore, text passages should be 'coherent,' which means that the sections are logically interconnected (stream of speech without interruptions).",
		question: "The educational medium does not use unnecessarily long and complicated sentences. Assignments are also phrased directly and clearly, and several tasks are not intermingled within a single assignment. Technical terms and foreign words are used in a reasonable way, which is required by the subject, and are explained, if necessary. There are no linguistic or logical breaks between single sentences or sections.",
		indicators: "Indicators of a positive rating for this item: The educational medium does not use unnecessarily long and complicated sentences. Assignments are also phrased directly and clearly, and several tasks are not intermingled within a single assignment. Technical terms and foreign words are used in a reasonable way, which is required by the subject, and are explained, if necessary. There are no linguistic or logical breaks between single sentences or sections."
	},
	{
		title: "XX. Visual Literacy (Dimension: Composition of Visual and Textual Content)",
		description: "By means of pictorial representations (e.g., photos, diagrams, tables, charts, animations) educational media can convey, elucidate and explain facts and issues. These pictorial elements should be related logically and didactically to the topic and to the educational objectives of the educational medium. Moreover, pictorial elements are usually embedded within textual elements or are related to them – this relation should be as clear as possible. To foster visual literacy and interpretive capability on the side of the learners, it may be useful to accompany abstracted pictorial representations (like charts, e.g.) with textual elements, which explain the content of the pictorial representations.",
		question: "The educational medium uses pictorial representations beyond a merely illustrative function. They are connected to the learning topic and the educational objectives and contribute themselves to the understanding, explanation or application of knowledge, skills and competencies, which are important for the learning process initiated by the educational medium. At the same time, they are textually embedded, which may, for instance, be achieved by explaining text passages or captions.",
		indicators: "Indicators of a positive rating for this item: The educational medium uses pictorial representations beyond a merely illustrative function. They are connected to the learning topic and the educational objectives and contribute themselves to the understanding, explanation or application of knowledge, skills and competencies, which are important for the learning process initiated by the educational medium. At the same time, they are textually embedded, which may, for instance, be achieved by explaining text passages or captions."
	},
	{
		title: "XXI. Additive Communication (Enrichment) (Dimension: Composition of Visual and Textual Content)",
		description: "Beyond the merely subject-related presentation, an educational medium can integrate also further elements and thus 'enrich' itself. They may include: references to the learners’ living environment in terms of additional information, anecdotes or humorous passages. These may also be supplements, which complement or deepen the content of the educational medium (e.g., summaries, excursions, mnemotechnic verses, glossaries, definitions).",
		question: "The educational medium includes beyond a merely subject-related presentation of the learning topic and the educational objectives also additional elements (text/illustrations), which address the learners, for example, with regard to their living environment, or serve as supplement, explanation, reinforcement of the content of the educational medium.",
		indicators: "Indicators of a positive rating for this item: The educational medium includes beyond a merely subject-related presentation of the learning topic and the educational objectives also additional elements (text/illustrations), which address the learners, for example, with regard to their living environment, or serve as supplement, explanation, reinforcement of the content of the educational medium."
	},
	{
		title: "XXII. Sequencing (Dimension: Design of Assignments)",
		description: "Assignments, which are included in the educational medium, should be related to each other in a subject-specific and/or didactical way. This item deals with the question, which cognitive activities and processes (e.g., remembering, understanding, applying, analyzing, assessing, creating) shall be initiated by the singular assignments or by parts of them and whether they are interrelated in a reasonable way: for instance, whether they build on one another, lead to one another, or whether they deal with a subject or a competence from different perspectives and deepen it.",
		question: "The assignments included in the educational medium are sequenced in a comprehensive way from a subject-specific or didactical perspective. They refer to each other/build on one another, and in doing so, not only the same or similar cognitive processes are repeated.",
		indicators: "Indicators of a positive rating for this item: The assignments included in the educational medium are sequenced in a comprehensive way from a subject-specific or didactical perspective. They refer to each other/build on one another, and in doing so, not only the same or similar cognitive processes are repeated."
	},
	{
		title: "XXIII. Activation (Dimension: Design of Assignments)",
		description: "This item deals with the question to what extent the educational medium as a whole pursues an issue, which is worked on and solved by the learners during the learning course. Such an issue is normally introduced at the beginning of the educational medium and thus provides the 'setting' for the consequential steps and assignments, which initiates from a learning-psychological point of view an activation of the learners (motivation).",
		question: "At the beginning of the educational medium, a fundamental issue is articulated, which has to be solved during the learning course. All following learning steps are related to this issue and lead towards a solution of the problem or deepen it.",
		indicators: "Indicators of a positive rating for this item: At the beginning of the educational medium, a fundamental issue is articulated, which has to be solved during the learning course. All following learning steps are related to this issue and lead towards a solution of the problem or deepen it."
	},
	{
		title: "XXIV. Multiple Approaches (Dimension: Design of Assignments)",
		description: "Mostly, there is not only one single method, a single subject-specific procedure or point of view to solve a problem or an assignment. Educational media can be sensible to this fact and – if possible – allow for different approaches or even encourage them. This opens heterogeneous learners a scope of various possible strategies and fosters flexibility of different solution approaches.",
		question: "The educational medium allows for different solution approaches, whilst leaving the learners not completely without guidance or hints for potential strategies. Different approaches or strategies are, for example, sketched and proposed as offers to the learners. These hints can be regarded as an offer to the learners, which outline and recommend certain strategies. Additionally, concrete examples of various ways of solving a problem or of different strategies can support this concept.",
		indicators: "Indicators of a positive rating for this item: The educational medium allows for different solution approaches, whilst leaving the learners not completely without guidance or hints for potential strategies. Different approaches or strategies are, for example, sketched and proposed as offers to the learners. These hints can be regarded as an offer to the learners, which outline and recommend certain strategies. Additionally, concrete examples of various ways of solving a problem or of different strategies can support this concept."
	},
	{
		title: "XXV. Didactical Concept (Dimension: Instructional Applicability and Transparency of Application)",
		description: "For the use of the educational medium – especially by the teachers – it is advantageous when central concepts for the didactical application are mediated, even if the teachers will not use the educational medium one-to-one in their lessons, but want to adapt it to their own requirements. Helpful information includes: target group, (educational) objectives, sub-goals, relating methods, targeted resp. fostered competencies, relation to specific aspects of the subject, etc.",
		question: "The educational medium includes extensive and reasonable information about its didactical concept. This information exceeds basic information about both thematic references and the target group and additionally provides information about methodological approaches, targeted competencies, or sub-goals. This information explains the intention of the educational medium and thus facilitates its use.",
		indicators: "Indicators of a positive rating for this item: The educational medium includes extensive and reasonable information about its didactical concept. This information exceeds basic information about both thematic references and the target group and additionally provides information about methodological approaches, targeted competencies, or sub-goals. This information explains the intention of the educational medium and thus facilitates its use."
	},
	{
		title: "XXVI. Framework Conditions (Dimension: Instructional Applicability and Transparency of Application)",
		description: "The use of educational media for instruction is subject to certain conditions, which have to be considered. These include for example: time need, technical or spatial requirements, specific group size, availability of particular materials or media, possibility to play back certain media-formats, internet connection, a specific number of PCs or mobile devices, etc. It is helpful for the teacher if these preconditions are a priori concisely specified.",
		question: "All preconditions for use of the educational medium are concisely specified.",
		indicators: "Indicators of a positive rating for this item: All preconditions for use of the educational medium are concisely specified."
	},
	{
        title: "Own Notes",
        description: "...",
        question: "..."
    }
]

function changeSurveyText(language) {
	let surveyText = language == 'De' ? surveyTextDe : surveyTextEn;
	for (i = 0; i < survey.pageCount; i++) {
		page = survey.getPage(i);
		page.title = surveyText[i].title;
		page.description = surveyText[i].description;
		page.questions[0].title = surveyText[i].question;
	}
}

function changeSurveyTextHistory(language) {
	let surveyText = language == 'De' ? surveyTextHistoryDe : surveyTextHistoryEn;
	for (i = 0; i < survey.pageCount; i++) {
		page = survey.getPage(i);
		page.title = surveyText[i].name;  // Überschrift
		page.description = surveyText[i].description;  // Text
		page.elements[0].title = surveyText[i].summary;  // Frage
		page.elements[0].description = surveyText[i].indicators // Erklärung
	}
	let chartText = language == 'De' ? dimensionsHistoryDe : dimensionsHistoryEn;
	for (i = 0; i < dimensionsHistoryDe.length; i++) {
		document.getElementById('chart_title' + (i + 1)).innerHTML = chartText[i].name;
		document.getElementById('chart_text' + (i + 1)).innerHTML = chartText[i].description;
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
	// SessionStorage En
	sessionStorage.setItem("language", "En");

	if(isAAER()) {
		changePlaceholderTextAAER('En')
		changeSelectOptionsAAER('En')
		if(window.survey != null) {
			changeSurveyText('En')
			changeAnswers('En')
			generateCharts()
		}
	}

	if(isAAERHistory()) {
		changePlaceholderTextAAERHistory('En')
		changeSelectOptionsAAERHistory('En')
		if(window.survey != null) {
			changeSurveyTextHistory('En')
			changeAnswers('En')
			generateOverallChart()
			generateRadarChart()
			generateCharts()
			aaerTextHistory('En')
		}
	}

	if (document.querySelector('.sv_prev_btn')) {
		document.querySelector('.sv_prev_btn').value = 'Back'
	}

	if(document.querySelector('.sv_next_btn')) {
		document.querySelector('.sv_next_btn').value = 'Continue'
	}

	if(document.querySelector('.sv_complete_btn ')) {
		document.querySelector('.sv_complete_btn ').value = 'Finish'
	}


	dropdown = document.getElementById('dropdown-languages_en')
	dropdown.style.display = 'none'

	let elements_en = document.querySelectorAll('[data-lang="En"]')
	let en = [...elements_en]
	en.forEach(element => element.style.display = 'block')

	let elements_de = document.querySelectorAll('[data-lang="De"]')
	let de = [...elements_de]
	de.forEach(element => element.style.display = 'none')
	
	changeEnInline()

}

function clickedGerman() {
	// SessionStorage De
	sessionStorage.setItem("language", "De");

	if(isAAER()) {
		changePlaceholderTextAAER('De')
		changeSelectOptionsAAER('De')
		if(window.survey != null) {
			console.log("gen CHARTS")
			changeSurveyText('De')
			changeAnswers('De')
			generateCharts()
		}
	}

	if(isAAERHistory()) {
		changePlaceholderTextAAERHistory('De')
		changeSelectOptionsAAERHistory('De')
		if(window.survey != null) {
			changeSurveyTextHistory('De')
			changeAnswers('De')
			generateOverallChart()
			generateRadarChart()
			generateCharts()
			aaerTextHistory('De')
		}
	}

	if (document.querySelector('.sv_prev_btn')) {
		document.querySelector('.sv_prev_btn').value = 'Zurück'
	}

	if(document.querySelector('.sv_next_btn')) {
		document.querySelector('.sv_next_btn').value = 'Weiter'
	}

	if(document.querySelector('.sv_complete_btn ')) {
		document.querySelector('.sv_complete_btn ').value = 'Fertig'
	}


	dropdown = document.getElementById('dropdown-languages_de')
	dropdown.style.display = 'none'

	let elements_de = document.querySelectorAll('[data-lang="De"]')
	let de = [...elements_de]
	de.forEach(element => element.style.display = 'block')

	let elements_en = document.querySelectorAll('[data-lang="En"]')
	let en = [...elements_en]
	en.forEach(element => element.style.display = 'none')

	changeDeInline()

}

function isAAER() {
	// if (window.survey != null && window.survey.pageCount < 35)
	if (window.location.href.split('/').pop().includes('survey.html'))
		return true;
	else 
		return false;
}

function isAAERHistory() {
	// if (window.survey != null && window.survey.pageCount == 35)
	if (window.location.href.split('/').pop().includes('aaer-geschichte.html'))
		return true;
	else 
		return false;
}


function aaerTextHistory(lang) {

	if(document.getElementById('anmerkungen')) {
		let not_specified = lang == 'En' ? 'Not specified' : 'Keine Angabe'
		document.getElementById('evaluationscode').innerHTML = survey.data['Evaluationscode'];
		document.getElementById('verlinkung').innerHTML = survey.data['Verlinkung'] ?? not_specified;
		document.getElementById('schulart').innerHTML = survey.data['Schulart'] ?? not_specified;
		document.getElementById('meinung').innerHTML = survey.data['Meinung'] ?? not_specified;
		document.getElementById('kritik').innerHTML = survey.data['Kritik'] ?? not_specified;
		document.getElementById('evaluationsdatum').innerHTML = survey.data['Evaluationsdatum'];
		document.getElementById('anmerkungen').innerHTML = survey.data['Eigene Anmerkungen'] ?? not_specified;
		
		// JSON-Übersicht
		document.querySelector('#surveyResult').textContent = "" + JSON.stringify(survey.data, null, 4);
	}

}

// Hinzufügen des SessionStorages zur Sprache
$(document).ready(function() {
  sessionStorage.getItem("language") == 'En' ? clickedEnglish() : clickedGerman();
});