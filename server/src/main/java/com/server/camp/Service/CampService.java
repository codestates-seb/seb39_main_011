package com.server.camp.Service;

import com.server.camp.Entity.Camp;
import com.server.camp.Repository.CampRepository;
import com.server.review.Entity.Review;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
