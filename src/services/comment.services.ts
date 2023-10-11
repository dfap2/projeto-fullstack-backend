import { Comment } from "../entities";
import { CommentCreate, CommentRead, CommentUpdate } from "../interface";
import { commentRepository } from "../repositories";

const create = async (payload: CommentCreate): Promise<Comment> => {
    const comment: Comment = commentRepository.create(payload);
    await commentRepository.save(comment);

    return comment;
};

const retrieve = async (id: number): Promise<CommentRead> => {
    const comments: CommentRead = await commentRepository.findBy({
        anouncement: { id },
    });

    return comments;
};

const update = async (
    payload: CommentUpdate,
    foundComment: Comment
): Promise<Comment> => {
    const comment: Comment = await commentRepository.save({
        ...foundComment,
        ...payload,
    });

    return comment;
};

const destroy = async (id: number): Promise<void> => {
    await commentRepository.delete({ id });
};

export default { create, retrieve, update, destroy };
