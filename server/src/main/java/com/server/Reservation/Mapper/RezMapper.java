package com.server.Reservation.Mapper;

import com.server.Reservation.DTO.RezPostDto;
import com.server.Reservation.Entity.Reservation;
import org.springframework.stereotype.Component;

@Component
public class RezMapper {
    public Reservation rezPostDtoToRez(RezPostDto rezPostDto) {
        return new Reservation(0L,
                rezPostDto.getName(),
                rezPostDto.getDate(),
                rezPostDto.getPhone(),
                rezPostDto.getNote(),
                rezPostDto.getPrice(),
                rezPostDto.getQuantity());
    }
}
