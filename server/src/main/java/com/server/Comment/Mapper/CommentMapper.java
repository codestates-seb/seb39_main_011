package com.server.Comment.Mapper;

import com.server.Comment.DTO.CommentPostDto;
import com.server.Comment.Entity.Comment;
import com.server.Comment.Repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class CommentMapper {

    public Comment commentPostDtoToComment(CommentPostDto commentPostDto){
        return new Comment(0L,
                commentPostDto.getMassage(),
                LocalDateTime.now());
    }


}
