const express = require('express')  
const router = express.Router()

// PLEASE NOTE: SOME ROUTES BELOW HAVE TEMPORARY VERY BASIC ERROR ROUTING, WILL NEED ADDING IN PROPER FUNCTIONAL DYNAMIC ERROR ROUTING IF NECESSARY


// Enter your reference number
router.post('/enter-reference-number', function(request, response) {
    var reference = request.session.data['reference-number']
    if (reference === "georgerowley"){
      response.redirect("error")
    } else {
      response.redirect("enter-reference-number-again")
    }
})

// Enter your reference number again
router.post('/enter-reference-number-again', function(request, response) {
  var referenceConfirm = request.session.data['reference-number-confirm']
  if (referenceConfirm === "georgerowley"){
    response.redirect("error")
  } else {
    response.redirect("date-of-birth")
  }
})

// Date of birth
router.post('/date-of-birth', function(request, response) {
  var day = request.session.data['day']
  var month = request.session.data['month']
  if (day > 31 || month > 12){
    response.redirect("error")
  } else {
    response.redirect("enter-postcode")
  }
})

// Enter your postcode
router.post('/enter-postcode', function(request, response) {
  var postcode = request.session.data['postcode']

  if (postcode === "NE2 4XL" || postcode === "NE24XL" || postcode === "NE1 3JA" || postcode === "NE13JA" ) {
    response.redirect("penalty-charge-notice-details")
  } else {
    response.redirect("cannot-find-your-details")
  }
})

// What you need to do next

module.exports = router