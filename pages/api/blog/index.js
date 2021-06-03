import nc from 'next-connect';
import cors from 'cors';
import multer from 'multer';
import Blog from '../../../models/blog';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

const upload = multer({ dest: process.env.temp });

const handler = nc()
    .use(cors())
    .use(upload.single("image"))
    .post(async (req, res) => {
        if (!req.file) {
            return res.status(400).json({ message: "No file found" });
        }
        if (!mongoose.connection.readyState)
            await mongoose.connect(process.env.dbUrl, {
                useUnifiedTopology: true, useNewUrlParser: true,
            });
        const body = req.body;
        console.log(body)
        console.log(req.file)
        const oldPath = req.file.path;
        const extension = req.file.mimetype.split("/")[1];
        const imageFinalName = `${req.file.originalname}.${extension}`;
        const newPath = path.join(process.env.upload, imageFinalName);
        fs.renameSync(oldPath, newPath);
        const blog = new Blog({
            ...body, imagePath: newPath, imageType: extension,
        });
        try {
            await blog.save();
            res.json({ message: "success" });
        } catch (error) {
            res.json({ message: error });
        }
    });

export default handler;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};