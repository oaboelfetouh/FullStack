const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
exports.storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    let extension = file.originalname.split('.').pop();
    cb(null, uuidv4() + '.' + extension);
  },
});
