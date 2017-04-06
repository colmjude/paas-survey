var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

// Purpose for using PaaS
router.get('/survey/building-a-new-service', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var purpose = req.query['purpose-q']

  if (purpose === 'hosting a service') {
    // redirect to the relevant page
    res.render('survey/building-a-new-service')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.redirect('/survey/additional-prototype-features')
  }
})

module.exports = router
