const config = require('config');
console.log(config.port);

const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
app.listen(config.port, () => {
    console.log(`server is running on http://localhost:${config.port}`);
})

app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/');
        },
        filename: (req, file, cb) => {
            const fileName = file.originalname.toLowerCase().replaceAll(' ', '_');
            cb(null, fileName);
        }
    }
);

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['application/zip', 'application/x-zip-compressed'];
    if (allowedMimeTypes.includes(file.mimetype)) {
        return cb(null, true);
    } else {
        return cb(null, false);
    }
}

const limits = {
    fileSize: 0.5 * 1024 * 1024
}

const upload = multer({storage, fileFilter, limits});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.post('/upload-file', (req, res) => {
    upload.single('file')(req, res, err => {
        if (err) {
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(400).json({"Error": "file size limit exceeded"});
            }

            if (err instanceof multer.MulterError) {
                return res.status(400).json({error: 'File upload error: ' + err.message});
            }
            return res.status(500).json({"Error": err.message});
        }
        if (!req.file) {
            return res.status(400).json({"Error": "only zip files"});
        }
        console.log(req.file);
        res.send("the file was uploaded successfully");
    });
});

