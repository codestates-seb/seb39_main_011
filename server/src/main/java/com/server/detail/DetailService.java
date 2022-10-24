package com.server.detail;

import com.server.camp.entity.Camp;
import com.server.camp.service.CampService;
import com.server.reservation.ReservationDate;
import com.server.review.Entity.Review;
import com.server.review.Service.ReviewService;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class DetailService {
    private final ReviewService reviewService;
    private final CampService campService;
    private final ReservationDate reservationDate;

    public DetailService(ReviewService reviewService, CampService campService, ReservationDate reservationDate) {
        this.reviewService = reviewService;
        this.campService = campService;
        this.reservationDate = reservationDate;
    }

    public DetailDto combineCampInfoWithReview(Long campId) {
        Optional<Camp> camp = campService.getCampById(campId);
        if(!camp.isPresent()) {
            return DetailDto.init();
        }
        List<Review> reviews = reviewService.findAdminReview(campId);
        reviews = Optional.ofNullable(reviews).orElse(Collections.emptyList());

        Map<String, Integer> map = reservationDate.doSomeThing(campId);
        return DetailDto.of(reviews, camp, map);
    }
}
