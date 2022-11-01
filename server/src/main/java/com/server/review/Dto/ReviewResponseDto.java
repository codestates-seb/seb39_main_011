package com.server.review.Dto;

import com.server.comment.Entity.Comment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class ReviewResponseDto {
    private Long revId;
    private Long userId;
    private Long campId;
    private Long rezId;
    private String writer;
    private String review;
    private LocalDateTime date;
    private String visit;
    private int star;
    private String file_path;
    private List<Comment> comments = new ArrayList<>();
    private String campFile_path;


}
