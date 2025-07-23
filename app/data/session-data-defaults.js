//
// DATA
//
module.exports = {

    debug: 'false',

    type: 'pecs', // ['pecs','decs']
    letter: 'enquiry', // ['enquiry','pcn','scn']
    status: 'default', // ['default','not-found','dd-blocked'],
    exemption: 'bsa', // ['bsa','dwp']

    amounts: {
        pecs: {
            amountOwed: 9.90,
            amountPenalty: 50,
            amountSurcharge: 50,
            amountPaid: 0
        },
        decs: {
            amountOwed: 27.40,
            amountPenalty: 50,
            amountSurcharge: 50,
            amountPaid: 0
        }
    }

};