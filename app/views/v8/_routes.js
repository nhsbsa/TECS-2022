const express = require('express');
const router = express.Router();

router.get(/start-redirect/, function(req, res){
    const destination = 'enter-reference-number';
    res.redirect( destination );
});

router.get(/configure-prototype/, function (req, res) {
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
    
    const destination = ( req.session.data.status === 'not-found' ) ? 'cannot-find-your-details' : 'pcn-details';
    res.redirect( destination );

});

router.post(/pcn-details/, function (req, res) {
    const destination = 'what-you-want-to-do-next';
    res.redirect( destination );
    
});

router.post(/what-you-want-to-do-next/, function (req, res) {
    const { confirm } = req.body; // ID from the radio buttons

    let destination;

    switch( confirm ){
       
        case 'confirm-entitled':
            destination = 'what-happens-next';
            break;

        case 'what-happens-next':
            destination = 'you-will-be-sent-a-pcn';
            break;

         case 'pay-pcn':
            destination = 'payment-method';
            break;

        default:
            destination = 'what-happens-next';
            break;
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

    req.session.data.amount = amount;

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

router.post(/partial-payment/, function (req, res) {
    const destination = 'gov-pay';
    res.redirect( destination );
    
});

router.post(/payment-made/, function (req, res) {
    const destination = 'payment-method';
    res.redirect( destination );
    
});

router.post(/contact-preferences/, (req, res) => {
    let { contactPreferences } = req.body;

        // make sure options are stored as array in case only one checkbox is selected
    if (!Array.isArray(contactPreferences)) {
        contactPreferences = contactPreferences ? [contactPreferences] : [];
    }

    // Store in session
    req.session.data.contactPreferences = contactPreferences;


    if (contactPreferences.includes('email')) {
        // First go to email input if email selected (even if both are selected)
        res.redirect('what-is-your-email');
    } else if (contactPreferences.includes('telephone')) {
        // If only telephone selected
        res.redirect('what-is-your-phone-number');
    } else {
        // If neither selected, validation fallback
        res.redirect('#');
    }
});

// router.post(/contact-preferences/, function (req, res) {
//     const destination = 'what-is-your-email';

//     res.redirect( destination );
    
// });

router.post(/what-is-your-email/, function (req, res) {
  const contactPreferences = req.session.data.contactPreferences || [];

    if (contactPreferences.includes('telephone')) {
        res.redirect('what-is-your-phone-number');
    } else {
        res.redirect('check-contact-details');
    }
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

router.post(/were-you-claiming-any-benefits/, function (req, res) {
    const { claimBenefits } = req.body;

    let destination;
    if (['income-employment-support' , 'jsa' , 'universal-credit' , 'pension-credit-guarantee'].includes(claimBenefits)) {
        destination = 'check-personal-details';
    } else if (claimBenefits === 'none-of-these') {
        destination = 'medical-conditions';
    } else {
        destination = '#';
    }

    res.redirect(destination);
});

router.post(/medical-conditions/, function (req, res) {
    const { medicalConditions } = req.body; // ID from the radio buttons

     req.session.data.medicalConditions = medicalConditions;

    let destination;
    if (medicalConditions === 'yes') {
        destination = 'no-valid-exemption';
    } else if (medicalConditions === 'no'){
        destination = 'maternity-exemption';
    } else {
        destination ='#'; //validation for no selected radio button
    }

    res.redirect(destination);
});

router.post(/maternity-exemption/, function (req, res) {
    const { maternityExemption } = req.body; // ID from the radio buttons

    let destination;
    if (maternityExemption === 'yes') {
        destination = 'no-valid-exemption';
    } else if (maternityExemption === 'no'){
        destination = 'cannot-confirm';
    } else {
        destination ='#'; //validation for no selected radio button
    }

    res.redirect(destination);
});

router.post(/no-valid-matex/, function (req, res) {
    const { payment } = req.body; // ID from the radio buttons

    let destination;
    if (payment === 'pay-prescription') {
        destination = 'pay-apply';
    } else if (payment === 'pay-charge'){
        destination = 'payment-method';
    } else {
        destination ='#'; //validation for no selected radio button
    }

    res.redirect(destination);
});

router.post(/pay-apply/, function (req, res) {
    const destination = 'payment-method';
    res.redirect( destination );
    
});

module.exports = router;