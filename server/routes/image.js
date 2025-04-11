const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const router = express.Router();

cloudinary.config({ 
  cloud_name: "dr8xc1xto", 
  api_key: "729498845188692", 
  api_secret: "nPwUaExYL4XAxdXa-KAPqk6Yz0I"
});

// Configure Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "general", // Folder in Cloudinary
    format: async (req, file) => file.originalname.split(".")[1],
    public_id: (req, file) => file.originalname.split(".")[0]
  },
});

const upload = multer({ storage });

// API to Upload Image
router.post("/upload/general", upload.single("image"), (req, res) => {
  res.json({ imageUrl: req.file.path });
});

module.exports = router;
