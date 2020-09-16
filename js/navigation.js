function display_navigation() {
	var container = document.getElementById("navigation_container");
	container.innerHTML =
		`

		<!-- Navigation Start -->

		<nav class="navbar navbar-expand-lg pt-3 mt-0 navbar-dark mb-3">

		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  
		  <div class="collapse navbar-collapse justify-content-md-center" id="navbarNavAltMarkup">

		    <ul class="navbar-nav">

				<li class="nav-item pl-5 pr-5 mt-3 mb-3">

					<a class="aaer_menu py-2 d-md-inline-block text-white navigation_link" href="index.html">Home</a>

				</li>

				<li class="nav-item pl-5 pr-5 mt-3 mb-3">

					<a class="aaer_menu py-2 d-md-inline-block text-white navigation_link text-center" href="survey.html">Zum AAER</a>

				</li>

				<li class="nav-item pl-5 pr-5 mt-3 mb-3">

					<a class="aaer_menu py-2 d-md-inline-block text-white navigation_link" href="info.html">Mehr Erfahren</a>

				</li>
				
				<li class="nav-item pl-5 pr-5 mt-3 mb-3">

					<a class="aaer_menu py-2 d-md-inline-block text-white navigation_link" href="contact.html">Kontakt</a>

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

// Hinzufügen der Klasse active für das akteulle Element im DOM
$(document).ready(function() {
    $('a[href$="' + active + '"]').addClass('active');
});

// Ende: Hervorhebung des Active-Elements in der Navigation

display_navigation();