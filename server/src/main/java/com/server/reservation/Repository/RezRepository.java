package com.server.reservation.Repository;

import com.server.reservation.Entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RezRepository extends JpaRepository<Reservation, Long> {
    
}
