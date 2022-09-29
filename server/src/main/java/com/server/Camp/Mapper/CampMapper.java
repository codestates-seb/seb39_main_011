package com.server.Camp.Mapper;

import com.server.Camp.DTO.CampPostDto;
import com.server.Camp.DTO.CampPutDto;
import com.server.Camp.DTO.CampResponseDto;
import com.server.Camp.Entity.Camp;
import org.springframework.stereotype.Component;

@Component
public class CampMapper {
    public Camp campPostDtoToCamp(CampPostDto campPostDto) {
        return new Camp(0L,
                campPostDto.getName(),
                campPostDto.getPrice(),
                campPostDto.getNote(),
                campPostDto.getPlace(),
                campPostDto.getPhone(),
                campPostDto.getCapacity(),
                0
                );
    }

    public Camp campPutDtoToCamp(CampPutDto campPutDto) {
        return new Camp(
                campPutDto.getCamp_id(),
                campPutDto.getName(),
                campPutDto.getPrice(),
                campPutDto.getNote(),
                campPutDto.getPlace(),
                campPutDto.getPhone(),
                campPutDto.getCapacity(),
                0
        );
    }

    public CampResponseDto campToCampResponseDto(Camp camp) {
        return new CampResponseDto(
                camp.getCamp_id(),
                camp.getName(),
                camp.getPlace(),
                camp.getPrice(),
                camp.getStar_total());
    }
}
