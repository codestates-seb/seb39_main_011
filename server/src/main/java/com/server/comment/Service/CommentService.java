package com.server.comment.Service;

import com.server.comment.Entity.Comment;
import com.server.comment.Repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommentService {

    @Autowired
    protected CommentRepository commentRepository;

    public void createComment(Comment comment) {commentRepository.save(comment);}

    public void updateComment(Comment comment) {
        commentRepository.save(comment);
    }

    public void deleteComment(long commentId) { commentRepository.deleteById(commentId);}

}
