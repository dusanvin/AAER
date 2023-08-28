function display_navigation() {
	var container = document.getElementById("navigation_container");
	container.innerHTML =
		`

		<!-- Navigation Start -->

		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0" />

		<link rel="stylesheet" href="/css/navigation.css">

		<nav class="navbar navbar-expand-lg pt-3 mt-0 navbar-dark mb-3">

		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  
		  <div class="collapse navbar-collapse justify-content-md-center" id="navbarNavAltMarkup">

		    <ul class="navbar-nav">

				<li class="nav-item pl-5 pr-5 mt-3 mb-3" data-lang="De">

					<a class="aaer_menu pt-2 d-md-inline-block text-white navigation_link text-center" href="index.html" data-toggle="tooltip" data-placement="bottom"
  title="Zur Startseite" alt="Start">

						  <span class="material-symbols-rounded d-block mb-2">
						cottage
						</span>

					</a>

				</li>

				<li class="nav-item pl-5 pr-5 mt-3 mb-3" data-lang="En" style="display: none;">

					<a class="aaer_menu pt-2 d-md-inline-block text-white navigation_link text-center" href="index.html" data-toggle="tooltip" data-placement="bottom"
	title="Go to startpage" alt="Start">

						<span class="material-symbols-rounded d-block mb-2">
							cottage
						</span>

					</a>

				</li>

				<li class="nav-item pl-5 pr-5 mt-3 mb-3" data-lang="De">

					<a class="aaer_menu pt-2 d-md-inline-block text-white navigation_link text-center" href="survey.html" data-toggle="tooltip" data-placement="bottom"
  title="Analysieren und bewerten Sie ein Bildungsmedium" alt="Zum AAER">

				    <span class="material-symbols-rounded d-block mb-2">
						chat_paste_go
					</span>

					</a>

				</li>

				<li class="nav-item pl-5 pr-5 mt-3 mb-3" data-lang="En" style="display: none;">

				<a class="aaer_menu pt-2 d-md-inline-block text-white navigation_link text-center" href="survey.html" data-toggle="tooltip" data-placement="bottom"
title="Analyse and evaluate an educational medium">Go to AAER</a>

			</li>

				<li class="nav-item pl-5 pr-5 mt-3 mb-3" data-lang="De">

					<a class="aaer_menu py-2 d-md-inline-block text-white navigation_link" href="info.html" data-toggle="tooltip" data-placement="bottom"
  title="Erfahren Sie mehr über das AAER">Mehr Erfahren</a>

				</li>

				<li class="nav-item pl-5 pr-5 mt-3 mb-3" data-lang="En" style="display: none;">

				<a class="aaer_menu py-2 d-md-inline-block text-white navigation_link" href="info.html" data-toggle="tooltip" data-placement="bottom"
title="Learn more about AAER">More</a>

			</li>
				
				<li class="nav-item pl-5 pr-5 mt-3 mb-3" data-lang="De">

					<a class="aaer_menu py-2 d-md-inline-block text-white navigation_link" href="contact.html" data-toggle="tooltip" data-placement="bottom"
  title="Kontaktieren Sie uns bei Fragen rund um das AAER">Kontakt</a>

				</li>

				<li class="nav-item pl-5 pr-5 mt-3 mb-3" data-lang="En" style="display: none;">

				<a class="aaer_menu py-2 d-md-inline-block text-white navigation_link" href="contact.html" data-toggle="tooltip" data-placement="bottom"
title="Contact us if there are any questions about the AAER">Contact</a>

			</li>
				<li class="nav-item pl-5 pr-5 mt-3 mb-3" data-lang="De">

				<a class="aaer_menu py-2 d-md-inline-block text-white navigation_link" href="javascript:expand('de')">Sprache</a>

					<div id="dropdown-languages_de" style="display: none; position: absolute;">
						<a class="dropdown-item" href="javascript:clickedGerman()">Deutsch</a>
						<a class="dropdown-item" href="javascript:clickedEnglish()">Englisch</a>
					</div>

				</li>

				</li>

				<li class="nav-item pl-5 pr-5 mt-3 mb-3" data-lang="En" style="display: none;">

				<a class="aaer_menu py-2 d-md-inline-block text-white navigation_link" href="javascript:expand('en')">Language</a>

					<div id="dropdown-languages_en" style="display: none; position: absolute;">
						<a class="dropdown-item" href="javascript:clickedGerman()">German</a>
						<a class="dropdown-item" href="javascript:clickedEnglish()">English</a>
					</div>

				</li>


		    </ul>

		  </div>

		</nav>

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

function clickedGerman() {
	dropdown = document.getElementById('dropdown-languages_de')
	dropdown.style.display = 'none'

	let elements_de = document.querySelectorAll('[data-lang="De"]')
	let de = [...elements_de]
	de.forEach(element => element.style.display = 'block')

	let elements_en = document.querySelectorAll('[data-lang="En"]')
	let en = [...elements_en]
	en.forEach(element => element.style.display = 'none')
}

function clickedEnglish() {
	dropdown = document.getElementById('dropdown-languages_en')
	dropdown.style.display = 'none'

	let elements_en = document.querySelectorAll('[data-lang="En"]')
	let en = [...elements_en]
	en.forEach(element => element.style.display = 'block')

	let elements_de = document.querySelectorAll('[data-lang="De"]')
	let de = [...elements_de]
	de.forEach(element => element.style.display = 'none')
}
