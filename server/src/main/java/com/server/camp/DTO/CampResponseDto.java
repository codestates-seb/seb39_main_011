package com.server.camp.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CampResponseDto {
    private Long campId;
    private String name;
    private String place;
    private int price;
    private double starAge;
    private String file_path;
    private int reviewCount;


}
