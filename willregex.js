/*
  Documentation for will reg ex lib
*/

function WillRegEx() {

    this.classVersion = function() {
        return '1.00';
    }

    /* --- create routine --- */
    console.log('WillRegEx ' + this.classVersion() + ' was created.');

}

/* creates a new WillRegEx object */
const willRegEx = new WillRegEx();