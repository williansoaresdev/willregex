/*
  Documentation for will reg ex lib
*/

function WillRegEx() {

    /* Some necessary expressions */
    this.constants = {
        EMPTY_VALUE: 'Empty content. Type something',
        NO_ERROR: '',
        NO_NUMBERS: 'Only numbers from 0 to 9 was expected',
        NO_PROCCESS: 'Nothing processed',
        RETURN_EXPR: 'expr'
    }

    /* Allow to fail if the content to test is empty */
    this.failIfIsEmpty = true;

    /* Store the last error found */
    this.lastError = '';

    /* Store the match result */
    this.matchResult = false;

    /* Control the class version by coding */
    this.classVersion = function() {
        return '1.00';
    }

    /* Returns the last error found */
    this.getLastError = function() {
        return this.lastError;
    }

    /* ONLY NUMBERS regexp validation */
    this.onlyNumbers = function(content, returnExpr) {
        this.lastError = this.constants.NO_PROCCESS;

        /* Check the is empty property */
        if (this.failIfIsEmpty && (content == "")) {
            this.lastError = this.constants.EMPTY_VALUE;
            return false;
        }

        /* RegExp for macth when find something is not a number */
        const re = /[^0-9]/;
        const haveOtherSymbols = re.test(content); /* test the expression */

        /* Apply the correct message error */
        this.lastError = (haveOtherSymbols) ? this.constants.NO_NUMBERS : this.constants.NO_ERROR;

        /* Match result */
        this.matchResult = (!haveOtherSymbols);

        /* Returns the result (expression or match) */
        return (returnExpr) ? re.toString() : this.matchResult;
    }

    /* --- create routine --- */
    console.log('WillRegEx ' + this.classVersion() + ' was created.');

}

/* creates a new WillRegEx object */
const willRegEx = new WillRegEx();