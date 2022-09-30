package com.server.camp.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CampPutDto {

    private Long camp_id;
    private String name;
    private int price;
    private String note;
    private String place;
    private String phone;
    private int capacity;
    private String file_path;
}
