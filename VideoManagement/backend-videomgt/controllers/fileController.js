var fs = require('fs');

const db = require('../configs/dbConfig');
const Video = db.video
const User = db.user
exports.upload = (req, res) => {

  console.log(req, 'REQS')
  if (!req.file) {
    return res.send('Please upload a file');
  } else {
    Video.create({
      type: req.file.mimetype,
      filename: req.file.originalname,
      description: req.body.description,
      path: req.file.path
    }).then(video => {
      try {
        fs.writeFileSync('../uploads/videos' + video.name)

        res.json({
          'msg': 'File uploaded successfully',
          'file': req.file
        });
      } catch (err) {
        res.json({ "error": err });
      }
    });
  }

}

exports.user = (req, res) => {
  console.log(req, 'BODY')
  if (!req.body) {
    return res.send('Please upload a file');
  } else {
    User.create({
      type: req.body.firstname,
      filename: req.file.lastname,
    }).then(() => {
      try {
        res.json({
          'msg': 'File uploaded successfully',
          'body': req.body
        });
      } catch (err) {
        res.json({ "error": err });
      }
    });
  }

}