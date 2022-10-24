package com.server.camp.Mapper;

import com.server.camp.DTO.CampPostDto;
import com.server.camp.DTO.CampPutDto;
import com.server.camp.DTO.CampResponseDto;
import com.server.camp.entity.Camp;
import com.server.review.Entity.Review;
import com.server.review.Service.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class CampMapper {
    private final ReviewService reviewService;

    public Camp campPostDtoToCamp(CampPostDto campPostDto) {

        return new Camp(
                campPostDto.getUserId(),
                campPostDto.getName(),
                campPostDto.getPrice(),
                campPostDto.getNote(),
                campPostDto.getPlace(),
                campPostDto.getPhone(),
                campPostDto.getCapacity(),
                0,
                campPostDto.getFile_path()
        );
    }


    public Camp campPutDtoToCamp(CampPutDto campPutDto) {
        return new Camp(
                campPutDto.getCampId(),
                campPutDto.getUserId(),
                campPutDto.getName(),
                campPutDto.getPrice(),
                campPutDto.getNote(),
                campPutDto.getPlace(),
                campPutDto.getPhone(),
                campPutDto.getCapacity(),
                0,
                campPutDto.getFile_path()
        );
    }

    public CampResponseDto campToCampResponseDto(Camp camp) {
        return new CampResponseDto(
                camp.getCampId(),
                camp.getName(),
                camp.getPlace(),
                camp.getPrice(),
                camp.getStarAge(),
                camp.getFile_path());
    }

}
