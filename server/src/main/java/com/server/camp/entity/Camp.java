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
    private Long camp_id;

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

    @Column(nullable = false)
    private int star_total;   //리뷰부분별점 총점 / 리뷰갯수로 표현

    @Column
    private String file_path;

}
