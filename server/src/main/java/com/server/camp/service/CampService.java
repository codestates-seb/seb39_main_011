package com.server.camp.service;

import com.server.camp.DTO.UpdateStarDto;
import com.server.camp.entity.Camp;
import com.server.camp.repository.CampRepository;
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

    public Long createCamp(Camp camp) {
        campRepository.save(camp);
        return camp.getCampId();
    }

    public void updateCamp(Camp camp) {
        campRepository.save(camp);
    }

    public void deleteCamp(long campId) {
        campRepository.deleteById(campId);
    }

    public List<Camp> findCamp(long userId) {
        return campRepository.findByUserId(userId);}

    public List<Camp> findCamps() {
        return campRepository.findAll();
    }

    public Optional<Camp> getCampById(Long campId) {
        return campRepository.findById(campId);
    }

//    public void setStar(Long campId) {
//        Double starAvg = campRepository.findStarAvg(campId);
//
//        if (starAvg == null) {
//            starAvg = 0.0;
//        }
//
//        starAvg = (double) (Math.round(starAvg*10));
//        starAvg = starAvg / 10;
//
//        UpdateStarDto updateStarDto = new UpdateStarDto();
//        updateStarDto.setCampId(campId);
//        updateStarDto.setStarAge(starAvg);
//
//        campRepository.updateStarAge(updateStarDto);
    }

//}
