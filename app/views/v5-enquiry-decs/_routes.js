const express = require('express');
const router = express.Router();


router.post(/date-of-birth/, function( req, res ){
    let destination = 'enter-postcode';
    res.redirect( destination );
});


router.post(/enter-postcode/, function( req, res ){
    let destination = 'enquiry-letter-details';
    if( req.session.data.settings[res.locals.version].allowEmail === 'true' ){
          destination = 'email-choice';
    }
    res.redirect( destination );
});

router.post(/email-choice/, function( req, res ){

  let destination = 'enquiry-letter-details?showEmail=blank';

  if( req.session.data.hasEmailAddress === 'yes' ){
    destination = 'email-confirmation'
  } 

  res.redirect( destination );
});


router.post(/email-change/, function( req, res ){
  let destination = 'email-confirmation';
  res.redirect( destination );
});

router.post(/email-confirmation/, function( req, res ){
  let destination = 'enquiry-letter-details?showEmail=provided';
  res.redirect( destination );
});




router.post(/what-you-want-to-do-next/, function( req, res ){
    let destination = 'what-happens-next';
    if( req.session.data.confirm === 'what-happens-next' ){
        destination = 'you-will-be-sent-pcn';
    }
    res.redirect( destination );
});

router.post(/accept-pcn/, function (req, res) {
   let destination = ( req.originalUrl.indexOf('hc3') > -1 ) ? 'accept-pcn-hc3?showErrors=true' : 'accept-pcn?showErrors=true';
   const tickBox = req.session.data.acceptPCNDeclarationB;
  if( Array.isArray(tickBox) && tickBox[0] === 'acceptCharge'  ){
    delete req.session.data.showErrors;
    destination = ( req.originalUrl.indexOf('hc3') > -1 ) ? 'pcn-accepted-hc3' : 'pcn-accepted';
  }

  res.redirect( destination );
});


module.exports = router;