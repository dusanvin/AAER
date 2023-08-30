function display_footer() {
	var container = document.getElementById("footer_container");
	container.innerHTML =
		`
		<div class="wave">
	  		<svg viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,160L48,160C96,160,192,160,288,176C384,192,480,224,576,229.3C672,235,768,213,864,186.7C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg></section>
  		</div>
		<!-- Footer Start -->
		<div style="background-color: white;" >
		  <footer class="container py-5 text-dark text-center text-sm-left">
		    <div class="row">
		      <div class="col-12 col-md pr-xs-0 pr-sm-0 pr-md-5 mr-lg-5 mb-5">
		      	<div class="image ml-0 ml-sm-3">
		          <figure>
		            <img class="image-img" src="/img/sophie/AAER-Logo_RGB-Gradient.png" width="190">
		          </figure>
		        </div>
		        <div class="image">
		          <figure>
		            <img class="image-img" src="https://aaer.zlbib.uni-augsburg.de/img/Uni_Aug_Logo_ZDL_RGB_small.png" width="230">
		          </figure>
		        </div>
		        <small class="d-block mb-3 ml-3 text-center text-sm-left"><br><strong>Version 1.1: 08/2023;</strong><br><br> Lizenz des AAERs:<br>&copy; 2020 Universität Augsburg / Dr. Carl-Christian Fey. <br><br> Lizenz der digitalen Version:<br><a class="text-dark" href="https://aaer.zlbib.uni-augsburg.de">https://aaer.digillab.uni-augsburg.de</a> von <a class="text-dark" href="https://github.com/dusanvin">Vincent Dusanek</a> und Norman Szabo für <a class="text-dark" href="https://digillab.uni-augsburg.de">DigiLLab</a>, 2023. MIT-Lizenz.</small>
		    </div>

		    <div class="col-6 col-md ml-xs-0 ml-sm-0 ml-md-5 ml-lg-5 mb-3">

		      <h5>Allgemein</h5>

		      <ul class="list-unstyled text-small">

		        <li><a class="text-dark" href="contact.html">Kontakt</a></li>

		        <li><a class="text-dark" href="info.html">Informationen</a></li>

		        <li><a class="text-dark" href="log.html">Log</a></li>

		        <!-- <li><a class="text-dark" href="survey.html">Teilnehmen</a></li> -->

		      </ul>

		    </div>

		      <div class="col-6 col-md mb-3">

		        <h5>Organisation</h5>

		        <ul class="list-unstyled text-small">

		          <li><a class="text-dark" href="https://digillab.zlbib.uni-augsburg.de/">DigiLLab</a></li>

		          <li><a class="text-dark" href="https://www.uni-augsburg.de/de/forschung/einrichtungen/institute/zlbib/">ZLbiB</a></li>

		        </ul>

		      </div>

		      <div class="col-6 col-md mb-3">

		        <h5>Onlinedienste</h5>

		        <ul class="list-unstyled text-small">

		          <li><a class="text-dark" href="https://aaer.zlbib.uni-augsburg.de">AAER</a></li>

		          <li><a class="text-dark" href="https://digipad.zlbib.uni-augsburg.de">DIGIPAD</a></li>

		        </ul>

		      </div>

		      <div class="col-6 col-md mb-3">

		        <h5>Über</h5>

		        <ul class="list-unstyled text-small">

		          <li><a class="text-dark" href="https://digillab.zlbib.uni-augsburg.de/impressum/">Impressum</a></li>

		          <li><a class="text-dark" href="https://www.uni-augsburg.de/de/impressum/datenschutz/">Datenschutz</a></li>

		        </ul>

		      </div>

		    </div>

		  </footer>

		  </div>

		<!-- Footer End -->

	`;
}

display_footer();