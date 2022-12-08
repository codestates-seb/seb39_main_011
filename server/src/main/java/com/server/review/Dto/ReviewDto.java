package com.server.review.Dto;

import com.server.comment.Entity.Comment;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class ReviewDto {
    private Long revId;
    private Long userId;
    private Long campId;
    private Long rezId;
    private String writer;  //유저정보에서 들고
    private String review;
    private LocalDateTime date;
    private String visit;  //예약정보에서 들고옴
    private int star;
    private String file_path;
    private List<Comment> comments = new ArrayList<>();
}
