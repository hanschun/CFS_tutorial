# Code For Sacramento tutorial
Code For Sacramento tutorial for getting and manipulating civic data

Understanding and manipulating civic data can be a challenge! This tutorial aims to break this process into a small number of distinct steps.

1. Learn how to write a simple program to access data using Javascript and **Node.js**
2. Find the data source that you are looking for and explore its API
3. Display the data so that you can find the datum you are interested in.

### Step 1
To start using Node, you will need to download Node from the Nodejs website, [https://www.nodejs.org](https://www.nodejs.org)
This will also install **npm**, the Node package manager, which is recommended for installing and updating various Node packages to simplify your work.

Once you have installed Node, you can use npm to install the popular AJAX package [Superagent](https://github.com/visionmedia/superagent).

**AJAX** is Asynchronous Javascript and XML, which is a cornerstone of how applications and websites communicate. Superagent will allow us to find city data with a minimum of effort.

###Code in action
This is a simple Node example for retrieving a dataset from the City of Sacramento Open Data Portal.
```
'use strict';
const request = require('superagent');
const baseUrl = 'http://api.data.cityofsacramento.org/';
const path = 'api/v2/datastreams/';
const dataset = 'SACRA-UCR-YEAR-TO-YEAR';
const api_key = 'd3165bfcf022dc1af8f1c19909a86b43b0340a0c';
request
  .get(baseUrl + path + dataset + '/data.json/?auth_key=' + api_key + '&limit=1')
  .end(function(err, res){
    if(err )
      console.log('Error', err);
    console.log(res.text);
  });
```
To run this, type ```npm start``` into your Terminal (Mac, Linux) or Command Prompt (Windows)
