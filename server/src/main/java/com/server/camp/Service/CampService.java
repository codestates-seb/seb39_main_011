package com.server.camp.Service;

import com.server.camp.Entity.Camp;
import com.server.camp.Repository.CampRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
