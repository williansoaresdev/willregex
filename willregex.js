/*
  Documentation for will reg ex lib
*/

function WillRegEx() {

    /* Some necessary expressions */
    this.constants = {
        NO_ERROR: '',
        NO_NUMBERS: 'Only numbers from 0 to 9 was expected',
        NO_PROCCESS: 'Nothing processed'
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

        /* RegExp for macth when find something is not a number */
        const re = /[^0-9]/;
        const haveOtherSymbols = re.test(content); /* test the expression */

        /* Apply the correct message error */
        this.lastError = (haveOtherSymbols) ? NO_NUMBERS : NO_ERROR;

        /* Returns the result */
        return (!haveOtherSymbols);
    }

    /* --- create routine --- */
    console.log('WillRegEx ' + this.classVersion() + ' was created.');

}

/* creates a new WillRegEx object */
const willRegEx = new WillRegEx();