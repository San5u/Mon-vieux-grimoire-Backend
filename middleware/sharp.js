//npm install multer sharp
const sharp = require("sharp");
const path = require("path");

const compressImage = async (req, res, next) => {
    if (!req.file){
        return next();
    }
    const name = req.file.originalname.split(" ").join("_").split(".")[0];
    const filename = `${name}_${Date.now()}.webp`;
    const outPath = path.join(__dirname, "../images", filename);
    try {
        await sharp(req.file.buffer)
        .webp({ quality: 60 })
        .toFile(outPath);
        console.log(req)
        req.file.filename = filename; //MAJ du nom du fichier
        next();
    } catch (error) {
        res.status(500).json({ error: "Erreur lors du traitement de l'image", req:name, req1:filename, req2:outPath, req3:error});
    }
};

module.exports = compressImage;