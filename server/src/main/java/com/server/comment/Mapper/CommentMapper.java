package com.server.comment.Mapper;

import com.server.comment.DTO.CommentPostDto;
import com.server.comment.Entity.Comment;
import com.server.comment.DTO.CommentPutDto;
import com.server.review.Entity.Review;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class CommentMapper {

    public Comment commentPostDtoToComment(CommentPostDto commentPostDto){
        Comment comment = new Comment();
        Review review = new Review();

        review.setRevId(commentPostDto.getRev_id());
        comment.setMessage(commentPostDto.getMessage());
        comment.setDate(LocalDateTime.now());

        comment.setReview(review);
        return comment;

    }

    public Comment commentPutDtoToComment(CommentPutDto commentPutDto) {
        Comment comment = new Comment();

        comment.setMessage(commentPutDto.getMessage());
        comment.setDate(LocalDateTime.now());

        return comment;
    }


}
