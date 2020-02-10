# Upcoming Elections Practical

This is a server-side web application written in JavaScript with
[Express][express] and [Handlebars][handlebars].

## Setup

    npm install

## Running

    DEBUG=js-upcoming-elections:* npm start

## Testing

    npm test

[express]: https://expressjs.com/
[handlebars]: http://handlebarsjs.com/

## Design

In elections.js, the api url is built to match the OCD-ID corresponding to
the user's form inputs. The url is used for a GET request to Democracy
Works Elections API. Any upcoming elections and corresponding dates are then
displayed on the page with a POST call.
