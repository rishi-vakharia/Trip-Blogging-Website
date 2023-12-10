import grid from 'gridfs-stream';
import mongoose from 'mongoose';

import logger from '../utils/logger.js';

const url = 'http://localhost:8000';


let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});


export const uploadImage = (request, response) => {
    if(!request.file) {
        // logger.info('File not found')
        // return response.status(404).json("File not found");
        // logger.info({ message: 'File not found', method: request.method, path: request.path, timestamp: new Date().toISOString() });
        return response.status(404).json("File not found");
    }
    
    const imageUrl = `${url}/file/${request.file.filename}`;

    // logger.info('File upload success', imageUrl)
    // response.status(200).json(imageUrl);  
    // logger.info({ message: 'File upload success', imageUrl, method: request.method, path: request.path, timestamp: new Date().toISOString() });
    response.status(200).json(imageUrl);  
}

export const getImage = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename });
        // const readStream = gfs.createReadStream(file.filename);
        // readStream.pipe(response);
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
        // logger.info('File get success')
        // logger.info({ message: 'File get success', method: request.method, path: request.path, params: request.params, timestamp: new Date().toISOString() });
    } catch (error) {
        // logger.info('File get error', error.message)
        // response.status(500).json({ msg: error.message });
        // logger.info({ message: 'File get error', error: error.message, method: request.method, path: request.path, params: request.params, timestamp: new Date().toISOString() });
        response.status(500).json({ msg: error.message });
    }
}