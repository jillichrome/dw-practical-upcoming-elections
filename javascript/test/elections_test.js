const tap = require('tap');
const {buildApiUrl} = require('../routes/elections');

const state = 'az';
const city = 'tempe';

tap.equal(buildApiUrl(state, city), 'https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:az/place:tempe');
