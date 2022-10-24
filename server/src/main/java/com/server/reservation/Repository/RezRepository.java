package com.server.reservation.Repository;

import com.server.reservation.Entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface RezRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByUserId(Long userId);
    List<Reservation> findByCampId(Long campId);

    int findReservationByDate(LocalDateTime Date);

    @Query(value = "SELECT date FROM reservation WHERE rez_id = ?", nativeQuery = true)
    String findReservationByDate(Long rezId);

}
