// External dependencies
const express = require('express');
const router = express.Router();

/**
 * Import shared validation helpers
 * --------------------------------------------
 * These are used across multiple routes to avoid duplication
 */
const {
  validateRequired,
  isValidEmail,
  isInList,
  setError,
  clearError
} = require('./helpers/validation');



///////////////////////
// ///V3 Routing///////
//////////////////////
// this is version 3 of the prototype //


router.get(/v3-postcode-input/, function (req, res) {
  if (req.query.postcode == 'NE1 3JA') {
    res.redirect('enquiry-letter-details');
  } else if (req.query.postcode == 'NE2 4XL') {
    res.redirect('enquiry-letter-details-copy');;
  }
  else if (req.query.postcode == 'WA4 1AB') {
    res.redirect('cannot-find-your-details');;
  }
  else if (req.query.postcode == 'WAH 3BE') {
    res.redirect('more-information-needed');;
  }
  else {
    res.redirect('cannot-find-your-details');
  }
});

router.get(/benefit-exemption/, function (req, res) {
  if (req.query.exemption == 'yes') {
    res.redirect('exemption-certificate-number');
  }
  else if (req.query.exemption == 'no') {
    res.redirect('did-you-have-an-exemption');;
  }
});

router.get(/cert-number/, function (req, res) {
  if (req.query.number == 'yes') {
    res.redirect('enter-exemption-certificate-number');
  }
  else if (req.query.number == 'no') {
    res.redirect('check-personal-details');;
  }
});

router.get(/nhs-exemption/, function (req, res) {
  if (req.query.nhs == 'med') {
    res.redirect('check-name');
  }
  else if (req.query.nhs == 'mat') {
    res.redirect('check-name');
  }
  else if (req.query.nhs == 'ppc') {
    res.redirect('check-name');
  }
  else if (req.query.nhs == 'hc2') {
    res.redirect('check-name');
  }
  else if (req.query.nhs == 'tc') {
    res.redirect('check-name');
  }
  else if (req.query.nhs == 'no') {
    res.redirect('were-you-claiming-any-benefits');
  }
});
router.get(/benefit-between/, function (req, res) {
  if (req.query.benefit == 'yes') {
    res.redirect('check-name');
  }
  else if (req.query.benefit == 'no') {
    res.redirect('did-you-have-an-exemption');;
  }
});

router.get(/other-exemption/, function (req, res) {
  if (req.query.exemption == 'income') {
    res.redirect('check-name');
  }
  else if (req.query.exemption == 'support') {
    res.redirect('check-name');
  }
  else if (req.query.exemption == 'uc') {
    res.redirect('check-name');
  }
  else if (req.query.exemption == 'pension') {
    res.redirect('check-name');
  }
  else if (req.query.exemption == 'no') {
    res.redirect('cannot-confirm-entitlement');
  }
});
router.get(/check-name-input/, function (req, res) {
  if (req.query.name == 'yes') {
    res.redirect('check-dob');
  }
  else if (req.query.name == 'no') {
    res.redirect('update-name');;
  }
});
router.get(/check-dob-input/, function (req, res) {
  if (req.query.dob == 'yes') {
    res.redirect('check-address');
  }
  else if (req.query.dob == 'no') {
    res.redirect('update-dob');;
  }
});
router.get(/check-address-input/, function (req, res) {
  if (req.query.address == 'yes') {
    res.redirect('check-personal-details');
  }
  else if (req.query.address == 'no') {
    res.redirect('update-address');;
  }
});

router.get(/certificate-number-input/, function (req, res) {
  if (req.query.certificatenumber == '9876543210') {
    res.redirect('exemption-confirmed');
  } else if (req.query.certificatenumber == '0123456789') {
    res.redirect('check-name');;
  }

});

///////////////////////
// ///V4 Routing///////
//////////////////////

router.get(/v4-postcode-input/, function (req, res) {
  if (req.query.postcode == 'NE1 3JA') {
    res.redirect('enquiry-letter-details');
  } else if (req.query.postcode == 'NE2 4XL') {
    res.redirect('enquiry-letter-details-copy');;
  }
  else if (req.query.postcode == 'WA4 1AB') {
    res.redirect('cannot-find-your-details');;
  }
  else if (req.query.postcode == 'WAH 3BE') {
    res.redirect('');;
  }
  else {
    res.redirect('cannot-find-your-details');
  }
});

router.get(/benefit-exemption/, function (req, res) {
  if (req.query.exemption == 'yes') {
    res.redirect('exemption-certificate-number');
  }
  else if (req.query.exemption == 'no') {
    res.redirect('did-you-have-an-exemption');;
  }
});


// router.post('/benefit-exemption', (req, res) => {

//   const exemption = req.session.data['exemption']

//   if (exemption === 'yes') {
//     res.redirect('/exemption-certificate-number')
//   } else {
//     res.redirect('/did-you-have-an-exemption')
//   }
// })

// router.post('/benefit-exemption-dwp', (req, res) => {

//   const exemption = req.session.data['exemption']

//   if (exemption === 'yes') {
//     res.redirect('oioi')
//   } else {
//     res.redirect('hellaw')
//   }
// })

router.get(/v4-cert-number/, function (req, res) {
  if (req.query.number == 'yes') {
    res.redirect('enter-exemption-certificate-number');
  }
  else if (req.query.number == 'no') {
    res.redirect('check-personal-details');;
  }
});

router.get(/v4-cert-number1/, function (req, res) {
  if (req.query.number == 'yes') {
    res.redirect('enter-exemption-certificate-number');
  }
  else if (req.query.number == 'no') {
    res.redirect('check-personal-details');;
  }
});

router.get(/version4-nhs/, function (req, res) {
  if (req.query.nhs == 'med') {
    res.redirect('exemption-certificate-number');
  }
  else if (req.query.nhs == 'mat') {
    res.redirect('exemption-certificate-number');
  }
  else if (req.query.nhs == 'ppc') {
    res.redirect('exemption-certificate-number');
  }
  else if (req.query.nhs == 'hc2') {
    res.redirect('exemption-certificate-number');
  }
  else if (req.query.nhs == 'tc') {
    res.redirect('exemption-certificate-number');
  }
  else if (req.query.nhs == 'no') {
    res.redirect('were-you-claiming-any-benefits');
  }
});

router.get(/version4-benefit/, function (req, res) {
  if (req.query.benefit4 == 'yes') {
    res.redirect('check-personal-details-dwp');
  }
  else if (req.query.benefit4 == 'no') {
    res.redirect('did-you-have-an-exemption');;
  }
});

router.get(/different-exemption/, function (req, res) {
  if (req.query.exemptiontype === "no") {
    res.redirect('cannot-confirm-entitlement');
  } else {
    res.redirect('check-personal-details');
  }
});


router.get(/enq-benefit-num/, function (req, res) {
  if (req.query.certificatenumber == '9876543210') {
    res.redirect('check-personal-details');
  } else if (req.query.certificatenumber == '0123456789') {
    res.redirect('confirmation-page');;
  } else if (req.query.certificatenumber == 'contact') {
    res.redirect('best-way-to-contact');;
  }
  else {
    res.redirect('enter-exemption-certificate-number')
  }

});

///////////////////////
// ///V5 Routing///////
//////////////////////

router.get(/pcn-postcode/, function (req, res) {
  if (req.query.postcode == 'NE1 3JA') {
    res.redirect('penalty-charge-notice-details');
  } else if (req.query.postcode == 'NE13JA') {
    res.redirect('penalty-charge-notice-details');
  }
  else if (req.query.postcode == 'NE2 4XL') {
    res.redirect('penalty-charge-notice-details-bsa');;
  }
  else if (req.query.postcode == 'NE24XL') {
    res.redirect('penalty-charge-notice-details-bsa');;
  }
  else if (req.query.postcode == 'WA4 1AB') {
    res.redirect('cannot-find-your-details');;
  }
  else if (req.query.postcode == 'WAH 3BE') {
    res.redirect('');;
  }
  else {
    res.redirect('cannot-find-your-details');
  }
});

router.get(/debit-card/, function (req, res) {
  if (req.query.debit == 'credit') {
    res.redirect('pay-by-card');
  }
  else if (req.query.debit == 'direct') {
    res.redirect('pay-by-dd');;
  }
});


router.get(/filter-options/, function (req, res) {
  if (req.query.confirm == 'entitlement') {
    res.redirect('what-happens-next-copy');
  }
  else if (req.query.confirm == 'pay') {
    res.redirect('you-will-be-sent-pcn');;
  }
});

router.get(/dwp-filter/, function (req, res) {
  if (req.query.confirm == 'entitlement') {
    res.redirect('what-happens-next');
  }
  else if (req.query.confirm == 'pay') {
    res.redirect('you-will-be-sent-pcn');;
  }
});

router.get(/penalty-confirm-pay/, function (req, res) {
  if (req.query.confirm == 'entitlement') {
    res.redirect('what-happens-next');
  }
  else if (req.query.confirm == 'pay') {
    res.redirect('payment-method');;
  }
});


router.get(/bsa-choice/, function (req, res) {
  if (req.query.confirm == 'entitlement') {
    res.redirect('what-happens-next-bsa');
  }
  else if (req.query.confirm == 'pay') {
    res.redirect('payment-method');;
  }
});

//  New route 
router.post(/claiming-any-benefits-old/, function (req, res) {

  const anyBenefits = req.session.data['exemptiontype']

  if (anyBenefits === 'no') {
    res.redirect('cannot-confirm');
  } else {
    res.redirect('check-personal-details-dwp');
  }


})


//route for dd checkbox

router.post(/dd-checkbox/, (req, res) => {

  const dd = req.session.data['contact'];

  console.log(dd.length)

  if (dd.length == '3') {
    res.redirect('direct-debit-instalment-option');// All items are checked


  } if (dd.length == '0') {
    res.redirect('unable-to-set-up-direct-debit');// All items are checked


  }
  else {
    res.redirect('unable-to-set-up-direct-debit'); // Send user to unable to setup dd

  }

});

router.get(/disabled-exemption/, function (req, res) {
  if (req.query.exemption == 'yes') {
    res.redirect('no-medex-radio');
  }
  else if (req.query.exemption == 'no') {
    res.redirect('mat-ex');;
  }
});

// router.get(/maternity-exemption/, function (req, res) {
//   if (req.query.exemption == 'yes') {
//     res.redirect('no-matex-radio');
//   }
//   else if (req.query.exemption == 'no') {
//     res.redirect('cannot-confirm-pcn');;
//   }
// });

router.get(/dwp-exemption-number/, function (req, res) {
  if (req.query.exemption == 'yes') {
    res.redirect('exemption-number');
  }
  else if (req.query.exemption == 'no') {
    res.redirect('cannot-find-details-matex');;
  }
});

router.get(/know-exemption-number/, function (req, res) {
  if (req.query.exemption == 'yes') {
    res.redirect('exemption-number');
  }
  else if (req.query.exemption == 'no') {
    res.redirect('check-personal-details');;
  }
});


router.get(/pay-choice/, function (req, res) {
  if (req.query.debit == 'credit') {
    res.redirect('partial-payment');
  }
  else if (req.query.debit == 'direct') {
    res.redirect('gov-pay');;
  }
});


router.get(/ex-number/, function (req, res) {

  if (req.query.number == '') {
    res.redirect('review-contact');
  }
  else {
    res.redirect('confirmation-page-dwp');;
  }
});


// router.get(/contact-method/, function (req, res) {
//   if (req.query.contact == 'email') {
//     res.redirect('what-is-your-email');
//   }
//   else if (req.query.contact == 'phone') {
//     res.redirect('what-is-your-phone');;
//   }
//   else if (req.query.contact == 'post') {
//     res.redirect('confirm-address');;
//   }
// });


router.get(/contact-method/, function (req, res) {

  const dd = req.session.data['contact'];

  if (dd == 'email') {
    res.redirect('what-is-your-email');// All items are checked


  } else if (dd == 'phone') {
    res.redirect('what-is-your-phone');// All items are checked


  }

  else if (dd.includes('email', 'phone')) {
    res.redirect('what-is-your-email-2'); // All items are checked
  }
  else if (dd == 'post') {
    res.redirect('confirm-address');// All items are checked


  }

});


router.get(/address-contact/, function (req, res) {
  if (req.query.contact == 'yes') {
    res.redirect('reviewing-case');
  }
  else if (req.query.contact == 'no') {
    res.redirect('what-is-your-address');;
  }
});

router.get(/version6-address/, function (req, res) {
  if (req.query.address == 'yes') {
    res.redirect('dd-check-answers');
  }
  else if (req.query.address == 'no') {
    res.redirect('what-is-your-address-dd');;
  }
});


router.post(/do-you-know-number/, function (req, res) {

  const exemption = req.session.data['exemption']
  const certNumber = req.session.data['certificatenumber']

  if (exemption == 'yes' && certNumber == '9876543210') {
    res.redirect('check-personal-details')
  } else if (exemption == 'yes' && certNumber == '0123456789') {
    res.redirect('confirmation-page');
  }
  else if (exemption == 'yes' && certNumber == '5432154321') {
    res.redirect('check-personal-details-medex');
  } else if (exemption == 'yes' && certNumber == 'contact') {
    res.redirect('best-way-to-contact')
  } else if (exemption == 'yes' && certNumber == '1234512345') {
    res.redirect('check-personal-details-ur')
  } else if (exemption == 'no') {
    res.redirect('check-personal-details');
  }

})



router.get(/version6-pcn/, function (req, res) {
  if (req.query.confirm == 'entitlement') {
    res.redirect('what-happens-next-bsa');
  }
  else if (req.query.confirm == 'pay') {
    res.redirect('payment-method');
  }
});

router.get(/dwp-version6/, function (req, res) {
  if (req.query.confirm == 'entitlement') {
    res.redirect('what-happens-next');
  }
  else if (req.query.confirm == 'pay') {
    res.redirect('payment-method');;
  }
});


router.post(/v6-dwp-benefits/, function (req, res) {

  const anyBenefits = req.session.data['exemptiontype']

  if (anyBenefits === 'no') {
    res.redirect('medical-conditions');
  } else {
    res.redirect('check-personal-details-dwp');
  }

});


router.get(/matex-pay/, function (req, res) {
  if (req.query.debit == 'credit') {
    res.redirect('how-to-pay-maternity');
  }
  else if (req.query.debit == 'direct') {
    res.redirect('payment-method');;
  }
});

router.get(/medex-pay/, function (req, res) {
  if (req.query.debit == 'credit') {
    res.redirect('how-to-pay');
  }
  else if (req.query.debit == 'direct') {
    res.redirect('payment-method');;
  }
});

router.get(/medex-cannot-find-details/, function (req, res) {
  if (req.query.debit == 'credit') {
    res.redirect('gov-pay-medex');
  }
  else if (req.query.debit == 'direct') {
    res.redirect('we-need-proof');;
  }
});

router.get(/medex-radios/, function (req, res) {
  if (req.query.debit == 'credit') {
    res.redirect('how-to-pay-2');
  }
  else if (req.query.debit == 'direct') {
    res.redirect('payment-method');;
  }
});

router.get(/no-matex-radios/, function (req, res) {
  if (req.query.debit == 'credit') {
    res.redirect('how-to-pay-maternity');
  }
  else if (req.query.debit == 'direct') {
    res.redirect('payment-method');;
  }
});

router.get(/matex-radios/, function (req, res) {
  if (req.query.debit == 'credit') {
    res.redirect('how-to-pay-maternity');
  }
  else if (req.query.debit == 'direct') {
    res.redirect('payment-method');;
  }
});



router.get(/full-partial/, function (req, res) {
  if (req.query.debit == 'credit') {
    res.redirect('payment-choice');
  }
  else if (req.query.debit == 'direct') {
    res.redirect('pay-by-dd');;
  }
});

// Version 6

// Pay by DD checkboxes - PECS

router.post('/v6-pcn/pay-by-dd', function (req, res) {
  const selectedCheckboxes = req.body.checkbox;

  console.log(selectedCheckboxes);

  // Check if all 3 checkboxes are selected
  if (Array.isArray(selectedCheckboxes) && selectedCheckboxes.indexOf('bank') > -1 && selectedCheckboxes.indexOf('account') > -1 && selectedCheckboxes.indexOf('direct') > -1) {
    // All checkboxes are selected, redirect to 'instalment' page
    res.redirect('/v6-pcn/direct-debit-instalment-option');
  } else {
    // Not all checkboxes are selected, redirect to 'unable to set up' page
    res.redirect('/v6-pcn/unable-to-set-up-direct-debit');
  }
});

// DD monthly instalment option - PECS

router.post('/v6-pcn/direct-debit-instalment-option', function (req, res) {
  const months = req.session.data['months'];

  if (months === "3" || months === "6" || months === "12") {
    res.redirect('/v6-pcn/direct-debit-date');
  } else {
    // If none of the options are selected don't progress
    res.redirect('/v6-pcn/direct-debit-instalment-option');
  }
});

// DD select payment date - PECS

router.post('/v6-pcn/direct-debit-date', function (req, res) {
  const day = req.session.data['day'];

  // Nah, just go for it...
  res.redirect('/v6-pcn/direct-debit-check-address');
  /*
  if (day > 0 &&  day <= 28) {
    // if day number is greater than 0 and less or equal to 28 progress
    res.redirect('/v6-pcn/direct-debit-check-address');
  } else {
    // if day number is greater than 28 don't progress
    res.redirect('/v6-pcn/direct-debit-date');
  }
    */
});

// DD check address is correct - PECS

router.post('/v6-pcn/direct-debit-check-address', function (req, res) {
  const address = req.session.data['address'];

  if (address === "yes") {
    res.redirect('/v6-pcn/dd-check-answers');
  } else if (address === "no") {
    res.redirect('/v6-pcn/what-is-your-address-dd');
  }
  else {
    // if no option selected don't progress
    res.redirect('/v6-pcn/direct-debit-check-address');
  }
});


//  Enter your bank details - PECS

router.post('/v6-pcn/enter-bank-details', function (request, response) {
  var accnumber = request.session.data['accnumber']
  if (accnumber === "12345679") {
    response.redirect("/v6-pcn/we-could-not-verify-your-details")
  } else {
    response.redirect("/v6-pcn/confirm-direct-debit")
  }
})

//  Enter your bank details - DECS

router.post('/v6-pcn-decs/enter-bank-details', function (request, response) {
  var accnumber = request.session.data['accnumber']
  if (accnumber === "12345679") {
    response.redirect("/v6-pcn/we-could-not-verify-your-details")
  } else {
    response.redirect("/v6-pcn-decs/confirm-direct-debit")
  }
})

//  You've told us that you were pregnant - DECS

router.post('/v6-pcn-decs/told-us-you-were-pregnant', function (req, res) {
  var sendProof = req.session.data['sendproof']
  if (sendProof == "pay") {
    res.redirect("/v6-pcn-decs/payment-method");
  }
  else {
    res.redirect("/v6-pcn-decs/we-need-proof-pregnant");
  }
});

// Cannot set up DD 3rd KYC failure - manual payment

router.post('/v6-pcn/kickout/cannot-set-up-dd-manual-payment', function (req, res) {
  let terms = req.session.data['terms']
  if (terms == "understand") {
    res.redirect("/v6-pcn/payment-choice");
  }
  else {
    res.redirect("/v6-pcn/kickout/cannot-set-up-dd-manual-payment-error");
  }
});

// Cannot set up DD 3rd KYC failure - manual payment (surcharge)

router.post('/v6-pcn/kickout/cannot-set-up-dd-manual-payment-surcharge', function (req, res) {
  let terms = req.session.data['terms']
  if (terms == "understand") {
    res.redirect("/v6-pcn/payment-choice");
  }
  else {
    res.redirect("/v6-pcn/kickout/cannot-set-up-dd-manual-payment-surcharge-error");
  }
});

// Experimental - Postcode lookup for address

router.post('/v6-pcn/experimental/what-is-your-address-postcode', function (req, res) {
  let postcode = req.session.data['postcode-search'];

  if (postcode && postcode.trim() !== '') {
    res.redirect('/v6-pcn/experimental/what-is-your-address-select');
  } else {
    // If blank don't progress
    res.redirect('/v6-pcn/experimental/what-is-your-address-postcode');
  }
});


/* SIMPLIFIED AND NEW RULES ROUTES */

router.post('/v6-pcn/partial-payment-NEW-RULES-ALREADY-PAID', function (req, res) {

  if (req.session.data.makeAnotherPayment === 'payInFull') {
    res.redirect('gov-pay');
  } else {
    res.redirect('partial-payment-NEW-RULES-ALREADY-PAID');
  }

});

router.post(/version6-pcn-SIMPLIFIED/, function (req, res) {

  let destination = 'what-happens-next-bsa';

  switch (req.session.data['penalty-confirm-pay']) {
    case 'pay':
      destination = 'payment-choice';
      break;
  }

  res.redirect(destination);


});

router.post(/payment-plan-calculator-date-reset/, function (req, res) {

  delete req.session.data.calculatorAmountToPay;
  delete req.session.data.calculatorNumberOfMonths;
  delete req.session.data.calculatorStartDate;

  res.redirect('payment-plan-calculator-date');

});


// Routes for UR Feb 2025
router.use('/user-research-feb-2025', require('./views/user-research-feb-2025/\_routes'));








//
// DETECT CURRENT VERSION
//
router.use((req, res, next) => {

  console.log('----------------------------------');
  console.log(req.originalUrl);

  // Versions
  const versions = ['v7', 'v5-enquiry', 'v5-enquiry-decs'];

  // Clear current routes 
  router.stack = router.stack.filter(layer => layer.name !== 'router');

  // Get the current version needed
  let version = '';
  versions.forEach(function (vers) {
    if (req.originalUrl.toLowerCase().indexOf('/' + vers + '/') > -1) {
      version = vers;
    }
  });

  res.locals.version = version;

  // Load the required routes
  if (version) {
    console.log('Loading routes for ' + version);
    router.use('/' + version, require('./views/' + version + '/_routes'));
  }

  // Allow URL strings such as key[anotherKey][yetAnotherKey]
  if (req.originalUrl.split('?').length > 1) {

    const params = new URLSearchParams(req.originalUrl.toLowerCase().split('?')[1]);

    for (const [key, value] of params.entries()) {

      const matches = key.match(/([^\[\]]+)/g) || [];
      if (matches.length > 1) {

        const tidyMatches = [];
        matches.forEach(function (m) {
          tidyMatches.push(m.replace(/[^0-9a-z\-_]/g, ''));
        });

        if (eval('req.session.data["' + tidyMatches.join('"]["') + '"]="' + value + '"')) {
          delete req.session.data[key];
        };

      }
    }

  }



  next();


});

// =================================================================================================
//                                          ENQUIRY SPECIFIC ROUTES
// =================================================================================================



// ======= Index Page routing  and session data ======== //
// ===================================================== //

router.post('/:version/set-type', function (req, res) {

  req.session.data = {};

  const { version } = req.params;

  const flow = req.body.flow;
  const parts = flow.split('-');

  req.session.data.version = version;
  req.session.data.letter = parts[0] || 'enquiry';
  req.session.data.type = parts[1] || null;
  req.session.data.isBsa = parts.includes('bsa');
  req.session.data.flowVariant = parts.includes('norecord')
    ? 'norecord'
    : null;

  res.redirect(`/${version}/${req.session.data.letter}/respond-to-your-letter`);
});


router.post('/start-journey', function (req, res) {

  const { type, letter, version } = req.session.data;
  const folder = letter === 'pcn' ? 'pcn' : 'enquiry';

  // =========================
  // Default Values
  // =========================

  let charge = 0;
  let penaltyCharge = 0;
  let totalBill = 0;

  if (type === 'decs') {
    charge = 76.60;
    penaltyCharge = 100.00;
    totalBill = 176.60;
  } else {
    charge = 9.90;
    penaltyCharge = 50.00;
    totalBill = 59.90;
  }

  // =========================
  // STORE NUMBERS ONLY
  // =========================

  req.session.data.charge = charge;
  req.session.data.penaltyCharge = penaltyCharge;
  req.session.data.totalBill = totalBill;

  // payment state
  req.session.data.currentPayment = 0;
  req.session.data.totalPaidSoFar = 0;
  req.session.data.outstandingBalance = totalBill;

  // lock original bill (important for partial payments)
  req.session.data.originalTotalBill = totalBill;

  // =========================
  // FORMATTED VALUES (ONLY HERE)
  // =========================

  req.session.data.chargeFormatted = charge.toFixed(2);
  req.session.data.penaltyChargeFormatted = penaltyCharge.toFixed(2);
  req.session.data.totalBillFormatted = totalBill.toFixed(2);

  req.session.data.outstandingBalanceFormatted = totalBill.toFixed(2);
  req.session.data.totalPaidSoFarFormatted = "0.00";

  // =========================
  // FLAGS
  // =========================

  req.session.data.paymentAmount = null;
  req.session.data.isPartialPayment = false;

  return res.redirect(`/${version}/${folder}/enter-reference-number`);
});


// ======================= Get Routes =============================== //
// Resets page states, errors etc and renders the pages default view
// ================================================================ //

router.get('/:version/:letter/change-email', function (req, res) {

  const { version, letter } = req.params;

  // 🧹 clear stale state
  req.session.data.pendingEmail = '';
  delete req.session.data.emailError;
  delete req.session.data.emailSubmitted;
  delete req.session.data.editEmail;


  res.render(`${version}/${letter}/change-email`);
});

router.post('/:version/:letter/do-you-have-an-email', function (req, res) {


  const { version, letter } = req.session.data;
  const hasEmail = req.body.hasEmail;
  const emailAddress = req.body.emailAddress?.trim();

  // ✅ Mark that an email has been submitted
  req.session.data.emailSubmitted = true;

  // 🧹 Clear previous errors
  delete req.session.data.emailError;
  delete req.session.data.hasEmailError;

  // 1. Must select yes/no
  if (!hasEmail) {
    req.session.data.hasEmailError =
      'Select yes if you have an email address, or no if you do not';

    return res.redirect(`/${version}/${letter}/do-you-have-an-email`);
  }

  req.session.data.hasEmail = hasEmail;

  // 2. YES flow
  if (hasEmail === 'yes') {

    // Check if email input is blank
    if (!emailAddress) {
      req.session.data.emailError = 'Enter your email address';
      return res.redirect(`/${version}/${letter}/do-you-have-an-email`);
    }

    // Check if email is in the correct format
    if (!isValidEmail(emailAddress)) {
      req.session.data.emailError =
        'Enter an email address in the correct format, like name@example.com';
      return res.redirect(`/${version}/${letter}/do-you-have-an-email`);
    }

    // ✅ success
    req.session.data.email = emailAddress;

    return res.redirect(`/${version}/${letter}/email-confirmation`);
  }

  // NO flow - user doesn't have email
  req.session.data.email = null;
  req.session.data.pendingEmail = null;
  req.session.data.emailConfirmed = false;

  return res.redirect(`/${version}/${letter}/enquiry-letter-details`);
});

router.get('/:version/:letter/email-confirmation', function (req, res) {

  const { version, letter } = req.params;

  // clear UI state
  delete req.session.data.emailError;
  delete req.session.data.emailSubmitted;

  // 🔥 IMPORTANT: confirm page always starts empty
  req.session.data.confirmEmail = '';

  res.render(`${version}/${letter}/email-confirmation`);
});

router.get('/:version/:letter/update-email', function (req, res) {

  const { version, letter } = req.params;

  // 🧹 clear stale state
  req.session.data.pendingEmail = '';
  delete req.session.data.emailError;
  delete req.session.data.emailSubmitted;
  delete req.session.data.editEmail;


  res.render(`${version}/${letter}/update-email`);
});

router.get('/:version/:letter/what-is-your-email', function (req, res) {

  const { version, letter } = req.params;

  // prefill from confirmed email flow
  req.session.data.email = req.session.data.email || '';

  delete req.session.data.emailError;
  delete req.session.data.emailSubmitted;

  res.render(`${version}/${letter}/what-is-your-email`);
});

// ============================== Post Routes ================================== //
// Handles form submissions, validation and branching logic.
// Sets session data for use in page rendering and future branching decisions
// =========================================================================== //

router.post('/:version/:letter/change-email', function (req, res) {

  const { version, letter } = req.params;

  const emailAddress = req.body.emailAddress?.trim();

  delete req.session.data.emailError;

  // 🧯 required
  if (!emailAddress) {
    req.session.data.emailError = 'Enter your email address';
    req.session.data.pendingEmail = '';
    return res.redirect(`/${version}/${letter}/change-email`);
  }

  // 🧯 format
  if (!isValidEmail(emailAddress)) {
    req.session.data.emailError =
      'Enter an email address in the correct format, like name@example.com';

    req.session.data.pendingEmail = emailAddress;

    return res.redirect(`/${version}/${letter}/change-email`);
  }

  // store as pending ONLY
  req.session.data.pendingEmail = emailAddress;

  // reset confirm state so no stale mismatch bugs
  req.session.data.confirmEmail = '';
  req.session.data.emailSubmitted = false;

  return res.redirect(`/${version}/${letter}/email-confirmation`);
});

router.post('/:version/:letter/email-confirmation', function (req, res) {

  const { version, letter } = req.params;

  const confirmEmail = req.body.confirmEmail?.trim();

  const sourceEmail =
    req.session.data.pendingEmail ||
    req.session.data.email;

  req.session.data.emailSubmitted = true;

  delete req.session.data.emailError;

  // required
  if (!confirmEmail) {
    req.session.data.emailError = 'Enter your email address again';
    req.session.data.confirmEmail = '';
    return res.redirect(`/${version}/${letter}/email-confirmation`);
  }

  // format
  if (!isValidEmail(confirmEmail)) {
    req.session.data.emailError =
      'Enter an email address in the correct format, like name@example.com';

    req.session.data.confirmEmail = confirmEmail;

    return res.redirect(`/${version}/${letter}/email-confirmation`);
  }

  // mismatch check (NOW WORKS AGAIN)
  if (confirmEmail !== sourceEmail) {
    req.session.data.emailError =
      'Check your email address. This does not match the one entered on the previous screen';

    req.session.data.confirmEmail = confirmEmail;

    return res.redirect(`/${version}/${letter}/email-confirmation`);
  }

  // success
  req.session.data.email = confirmEmail;

  // clear temporary edit state
  req.session.data.pendingEmail = null;
  req.session.data.emailConfirmed = true;

  return res.redirect(`/${version}/${letter}/enquiry-letter-details`);
});

router.post('/:version/:letter/update-email', function (req, res) {

  const { version, letter } = req.params;

  const emailAddress = req.body.emailAddress?.trim();

  delete req.session.data.emailError;

  // 🧯 required
  if (!emailAddress) {
    req.session.data.emailError = 'Enter your email address';
    req.session.data.pendingEmail = '';
    return res.redirect(`/${version}/${letter}/update-email`);
  }

  // 🧯 format validation
  if (!isValidEmail(emailAddress)) {
    req.session.data.emailError =
      'Enter an email address in the correct format, like name@example.com';

    req.session.data.pendingEmail = emailAddress;

    return res.redirect(`/${version}/${letter}/update-email`);
  }

  // ✅ SAVE FINAL EMAIL (no confirm step anymore)
  req.session.data.email = emailAddress;

  // 🧹 clear temporary state
  req.session.data.pendingEmail = null;
  req.session.data.emailConfirmed = true;

  return res.redirect(`/${version}/${letter}/check-contact-details`);
});

router.post('/:version/:letter/what-is-your-email', function (req, res) {

  const { version, letter } = req.params;

  const emailAddress = req.body.emailAddress?.trim();

  const contactPreferences = req.session.data.contactPreferences || [];

  delete req.session.data.emailError;

  req.session.data.emailSubmitted = true;

  console.log('EMAIL POST HIT'); // DEBUG

  // required
  if (!emailAddress) {
    req.session.data.emailError = 'Enter your email address';
    req.session.data.email = '';
    return res.redirect(`/${version}/${letter}/what-is-your-email`);
  }

  // format
  if (!isValidEmail(emailAddress)) {
    req.session.data.emailError =
      'Enter an email address in the correct format, like name@example.com';

    req.session.data.email = emailAddress;

    return res.redirect(`/${version}/${letter}/what-is-your-email`);
  }

  // store confirmed email
  req.session.data.email = emailAddress;

  // branch logic
  if (contactPreferences.includes('telephone')) {
    return res.redirect(`/${version}/${letter}/what-is-your-phone-number`);
  }

  return res.redirect(`/${version}/${letter}/check-contact-details`);
});

// ============================================================================ //
//                                  Routes                                      //
// =========================================================================== //

router.get('/:version/:letter/were-you-claiming-any-benefits', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  res.render(`${version}/${letter}/were-you-claiming-any-benefits`, {
    data: req.session.data
  });
});

router.post('/:version/:letter/were-you-claiming-any-benefits', function (req, res) {

  const { version, letter } = req.params;
  const { claimBenefits } = req.body;

  // ❌ validation
  if (!claimBenefits) {
    req.session.data.claimBenefitsError = 'Select an option to continue';
    return res.redirect(`/${version}/${letter}/were-you-claiming-any-benefits`);
  }

  // ✅ clear error
  delete req.session.data.claimBenefitsError;

  // ✅ store
  req.session.data.claimBenefits = claimBenefits;

  // ======================
  // ✅ QUALIFYING BENEFITS
  // ======================
  if ([
    'income-employment-support',
    'jsa',
    'universal-credit',
    'pension-credit-guarantee'
  ].includes(claimBenefits)) {
    return res.redirect(`/${version}/${letter}/check-personal-details`);
  }

  // ======================
  // 🧭 PCN vs ENQUIRY SPLIT
  // ======================
  if (letter === 'pcn') {
    return res.redirect(`/${version}/${letter}/medical-conditions`);
  }

  // ======================
  // DEFAULT (ENQUIRY)
  // ======================
  return res.redirect(`/${version}/${letter}/cannot-confirm`);

});


router.get('/:version/:letter/did-you-have-this-benefit', function (req, res) {
  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  res.render(`${version}/${letter}/did-you-have-this-benefit`, {
    data: req.session.data
  });
});

router.post('/:version/:letter/did-you-have-this-benefit', function (req, res) {

  const { version, letter } = req.params;
  const nhs = req.body.nhs;

  if (!nhs) {
    req.session.data.nhsError =
      'Select yes if you had this benefit, or no if you did not';

    return res.redirect(`/${version}/${letter}/did-you-have-this-benefit`);
  }

  delete req.session.data.nhsError;

  req.session.data.nhs = nhs;

  const isBsa = req.session.data.isBsa === true;

  // ======================
  // BSA FLOW
  // ======================
  if (isBsa) {
    if (nhs === 'yes') {
      return res.redirect(`/${version}/${letter}/exemption-certificate-number`);
    }

    return res.redirect(`/${version}/${letter}/did-you-have-an-exemption`);
  }

  // ======================
  // DWP DEFAULT FLOW
  // ======================
  if (nhs === 'yes') {
    return res.redirect(`/${version}/${letter}/check-personal-details`);
  }

  return res.redirect(`/${version}/${letter}/did-you-have-an-exemption`);
});

router.post('/:version/:letter/update-exemption-certificate-number', function (req, res) {

  const { version, letter } = req.params;
  const certificateNumber = req.body.certificateNumber?.trim();

  // ❌ DO NOT clear error at top

  // required
  if (!certificateNumber) {
    req.session.data.benefitNumberError = 'Enter your benefit number';
    req.session.data.benefitNumber = '';
    return res.redirect(`/${version}/${letter}/update-exemption-certificate-number`);
  }

  // must be numeric
  if (!/^\d+$/.test(certificateNumber)) {
    req.session.data.benefitNumberError = 'Enter a number using digits only';
    req.session.data.benefitNumber = certificateNumber;
    return res.redirect(`/${version}/${letter}/update-exemption-certificate-number`);
  }

  // ✅ success
  delete req.session.data.benefitNumberError;

  req.session.data.benefitNumber = certificateNumber;

  return res.redirect(`/${version}/${letter}/check-contact-details`);
});

router.post('/:version/:letter/what-is-your-phone-number', function (req, res) {

  const { version, letter } = req.params;
  const telephone = req.body.telephone?.trim();

  // ❌ validation
  if (!telephone) {
    req.session.data.phoneNumberError = 'Enter your telephone number';
    req.session.data.phoneNumber = '';
    return res.redirect(`/${version}/${letter}/what-is-your-phone-number`);
  }

  // numbers only (allows spaces to be stripped if you want later)
  if (!/^\d+$/.test(telephone)) {
    req.session.data.phoneNumberError = 'Enter a telephone number using digits only';
    req.session.data.phoneNumber = telephone;
    return res.redirect(`/${version}/${letter}/what-is-your-phone-number`);
  }

  // ✅ success
  delete req.session.data.phoneNumberError;

  req.session.data.phoneNumber = telephone;

  return res.redirect(`/${version}/${letter}/check-contact-details`);
});

router.post('/:version/:letter/update-phone-number', function (req, res) {

  const { version, letter } = req.params;
  const telephone = req.body.telephone?.trim();

  // ❌ validation
  if (!telephone) {
    req.session.data.phoneNumberError = 'Enter your telephone number';
    return res.redirect(`/${version}/${letter}/update-phone-number`);
  }

  if (!/^\d+$/.test(telephone)) {
    req.session.data.phoneNumberError = 'Enter a telephone number using digits only';
    req.session.data.phoneNumber = telephone;
    return res.redirect(`/${version}/${letter}/update-phone-number`);
  }

  // ✅ success (overwrite)
  delete req.session.data.phoneNumberError;

  req.session.data.phoneNumber = telephone;

  return res.redirect(`/${version}/${letter}/check-contact-details`);
});

router.get('/:version/:letter/contact-preferences', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  res.render(`${version}/${letter}/contact-preferences`, {
    data: req.session.data
  });
});

router.post('/:version/:letter/contact-preferences', function (req, res) {

  const { version, letter } = req.params;

  let contactPreferences = req.body.contactPreferences;

  // 🧹 normalise input
  if (!contactPreferences) {
    contactPreferences = [];
  } else if (!Array.isArray(contactPreferences)) {
    contactPreferences = [contactPreferences];
  }

  // 🧹 remove NHS kit junk value
  contactPreferences = contactPreferences.filter(v => v !== '_unchecked');

  // ❌ validation
  if (contactPreferences.length === 0) {
    req.session.data.contactPreferencesError =
      'Select how you want to be contacted';

    req.session.data.contactPreferences = [];

    return res.redirect(`/${version}/${letter}/contact-preferences`);
  }

  // ✅ success cleanup
  delete req.session.data.contactPreferencesError;

  req.session.data.contactPreferences = contactPreferences;

  // 🧭 routing logic
  if (contactPreferences.includes('email')) {
    return res.redirect(`/${version}/${letter}/what-is-your-email`);
  }

  if (contactPreferences.includes('telephone')) {
    return res.redirect(`/${version}/${letter}/what-is-your-phone-number`);
  }

  // fallback safety
  return res.redirect(`/${version}/${letter}/contact-preferences`);
});

router.get('/:version/:letter/update-name', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  res.render(`${version}/${letter}/update-name`);
});


router.post('/:version/:letter/update-name', function (req, res) {

  const { version, letter } = req.params;

  let { firstName, lastName } = req.body;

  // 🧹 trim values
  firstName = firstName?.trim();
  lastName = lastName?.trim();

  // 🧹 clear previous errors
  delete req.session.data.nameError;
  delete req.session.data.firstNameError;
  delete req.session.data.lastNameError;

  // ❌ validation flags
  let hasError = false;

  const nameRegex = /^[A-Za-z\s'-]+$/;

  // FIRST NAME
  if (!firstName) {
    req.session.data.firstNameError = 'Enter your first name';
    hasError = true;
  } else if (!nameRegex.test(firstName)) {
    req.session.data.firstNameError = 'First name must only contain letters';
    hasError = true;
  }

  // LAST NAME
  if (!lastName) {
    req.session.data.lastNameError = 'Enter your last name';
    hasError = true;
  } else if (!nameRegex.test(lastName)) {
    req.session.data.lastNameError = 'Last name must only contain letters';
    hasError = true;
  }

  // ❌ stop if errors
  if (hasError) {
    req.session.data.firstName = firstName;
    req.session.data.lastName = lastName;

    req.session.data.nameError = 'Enter your name correctly';

    return res.redirect(`/${version}/${letter}/update-name`);
  }

  // ✅ success
  req.session.data.firstName = firstName;
  req.session.data.lastName = lastName;

  // 👉 store combined name
  req.session.data.fullName = `${firstName} ${lastName}`;

  return res.redirect(`/${version}/${letter}/check-personal-details`);
});

router.get('/:version/:letter/date-of-birth', function (req, res) {

  const { version, letter } = req.params;

  res.render(`${version}/${letter}/date-of-birth`);
});


router.post('/:version/:letter/date-of-birth', function (req, res) {

  const { version, letter } = req.params;

  let { day, month, year } = req.body.dateOfBirth || {};

  // 🧹 clean + store raw
  day = day?.trim();
  month = month?.trim();
  year = year?.trim();

  req.session.data.dateOfBirth = { day, month, year };

  delete req.session.data.dobError;

  // ❌ validation
  if (!day || !month || !year) {
    req.session.data.dobError = 'Enter your date of birth';
    return res.redirect(`/${version}/${letter}/date-of-birth`);
  }

  if (!/^\d+$/.test(day) || !/^\d+$/.test(month) || !/^\d+$/.test(year)) {
    req.session.data.dobError = 'Date of birth must only contain numbers';
    return res.redirect(`/${version}/${letter}/date-of-birth`);
  }

  const dob = new Date(year, month - 1, day);
  const today = new Date();

  if (dob > today) {
    req.session.data.dobError = 'Date of birth must be in the past';
    return res.redirect(`/${version}/${letter}/date-of-birth`);
  }

  // ❌ invalid dates like 31 Feb
  if (
    dob.getDate() != day ||
    dob.getMonth() != month - 1 ||
    dob.getFullYear() != year
  ) {
    req.session.data.dobError = 'Enter a real date of birth';
    return res.redirect(`/${version}/${letter}/date-of-birth`);
  }

  // ✅ format for display
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  req.session.data.dobFormatted =
    `${parseInt(day)} ${months[month - 1]} ${year}`;

  return res.redirect(`/${version}/${letter}/enter-postcode`);
});

router.get('/:version/:letter/update-dob', function (req, res) {

  const { version, letter } = req.params;

  res.render(`${version}/${letter}/update-dob`);
});


router.post('/:version/:letter/update-dob', function (req, res) {

  const { version, letter } = req.params;

  let { day, month, year } = req.body.dateOfBirth || {};

  day = day?.trim();
  month = month?.trim();
  year = year?.trim();

  req.session.data.dateOfBirth = { day, month, year };

  delete req.session.data.dobError;

  // same validation as above 👇
  if (!day || !month || !year) {
    req.session.data.dobError = 'Enter your date of birth';
    return res.redirect(`/${version}/${letter}/update-dob`);
  }

  if (!/^\d+$/.test(day) || !/^\d+$/.test(month) || !/^\d+$/.test(year)) {
    req.session.data.dobError = 'Date of birth must only contain numbers';
    return res.redirect(`/${version}/${letter}/update-dob`);
  }

  const dob = new Date(year, month - 1, day);
  const today = new Date();

  if (dob > today) {
    req.session.data.dobError = 'Date of birth must be in the past';
    return res.redirect(`/${version}/${letter}/update-dob`);
  }

  if (
    dob.getDate() != day ||
    dob.getMonth() != month - 1 ||
    dob.getFullYear() != year
  ) {
    req.session.data.dobError = 'Enter a real date of birth';
    return res.redirect(`/${version}/${letter}/update-dob`);
  }

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  req.session.data.dobFormatted =
    `${parseInt(day)} ${months[month - 1]} ${year}`;

  return res.redirect(`/${version}/${letter}/check-personal-details`);
});

router.get('/:version/:letter/update-address', function (req, res) {

  const { version, letter } = req.params;

  // 🧠 Seed default ONLY if nothing exists yet
  if (!req.session.data.addressLine1) {
    req.session.data.addressLine1 = '12 Lopan Road';
    req.session.data.addressLine2 = '';
    req.session.data.addressTown = 'Newcastle';
    req.session.data.addressPostcode = 'NE1 4XQ';

    req.session.data.fullAddress = '12 Lopan Road, Newcastle, NE1 4XQ';
  }

  res.render(`${version}/${letter}/update-address`);
});


router.post('/:version/:letter/update-address', function (req, res) {

  const { version, letter } = req.params;

  const {
    addressLine1,
    addressLine2,
    addressTown,
    addressPostcode
  } = req.body;

  // 🧹 clear errors
  delete req.session.data.addressLine1Error;
  delete req.session.data.addressTownError;
  delete req.session.data.addressPostcodeError;

  let hasError = false;

  // ❌ validation
  if (!addressLine1 || addressLine1.trim() === '') {
    req.session.data.addressLine1Error = 'Enter address line 1';
    hasError = true;
  }

  if (!addressTown || addressTown.trim() === '') {
    req.session.data.addressTownError = 'Enter a town or city';
    hasError = true;
  }

  if (!addressPostcode || addressPostcode.trim() === '') {
    req.session.data.addressPostcodeError = 'Enter a postcode';
    hasError = true;
  }

  if (hasError) {
    // preserve values
    req.session.data.addressLine1 = addressLine1;
    req.session.data.addressLine2 = addressLine2;
    req.session.data.addressTown = addressTown;
    req.session.data.addressPostcode = addressPostcode;

    return res.redirect(`/${version}/${letter}/update-address`);
  }

  // ✅ store clean values
  req.session.data.addressLine1 = addressLine1.trim();
  req.session.data.addressLine2 = addressLine2;
  req.session.data.addressTown = addressTown.trim();
  req.session.data.addressPostcode = addressPostcode.trim();

  // ✅ combined display version
  req.session.data.fullAddress = [
    addressLine1,
    addressLine2,
    addressTown,
    addressPostcode
  ]
    .filter(Boolean)
    .join(', ');

  return res.redirect(`/${version}/${letter}/check-personal-details`);
});

// GET
router.get('/:version/:letter/exemption-certificate-number', function (req, res) {
  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  res.render(`${version}/${letter}/exemption-certificate-number`, {
    data: req.session.data
  });
});


// POST
router.post('/:version/:letter/exemption-certificate-number', function (req, res) {
  const { version, letter } = req.params;

  const exemptionNumber = req.body.exemptionNumber;
  const certificateNumber = req.body['certificate-number'];

  // ❌ clear previous errors
  delete req.session.data.exemptionNumberError;
  delete req.session.data.certificateNumberError;

  // ❌ no radio selected
  if (!exemptionNumber) {
    req.session.data.exemptionNumberError = 'Select yes or no';
    return res.redirect(`/${version}/${letter}/exemption-certificate-number`);
  }

  // ❌ yes but no input
  if (exemptionNumber === 'yes') {
    if (!certificateNumber || certificateNumber.trim() === '') {
      req.session.data.certificateNumberError = 'Enter your certificate number';
      return res.redirect(`/${version}/${letter}/exemption-certificate-number`);
    }

    // ❌ not numeric
    if (!/^[0-9]+$/.test(certificateNumber)) {
      req.session.data.certificateNumberError = 'Certificate number must be numbers only';
      return res.redirect(`/${version}/${letter}/exemption-certificate-number`);
    }
  }

  // ✅ store values
  req.session.data.exemptionNumber = exemptionNumber;
  req.session.data.certificateNumber = certificateNumber;

  // ✅ 🔁 NEW ROUTING LOGIC
  if (exemptionNumber === 'yes') {
    return res.redirect(`/${version}/${letter}/contact-preferences`);
  }

  if (exemptionNumber === 'no') {
    return res.redirect(`/${version}/${letter}/check-personal-details`);
  }

  // fallback
  return res.redirect(`/${version}/${letter}/exemption-certificate-number`);
});

// GET
router.get('/:version/:letter/did-you-have-an-exemption', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  // preserve value only if no error
  if (!req.session.data.didYouHaveAnExemptionError) {
    delete req.session.data.didYouHaveAnExemption;
  }

  res.render(`${version}/${letter}/did-you-have-an-exemption`, {
    data: req.session.data
  });
});


// POST
router.post('/:version/:letter/did-you-have-an-exemption', function (req, res) {

  const { version, letter } = req.params;
  const didYouHaveAnExemption = req.body.didYouHaveAnExemption;

  // ❌ validation
  if (!didYouHaveAnExemption) {
    req.session.data.didYouHaveAnExemptionError =
      'Select an option to continue';

    return res.redirect(`/${version}/${letter}/did-you-have-an-exemption`);
  }

  // ✅ clear error
  delete req.session.data.didYouHaveAnExemptionError;

  // store answer
  req.session.data.didYouHaveAnExemption = didYouHaveAnExemption;

  // routing
  if (didYouHaveAnExemption === 'no') {
    return res.redirect(`/${version}/${letter}/were-you-claiming-any-benefits`);
  }

  return res.redirect(`/${version}/${letter}/exemption-certificate-number`);
});

router.get('/:version/:letter/what-you-want-to-do-next', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  res.render(`${version}/${letter}/what-you-want-to-do-next`, {
    data: req.session.data
  });
});


router.post('/:version/:letter/what-you-want-to-do-next', function (req, res) {

  const { version, letter } = req.params;
  const answer = req.body.confirm;

  if (!answer) {
    return res.render(`${version}/${letter}/what-you-want-to-do-next`, {
      data: {
        ...req.session.data,
        whatYouWantToDoNextError: 'Select an option to continue'
      }
    });
  }

  req.session.data.confirm = answer;

  if (answer === 'confirm-entitled') {
    return res.redirect(`/${version}/${letter}/what-happens-next`);
  }

  // ✔ NOT ENTITLED (PCN vs ENQUIRY split)
  if (answer === 'not-entitled') {

    // 🧾 PCN FLOW
    if (letter === 'pcn') {
      return res.redirect(`/${version}/${letter}/payment-method`);
    }

    // 📩 ENQUIRY FLOW (default)
    return res.redirect(`/${version}/${letter}/you-will-be-sent-pcn`);
  }

  // ✔ NOT SURE (same for both)
  return res.redirect(`/${version}/${letter}/what-happens-next`);
});

router.get('/:version/:letter/enter-postcode', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  res.render(`${version}/${letter}/enter-postcode`, {
    data: req.session.data
  });
});

router.post('/:version/:letter/enter-postcode', function (req, res) {

  const { version, letter } = req.params;

  const postCode = req.body.postCode;

  // ❌ validation
  if (!postCode || postCode.trim() === '') {
    return res.render(`${version}/${letter}/enter-postcode`, {
      data: {
        ...req.session.data,
        postCodeError: 'Enter your postcode'
      }
    });
  }

  // ✅ success
  req.session.data.postCode = postCode;

  // 🔀 FLOW VARIANT: NO RECORD JOURNEY
  if (req.session.data.flowVariant === 'norecord') {
    return res.redirect(`/${version}/${letter}/cannot-find-your-details`);
  }

  // 🧭 PCN vs ENQUIRY split
  if (letter === 'pcn') {
    return res.redirect(`/${version}/${letter}/pcn-details`);
  }

  return res.redirect(`/${version}/${letter}/do-you-have-an-email`);
});

router.get('/:version/:letter/enter-reference-number', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  res.render(`${version}/${letter}/enter-reference-number`, {
    data: req.session.data
  });
});


router.post('/:version/:letter/enter-reference-number', function (req, res) {

  const { version, letter } = req.params;

  const referenceNumber = req.body.referenceNumber;

  // ❌ empty check
  if (!referenceNumber || referenceNumber.trim() === '') {
    return res.render(`${version}/${letter}/enter-reference-number`, {
      data: {
        ...req.session.data,
        referenceNumberError: 'Enter your reference number'
      }
    });
  }

  // ❌ numeric check
  if (!/^[0-9]+$/.test(referenceNumber)) {
    return res.render(`${version}/${letter}/enter-reference-number`, {
      data: {
        ...req.session.data,
        referenceNumberError: 'Reference number must be numbers only'
      }
    });
  }

  // ✅ success
  req.session.data.referenceNumber = referenceNumber;

  return res.redirect(`/${version}/${letter}/enter-reference-number-again`);
});

router.get('/:version/:letter/enter-reference-number-again', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  res.render(`${version}/${letter}/enter-reference-number-again`, {
    data: req.session.data
  });
});


router.post('/:version/:letter/enter-reference-number-again', function (req, res) {

  const { version, letter } = req.params;

  const referenceNumberConfirmation = req.body.referenceNumberConfirmation;
  const referenceNumber = req.session.data.referenceNumber;

  // ❌ empty check
  if (!referenceNumberConfirmation || referenceNumberConfirmation.trim() === '') {
    return res.render(`${version}/${letter}/enter-reference-number-again`, {
      data: {
        ...req.session.data,
        referenceNumberConfirmationError: 'Enter your reference number again'
      }
    });
  }

  // ❌ numeric check
  if (!/^[0-9]+$/.test(referenceNumberConfirmation)) {
    return res.render(`${version}/${letter}/enter-reference-number-again`, {
      data: {
        ...req.session.data,
        referenceNumberConfirmationError: 'Reference number must be numbers only'
      }
    });
  }

  // ❌ match check
  if (referenceNumberConfirmation !== referenceNumber) {
    return res.render(`${version}/${letter}/enter-reference-number-again`, {
      data: {
        ...req.session.data,
        referenceNumberConfirmationError: 'The reference numbers do not match'
      }
    });
  }

  // ✅ success
  req.session.data.referenceNumberConfirmation = referenceNumberConfirmation;

  return res.redirect(`/${version}/${letter}/date-of-birth`);
});

router.post('/:version/:letter/accept-pcn', function (req, res) {
  const destination = 'pcn-accepted';
  res.redirect(destination);

});



// =================================================================================================
//                                          PCN SPECIFIC ROUTES
// =================================================================================================

// ======================================================
// GET: MEDICAL CONDITIONS
// ======================================================

router.get('/:version/:letter/medical-conditions', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  res.render(`${version}/${letter}/medical-conditions`, {
    data: req.session.data
  });

  delete req.session.data.medicalConditionsError;
});


// ======================================================
// POST: MEDICAL CONDITIONS
// ======================================================

router.post('/:version/:letter/medical-conditions', function (req, res) {

  const { version, letter } = req.params;

  const medicalConditions = req.body.medicalConditions;

  // clear old error
  delete req.session.data.medicalConditionsError;

  // validation
  if (!medicalConditions) {

    req.session.data.medicalConditionsError =
      'Select yes if you have one of these medical conditions';

    return res.redirect(`/${version}/${letter}/medical-conditions`);
  }

  // store answer
  req.session.data.medicalConditions = medicalConditions;

  // routing
  if (medicalConditions === 'yes') {
    return res.redirect(`/${version}/${letter}/no-medical-exemption`);
  }

  return res.redirect(`/${version}/${letter}/were-you-pregnant`);
});

// ======================================================
// GET NO MEDICAL EXEMPTION
// ======================================================

router.get('/:version/:letter/no-medical-exemption', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  res.render(`${version}/${letter}/no-medical-exemption`, {
    data: req.session.data
  });

  delete req.session.data.noMedicalConditionsError;
});


// ======================================================
// POST NO MEDICAL EXEMPTION
// ======================================================

router.post('/:version/:letter/no-medical-exemption', function (req, res) {

  const { version, letter } = req.params;

  const choice = req.body.NoMedicalConditions;

  delete req.session.data.noMedicalConditionsError;

  if (!choice) {
    req.session.data.noMedicalConditionsError =
      'Select what you want to do next';

    return res.redirect(`/${version}/${letter}/no-medical-exemption`);
  }

  req.session.data.noMedicalConditionsChoice = choice;

  // ======================================================
  // PAY COST → charge ONLY
  // ======================================================

  if (choice === 'payCost') {

    const amount = Number(req.session.data.charge || 9.90);

    req.session.data.currentPayment = amount;
    req.session.data.currentPaymentFormatted = amount.toFixed(2);

    req.session.data.paymentFlowVariant =
      "medical-exemption-charge-only";

    return res.redirect(`/${version}/${letter}/pay-apply-medical-exemption`);
  }

  // ======================================================
  // PAY PENALTY → full bill
  // ======================================================

  if (choice === 'payPenalty') {

    const amount = Number(req.session.data.totalBill || 0);

    req.session.data.currentPayment = amount;
    req.session.data.currentPaymentFormatted = amount.toFixed(2);

    req.session.data.paymentFlowVariant =
      "penalty-full-payment";

    return res.redirect(`/${version}/${letter}/payment-method`);
  }

  return res.redirect(`/${version}/${letter}/no-medical-exemption`);
});

// ======================================================
// GET PAY OR APPLY FOR MEDICAL EXEMPTION
// ======================================================

router.get('/:version/:letter/pay-apply-medical-exemption', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  res.render(`${version}/${letter}/pay-apply-medical-exemption`, {
    data: req.session.data
  });
});


// ======================================================
// POST PAY OR APPLY FOR MEDICAL EXEMPTION
// ======================================================

router.post('/:version/:letter/pay-apply-medical-exemption', function (req, res) {

  const { version, letter } = req.params;

  // =========================================
  // USE EXISTING CHARGE FROM START-JOURNEY
  // =========================================

  const charge =
    Number(req.session.data.charge || 0);

  // =========================================
  // CURRENT PAYMENT
  // =========================================

  req.session.data.currentPayment =
    charge;

  req.session.data.currentPaymentFormatted =
    charge.toFixed(2);

  // =========================================
  // UPDATE PAYMENT TOTALS
  // =========================================

  const totalPaidSoFar =
    Number(req.session.data.totalPaidSoFar || 0);

  const outstandingBalance =
    Number(
      req.session.data.outstandingBalance ??
      req.session.data.totalBill ??
      0
    );

  const newTotalPaid =
    totalPaidSoFar + charge;

  const newOutstandingBalance =
    outstandingBalance - charge;

  req.session.data.totalPaidSoFar =
    newTotalPaid;

  req.session.data.totalPaidSoFarFormatted =
    newTotalPaid.toFixed(2);

  req.session.data.outstandingBalance =
    newOutstandingBalance;

  req.session.data.outstandingBalanceFormatted =
    newOutstandingBalance.toFixed(2);

  // =========================================
  // SIMULATE PARTIAL PAYMENT FLOW
  // =========================================

  req.session.data.paymentAmount =
    'partial-amount';

  req.session.data.isPartialPayment =
    true;

  req.session.data.paymentFlowVariant =
    'partial-payment';

  req.session.data.fromMedicalExemptionFlow =
    true;

  // =========================================
  // GO STRAIGHT TO GOV PAY
  // =========================================

  return res.redirect(`/${version}/${letter}/gov-pay`);
});

// ======================================================
// GET WERE YOU PREGNANT
// ======================================================

router.get('/:version/:letter/were-you-pregnant', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  res.render(`${version}/${letter}/were-you-pregnant`, {
    data: req.session.data
  });

  delete req.session.data.pregnantError;
});


// ======================================================
// POST WERE YOU PREGNANT
// ======================================================

router.post('/:version/:letter/were-you-pregnant', function (req, res) {

  const { version, letter } = req.params;

  const pregnant = req.body.pregnant;

  // clear error
  delete req.session.data.pregnantError;

  // validation
  if (!pregnant) {

    req.session.data.pregnantError =
      'Select yes if you were pregnant or had given birth recently';

    return res.redirect(`/${version}/${letter}/were-you-pregnant`);
  }

  // store answer
  req.session.data.pregnant = pregnant;

  // routing
  if (pregnant === 'yes') {
    return res.redirect(`/${version}/${letter}/no-maternity-exemption`);
  }

  return res.redirect(`/${version}/${letter}/cannot-confirm`);
});

// ======================================================
// GET NO MATERNITY EXEMPTION
// ======================================================

router.get('/:version/:letter/no-maternity-exemption', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  delete req.session.data.noMaternityConditionsError;

  res.render(`${version}/${letter}/no-maternity-exemption`, {
    data: req.session.data
  });
});


// ======================================================
// POST NO MATERNITY EXEMPTION
// ======================================================

router.post('/:version/:letter/no-maternity-exemption', function (req, res) {

  const { version, letter } = req.params;

  const choice = req.body.noMaternityExemption;

  delete req.session.data.noMaternityExemptionError;

  // =========================
  // VALIDATION
  // =========================

  if (!choice) {

    req.session.data.noMaternityExemptionError =
      'Select what you want to do next';

    return res.render(`${version}/${letter}/no-maternity-exemption`, {
      data: {
        ...req.session.data,
        errorNoMaternityExemption: {
          text: 'Select what you want to do next'
        }
      }
    });
  }

  // store selection
  req.session.data.noMaternityExemptionChoice = choice;

  // =========================
  // PAY COST ONLY
  // =========================

  if (choice === 'payCost') {

    const amount =
      Number(req.session.data.charge || 9.90);

    req.session.data.currentPayment = amount;
    req.session.data.currentPaymentFormatted = amount.toFixed(2);

    req.session.data.paymentFlowVariant =
      "maternity-exemption-charge-only";

    return res.redirect(`/${version}/${letter}/pay-apply-maternity`);
  }

  // =========================
  // PAY PENALTY
  // =========================

  if (choice === 'payPenalty') {

    const amount =
      Number(req.session.data.totalBill || 0);

    req.session.data.currentPayment = amount;
    req.session.data.currentPaymentFormatted = amount.toFixed(2);

    req.session.data.paymentFlowVariant =
      "penalty-full-payment";

    return res.redirect(`/${version}/${letter}/payment-method`);
  }

  return res.redirect(`/${version}/${letter}/no-maternity-exemption`);
});

// ======================================================
// GET PAY OR APPLY FOR MATERNITY EXEMPTION
// ======================================================

router.get('/:version/:letter/pay-apply-maternity', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  res.render(`${version}/${letter}/pay-apply-maternity`, {
    data: req.session.data
  });
});


// ======================================================
// POST PAY OR APPLY FOR MATERNITY EXEMPTION
// ======================================================

router.post('/:version/:letter/pay-apply-maternity', function (req, res) {

  const { version, letter } = req.params;

  // =========================================
  // USE EXISTING CHARGE FROM START-JOURNEY
  // =========================================

  const charge =
    Number(req.session.data.charge || 0);

  // =========================================
  // CURRENT PAYMENT
  // =========================================

  req.session.data.currentPayment =
    charge;

  req.session.data.currentPaymentFormatted =
    charge.toFixed(2);

  // =========================================
  // UPDATE PAYMENT TOTALS
  // =========================================

  const totalPaidSoFar =
    Number(req.session.data.totalPaidSoFar || 0);

  const outstandingBalance =
    Number(
      req.session.data.outstandingBalance ??
      req.session.data.totalBill ??
      0
    );

  const newTotalPaid =
    totalPaidSoFar + charge;

  const newOutstandingBalance =
    outstandingBalance - charge;

  req.session.data.totalPaidSoFar =
    newTotalPaid;

  req.session.data.totalPaidSoFarFormatted =
    newTotalPaid.toFixed(2);

  req.session.data.outstandingBalance =
    newOutstandingBalance;

  req.session.data.outstandingBalanceFormatted =
    newOutstandingBalance.toFixed(2);

  // =========================================
  // SIMULATE PARTIAL PAYMENT FLOW
  // =========================================

  req.session.data.paymentAmount =
    'partial-amount';

  req.session.data.isPartialPayment =
    true;

  req.session.data.paymentFlowVariant =
    'partial-payment';

  // 👇 DIFFERENCE: MATERNITY FLAG
  req.session.data.fromMaternityExemptionFlow =
    true;

  // ensure medical flag is NOT accidentally reused
  req.session.data.fromMedicalExemptionFlow =
    false;

  // =========================================
  // GO STRAIGHT TO GOV PAY
  // =========================================

  return res.redirect(`/${version}/${letter}/gov-pay`);
});

// GET
router.get('/:version/:letter/payment-method', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  // =========================================
  // CHECK DIRECT DEBIT ELIGIBILITY
  // =========================================

  function buildPlan(total, months) {

    const totalPence = Math.round(total * 100);

    const base = Math.floor(totalPence / months);
    const remainder = totalPence - (base * months);

    const firstPayment = base + remainder;

    const payments = [firstPayment];

    for (let i = 1; i < months; i++) {
      payments.push(base);
    }

    return payments.map(p => (p / 100).toFixed(2));
  }

  const totalBill = Number(req.session.data.totalBill || 0);

  const outstandingBalance =
    Number(req.session.data.outstandingBalance ?? totalBill);

  const amountToPay =
    outstandingBalance > 0 ? outstandingBalance : totalBill;

  // build plans
  const threeMonthPlan = buildPlan(amountToPay, 3);
  const sixMonthPlan = buildPlan(amountToPay, 6);
  const twelveMonthPlan = buildPlan(amountToPay, 12);

  // check monthly costs
  const monthly3 = Number(threeMonthPlan[1] || 0);
  const monthly6 = Number(sixMonthPlan[1] || 0);
  const monthly12 = Number(twelveMonthPlan[1] || 0);

  // ANY valid DD option?
  const directDebitAvailable =
    monthly3 >= 9 || monthly6 >= 9 || monthly12 >= 9;

  req.session.data.directDebitAvailable = directDebitAvailable;

  res.render(`${version}/${letter}/payment-method`, {
    data: req.session.data
  });
});

// POST
router.post('/:version/:letter/payment-method', function (req, res) {

  const { version, letter } = req.params;
  const paymentMethod = req.body.paymentMethod;

  // ❌ validation
  if (!paymentMethod) {
    return res.render(`${version}/${letter}/payment-method`, {
      data: {
        ...req.session.data,
        paymentMethodError: 'Select how you would like to pay your penalty charge'
      }
    });
  }

  // ✅ store
  req.session.data.paymentMethod = paymentMethod;

  // 🧭 routing
  if (paymentMethod === 'credit-card') {
    return res.redirect(`/${version}/${letter}/payment-choice`);
  }

  if (paymentMethod === 'direct-debit') {
    return res.redirect(`/${version}/${letter}/pay-by-direct-debit`);
  }

  // fallback
  return res.redirect(`/${version}/${letter}/payment-method`);
});

// GET
router.get('/:version/:letter/payment-choice', function (req, res) {
  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  // =========================
  // SAFE NORMALISATION (FIXED)
  // =========================

  const totalBill = Number(req.session.data.totalBill);

  if (isNaN(totalBill)) {
    throw new Error("totalBill missing from session - start-journey not executed");
  }

  const outstandingBalance =
    Number(req.session.data.outstandingBalance);

  const totalPaidSoFar =
    Number(req.session.data.totalPaidSoFar || 0);

  // DO NOT overwrite with fallback 0
  req.session.data.totalBill = totalBill;
  req.session.data.outstandingBalance = isNaN(outstandingBalance)
    ? totalBill
    : outstandingBalance;

  req.session.data.totalPaidSoFar = totalPaidSoFar;

  res.render(`${version}/${letter}/payment-choice`, {
    data: req.session.data
  });
});

// POST
router.post('/:version/:letter/payment-choice', function (req, res) {

  const { version, letter } = req.params;
  const paymentAmount = req.body.paymentAmount;

  if (!paymentAmount) {
    return res.render(`${version}/${letter}/payment-choice`, {
      data: {
        ...req.session.data,
        paymentAmountError: 'Select full or partial payment'
      }
    });
  }

  // =========================
  // STORE SELECTION
  // =========================

  req.session.data.paymentAmount = paymentAmount;
  req.session.data.isPartialPayment = paymentAmount === 'partial-amount';

  // =========================
  // RESET CURRENT PAYMENT
  // =========================

  req.session.data.currentPayment = 0;

  // =========================
  // FULL PAYMENT HANDLING (FIX)
  // =========================

  if (paymentAmount === 'full-amount') {

    const outstandingBalance =
      Number(req.session.data.outstandingBalance ?? req.session.data.totalBill);

    // store current payment only
    req.session.data.currentPayment =
      outstandingBalance;

    req.session.data.currentPaymentFormatted =
      outstandingBalance.toFixed(2);

    return res.redirect(`/${version}/${letter}/gov-pay`);
  }


  // =========================
  // PARTIAL FLOW
  // =========================

  return res.redirect(`/${version}/${letter}/partial-payment`);
});

// GET
router.get('/:version/:letter/partial-payment', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  // ======================
  // SAFE RAW VALUES
  // ======================

  const totalBill =
    Number(req.session.data.totalBill);

  const outstandingBalance =
    Number(req.session.data.outstandingBalance ?? totalBill);

  const totalPaidSoFar =
    Number(req.session.data.totalPaidSoFar ?? 0);

  // ======================
  // STORE RAW
  // ======================

  req.session.data.totalBill = totalBill;

  req.session.data.outstandingBalance =
    outstandingBalance;

  req.session.data.totalPaidSoFar =
    totalPaidSoFar;

  // ======================
  // STORE FORMATTED
  // ======================

  req.session.data.totalBillFormatted =
    totalBill.toFixed(2);

  req.session.data.outstandingBalanceFormatted =
    outstandingBalance.toFixed(2);

  req.session.data.totalPaidSoFarFormatted =
    totalPaidSoFar.toFixed(2);

  res.render(`${version}/${letter}/partial-payment`, {
    data: req.session.data
  });
});


// ======================
// POST
// ======================

router.post('/:version/:letter/partial-payment', function (req, res) {

  const { version, letter } = req.params;

  const rawAmount = req.body.amountToPay;

  // ======================
  // VALIDATION
  // ======================

  if (!rawAmount || rawAmount.trim() === '') {
    return res.render(`${version}/${letter}/partial-payment`, {
      data: {
        ...req.session.data,
        amountError: 'Enter an amount'
      }
    });
  }

  const amount = Number(rawAmount);

  if (isNaN(amount) || amount <= 0) {
    return res.render(`${version}/${letter}/partial-payment`, {
      data: {
        ...req.session.data,
        amountError: 'Enter a valid amount'
      }
    });
  }

  // ======================
  // CURRENT STATE
  // ======================

  const outstandingBalance =
    Number(req.session.data.outstandingBalance);

  const totalPaidSoFar =
    Number(req.session.data.totalPaidSoFar);

  // ======================
  // OVERPAY PROTECTION
  // ======================

  if (amount > outstandingBalance) {
    return res.render(`${version}/${letter}/partial-payment`, {
      data: {
        ...req.session.data,
        amountError: 'Amount cannot be more than outstanding balance'
      }
    });
  }

  // ======================
  // CALCULATIONS
  // ======================

  const newTotalPaid =
    totalPaidSoFar + amount;

  const newOutstandingBalance =
    outstandingBalance - amount;

  // ======================
  // STORE RAW VALUES
  // ======================

  req.session.data.currentPayment = amount;

  req.session.data.totalPaidSoFar =
    newTotalPaid;

  req.session.data.outstandingBalance =
    newOutstandingBalance;

  // ======================
  // STORE FORMATTED VALUES
  // ======================

  req.session.data.currentPaymentFormatted =
    amount.toFixed(2);

  req.session.data.totalPaidSoFarFormatted =
    newTotalPaid.toFixed(2);

  req.session.data.outstandingBalanceFormatted =
    newOutstandingBalance.toFixed(2);

  // ======================
  // FLOW FLAGS
  // ======================

  const isNowFullyPaid =
    newOutstandingBalance <= 0;

  if (isNowFullyPaid) {

    req.session.data.paymentAmount =
      'full-amount';

    req.session.data.isPartialPayment =
      false;

  } else {

    req.session.data.paymentAmount =
      'partial-amount';

    req.session.data.isPartialPayment =
      true;
  }

  return res.redirect(`/${version}/${letter}/gov-pay`);
});

router.get('/:version/:letter/gov-pay', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  // =========================
  // CURRENT PAYMENT ONLY
  // =========================

  const currentPayment =
    Number(req.session.data.currentPayment || 0);

  // GOV PAY should always display
  // the payment being made RIGHT NOW

  req.session.data.displayAmount =
    currentPayment;

  req.session.data.displayAmountFormatted =
    currentPayment.toFixed(2);

  res.render(`${version}/${letter}/gov-pay`, {
    data: req.session.data
  });
});

router.get('/:version/:letter/gov-payment-confirmed', function (req, res) {

  const { version, letter } = req.params;

  const isPartial = req.session.data.isPartialPayment;

  // =========================
  // FULL PAYMENT FINALISATION
  // =========================

  if (!isPartial) {

    const outstandingBalance =
      Number(req.session.data.outstandingBalance || 0);

    const totalPaidSoFar =
      Number(req.session.data.totalPaidSoFar || 0);

    // final payment equals remaining balance
    const finalPayment = outstandingBalance;

    // update totals
    const newTotalPaid =
      totalPaidSoFar + finalPayment;

    // store raw
    req.session.data.currentPayment =
      finalPayment;

    req.session.data.totalPaidSoFar =
      newTotalPaid;

    req.session.data.outstandingBalance = 0;

    // store formatted
    req.session.data.currentPaymentFormatted =
      finalPayment.toFixed(2);

    req.session.data.totalPaidSoFarFormatted =
      newTotalPaid.toFixed(2);

    req.session.data.outstandingBalanceFormatted =
      '0.00';
  }

  return res.render(`${version}/${letter}/gov-payment-confirmed`, {
    data: req.session.data
  });
});

// GET
router.get('/:version/:letter/pay-by-direct-debit', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  res.render(`${version}/${letter}/pay-by-direct-debit`, {
    data: req.session.data
  });
});


// POST
router.post('/:version/:letter/pay-by-direct-debit', function (req, res) {

  const { version, letter } = req.params;

  const confirmations =
    req.body.DirectDebitConfirmation || [];

  // Ensure array
  const selected =
    Array.isArray(confirmations)
      ? confirmations
      : [confirmations];

  // Required checkboxes
  const required = [
    'own-account',
    'authority',
    'declaration'
  ];

  // Check if ALL required are selected
  const allConfirmed =
    required.every(item => selected.includes(item));

  // Store selections
  req.session.data.DirectDebitConfirmation = selected;

  // =========================
  // ROUTING
  // =========================

  if (allConfirmed) {
    return res.redirect(`/${version}/${letter}/direct-debit-instalment-option`);
  }

  return res.redirect(`/${version}/${letter}/unable-to-set-up-direct-debit`);
});


// ======================================================
// GET: DIRECT DEBIT INSTALMENT OPTION
// ======================================================

router.get('/:version/:letter/direct-debit-instalment-option', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  if (req.query.change === 'true') {
    req.session.data.returnToCheckAnswers = true;
  }

  // ======================================================
  // BUILD PLAN HELPER
  // ======================================================

  function buildPlan(total, months) {

    const totalPence = Math.round(total * 100);

    const base = Math.floor(totalPence / months);
    const remainder = totalPence - (base * months);

    const firstPayment = base + remainder;

    const payments = [firstPayment];

    for (let i = 1; i < months; i++) {
      payments.push(base);
    }

    return payments.map(p => (p / 100).toFixed(2));
  }

  // ======================================================
  // BALANCE
  // ======================================================

  const totalBill = Number(req.session.data.totalBill || 0);

  const outstandingBalance =
    Number(req.session.data.outstandingBalance ?? totalBill);

  const amountToPay =
    outstandingBalance > 0 ? outstandingBalance : totalBill;

  // ======================================================
  // BUILD PLANS
  // ======================================================

  const threeMonthPlan = buildPlan(amountToPay, 3);
  const sixMonthPlan = buildPlan(amountToPay, 6);
  const twelveMonthPlan = buildPlan(amountToPay, 12);

  // ======================================================
  // STORE PLANS
  // ======================================================

  req.session.data.directDebitAmount = amountToPay;
  req.session.data.directDebitAmountFormatted = amountToPay.toFixed(2);

  req.session.data.threeMonthPlan = threeMonthPlan;
  req.session.data.sixMonthPlan = sixMonthPlan;
  req.session.data.twelveMonthPlan = twelveMonthPlan;

  // ======================================================
  // FILTER BY £9 MINIMUM MONTHLY RULE
  // ======================================================

  const plans = [
    { value: '3months', months: 3, plan: threeMonthPlan },
    { value: '6months', months: 6, plan: sixMonthPlan },
    { value: '12months', months: 12, plan: twelveMonthPlan }
  ];

  req.session.data.availablePlans = plans.filter(p => {
    const monthly = Number(p.plan[1] || 0);
    return monthly >= 9;
  });

  // reset selection
  req.session.data.instalmentOptions = null;

  res.render(`${version}/${letter}/direct-debit-instalment-option`, {
    data: req.session.data
  });
});


// ======================================================
// POST: DIRECT DEBIT INSTALMENT OPTION
// ======================================================

router.post('/:version/:letter/direct-debit-instalment-option', function (req, res) {

  const { version, letter } = req.params;

  const option = req.body.instalmentOptions;

  if (!option) {
    return res.render(`${version}/${letter}/direct-debit-instalment-option`, {
      data: {
        ...req.session.data,
        instalmentOptionsError: 'Select how many months you want to pay over'
      }
    });
  }

  req.session.data.instalmentOptions = option;

  let selectedPlan = [];
  let months = 0;

  if (option === '3months') {
    selectedPlan = req.session.data.threeMonthPlan;
    months = 3;
  }

  if (option === '6months') {
    selectedPlan = req.session.data.sixMonthPlan;
    months = 6;
  }

  if (option === '12months') {
    selectedPlan = req.session.data.twelveMonthPlan;
    months = 12;
  }

  req.session.data.selectedDirectDebitPlan = selectedPlan;
  req.session.data.selectedDirectDebitMonths = months;
  req.session.data.selectedDirectDebitFirstPayment = selectedPlan[0];
  req.session.data.selectedDirectDebitMonthlyAmount = selectedPlan[1];

  // ======================================================
  // CHANGE JOURNEY FLAG
  // Check if coming from check answers page to go back there, allows updating instalment options without duplicating for an 'update' page
  // ======================================================

  if (req.session.data.returnToCheckAnswers) {
    delete req.session.data.returnToCheckAnswers;

    return res.redirect(`/${version}/${letter}/direct-debit-check-answers`);
  }

  return res.redirect(`/${version}/${letter}/direct-debit-date`);
});


// ======================================================
// POST: DIRECT DEBIT INSTALMENT OPTION
// ======================================================

router.post('/:version/:letter/direct-debit-instalment-option', function (req, res) {

  const { version, letter } = req.params;

  const option =
    req.body.instalmentOptions;

  // ======================================================
  // VALIDATION
  // ======================================================

  if (!option) {

    return res.render(`${version}/${letter}/direct-debit-instalment-option`, {
      data: {
        ...req.session.data,
        instalmentOptionsError:
          'Select how many months you want to pay over'
      }
    });
  }

  // ======================================================
  // STORE SELECTION
  // ======================================================

  req.session.data.instalmentOptions =
    option;

  let selectedPlan = [];
  let months = 0;

  if (option === '3months') {
    selectedPlan = req.session.data.threeMonthPlan;
    months = 3;
  }

  if (option === '6months') {
    selectedPlan = req.session.data.sixMonthPlan;
    months = 6;
  }

  if (option === '12months') {
    selectedPlan = req.session.data.twelveMonthPlan;
    months = 12;
  }

  // ======================================================
  // STORE FOR CONFIRMATION PAGE
  // ======================================================

  req.session.data.selectedDirectDebitPlan =
    selectedPlan;

  req.session.data.selectedDirectDebitMonths =
    months;

  req.session.data.selectedDirectDebitFirstPayment =
    selectedPlan[0];

  req.session.data.selectedDirectDebitMonthlyAmount =
    selectedPlan[1];

  // ======================================================
  // NEXT STEP
  // ======================================================

  if (req.session.data.returnToCheckAnswers) { // Checks if coming here from change link on check answers page, if so goes back there, if not continues to direct debit date page as normal

    delete req.session.data.returnToCheckAnswers;

    return res.redirect(
      `/${version}/${letter}/direct-debit-check-answers`
    );
  }

  return res.redirect( // standard flow goes to direct debit date page
    `/${version}/${letter}/direct-debit-date`
  );
});

router.get('/:version/:letter/direct-debit-date', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  // ======================================================
  // CHANGE JOURNEY FLAG
  // Check if coming from check answers page to go back there, allows updating date options without duplicating for an 'update' page
  // ======================================================

  if (req.query.change === 'true') {
    req.session.data.returnToCheckAnswers = true;
  }

  // ======================================================

  res.render(`${version}/${letter}/direct-debit-date`, {
    data: req.session.data
  });
});

router.post('/:version/:letter/direct-debit-date', function (req, res) {

  const { version, letter } = req.params;

  const rawDate = req.body.date;

  // =========================================
  // VALIDATION
  // =========================================

  if (!rawDate || rawDate.trim() === '') {
    return res.render(`${version}/${letter}/direct-debit-date`, {
      data: {
        ...req.session.data,
        dateError: 'Enter a payment date'
      }
    });
  }

  const date = Number(rawDate);

  if (isNaN(date)) {
    return res.render(`${version}/${letter}/direct-debit-date`, {
      data: {
        ...req.session.data,
        dateError: 'Enter a valid number'
      }
    });
  }

  if (date < 1 || date > 28) {
    return res.render(`${version}/${letter}/direct-debit-date`, {
      data: {
        ...req.session.data,
        dateError: 'Enter a date between 1 and 28'
      }
    });
  }

  // =========================================
  // STORE VALUE
  // =========================================

  req.session.data.directDebitDay = date;

  // optional formatted version (useful for summary pages)
  req.session.data.directDebitDayFormatted = date;

  // =========================================
  // NEXT STEP
  // =========================================

  if (req.session.data.returnToCheckAnswers) { // Checks if coming here from change link on check answers page, if so goes back there, if not continues to direct debit check address page as normal

    // clear flag after use
    delete req.session.data.returnToCheckAnswers;

    return res.redirect(
      `/${version}/${letter}/direct-debit-check-answers`
    );
  }

  return res.redirect(
    `/${version}/${letter}/direct-debit-check-address`
  );
});

// GET
router.get('/:version/:letter/direct-debit-check-address', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  // ========================================
  // DEFAULT ADDRESS (ONLY IF EMPTY)
  // ========================================

  if (!req.session.data.addressLine1) {

    req.session.data.addressLine1 = '12 Old Oak Road';
    req.session.data.addressLine2 = '';
    req.session.data.addressTown = 'Throckley';
    req.session.data.addressPostcode = 'NE67 9AD';

  }

  // optional combined version
  req.session.data.fullAddress = [
    req.session.data.addressLine1,
    req.session.data.addressLine2,
    req.session.data.addressTown,
    req.session.data.addressPostcode
  ]
    .filter(Boolean)
    .join(', ');

  res.render(`${version}/${letter}/direct-debit-check-address`, {
    data: req.session.data
  });
});


// POST
router.post('/:version/:letter/direct-debit-check-address', function (req, res) {

  const { version, letter } = req.params;

  const checkAddress = req.body.checkAddress;

  // 🧹 clear error
  delete req.session.data.checkAddressError;

  // ❌ validation
  if (!checkAddress) {
    req.session.data.checkAddressError =
      'Select yes if your address is correct';

    return res.render(`${version}/${letter}/direct-debit-check-address`, {
      data: req.session.data
    });
  }

  // =========================
  // ROUTING LOGIC
  // =========================

  req.session.data.checkAddress = checkAddress;

  if (checkAddress === 'yes') {
    return res.redirect(`/${version}/${letter}/direct-debit-check-answers`);
  }

  // no → update address flow
  return res.redirect(`/${version}/${letter}/what-is-your-address`);
});

router.get('/:version/:letter/what-is-your-address', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  res.render(`${version}/${letter}/what-is-your-address`, {
    data: req.session.data
  });
});

router.post('/:version/:letter/what-is-your-address', function (req, res) {

  const { version, letter } = req.params;

  const {
    addressLine1,
    addressLine2,
    addressTown,
    addressPostcode
  } = req.body;

  // =========================
  // CLEAR OLD ERRORS
  // =========================

  delete req.session.data.addressLine1Error;
  delete req.session.data.addressTownError;
  delete req.session.data.addressPostcodeError;

  let hasError = false;

  // =========================
  // VALIDATION
  // =========================

  if (!addressLine1 || addressLine1.trim() === '') {
    req.session.data.addressLine1Error = 'Enter address line 1';
    hasError = true;
  }

  if (!addressTown || addressTown.trim() === '') {
    req.session.data.addressTownError = 'Enter a town or city';
    hasError = true;
  }

  if (!addressPostcode || addressPostcode.trim() === '') {
    req.session.data.addressPostcodeError = 'Enter a postcode';
    hasError = true;
  }

  // =========================
  // ON ERROR → RE-RENDER PAGE
  // =========================

  if (hasError) {

    req.session.data.addressLine1 = addressLine1;
    req.session.data.addressLine2 = addressLine2;
    req.session.data.addressTown = addressTown;
    req.session.data.addressPostcode = addressPostcode;

    return res.render(`${version}/${letter}/what-is-your-address`, {
      data: req.session.data
    });
  }

  // =========================
  // SAVE UPDATED ADDRESS
  // =========================

  req.session.data.addressLine1 = addressLine1.trim();
  req.session.data.addressLine2 = addressLine2;
  req.session.data.addressTown = addressTown.trim();
  req.session.data.addressPostcode = addressPostcode.trim();

  req.session.data.fullAddress = [
    addressLine1,
    addressLine2,
    addressTown,
    addressPostcode
  ].filter(Boolean).join(', ');

  // =========================
  // RETURN TO DD FLOW
  // =========================

  return res.redirect(`/${version}/${letter}/direct-debit-check-address`);
});

// GET
router.get('/:version/:letter/direct-debit-check-answers', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  // ========================================
  // ADDRESS HTML
  // ========================================

  const addressHtml = [
    req.session.data.addressLine1,
    req.session.data.addressLine2,
    req.session.data.addressTown,
    req.session.data.addressPostcode
  ]
    .filter(line => line && line.trim() !== '')
    .map(line => `<p>${line}</p>`)
    .join('');

  req.session.data.directDebitAddressHtml =
    addressHtml;

  // ========================================
  // TOTAL AMOUNT
  // ========================================

  const totalAmount =
    Number(
      req.session.data.directDebitAmount ||
      req.session.data.outstandingBalance ||
      req.session.data.totalBill ||
      0
    );

  req.session.data.directDebitTotalFormatted =
    totalAmount.toFixed(2);

  // ========================================
  // PLAN DETAILS
  // ========================================

  const months =
    Number(req.session.data.selectedDirectDebitMonths || 0);

  req.session.data.numberOfPayments =
    months;

  req.session.data.followingPaymentsCount =
    months - 1;

  req.session.data.firstPaymentAmount =
    req.session.data.selectedDirectDebitFirstPayment || '0.00';

  req.session.data.followingPaymentAmount =
    req.session.data.selectedDirectDebitMonthlyAmount || '0.00';

  // ========================================
  // RENDER
  // ========================================

  res.render(`${version}/${letter}/direct-debit-check-answers`, {
    data: req.session.data
  });
});

// POST
router.post('/:version/:letter/direct-debit-check-answers', function (req, res) {

  const { version, letter } = req.params;

  return res.redirect(`/${version}/${letter}/enter-bank-details`);
});

// ======================================================
// GET
// ======================================================

router.get('/:version/:letter/enter-bank-details', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  res.render(`${version}/${letter}/enter-bank-details`, {
    data: req.session.data
  });

});


// ======================================================
// POST
// ======================================================

router.post('/:version/:letter/enter-bank-details', function (req, res) {

  const { version, letter } = req.params;

  const {
    accountHolder,
    accountNumber,
    sortCode
  } = req.body;

  // ========================================
  // CLEAR ERRORS
  // ========================================

  delete req.session.data.accountHolderError;
  delete req.session.data.accountNumberError;
  delete req.session.data.sortCodeError;

  let hasError = false;

  // ========================================
  // ACCOUNT HOLDER VALIDATION
  // ========================================

  if (!accountHolder || accountHolder.trim() === '') {

    req.session.data.accountHolderError =
      "Enter the account holder's name";

    hasError = true;

  } else if (!/^[a-zA-Z\s'-]+$/.test(accountHolder)) {

    req.session.data.accountHolderError =
      "Account holder's name must only contain letters";

    hasError = true;
  }

  // ========================================
  // ACCOUNT NUMBER VALIDATION
  // ========================================

  if (!accountNumber || accountNumber.trim() === '') {

    req.session.data.accountNumberError =
      'Enter an account number';

    hasError = true;

  } else if (!/^\d+$/.test(accountNumber)) {

    req.session.data.accountNumberError =
      'Account number must only contain numbers';

    hasError = true;

  } else if (accountNumber.length < 6 || accountNumber.length > 8) {

    req.session.data.accountNumberError =
      'Account number must be between 6 and 8 digits';

    hasError = true;
  }

  // ========================================
  // SORT CODE VALIDATION
  // ========================================

  const cleanSortCode =
    (sortCode || '').replace(/-/g, '');

  if (!sortCode || sortCode.trim() === '') {

    req.session.data.sortCodeError =
      'Enter a sort code';

    hasError = true;

  } else if (!/^\d+$/.test(cleanSortCode)) {

    req.session.data.sortCodeError =
      'Sort code must only contain numbers';

    hasError = true;

  } else if (cleanSortCode.length !== 6) {

    req.session.data.sortCodeError =
      'Sort code must be 6 digits long';

    hasError = true;
  }

  // ========================================
  // FORMAT SORT CODE
  // ========================================

  let formattedSortCode = sortCode;

  if (cleanSortCode.length === 6) {

    formattedSortCode =
      cleanSortCode.substring(0, 2) + '-' +
      cleanSortCode.substring(2, 4) + '-' +
      cleanSortCode.substring(4, 6);
  }

  // ========================================
  // STORE RAW VALUES
  // ========================================

  req.session.data.accountHolder =
    accountHolder.trim();

  req.session.data.accountNumber =
    accountNumber.trim();

  req.session.data.sortCode =
    formattedSortCode;

  // ========================================
  // STORE DISPLAY / SUMMARY VALUES
  // ========================================

  req.session.data.directDebitAccountHolder =
    accountHolder.trim();

  req.session.data.directDebitAccountNumber =
    accountNumber.trim();

  req.session.data.directDebitSortCode =
    formattedSortCode;

  // masked version for summaries if needed later
  req.session.data.directDebitMaskedAccountNumber =
    '****' + accountNumber.trim().slice(-4);

  // ========================================
  // RETURN WITH ERRORS
  // ========================================

  if (hasError) {

    return res.render(`${version}/${letter}/enter-bank-details`, {
      data: req.session.data
    });
  }

  // ========================================
  // SUCCESS
  // ========================================

  return res.redirect(`/${version}/${letter}/confirm-direct-debit`);

});

// ======================================================
// GET
// ======================================================

router.get('/:version/:letter/confirm-direct-debit', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  res.render(`${version}/${letter}/confirm-direct-debit`, {
    data: req.session.data
  });

});


// ======================================================
// POST
// ======================================================

router.post('/:version/:letter/confirm-direct-debit', function (req, res) {

  const { version, letter } = req.params;

  const confirm =
    req.body.confirm;

  // ========================================
  // CLEAR ERROR
  // ========================================

  delete req.session.data.confirmDirectDebitError;

  // ========================================
  // VALIDATION
  // ========================================

  const hasConfirmed =
    Array.isArray(confirm)
      ? confirm.includes('agreed')
      : confirm === 'agreed';

  if (!hasConfirmed) {

    req.session.data.confirmDirectDebitError =
      'You must agree to the terms and conditions';

    return res.render(`${version}/${letter}/confirm-direct-debit`, {
      data: req.session.data
    });
  }

  // ========================================
  // STORE
  // ========================================

  req.session.data.confirm =
    Array.isArray(confirm)
      ? confirm[0]
      : confirm;

  // ========================================
  // SUCCESS
  // ========================================

  return res.redirect(`/${version}/${letter}/direct-debit-confirmed`);

});

router.get('/:version/:letter/payment-made', function (req, res) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  // =========================================
  // DEFAULT
  // =========================================

  let variant = "full-payment";

  // =========================================
  // OVERRIDES
  // =========================================

  if (req.session.data.paymentFlowVariant === "medical-exemption-charge-only") {
    variant = "medical-exemption-partial";
  }

  if (req.session.data.paymentFlowVariant === "maternity-exemption-charge-only") {
    variant = "maternity-exemption-partial";
  }

  if (req.session.data.paymentFlowVariant === "penalty-full-payment") {
    variant = "full-payment";
  }

  if (req.session.data.paymentFlowVariant === "partial-payment") {
    variant = "partial-payment";
  }

  // fallback safety (old flag support)
  if (req.session.data.fromMedicalExemptionFlow) {
    variant = "medical-exemption-partial";
  }

  if (req.session.data.fromMaternityExemptionFlow) {
    variant = "maternity-exemption-partial";
  }

  res.render(`${version}/${letter}/payment-made`, {
    data: req.session.data,
    variant
  });
});

module.exports = router;