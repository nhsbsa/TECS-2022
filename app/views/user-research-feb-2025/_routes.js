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

  if (confirm === "entitled") {
    response.redirect("entitled")
  } else if (confirm === "pay") {
    response.redirect("pay")
  } else if (confirm === "check") {
    response.redirect("check")
  } else {
    return response.render(path.join(__dirname, 'what-you-need-to-do-next'), {
      formError: ' '
    });
  }
})

module.exports = router