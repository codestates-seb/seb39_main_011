package com.server.reservation.DTO;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

@Setter
@Getter
public class RezPostDto {

    private Long userId;
    private Long campId;
    private String name;
    private LocalDate date;
    private String phone;
    private String note;
    private int quantity;
    private int price;
}
