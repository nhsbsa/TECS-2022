function initialiseJourney(req) {

  const { version, letter } = req.params;

  req.session.data.version = version;
  req.session.data.letter = letter;

  return {
    version,
    letter
  };
}

module.exports = {
  initialiseJourney
};