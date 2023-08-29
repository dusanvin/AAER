function display_navigation() {
	var container = document.getElementById("navigation_container");
	container.innerHTML =
		`
<!-- Navigation Start -->
	<link rel = "stylesheet" href = "/css/navigation.css" />
	<div class="site-navbar-top">
		<div class="container py-3">
			<div class="row align-items-center">
				<div class="col-6">
					<div class="d-flex mr-auto">
						<a href="mailto:team@digillab.uni-augsburg.de" class="d-flex align-items-center mr-4">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2" viewBox="0 0 16 16">
							  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
							</svg>
							<span class="d-none d-md-inline-block">team@digillab.uni-augsburg.de</span>
						</a>
						<a href="tel:+498215983151" class="d-flex align-items-center mr-auto">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2" viewBox="0 0 16 16">
							  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
							</svg>
							<span class="d-none d-md-inline-block"> +49 821 598 3151</span>
						</a>
					</div>
				</div>
				<div class="col-6 text-right">
					<div class="mr-auto d-inline-flex align-items-center text-white font-weight-bold">
						<a href="javascript:clickedGerman()">DE</a>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-2" viewBox="0 0 16 16">
						  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/>
						</svg>
						<a href="javascript:clickedEnglish()">EN</a>
					</div>
				</div>
			</div>
		</div>
	</div>

<div class="container">
	<nav class="navbar navbar-expand-lg pt-3 mt-0 navbar-dark mb-3">
	  	<a data-lang="De" class="aaer_menu pt-2 d-md-inline-block text-white navigation_link text-center" href="index.html" data-toggle="tooltip" data-placement="bottom" title="Zur Startseite" alt="Start">
			Startseite
		</a>
		<a style="display: none;" data-lang="En" class="aaer_menu pt-2 d-md-inline-block text-white navigation_link text-center" href="index.html" data-toggle="tooltip" data-placement="bottom" title="Zur Startseite" alt="Start">
			Home
		</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav mr-auto">
	      <li class="nav-item active">
	        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="#">Link</a>
	      </li>
	      <li class="nav-item dropdown">
	        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          Dropdown
	        </a>
	        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
	          <a class="dropdown-item" href="#">Action</a>
	          <a class="dropdown-item" href="#">Another action</a>
	          <div class="dropdown-divider"></div>
	          <a class="dropdown-item" href="#">Something else here</a>
	        </div>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
	      </li>
	    </ul>
	    <form class="form-inline my-2 my-lg-0">
	      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
	      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
	    </form>
	  </div>
	</nav>
</div>

















	<div class="container">
<nav class="navbar navbar-expand-lg pt-3 mt-0 navbar-dark mb-3">
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse justify-content-md-center row" id="navbarNavAltMarkup">
			<div class="col-2">
				<a data-lang="De" class="aaer_menu pt-2 d-md-inline-block text-white navigation_link text-center" href="index.html" data-toggle="tooltip" data-placement="bottom" title="Zur Startseite" alt="Start">
					Startseite
				</a>
				<a style="display: none;" data-lang="En" class="aaer_menu pt-2 d-md-inline-block text-white navigation_link text-center" href="index.html" data-toggle="tooltip" data-placement="bottom" title="Zur Startseite" alt="Start">
					Home
				</a>
			</div>
			<ul class="navbar-nav col-10">
				<li class="nav-item pl-5 pr-5 mt-3 mb-3" data-lang="De">
					<a class="aaer_menu pt-2 d-md-inline-block text-white navigation_link text-center" href="index.html" data-toggle="tooltip" data-placement="bottom" title="Zur Startseite" alt="Start">
						Startseite
					</a>
				</li>
				<li class="nav-item pl-5 pr-5 mt-3 mb-3" data-lang="En" style="display: none;">
					<a class="aaer_menu pt-2 d-md-inline-block text-white navigation_link text-center" href="index.html" data-toggle="tooltip" data-placement="bottom" title="Go to startpage" alt="Start">
						Home
					</a>
				</li>
				<li class="nav-item pl-5 pr-5 mt-3 mb-3" data-lang="De">
					<a class="aaer_menu pt-2 d-md-inline-block text-white navigation_link text-center" href="survey.html" data-toggle="tooltip" data-placement="bottom" title="Analysieren und bewerten Sie ein Bildungsmedium" alt="Zum AAER">
						Zum AAER
					</a>
				</li>
				<li class="nav-item pl-5 pr-5 mt-3 mb-3" data-lang="En" style="display: none;">
				<a class="aaer_menu pt-2 d-md-inline-block text-white navigation_link text-center" href="survey.html" data-toggle="tooltip" data-placement="bottom" title="Analyze and evaluate an OER" alt="Go to the AAER">
					Go to the AAER
				</a>
			</li>
				<li class="nav-item pl-5 pr-5 mt-3 mb-3" data-lang="De">
					<a class="aaer_menu pt-2 d-md-inline-block text-white navigation_link" href="info.html" data-toggle="tooltip" data-placement="bottom" title="Erfahren Sie mehr über das AAER" alt="Mehr erfahren">
						Mehr
  					</a>
				</li>
				<li class="nav-item pl-5 pr-5 mt-3 mb-3" data-lang="En" style="display: none;">
				<a class="aaer_menu pt-2 d-md-inline-block text-white navigation_link" href="info.html" data-toggle="tooltip" data-placement="bottom" title="more" alt="more">
					More
				</a>
			</li>
				<li class="nav-item pl-5 pr-5 mt-3 mb-3" data-lang="De">
					<a class="aaer_menu py-2 d-md-inline-block text-white navigation_link" href="contact.html" data-toggle="tooltip" data-placement="bottom" title="Kontaktieren Sie uns bei Fragen rund um das AAER" alt="Kontakt">
						Kontakt
					</a>
				</li>
				<li class="nav-item pl-5 pr-5 mt-3 mb-3" data-lang="En" style="display: none;">
					<a class="aaer_menu py-2 d-md-inline-block text-white navigation_link" href="contact.html" data-toggle="tooltip" data-placement="bottom" title="Contact us if there are any questions about the AAER"  alt="Contact">
						Contact
					</a>
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