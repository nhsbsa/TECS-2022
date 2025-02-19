const express = require('express')  
const router = express.Router()
const path = require('path');

// Enter your reference number
router.post('/enter-reference-number', function(request, response) {
    let reference = request.session.data['reference-number']
    
    if (!reference || reference.trim() === '') {
      return response.render(path.join(__dirname, 'enter-reference-number'), {
        formError: ' '
      });
    } else {
      response.redirect("enter-reference-number-again")
    }
})

// Enter your reference number again
router.post('/enter-reference-number-again', function(request, response) {
  let referenceConfirm = request.session.data['reference-number-confirm']
  
  if (!referenceConfirm || referenceConfirm.trim() === '') {
    return response.render(path.join(__dirname, 'enter-reference-number-again'), {
      formError: ' '
    });
  } else {
    response.redirect("date-of-birth")
  }
})

// Date of birth
router.post('/date-of-birth', function(request, response) {
  const currentYear = new Date().getFullYear();
  let day = request.session.data['day']
  let month = request.session.data['month']
  let year = request.session.data['year']
  
  // Could do more advanced error checking or messaging but below is basic for now...
  if (day > 31 || !day || month > 12 || !month || year > currentYear || !year ){
    return response.render(path.join(__dirname, 'date-of-birth'), {
      formError: ' '
    });
  } else {
    response.redirect("enter-postcode")
  }
})

// Enter your postcode
router.post('/enter-postcode', function(request, response) {
  let postcode = request.session.data['postcode']

  if (postcode === "NE2 4XL" || postcode === "NE24XL" || postcode === "NE1 3JA" || postcode === "NE13JA" ) {
    response.redirect("penalty-charge-notice-details")
  } 
  else if (!postcode || postcode.trim() === '') {
    return response.render(path.join(__dirname, 'enter-postcode'), {
      formError: ' '
    });
  } else {
    response.redirect("cannot-find-your-details")
  }
})

// What you need to do next
router.post('/what-you-need-to-do-next', function(request, response) {
  let confirm = request.session.data['confirm']

  // There will be conditions need adding based on postcode entered, one for DWP journey one for BSA on the entitled option

  if (confirm === "entitled") {
    response.redirect("entitled")
  } else if (confirm === "pay") {
    response.redirect("payment-method")
  } else if (confirm === "check") {
    response.redirect("check")
  } else {
    return response.render(path.join(__dirname, 'what-you-need-to-do-next'), {
      formError: ' '
    });
  }
})

// Confirm I was entitled (Need page building)

// Check I was entitled (Need page building)

// Payment method
router.post('/payment-method', function(request, response) {
  let method = request.session.data['payment-method']

  if (method === "credit") {
    response.redirect("pay-by-card")
  } else if (method === "dd") {
    response.redirect("paying-by-direct-debit")
  } else {
    return response.render(path.join(__dirname, 'payment-method'), {
      formError: ' '
    });
  }
})

// Paying by debit or credit card
router.post('/pay-by-card', function(request, response) {
  let fullAmount = request.session.data['amount']

  if (fullAmount === "yes") {
    response.redirect("gov-pay")
  } else if (fullAmount === "no") {
    response.redirect("partial-payment")
  } else {
    return response.render(path.join(__dirname, 'pay-by-card'), {
      formError: ' '
    });
  }
})

// Partial payment by debit or credit card
router.post('/partial-payment', function(request, response) {
  let amount = request.session.data['partial-amount']
  
  if (!amount || amount.trim() === '') {
    return response.render(path.join(__dirname, 'partial-payment'), {
      formError: ' '
    });
  } else {
    response.redirect("gov-pay")
  }
})

// Gov Pay
router.post('/gov-pay', function(request, response) {
  let name = request.session.data['cardholder']
  
  if (!name || name.trim() === '') { // Probably needs more fields adding here and error messaging added to view
    return response.render(path.join(__dirname, 'gov-pay'), {
      formError: ' '
    });
  } else {
    response.redirect("gov-pay-confirm")
  }
})

// Gov Pay confirm payment

// Paying by Direct Debit
router.post('/paying-by-direct-debit', function(request, response) {
  // Get the checked checkboxes
  const checkboxes = request.body['dd-checkbox'];

  // Case 1: If none are checked, redirect to unable to set up Direct Debit page
  if (!checkboxes || checkboxes.length === 0) {
    return response.redirect('unable-to-set-up-direct-debit');
  }

  // Case 2: If checkbox 1 and checkbox 2 are checked, but checkbox 3 is unchecked, show error message
  if (checkboxes.includes('bank') && checkboxes.includes('authorise') && !checkboxes.includes('charges')) {
    return response.render(path.join(__dirname, 'paying-by-direct-debit'), {
      formError: ' '
    });
  }

  // Case 3: If all checkboxes are checked, allow user to continue
  if (checkboxes.length === 3) {
    return response.redirect('direct-debit-instalment-option');
  }

  // Default case: If the conditions are not met, redirect to the "unable" page (fallback)
  return response.redirect('unable-to-set-up-direct-debit');
})

// Direct Debit instalment option
router.post('/direct-debit-instalment-option', function(request, response) {
  let instalment = request.session.data['instalment']

  if (instalment === "3" || instalment === "6" || instalment === "12") {
    response.redirect("direct-debit-date")
  } else {
    return response.render(path.join(__dirname, 'direct-debit-instalment-option'), {
      formError: ' '
    });
  }
})

// Direct Debit date
router.post('/direct-debit-date', function(request, response) {
  let date = request.session.data['payment-date']

  if (!date || date.trim() === '' || date == 0 || date > 28) {
    return response.render(path.join(__dirname, 'direct-debit-date'), {
      formError: ' '
    });
  } else {
    response.redirect("direct-debit-check-address")
  }
})

// Direct Debit check address
router.post('/direct-debit-check-address', function(request, response) {
  let address = request.session.data['dd-address']

  if (!address) {
    return response.render(path.join(__dirname, 'direct-debit-check-address'), {
      formError: ' '
    });
  } else if (address === "yes") {
    response.redirect("direct-debit-check-your-answers")
  } else {
    response.redirect("direct-debit-what-is-your-address")
  }
})

// Direct Debit what is your address
router.post('/direct-debit-what-is-your-address', function(request, response) {
  let addressOne = request.session.data['address-line-one']
  let addressTwo = request.session.data['address-line-two']
  // let addressThree = request.session.data['address-line-three']
  // let addressFour = request.session.data['address-line-four']
  let postcode = request.session.data['postcode']

  if (!addressOne || addressOne.trim() === '' || !addressTwo || addressTwo.trim() === '' || !postcode || postcode.trim() === '') {
    return response.render(path.join(__dirname, 'direct-debit-what-is-your-address'), {
      formError: ' '
    });
  } else {
    response.redirect("direct-debit-check-your-answers")
  }
})

// Enter your bank details
router.post('/enter-your-bank-details', function(request, response) {
  let holder = request.session.data['account-holder']
  let number = request.session.data['account-number']
  let sortOne = request.session.data['sort-code-one']
  let sortTwo = request.session.data['sort-code-two']
  let sortThree = request.session.data['sort-code-three']

  if (!holder || holder.trim() === '' || !number || number.trim() === '' || !sortOne || sortOne.trim() === '' || !sortTwo || sortTwo.trim() === '' || !sortThree || sortThree.trim() === '') {
    return response.render(path.join(__dirname, 'enter-your-bank-details'), {
      formError: ' '
    });
  } else if ( number === "12345679") {
    response.redirect("we-could-not-verify-your-details")
  } else {
    response.redirect("direct-debit-confirmed")
  }
})

// Change your bank details (KYC fail - we could not verify your details)
router.post('/change-your-bank-details', function(request, response) {
  let holder = request.session.data['account-holder']
  let number = request.session.data['account-number']
  let sortOne = request.session.data['sort-code-one']
  let sortTwo = request.session.data['sort-code-two']
  let sortThree = request.session.data['sort-code-three']

  if (!holder || holder.trim() === '' || !number || number.trim() === '' || !sortOne || sortOne.trim() === '' || !sortTwo || sortTwo.trim() === '' || !sortThree || sortThree.trim() === '') {
    return response.render(path.join(__dirname, 'change-your-bank-details'), {
      formError: ' '
    });
  } else {
    // If fields aren't empty send back here to try again
    response.redirect("we-could-not-verify-your-details")
  }
})

// Change your address
router.post('/change-your-address', function(request, response) {
  let addressOne = request.session.data['address-line-one']
  let addressTwo = request.session.data['address-line-two']
  // let addressThree = request.session.data['address-line-three']
  // let addressFour = request.session.data['address-line-four']
  let postcode = request.session.data['postcode']

  if (!addressOne || addressOne.trim() === '' || !addressTwo || addressTwo.trim() === '' || !postcode || postcode.trim() === '') {
    return response.render(path.join(__dirname, 'direct-debit-what-is-your-address'), {
      formError: ' '
    });
  } else {
    // If fields aren't empty send back here to try again
    response.redirect("we-could-not-verify-your-details")
  }
})

module.exports = router