const users = require('../models/users');
  //this is where they delete, update for the indivisual user 
function index(req, res, next) {
  Student.find({}, function(err, users) {
    res.render('home', {
      users,
      user: req.user
    });
  });
}
  
  function addVideo(req, res, next) {
    req.user.video.push(req.body);
    req.user.save(function (err) {
      res.redirect("/home")
    })
  }

  function delVideo(req, res) {

  }

  module.exports = {
    index,
    addVideo,
    delVideo
  };