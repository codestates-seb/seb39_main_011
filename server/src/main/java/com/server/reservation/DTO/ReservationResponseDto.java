package com.server.reservation.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
public class ReservationResponseDto {
    private Long rezId;
    private Long userId;
    private Long campId;
    private String name;
    private LocalDate date;
    private String phone;
    private String note;
    private int price;
    private int quantity;
    private String campName;
    private String campFile_path;
}
