package com.server.camp.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CampDto {
    private Long campId;
    private Long userId;
    private String name;
    private int price;
    private String note;
    private String place;
    private String phone;
    private int capacity;
    private double starAge;
    private String file_path;
}
