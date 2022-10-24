package com.server.review.Dto;

import com.server.comment.Entity.Comment;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
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


    public ReviewResponseDto(Long revId, Long userId, Long campId, Long rezId, String writer, String review, LocalDateTime date, String visit, int star, String file_path, List<Comment> comments) {
    }
}
