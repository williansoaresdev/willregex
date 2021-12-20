/*
  Documentation for will reg ex lib
*/

function WillRegEx() {

    /* Some necessary expressions */
    this.constants = {
        EMPTY_VALUE: 'Empty content. Type something',
        NO_CAPITAL: 'Please begin the expression with capital letter',
        NO_ERROR: '',
        NO_NUMBERS: 'Only numbers from 0 to 9 was expected',
        NO_PROCCESS: 'Nothing processed',
        RETURN_EXPR: 'expr'
    }

    /* All the RegExp used */
    this.expressions = {
        INITIAL_CAPITAL_LETTER: /^[A-Z]/,
        ONLY_NUMBERS: /[^0-9]/
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

    /* INITIAL CAPITAL LETTER validation */
    this.initialCapitalLetter = function(content) {
        this.lastError = this.constants.NO_PROCCESS;

        /* Check the is empty property */
        if (this.failIfIsEmpty && (content == "")) {
            this.lastError = this.constants.EMPTY_VALUE;
            return false;
        }

        /* Check if the expression starts with capital letter */
        this.matchResult = (this.expressions.INITIAL_CAPITAL_LETTER.test(content));

        /* Apply the correct message error */
        this.lastError = (this.matchResult) ? this.constants.NO_ERROR : this.constants.NO_CAPITAL;;

        return this.matchResult;        
    }

    /* Returns the expression as a String */
    this.initialCapitalLetterToString = function() {
        return this.expressions.INITIAL_CAPITAL_LETTER.toString();
    }

    /* ONLY NUMBERS regexp validation */
    this.onlyNumbers = function(content) {
        this.lastError = this.constants.NO_PROCCESS;

        /* Check the is empty property */
        if (this.failIfIsEmpty && (content == "")) {
            this.lastError = this.constants.EMPTY_VALUE;
            return false;
        }

        /* RegExp for macth when find something is not a number */
        const haveOtherSymbols = this.expressions.ONLY_NUMBERS.test(content); /* test the expression */

        /* Apply the correct message error */
        this.lastError = (haveOtherSymbols) ? this.constants.NO_NUMBERS : this.constants.NO_ERROR;

        /* Match result */
        this.matchResult = (!haveOtherSymbols);

        return this.matchResult;
    }

    /* Returns the expression as a String */
    this.onlyNumbersToString = function() {
        return this.expressions.ONLY_NUMBERS.toString();
    }

    /* --- create routine --- */
    console.log('WillRegEx ' + this.classVersion() + ' was created.');

}

/* creates a new WillRegEx object */
const willRegEx = new WillRegEx();