package com.server.review.Dto;

import com.server.comment.Entity.Comment;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
public class ReviewPutDto {
    private Long revId;
    private Long campId;
    private Long userId;
    private Long rezId;
    private String review;
    private int star;
    private String file_path;
    private List<Comment> comments = new ArrayList<>();
}
