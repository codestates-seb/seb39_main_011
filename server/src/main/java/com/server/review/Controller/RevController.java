package com.server.review.Controller;

import com.server.comment.Entity.Comment;
import com.server.comment.Service.CommentService;
import com.server.review.Dto.ReviewPutDto;
import com.server.review.Dto.ReviewPostDto;
import com.server.review.Dto.ReviewResponseDto;
import com.server.review.Entity.Review;
import com.server.review.Mapper.ReviewMapper;
import com.server.review.Service.ReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class RevController {
    private final ReviewService reviewService;
    private final CommentService commentService;
    private final ReviewMapper mapper;

    public RevController(ReviewService reviewService, CommentService commentService, ReviewMapper mapper) {
        this.reviewService = reviewService;
        this.commentService = commentService;
        this.mapper = mapper;
    }

    //리뷰등록
    @PostMapping("/client/rev")
    public ResponseEntity postReview(@RequestBody ReviewPostDto reviewPostDto )  {

        Review review = mapper.reviewPostDtoToReview(reviewPostDto);
        reviewService.createReview(review);


        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    //리뷰수정
    @PutMapping("/client/rev/{rev-id}")
    public ResponseEntity putReview(@PathVariable("rev-id") long revId,
                                      @RequestBody ReviewPutDto reviewPutDto) {
        reviewPutDto.setRevId(revId);
        reviewService.updateReview(mapper.reviewPutDtoToReview(reviewPutDto));
        return new ResponseEntity(HttpStatus.OK);
    }

    //리뷰삭제
    @DeleteMapping("/client/rev/{rev-id}")
    public ResponseEntity deleteReview(@PathVariable("rev-id")long revId) {
        reviewService.deleteReview(revId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    //리뷰조회
    @GetMapping("/{rev-id}")
    public ResponseEntity<Review> getReview(@Valid @PathVariable("rev-id")long revId) {
        Optional<Review> review = reviewService.findReview(revId);
        return new ResponseEntity(review,HttpStatus.OK);
    }

    //기업리뷰전체조회
    @GetMapping("/admin/rev/{camp-id}")
    public ResponseEntity getAdminReview(@PathVariable("camp-id") long campId) {
        List<Review> response = reviewService.findAdminReview(campId);
        return new ResponseEntity(response,HttpStatus.OK);
    }

    //유져리뷰전체조회
    @GetMapping("/client/rev/{user-id}")
    public ResponseEntity getUserReview(@PathVariable("user-id") long userId) {
        List<Review> reviews = reviewService.findUserReview(userId);

        List<ReviewResponseDto> response =
                reviews.stream()
                        .map(Review -> mapper.reviewToReviewResponseDto(Review))
                        .collect(Collectors.toList());
        return new ResponseEntity(response,HttpStatus.OK);
    }



}
