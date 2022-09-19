package com.server.review.Mapper;

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

//    public ReviewResponseDto reviewToReviewResponseDto(Review review) {
//        return new ReviewResponseDto(
//                review.getRev_id(),
//                review.getWriter(),
//                review.getReview(),
//                review.getDate(),
//                review.getVisit(),
//                review.getStar());
//    }
}
