package com.server.camp.DTO;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CampPostDto {

    private String name;
    private int price;
    private String note;
    private String place;
    private String phone;
    private int capacity;
    private String file_path;
}
