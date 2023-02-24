import multer from 'multer';

export default app => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix =
        Date.now() + '-' + Math.round(Math.random() * 100000);
      cb(null, file.fieldname + '-' + uniqueSuffix);
    },
  });
  const upload = multer({ storage: storage });

  app.post('/addImageToServer', upload.single('addImage'), (req, res) => {
    const file = req.file || req.addImage;
    if (file) {
      res.json({
        url: 'https://adn-backend-mj63t.ondigitalocean.app//public/images/' + req.file.filename,
      });
    } else {
      res.status(404).json({ msg: 'upload failed' });
    }
  });
};
