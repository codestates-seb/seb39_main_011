package com.server.Comment.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentPutDto {
    private Long comment_id;
    private String message;
}