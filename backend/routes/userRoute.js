let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

  let userSchema = require('../models/userModel');

  router.route('/create-user').post((req, res, next) => {
    userSchema.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });

  router.route('/').get((req, res) => {
    userSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  
router.route('/editUser/:id').get((req, res) => {
    userSchema.findById(req.params.id, (error, data) => {
      if (error) {
          console.log('error', error);
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  router.route('/update-user/:id').put((req, res, next) => {
    userSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Student updated successfully !')
      }
    })
  })

  router.route('/delete-user/:id').delete((req, res, next) => {
    userSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })


  router.route('/login').post( async (req, res) => {
    var newUser = {};
    newUser.name = req.body.user_name;
    newUser.password = req.body.user_password;
      await userSchema.findOne({ user_name: newUser.name })
    .then(profile => {
        console.log('profile', profile);
      if (!profile) {
        res.json({
            data:null,
          status:401,
        msg:'User not exist'});
        // res.send("User not exist");
      } else {
        if (profile.user_password == newUser.password) {
          res.json({
              data:profile,
            status:200});
        } else {
            res.json({
                data:null,
              status:401,
            msg:'User Unauthorized Access'});
         // res.send("User Unauthorized Access");
        }
      }
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
  })

 
  
module.exports = router;