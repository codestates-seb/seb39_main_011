package com.server.review.Mapper;

import com.server.review.Dto.ReviewPutDto;
import com.server.review.Dto.ReviewPostDto;
import com.server.review.Entity.Review;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class ReviewMapper {
    public Review reviewPostDtoToReview(ReviewPostDto reviewPostDto) {
        return new Review(0L,
                "a",
                reviewPostDto.getReview(),
                LocalDateTime.now(),
                0,
                reviewPostDto.getStar()
//                null,
//                null
        );
    }

    public Review reviewPutDtoToReview(ReviewPutDto reviewPatchDto) {
        return new Review(reviewPatchDto.getRev_id(),
                "a",
                reviewPatchDto.getReview(),
                LocalDateTime.now(),
                0,
                reviewPatchDto.getStar()
//                null,
//                null
                );
    }
}
