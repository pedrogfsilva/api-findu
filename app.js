// importando módulos utilizados na aplicação
import express from 'express';
import db from './src/database/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

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
app.use('/tag', tagRoute);
app.use('/category', categoryRoute);
app.use('/beacon', beaconRoute);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage: storage });

app.get('/image', (req, res) => {
    Image.find({}, (err, items) => {
        if(err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        } else {
            res.send({ items: items });
        }
    });
});

app.post('/image', upload.single('image'), (req, res, next) => {
    const obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }

    Image.create(obj, (err, item) => {
        if(err) {
            console.log(err);
        } else {
            // item.save();
            res.send('Image uploaded successfully');
        }
    })
});

// inicializando servidor em sua respectiva porta
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});