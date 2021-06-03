import nc from 'next-connect';
import cors from 'cors';
import multer from 'multer';
import Blog from '../../../models/blog';
import mongoose from 'mongoose';
import fs from 'fs';

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
        const id = req.query.id;
        const blog = Blog.find({ $where: { id: id } });
        res.writeHead(200, {
            'Content-Type': `${blog.imageType}`,
        })
        fs.ReadStream(blog.imagePath).pipe(res);
    });

export default handler;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};