const multer = require('multer');

exports.storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/images');
  },
  filename: (req, file, cb) => {
    cb(null, new Date.toISOString() + '-' + file.originalname);
  },
});
