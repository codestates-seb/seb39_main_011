package com.server.reservation.Mapper;

import com.server.reservation.DTO.RezPostDto;
import com.server.reservation.Entity.Reservation;
import org.springframework.stereotype.Component;

@Component
public class RezMapper {
    public Reservation rezPostDtoToRez(RezPostDto rezPostDto) {
        return new Reservation(0L,
                rezPostDto.getUser_id(),
                rezPostDto.getCamp_id(),
                rezPostDto.getName(),
                rezPostDto.getDate(),
                rezPostDto.getPhone(),
                rezPostDto.getNote(),
                rezPostDto.getPrice(),
                rezPostDto.getQuantity());
    }
}
