package com.server.Camp.Service;

import com.server.Camp.Entity.Camp;
import com.server.Camp.Repository.CampRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CampService {

    @Autowired
    private CampRepository campRepository;

    public void createCamp(Camp camp) {
        campRepository.save(camp);
    }

    public void updateCamp(Camp camp) {
        campRepository.save(camp);
    }

    public void deleteCamp(long camp_id) {
        campRepository.deleteById(camp_id);
    }

    public Optional<Camp> findCamp(long camp_id) {
        return campRepository.findById(camp_id);}

    public List<Camp> findCamps() {
        return campRepository.findAll();
    }

}
