/*
  Documentation for will reg ex lib
*/

function WillRegEx() {

    /* Some necessary expressions */
    this.constants = {
        NO_PROCCESS = 'Nothing processed'
    }

    /* Store the last error found */
    this.lastError = '';

    /* Control the class version by coding */
    this.classVersion = function() {
        return '1.00';
    }

    /* Returns the last error found */
    this.getLastError = function() {
        return this.lastError;
    }

    /* ONLY NUMBERS regexp validation */
    this.onlyNumbers = function(content) {
        this.lastError = this.constants.NO_PROCCESS;

        return false;
    }

    /* --- create routine --- */
    console.log('WillRegEx ' + this.classVersion() + ' was created.');

}

/* creates a new WillRegEx object */
const willRegEx = new WillRegEx();