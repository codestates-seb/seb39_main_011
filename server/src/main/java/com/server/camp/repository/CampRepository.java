package com.server.camp.repository;

import com.server.camp.DTO.UpdateStarDto;
import com.server.camp.entity.Camp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CampRepository extends JpaRepository<Camp, Long> {
    List<Camp> findByUserId(Long userId);

    @Query(value = "SELECT avg(star) FROM review WHERE camp_id = ?", nativeQuery = true)
    double findStarAvg(Long campId);

    @Query(value = "update camp set starAge =? where camp_Id =?", nativeQuery = true)
    double updateStarAge(UpdateStarDto updateStarDto);

    @Query(value = "SELECT name FROM camp WHERE camp_id=?", nativeQuery = true)
    String findCampName(Long campId);

    @Query(value = "SELECT file_path FROM camp WHERE camp_id=?", nativeQuery = true)
    String findFile_Path(Long campId);

}
