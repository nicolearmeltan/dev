const multer = require('multer');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../uploads/videos');
  },
  filename: (req, file, cb) => {
    let ext = file.originalname.split(".").length > 1 ?
      file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length)
      : 'default'; // set default extension (if any)
    cb(null, Date.now() + ext);
  }
});

var upload = multer({ storage: storage });

module.exports = upload;