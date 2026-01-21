const express = require('express');
const router = express.Router();

router.post(/enter-postcode/, function( req, res ){
    destination = 'enquiry-letter-details';
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