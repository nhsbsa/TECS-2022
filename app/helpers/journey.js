function initialiseJourney(req) {

  const { version, journeyType } = req.params;

  req.session.data.version = version;
  req.session.data.journeyType = journeyType;

  return {
    version,
    journeyType
  };
}

module.exports = {
  initialiseJourney
};