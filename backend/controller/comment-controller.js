
import Comment from '../model/comment.js';

import logger from '../utils/logger.js';

export const newComment = async (request, response) => {
    try {
        const comment = await new Comment(request.body);
        comment.save();

        // logger.info('Comment add successfully')
        // response.status(200).json('Comment saved successfully');
        // logger.info({ message: 'Comment added successfully', method: request.method, path: request.path, body: request.body, timestamp: new Date().toISOString() });
        response.status(200).json('Comment saved successfully');
    } catch (error) {
        // logger.info('Comment add error')
        // response.status(500).json(error);
        // logger.info({ message: 'Comment add error', method: request.method, path: request.path, body: request.body, timestamp: new Date().toISOString() });
        response.status(500).json(error);
    }
}


export const getComments = async (request, response) => {
    try {
        const comments = await Comment.find({ postId: request.params.id });
        
        // logger.info('Comments get successful')
        // response.status(200).json(comments);
        // logger.info({ message: 'Comments get successful', method: request.method, path: request.path, params: request.params, timestamp: new Date().toISOString() });
        response.status(200).json(comments);
    } catch (error) {
        // logger.info('Comments get error')
        // response.status(500).json(error)
        // logger.info({ message: 'Comments get error', method: request.method, path: request.path, params: request.params, timestamp: new Date().toISOString() });
        response.status(500).json(error);
    }
}

export const deleteComment = async (request, response) => {
    try {
        const comment = await Comment.findById(request.params.id);
        await comment.delete()

        // logger.info('Comment delete successful')
        // response.status(200).json('comment deleted successfully');
        // logger.info({ message: 'Comment delete successful', method: request.method, path: request.path, params: request.params, timestamp: new Date().toISOString() });
        response.status(200).json('Comment deleted successfully');
    } catch (error) {
        // logger.info('Comment delete error')
        // response.status(500).json(error)
        // logger.info({ message: 'Comment delete error', method: request.method, path: request.path, params: request.params, timestamp: new Date().toISOString() });
        response.status(500).json(error);
    }
}