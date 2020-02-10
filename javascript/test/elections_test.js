var tap = require('tap');
var elections = require('../routes/elections');

const state = 'az';
const city = 'tempe';

tap.equal(elections.buildApiUrl(state, city), 'https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:az/place:tempe');
