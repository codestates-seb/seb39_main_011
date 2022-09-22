package com.server.Reservation.DTO;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class RezPostDto {
    private String name;
    private String date;
    private String phone;
    private String note;
    private int quantity;
    private int price;
}
