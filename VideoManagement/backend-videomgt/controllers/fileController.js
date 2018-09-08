var fs = require('fs');

const db = require('../configs/dbConfig');
const Video = db.video;

exports.upload = (req, res) => {
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