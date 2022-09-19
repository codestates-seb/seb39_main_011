package com.server.review.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.Date;

@Getter
@AllArgsConstructor
public class ReviewResponseDto {
    private String writer;

    private String review;

    private LocalDateTime date;

    private int visit;

    private int star;
}
