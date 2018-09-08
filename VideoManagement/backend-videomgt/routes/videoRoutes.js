var express = require('express')
var router = express.Router()

const upload = require('../configs/videoConfig');
const fileController = require('../controllers/fileController');

router.get('/', function (req, res) {
  if (req.body) {
    res.send('success');
  }
});

router.post('/upload', upload.single("uploadfile"), fileController.upload)


module.exports = router;