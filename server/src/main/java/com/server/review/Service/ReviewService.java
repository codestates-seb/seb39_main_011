package com.server.review.Service;

import com.server.review.Dto.ReviewPostDto;
import com.server.review.Dto.ReviewResponseDto;
import com.server.review.Entity.Review;
import com.server.review.Repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.Date;

@Service
@RequiredArgsConstructor
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public void createReview(Review review){
         reviewRepository.save(review);
    }
}
