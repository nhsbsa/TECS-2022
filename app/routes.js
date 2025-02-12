// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

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

router.get(/confirm-entitlement/, function (req, res) {

  if (req.query.confirm == 'entitlement') {
    res.redirect('what-happens-next');
  }
  else if (req.query.confirm == 'pay') {
    res.redirect('cannot-pay');;
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
router.post(/claiming-any-benefits/, function (req, res) {

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

router.get(/maternity-exemption/, function (req, res) {
  if (req.query.exemption == 'yes') {
    res.redirect('no-matex-radio');
  }
  else if (req.query.exemption == 'no') {
    res.redirect('cannot-confirm-pcn');;
  }
});

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
    res.redirect('payment-method');;
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

router.post('/v6-pcn/pay-by-dd', function(req, res) {
    const selectedCheckboxes = req.body.checkbox;

    // Check if all 3 checkboxes are selected
    if (Array.isArray(selectedCheckboxes) && selectedCheckboxes.length === 3) {
      // All checkboxes are selected, redirect to 'instalment' page
      res.redirect('/v6-pcn/direct-debit-instalment-option');
    } else {
      // Not all checkboxes are selected, redirect to 'unable to set up' page
      res.redirect('/v6-pcn/unable-to-set-up-direct-debit');
    }
});

// DD monthly instalment option - PECS

router.post('/v6-pcn/direct-debit-instalment-option', function(req, res) {
  const months = req.session.data['months'];

  if (months === "3" || months === "6" || months === "12") {
    res.redirect('/v6-pcn/direct-debit-date');
  } else {
    // If none of the options are selected don't progress
    res.redirect('/v6-pcn/direct-debit-instalment-option');
  }
});

// DD select payment date - PECS

router.post('/v6-pcn/direct-debit-date', function(req, res) {
  const day = req.session.data['day'];

  if (day > 0 &&  day <= 28) {
    // if day number is greater than 0 and less or equal to 28 progress
    res.redirect('/v6-pcn/direct-debit-check-address');
  } else {
    // if day number is greater than 28 don't progress
    res.redirect('/v6-pcn/direct-debit-date');
  }
});

// DD check address is correct - PECS

router.post('/v6-pcn/direct-debit-check-address', function(req, res) {
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

router.post('/v6-pcn/enter-bank-details', function(request, response) {
  var accnumber = request.session.data['accnumber']
  if (accnumber === "12345679"){
    response.redirect("/v6-pcn/we-could-not-verify-your-details")
  } else {
    response.redirect("/v6-pcn/confirm-direct-debit")
  }
})

//  Enter your bank details - DECS

router.post('/v6-pcn-decs/enter-bank-details', function(request, response) {
  var accnumber = request.session.data['accnumber']
  if (accnumber === "12345679"){
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

router.post('/v6-pcn/experimental/what-is-your-address-postcode', function(req, res) {
  let postcode = req.session.data['postcode-search'];
  
  if (postcode && postcode.trim() !== '') {
    res.redirect('/v6-pcn/experimental/what-is-your-address-select');
  } else {
    // If blank don't progress
    res.redirect('/v6-pcn/experimental/what-is-your-address-postcode');
  }
});


// Routes for UR Feb 2025
router.use('/user-research-feb-2025', require('./views/user-research-feb-2025/\_routes'));


module.exports = router;