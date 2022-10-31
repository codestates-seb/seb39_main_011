package com.server.reservation.Mapper;

import com.server.camp.repository.CampRepository;
import com.server.reservation.DTO.ReservationResponseDto;
import com.server.reservation.DTO.RezPostDto;
import com.server.reservation.Entity.Reservation;
import org.springframework.stereotype.Component;

@Component
public class RezMapper {

    public final CampRepository campRepository;

    public RezMapper(CampRepository campRepository) {
        this.campRepository = campRepository;
    }

    public Reservation rezPostDtoToRez(RezPostDto rezPostDto) {
        return new Reservation(0L,
                rezPostDto.getUserId(),
                rezPostDto.getCampId(),
                rezPostDto.getName(),
                rezPostDto.getDate(),
                rezPostDto.getPhone(),
                rezPostDto.getNote(),
                rezPostDto.getPrice(),
                rezPostDto.getQuantity());
    }

    public ReservationResponseDto resercationToResercationResponseDto(Reservation reservation) {
        return new ReservationResponseDto(
                reservation.getRezId(),
                reservation.getUserId(),
                reservation.getCampId(),
                reservation.getName(),
                reservation.getDate(),
                reservation.getPhone(),
                reservation.getNote(),
                reservation.getPrice(),
                reservation.getQuantity(),
                campRepository.findCampName(reservation.getCampId()),
                campRepository.findFile_Path(reservation.getCampId())
        );
    }
}
