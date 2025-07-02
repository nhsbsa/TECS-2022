const express = require('express');
const router = express.Router();


router.post(/configure-prototype/, function (req, res) {
    const destination = 'start';
    res.redirect( destination );
});

router.post(/enter-reference-number-again/, function (req, res) {
    const destination = 'date-of-birth';
    res.redirect( destination );
});

router.post(/enter-reference-number/, function (req, res) {
    const destination = 'enter-reference-number-again';
    res.redirect( destination );
});

router.post(/date-of-birth/, function (req, res) {
    const destination = 'enter-postcode';
    res.redirect( destination );
});

router.post(/enter-postcode/, function (req, res) {
    const destination = 'pcn-details';
    res.redirect( destination );
    
});

router.post(/pcn-details/, function (req, res) {
    const destination = 'what-you-want-to-do-next';
    res.redirect( destination );
    
});


router.post(/what-you-want-to-do-next/, function (req, res) {
    const { confirm } = req.body; // ID from the radio buttons

    let destination;
    if (confirm === 'pay-pcn') {
        destination = 'payment-method';
    } else {
        destination = 'what-happens-next';
    }

    res.redirect(destination);
});

router.post(/what-happens-next/, function (req, res) {
    const destination = 'confirm-entitlement';
    res.redirect( destination );
    
});

router.post(/confirm-entitlement/, function (req, res) {
    const { benefit } = req.body; // ID from the radio buttons

    let destination;
    if (benefit === 'yes') {
        destination = 'exemption-certificate-number';
    } else if (benefit === 'no'){
        destination = 'did-you-have-an-exemption';
    } else {
        destination ='#'; //validation for no selected radio button
    }

    res.redirect(destination);
});

router.post(/exemption-certificate-number/, function (req, res) {
    const { exemptionNumber } = req.body; // ID from the radio buttons

    let destination;
    if (exemptionNumber === 'yes') {
        destination = 'contact-preferences';
    } else if (exemptionNumber === 'no'){
        destination = 'check-personal-details';
    } else {
        destination ='#'; //validation for no selected radio button
    }

    res.redirect(destination);
});

router.post(/check-personal-details/, function (req, res) {
    const destination = 'cannot-confirm';
    res.redirect( destination );
    
});

router.post(/cannot-confirm/, function (req, res) {
    const destination = 'payment-method';
    res.redirect( destination );
    
});

router.post(/payment-method/, function (req, res) {
    const { paymentType } = req.body; // ID from the radio buttons

    let destination;
    if (paymentType === 'debit-credit-card') {
        destination = 'pay-by-card';
    } else if (paymentType === 'direct-debit'){
        destination = 'pay-by-dd';
    } else {
        destination ='#'; //validation for no selected radio button
    }

    res.redirect(destination);
});

router.post(/pay-by-card/, function (req, res) {
    const { amount } = req.body; // ID from the radio buttons

    let destination;
    if (amount === 'fullAmount') {
        destination = 'gov-pay';
    } else if (amount === 'partialPayment'){
        destination = 'partial-payment';
    } else {
        destination ='#'; //validation for no selected radio button
    }

    res.redirect(destination);
});

router.post(/payment-made/, function (req, res) {
    const destination = 'payment-method';
    res.redirect( destination );
    
});

router.post(/contact-preferences/, function (req, res) {
    const destination = 'what-is-your-email';
    res.redirect( destination );
    
});

router.post(/what-is-your-email/, function (req, res) {
    const destination = 'what-is-your-phone-number';
    res.redirect( destination );
    
});

router.post(/what-is-your-phone-number/, function (req, res) {
    const destination = 'check-contact-details';
    res.redirect( destination );
    
});

router.post(/check-contact-details/, function (req, res) {
    const destination = 'reviewing-case';
    res.redirect( destination );
    
});


router.post(/did-you-have-an-exemption/, function (req, res) {
    const { exemptions } = req.body;

    let destination;
    if (['medex-cert' , 'matex-cert' , 'ppc-cert' , 'hc2-cert' , 'tax-credit-cert'].includes(exemptions)) {
        destination = 'exemption-certificate-number';
    } else if (exemptions === 'none-of-these') {
        destination = 'were-you-claiming-any-benefits';
    } else {
        destination = '#';
    }

    res.redirect(destination);
});

// router.post(/were-you-claiming-any-benefits/, function (req, res) {
//     const { claimBenefits } = req.body;

//     let destination;
//     if (['income-employment-support' , 'jsa' , 'universal-credit' , 'pension-credit-guarantee'].includes(claimBenefits)) {
//         destination = 'check-personal-details';
//     } else if (claimBenefits === 'none-of-these') {
//         destination = 'medical-conditions';
//     } else {
//         destination = '#';
//     }

//     res.redirect(destination);
// });

router.post(/were-you-claiming-any-benefits/, function (req, res) {
    const destination = 'reviewing-case';
    res.redirect( destination );
    
});

module.exports = router;