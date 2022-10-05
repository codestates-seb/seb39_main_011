package com.server.review.Service;

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

    @Autowired
    private ReviewRepository reviewRepository;

    public void createReview(Review review) {
        reviewRepository.save(review);
    }

    public void updateReview(Review review){
        reviewRepository.save(review);
    }

    public void deleteReview(long rev_id) {
        reviewRepository.deleteById(rev_id);
    }

    public Optional<Review> findReview(long rev_id) {
       return reviewRepository.findById(rev_id);}

    public List<Review> findAdminReview(long campId) {
        return reviewRepository.findByCampId(campId);
    }

    public List<Review> findUserReview(long userId) {
        return  reviewRepository.findByUserId(userId);
    }
}
