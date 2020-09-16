function display_footer() {
	var container = document.getElementById("footer_container");
	container.innerHTML =
		`

		<div class="wave">

	  		<svg viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,160L48,160C96,160,192,160,288,176C384,192,480,224,576,229.3C672,235,768,213,864,186.7C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg></section>
	  	
  		</div>

		<!-- Footer Start -->

		<div style="background-color: white;" >

		  <footer class="container py-5 text-dark">

		    <div class="row">

		      <div class="col-12 col-md pr-xs-0 pr-sm-0 pr-md-5 mr-lg-5 mb-5">

		        <div class="image">
		    
		          <figure>

		            <img class="image-img" src="https://assets.uni-augsburg.de/media/filer_public_thumbnails/filer_public/13/bf/13bf55b7-1c18-4cd5-beb3-c06308004042/uni_aug_logo_zlbib_cmyk.png__1080x2000_q85_subject_location-2655%2C481_subsampling-2.png" width="200">

		            <figcaption class="image-caption" style="font-size: 8pt; margin-top:5px;">
		              
		                    Das DigiLLab ist eine Einrichtung innerhalb des ZLbiB.
		                </figcaption>

		          </figure>

		        </div>

		        <small class="d-block mb-3"><br>Version 0.3: 9/2020; <br><br> Das AAER steht unter Copyright: <br>&copy; 2020 Universität Augsburg / Dr. Carl- Christian Fey. <br><br><a class="text-dark" href="https://aaer.zlbib.uni-augsburg.de">aaer.zlbib.uni-augsburg.de</a> von <a class="text-dark" href="https://www.researchgate.net/profile/Vincent_Dusanek">Vincent Dusanek</a> für <a class="text-dark" href="https://www.uni-augsburg.de/de/forschung/einrichtungen/institute/zlbib/digillab/">DigiLLab</a>, 2020. Lizenz:  <a class="text-dark" href="https://creativecommons.org/licenses/by-sa/4.0/deed.de">CC BY-SA 4.0</a>.</small>

		    </div>

		    <div class="col-6 col-md ml-xs-0 ml-sm-0 ml-md-5 ml-lg-5 mb-3">

		      <h5>Allgemein</h5>

		      <ul class="list-unstyled text-small">

		        <li><a class="text-dark" href="#">Hilfe</a></li>

		        <li><a class="text-dark" href="#">Lizenz</a></li>

		        <li><a class="text-dark" href="#">Kontakt</a></li>

		        <li><a class="text-dark" href="#">Teilnehmen</a></li>

		        <li><a class="text-dark" href="info.html">Informationen</a></li>

		      </ul>

		    </div>

		      <div class="col-6 col-md mb-3">

		        <h5>Organisation</h5>

		        <ul class="list-unstyled text-small">

		          <li><a class="text-dark" href="#">Team</a></li>

		          <li><a class="text-dark" href="#">DigiLLab</a></li>

		          <li><a class="text-dark" href="#">ZLbiB</a></li>

		        </ul>

		      </div>

		      <div class="col-6 col-md mb-3">

		        <h5>Onlinedienste</h5>

		        <ul class="list-unstyled text-small">

		          <li><a class="text-dark" href="#">AAER</a></li>

		          <li><a class="text-dark" href="#">DIGINEWS</a></li>

		          <li><a class="text-dark" href="#">DIGIPAD</a></li>

		        </ul>

		      </div>

		      <div class="col-6 col-md mb-3">

		        <h5>Über</h5>

		        <ul class="list-unstyled text-small">

		          <li><a class="text-dark" href="https://digillab.zlbib.uni-augsburg.de/impressum/">Impressum</a></li>

		          <li><a class="text-dark" href="#">Datenschutz</a></li>

		        </ul>

		      </div>

		    </div>

		  </footer>

		  </div>

		<!-- Footer End -->

	`;
}

display_footer();