package com.server.Comment.Mapper;

import com.server.Comment.DTO.CommentPostDto;
import com.server.Comment.DTO.CommentPutDto;
import com.server.Comment.Entity.Comment;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class CommentMapper {

    public Comment commentPostDtoToComment(CommentPostDto commentPostDto){
        return new Comment(0L,
                commentPostDto.getMessage(),
                LocalDateTime.now());
    }

    public Comment commentPutDtoToComment(CommentPutDto commentPutDto) {
        return new Comment(
                commentPutDto.getComment_id(),
                commentPutDto.getMessage(),
                LocalDateTime.now()
        );
    }


}
