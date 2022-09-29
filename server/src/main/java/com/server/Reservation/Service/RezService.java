package com.server.Reservation.Service;

import com.server.Reservation.Entity.Reservation;
import com.server.Reservation.Repository.RezRepository;
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

    public List<Reservation> findRez() {return rezRepository.findAll(); }
}
