package com.server.Review.Mapper;

import com.server.Review.Dto.ReviewPutDto;
import com.server.Review.Dto.ReviewPostDto;
import com.server.Review.Entity.Review;
import com.server.Review.Repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class ReviewMapper {

    @Autowired
    private ReviewRepository reviewRepository;

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
