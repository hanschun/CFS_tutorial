'use strict';
const request = require('superagent');
const baseUrl = 'http://api.data.cityofsacramento.org/';
const path = 'api/v2/datastreams/';
const dataset = 'COUNC-DISTR';
const api_key = 'd3165bfcf022dc1af8f1c19909a86b43b0340a0c';
request
  .get(baseUrl + path + dataset + '/data.json/?auth_key=' + api_key + '&limit=1')
  .end(function(err, res){
    if(err)
      console.log('Error', err);
    var textResponse = JSON.parse(res.text);
    console.log(textResponse.result.fArray);
  });
