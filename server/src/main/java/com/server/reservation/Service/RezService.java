package com.server.reservation.Service;

import com.server.reservation.Entity.Reservation;
import com.server.reservation.Repository.RezRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class RezService {

    @Autowired
    private RezRepository rezRepository;

    public void createRez(Reservation reservation) {
        rezRepository.save(reservation);
    }

    public void deleteRez(long rezId) {
        rezRepository.deleteById(rezId);
    }

    public List<Reservation> findRez(long userId) {
            return rezRepository.findByUserId(userId);
    }

    public List<Reservation> findAdminRez(long campId) { return rezRepository.findByCampId(campId);}

    public int findRezByDate(LocalDate date) {
        int result = Math.toIntExact( rezRepository.countByDate(date));
        return result;}

    public String findDate(Long rezId) {return rezRepository.findReservationByDate(rezId);}
}
