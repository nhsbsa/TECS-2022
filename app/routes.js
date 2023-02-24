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
     res.redirect('check-name');;
     }
   });
   
   router.get(/nhs-exemption/, function (req, res) {
    if (req.query.nhs == 'med') {
      res.redirect('check-name');
    }
    else if (req.query.nhs== 'mat') {
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
    else if (req.query.exemption== 'support') {
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
   
   
 // router.get(/benefit-exemption/, function (req, res) {
   // if (req.query.benefit == 'yes) {
    //  res.redirect('exemption-certificate-number');
    //} 
    //else if (req.query.benefit == 'no') {
    //  res.redirect('did-you-have-an-exemption');;
    //}
    
  //});  


  
   
   router.get(/dwpexemptions-handler/, function (req, res) {
    if (req.query.benefitsdwp == 'yes') {
      res.redirect('dwp-check-name-uc');
    }
    else if (req.query.benefitsdwp == 'is') {
      res.redirect('dwp-check-name-uc');
    }
    else if (req.query.benefitsdwp == 'jsa') {
      res.redirect('dwp-check-name-uc');
    }
     else if (req.query.benefitsdwp == 'uc') {
       res.redirect('dwp-check-name-uc');
     }
     else if (req.query.benefitsdwp == 'pc') {
       res.redirect('dwp-check-name-uc');
     }
    
     else if (req.query.benefitsdwp == 'no') {
       res.redirect('dwp-we-need-proof-pecs');
     }
   });
   router.get(/updatename/, function (req, res) {
    if (req.query.details == 'yes') {
      res.redirect('dwp-check-dob');
    }
     else if (req.query.details == 'no') {
     res.redirect('dwp-update-name');;
     }
   });




module.exports = router;
