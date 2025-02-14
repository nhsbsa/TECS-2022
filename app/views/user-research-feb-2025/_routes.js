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

  // There will be conditions based on postcode need adding, one for DWP journey one for BSA on the entitled option

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

// Confirm I was entitled

// Check I was entitled

// Payment method
router.post('/payment-method', function(request, response) {
  let method = request.session.data['payment-method']

  if (method === "credit") {
    response.redirect("credit")
  } else if (method === "dd") {
    response.redirect("paying-by-direct-debit")
  } else {
    return response.render(path.join(__dirname, 'payment-method'), {
      formError: ' '
    });
  }
})

// Paying by debit or credit card

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

// Direct debit check address
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

module.exports = router