package com.server.detail;

import com.server.camp.entity.Camp;
import com.server.camp.service.CampService;
//import com.server.reservation.ReservationDate;
import com.server.reservation.Service.RezService;
import com.server.review.Entity.Review;
import com.server.review.Service.ReviewService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

@Service
public class DetailService {
    private final ReviewService reviewService;
    private final CampService campService;

    private final RezService rezService;

    public DetailService(ReviewService reviewService, CampService campService, RezService rezService) {
        this.reviewService = reviewService;
        this.campService = campService;
        this.rezService = rezService;
    }

    public DetailDto combineCampInfoWithReview(Long campId) {
        Optional<Camp> camp = campService.getCampById(campId);
        if (!camp.isPresent()) {

            return DetailDto.init();
        }
        List<Review> reviews = reviewService.findAdminReview(campId);
        reviews = Optional.ofNullable(reviews).orElse(Collections.emptyList());
        Map<LocalDate, Integer> map = new TreeMap<>();

        LocalDate now = LocalDate.now();
        LocalDate twoMonthLater = now.plusMonths(2);
        int capacity = campService.getCampCapacity(campId);
        for (LocalDate date = now; date.isBefore(twoMonthLater); date = date.plusDays(1)) {
            int used = rezService.findRezByDate(date);
            LocalDate targetDate = date;
            map.put(targetDate, capacity - used);
        }

        return DetailDto.of(reviews, camp, map);
    }
}


