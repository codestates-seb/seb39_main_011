package com.server.common;

import com.server.camp.DTO.CampDto;
import com.server.camp.entity.Camp;

public interface Converter<CampDto, Camp> {
    Camp toDto(CampDto entity);
    CampDto toEntity(Camp dto);
}
