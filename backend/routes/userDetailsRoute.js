let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

  let userDetails = require('../models/userDetails');
  var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

function encrypt(text){
    console.log('test', text, algorithm,password);
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

  router.route('/create-user-info').post((req, res, next) => {
      req.body.SSN_no = encrypt(req.body.SSN_no);
    userDetails.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });

  router.route('/userDetails').get((req, res) => {
    userDetails.find((error, data) => {
      if (error) {
        return next(error)
      } else {
          data.forEach(data => data.SSN_no = decrypt(data.SSN_no));
        res.json(data)
      }
    })
  })

  router.route('/editUserDetails/:id').get((req, res) => {
    userDetails.findById(req.params.id, (error, data) => {
      if (error) {
          console.log('error', error);
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  router.route('/getuserDetails').post((req, res) => {

let  user = {};
user.name = req.body.user;
    userDetails.findOne({user : user.name}, (error, data) => {
      if (error) {
          console.log('error', error);
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  module.exports = router;