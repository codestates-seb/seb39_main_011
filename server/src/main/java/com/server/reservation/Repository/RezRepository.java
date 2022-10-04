package com.server.reservation.Repository;

import com.server.reservation.Entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.List;

public interface RezRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByUserId(Long userId);
}
