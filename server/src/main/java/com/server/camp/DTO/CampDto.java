package com.server.camp.DTO;

import lombok.Getter;

import javax.persistence.Column;

@Getter
public class CampDto {
    private Long camp_id;
    private Long rev_id;
    private String name;
    private int price;
    private String note;
    private String place;
    private String phone;
    private int capacity;
    private int star_total;

    public CampDto(Long camp_id, Long rev_id, String name, int price, String note, String place, String phone, int capacity, int star_total) {
        this.camp_id = camp_id;
        this.rev_id = rev_id;
        this.name = name;
        this.price = price;
        this.note = note;
        this.place = place;
        this.phone = phone;
        this.capacity = capacity;
        this.star_total = star_total;
    }
}
