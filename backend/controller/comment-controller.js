
import Comment from '../model/comment.js';


export const newComment = async (request, response) => {
    try {
        const comment = await new Comment(request.body);
        comment.save();

        console.log('Comment add successfully')
        response.status(200).json('Comment saved successfully');
    } catch (error) {
        console.log('Comment add error')
        response.status(500).json(error);
    }
}


export const getComments = async (request, response) => {
    try {
        const comments = await Comment.find({ postId: request.params.id });
        
        console.log('Comments get successful')
        response.status(200).json(comments);
    } catch (error) {
        console.log('Comments get error')
        response.status(500).json(error)
    }
}

export const deleteComment = async (request, response) => {
    try {
        const comment = await Comment.findById(request.params.id);
        await comment.delete()

        console.log('Comment delete successful')
        response.status(200).json('comment deleted successfully');
    } catch (error) {
        console.log('Comment delete error')
        response.status(500).json(error)
    }
}