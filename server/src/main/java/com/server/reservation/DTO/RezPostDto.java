package com.server.reservation.DTO;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Setter
@Getter
public class RezPostDto {

    @NotBlank
    private String name;
    private String date;
    private String phone;
    private String note;
    private int quantity;
    private int price;
}