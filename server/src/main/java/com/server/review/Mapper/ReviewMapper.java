package com.server.review.Mapper;

import com.server.comment.Repository.CommentRepository;
import com.server.comment.Service.CommentService;
import com.server.reservation.Repository.RezRepository;
import com.server.reservation.Service.RezService;
import com.server.review.Dto.ReviewPutDto;
import com.server.review.Dto.ReviewPostDto;
import com.server.review.Dto.ReviewResponseDto;
import com.server.review.Entity.Review;
import com.server.user.Entity.User;
import com.server.user.Service.UserService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@AllArgsConstructor
public class ReviewMapper {
    private final RezRepository rezRepository;
    private final CommentRepository commentRepository;
    private final UserService userService;
    private final RezService rezService;
    private final CommentService commentService;


    public Review reviewPostDtoToReview(ReviewPostDto reviewPostDto) {
        Long rezId = reviewPostDto.getRezId();
        Long userId = reviewPostDto.getUserId();
        return new Review(0L,
                reviewPostDto.getUserId(),
                reviewPostDto.getCampId(),
                reviewPostDto.getRezId(),
                userService.getName(userId),
                reviewPostDto.getReview(),
                LocalDateTime.now(),
                rezService.findDate(rezId),
                reviewPostDto.getStar(),
                reviewPostDto.getFile_path());
    }

    public Review reviewPutDtoToReview(ReviewPutDto reviewPatchDto) {
        Long rezId = reviewPatchDto.getRezId();
        Long userId = reviewPatchDto.getUserId();
        return new Review(reviewPatchDto.getRevId(),
                reviewPatchDto.getUserId(),
                reviewPatchDto.getCampId(),
                reviewPatchDto.getRezId(),
                userService.getName(userId),
                reviewPatchDto.getReview(),
                LocalDateTime.now(),
                rezService.findDate(rezId),
                reviewPatchDto.getStar(),
                reviewPatchDto.getFile_path()
                );
    }

    public ReviewResponseDto reviewToReviewResponseDto(Review review) {
        return new ReviewResponseDto(
                review.getRevId(),
                review.getUserId(),
                review.getCampId(),
                review.getRezId(),
                review.getWriter(),
                review.getReview(),
                review.getDate(),
                review.getVisit(),
                review.getStar(),
                review.getFile_path(),
                review.getComments());
    }
}
