package com.server.Comment.Service;

import com.server.Comment.Entity.Comment;
import com.server.Comment.Repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommentService {

    @Autowired
    protected CommentRepository commentRepository;

    public void createComment(Comment comment) {commentRepository.save(comment);}
}
