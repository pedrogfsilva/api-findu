import express from 'express';
import db from './src/database/db.js';
import cors from 'cors';
import dotenv from 'dotenv';

import tagRoute from './src/routes/tag.route.js';
import categoryRoute from './src/routes/category.route.js';
import beaconRoute from './src/routes/beacon.route.js';

dotenv.config();

const app = express();
const PORT = 3000 || process.env.PORT;

db.connectDatabase();

app.use(express.json());
app.use(cors());
app.use('/tag', tagRoute);
app.use('/category', categoryRoute);
app.use('/beacon', beaconRoute);

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});