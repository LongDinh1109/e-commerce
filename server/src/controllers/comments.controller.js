import resUtils from '../utils/res-utils.js';
import commentService from '../services/comments.service.js'

export const getComments = async (req, res, next) => {
  try {
    let comments = await commentService.getAllCommentsService(req.body);
    if (comments && comments.length > 0) {
      resUtils.status200(res, null, comments);
    } else {
      resUtils.status404(res, 'No comments found');
    }
  } catch (err) { next(err); }
}

export const createComment = async (req, res, next) => {
  try {
    const newComment = await commentService.createCommentService(req);
    resUtils.status201(res, `Create NEW comment successfully!`, newComment);
  } catch (err) { next(err); }
}

export const updateComment = async (req, res, next) => {
  try {
    const updatedComment = await commentService.updateCommentService(req);
    if (updatedComment) {
      resUtils.status200(res, `Update comment successfully!`, updatedComment);
    } else {
      resUtils.status404(res, `Comment not found!`);
    }
  } catch (err) { next(err); }
}

export const verifiedComment = async (req, res, next) => {
  try {
    const updatedComment = await commentService.verifiedCommentService(req);
    if (updatedComment) {
      let message = status ? 'Verified comment successfully!' : 'Unverified comment successfully!';
      resUtils.status200(res, message, updatedComment);
    } else {
      resUtils.status404(res, `Comment not found!`);
    }
  } catch (err) { next(err); }
}

export const deleteComment = async (req, res, next) => {
  try {
    const deletedComment = await commentService.deleteCommentService(req);
    if (deletedComment) {
      resUtils.status204(res, `Deleted comment successfully!`, deletedComment);
    } else {
      resUtils.status404(res, `Comment not found!`);
    }
  } catch (err) { next(err); }
}
