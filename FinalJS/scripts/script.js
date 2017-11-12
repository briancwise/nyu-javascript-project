function showPic(whichpic) {
    var source = whichpic.getAttribute("href"); //whichpic represents <a> that leads to image; store in variable
    var placeholder = document.getElementById("placeholder"); //gets to the placeholder image; store in variable
    placeholder.setAttribute("src" ,source); //update the src attribute of placeholder element; "source" is value to have

    var text = whichpic.getAttribute("title"); //get the value of title attribute of each image; store this value in text var.
    var description = document.getElementById("description"); //get the element with "description" id and store in var.
    description.firstChild.nodeValue = text; //update value of first child node of the description object w/value of text. 

}

// form validation
function validate() {
	var errorMsg = "";

	document.getElementById("f1").className = "hide";
	document.getElementById("f2").className = "hide";
	document.getElementById("f3").className = "hide";
	document.getElementById("f4").className = "hide";
	document.getElementById("f5").className = "hide";

    if (document.newsletter.firstname.value === '') {                      // validate first name
    	document.getElementById("f1").className = "show";
    	errorMsg = "yes";
    }

     if (document.newsletter.lastname.value === '') {                      // validate last name
     	document.getElementById("f2").className = "show";
     	errorMsg = "yes";
     }

    if (document.newsletter.frequency[0].checked === false &&                   // validate frequency 
    	document.newsletter.frequency[1].checked === false &&
    	document.newsletter.frequency[2].checked === false ) {  
    	document.getElementById("f3").className = "show";
    errorMsg = "yes";
}

    var enteredDevices = '';                                            // validate devices
    for (var i = 0; i < document.getElementById("choice").length; i++)
    {
    	if (document.getElementById("choice").options[i].selected)
    		enteredDevices += document.newsletter.devices.options[i].value + " ";
    }

    if (enteredDevices === '') { 
    	document.getElementById("f4").className = "show";
    	errorMsg = "yes";
    }

    if (errorMsg !== '') {                                           //--- if there are errors
    	document.getElementById("f5").className = "show";
    	return(false);
    }

    var submit = confirm('Please confirm your order...');             //--- confirm submission
    if (submit === false)                                            //    if click on Cancel
        return(false);                                              //    do not submit

    return(true);
}

// set cookie
document.cookie = "username=ChicagoSymphony; expires=Mon, 31 Dec 2018 23:59:59 UTC";

function setCookie(cookiename, cookievalue, expiration) {
	var d = new Date();
	d.setTime(d.getTime() + (expiration*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cookiename + "=" + cookievalue + ";" + expires + ";path=/";
}

// retrieve cookie - Note: this code breaks the top "showpic" function.
// var myCookies = document.cookie;
// var cookieArray = myCookies.split("; ");
// for (i=0; i < cookieArray.length; i++) {
// 	nameValueString = cookieArray[i];
// 	nameValueArray = nameValueString.split("=");
// 	cookieName = nameValueArray[0]; 
// 	cookieValue = nameValueArray[1];
// 	