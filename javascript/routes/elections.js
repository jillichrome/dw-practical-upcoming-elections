const express = require('express');
const request = require('request');
const electionsRouter = express.Router();

const EXTERNAL_URL = 'https://api.turbovote.org/elections/upcoming?district-divisions=';

function buildOcdId(state) {
  return `ocd-division/country:us/state:${state}`;
}

function electionSearch(req, res, next) {
  let options = {
    uri: EXTERNAL_URL + buildOcdId(req.body.state.toLowerCase()),
    headers: {'accept': 'application/json'}
  };
  request(options, (err, response, body) => {
    const data = JSON.parse(body);
    let elections = [];
    elections.push(data[0].description);
    console.log(data[0].description);
    res.render('elections', {elections: elections});
  })
}

module.exports = electionSearch;
