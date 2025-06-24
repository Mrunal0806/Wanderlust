class Expresserror extends Error {
    constructor(message, statuscode) {
        this.message = message;
        this.statuscode = statuscode;
    }
}   

module.exports = Expresserror;