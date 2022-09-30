package com.server.review.Dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ReviewPostDto {

    private String review;
    private int star;

    private String file_path;

}
