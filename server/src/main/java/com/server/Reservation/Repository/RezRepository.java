package com.server.Reservation.Repository;

import com.server.Reservation.Entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RezRepository extends JpaRepository<Reservation, Long> {
    
}
