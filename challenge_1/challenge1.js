/**
 * Using the LocalStorage API, save the contents of the text box
 * when users click the "save" button. 
 * Load the saved text when users click the "Load" button.
 *
 * Here's the documentation you need:
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */

var saveButton = $('#save-button');
var loadButton = $('#load-button');


// Save data to the current local store
//localStorage.setItem('#save-me');

// Access some stored data
//alert( "#save-me = " + localStorage.getItem("#save-me"));

/**
 * Gets the text from the element for you
 * @return {String}
 */
function getText() {
	return $('#save-me').val();
}


/**
 * Puts different text
 * @param {String} text the stuff you want to put in the box
 */
function setText(text) {
 return $('#save-me').val(text);
}


/**
*Sets 'savedText' to whatever is typed in #save-button on clicking the save button.
*
*/
$('#save-button').click(function() {
   localStorage.setItem('savedText', getText());
})

/**
*Gets 'savedText' and displays it in "#save-me" on clicking the load button.
*
*/
$('#load-button').click(function() {
   setText(localStorage.getItem('savedText'));
})
