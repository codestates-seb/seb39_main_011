package com.server.review.Controller;

import com.server.review.Dto.ReviewPatchDto;
import com.server.review.Dto.ReviewPostDto;
import com.server.review.Entity.Review;
import com.server.review.Mapper.ReviewMapper;
import com.server.review.Service.ReviewService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

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

    //리뷰수정
    @PatchMapping("/{rev-id}")
    public ResponseEntity patchReview(@PathVariable("rev-id") long rev_id,
                                      @RequestBody ReviewPatchDto reviewPatchDto) {
        reviewPatchDto.setRev_id(rev_id);
        reviewService.updateReview(mapper.reviewPatchDtoToReview(reviewPatchDto));
        return new ResponseEntity(HttpStatus.OK);
    }

    //리뷰삭제
    @DeleteMapping("/{rev-id}")
    public ResponseEntity deleteReview(@PathVariable("rev-id")long rev_id) {
        reviewService.deleteReview(rev_id);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    //리뷰조회
    @GetMapping("/{rev-id}")
    public ResponseEntity<Review> getReview(@PathVariable("rev-id")long rev_id) {
        Optional<Review> review = reviewService.findReview(rev_id);
        return new ResponseEntity(review,HttpStatus.OK);
    }

    //리뷰전체조회
    @GetMapping
    public ResponseEntity getReview() {
        List<Review> response = reviewService.findReviews();
        return new ResponseEntity(response,HttpStatus.OK);
    }



}
