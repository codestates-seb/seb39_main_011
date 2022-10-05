package com.server.reservation.Service;

import com.server.reservation.Entity.Reservation;
import com.server.reservation.Repository.RezRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RezService {

    @Autowired
    private RezRepository rezRepository;

    public void createRez(Reservation reservation) {
        rezRepository.save(reservation);
    }

    public void deleteRez(long rez_id) {
        rezRepository.deleteById(rez_id);
    }

    public List<Reservation> findRez(long userId) {
            return rezRepository.findByUserId(userId);
    }

    public List<Reservation> findAdminRez(long campId) { return rezRepository.findByCampId(campId);}
}
