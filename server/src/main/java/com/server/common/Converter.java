package com.server.common;

public interface Converter<CampDto, Camp> {
    Camp toDto(CampDto entity);
    CampDto toEntity(Camp dto);
}
