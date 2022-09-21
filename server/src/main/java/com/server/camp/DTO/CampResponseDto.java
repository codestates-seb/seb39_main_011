package com.server.camp.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@AllArgsConstructor
public class CampResponseDto {
    private String name;
    private String place;
    private int price;
    private int star_total;
}
