//
// DATA
//
module.exports = {

    debug: 'false',

    type: 'decs', // ['pecs','decs']
    letter: 'pcn', // ['enquiry','pcn','scn']
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
    },

    settings: {
        'v5-enquiry': {
            allowExpedite : 'true', // Use this to switch on/off the UR route for Expedite a PCN
            type: 'pecs',
            version: 'a' // ['a','b']
        }
    }

};