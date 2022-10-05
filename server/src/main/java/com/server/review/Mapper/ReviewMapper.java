package com.server.review.Mapper;

import com.server.reservation.Repository.RezRepository;
import com.server.review.Dto.ReviewPutDto;
import com.server.review.Dto.ReviewPostDto;
import com.server.review.Entity.Review;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@AllArgsConstructor
public class ReviewMapper {
    private final RezRepository rezRepository;


    public Review reviewPostDtoToReview(ReviewPostDto reviewPostDto) {
        return new Review(0L,
                reviewPostDto.getUserId(),
                reviewPostDto.getCampId(),
                "a",
                reviewPostDto.getReview(),
                LocalDateTime.now(),
                0,
                reviewPostDto.getStar(),
                reviewPostDto.getFile_path()
        );
    }

    public Review reviewPutDtoToReview(ReviewPutDto reviewPatchDto) {
        return new Review(reviewPatchDto.getRev_id(),
                reviewPatchDto.getUserId(),
                reviewPatchDto.getCampId(),
                "a",
                reviewPatchDto.getReview(),
                LocalDateTime.now(),
                0,
                reviewPatchDto.getStar(),
                reviewPatchDto.getFile_path()
                );
    }
}
