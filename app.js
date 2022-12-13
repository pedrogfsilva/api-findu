// importando módulos utilizados na aplicação
import express from 'express';
import db from './src/database/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';

// importando arquivos de rotas
import tagRoute from './src/routes/tag.route.js';
import categoryRoute from './src/routes/category.route.js';
import beaconRoute from './src/routes/beacon.route.js';

import Image from './src/models/Image.js';

// configurando dotenv
dotenv.config();

// criando servidor e inicializando sua porta
const app = express();
const PORT = 3000 || process.env.PORT;

// conectando com o banco de dados
db.connectDatabase();

// usando middlewares e rotas
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/tag', tagRoute);
app.use('/category', categoryRoute);
app.use('/beacon', beaconRoute);

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         console.log(file);
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// });

// const upload = multer({ storage: storage });

// app.post('/upload', upload.single('image'), (req, res) => {
//     res.send('ok');
// });

const Storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: Storage }).single('testImage');

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if(err) {
            console.log(err);
        } else {
            const newImage = {
                name: req.body.name,
                desc: req.body.desc,
                image: {
                    data: req.file.filename,
                    contentType: 'image/png'
                }
            };

            // newImage.save().then(() => res.send('success')).catch((err) => console.log(err));
            Image.create(newImage, (err, item) => {
                if(err) {
                    console.log(err);
                } else {
                    // item.save();
                    res.send('Image uploaded successfully');
                }
            });
        }
    })
});

// inicializando servidor em sua respectiva porta
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});