package com.server.review.Controller;

import com.server.review.Dto.ReviewPostDto;
import com.server.review.Entity.Review;
import com.server.review.Mapper.ReviewMapper;
import com.server.review.Service.ReviewService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/custom/rev")
public class RevController {
    private final ReviewService reviewService;
    private final ReviewMapper mapper;

    public RevController(ReviewService reviewService, ReviewMapper mapper) {
        this.reviewService = reviewService;
        this.mapper = mapper;
    }

    //리뷰등록
    @PostMapping
    public ResponseEntity postReview(@RequestBody ReviewPostDto reviewPostDto) {

        Review review = mapper.reviewPostDtoToReview(reviewPostDto);
        reviewService.createReview(review);


        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
