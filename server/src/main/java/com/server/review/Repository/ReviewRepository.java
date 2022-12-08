package com.server.review.Repository;

import com.server.comment.Entity.Comment;
import com.server.reservation.Entity.Reservation;
import com.server.review.Entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;
import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    List<Review> findByCampId(Long campId);
    List<Review> findByUserId(Long userId);

    @Query(value = "SELECT star FROM review WHERE camp_id = ?", nativeQuery = true)
    List<Review> findCampIdByStar(Long campId);

    @Query(value = "SELECT COUNT(review) FROM review WHERE camp_id =?", nativeQuery = true)
    Long countByReview(Long campId);

}
