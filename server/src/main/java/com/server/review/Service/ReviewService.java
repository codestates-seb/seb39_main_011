package com.server.review.Service;

import com.server.camp.service.CampService;
import com.server.comment.Repository.CommentRepository;
import com.server.comment.Service.CommentService;
import com.server.review.Entity.Review;
import com.server.review.Repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final CommentService commentService;
    private final CampService campService;

    @Autowired
    private ReviewRepository reviewRepository;

    public void createReview(Review review) {

        reviewRepository.save(review);
//        campService.setStar(review.getCampId());
    }

    public void updateReview(Review review){

        reviewRepository.save(review);
//        campService.setStar(review.getCampId());
    }

    public void deleteReview(long revId) {

        reviewRepository.deleteById(revId);
    }

    public Optional<Review> findReview(long revId) {return reviewRepository.findById(revId);}

    public List<Review> findAdminReview(long campId) {
        return reviewRepository.findByCampId(campId);
    }

    public List<Review> findUserReview(long userId) {
        return reviewRepository.findByUserId(userId);
    }

    public int findRevByCount(long campId) {
        int result = Math.toIntExact(reviewRepository.countByReview(campId));
        return result;
    }


}
