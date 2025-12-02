const express = require('express');
const router = express.Router();

// If settings['v5-enquiry'].allowExpedite is set to 'true'
// in the session-data-defaults.js, this will allow any postcode and begin
// the expedite route

router.post(/date-of-birth/, function( req, res ){
    let destination = 'enter-postcode';
    res.redirect( destination );
});


router.post(/enter-postcode/, function( req, res ){
    
    let destination = 'enquiry-letter-details';

    if( req.session.data.settings[res.locals.version].allowEmail === 'true' ){
          destination = 'email-choice-EXPEDITE-v3';
    } else {
      if( req.session.data.settings[res.locals.version].type === 'decs' ){
          destination = 'enquiry-letter-details-decs-EXPEDITE';
      }
    }

    res.redirect( destination );
});

router.post(/email-choice-EXPEDITE-v3/, function( req, res ){

  let destination = 'enquiry-letter-details?showEmail=blank';

  if( req.session.data.hasEmailAddress === 'yes' ){

    if( req.session.data.settings[res.locals.version].type === 'decs' ){
      destination = 'enquiry-letter-details-decs-EXPEDITE';
    } else {
      destination = 'email-confirmation-EXPEDITE-v3'
    }

  } 

  res.redirect( destination );
});


router.post(/email-change-EXPEDITE-v3/, function( req, res ){
  let destination = 'email-confirmation-EXPEDITE-v3';
  res.redirect( destination );
});





router.post(/email-confirmation-EXPEDITE-v3/, function( req, res ){
  let destination = 'enquiry-letter-details?showEmail=provided';
  if( req.session.data.settings[res.locals.version].type === 'decs' ){
          destination = 'enquiry-letter-details-decs-EXPEDITE';
  }
  res.redirect( destination );
});



router.post(/what-you-want-to-do-next/, function( req, res ){
    let destination = 'what-happens-next';
    if( req.session.data.confirm === 'what-happens-next' ){
        destination = 'you-will-be-sent-pcn-EXPEDITE-v3';
    }
    res.redirect( destination );
});

router.post(/accept-pcn-EXPEDITE-v3/, function (req, res) {
   let destination = 'accept-pcn-EXPEDITE-v3?showErrors=true';
   const tickBox = req.session.data.acceptPCNDeclarationB;
  if( Array.isArray(tickBox) && tickBox[0] === 'acceptCharge'  ){
    delete req.session.data.showErrors;
    destination = 'pcn-accepted-EXPEDITE-v3';
  }

  res.redirect( destination );
});

router.post(/accept-pcn-EXPEDITE-v2-b/, function (req, res) {
   let destination = 'accept-pcn-EXPEDITE-v2-b?showErrors=true';
   const tickBox = req.session.data.acceptPCNDeclarationB;
  if( Array.isArray(tickBox) && tickBox[0] === 'acceptCharge'  ){
    delete req.session.data.showErrors;
    destination = 'pcn-accepted-EXPEDITE-v2';
  }

  res.redirect( destination );
});

router.post(/accept-pcn-EXPEDITE-v2/, function (req, res) {
  
  let destination = 'accept-pcn-EXPEDITE-v2?showErrors=true';

  const tickBox = req.session.data.acceptPCNDeclaration;
  let isOK = true;
  if( Array.isArray(tickBox) ){
    if( tickBox.indexOf('acceptCharge') === -1 || tickBox.indexOf( 'acceptTiming' ) === -1 ){
        isOK = false;
    }
  } else {
    isOK = false;
  }

  if( isOK ){
    delete req.session.data.showErrors;
    destination = 'pcn-accepted-EXPEDITE-v2';
  }

  res.redirect( destination );
});

router.post(/accept-pcn-EXPEDITE/, function (req, res) {
  res.redirect( 'pcn-accepted-EXPEDITE' );
});






module.exports = router;