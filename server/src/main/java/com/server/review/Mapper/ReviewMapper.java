package com.server.review.Mapper;

import com.server.review.Dto.ReviewPatchDto;
import com.server.review.Dto.ReviewPostDto;
import com.server.review.Dto.ReviewResponseDto;
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
        );
    }

    public Review reviewPatchDtoToReview(ReviewPatchDto reviewPatchDto) {
        return new Review(reviewPatchDto.getRev_id(),
                "a",
                reviewPatchDto.getReview(),
                LocalDateTime.now(),
                0,
                reviewPatchDto.getStar()
                );
    }
}
