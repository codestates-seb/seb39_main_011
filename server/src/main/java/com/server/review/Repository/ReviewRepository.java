package com.server.review.Repository;

import com.server.reservation.Entity.Reservation;
import com.server.review.Entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    List<Review> findByCampId(Long campId);
}
