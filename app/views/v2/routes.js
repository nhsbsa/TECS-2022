// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line



//////////////////////////
        // PECS ENQUIRY JOURNEY //
        //////////////////////////

        
    
    // Postcode route
    router.get(/postcode-input/, function (req, res) {
      if (req.query.postcode == 'NE1 3JA') {
        res.redirect('challenge-pecs');
      } else if (req.query.postcode == 'NE2 4XL') {
        res.redirect('challenge-pecs-copy');;
      }
      else {
        res.redirect('unable-to-confirm-id');
      }
    });  
    
    router.get(/taxcredit-handler/, function (req, res) {
        if (req.query.taxcredit == 'yes') {
          res.redirect('cert-number');
        }
         else if (req.query.taxcredit == 'no') {
         res.redirect('dwp-did-you-bsa');;
         }
       });
       router.get(/dwpclaiming-isa/, function (req, res) {
        if (req.query.exemptionbenefit == 'yes') {
          res.redirect('dwp-check-name-uc');
        }
         else if (req.query.exemptionbenefit == 'no') {
         res.redirect('dwp-did-you-bsa');;
         }
       });
       router.get(/bsa-handler/, function (req, res) {
        if (req.query.bsa == 'yes') {
          res.redirect('dwp-check-name-uc');
        }
        else if (req.query.bsa == 'mat') {
          res.redirect('dwp-check-name-uc');
        }
        else if (req.query.bsa == 'ppc') {
          res.redirect('dwp-check-name-uc');
        }
         else if (req.query.bsa == 'med') {
           res.redirect('dwp-check-name-uc');
         }
         else if (req.query.bsa== 'hc2') {
           res.redirect('dwp-check-name-uc');
         }
         else if (req.query.bsa == 'tc') {
           res.redirect('dwp-check-name-uc');
         }
         else if (req.query.bsa == 'no') {
           res.redirect('dwp-exemptions-pecs');
         }
       });
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

       router.get(/checkdob/, function (req, res) {
        if (req.query.detailsdob == 'yes') {
          res.redirect('dwp-check-address-pecs');
        }
         else if (req.query.detailsdob == 'no') {
         res.redirect('dwp-update-dob');;
         }
       });

       router.get(/checkaddress/, function (req, res) {
        if (req.query.detailsaddress == 'yes') {
          res.redirect('dwp-check-your-answers');
        }
         else if (req.query.detailsaddress == 'no') {
         res.redirect('dwp-update-address-uc-pecs');;
         }
       });

       
    
    
    
module.exports = router;

