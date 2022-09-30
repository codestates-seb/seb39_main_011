package com.server.camp.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CampResponseDto {
    private Long camp_id;
    private String name;
    private String place;
    private int price;
    private int star_total;
    private String file_path;
}
