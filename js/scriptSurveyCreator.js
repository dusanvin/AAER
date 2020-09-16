//Step 4.1 Show Survey Creator on the page. Inside your web page
var options = {
	showEmbededSurveyTab: true,
	// aus Tutorial
	showLogicTab: true,
  	//Step 6. Customize Survey Creator via options
    // show the embedded survey tab. It is hidden by default
    showEmbededSurveyTab : true,
    // hide the test survey tab. It is shown by default
    showTestSurveyTab : true,
    // hide the JSON text editor tab. It is shown by default
    showJSONEditorTab : true,
    // show the "Options" button menu. It is hidden by default 
    showOptions: true 
}; //see examples below

// pass the options into the constructor. It is an optional parameter.
var creator = new SurveyCreator.SurveyCreator(
	"creatorElement", 
	options
);