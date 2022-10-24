package com.server.camp.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Camp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long campId;
    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private int price;

    @Column(nullable = false)
    private String note;

    @Column(nullable = false)
    private String place;

    @Column(nullable = false)
    private String phone;


    @Column(nullable = false)
    private int capacity;

    @Column(nullable = true)
    private double starAge;   //리뷰부분별점 총점 / 리뷰갯수로 표현

    @Column
    private String file_path;

    public Camp(Long userId, String name, int price, String note, String place, String phone, int capacity, int starAge, String file_path) {
        this.userId = userId;
        this.name = name;
        this.price = price;
        this.note = note;
        this.place = place;
        this.phone = phone;
        this.capacity = capacity;
        this.starAge = starAge;
        this.file_path = file_path;
    }


}
