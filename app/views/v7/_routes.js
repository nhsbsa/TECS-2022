const express = require('express');
const router = express.Router();


router.post(/configure-prototype/, function (req, res) {
    const destination = 'start';
    res.redirect( destination );
});

router.post(/enter-reference-number-again/, function (req, res) {
    const destination = 'date-of-birth';
    res.redirect( destination );
});

router.post(/enter-reference-number/, function (req, res) {
    const destination = 'enter-reference-number-again';
    res.redirect( destination );
});

router.post(/date-of-birth/, function (req, res) {
    const destination = 'enter-postcode';
    res.redirect( destination );
});




module.exports = router;