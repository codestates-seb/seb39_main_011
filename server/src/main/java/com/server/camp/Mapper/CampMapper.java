package com.server.camp.Mapper;

import com.server.camp.DTO.CampPostDto;
import com.server.camp.DTO.CampPutDto;
import com.server.camp.DTO.CampResponseDto;
import com.server.camp.entity.Camp;
import com.server.review.Entity.Review;
import org.springframework.stereotype.Component;

@Component
public class CampMapper {
    public Camp campPostDtoToCamp(CampPostDto campPostDto) {
        Camp camp = new Camp();

        camp.setName(campPostDto.getName());
        camp.setPrice(campPostDto.getPrice());
        camp.setNote(campPostDto.getNote());
        camp.setPlace(campPostDto.getPlace());
        camp.setPhone(campPostDto.getPhone());
        camp.setCapacity(campPostDto.getCapacity());
        camp.setFile_path(campPostDto.getFile_path());
        return camp;
    }


//        return new Camp(
//                campPostDto.getName(),
//                campPostDto.getPrice(),
//                campPostDto.getNote(),
//                campPostDto.getPlace(),
//                campPostDto.getPhone(),
//                campPostDto.getCapacity(),
//                0
//                );


    public Camp campPutDtoToCamp(CampPutDto campPutDto) {
        return new Camp(
                campPutDto.getCamp_id(),
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
                camp.getCamp_id(),
                camp.getName(),
                camp.getPlace(),
                camp.getPrice(),
                camp.getStar_total(),
                camp.getFile_path());
    }
}
