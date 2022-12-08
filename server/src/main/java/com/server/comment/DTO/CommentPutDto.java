package com.server.comment.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentPutDto {
    private Long revId;
    private Long commentId;
    private String message;
}
