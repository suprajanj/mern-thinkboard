import express from 'express';
import { connectDB } from './config/db.js';
import notesRoutes from './routes/noteRoutes.js';

import dotenv from "dotenv";
import { getAllNotes } from './controllers/notesController.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;



//middleware
app.use(express.json());
app.use(rateLimiter);

// app.use((req, res, next) => {
//     console.log("We just got a new req");
//     next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

});


