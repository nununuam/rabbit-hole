const router = require('express').Router();

router.post("/upload", ctrl.users.createdVideo);

module.exports = router;