package com.server.review.Dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ReviewPutDto {
    private Long rev_id;
    private Long campId;
    private Long userId;
    private String review;
    private int star;
    private String file_path;
}
