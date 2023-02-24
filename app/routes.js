// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

///////////////////////
// ///V3 Routing///////
//////////////////////

router.get(/v3-postcode-input/, function (req, res) {
    if (req.query.postcode == 'NE1 3JA') {
      res.redirect('enquiry-letter-details');
    } else if (req.query.postcode == 'NE2 4XL') {
      res.redirect('enquiry-letter-details-copy');;
    }
    else {
      res.redirect('cannot-find-your-details');
    }
  });  

  router.get(/benefit-exemption/, function (req, res) {
    if (req.query.benefit == 'yes) {
      res.redirect('exemption-certificate-number');
    } 
    else if (req.query.benefit == 'no') {
    //  res.redirect('did-you-have-an-exemption');;
    }
    
  //});  


  




module.exports = router;
