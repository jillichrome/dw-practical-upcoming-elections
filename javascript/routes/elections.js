const express = require('express');
const request = require('request');

const EXTERNAL_URL = 'https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us';

function buildApiUrl(state, city) {
  state = state.toLowerCase();
  let url = `${EXTERNAL_URL}/state:${state}`;
  if(city) {
    city = city.toLowerCase().replace(' ', '_');
    url = `${url}/place:${city}`;
  }
  return url;
}

function electionSearch(req, res, next) {
  let options = {
    uri: buildApiUrl(req.body.state, req.body.city),
    headers: {'accept' : 'application/json'}
  }
  console.log(options.uri);

  request(options, (err, response, body) => {
    const data = JSON.parse(body);
    res.render('elections', {elections: data});
  })
}

module.exports = {
  electionSearch,
  buildApiUrl
}
